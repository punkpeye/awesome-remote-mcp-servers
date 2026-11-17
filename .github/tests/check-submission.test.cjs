'use strict';
// Offline tests: run the real inline script of check-submission.yml with stubbed fs/GitHub/fetch.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const WORKFLOW = process.env.CHECK_SUBMISSION_WORKFLOW ||
  path.join(__dirname, '..', 'workflows', 'check-submission.yml');

function loadScript() {
  const lines = fs.readFileSync(WORKFLOW, 'utf8').split('\n');
  const step = lines.findIndex(l => l.includes('- name: Validate PR submission'));
  assert.ok(step >= 0, 'validate step not found');
  const start = lines.findIndex((l, i) => i > step && /^\s+script: \|\s*$/.test(l));
  assert.ok(start >= 0, 'script block not found');
  const indent = lines[start + 1].match(/^ */)[0].length;
  const body = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].trim() !== '' && lines[i].match(/^ */)[0].length < indent) break;
    body.push(lines[i].slice(indent));
  }
  return body.join('\n');
}

const SCRIPT = loadScript();
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

const head = (name, ep, home = 'https://example.com') => `- [${name}](${home}) \`${ep}\``;
const badge = n => `  [![${n} MCP connector](https://glama.ai/mcp/connectors/com.example/${n}/badges/score.svg)](https://glama.ai/mcp/connectors/com.example/${n})`;
const marks = '  🔐 - Does things.';
const entry = (name, ep, home) => [head(name, ep, home), badge(name), marks];

async function run({ base, patch }) {
  const calls = { labels: [], removed: [], comments: [], fetches: [] };
  const github = {
    rest: {
      pulls: { listFiles: async () => ({ data: [{ filename: 'README.md', patch }] }) },
      issues: {
        addLabels: async a => { calls.labels.push(...a.labels); },
        removeLabel: async a => { calls.removed.push(a.name); },
        listComments: async () => ({ data: [] }),
        createComment: async a => { calls.comments.push(a.body.split('\n')[0]); },
      },
    },
  };
  const fakeFs = { readFileSync: () => base.join('\n') };
  const fakeRequire = m => { assert.strictEqual(m, 'fs'); return fakeFs; };
  const fakeFetch = async (url, opts = {}) => {
    calls.fetches.push(url);
    if (opts.method === 'POST') {
      return { status: 401, headers: { get: () => 'Bearer resource_metadata="x"' }, text: async () => '' };
    }
    return { status: 200 };
  };
  const context = { repo: { owner: 'o', repo: 'r' }, payload: { pull_request: { number: 1 } } };
  await new AsyncFunction('github', 'context', 'require', 'fetch', SCRIPT)(github, context, fakeRequire, fakeFetch);
  calls.probes = calls.fetches.filter(u => !u.startsWith('https://glama.ai/'));
  calls.duplicate = calls.labels.includes('duplicate');
  calls.dupComment = calls.comments.includes('<!-- duplicate-check -->');
  return calls;
}

const diff = (...lines) => ['--- a/README.md', '+++ b/README.md', '@@ -1,3 +1,3 @@', ...lines].join('\n');
const add = ls => ls.map(l => '+' + l);
const del = ls => ls.map(l => '-' + l);
const ctx = ls => ls.map(l => ' ' + l);
const A = 'https://a.example.com/mcp';

test('homepage change on the same entry is not a duplicate and not probed', async () => {
  const r = await run({
    base: ['# List', ...entry('A', A)],
    patch: diff(...del([head('A', A)]), ...add([head('A', A, 'https://example.com/guide')]), ...ctx([badge('A'), marks])),
  });
  assert.ok(!r.duplicate && !r.dupComment);
  assert.deepStrictEqual(r.probes, []);
});

test('adding a second entry for a listed endpoint is a duplicate', async () => {
  const r = await run({ base: ['# List', ...entry('A', A)], patch: diff(...add(entry('B', A))) });
  assert.ok(r.duplicate && r.dupComment);
  assert.deepStrictEqual(r.probes, []);
});

test('two new entries with the same unlisted endpoint are duplicates', async () => {
  const r = await run({ base: ['# List'], patch: diff(...add([...entry('A', A), ...entry('B', A)])) });
  assert.ok(r.duplicate && r.dupComment);
});

test('removing the old entry and adding two is a duplicate', async () => {
  const r = await run({
    base: ['# List', ...entry('A', A)],
    patch: diff(...del([head('A', A)]), ...add([head('A', A), ...entry('B', A)])),
  });
  assert.ok(r.duplicate && r.dupComment);
});

test('replacing an endpoint is fresh and probed, not duplicate', async () => {
  const B = 'https://b.example.com/mcp';
  const r = await run({
    base: ['# List', ...entry('A', A)],
    patch: diff(...del([head('A', A)]), ...add(entry('A', B))),
  });
  assert.ok(!r.duplicate);
  assert.deepStrictEqual(r.probes, [B]);
  assert.ok(r.labels.includes('endpoint-ok'));
});

test('genuinely new unique entry is probed and badge-checked', async () => {
  const r = await run({ base: ['# List', ...entry('A', A)], patch: diff(...add(entry('N', 'https://n.example.com/mcp'))) });
  assert.ok(!r.duplicate);
  assert.deepStrictEqual(r.probes, ['https://n.example.com/mcp']);
  assert.ok(r.fetches.some(u => u.startsWith('https://glama.ai/mcp/connectors/')));
});

test('description/marker/badge-only edits are not duplicates', async () => {
  const r = await run({
    base: ['# List', ...entry('A', A)],
    patch: diff(...ctx([head('A', A)]), ...del([marks]), ...add(['  🔑 - New text.'])),
  });
  assert.ok(!r.duplicate);
  assert.deepStrictEqual(r.probes, []);
});

test('case and trailing slash normalization is preserved', async () => {
  const r = await run({
    base: ['# List', ...entry('A', A)],
    patch: diff(...add(entry('B', 'HTTPS://A.Example.com/mcp/'.replace('HTTPS', 'https')))),
  });
  assert.ok(r.duplicate);
  const r2 = await run({
    base: ['# List', ...entry('A', 'https://a.example.com/mcp/')],
    patch: diff(...del([head('A', 'https://a.example.com/mcp/')]), ...add([head('A', 'https://A.example.com/mcp', 'https://e.com/g')])),
  });
  assert.ok(!r2.duplicate);
});

test('patch file headers and context lines are not parsed as entries', async () => {
  const r = await run({
    base: ['# List', ...entry('A', A)],
    patch: ['--- ' + '- [X](https://x.com) `' + A + '`', '+++ ' + '- [X](https://x.com) `' + A + '`', '@@ -1 +1 @@',
      ...ctx([head('A', A)])].join('\n'),
  });
  assert.ok(!r.duplicate);
  assert.deepStrictEqual(r.probes, []);
});

test('plain backticked URLs in prose are not entries', async () => {
  const r = await run({
    base: ['# List', 'Example: `' + A + '`', ...entry('Z', 'https://z.example.com/mcp')],
    patch: diff(...add(entry('A', A))),
  });
  assert.ok(!r.duplicate);
  assert.deepStrictEqual(r.probes, [A]);
  const r2 = await run({
    base: ['# List', ...entry('A', A)],
    patch: diff(...add(['Use `' + A + '` as the URL.'])),
  });
  assert.ok(!r2.duplicate);
});

test('already-duplicated base (2) with one updated entry stays duplicate', async () => {
  const r = await run({
    base: ['# List', ...entry('A', A), ...entry('B', A)],
    patch: diff(...del([head('B', A)]), ...add([head('B', A, 'https://example.com/guide')])),
  });
  assert.ok(r.duplicate && r.dupComment);
});
