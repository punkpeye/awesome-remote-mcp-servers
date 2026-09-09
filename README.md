# Awesome Remote MCP Servers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![Discord](https://img.shields.io/discord/1312302100125843476?logo=discord&label=discord)](https://glama.ai/mcp/discord)
[![Subreddit subscribers](https://img.shields.io/reddit/subreddit-subscribers/mcp?style=flat&logo=reddit&label=subreddit)](https://www.reddit.com/r/mcp/)

> [!IMPORTANT]
> [ray.run](https://ray.run/) – from idea to a production-grade MCP server in under a minute! 🦜

<sup><a href="https://glama.ai/advertise">Ad</a></sup>

A curated list of remote [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) servers — hosted endpoints you connect to over a URL. No install, no runtime, no local process.

Looking for servers you run yourself? See [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers).

* [What is a remote MCP server?](#what-is-a-remote-mcp-server)
* [How to connect](#how-to-connect)
* [Legend](#legend)
* [Servers](#servers)
* [Community](#community)
* [Contributing](#contributing)

## What is a remote MCP server?

A remote MCP server is an MCP server someone else operates for you. Instead of installing a package and spawning a local process over stdio, you point your client at a URL and authenticate — usually with OAuth.

|  | Local server | Remote server |
| --- | --- | --- |
| Distribution | npm, PyPI, Docker, a binary | a URL |
| Transport | stdio | Streamable HTTP (or legacy SSE) |
| Runs on | your machine | the provider's infrastructure |
| Auth | env vars, config files | OAuth, or an API key |
| Updates | you upgrade | the provider ships |

Everything listed here is a remote server. Entries are only listed after the endpoint answers an MCP `initialize` handshake.

## How to connect

Most clients accept a bare URL. A few examples:

**Claude Code**

```bash
claude mcp add --transport http linear https://mcp.linear.app/mcp
```

**`mcp.json`** (Cursor, VS Code, and other clients that read this format)

```json
{
  "mcpServers": {
    "linear": {
      "url": "https://mcp.linear.app/mcp"
    }
  }
}
```

**Claude.ai / ChatGPT** — add the URL under Settings → Connectors.

For 🔐 OAuth servers your client opens a browser window on first use. For 🔑 servers you supply a token, usually as an `Authorization: Bearer <token>` header.

## Legend

* authentication
  * 🔓 – none, connect anonymously
  * 🔑 – API key or token
  * 🔐 – OAuth

Entries with a [Glama connector](https://glama.ai/mcp/connectors) badge have been independently scored for [tool definition quality](https://tdqs.dev) and endpoint health:

[![Tseha MCP connector](https://glama.ai/mcp/connectors/io.tseha/tseha/badges/score.svg)](https://glama.ai/mcp/connectors/io.tseha/tseha)

## Servers

* 🔗 - [Aggregators](#aggregators)
* 🤝 - [Agreements & Coordination](#agreements--coordination)
* 🎨 - [Art & Design](#art--design)
* 🌐 - [Browser Automation](#browser-automation)
* ☁️ - [Cloud Platforms](#cloud-platforms)
* 💬 - [Communication](#communication)
* 📝 - [Content Management](#content-management)
* 👤 - [CRM](#crm)
* 🗄️ - [Databases](#databases)
* 🛠️ - [Developer Tools](#developer-tools)
* 🛒 - [E-Commerce](#e-commerce)
* 🌳 - [Environment](#environment)
* 📂 - [File Storage](#file-storage)
* 💰 - [Finance](#finance)
* 🍽️ - [Food & Dining](#food--dining)
* 🎮 - [Gaming](#gaming)
* 🧠 - [Knowledge & Memory](#knowledge--memory)
* ⚖️ - [Legal](#legal)
* 🎯 - [Marketing](#marketing)
* 📊 - [Monitoring](#monitoring)
* 🎥 - [Multimedia](#multimedia)
* 💳 - [Payments](#payments)
* 📋 - [Project Management](#project-management)
* 🏠 - [Real Estate](#real-estate)
* 🔎 - [Search & Data Extraction](#search--data-extraction)
* 🔒 - [Security](#security)
* 📣 - [Social Media](#social-media)
* 🎧 - [Support & Service Management](#support--service-management)
* 🚆 - [Travel & Transportation](#travel--transportation)
* 🔄 - [Version Control](#version-control)
* 🏢 - [Workplace & Productivity](#workplace--productivity)
* 🧰 - [Other Tools & Integrations](#other-tools--integrations)

### 🔗 <a name="aggregators"></a>Aggregators
- [Fatstack](https://www.fatstack.net) `https://echo.fatstack.net/mcp`
  🔓 - Marketplace of MCP servers and APIs that agents pay for per call in USDC over x402 on Base; connect anonymously and pay only when you call a tool.
- [Hubris](https://hubris.pw) `https://api.hubris.pw/mcp`
  [![Hubris MCP connector](https://glama.ai/mcp/connectors/pw.hubris.api/hubris/badges/score.svg)](https://glama.ai/mcp/connectors/pw.hubris.api/hubris)
  🔐 - Catalogue of 500+ LLMs with ruble pricing, account balance, and chat completions with parity to /v1/chat/completions.
- [minia2a](https://minia2a.uk) `https://minia2a.uk/mcp`
  [![minia2a MCP connector](https://glama.ai/mcp/connectors/uk.minia2a/minia2a-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/uk.minia2a/minia2a-mcp)
  🔓 - 1,600+ pay-per-call APIs — crypto data, web scraping, AI inference, token security — USDC on Base via x402.
- [nohumans.directory](https://nohumans.directory) `https://api.nohumans.directory/mcp`
  [![nohumans.directory MCP connector](https://glama.ai/mcp/connectors/directory.nohumans/registry/badges/score.svg)](https://glama.ai/mcp/connectors/directory.nohumans/registry)
  🔓 - Find paid x402 APIs by capability and price, with probe history and paid-delivery evidence per endpoint.
- [TaskFuel](https://taskfuel.ai) `https://app.taskfuel.ai/mcp`
  [![TaskFuel MCP connector](https://glama.ai/mcp/connectors/ai.taskfuel.app/task-fuelai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.taskfuel.app/task-fuelai)
  🔐 - Discover and call paid per-request APIs for web search, market data, and enrichment, billed to a prepaid balance.
- [ToolsMonk](https://toolsmonk.com) `https://toolsmonk.com/api/mcp`
  [![ToolsMonk MCP connector](https://glama.ai/mcp/connectors/com.toolsmonk/catalog/badges/score.svg)](https://glama.ai/mcp/connectors/com.toolsmonk/catalog)
  🔓 - Find the right one of 255 free browser-based PDF, image, text and SEO tools by describing the task.
- [Zapier](https://zapier.com) `https://mcp.zapier.com/api/mcp/mcp`
  [![Zapier MCP connector](https://glama.ai/mcp/connectors/com.zapier.mcp/zapier/badges/score.svg)](https://glama.ai/mcp/connectors/com.zapier.mcp/zapier)
  🔐 - Run your Zapier actions across thousands of connected apps as MCP tools.

### 🤝 <a name="agreements--coordination"></a>Agreements & Coordination

- [Countersignatory](https://countersignatory.com) `https://countersignatory.com/mcp`
  [![Countersignatory MCP connector](https://glama.ai/mcp/connectors/com.countersignatory/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.countersignatory/mcp)
  🔓 - Live spot prices for verified human judgment, sign-off and notarisation: quote what a verified human would cost for a task, register interest at that price, and read the public Spot Index.
- [Elicitly](https://www.elicitly.ai) `https://mcp.elicitly.ai/mcp`
  [![Elicitly MCP connector](https://glama.ai/mcp/connectors/ai.elicitly/pro/badges/score.svg)](https://glama.ai/mcp/connectors/ai.elicitly/pro)
  🔐 - Human-in-the-loop for AI agents: confirmations, forms, and durable approvals that reach any device, with an audit trail.
- [Pairoa](https://pairoa.com) `https://mcp.pairoa.com`
  [![Pairoa MCP connector](https://glama.ai/mcp/connectors/com.pairoa.mcp/pairoa/badges/score.svg)](https://glama.ai/mcp/connectors/com.pairoa.mcp/pairoa)
  🔐 - Publish needs and offers through your AI and get private matches, with contact details revealed only on a match.

### 🎨 <a name="art--design"></a>Art & Design

- [Canva](https://canva.com) `https://mcp.canva.com/mcp`
  [![Canva MCP connector](https://glama.ai/mcp/connectors/com.canva.mcp/canva/badges/score.svg)](https://glama.ai/mcp/connectors/com.canva.mcp/canva)
  🔐 - Create, edit, and export Canva designs.
- [Figma](https://figma.com) `https://mcp.figma.com/mcp`
  [![Figma MCP connector](https://glama.ai/mcp/connectors/com.figma.mcp/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.figma.mcp/mcp)
  🔐 - Read Figma files and turn frames and components into code.
- [Made Good Designs](https://madegooddesigns.com/inspiration/) `https://madegooddesigns.com/inspiration/mcp`
  🔓 - Search a curated gallery of typography and brand-design inspiration with colour palettes, tags, and source links.

### 🌐 <a name="browser-automation"></a>Browser Automation

- [Cloudflare Browser Rendering](https://developers.cloudflare.com/browser-rendering/) `https://browser.mcp.cloudflare.com/mcp`
  🔐 - Render pages, capture screenshots, and scrape HTML from a URL.

### ☁️ <a name="cloud-platforms"></a>Cloud Platforms

- [AgentsPodium Hosting](https://hosting.defispace.com/docs/mcp.html) `https://mcp.agentspodium.com/mcp`
  [![AgentsPodium Hosting MCP connector](https://glama.ai/mcp/connectors/com.agentspodium/hosting/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentspodium/hosting)
  🔓 - Create, check, pay for and manage hosted AI agent pods (Hermes, OpenClaw, n8n…); account tools take an API key.
- [Cloudflare Bindings](https://developers.cloudflare.com/agents/model-context-protocol/) `https://bindings.mcp.cloudflare.com/mcp`
  🔐 - Build on Workers KV, R2, D1, and other Cloudflare bindings.
- [FARPY](https://farpy.com) `https://api.farpy.com/mcp`
  [![FARPY MCP connector](https://glama.ai/mcp/connectors/com.farpy.api/farpy/badges/score.svg)](https://glama.ai/mcp/connectors/com.farpy.api/farpy)
  🔐 - Run verified Blender GPU workloads, track jobs, retrieve artifacts, and inspect execution receipts.
- [Floot](https://floot.com) `https://mcp.floot.com/mcp`
  [![Floot MCP connector](https://glama.ai/mcp/connectors/com.floot/floot/badges/score.svg)](https://glama.ai/mcp/connectors/com.floot/floot)
  🔐 - Write React pages and serverless endpoints, provision Postgres and auth, run SQL, read logs, and publish to a live URL.
- [Heroku](https://heroku.com) `https://mcp.heroku.com/mcp`
  🔐 - Manage Heroku apps, dynos, add-ons, and logs.
- [Netlify](https://netlify.com) `https://netlify-mcp.netlify.app/mcp`
  🔐 - Create, deploy, and manage Netlify sites.
- [Render](https://render.com) `https://mcp.render.com/mcp`
  🔐 - Deploy and inspect Render services, databases, and logs.
- [Vercel](https://vercel.com) `https://mcp.vercel.com`
  [![Vercel MCP connector](https://glama.ai/mcp/connectors/com.vercel/vercel-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.vercel/vercel-mcp)
  🔐 - Manage Vercel projects, deployments, and logs.
  
### 💬 <a name="communication"></a>Communication

- [Resend](https://resend.com) `https://mcp.resend.com/mcp`
  🔐 - Send transactional email and manage sending domains.
- [volai](https://volai.cz/en) `https://volai.cz/mcp`
  [![volai MCP connector](https://glama.ai/mcp/connectors/cz.volai/volai/badges/score.svg)](https://glama.ai/mcp/connectors/cz.volai/volai)
  🔐 - Buy Czech and Slovak numbers, place calls, send SMS, run a voice agent; auth is an API key sent as a Bearer token.

### 📝 <a name="content-management"></a>Content Management

- [Contentful](https://contentful.com) `https://mcp.contentful.com/mcp`
  🔑 - Manage Contentful entries, assets, and content models.
- [dochost](https://dochost.io/mcp) `https://dochost.io/api/mcp`
  [![dochost MCP connector](https://glama.ai/mcp/connectors/io.dochost/dochost/badges/score.svg)](https://glama.ai/mcp/connectors/io.dochost/dochost)
  🔓 - Publish Markdown or HTML as a hosted page and get a shareable link.
- [GoodBarber](https://www.goodbarber.com/mcp/) `https://mcp.goodbarber.dev/mcp/sse`
  [![GoodBarber MCP connector](https://glama.ai/mcp/connectors/dev.goodbarber/goodbarber-public-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.goodbarber/goodbarber-public-mcp)
  🔐 - Manage a GoodBarber no-code app: content, push notifications, shop orders, members, and analytics.
- [Sanity](https://sanity.io) `https://mcp.sanity.io/mcp`
  [![Sanity MCP connector](https://glama.ai/mcp/connectors/io.sanity.www/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.sanity.www/mcp)
  🔐 - Query and mutate Sanity datasets and documents.
- [sitectrl](https://sitectrl.ai/mcp) `https://mcp.sitectrl.ai/mcp`
  [![sitectrl MCP connector](https://glama.ai/mcp/connectors/ai.sitectrl/sitectrl/badges/score.svg)](https://glama.ai/mcp/connectors/ai.sitectrl/sitectrl)
  🔓 - Describe a site and get it live with SSL, forms, and analytics — no account needed; OAuth to edit and manage.
- [Storyblok](https://storyblok.com) `https://mcp.storyblok.com/mcp`
  🔓 - Manage Storyblok spaces, stories, and components.
- [Webflow](https://webflow.com) `https://mcp.webflow.com/mcp`
  [![Webflow MCP connector](https://glama.ai/mcp/connectors/com.webflow/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.webflow/mcp)
  🔐 - Manage Webflow sites, collections, and CMS items.
- [Wix](https://wix.com) `https://mcp.wix.com/mcp`
  [![Wix MCP connector](https://glama.ai/mcp/connectors/com.wix/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.wix/mcp)
  🔐 - Manage Wix sites, business data, and bookings.

### 👤 <a name="crm"></a>CRM

- [Close](https://close.com) `https://mcp.close.com/mcp`
  [![Close MCP connector](https://glama.ai/mcp/connectors/com.close/close-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.close/close-mcp)
  🔐 - Read and update Close leads, contacts, and opportunities.
- [HubSpot](https://hubspot.com) `https://mcp.hubspot.com/anthropic`
  🔐 - Query and update HubSpot CRM contacts, companies, and deals.

### 🗄️ <a name="databases"></a>Databases

- [Convex](https://convex.dev) `https://mcp.convex.dev/mcp`
  🔓 - Query and manage Convex deployments, tables, and functions.
- [MongoDB](https://mongodb.com) `https://mcp.mongodb.com/mcp`
  🔐 - Query MongoDB Atlas clusters and manage collections and indexes.
- [Neon](https://neon.tech) `https://mcp.neon.tech/mcp`
  🔐 - Provision and query Neon Postgres projects and branches.
- [Prisma](https://prisma.io) `https://mcp.prisma.io/mcp`
  [![Prisma MCP connector](https://glama.ai/mcp/connectors/io.prisma/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.prisma/mcp)
  🔐 - Manage Prisma Postgres databases and run migrations.
- [Supabase](https://supabase.com) `https://mcp.supabase.com/mcp`
  [![Supabase MCP connector](https://glama.ai/mcp/connectors/com.supabase/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.supabase/mcp)
  🔐 - Manage Supabase projects, run SQL, and inspect schemas.

### 🛠️ <a name="developer-tools"></a>Developer Tools

- [Agentic Atlas](https://agentic-atlas.dev/) `https://agentic-atlas.dev/mcp/`
  [![Agentic Atlas MCP connector](https://glama.ai/mcp/connectors/dev.agentic-atlas/atlas/badges/score.svg)](https://glama.ai/mcp/connectors/dev.agentic-atlas/atlas)
  🔓 - Give AI agents a field guide to building better agents, with design patterns, tradeoffs, and decision guidance.
- [AI Design Blueprint](https://aidesignblueprint.com) `https://aidesignblueprint.com/mcp`
  [![AI Design Blueprint MCP connector](https://glama.ai/mcp/connectors/com.aidesignblueprint/blueprint/badges/score.svg)](https://glama.ai/mcp/connectors/com.aidesignblueprint/blueprint)
  🔓 - Search 10 principles, examples and guides with 12 public tools; spec, architecture and UI validators on Pro/Teams.
- [Astro Docs](https://astro.build) `https://mcp.docs.astro.build/mcp`
  🔓 - Search the Astro documentation.
- [Bitrise](https://bitrise.io) `https://mcp.bitrise.io/mcp`
  [![Bitrise MCP connector](https://glama.ai/mcp/connectors/io.github.bitrise-io/bitrise-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bitrise-io/bitrise-mcp)
  🔐 - Trigger and inspect Bitrise CI builds and artifacts.
- [BotKelp](https://www.botkelp.com) `https://agent-scaffold-mcp.vercel.app/mcp`
  [![BotKelp MCP connector](https://glama.ai/mcp/connectors/app.vercel.agent-scaffold-mcp/bot-kelp/badges/score.svg)](https://glama.ai/mcp/connectors/app.vercel.agent-scaffold-mcp/bot-kelp)
  🔓 - Generate stamped Next.js scaffolds from a verified component catalog with INTEGRITY.json checks.
- [Capacitor MCP Server by Capawesome](https://capawesome.io/docs/ai/mcp/capacitor/) `https://capacitor-mcp.capawesome.io/mcp`
  [![Capacitor MCP connector](https://glama.ai/mcp/connectors/io.capawesome/capacitor-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.capawesome/capacitor-mcp)
  🔓 - Unofficial: search the Capacitor docs for v6 and later, read pages, and list official and community plugins.
- [Capawesome MCP Server](https://capawesome.io/docs/ai/mcp/capawesome/) `https://mcp.capawesome.io/mcp`
  [![Capawesome MCP connector](https://glama.ai/mcp/connectors/io.capawesome/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.capawesome/mcp)
  🔓 - Search the Capawesome docs and blog; an API token adds the Capawesome Cloud management tools.
- [Cloudflare Docs](https://developers.cloudflare.com) `https://docs.mcp.cloudflare.com/mcp`
  🔓 - Search the Cloudflare developer documentation.
- [DeepWiki](https://deepwiki.com) `https://mcp.deepwiki.com/mcp`
  🔓 - Ask questions about any public GitHub repository's generated wiki.
- [GO AI Tools](https://goaichat.app/mcp-tools) `https://goaichat.app/mcp-tools/mcp`
  [![GO AI Tools MCP connector](https://glama.ai/mcp/connectors/app.goaichat/tools/badges/score.svg)](https://glama.ai/mcp/connectors/app.goaichat/tools)
  🔓 - 31 deterministic tools: image conversion, EXIF stripping, App Store assets, colour maths.
- [Globalping](https://globalping.io) `https://mcp.globalping.dev/mcp`
  🔐 - Run ping, traceroute, DNS, and HTTP checks from a global probe network.
- [Ionic Framework MCP Server by Capawesome](https://capawesome.io/docs/ai/mcp/ionic-framework/) `https://ionic-framework-mcp.capawesome.io/mcp`
  [![Ionic Framework MCP connector](https://glama.ai/mcp/connectors/io.capawesome/ionic-framework-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.capawesome/ionic-framework-mcp)
  🔓 - Unofficial: search the Ionic Framework docs for v8 and v9, with the component API and usage examples.
- [mumo](https://mumo.chat) `https://mumo.chat/api/mcp`
  [![mumo MCP connector](https://glama.ai/mcp/connectors/chat.mumo/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/chat.mumo/mcp)
  🔓 - A frontier panel for your agent: Ask Claude, GPT, Grok, and more. Get their independent responses *and* reactions to each other. See what they agree with, challenge, or want to explore further — in their own words. For architecture, plan/spec review, and strategy.
- [OpenRouter](https://openrouter.ai) `https://mcp.openrouter.ai/mcp`
  [![OpenRouter MCP connector](https://glama.ai/mcp/connectors/ai.openrouter.mcp/open-router/badges/score.svg)](https://glama.ai/mcp/connectors/ai.openrouter.mcp/open-router)
  🔐 - Look up OpenRouter model metadata and pricing, and run completions.
- [PartReel](https://partreel.com) `https://mcp.partreel.com/mcp`
  🔓 - Search and fetch verified KiCad parts (symbol, footprint, 3D model) for AI-assisted PCB design — 21k+ parts, CC-BY-4.0, no account needed.
- [Postman](https://postman.com) `https://mcp.postman.com/mcp`
  🔐 - Work with Postman collections, environments, and APIs.
- [Razi Tools](https://www.razi.pro/developer) `https://www.razi.pro/api/mcp`
  [![Razi Tools MCP connector](https://glama.ai/mcp/connectors/io.github.razikallayi/razi-tools/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.razikallayi/razi-tools)
  🔓 - 28 file and text tools: merge, split and compress PDFs, OCR, image compression, SQL, QR codes, JWTs and mock data.
- [UI Verify](https://uiverify.ai) `https://uiverify.ai/api/mcp`
  [![UI Verify MCP connector](https://glama.ai/mcp/connectors/ai.uiverify/ui-verify/badges/score.svg)](https://glama.ai/mcp/connectors/ai.uiverify/ui-verify)
  🔓 - Audit a web page for accessibility and layout issues.

### 🛒 <a name="e-commerce"></a>E-Commerce

- [AMZ Vault](https://www.amz-vault.com) `https://www.amz-vault.com/mcp`
  [![AMZ Vault MCP connector](https://glama.ai/mcp/connectors/com.amz-vault/amz-vault/badges/score.svg)](https://glama.ai/mcp/connectors/com.amz-vault/amz-vault)
  🔐 - Run an Amazon seller brand from chat: profit analytics, PPC, inventory forecasting, listings, staged approvals.
- [Nexez](https://nexez.ai/agents) `https://nexez.app/mcp`
  🔓 - Search merchants, inspect offers, and validate checkout or negotiation before buying.
- [Sense2](https://sense2.com.au) `https://sense2.com.au/api/mcp`
  🔓 - Search 4,000+ Australian promotional products, get quantity-break quotes, browse categories and case studies.
- [Stienhardt Diamond MCP](https://stienhardt.com/agents.md?utm_source=awesome_remote_mcp&utm_medium=directory&utm_campaign=diamond_mcp) `https://diamond-mcp.stienhardt.workers.dev/mcp`
  🔓 - Diamond education, grading-report guidance, face-up size estimates, and read-only jewelry catalog search.

### 🌳 <a name="environment"></a>Environment

- [Ambee](https://ambeedata.com) `https://api-mcp-server.ambeedata.com/mcp`
  [![Ambee MCP connector](https://glama.ai/mcp/connectors/com.ambeedata.api-mcp-server/mcp-ambee/badges/score.svg)](https://glama.ai/mcp/connectors/com.ambeedata.api-mcp-server/mcp-ambee)
  🔓 - Weather, air quality, pollen, and other environmental data.
- [GreenCalculus](https://greencalculus.com/developers/) `https://mcp.greencalculus.com`
  [![GreenCalculus MCP connector](https://glama.ai/mcp/connectors/com.greencalculus/api/badges/score.svg)](https://glama.ai/mcp/connectors/com.greencalculus/api)
  🔓 - Sourced greenhouse-gas emission factors and audit-traced carbon calculations, every value citing its source cell.
- [GridHub](https://grid-hub.app/developers) `https://api.grid-hub.app/mcp`
  [![GridHub MCP connector](https://glama.ai/mcp/connectors/io.github.jalcodev/gridhub/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jalcodev/gridhub)
  🔓 - Live and historical electricity prices and demand for 25 grid zones (US, EU, GB, AU); free sample mode, key, or x402.

### 📂 <a name="file-storage"></a>File Storage

- [Box](https://box.com) `https://mcp.box.com/`
  [![Box MCP connector](https://glama.ai/mcp/connectors/com.box.mcp/box/badges/score.svg)](https://glama.ai/mcp/connectors/com.box.mcp/box)
  🔐 - Search, read, and manage files stored in Box.

### 💰 <a name="finance"></a>Finance

- [Aave](https://aave.com) `https://mcp.aave.com`
  [![Aave MCP connector](https://glama.ai/mcp/connectors/com.aave.mcp/aave/badges/score.svg)](https://glama.ai/mcp/connectors/com.aave.mcp/aave)
  🔓 - Aave V3 and V4 lending markets, rates, wallet positions, rewards, governance, and non-custodial transaction building.
- [Agent Souk](https://agentsouk.dev) `https://api.agentsouk.dev/mcp`
  [![Agent Souk MCP connector](https://glama.ai/mcp/connectors/dev.agentsouk/agentsouk/badges/score.svg)](https://glama.ai/mcp/connectors/dev.agentsouk/agentsouk)
  🔓 - Marketplace for AI agents: register with one call, hire or sell services, post USDC bounties on Base; key after sign-up.
- [AgentWorld](https://agentworld.me) `https://agentworld.me/mcp`
  🔓 - Live AI agent economy on Base L2 — free reads of city, agent, and job data, plus paid x402 USDC tools for agent chat, leaderboard, and SolvScore credit scoring.
- [AlphaPipeline](https://alphapipeline-eu.onrender.com) `https://alphapipeline-eu.onrender.com/mcp`
  [![AlphaPipeline MCP connector](https://glama.ai/mcp/connectors/com.onrender.alphapipeline/alpha-pipeline-agent-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.onrender.alphapipeline/alpha-pipeline-agent-mcp)
  🔓 - Crypto trading data for AI agents: Polymarket prediction-market arbitrage, kimchi premium alerts, on-chain token-unlock risk, token security scans, funding rates, and webpage-to-Markdown conversion; x402 pay-per-call in USDC on Base, no signup.  
- [Fruit Stand](https://fruitstand.dev) `https://api.fruitstand.dev/mcp`
  [![Fruit Stand MCP connector](https://glama.ai/mcp/connectors/dev.fruitstand/fund-returns/badges/score.svg)](https://glama.ai/mcp/connectors/dev.fruitstand/fund-returns)
  🔓 - Historical return data for funds and tickers.
- [Kristo Intelligence](https://kristo-intelligence-api.onrender.com) `https://kristo-intelligence-api.onrender.com/mcp`
  🔓 - DeFi trading signals and market intelligence for agents on Base; x402 pay-per-call in USDC, no signup.
- [Kyrodata](https://kyrodata.com) `https://mcp.kyrodata.com/mcp`
  [![Kyrodata MCP connector](https://glama.ai/mcp/connectors/com.kyrodata/kyrodata/badges/score.svg)](https://glama.ai/mcp/connectors/com.kyrodata/kyrodata)
  🔐 - Brazilian exports and imports by HS code and partner, plus crop production, climate and commodity forecasts.
- [LitVM TCG Oracle](https://litvm.the-undesirables.com) `https://litvm.the-undesirables.com/mcp`
  [![LitVM TCG Oracle MCP connector](https://glama.ai/mcp/connectors/com.the-undesirables.litvm/lit-vm-tcg-oracle/badges/score.svg)](https://glama.ai/mcp/connectors/com.the-undesirables.litvm/lit-vm-tcg-oracle)
  🔓 - TCG price oracle for the LitecoinVM ecosystem: Merkle-proven prices, calibrated forecasts, fantasy souls; 13 free tools.
- [NuMetric](https://numetric.work) `https://numetric-mcp.virifi.xyz/mcp`
  [![NuMetric MCP connector](https://glama.ai/mcp/connectors/xyz.virifi.numetric-mcp/numetric/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.virifi.numetric-mcp/numetric)
  🔐 - Read-only queries over NuMetric accounting and ERP books: financial statements, KPIs, receivables and payables, invoices, and documents.
- [Octagon](https://octagonagents.com) `https://mcp.octagonagents.com/mcp`
  [![Octagon MCP connector](https://glama.ai/mcp/connectors/com.octagonagents.mcp/octagon/badges/score.svg)](https://glama.ai/mcp/connectors/com.octagonagents.mcp/octagon)
  🔐 - Private- and public-market financial research data.
- [Plaid](https://plaid.com) `https://api.dashboard.plaid.com/mcp/sse`
  🔑 - Query Plaid dashboard data for connected financial accounts.
- [Quidli Connect](https://connect.quid.li) `https://mcp.connect.quid.li`
  🔓 - Resolve social handles to EVM and Solana wallet addresses, score onchain reputation, and send USDC to identities.
- [Sector Pulse](https://sector-pulse.app) `https://sector-pulse.app/api/mcp`
  [![Sector Pulse MCP connector](https://glama.ai/mcp/connectors/io.github.christianhonap7-sys/sector-pulse/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.christianhonap7-sys/sector-pulse)
  🔓 - Live US sector rotation: 30 sector baskets ranked every session, versioned rosters, daily record; history needs a key.
- [Shingou](https://shingou.io) `https://api.shingou.io/mcp`
  [![Shingou MCP connector](https://glama.ai/mcp/connectors/io.shingou/sentiment/badges/score.svg)](https://glama.ai/mcp/connectors/io.shingou/sentiment)
  🔓 - Hourly news sentiment and typed market events for 30 crypto pairs, source links on every signal, a published hash for every hour of history; data tools need a free key.
- [SNACS](https://snacs.trade/api) `https://mcp.snacs.trade`
  [![SNACS MCP connector](https://glama.ai/mcp/connectors/trade.snacs.mcp/snacstrade/badges/score.svg)](https://glama.ai/mcp/connectors/trade.snacs.mcp/snacstrade)
  🔐 - SEC filings and dilution forensics, market data, news, and fundamentals for U.S. equities with point-in-time queries.
- [StackEasy](https://www.stackeasy.ai/mcp) `https://data.stackeasy.ai/mcp`
  [![StackEasy MCP connector](https://glama.ai/mcp/connectors/ai.stackeasy/credit-cards/badges/score.svg)](https://glama.ai/mcp/connectors/ai.stackeasy/credit-cards)
  🔐 - Your own credit cards in your AI: balances, utilization, best card for a purchase, and missed rewards, read only.
- [The Undesirables TCG Oracle](https://the-undesirables.com) `https://mcp.the-undesirables.com/mcp`
  [![The Undesirables TCG Oracle MCP connector](https://glama.ai/mcp/connectors/io.github.sailorpepe/undesirables-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sailorpepe/undesirables-mcp-server)
  🔓 - On-chain TCG price oracle: 456K+ cards, calibrated risk forecasts, AI grading, loan terms; free reads, x402 paid tools.
- [Vantage](https://vantagemcp.dev) `https://vantagemcp.dev/mcp`
  [![Vantage MCP connector](https://glama.ai/mcp/connectors/dev.vantagemcp/vantage/badges/score.svg)](https://glama.ai/mcp/connectors/dev.vantagemcp/vantage)
  🔐 - Ask questions about cloud cost and usage data.
- [Finology Software](https://finology.tech/developers/) `https://mcp.finology.tech/mcp`
  🔑 - US federal student loan payments, forgiveness timing and tax, cited to primary sources.

### 🍽️ <a name="food--dining"></a>Food & Dining

- [Agent Chef](https://agentchef.net) `https://agentchef.net/mcp`
  [![Agent Chef MCP connector](https://glama.ai/mcp/connectors/net.agentchef/agent-chef/badges/score.svg)](https://glama.ai/mcp/connectors/net.agentchef/agent-chef)
  🔐 - Weekly family dinner ballot: propose ten recipes, household votes, top three win, grocery list minus the pantry.
- [HeyYumi](https://heyyumi.ai) `https://mcp.heyyumi.ai/mcp`
  [![HeyYumi MCP connector](https://glama.ai/mcp/connectors/ai.heyyumi/heyyumi/badges/score.svg)](https://glama.ai/mcp/connectors/ai.heyyumi/heyyumi)
  🔐 - Search verified Korean restaurants and bars by filters, then request a table booking in chat.

### 🎮 <a name="gaming"></a>Gaming

- [SpaceMolt](https://www.spacemolt.com) `https://game.spacemolt.com/mcp/v2`
  [![SpaceMolt MCP connector](https://glama.ai/mcp/connectors/io.github.statico-alt/spacemolt/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.statico-alt/spacemolt)
  🔓 - A massively multiplayer online game for AI agents: mine, trade, craft, explore, and fight across a 500-system galaxy.

### 🧠 <a name="knowledge--memory"></a>Knowledge & Memory

- [Atlas Red](https://atlas-red.com/mind-map-mcp) `https://app.atlas-red.com/mcp`
  [![Atlas Red MCP connector](https://glama.ai/mcp/connectors/com.atlas-red/mind-map/badges/score.svg)](https://glama.ai/mcp/connectors/com.atlas-red/mind-map)
  🔐 - Create and edit mind maps — nodes, links, and subtrees — then export them or render one as an image.
- [docs2mcp](https://docs2mcp.com) `https://mcp.docs2mcp.com/mcp`
  [![docs2mcp MCP connector](https://glama.ai/mcp/connectors/com.docs2mcp/docs2mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.docs2mcp/docs2mcp)
  🔐 - Query your own PDFs and documents, with every answer linking to the exact page and region it came from.
- [Flash](https://flashmemorize.com) `https://flashmemorize.com/mcp`
  🔐 - Spaced-repetition flashcards: create cards from notes, get quizzed by voice, and let FSRS schedule reviews.
- [HAIDAA](https://haidaa.com/mcp) `https://mcp.haidaa.com/mcp`
  [![HAIDAA MCP connector](https://glama.ai/mcp/connectors/com.haidaa.mcp/haidaa/badges/score.svg)](https://glama.ai/mcp/connectors/com.haidaa.mcp/haidaa)
  🔓 - Search signed scientific claims, methods, provenance, contradictions, retractions, and admission receipts.
- [Hugging Face](https://huggingface.co) `https://huggingface.co/mcp`
  [![Hugging Face MCP connector](https://glama.ai/mcp/connectors/co.huggingface/hf-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/co.huggingface/hf-mcp-server)
  🔓 - Search models, datasets, and Spaces, and call Space APIs.
- [Notion](https://notion.com) `https://mcp.notion.com/mcp`
  🔐 - Read and write Notion pages, databases, and comments.
- [notepad.page](https://notepad.page) `https://mcp.notepad.page/mcp`
  [![notepad.page MCP connector](https://glama.ai/mcp/connectors/page.notepad/notepad/badges/score.svg)](https://glama.ai/mcp/connectors/page.notepad/notepad)
  🔓 - Persistent private HTML pages for AI agents and their humans: publish, recall, and update living pages with server-side state at a personal address. OAuth unlocks publishing and other protected tools.
- [Rootr](https://rootr.io) `https://rootr.io/mcp`
  [![Rootr MCP connector](https://glama.ai/mcp/connectors/io.github.inspirio-co/rootr-cli/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.inspirio-co/rootr-cli)
  🔐 - Read, search, and write a team workspace of documents, tables, spreadsheets, issue trackers, and CRM records, with answers citing the source paragraph.
- [UseMyContext](https://usemycontext.ai) `https://mcp.usemycontext.ai/mcp`
  [![UseMyContext MCP connector](https://glama.ai/mcp/connectors/io.github.usemycontext/usemycontext/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.usemycontext/usemycontext)
  🔓 - Your own profile and files, read by any MCP client. OAuth unlocks your context; anonymous gets metadata only.
- [Vilix AI](https://vilix.ai) `https://api.vilix.ai/mcp`
  [![Vilix AI MCP connector](https://glama.ai/mcp/connectors/ai.vilix.api/vilix-ai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.vilix.api/vilix-ai)
  🔐 - Persistent shared AI memory across tools and devices, with full history and unlimited memory on paid plans.

### ⚖️ <a name="legal"></a>Legal

- [LibreJustice](https://librejustice.fr) `https://librejustice.fr/mcp`
  [![LibreJustice MCP connector](https://glama.ai/mcp/connectors/fr.librejustice/librejustice/badges/score.svg)](https://glama.ai/mcp/connectors/fr.librejustice/librejustice)
  🔐 - French and European case law and legislation, searched in plain language and linked article by article.

### 🎯 <a name="marketing"></a>Marketing

- [AfterLaunch](https://afterlaunch.io) `https://afterlaunch.io/api/mcp`
  [![AfterLaunch MCP connector](https://glama.ai/mcp/connectors/io.afterlaunch/agentic-growth-marketing/badges/score.svg)](https://glama.ai/mcp/connectors/io.afterlaunch/agentic-growth-marketing)
  🔓 - AI answer visibility, SEO and a ranked backlog of growth moves as agent tools; tool calls need an AfterLaunch account.
- [BanProof](https://banproof.io) `https://banproof.io/mcp`
  [![BanProof MCP connector](https://glama.ai/mcp/connectors/io.banproof/ban-proof-ai/badges/score.svg)](https://glama.ai/mcp/connectors/io.banproof/ban-proof-ai)
  🔓 - Audit TikTok Shop and Amazon affiliate video scripts for policy violations (medical claims, income guarantees, missing FTC disclosures, fake certifications) and generate ready-to-submit ban appeal letters within platform character limits.
- [BizIntel](https://mcp-bizintel-production.up.railway.app) `https://mcp-bizintel-production.up.railway.app/mcp`
  [![BizIntel MCP connector](https://glama.ai/mcp/connectors/io.github.bch1212/bizintel/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bch1212/bizintel)
  🔓 - Audit websites, score local-business leads, detect technology stacks, and find businesses missing websites or booking systems.
- [DABLOCK AI Visibility Index](https://dablock.ai) `https://dablock.ai/mcp`
  [![DABLOCK MCP connector](https://glama.ai/mcp/connectors/ai.dablock/visibility-index/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dablock/visibility-index)
  🔓 - Weekly share of answer for 24 crypto and Web3 brands across ChatGPT, Perplexity and Gemini, with the frozen prompt panel behind it.
- [DABYTE AI Visibility Index](https://dabyte.ai) `https://dabyte.ai/mcp`
  [![DABYTE MCP connector](https://glama.ai/mcp/connectors/ai.dabyte/visibility-index/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dabyte/visibility-index)
  🔓 - Weekly share of answer for 20 SaaS and AI tool brands across ChatGPT, Perplexity and Gemini, with the frozen prompt panel behind it.
- [FoxForm](https://foxform.app) `https://mcp.foxform.app/mcp`
  [![FoxForm MCP connector](https://glama.ai/mcp/connectors/app.foxform.mcp/fox-form/badges/score.svg)](https://glama.ai/mcp/connectors/app.foxform.mcp/fox-form)
  🔓 - Build scored forms, quizzes and calculators, publish them, and read responses with per-screen analytics.
- [Lekta](https://lekta.dev) `https://lekta.dev/mcp`
  [![Lekta MCP connector](https://glama.ai/mcp/connectors/dev.lekta/lektadev/badges/score.svg)](https://glama.ai/mcp/connectors/dev.lekta/lektadev)
  🔓 - Audit a site's visibility in AI answer engines (AEO/GEO).
- [LogoKit](https://logokit.com) `https://mcp.logokit.com/mcp`
  [![LogoKit MCP connector](https://glama.ai/mcp/connectors/com.logokit/brand-data/badges/score.svg)](https://glama.ai/mcp/connectors/com.logokit/brand-data)
  🔑 - Company logos, brand colors, and firmographic data by domain.
- [Mailcoach](https://mailcoach.app) `https://mcp.mailcoach.app`
  🔐 - Read subscribers, campaigns, stats and email logs; create drafts and templates, and send test emails.
- [Vibe Prospecting](https://vibeprospecting.ai) `https://vibeprospecting.explorium.ai/mcp`
  🔐 - Search companies and contacts, enrich lead lists, and research B2B business signals.

### 📊 <a name="monitoring"></a>Monitoring

- [APIzone](https://apizone.io) `https://apizone.io/api/mcp`
  🔓 - Check whether a third-party API is down, look up uptime history, or list recent outages across 294 independently-probed APIs (Stripe, OpenAI, AWS, GitHub, etc.).
- [Cloudflare Observability](https://developers.cloudflare.com) `https://observability.mcp.cloudflare.com/mcp`
  🔐 - Query Workers logs, analytics, and error events.
- [Grafana](https://grafana.com) `https://mcp.grafana.com/mcp`
  [![Grafana MCP connector](https://glama.ai/mcp/connectors/io.github.grafana/mcp-grafana/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.grafana/mcp-grafana)
  🔐 - Query Grafana dashboards, datasources, and alerts.
- [MCPulse](https://getmcpulse.com) `https://api.getmcpulse.com/mcp`
  [![MCPulse MCP connector](https://glama.ai/mcp/connectors/com.getmcpulse.api/mcpulse/badges/score.svg)](https://glama.ai/mcp/connectors/com.getmcpulse.api/mcpulse)
  🔐 - Query your own MCP server's tool calls, first-call success, retries, empty results, and schema cost.
- [Rootly](https://rootly.com) `https://mcp.rootly.com/mcp`
  🔐 - Manage Rootly incidents, alerts, and on-call schedules.
- [Sentry](https://sentry.io) `https://mcp.sentry.dev/mcp`
  [![Sentry MCP connector](https://glama.ai/mcp/connectors/dev.sentry.mcp/sentry/badges/score.svg)](https://glama.ai/mcp/connectors/dev.sentry.mcp/sentry)
  🔐 - Investigate Sentry issues, events, and releases, and run Seer root-cause analysis.

### 🎥 <a name="multimedia"></a>Multimedia

- [invideo](https://invideo.io) `https://mcp.invideo.io/mcp`
  🔓 - Generate and edit videos from a prompt.
- [Katto](https://katto.tech) `https://mcp.katto.tech/mcp`
  🔐 - Turn long videos, podcasts and Twitch VODs into scored, captioned, vertical 9:16 clips.
- [Pixly](https://pixly.app) `https://pixly.app/api/mcp`
  [![Pixly MCP connector](https://glama.ai/mcp/connectors/app.pixly/pixly/badges/score.svg)](https://glama.ai/mcp/connectors/app.pixly/pixly)
  🔓 - Stage, declutter, and enhance real-estate listing photos, and turn them into listing videos.
- [SceneF](https://scenef.com/agents) `https://scenef.com/mcp`
  [![SceneF MCP connector](https://glama.ai/mcp/connectors/com.scenef/showtimes/badges/score.svg)](https://glama.ai/mcp/connectors/com.scenef/showtimes)
  🔓 - Movie showtimes across 33 California and Hawaii boards, re-verified against each theater's own calendar.

### 💳 <a name="payments"></a>Payments

- [Dodo Payments](https://dodopayments.com) `https://mcp.dodopayments.com/mcp`
  🔐 - Manage Dodo Payments products, subscriptions, and payouts.
- [Paddle](https://paddle.com) `https://mcp.paddle.com/mcp`
  🔐 - Manage Paddle products, prices, subscriptions, and transactions.
- [PayPal](https://paypal.com) `https://mcp.paypal.com/mcp`
  🔐 - Create and manage PayPal invoices, orders, and payments.
- [Square](https://squareup.com) `https://mcp.squareup.com/mcp`
  🔐 - Manage Square catalog, orders, payments, and customers.
- [Stripe](https://stripe.com) `https://mcp.stripe.com`
  [![Stripe MCP connector](https://glama.ai/mcp/connectors/com.stripe/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.stripe/mcp)
  🔐 - Manage Stripe customers, products, prices, invoices, and payments.

### 📋 <a name="project-management"></a>Project Management

- [Asana](https://asana.com) `https://mcp.asana.com/mcp`
  🔐 - Manage Asana tasks, projects, and portfolios.
- [Atlassian](https://atlassian.com) `https://mcp.atlassian.com/v1/mcp`
  [![Atlassian MCP connector](https://glama.ai/mcp/connectors/com.atlassian/atlassian-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.atlassian/atlassian-mcp-server)
  🔐 - Work with Jira issues and Confluence pages.
- [ClickUp](https://clickup.com) `https://mcp.clickup.com/mcp`
  🔐 - Manage ClickUp tasks, docs, and spaces.
- [Linear](https://linear.app) `https://mcp.linear.app/mcp`
  [![Linear MCP connector](https://glama.ai/mcp/connectors/app.linear/linear/badges/score.svg)](https://glama.ai/mcp/connectors/app.linear/linear)
  🔐 - Manage Linear issues, projects, and cycles.
- [monday.com](https://monday.com) `https://mcp.monday.com/mcp`
  🔐 - Manage monday.com boards, items, and updates.
- [Stellary](https://stellary.co) `https://api.stellary.co/mcp`
  [![Stellary MCP connector](https://glama.ai/mcp/connectors/io.github.Anymfah/stellary-project-management/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Anymfah/stellary-project-management)
  🔐 - AI-native project boards, cockpit, and governed agent missions over hosted Streamable HTTP.

### 🏠 <a name="real-estate"></a>Real Estate

- [Evlek](https://evlek.app/mcp) `https://evlek.app/api/mcp`
  [![Evlek MCP connector](https://glama.ai/mcp/connectors/app.evlek/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/app.evlek/mcp-server)
  🔓 - Search active Northern Cyprus sale and rental listings and compare asking prices by city and district.

### 🔎 <a name="search--data-extraction"></a>Search & Data Extraction

- [1cent](https://1cent.maxzoa.ru) `https://1cent.maxzoa.ru/mcp`
  [![1cent MCP connector](https://glama.ai/mcp/connectors/ru.maxzoa/1cent/badges/score.svg)](https://glama.ai/mcp/connectors/ru.maxzoa/1cent)
  🔓 - Extract web content and metadata, discover site resources, and detect page changes, with free discovery tools and pay-per-call x402 USDC operations on Base.
- [Bright Data](https://brightdata.com) `https://mcp.brightdata.com/mcp`
  🔐 - Web scraping and SERP data through a managed proxy network.
- [Cloudflare Radar](https://radar.cloudflare.com) `https://radar.mcp.cloudflare.com/mcp`
  🔐 - Internet traffic, routing, and security trends from Cloudflare Radar.
- [Exa](https://exa.ai) `https://mcp.exa.ai/mcp`
  [![Exa MCP connector](https://glama.ai/mcp/connectors/ai.exa/exa/badges/score.svg)](https://glama.ai/mcp/connectors/ai.exa/exa)
  🔓 - Neural web search that returns full page contents.
- [Firecrawl](https://firecrawl.dev) `https://mcp.firecrawl.dev/v2/mcp`
  [![Firecrawl MCP connector](https://glama.ai/mcp/connectors/dev.firecrawl.mcp/firecrawl-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.firecrawl.mcp/firecrawl-mcp)
  🔓 - Crawl, scrape, and extract structured data from websites.
- [FTIR.fun](https://ftir.fun) `https://ftir.fun/mcp`
  [![FTIR.fun Spectral Search MCP connector – tool definition quality and endpoint health on Glama](https://glama.ai/mcp/connectors/io.github.jxbaoxiaodong/ftirfun-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jxbaoxiaodong/ftirfun-mcp)
  🔐 - Analyze FTIR spectra, search spectral libraries, and retrieve peak and literature evidence.
- [Gemalli](https://gemalli.com/en/developers) `https://gemalli.com/api/mcp`
  [![Gemalli MCP connector](https://glama.ai/mcp/connectors/com.gemalli/trade/badges/score.svg)](https://glama.ai/mcp/connectors/com.gemalli/trade)
  🔓 - Search verified manufacturers, screen counterparties against UN/OFAC/EU sanctions lists, and look up HS codes and dual-use export controls for cross-border trade.
- [gluten-free.fr](https://gluten-free.fr) `https://gluten-free.fr/api/mcp`
  🔓 - Verified gluten-free product catalogue and comparison data for the French market.
- [GovAuctions.app](https://govauctions.app) `https://govauctions.app/api/mcp`
  [![GovAuctions.app MCP connector](https://glama.ai/mcp/connectors/app.govauctions/govauctions/badges/score.svg)](https://glama.ai/mcp/connectors/app.govauctions/govauctions)
  🔓 - Search live government surplus auction lots in the US, UK, CA and AU, with sold-price comps and resale scores.
- [LiveDataLink](https://livedatalink.ai) `https://livedatalink.ai/mcp`
  [![LiveDataLink MCP connector](https://glama.ai/mcp/connectors/io.github.blackboxfoundry/livedatalink/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.blackboxfoundry/livedatalink)
  🔓 - Query 294 tools across 60 public-data domains, spanning sanctions, courts, markets, health, energy, and government.
- [Realask](https://realask.net) `https://realask.net/mcp`
  [![Realask MCP connector](https://glama.ai/mcp/connectors/io.github.danelas/realask/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.danelas/realask)
  🔓 - Verify facts about US local businesses by phone — stock, all-in price, availability — as typed answers with evidence.
- [Simplescraper](https://simplescraper.io) `https://mcp.simplescraper.io/mcp`
  🔐 - Scrape websites and run saved extraction recipes.
- [Tavily](https://tavily.com) `https://mcp.tavily.com/mcp`
  🔐 - Web search and content extraction built for agents.

### 🔒 <a name="security"></a>Security

- [Promptguard](https://mcp.glc-rag.hu/guide/promptguard) `https://mcp.glc-rag.hu/mcp`
  🔑 - Layered prompt-injection checks for LLM hosts; 100 welcome credits on signup.
- [Semgrep](https://semgrep.dev) `https://mcp.semgrep.ai/mcp`
  🔐 - Scan code for security and correctness findings with Semgrep rules.

### 📣 <a name="social-media"></a>Social Media

- [AdminHub for Telegram](https://adminhub.tools/mcp/) `https://backend-git-production-cb93.up.railway.app/mcp`
  [![AdminHub for Telegram MCP connector](https://glama.ai/mcp/connectors/tools.adminhub/telegram/badges/score.svg)](https://glama.ai/mcp/connectors/tools.adminhub/telegram)
  🔐 - Publish to a Telegram channel through your own bot, and read its stats and subscribers.
- [Mysocial](https://mysocial.io/mcp/) `https://app.mysocial.io/mcp`
  🔐 - Read a creator's own Instagram, TikTok, YouTube, LinkedIn and Threads history: posts, metrics, transcripts, comments and audience.
- [OmniSocials](https://omnisocials.com) `https://mcp.omnisocials.com/`
  [![OmniSocials MCP connector](https://glama.ai/mcp/connectors/com.omnisocials.mcp/omni-socials/badges/score.svg)](https://glama.ai/mcp/connectors/com.omnisocials.mcp/omni-socials)
  🔑 - Publish and schedule posts across social networks.
- [Post Bridge](https://www.post-bridge.com/mcp) `https://www.post-bridge.com/api/mcp/mcp`
  [![Post Bridge MCP connector](https://glama.ai/mcp/connectors/io.github.jackfriks/post-bridge/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jackfriks/post-bridge)
  🔐 - Publish, schedule and analyze posts across ten platforms, from Instagram and TikTok to LinkedIn and Bluesky.
- [PostLake](https://postlake.dev) `https://api.postlake.dev/mcp`
  [![PostLake MCP connector](https://glama.ai/mcp/connectors/dev.postlake/social/badges/score.svg)](https://glama.ai/mcp/connectors/dev.postlake/social)
  🔐 - Publish, schedule, and read analytics across X, LinkedIn, Instagram, TikTok, Facebook, Threads, Bluesky, YouTube, and Pinterest from one hosted MCP server.
- [SocialBu](https://socialbu.com/mcp-server) `https://socialbu.com/mcp`
  [![SocialBu MCP connector](https://glama.ai/mcp/connectors/io.github.usamaejaz/socialbu-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.usamaejaz/socialbu-mcp)
  🔐 - Create, schedule, publish, and analyze social media content; manage accounts, teams, and automations.

- [Social Fetch](https://www.socialfetch.dev) `https://api.socialfetch.dev/mcp`
  🔓 - Hosted MCP for a social media scraping API: public profiles, posts, comments, and transcripts, live on every request.
- [Superpowers.social](https://superpowers.social) `https://superpowers.social/mcp`
  [![Superpowers.social MCP connector](https://glama.ai/mcp/connectors/social.superpowers/social-superpowers/badges/score.svg)](https://glama.ai/mcp/connectors/social.superpowers/social-superpowers)
  🔓 - Read-only search and retrieval of live X/Twitter and Reddit posts, threads, users, and subreddits.

### 🎧 <a name="support--service-management"></a>Support & Service Management

- [EOSL.ai](https://eosl.ai/mcp/) `https://eosl.ai/mcp`
  [![EOSL.ai MCP connector](https://glama.ai/mcp/connectors/ai.eosl/eosl/badges/score.svg)](https://glama.ai/mcp/connectors/ai.eosl/eosl)
  🔓 - Hardware end-of-life lookups by part number: support status and dates, each backed by the vendor bulletin URL.
- [Intercom](https://intercom.com) `https://mcp.intercom.com/mcp`
  🔐 - Search Intercom conversations, contacts, and help-center articles.

### 🚆 <a name="travel--transportation"></a>Travel & Transportation

- [Alice Flights](https://mcp.alice.co.il) `https://mcp.alice.co.il/mcp`
  [![Alice Flights MCP connector](https://glama.ai/mcp/connectors/il.co.alice/flights/badges/score.svg)](https://glama.ai/mcp/connectors/il.co.alice/flights)
  🔐 - Search worldwide flights from Alice, one of Israel's best-known travel apps, including Tel Aviv routes, with English and Hebrew results tagged best, cheapest, and fastest.
- [FlightPowers Google Flights](https://flights.flightpowers.com) `https://flights.flightpowers.com/mcp`
  [![FlightPowers Google Flights MCP connector](https://glama.ai/mcp/connectors/com.flightpowers/google-flights/badges/score.svg)](https://glama.ai/mcp/connectors/com.flightpowers/google-flights)
  🔐 - Live Google Flights fares with price band and verdict, round trips in one request, date ranges and destination lists.
- [FrontDesko](https://frontdesko.app) `https://mcp.frontdesko.app/mcp`
  [![FrontDesko MCP connector](https://glama.ai/mcp/connectors/io.github.anmols/frontdesko-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.anmols/frontdesko-mcp)
  🔓 - Hotel PMS pricing and plan comparisons, OTA-commission savings math, docs search, and live demo-hotel availability.

- [Roamzy](https://roamzy.io) `https://roamzy.io/mcp`
  [![Roamzy MCP connector](https://glama.ai/mcp/connectors/io.github.roamzy-io/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.roamzy-io/mcp-server)
  🔓 - Buy and manage one global eSIM for 193 countries, billed per megabyte in USDT or USDC — no account, no signup, no KYC.

### 🔄 <a name="version-control"></a>Version Control

- [GitHub](https://github.com) `https://api.githubcopilot.com/mcp/`
  🔐 - Manage GitHub repositories, issues, pull requests, and Actions.

### 🏢 <a name="workplace--productivity"></a>Workplace & Productivity

- [AI Applyd](https://aiapplyd.com/mcps) `https://mcp.aiapplyd.com/mcp`
  [![AI Applyd MCP connector](https://glama.ai/mcp/connectors/io.github.whateverneveranywhere/aiapplyd/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.whateverneveranywhere/aiapplyd)
  🔓 - ATS resume scoring, per-role resume rewriting, cover letters, interview prep, job matching, and auto-apply that submits on the employer's own hiring system across 12 ATS platforms. Sign in with Google to run a tool.
- [Fireflies](https://fireflies.ai) `https://api.fireflies.ai/mcp`
  [![Fireflies MCP connector](https://glama.ai/mcp/connectors/ai.fireflies.api/firefly/badges/score.svg)](https://glama.ai/mcp/connectors/ai.fireflies.api/firefly)
  🔐 - Search meeting transcripts, summaries, and action items.
- [FITsociety](https://fitsociety.io) `https://mcp.fitsociety.io/mcp/v1`
  [![FITsociety MCP connector](https://glama.ai/mcp/connectors/io.fitsociety/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.fitsociety/mcp)
  🔐 - Access approved clients, schedules, bookings, training and nutrition data for fitness coaching.
- [NoClick](https://www.noclick.com/mcp) `https://api.noclick.io/mcp`
  [![NoClick MCP connector](https://glama.ai/mcp/connectors/io.github.noclickapp/noclick/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.noclickapp/noclick)
  🔐 - Build, run, and monitor workflows and background AI agents across connected apps.
- [ResuMakeAi](https://www.resumakeai.com) `https://www.resumakeai.com/api/mcp`
  [![ResuMakeAi MCP connector](https://glama.ai/mcp/connectors/com.resumakeai/resu-make-ai/badges/score.svg)](https://glama.ai/mcp/connectors/com.resumakeai/resu-make-ai)
  🔓 - Score a resume against a job description for ATS parsing, match percentage, and missing keywords.

### 🧰 <a name="other-tools--integrations"></a>Other Tools & Integrations

- [BioVet](https://bio.vet/) `https://bio.vet/mcp`
  [![BioVet MCP connector](https://glama.ai/mcp/connectors/vet.bio/biovet-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/vet.bio/biovet-mcp)
  🔓 - Find a 24/7 vet clinic in Moscow, check live prices and free doctor slots, book a visit, and triage symptoms.
- [Human Design](https://www.gethumandesign.com/mcp-docs/) `https://api.gethumandesign.com/mcp`
  [![Human Design MCP connector](https://glama.ai/mcp/connectors/com.gethumandesign.www/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.gethumandesign.www/mcp)
  🔐 - Calculate Human Design bodygraphs from birth data, compare two people, and analyse group dynamics.
- [Perspect](https://tryperspect.com) `https://perspect-ai-backend.onrender.com/mcp`
  [![Perspect MCP connector](https://glama.ai/mcp/connectors/com.tryperspect/perspect/badges/score.svg)](https://glama.ai/mcp/connectors/com.tryperspect/perspect)
  🔓 - Convene a panel of expert AI personas to debate any decision from every side; running a debate needs a Pro key.
- [Tseha](https://tseha.io) `https://tseha.io/mcp`
  [![Tseha MCP connector](https://glama.ai/mcp/connectors/io.tseha/tseha/badges/score.svg)](https://glama.ai/mcp/connectors/io.tseha/tseha)
  🔓 - Ethiopian calendar and date conversion.
- [turva.dev](https://turva.dev) `https://mcp.turva.dev/mcp`
  [![turva.dev MCP connector](https://glama.ai/mcp/connectors/dev.turva/turva-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.turva/turva-mcp)
  🔓 - Read the turva.dev service catalog, pricing, agent-readiness score, and published security scan results.
- [Zip1](https://zip1.io) `https://zip1.io/mcp`
  🔓 - Shorten URLs with custom or emoji slugs, optional password and click limits, and read their click analytics.

## Community

* [r/mcp Reddit](https://www.reddit.com/r/mcp)
* [Discord Server](https://glama.ai/mcp/discord)

## Related

* [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) – servers you run locally
* [awesome-mcp-clients](https://github.com/punkpeye/awesome-mcp-clients) – clients that speak MCP
* [glama.ai/mcp/connectors](https://glama.ai/mcp/connectors) – searchable directory of remote servers

## Contributing

Found a remote server that belongs here? See [CONTRIBUTING.md](CONTRIBUTING.md).


