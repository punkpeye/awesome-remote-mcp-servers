const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const workflow = fs.readFileSync(path.join(__dirname, '../workflows/check-submission.yml'), 'utf8');
const script = workflow.split('      - name: Validate PR submission\n')[1]
  .split('          script: |\n')[1]
  .split('\n').map(line => line.startsWith('            ') ? line.slice(12) : line).join('\n');
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

async function run({ marker = '🔑', status = 401, challenge = '', body = '', fails = false }) {
  const comments = [];
  const labels = [];
  const probes = [];
  const added = ['- [Example](https://example.com) `https://mcp.example.com`',
    '  [![Example](https://glama.ai/mcp/connectors/com.example/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.example/mcp)',
    `  ${marker} - Example image tools.`];
  const github = { rest: {
    pulls: { listFiles: async () => ({ data: [{ filename: 'README.md', patch: added.map(l => '+' + l).join('\n') }] }) },
    issues: {
      addLabels: async ({ labels: values }) => labels.push(...values),
      removeLabel: async () => {},
      listComments: async () => ({ data: [] }),
      createComment: async ({ body: value }) => comments.push(value),
    },
  } };
  const fetch = async (url, options) => {
    if (url.startsWith('https://glama.ai/')) return { status: 200 };
    probes.push({ url, options });
    if (fails) throw new Error('fixture timeout');
    return { status, headers: { get: () => challenge }, text: async () => body };
  };
  await new AsyncFunction('require', 'github', 'context', 'fetch', script)(
    name => { assert.equal(name, 'fs'); return { readFileSync: () => '' }; }, github,
    { repo: { owner: 'example', repo: 'directory' }, payload: { pull_request: { number: 1 } } }, fetch);
  assert.equal(probes.length, 1);
  assert.equal(probes[0].options.method, 'POST');
  assert.equal(probes[0].options.headers.Authorization, undefined);
  assert.equal(JSON.parse(probes[0].options.body).method, 'initialize');
  return { comments, labels, authMismatch: comments.some(c => c.includes('<!-- auth-check -->')) };
}

for (const status of [401, 403]) {
  for (const marker of ['🔑', '🔐']) {
    test(`${status} bare Bearer accepts protected ${marker} without guessing issuer`, async () => {
      const result = await run({ status, marker, challenge: 'Bearer realm="inkroom-mcp"' });
      assert.equal(result.authMismatch, false);
      assert.ok(result.labels.includes('endpoint-ok'));
    });
  }
  test(`${status} bare Bearer rejects the unauthenticated marker`, async () => {
    assert.equal((await run({ status, marker: '🔓', challenge: 'Bearer realm="mcp"' })).authMismatch, true);
  });
}
test('OAuth resource_metadata rejects token-only declaration', async () => {
  assert.equal((await run({ challenge: 'Bearer resource_metadata="https://example.com/.well-known/oauth-protected-resource"' })).authMismatch, true);
});
test('OAuth resource_metadata accepts OAuth declaration', async () => {
  assert.equal((await run({ marker: '🔐', challenge: 'Bearer resource_metadata="https://example.com/metadata"' })).authMismatch, false);
});
test('case-insensitive Bearer among multiple challenges remains ambiguous', async () => {
  assert.equal((await run({ challenge: 'Basic realm="mcp", bEaReR realm="mcp"' })).authMismatch, false);
});
test('Bearer word in Basic realm is not a Bearer challenge', async () => {
  assert.equal((await run({ marker: '🔐', challenge: 'Basic realm="Bearer"' })).authMismatch, true);
});
test('missing challenge preserves protected API token behavior', async () => {
  assert.equal((await run({ challenge: '' })).authMismatch, false);
});
test('public initialize result accepts open declaration', async () => {
  assert.equal((await run({ marker: '🔓', status: 200, body: '{"jsonrpc":"2.0","id":1,"result":{}}' })).authMismatch, false);
});
test('public initialize result rejects protected declaration', async () => {
  assert.equal((await run({ status: 200, body: '{"result":{}}' })).authMismatch, true);
});
test('SSE initialize remains supported', async () => {
  assert.equal((await run({ marker: '🔓', status: 200, body: 'event: message\ndata: {"result":{}}\n\n' })).authMismatch, false);
});
test('non-MCP HTTP response remains unreachable', async () => {
  const result = await run({ status: 200, body: '<html>not MCP</html>' });
  assert.ok(result.labels.includes('endpoint-unreachable'));
});
test('network failure remains unreachable', async () => {
  const result = await run({ fails: true });
  assert.ok(result.labels.includes('endpoint-unreachable'));
});
test('privileged workflow keeps base-only checkout and original permissions', () => {
  assert.match(workflow, /ref: \$\{\{ github\.event\.pull_request\.base\.ref \}\}/);
  assert.doesNotMatch(workflow, /ref:.*pull_request\.(?:head|merge)/);
  assert.match(workflow, /contents: read\n  pull-requests: write\n  issues: write/);
});
