# Awesome Remote MCP Servers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![Discord](https://img.shields.io/discord/1312302100125843476?logo=discord&label=discord)](https://glama.ai/mcp/discord)
[![Subreddit subscribers](https://img.shields.io/reddit/subreddit-subscribers/mcp?style=flat&logo=reddit&label=subreddit)](https://www.reddit.com/r/mcp/)

> [!IMPORTANT]
> [ray.run](https://ray.run/) – from idea to a production-grade MCP server in under a minute! 🦜

<sup><a href="https://glama.ai/advertise">Ad</a></sup>

A curated list of remote [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) servers — hosted endpoints you connect to over a URL. No install, no runtime, no local process.h

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
* 🌾 - [Agriculture](#agriculture)
* 🎨 - [Art & Design](#art--design)
* 🌐 - [Browser Automation](#browser-automation)
* ☁️ - [Cloud Platforms](#cloud-platforms)
* 💬 - [Communication](#communication)
* 📝 - [Content Management](#content-management)
* 👤 - [CRM](#crm)
* 🗄️ - [Databases](#databases)
* 📊 - [Data Visualization](#data-visualization)
* 🛠️ - [Developer Tools](#developer-tools)
* 🛒 - [E-Commerce](#e-commerce)
* 🌳 - [Environment](#environment)
* 📂 - [File Storage](#file-storage)
* 💰 - [Finance](#finance)
* 🍽️ - [Food & Dining](#food--dining)
* 🎮 - [Gaming](#gaming)
* 🏋️ - [Health & Fitness](#health--fitness)
* 🧠 - [Knowledge & Memory](#knowledge--memory)
* ⚖️ - [Legal](#legal)
* 🎯 - [Marketing](#marketing)
* 📊 - [Monitoring](#monitoring)
* 🎥 - [Multimedia](#multimedia)
* 💳 - [Payments](#payments)
* 📋 - [Project Management](#project-management)
* 🏠 - [Real Estate](#real-estate)
* 🚗 - [Sales](#sales)
* 🔬 - [Science & Research](#science--research)
* 🔎 - [Search & Data Extraction](#search--data-extraction)
* 🔒 - [Security](#security)
* 📣 - [Social Media](#social-media)
* 🏆 - [Sports](#sports)
* 🎧 - [Support & Service Management](#support--service-management)
* 🌍 - [Translation & Localization](#translation--localization)
* 🚆 - [Travel & Transportation](#travel--transportation)
* 🔄 - [Version Control](#version-control)
* 🏢 - [Workplace & Productivity](#workplace--productivity)
* 🧰 - [Other Tools & Integrations](#other-tools--integrations)

### 🔗 <a name="aggregators"></a>Aggregators
- [AI Tools Directory](https://ai.toolboxes.top) `https://ai-tools-mcp.toolboxes.top/mcp`
  [![AI Tools Directory MCP connector](https://glama.ai/mcp/connectors/top.toolboxes/ai-tools-directory/badges/score.svg)](https://glama.ai/mcp/connectors/top.toolboxes/ai-tools-directory)
  🔓 - Curated index of 221 AI tools across 21 industries; search by use case, department or pricing tier.
- [AIsa](https://aisa.one) `https://mcp.aisa.one/mcp`
  [![AIsa MCP connector](https://glama.ai/mcp/connectors/one.aisa/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/one.aisa/mcp)
  🔐 - One key for 950+ SEO, finance, social, search and sales APIs, with a spend cap on each call.
- [Agent Nexus](https://agentnexus.app) `https://agentnexus.app/api/public/mcp`
  [![Agent Nexus MCP connector](https://glama.ai/mcp/connectors/app.agentnexus/agent-nexus/badges/score.svg)](https://glama.ai/mcp/connectors/app.agentnexus/agent-nexus)
  🔓 - Registry of the APIs, MCP servers and CLIs agents call, with live health checks and reliability history.
- [AgentBIT](https://agentbit.app) `https://agentbit.app/mcp`
  [![AgentBIT MCP connector](https://glama.ai/mcp/connectors/app.agentbit/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.agentbit/mcp)
  🔓 - One tool that routes any task to the best of 14,000+ x402 tools; pay per call in USDC on Base.
- [code402](https://code402.dev) `https://mcp.code402.dev/mcp`
  [![code402 MCP connector](https://glama.ai/mcp/connectors/io.github.89rat/code402/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.89rat/code402)
  🔓 - Storefront for x402 APIs: discover services, probe payment terms and list your own API.
- [Fatstack](https://www.fatstack.net) `https://echo.fatstack.net/mcp`
  🔓 - Marketplace of MCP servers and APIs that agents pay for per call in USDC over x402 on Base.
- [Glasser](https://glasser.ai) `https://api.glasser.ai/mcp`
  [![Glasser MCP connector](https://glama.ai/mcp/connectors/ai.glasser/glasser/badges/score.svg)](https://glama.ai/mcp/connectors/ai.glasser/glasser)
  🔐 - One key to 1,000+ pay-per-call data APIs: enrichment, SEO, scraping, places, news and social data.
- [Hubris](https://hubris.pw) `https://api.hubris.pw/mcp`
  [![Hubris MCP connector](https://glama.ai/mcp/connectors/pw.hubris.api/hubris/badges/score.svg)](https://glama.ai/mcp/connectors/pw.hubris.api/hubris)
  🔐 - Catalogue of 500+ LLMs with ruble pricing, account balance, and OpenAI-compatible chat completions.
- [mcp.market](https://mcp.market) `https://gw.mcp.market/mcp`
  [![mcp.market gateway MCP connector](https://glama.ai/mcp/connectors/market.mcp/gateway/badges/score.svg)](https://glama.ai/mcp/connectors/market.mcp/gateway)
  🔓 - Search 33,000+ MCP servers by job, with a safety grade and reviews on each, then call any of them here.
- [MeshKore](https://meshkore.com) `https://mcp.meshkore.com/v1/mcp`
  [![MeshKore MCP connector](https://glama.ai/mcp/connectors/com.meshkore/meshkore/badges/score.svg)](https://glama.ai/mcp/connectors/com.meshkore/meshkore)
  🔓 - Find a live agent by describing the task, then call its skills; availability is probe-verified.
- [minia2a](https://minia2a.uk) `https://minia2a.uk/mcp`
  [![minia2a MCP connector](https://glama.ai/mcp/connectors/uk.minia2a/minia2a-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/uk.minia2a/minia2a-mcp)
  🔓 - 1,600+ pay-per-call APIs — crypto data, web scraping, AI inference, token security — USDC on Base via x402.
- [nohumans.directory](https://nohumans.directory) `https://api.nohumans.directory/mcp`
  [![nohumans.directory MCP connector](https://glama.ai/mcp/connectors/directory.nohumans/registry/badges/score.svg)](https://glama.ai/mcp/connectors/directory.nohumans/registry)
  🔓 - Find paid x402 APIs by capability and price, with probe history and paid-delivery evidence per endpoint.
- [Quietforge x402 Tools](https://quietforge-studio.pages.dev/docs-api/#mcp) `https://qf-api.quietforge-studio.workers.dev/mcp`
  [![Quietforge x402 Tools MCP connector](https://glama.ai/mcp/connectors/io.github.quietforgestudio/x402-tools/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.quietforgestudio/x402-tools)
  🔓 - Search a health-probed directory of x402 APIs, probe one, and read aggregate 24h on-chain USDC settlement.
- [QVeris](https://qveris.ai) `https://mcp.qveris.ai/mcp`
  [![QVeris MCP connector](https://glama.ai/mcp/connectors/io.github.QVerisAI/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.QVerisAI/mcp)
  🔐 - Find professional data services and tools, check what they cover, call them and audit usage.
- [Store API](https://store-api.com/mcp-guide) `https://store-api.com/mcp`
  [![Store API MCP connector](https://glama.ai/mcp/connectors/com.store-api/store-api/badges/score.svg)](https://glama.ai/mcp/connectors/com.store-api/store-api)
  🔓 - Ask 58 models, including GPT, Claude and Gemini, and generate images; calls need a prepaid key.
- [TaskFuel](https://taskfuel.ai) `https://app.taskfuel.ai/mcp`
  [![TaskFuel MCP connector](https://glama.ai/mcp/connectors/ai.taskfuel.app/task-fuelai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.taskfuel.app/task-fuelai)
  🔐 - Call pay-per-request APIs for search, market data and enrichment, billed to a prepaid balance.
- [ToolsMonk](https://toolsmonk.com) `https://toolsmonk.com/api/mcp`
  [![ToolsMonk MCP connector](https://glama.ai/mcp/connectors/com.toolsmonk/catalog/badges/score.svg)](https://glama.ai/mcp/connectors/com.toolsmonk/catalog)
  🔓 - Find the right one of 255 free browser-based PDF, image, text and SEO tools by describing the task.
- [Zapier](https://zapier.com) `https://mcp.zapier.com/api/mcp/mcp`
  [![Zapier MCP connector](https://glama.ai/mcp/connectors/com.zapier.mcp/zapier/badges/score.svg)](https://glama.ai/mcp/connectors/com.zapier.mcp/zapier)
  🔐 - Run your Zapier actions across thousands of connected apps as MCP tools.

### 🤝 <a name="agreements--coordination"></a>Agreements & Coordination

- [Countersignatory](https://countersignatory.com) `https://countersignatory.com/mcp`
  [![Countersignatory MCP connector](https://glama.ai/mcp/connectors/com.countersignatory/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.countersignatory/mcp)
  🔓 - Spot prices for verified human sign-off, judgment and notarisation, with quotes and a public index.
- [Elicitly](https://www.elicitly.ai) `https://mcp.elicitly.ai/mcp`
  [![Elicitly MCP connector](https://glama.ai/mcp/connectors/ai.elicitly/pro/badges/score.svg)](https://glama.ai/mcp/connectors/ai.elicitly/pro)
  🔐 - Human-in-the-loop confirmations, forms and durable approvals that reach any device, with an audit trail.
- [GoodSign](https://goodsign.io/mcp-server) `https://goodsign.io/mcp`
  [![GoodSign MCP connector](https://glama.ai/mcp/connectors/io.goodsign/goodsign/badges/score.svg)](https://glama.ai/mcp/connectors/io.goodsign/goodsign)
  🔓 - Send documents for signature, remind signers and download signed PDFs with an audit trail; tools need a key.
- [Hands for Agents](https://handsforagents.com) `https://mcp.handsforagents.com/mcp`
  [![Hands for Agents MCP connector](https://glama.ai/mcp/connectors/com.handsforagents/hands-for-agents/badges/score.svg)](https://glama.ai/mcp/connectors/com.handsforagents/hands-for-agents)
  🔓 - Order physical engineering work from a Czech company: CAD, 3D printing, fabrication and shipping.
- [Pairoa](https://pairoa.com) `https://mcp.pairoa.com`
  [![Pairoa MCP connector](https://glama.ai/mcp/connectors/com.pairoa.mcp/pairoa/badges/score.svg)](https://glama.ai/mcp/connectors/com.pairoa.mcp/pairoa)
  🔐 - Publish needs and offers and get private matches, with contact details revealed only on a match.
- [Pushary](https://pushary.com) `https://pushary.com/api/mcp/mcp`
  [![Pushary MCP connector](https://glama.ai/mcp/connectors/com.pushary/pushary/badges/score.svg)](https://glama.ai/mcp/connectors/com.pushary/pushary)
  🔓 🔑 - Send phone notifications and ask for approvals, choices or text answers.

- [Torquantis](https://torquantis.com) `https://torquantis.com/mcp`
  [![Torquantis MCP connector](https://glama.ai/mcp/connectors/com.torquantis/exchange/badges/score.svg)](https://glama.ai/mcp/connectors/com.torquantis/exchange)
  🔓 - Exchange where AI agents buy and sell work from each other in USDC on Base: order book, escrow, AI judges.
- [Tribeunal](https://tribeunal.com/mcp) `https://mcp.tribeunal.com/mcp`
  [![Tribeunal MCP connector](https://glama.ai/mcp/connectors/com.tribeunal.mcp/tribeunal/badges/score.svg)](https://glama.ai/mcp/connectors/com.tribeunal.mcp/tribeunal)
  🔐 - Put a question to a jury of humans and AI agents, then act on the verdict.

### 🌾 <a name="agriculture"></a>Agriculture

- [BestRobotMower](https://bestrobotmower.co/dataset) `https://bestrobotmower.co/api/mcp`
  [![BestRobotMower MCP connector](https://glama.ai/mcp/connectors/io.github.yumaheymans/bestrobotmower-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.yumaheymans/bestrobotmower-mcp)
  🔓 - Specs, prices, scores and yard-size picks for 23 robot lawn mowers from an open CC BY 4.0 dataset.
- [upCampo](https://suporte.upcampo.com.br/mcp/) `https://mcp.upcampo.com.br/mcp`
  [![upCampo MCP connector](https://glama.ai/mcp/connectors/br.com.upcampo/upi/badges/score.svg)](https://glama.ai/mcp/connectors/br.com.upcampo/upi)
  🔐 - Farm management for Brazil: pest scouting, work orders, inventory, fleet and cost per field.

### 🎨 <a name="art--design"></a>Art & Design

- [betterimage.io](https://betterimage.io/mcp) `https://betterimage.io/mcp`
  [![betterimage.io MCP connector](https://glama.ai/mcp/connectors/io.betterimage/betterimage/badges/score.svg)](https://glama.ai/mcp/connectors/io.betterimage/betterimage)
  🔓 - Social cards and OG images from designed templates or any page URL, plus link-preview checks.
- [Canva](https://canva.com) `https://mcp.canva.com/mcp`
  [![Canva MCP connector](https://glama.ai/mcp/connectors/com.canva.mcp/canva/badges/score.svg)](https://glama.ai/mcp/connectors/com.canva.mcp/canva)
  🔐 - Create, edit, and export Canva designs.
- [CleanVector](https://cleanvector.ai/mcp) `https://cleanvector.ai/api/mcp`
  [![CleanVector MCP connector](https://glama.ai/mcp/connectors/ai.cleanvector/cleanvector/badges/score.svg)](https://glama.ai/mcp/connectors/ai.cleanvector/cleanvector)
  🔓 - Generate SVG artwork and vectorize images; tools need a key.
- [Figma](https://figma.com) `https://mcp.figma.com/mcp`
  [![Figma MCP connector](https://glama.ai/mcp/connectors/com.figma.mcp/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.figma.mcp/mcp)
  🔐 - Read Figma files and turn frames and components into code.
- [Made Good Designs](https://madegooddesigns.com/inspiration/) `https://madegooddesigns.com/inspiration/mcp`
  🔓 - Search a curated gallery of typography and brand-design inspiration with colour palettes.
- [Nano Studio Pro](https://nanostudiopro.com) `https://nanostudiopro.com/api/mcp`
  [![Nano Studio Pro MCP connector](https://glama.ai/mcp/connectors/com.nanostudiopro/studiopro/badges/score.svg)](https://glama.ai/mcp/connectors/com.nanostudiopro/studiopro)
  🔐 - Find any photo or video you own by what is inside it; generate, restyle, cut out, and build sprite sheets.
- [OwlCAD](https://owlcad.com/mcp-server) `https://mcp.owlcad.com`
  [![OwlCAD MCP connector](https://glama.ai/mcp/connectors/com.owlcad.mcp/owl-cad/badges/score.svg)](https://glama.ai/mcp/connectors/com.owlcad.mcp/owl-cad)
  🔐 - Build editable parametric 3D parts, check printability, and export STL, 3MF or STEP.
- [Sceneplane](https://sceneplane.online) `https://mcp.sceneplane.online/v1`
  [![Sceneplane MCP connector](https://glama.ai/mcp/connectors/online.sceneplane/sceneplane/badges/score.svg)](https://glama.ai/mcp/connectors/online.sceneplane/sceneplane)
  🔐 - Build, inspect, render and animate Blender scenes in the cloud; export editable .blend, GLB or STL files.
- [ScoreLook](https://scorelook.fr/scorelook-mcp) `https://scorelook.fr/mcp`
  [![ScoreLook MCP connector](https://glama.ai/mcp/connectors/fr.scorelook/capucine/badges/score.svg)](https://glama.ai/mcp/connectors/fr.scorelook/capucine)
  🔓 - French AI stylist: sourced outfit answers, piece hubs, shopping criteria and weather looks.

### 🌐 <a name="browser-automation"></a>Browser Automation

- [APEX](https://apexfaucet.xyz/connect/) `https://apexfaucet.xyz/api/mcp`
  [![APEX MCP connector](https://glama.ai/mcp/connectors/xyz.apexfaucet/apex-x1/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.apexfaucet/apex-x1)
  🔓 - Render a URL, or up to 25 pages of a site, to clean text in headless Chrome; $1 per call via x402.

- [Browser Forest](https://browserforest.com) `https://browserforest.com/api/mcp/bf`
  [![Browser Forest MCP connector](https://glama.ai/mcp/connectors/com.browserforest/browser-forest/badges/score.svg)](https://glama.ai/mcp/connectors/com.browserforest/browser-forest)
  🔑 - Undetectable cloud browser sessions; navigate, extract, click, and solve captchas on blocked sites.

- [Cloudflare Browser Rendering](https://developers.cloudflare.com/browser-rendering/) `https://browser.mcp.cloudflare.com/mcp`
  🔐 - Render pages, capture screenshots, and scrape HTML from a URL.

- [ViewportWitness](https://qa.honeygate.app) `https://qa.honeygate.app/mcp`
  [![ViewportWitness MCP connector](https://glama.ai/mcp/connectors/io.github.Baffles78/viewport-witness/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Baffles78/viewport-witness)
  🔓 - Paid browser QA across three viewports: screenshots, accessibility checks and baseline diffs.

### ☁️ <a name="cloud-platforms"></a>Cloud Platforms

- [AgentsPodium Hosting](https://hosting.defispace.com/docs/mcp.html) `https://mcp.agentspodium.com/mcp`
  [![AgentsPodium Hosting MCP connector](https://glama.ai/mcp/connectors/com.agentspodium/hosting/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentspodium/hosting)
  🔓 - Create, pay for and manage hosted AI agent pods (Hermes, OpenClaw, n8n); account tools need a key.
- [Cloudflare Bindings](https://developers.cloudflare.com/agents/model-context-protocol/) `https://bindings.mcp.cloudflare.com/mcp`
  🔐 - Build on Workers KV, R2, D1, and other Cloudflare bindings.
- [FARPY](https://farpy.com) `https://api.farpy.com/mcp`
  [![FARPY MCP connector](https://glama.ai/mcp/connectors/com.farpy.api/farpy/badges/score.svg)](https://glama.ai/mcp/connectors/com.farpy.api/farpy)
  🔐 - Run verified Blender GPU workloads, track jobs, retrieve artifacts, and inspect execution receipts.
- [Fiskmas](https://fiskmas.dev) `https://mcp.fiskmas.dev/mcp`
  [![Fiskmas MCP connector](https://glama.ai/mcp/connectors/dev.fiskmas/fiskmas/badges/score.svg)](https://glama.ai/mcp/connectors/dev.fiskmas/fiskmas)
  🔓 - Create, deploy and monitor Docker apps on live HTTPS URLs.
- [Floot](https://floot.com) `https://mcp.floot.com/mcp`
  [![Floot MCP connector](https://glama.ai/mcp/connectors/com.floot/floot/badges/score.svg)](https://glama.ai/mcp/connectors/com.floot/floot)
  🔐 - Build React apps with serverless endpoints, Postgres and auth, run SQL, and publish to a live URL.
- [Heroku](https://heroku.com) `https://mcp.heroku.com/mcp`
  🔐 - Manage Heroku apps, dynos, add-ons, and logs.
- [Netlify](https://netlify.com) `https://netlify-mcp.netlify.app/mcp`
  🔐 - Create, deploy, and manage Netlify sites.
- [Popdot AI](https://popdot.ai) `https://popdot.ai/api/mcp`
  [![Popdot AI MCP connector](https://glama.ai/mcp/connectors/ai.popdot/popdot-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.popdot/popdot-mcp)
  🔓 - Give an agent a public URL: free 24-hour trial subdomains, then rentals paid in USDC via x402.
- [Render](https://render.com) `https://mcp.render.com/mcp`
  🔐 - Deploy and inspect Render services, databases, and logs.
- [TrustyCap](https://trustycap.com) `https://mcp.trustycap.com/mcp`
  [![TrustyCap MCP connector](https://glama.ai/mcp/connectors/com.trustycap/trustycap/badges/score.svg)](https://glama.ai/mcp/connectors/com.trustycap/trustycap)
  🔓 - Add production storage, data, jobs, webhooks, email and secrets to an app, and meter the usage.
- [Vercel](https://vercel.com) `https://mcp.vercel.com`
  [![Vercel MCP connector](https://glama.ai/mcp/connectors/com.vercel/vercel-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.vercel/vercel-mcp)
  🔐 - Manage Vercel projects, deployments, and logs.
  
### 💬 <a name="communication"></a>Communication

- [ErzyCall](https://app.erzycall.com/docs/mcp) `https://app.erzycall.com/api/mcp`
  [![ErzyCall MCP connector](https://glama.ai/mcp/connectors/com.erzycall.app/erzy-call/badges/score.svg)](https://glama.ai/mcp/connectors/com.erzycall.app/erzy-call)
  🔐 - Make and take real phone calls.
- [formcarry](https://formcarry.com) `https://mcp.formcarry.com/mcp`
  [![formcarry MCP connector](https://glama.ai/mcp/connectors/com.formcarry.mcp/formcarry/badges/score.svg)](https://glama.ai/mcp/connectors/com.formcarry.mcp/formcarry)
  🔐 - Set up form handling for your site (email alerts, auto replies, webhooks) and query submissions.
- [Piloxa](https://piloxa.com) `https://piloxa.com/mcp`
  [![Piloxa MCP connector](https://glama.ai/mcp/connectors/com.piloxa/piloxa-certified-mail/badges/score.svg)](https://glama.ai/mcp/connectors/com.piloxa/piloxa-certified-mail)
  🔓 - Send a letter as printed USPS Certified Mail with tracking, from $13.18.
- [Resend](https://resend.com) `https://mcp.resend.com/mcp`
  🔐 - Send transactional email and manage sending domains.
- [SwarmMemo](https://swarmmemo.com) `https://swarmmemo.com/mcp`
  [![SwarmMemo MCP connector](https://glama.ai/mcp/connectors/com.swarmmemo/bulletin/badges/score.svg)](https://glama.ai/mcp/connectors/com.swarmmemo/bulletin)
  🔓 - Free public bulletin board where agents post, reply and find peers.
- [The Colony](https://thecolony.cc/for-agents) `https://thecolony.cc/mcp/`
  [![The Colony MCP connector](https://glama.ai/mcp/connectors/cc.thecolony/the-colony/badges/score.svg)](https://glama.ai/mcp/connectors/cc.thecolony/the-colony)
  🔓 - Forum and social network for AI agents: read posts anonymously; post, comment, vote and message with a token.
- [ThunderPhone](https://thunderphone.com) `https://api.thunderphone.com/v1/mcp`
  [![ThunderPhone MCP connector](https://glama.ai/mcp/connectors/io.github.thunderphone/thunderphone/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.thunderphone/thunderphone)
  🔐 - Build, test and run AI phone agents: numbers, inbound and outbound calls, campaigns and transcripts.
- [volai](https://volai.cz/en) `https://volai.cz/mcp`
  [![volai MCP connector](https://glama.ai/mcp/connectors/cz.volai/volai/badges/score.svg)](https://glama.ai/mcp/connectors/cz.volai/volai)
  🔐 - Buy Czech and Slovak numbers, place calls, send SMS and run a voice agent; auth is an API key.
- [wacli.me](https://wacli.me) `https://wacli.me/mcp`
  [![wacli.me MCP connector](https://glama.ai/mcp/connectors/me.wacli/whatsapp/badges/score.svg)](https://glama.ai/mcp/connectors/me.wacli/whatsapp)
  🔐 - Link your WhatsApp account to read, search and send messages.

### 📝 <a name="content-management"></a>Content Management

- [btlabs Core](https://btlabs.dev) `https://btlabs.dev/api/mcp`
  [![btlabs Core MCP connector](https://glama.ai/mcp/connectors/dev.btlabs/core/badges/score.svg)](https://glama.ai/mcp/connectors/dev.btlabs/core)
  🔐 - Manage a btlabs Core site: pages, posts, media, menus, redirects and AI-discovery settings.
- [Contentful](https://contentful.com) `https://mcp.contentful.com/mcp`
  🔑 - Manage Contentful entries, assets, and content models.
- [dochost](https://dochost.io/mcp) `https://dochost.io/api/mcp`
  [![dochost MCP connector](https://glama.ai/mcp/connectors/io.dochost/dochost/badges/score.svg)](https://glama.ai/mcp/connectors/io.dochost/dochost)
  🔓 - Publish Markdown or HTML as a hosted page and get a shareable link.
- [Foliyo](https://foliyo.io) `https://foliyo.io/mcp`
  [![Foliyo MCP connector](https://glama.ai/mcp/connectors/io.foliyo/foliyo/badges/score.svg)](https://glama.ai/mcp/connectors/io.foliyo/foliyo)
  🔐 - Create, brand, publish and track client-ready reports, proposals and research pages.
- [GoodBarber](https://www.goodbarber.com/mcp/) `https://mcp.goodbarber.dev/mcp/sse`
  [![GoodBarber MCP connector](https://glama.ai/mcp/connectors/dev.goodbarber/goodbarber-public-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.goodbarber/goodbarber-public-mcp)
  🔐 - Manage a GoodBarber no-code app: content, push notifications, shop orders, members, and analytics.
- [Lediv](https://lediv.com) `https://lediv.app/mcp`
  [![Lediv MCP connector](https://glama.ai/mcp/connectors/app.lediv/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.lediv/mcp)
  🔐 - Visual website builder synced with real code: edit files, publish, roll back, manage domains and previews.
- [LetX](https://letx.app/mcp/) `https://api.letx.app/mcp`
  [![LetX MCP connector](https://glama.ai/mcp/connectors/app.letx/letx/badges/score.svg)](https://glama.ai/mcp/connectors/app.letx/letx)
  🔐 - Write LaTeX from 1,000+ journal, thesis and CV templates and compile to PDF with the build log.
- [Sanity](https://sanity.io) `https://mcp.sanity.io/mcp`
  [![Sanity MCP connector](https://glama.ai/mcp/connectors/io.sanity.www/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.sanity.www/mcp)
  🔐 - Query and mutate Sanity datasets and documents.
- [Share Artifacts](https://shareartifacts.dev) `https://shareartifacts.dev/api/mcp`
  [![Share Artifacts MCP connector](https://glama.ai/mcp/connectors/io.github.arunai30/share-artifacts/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.arunai30/share-artifacts)
  🔐 - Publish and update static HTML reports, presentations, and explainers with controlled sharing.
- [sitectrl](https://sitectrl.ai/mcp) `https://mcp.sitectrl.ai/mcp`
  [![sitectrl MCP connector](https://glama.ai/mcp/connectors/ai.sitectrl/sitectrl/badges/score.svg)](https://glama.ai/mcp/connectors/ai.sitectrl/sitectrl)
  🔓 - Describe a site and get it live with SSL, forms and analytics; OAuth to edit and manage it.
- [SnapHost](https://snaphost.ai) `https://app.snaphost.ai/api/mcp`
  [![SnapHost MCP connector](https://glama.ai/mcp/connectors/ai.snaphost/snaphost/badges/score.svg)](https://glama.ai/mcp/connectors/ai.snaphost/snaphost)
  🔐 - Publish a page or site to a private link, control who can view it, and update it in place.
- [Storyblok](https://storyblok.com) `https://mcp.storyblok.com/mcp`
  🔓 - Manage Storyblok spaces, stories, and components.
- [Webflow](https://webflow.com) `https://mcp.webflow.com/mcp`
  [![Webflow MCP connector](https://glama.ai/mcp/connectors/com.webflow/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.webflow/mcp)
  🔐 - Manage Webflow sites, collections, and CMS items.
- [Wix](https://wix.com) `https://mcp.wix.com/mcp`
  [![Wix MCP connector](https://glama.ai/mcp/connectors/com.wix/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.wix/mcp)
  🔐 - Manage Wix sites, business data, and bookings.

### 👤 <a name="crm"></a>CRM
- [Data Parrot](https://dataparrot.ai) `https://api-v3.dataparrot.ai/api/v3/data-parrot/mcp`
  [![Data Parrot MCP connector](https://glama.ai/mcp/connectors/ai.dataparrot/data-parrot/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dataparrot/data-parrot)
  🔐 - AI revenue analysis of your HubSpot data.
- [Close](https://close.com) `https://mcp.close.com/mcp`
  [![Close MCP connector](https://glama.ai/mcp/connectors/com.close/close-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.close/close-mcp)
  🔐 - Read and update Close leads, contacts, and opportunities.
- [Connections](https://studio.connections.icu/connect) `https://studio.connections.icu/v1/mcp`
  [![Connections MCP connector](https://glama.ai/mcp/connectors/icu.connections/connections/badges/score.svg)](https://glama.ai/mcp/connectors/icu.connections/connections)
  🔐 - Manage contacts, host and ticket events, post marketplace deals, and keep notes and memory.
- [DOS AI](https://dosai.pro/en) `https://dosai.pro/api/mcp`
  [![DOS AI MCP connector](https://glama.ai/mcp/connectors/pro.dosai/dos-ai/badges/score.svg)](https://glama.ai/mcp/connectors/pro.dosai/dos-ai)
  🔓 - Run WhatsApp and Telegram AI assistants: projects, prompts, leads, chats and analytics; API key for calls.
- [HubSpot](https://hubspot.com) `https://mcp.hubspot.com/anthropic`
  🔐 - Query and update HubSpot CRM contacts, companies, and deals.
- [Oria CRM](https://realoria.com/crm/mcp) `https://realoria.com/api/mcp`
  [![Oria CRM MCP connector](https://glama.ai/mcp/connectors/com.realoria/crm/badges/score.svg)](https://glama.ai/mcp/connectors/com.realoria/crm)
  🔐 - Read pipeline, contacts, properties, viewings and auctions for a Romanian real-estate agency's CRM.

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

### 📊 <a name="data-visualization"></a>Data Visualization

- [chartlink](https://chartlink.app) `https://chartlink.app/mcp`
  [![chartlink MCP connector](https://glama.ai/mcp/connectors/io.github.oscarleoo/chartlink/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.oscarleoo/chartlink)
  🔓 - Charts and tables with live-updating embed links, drafted from one message; tools need a key.

### 🛠️ <a name="developer-tools"></a>Developer Tools
- [402cron](https://402cron.com) `https://402cron.com/mcp`
  [![402cron MCP connector](https://glama.ai/mcp/connectors/com.402cron/402cron/badges/score.svg)](https://glama.ai/mcp/connectors/com.402cron/402cron)
  🔓 - Paid cron for AI agents; paying with x402 USDC on Base issues a management token.
- [ADITUS Developer Portal MCP](https://developers.aditus.com/mcp) `https://developers.aditus.com/api/mcp`
  [![ADITUS Developer Portal MCP connector](https://glama.ai/mcp/connectors/com.aditus.developers/developer-portal/badges/score.svg)](https://glama.ai/mcp/connectors/com.aditus.developers/developer-portal)
  🔓 - Search and read the ADITUS event-technology API docs (ticketing, access, BI) and Shop Micro Frontend guides.
- [Agentic Atlas](https://agentic-atlas.dev/) `https://agentic-atlas.dev/mcp/`
  [![Agentic Atlas MCP connector](https://glama.ai/mcp/connectors/dev.agentic-atlas/atlas/badges/score.svg)](https://glama.ai/mcp/connectors/dev.agentic-atlas/atlas)
  🔓 - Field guide to building better agents: design patterns, tradeoffs and decision guidance.
- [AI Design Blueprint](https://aidesignblueprint.com) `https://aidesignblueprint.com/mcp`
  [![AI Design Blueprint MCP connector](https://glama.ai/mcp/connectors/com.aidesignblueprint/blueprint/badges/score.svg)](https://glama.ai/mcp/connectors/com.aidesignblueprint/blueprint)
  🔓 - Search 10 design principles, examples and guides; spec and UI validators on paid plans.
- [Astro Docs](https://astro.build) `https://mcp.docs.astro.build/mcp`
  🔓 - Search the Astro documentation.
- [Ausca](https://ausca.com) `https://ausca.com/mcp`
  [![Ausca MCP connector](https://glama.ai/mcp/connectors/com.ausca/agent-services/badges/score.svg)](https://glama.ai/mcp/connectors/com.ausca/agent-services)
  🔓 - Pay per call for remote browsers, receive-only inboxes, OCR, document analysis, and media transcription.
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
- [Cherry Notes](https://cherrynotes.app) `https://api.cherrynotes.app/mcp`
  [![Cherry Notes MCP connector](https://glama.ai/mcp/connectors/app.cherrynotes/cherry-notes/badges/score.svg)](https://glama.ai/mcp/connectors/app.cherrynotes/cherry-notes)
  🔐 - Capture features, ideas and tasks on your phone; your AI coding agent picks them up and ships them.
- [Cloudflare Docs](https://developers.cloudflare.com) `https://docs.mcp.cloudflare.com/mcp`
  🔓 - Search the Cloudflare developer documentation.
- [Coderbuds](https://coderbuds.com/docs/mcp?ref=awesome-remote-mcp) `https://coderbuds.com/mcp/insights`
  [![Coderbuds MCP connector](https://glama.ai/mcp/connectors/com.coderbuds/insights/badges/score.svg)](https://glama.ai/mcp/connectors/com.coderbuds/insights)
  🔐 - Read your team's delivery metrics and standards, and check a change against them before a PR.
- [DeepWiki](https://deepwiki.com) `https://mcp.deepwiki.com/mcp`
  🔓 - Ask questions about any public GitHub repository's generated wiki.
- [Electrik Slate](https://slate.electrik.dev) `https://mcp.slate.electrik.dev`
  [![Electrik Slate MCP connector](https://glama.ai/mcp/connectors/io.github.neerajsohal/slate/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.neerajsohal/slate)
  🔓 - Read Electrik Slate Blade component docs, blocks gallery, source, and llms.txt.
- [Email Spam Tester](https://email-spam-tester.com) `https://email-spam-tester.com/mcp`
  [![Email Spam Tester MCP connector](https://glama.ai/mcp/connectors/io.github.serg-tanichev/email-spam-tester/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.serg-tanichev/email-spam-tester)
  🔓 - Send a draft to a one-time address and get a spam score, 41 checks with RFC citations, and a fix plan.
- [GO AI Tools](https://goaichat.app/mcp-tools) `https://goaichat.app/mcp-tools/mcp`
  [![GO AI Tools MCP connector](https://glama.ai/mcp/connectors/app.goaichat/tools/badges/score.svg)](https://glama.ai/mcp/connectors/app.goaichat/tools)
  🔓 - 31 deterministic tools: image conversion, EXIF stripping, App Store assets, colour maths.
- [Globalping](https://globalping.io) `https://mcp.globalping.dev/mcp`
  🔐 - Run ping, traceroute, DNS, and HTTP checks from a global probe network.
- [HALLUX](https://blvkware.dev/hallux/) `https://api.blvkware.dev/hallux/mcp`
  [![HALLUX MCP connector](https://glama.ai/mcp/connectors/dev.blvkware/hallux/badges/score.svg)](https://glama.ai/mcp/connectors/dev.blvkware/hallux)
  🔓 - Check that a package, module or DOI exists in its registry before an agent installs, imports or cites it.
- [Hexum](https://hexum.dev) `https://hexum.dev/mcp`
  [![Hexum MCP connector](https://glama.ai/mcp/connectors/dev.hexum/hexum/badges/score.svg)](https://glama.ai/mcp/connectors/dev.hexum/hexum)
  🔑 - Shrink agent prompts, block forbidden imports without calling a model, and review PRs; zero data retention.
- [HTML/CSS to Image](https://htmlcsstoimage.com) `https://mcp.hcti.io`
  [![HTML/CSS to Image MCP connector](https://glama.ai/mcp/connectors/io.github.htmlcsstoimage/html-css-to-image/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.htmlcsstoimage/html-css-to-image)
  🔐 - Capture website screenshots, render HTML/CSS, and make templated graphics as images or PDFs.
- [Iminify](https://www.iminify.com/ai-agents) `https://www.iminify.com/mcp`
  [![Iminify MCP connector](https://glama.ai/mcp/connectors/com.iminify/iminify/badges/score.svg)](https://glama.ai/mcp/connectors/com.iminify/iminify)
  🔐 - Compress, convert and resize images, and scan web pages for every image they load.
- [Ionic Framework MCP Server by Capawesome](https://capawesome.io/docs/ai/mcp/ionic-framework/) `https://ionic-framework-mcp.capawesome.io/mcp`
  [![Ionic Framework MCP connector](https://glama.ai/mcp/connectors/io.capawesome/ionic-framework-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.capawesome/ionic-framework-mcp)
  🔓 - Unofficial: search the Ionic Framework docs for v8 and v9, with the component API and usage examples.
- [ipvolt Proxy Toolkit](https://ipvolt.com/mcp) `https://mcp.ipvolt.com/mcp`
  [![ipvolt Proxy Toolkit MCP connector](https://glama.ai/mcp/connectors/com.ipvolt.mcp/ipvolt-proxy-toolkit/badges/score.svg)](https://glama.ai/mcp/connectors/com.ipvolt.mcp/ipvolt-proxy-toolkit)
  🔓 - Search proxy setup guides, generate proxy configs and diagnose proxy errors.
- [Loadster](https://loadster.com/manual/ai-agents/) `https://api.loadster.com/mcp`
  [![Loadster MCP connector](https://glama.ai/mcp/connectors/com.loadster/loadster-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.loadster/loadster-mcp)
  🔐 - Run load tests and synthetic monitors, including Playwright scripts, and analyze results.
- [MemorySync Documentation](https://docs.memorysync.io/mcp/overview) `https://docs.memorysync.io/mcp`
  [![MemorySync Docs MCP connector](https://glama.ai/mcp/connectors/io.memorysync/docs/badges/score.svg)](https://glama.ai/mcp/connectors/io.memorysync/docs)
  🔓 - Search and read MemorySync's API, SDK and integration docs.
- [mumo](https://mumo.chat) `https://mumo.chat/api/mcp`
  [![mumo MCP connector](https://glama.ai/mcp/connectors/chat.mumo/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/chat.mumo/mcp)
  🔓 - Ask Claude, GPT, Grok and more, then see where their answers agree and where they challenge each other.
- [OpenRouter](https://openrouter.ai) `https://mcp.openrouter.ai/mcp`
  [![OpenRouter MCP connector](https://glama.ai/mcp/connectors/ai.openrouter.mcp/open-router/badges/score.svg)](https://glama.ai/mcp/connectors/ai.openrouter.mcp/open-router)
  🔐 - Look up OpenRouter model metadata and pricing, and run completions.
- [PartReel](https://partreel.com) `https://mcp.partreel.com/mcp`
  🔓 - Search and fetch 21k+ verified KiCad parts with symbol, footprint and 3D model for PCB design; CC-BY-4.0.
- [Ply UI](https://ply-ui.com) `https://mcp.ply-ui.com/mcp`
  🔓 - List, search and inspect copy-in Angular + Tailwind components for coding agents. Install locally with `npx -y ply-ui-mcp`.
- [Postman](https://postman.com) `https://mcp.postman.com/mcp`
  🔐 - Work with Postman collections, environments, and APIs.
- [Prompeteer](https://prompeteer.ai) `https://prompeteer.ai/mcp`
  [![Prompeteer MCP connector](https://glama.ai/mcp/connectors/ai.prompeteer/prompeteer/badges/score.svg)](https://glama.ai/mcp/connectors/ai.prompeteer/prompeteer)
  🔐 - Generates contextual prompts and agent skills for 140+ AI platforms, with a 16-dimension Prompt Score.
- [qarunbook](https://qarunbook.com) `https://qarunbook.com/api/mcp`
  [![qarunbook MCP connector](https://glama.ai/mcp/connectors/io.github.Ifeanyiejindu/qarunbook/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Ifeanyiejindu/qarunbook)
  🔑 - Shared app-testing runbook: read the plan, record results per platform and raise issues.
- [Razi Tools](https://www.razi.pro/developer) `https://www.razi.pro/api/mcp`
  [![Razi Tools MCP connector](https://glama.ai/mcp/connectors/io.github.razikallayi/razi-tools/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.razikallayi/razi-tools)
  🔓 - File and text tools: merge, split and compress PDFs, OCR, image compression, QR codes and JWTs.
- [ReMCP](https://remcp.site) `https://remcp.site/mcp`
  [![ReMCP MCP connector](https://glama.ai/mcp/connectors/site.remcp/re-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/site.remcp/re-mcp)
  🔐 - Remote access to paired computers: files, terminals, screenshots, search, and processes.
- [Routebase](https://routebase.dev/mcp-server/) `https://mcp.routebase.dev`
  [![Routebase MCP connector](https://glama.ai/mcp/connectors/dev.routebase.mcp/routebase/badges/score.svg)](https://glama.ai/mcp/connectors/dev.routebase.mcp/routebase)
  🔐 - Design, mock, test, document and monitor your APIs from one living OpenAPI spec.
- [Sato Hub](https://satohub.ai/mcp) `https://satohub.ai/api/mcp`
  [![Sato Hub MCP connector](https://glama.ai/mcp/connectors/ai.satohub/onchain-agents/badges/score.svg)](https://glama.ai/mcp/connectors/ai.satohub/onchain-agents)
  🔓 - Search a scored index of crypto-agent tooling, then preflight a repo, package, endpoint or token.
- [SkillAgent](https://skillagent.dev) `https://skillagent.dev/mcp`
  [![SkillAgent MCP connector](https://glama.ai/mcp/connectors/dev.skillagent/skills/badges/score.svg)](https://glama.ai/mcp/connectors/dev.skillagent/skills)
  🔓 - Search, rank and get install steps for AI agent skills, rules files and MCP servers indexed from GitHub.
- [SlopScore](https://slopscore.org) `https://slopscore.org/mcp`
  [![SlopScore MCP connector](https://glama.ai/mcp/connectors/org.slopscore/slopscore/badges/score.svg)](https://glama.ai/mcp/connectors/org.slopscore/slopscore)
  🔓 - Browse, search and scan a public leaderboard of AI-generated GitHub repos; voting needs a GitHub token.
- [Software Sausage](https://softwaresausage.com/mcp) `https://softwaresausage.com/api/mcp`
  [![Software Sausage MCP connector](https://glama.ai/mcp/connectors/io.github.pinkpwningclub/recipes/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.pinkpwningclub/recipes)
  🔓 - Search independent software and read-only agent workflows with roles, checks and safety boundaries.
- [Specpack](https://prompt-generator-website.com/mcp-server) `https://prompt-generator-website.com/mcp`
  [![Specpack MCP connector](https://glama.ai/mcp/connectors/io.github.THE-KIPDEV/specpack/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.THE-KIPDEV/specpack)
  🔓 - Turn a project description into a full build spec plus AGENTS.md and CLAUDE.md files.
- [Termalin](https://termal.in) `https://termal.in/mcp`
  [![Termalin MCP connector](https://glama.ai/mcp/connectors/in.termal/termalin-web/badges/score.svg)](https://glama.ai/mcp/connectors/in.termal/termalin-web)
  🔐 - Run commands and read or write files over SSH/SFTP on your enrolled servers.
- [ToolForte](https://toolforte.com/mcp) `https://toolforte.com/api/mcp`
  [![ToolForte MCP connector](https://glama.ai/mcp/connectors/io.github.Toinedotcom/toolforte/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Toinedotcom/toolforte)
  🔓 - IBAN/VAT/BSN checks, Dutch tax and dates, cron, regex, conversions and PDF or screenshot rendering.
- [UI Verify](https://uiverify.ai) `https://uiverify.ai/api/mcp`
  [![UI Verify MCP connector](https://glama.ai/mcp/connectors/ai.uiverify/ui-verify/badges/score.svg)](https://glama.ai/mcp/connectors/ai.uiverify/ui-verify)
  🔓 - Audit a web page for accessibility and layout issues.
- [Unblocked](https://getunblocked.com/unblocked-mcp/) `https://getunblocked.com/api/mcpsse`
  [![Unblocked MCP connector](https://glama.ai/mcp/connectors/com.getunblocked/unblocked-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.getunblocked/unblocked-mcp)
  🔐 - Give coding agents organizational context from code, docs, issues, and conversations.
- [VibeFix](https://vibe-fixer.com) `https://vibe-fixer.com/mcp`
  [![VibeFix MCP connector](https://glama.ai/mcp/connectors/com.vibe-fixer/vibefix/badges/score.svg)](https://glama.ai/mcp/connectors/com.vibe-fixer/vibefix)
  🔓 - Triage a broken Lovable, Base44, v0, Bolt or Replit app: the likely cause and the fix.
- [web3ctx](https://web3ctx.scarai.xyz) `https://mcp.scarai.xyz/mcp`
  [![web3ctx MCP connector](https://glama.ai/mcp/connectors/io.github.FarseenSh/web3ctx/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.FarseenSh/web3ctx)
  🔓 - Version-true web3 context: validated integration recipes, EIPs, ABIs and contract addresses.
- [Webhook Toolkit](https://webhook-toolkit.com) `https://webhook-toolkit.com/mcp`
  [![Webhook Toolkit MCP connector](https://glama.ai/mcp/connectors/io.github.THE-KIPDEV/webhook-toolkit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.THE-KIPDEV/webhook-toolkit)
  🔓 - Capture, read and replay webhook deliveries, and sign or verify webhook signatures.

### 🛒 <a name="e-commerce"></a>E-Commerce

- [AMZ Vault](https://www.amz-vault.com) `https://www.amz-vault.com/mcp`
  [![AMZ Vault MCP connector](https://glama.ai/mcp/connectors/com.amz-vault/amz-vault/badges/score.svg)](https://glama.ai/mcp/connectors/com.amz-vault/amz-vault)
  🔐 - Run an Amazon seller brand: profit analytics, PPC, inventory forecasting, listings and staged approvals.
- [China Sourcing Audit](https://lu7897859-tech.github.io/doors/sourcing-audit/) `https://x402-stable-door.lu7897859.workers.dev/mcp`
  [![China Sourcing Audit MCP connector](https://glama.ai/mcp/connectors/io.github.lu7897859-tech/china-sourcing-audit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.lu7897859-tech/china-sourcing-audit)
  🔓 - Verify Chinese suppliers before paying: fake factories, badge fraud, hijacked payments.
- [Nexez](https://nexez.ai/agents) `https://nexez.app/mcp`
  🔓 - Search merchants, inspect offers, and validate checkout or negotiation before buying.
- [NotRobophobic Shop](https://notrobo.shop) `https://notrobo.shop/mcp/shop`
  [![NotRobophobic Shop MCP connector](https://glama.ai/mcp/connectors/shop.notrobo/shop/badges/score.svg)](https://glama.ai/mcp/connectors/shop.notrobo/shop)
  🔓 - Browse prints and merch about the nights machines beat us, build a basket and check out.
- [Origine Paris](https://origineparis.com) `https://mcp.origineparis.com/mcp`
  [![Origine Paris MCP connector](https://glama.ai/mcp/connectors/com.origineparis/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.origineparis/mcp)
  🔓 - Paris jewellery house catalogue: recycled 18k gold, lab-grown diamonds, collections and bespoke.
- [Pollen](https://pollen.elytron.in) `https://pollen.elytron.in/mcp`
  [![Pollen MCP connector](https://glama.ai/mcp/connectors/in.elytron/pollen/badges/score.svg)](https://glama.ai/mcp/connectors/in.elytron/pollen)
  🔓 - Score, enrich, and publish your Shopify or WooCommerce catalog so AI agents can find and recommend it.
- [PoloPan Fashion MCP](https://polopan.com) `https://mcp-server.polopan.com/mcp`
  [![PoloPan Fashion MCP connector](https://glama.ai/mcp/connectors/com.polopan.mcp-server/mcp-fashion/badges/score.svg)](https://glama.ai/mcp/connectors/com.polopan.mcp-server/mcp-fashion)
  🔓 - Shop fashion: break an outfit photo into items, get in-stock looks for an occasion and check out.
- [Sense2](https://sense2.com.au) `https://sense2.com.au/api/mcp`
  🔓 - Search 4,000+ Australian promotional products, get quantity-break quotes, browse categories and case studies.
- [Stienhardt Diamond MCP](https://stienhardt.com/agents.md?utm_source=awesome_remote_mcp&utm_medium=directory&utm_campaign=diamond_mcp) `https://diamond-mcp.stienhardt.workers.dev/mcp`
  🔓 - Diamond education, grading-report guidance, face-up size estimates, and read-only jewelry catalog search.
- [Tenmomo](https://tenmomo.com) `https://tenmomo.com/mcp`
  [![Tenmomo MCP connector](https://glama.ai/mcp/connectors/com.tenmomo/tenmomo/badges/score.svg)](https://glama.ai/mcp/connectors/com.tenmomo/tenmomo)
  🔓 - Search 2,700+ US stores for cashback rates and live coupon codes, and get tracked store links.

### 🌳 <a name="environment"></a>Environment

- [Aevia](https://aeviamodeler.ai/mcp?src=awesome-remote) `https://app.aeviamodeler.ai/api/v1/connector/mcp`
  [![Aevia MCP connector](https://glama.ai/mcp/connectors/ai.aeviamodeler/aevia/badges/score.svg)](https://glama.ai/mcp/connectors/ai.aeviamodeler/aevia)
  🔐 - Life cycle assessment: connect to LCA databases, build product systems and analyze the results.
- [Ambee](https://ambeedata.com) `https://api-mcp-server.ambeedata.com/mcp`
  [![Ambee MCP connector](https://glama.ai/mcp/connectors/com.ambeedata.api-mcp-server/mcp-ambee/badges/score.svg)](https://glama.ai/mcp/connectors/com.ambeedata.api-mcp-server/mcp-ambee)
  🔓 - Weather, air quality, pollen, and other environmental data.
- [Digital-Simon EMS](https://umweltsicherheit.org/mcp) `https://mcp.umweltsicherheit.org/mcp`
  [![Digital-Simon EMS MCP connector](https://glama.ai/mcp/connectors/org.umweltsicherheit.mcp/digital-simon-ems/badges/score.svg)](https://glama.ai/mcp/connectors/org.umweltsicherheit.mcp/digital-simon-ems)
  🔑 - Device list, live readings and history for PV, storage and meters; switching only with explicit approval.
- [echorune](https://echorune.net) `https://echorune.net/mcp`
  [![echorune MCP connector](https://glama.ai/mcp/connectors/io.github.luoshu-echorune/echorune-radar/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.luoshu-echorune/echorune-radar)
  🔓 - Current weather, a two-hour rain curve and a rain-radar map drawn as text.
- [FindEnergyRates](https://findenergyrates.com) `https://findenergyrates.com/mcp`
  [![FindEnergyRates MCP connector](https://glama.ai/mcp/connectors/com.findenergyrates/electricity-rates/badges/score.svg)](https://glama.ai/mcp/connectors/com.findenergyrates/electricity-rates)
  🔐 - Live US retail electricity plans and price-to-compare rates by utility or ZIP; free key by email.
- [GreenCalculus](https://greencalculus.com/developers/) `https://mcp.greencalculus.com`
  [![GreenCalculus MCP connector](https://glama.ai/mcp/connectors/com.greencalculus/api/badges/score.svg)](https://glama.ai/mcp/connectors/com.greencalculus/api)
  🔓 - Sourced greenhouse-gas emission factors and audit-traced carbon calculations.
- [Gridbert](https://www.gridbert.at) `https://mcp.gridbert.at/mcp`
  [![Gridbert MCP connector](https://glama.ai/mcp/connectors/at.gridbert/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/at.gridbert/mcp)
  🔐 - Austrian household electricity: compare tariffs, validate invoices, and analyze smart meter load profiles.
- [GridHub](https://grid-hub.app/developers) `https://api.grid-hub.app/mcp`
  [![GridHub MCP connector](https://glama.ai/mcp/connectors/io.github.jalcodev/gridhub/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jalcodev/gridhub)
  🔓 - Electricity prices and demand for 25 US, EU, GB and AU grid zones; free samples, then key or x402.
- [Korea Ocean Leisure](https://korea-ocean-mcp.picks-site.workers.dev/) `https://korea-ocean-mcp.picks-site.workers.dev/mcp`
  [![Korea Ocean Leisure MCP connector](https://glama.ai/mcp/connectors/io.github.sean-park-funda/korea-ocean-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sean-park-funda/korea-ocean-mcp)
  🔓 - Korean tide times for 42 stations plus fishing, mudflat, beach, surf and scuba forecasts.

### 📂 <a name="file-storage"></a>File Storage

- [agentleFS](https://agentlefs.com/?ref=awesome-remote-mcp-servers) `https://mcp.agentlefs.com/mcp`
  [![agentleFS MCP connector](https://glama.ai/mcp/connectors/com.agentlefs/agentlefs/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentlefs/agentlefs)
  🔐 - Agent permissions for the files your team shares: each agent reads only what its person can.
- [Box](https://box.com) `https://mcp.box.com/`
  [![Box MCP connector](https://glama.ai/mcp/connectors/com.box.mcp/box/badges/score.svg)](https://glama.ai/mcp/connectors/com.box.mcp/box)
  🔐 - Search, read, and manage files stored in Box.
- [quickS3](https://quicks3.com/s3-mcp-server/) `https://quicks3.com/mcp`
  [![quickS3 MCP connector](https://glama.ai/mcp/connectors/com.quicks3/quicks3/badges/score.svg)](https://glama.ai/mcp/connectors/com.quicks3/quicks3)
  🔐 - List, upload, download, and share files in S3, R2, B2, Wasabi, and Spaces buckets, scoped by delegated roles.

### 💰 <a name="finance"></a>Finance
- [100pro Token Risk Screen](https://x402.rendraputra.dev/llms.txt) `https://x402.rendraputra.dev/mcp`
  [![100pro Token Risk Screen MCP connector](https://glama.ai/mcp/connectors/dev.rendraputra/100pro-token-risk/badges/score.svg)](https://glama.ai/mcp/connectors/dev.rendraputra/100pro-token-risk)
  🔓 - Pre-trade risk screen for EVM and Solana tokens: honeypots, LP lock, holders; $0.05 via x402.


- [Aave](https://aave.com) `https://mcp.aave.com`
  [![Aave MCP connector](https://glama.ai/mcp/connectors/com.aave.mcp/aave/badges/score.svg)](https://glama.ai/mcp/connectors/com.aave.mcp/aave)
  🔓 - Aave V3 and V4 markets, rates, wallet positions, governance and non-custodial transaction building.
- [Agent Margin Router](https://agentmarginrouter.com) `https://agent-margin-router-production.up.railway.app/mcp`
  [![AgentMarginRouter MCP connector](https://glama.ai/mcp/connectors/io.github.AgentMarginRouter/agent-margin-router/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AgentMarginRouter/agent-margin-router)
  🔓 - Live gas fees and USD tx costs on Base, Ethereum, Arbitrum, Optimism and Polygon; x402 pay-per-call.
- [Agent Souk](https://agentsouk.dev) `https://api.agentsouk.dev/mcp`
  [![Agent Souk MCP connector](https://glama.ai/mcp/connectors/dev.agentsouk/agentsouk/badges/score.svg)](https://glama.ai/mcp/connectors/dev.agentsouk/agentsouk)
  🔓 - Marketplace for AI agents: register in one call, hire or sell services, and post USDC bounties on Base.
- [AgenticBooks](https://www.agenticbooks.ai) `https://mcp.agenticbooks.ai/mcp`
  [![AgenticBooks MCP connector](https://glama.ai/mcp/connectors/ai.agenticbooks.mcp/agentic-books/badges/score.svg)](https://glama.ai/mcp/connectors/ai.agenticbooks.mcp/agentic-books)
  🔐 - Double-entry startup books from live bank and billing feeds: P&L, balances, transaction review, period close.
- [AgentWorld](https://agentworld.me) `https://agentworld.me/mcp`
  🔓 - Agent economy on Base: free city, agent and job data, plus x402-paid chat and credit scoring.
- [aikstockdata](https://aikstockdata.com/en) `https://mcp.aikstockdata.com/mcp`
  [![aikstockdata MCP connector](https://glama.ai/mcp/connectors/com.aikstockdata/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.aikstockdata/mcp)
  🔓 - Korean stocks: daily closes, minute-stamped DART filings, earnings and post-filing price paths.
- [Algolab MCP](https://algolab.vn/mcp) `https://mcp.algolab.vn/free`
  [![Algolab MCP connector](https://glama.ai/mcp/connectors/vn.algolab/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/vn.algolab/mcp)
  🔓 - Vietnam stock market data: prices, financials, broker research, macro indicators and a VN-Index forecast.
- [AlphaPipeline](https://alphapipeline-eu.onrender.com) `https://alphapipeline-eu.onrender.com/mcp`
  [![AlphaPipeline MCP connector](https://glama.ai/mcp/connectors/com.onrender.alphapipeline/alpha-pipeline-agent-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.onrender.alphapipeline/alpha-pipeline-agent-mcp)
  🔓 - Crypto trading data via x402: Polymarket arbitrage, kimchi premium, token unlocks and funding rates.
- [ausecon](https://auseconmcp.com) `https://mcp.auseconmcp.com/mcp`
  [![ausecon MCP connector](https://glama.ai/mcp/connectors/io.github.AnthonyPuggs/ausecon-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AnthonyPuggs/ausecon-mcp-server)
  🔓 - Read-only Australian economic data from ABS, RBA and APRA, including GDP, inflation and interest rates.
- [Autoview](https://autoview.com/) `https://api.autoview.com/mcp/`
  [![Autoview MCP connector](https://glama.ai/mcp/connectors/io.github.autoview-com/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.autoview-com/mcp)
  🔓 - Trade across 22+ exchanges and brokers; dry-run by default, live trading on Kraken and Crypto.com.
- [Beyond Payday](https://beyondpayday.com/mcp) `https://beyondpayday.com/api/mcp`
  [![Beyond Payday MCP connector](https://glama.ai/mcp/connectors/com.beyondpayday/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.beyondpayday/mcp)
  🔐 - Household finance planner: cash flow, net worth, bills, debts, savings goals and retirement projections.
- [BrinkerAdvisor Rates](https://mcp.brinkeradvisor.com/support) `https://mcp.brinkeradvisor.com/mcp`
  [![BrinkerAdvisor Rates MCP connector](https://glama.ai/mcp/connectors/com.brinkeradvisor.mcp/brinker-advisor-rates/badges/score.svg)](https://glama.ai/mcp/connectors/com.brinkeradvisor.mcp/brinker-advisor-rates)
  🔓 - Compare CD, money-market and Treasury rates from public records and build illustrative ladders.
- [Business Verify](https://mbiyepyh.gensparkclaw.com/docs) `https://mbiyepyh.gensparkclaw.com/mcp`
  [![Business Verify MCP connector](https://glama.ai/mcp/connectors/com.gensparkclaw.mbiyepyh/business-verify/badges/score.svg)](https://glama.ai/mcp/connectors/com.gensparkclaw.mbiyepyh/business-verify)
  🔑 - Check a US business's status, formation date and registered agent by name and state; $0.05 a call.
- [Candor Finance](https://candor.money) `https://api.candor.money/mcp`
  [![Candor Finance MCP connector](https://glama.ai/mcp/connectors/money.candor/candor-finance/badges/score.svg)](https://glama.ai/mcp/connectors/money.candor/candor-finance)
  🔐 - Personal-finance workspace: connected accounts, spending, budgets, goals and investments.
- [CeylonCharts](https://www.ceyloncharts.com) `https://mcp.ceyloncharts.com/mcp`
  [![CeylonCharts MCP connector](https://glama.ai/mcp/connectors/com.ceyloncharts.mcp/ceylon-charts/badges/score.svg)](https://glama.ai/mcp/connectors/com.ceyloncharts.mcp/ceylon-charts)
  🔐 - Colombo Stock Exchange (CSE) market data — prices, fundamentals, technicals, screening, and macro indicators.
- [Company Check](https://api.foretak.dev) `https://api.foretak.dev/mcp`
  [![Company Check MCP connector](https://glama.ai/mcp/connectors/io.github.foretak/registry-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.foretak/registry-mcp)
  🔓 - Look up companies and filings in the UK, Norwegian and Swedish registers, plus UK charges and insolvencies.
- [CompliAPI](https://compliapi.com) `https://api.compliapi.com/mcp`
  [![CompliAPI MCP connector](https://glama.ai/mcp/connectors/com.compliapi/screening/badges/score.svg)](https://glama.ai/mcp/connectors/com.compliapi/screening)
  🔓 - Screen crypto addresses, emails, websites, IDs and countries against OFAC, EU, UK and other sanctions lists.
- [Compound Interesting](https://compoundinterest.ing/mcp) `https://api.compoundinterest.ing/mcp`
  [![Compound Interesting MCP connector](https://glama.ai/mcp/connectors/ing.compoundinterest/market-intelligence/badges/score.svg)](https://glama.ai/mcp/connectors/ing.compoundinterest/market-intelligence)
  🔓 - Insider trades, Congress disclosures and 13F holdings for 4,600+ US stocks; data needs a free key.
- [CryptoMacro](https://asistent-crypto.vercel.app/a2a) `https://asistent-crypto.vercel.app/mcp`
  [![CryptoMacro MCP connector](https://glama.ai/mcp/connectors/io.github.dopionut-jpg/crypto-data-market-analysis/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.dopionut-jpg/crypto-data-market-analysis)
  🔓 - Crypto positioning and macro regime: funding, open interest, implied volatility and Fed rates.
- [CurveCall](https://curvecall.onrender.com) `https://curvecall.onrender.com/mcp/`
  [![CurveCall MCP connector](https://glama.ai/mcp/connectors/io.github.arbonomous/curvecall/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.arbonomous/curvecall)
  🔓 - Trade quotes and slippage, token snapshots and rug-risk scans; $0.001-$0.01 per call via x402.
- [CVR Lookup](https://cvrlookup.dk/mcp) `https://cvrlookup.dk/api/mcp`
  [![CVR Lookup MCP connector](https://glama.ai/mcp/connectors/dk.cvrlookup/cvr-lookup/badges/score.svg)](https://glama.ai/mcp/connectors/dk.cvrlookup/cvr-lookup)
  🔓 - Danish company register: lookups, name search and annual-report financials; data needs a free key.
- [DeepLedger](https://deepledger.ai) `https://mcp.deepledger.ai/mcp`
  [![DeepLedger MCP connector](https://glama.ai/mcp/connectors/ai.deepledger/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.deepledger/mcp)
  🔐 - AI accountant for QuickBooks: record transactions, run reports, manage AR/AP and close the month.
- [Eagle Virtual](https://eaglevirtual.com/mcp) `https://mcp.eaglevirtual.com/mcp`
  [![Eagle Virtual MCP connector](https://glama.ai/mcp/connectors/com.eaglevirtual/stablecoin-freeze-tracker/badges/score.svg)](https://glama.ai/mcp/connectors/com.eaglevirtual/stablecoin-freeze-tracker)
  🔓 - Check any wallet against the dated on-chain record of USDT and USDC blacklistings, freezes and seizures.
- [Edgrapi](https://edgrapi.com) `https://api.edgrapi.com/mcp`
  [![Edgrapi MCP connector](https://glama.ai/mcp/connectors/io.github.paperandbeyond23-gif/edgrapi-skills/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.paperandbeyond23-gif/edgrapi-skills)
  🔓 - SEC EDGAR filings as JSON: Form 4 insider trades, 8-K, 13F, 13D/G stakes, XBRL; data tools need a free key.
- [Fi-Plan](https://www.fi-plan.in) `https://www.fi-plan.in/mcp`
  [![Fi-Plan MCP connector](https://glama.ai/mcp/connectors/in.fi-plan/fi-plan/badges/score.svg)](https://glama.ai/mcp/connectors/in.fi-plan/fi-plan)
  🔓 - Financial simulator for Indian salaries: loans, taxes, SIPs, and 50-year FIRE plans.
- [FlexYield](https://flexyield.io) `https://flexyield.io/mcp`
  [![FlexYield MCP connector](https://glama.ai/mcp/connectors/io.flexyield/flex-yield-blockchain-rpc-gateway/badges/score.svg)](https://glama.ai/mcp/connectors/io.flexyield/flex-yield-blockchain-rpc-gateway)
  🔓 - RPC gateway for six mainnets with failover: balances, history, ABIs, gas and transactions; x402 pay-per-call.
- [Foresee](https://go-foresee.com) `https://agents.go-foresee.com/mcp`
  [![Foresee MCP connector](https://glama.ai/mcp/connectors/io.github.Foresee-Tech/foresee/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Foresee-Tech/foresee)
  🔓 - Compare live home and auto insurance quotes from carriers' own sites.
- [Fruit Stand](https://fruitstand.dev) `https://api.fruitstand.dev/mcp`
  [![Fruit Stand MCP connector](https://glama.ai/mcp/connectors/dev.fruitstand/fund-returns/badges/score.svg)](https://glama.ai/mcp/connectors/dev.fruitstand/fund-returns)
  🔓 - Historical return data for funds and tickers.
- [GROUNDTRUTH](https://groundtruths.xyz) `https://api.groundtruths.xyz/mcp`
  [![GROUNDTRUTH MCP connector](https://glama.ai/mcp/connectors/xyz.groundtruths/groundtruth/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.groundtruths/groundtruth)
  🔓 - Pump.fun and Robinhood Chain memecoin outcomes and creator records; 5 free calls a day, then x402.
- [Hundo](https://hundo.finance/connect) `https://hundo.finance/mcp`
  [![Hundo MCP connector](https://glama.ai/mcp/connectors/finance.hundo/hundo/badges/score.svg)](https://glama.ai/mcp/connectors/finance.hundo/hundo)
  🔐 - Personal ledger: net worth, accounts, budgets and IOUs, with drafts you confirm; needs a paid plan.
- [Invompt](https://www.invompt.com) `https://mcp.invompt.com/mcp`
  [![Invompt MCP connector](https://glama.ai/mcp/connectors/com.invompt/invompt/badges/score.svg)](https://glama.ai/mcp/connectors/com.invompt/invompt)
  🔐 - Create invoices and review them before sending.
- [Jithox E-Invoice](https://jithox.com/mcp/einvoice) `https://mcp.jithox.com/mcp`
  [![Jithox E-Invoice MCP connector](https://glama.ai/mcp/connectors/com.jithox/einvoice-readiness/badges/score.svg)](https://glama.ai/mcp/connectors/com.jithox/einvoice-readiness)
  🔓 - Read-only EU e-invoice checks: invoice structure, VAT format, VIES and Peppol lookup; tools need OAuth.
- [Kairos Signal](https://kairossignal.com) `https://kairossignal.com/mcp`
  [![Kairos Signal MCP connector](https://glama.ai/mcp/connectors/com.kairossignal/kairos-signal-63-layer-symplectic-neural-ode/badges/score.svg)](https://glama.ai/mcp/connectors/com.kairossignal/kairos-signal-63-layer-symplectic-neural-ode)
  🔓 - Query DePIN supply telemetry and network data with source, observation time, and verification links.
- [Kema Invoice](https://invoice.kema-studio.com) `https://mcp.kema-studio.com/api/mcp`
  [![Kema Invoice MCP connector](https://glama.ai/mcp/connectors/com.kema-studio/invoice/badges/score.svg)](https://glama.ai/mcp/connectors/com.kema-studio/invoice)
  🔐 - Compliant French e-invoicing for freelancers: create, issue, certify and track invoices, quotes and deposits.
- [Kristo Intelligence](https://kristo-intelligence-api.onrender.com) `https://kristo-intelligence-api.onrender.com/mcp`
  🔓 - DeFi trading signals and market intelligence on Base; x402 pay-per-call in USDC.
- [Kyrodata](https://kyrodata.com) `https://mcp.kyrodata.com/mcp`
  [![Kyrodata MCP connector](https://glama.ai/mcp/connectors/com.kyrodata/kyrodata/badges/score.svg)](https://glama.ai/mcp/connectors/com.kyrodata/kyrodata)
  🔐 - Brazilian exports and imports by HS code and partner, plus crop production, climate and commodity forecasts.
- [LimitGuard](https://limitguard.ai) `https://api.limitguard.ai/mcp`
  [![LimitGuard MCP connector](https://glama.ai/mcp/connectors/ai.limitguard.api/trust-intelligence/badges/score.svg)](https://glama.ai/mcp/connectors/ai.limitguard.api/trust-intelligence)
  🔓 - Verify Dutch and Belgian companies (KVK, KBO), EU VAT, sanctions and PEPs, with a risk score; key or x402.
- [LitVM TCG Oracle](https://litvm.the-undesirables.com) `https://litvm.the-undesirables.com/mcp`
  [![LitVM TCG Oracle MCP connector](https://glama.ai/mcp/connectors/com.the-undesirables.litvm/lit-vm-tcg-oracle/badges/score.svg)](https://glama.ai/mcp/connectors/com.the-undesirables.litvm/lit-vm-tcg-oracle)
  🔓 - TCG price oracle for LitecoinVM: Merkle-proven prices, calibrated forecasts and fantasy souls; 13 free tools.
- [Loophole Tape](https://api.loopholetape.com) `https://api.loopholetape.com/mcp`
  [![Loophole Tape MCP connector](https://glama.ai/mcp/connectors/io.github.gosadu/loophole-tape/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gosadu/loophole-tape)
  🔓 - pump.fun launch-risk checks and Robinhood Chain launch data; free tools, paid ones settle per call via x402.
- [MarketMaster](https://marketmaster.live/developers) `https://api.marketmaster.live/mcp`
  [![MarketMaster MCP connector](https://glama.ai/mcp/connectors/live.marketmaster/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/live.marketmaster/mcp)
  🔓 - Kalshi and Polymarket data: cross-venue matching, arbitrage after fees and whale trades; free key.
- [Midpoint Card Prices](https://www.cardcenteringtool.com/mcp) `https://mcp.cardcenteringtool.com/mcp`
  [![Midpoint Card Prices MCP connector](https://glama.ai/mcp/connectors/com.cardcenteringtool/card-prices/badges/score.svg)](https://glama.ai/mcp/connectors/com.cardcenteringtool/card-prices)
  🔓 - Trading card prices and grading ROI for 1.5M+ Pokémon, TCG and sports cards: raw and PSA 9/10 values, movers.
- [NuMetric](https://numetric.work) `https://numetric-mcp.virifi.xyz/mcp`
  [![NuMetric MCP connector](https://glama.ai/mcp/connectors/xyz.virifi.numetric-mcp/numetric/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.virifi.numetric-mcp/numetric)
  🔐 - Read-only NuMetric accounting and ERP data: statements, KPIs, receivables, payables, invoices and documents.
- [Octagon](https://octagonagents.com) `https://mcp.octagonagents.com/mcp`
  [![Octagon MCP connector](https://glama.ai/mcp/connectors/com.octagonagents.mcp/octagon/badges/score.svg)](https://glama.ai/mcp/connectors/com.octagonagents.mcp/octagon)
  🔐 - Private- and public-market financial research data.
- [Open Economics](https://open-economics-data.knbf982hkn.chatgpt.site/en/mcp) `https://open-economics-data.knbf982hkn.chatgpt.site/api/mcp`
  [![Open Economics MCP connector](https://glama.ai/mcp/connectors/io.github.felipegambettadesouza6-jpg/open-economics/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.felipegambettadesouza6-jpg/open-economics)
  🔓 - Find and query official Brazilian economic data with provenance.
- [Oxaide](https://oxaide.com/agents) `https://oxaide.com/mcp`
  [![Oxaide MCP connector](https://glama.ai/mcp/connectors/io.github.leewenjie/oxaide/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.leewenjie/oxaide)
  🔓 - Cited Singapore company research (ACRA/URA/GeBIZ) at S$49/390/1500 per job.
- [Plaid](https://plaid.com) `https://api.dashboard.plaid.com/mcp/sse`
  🔑 - Query Plaid dashboard data for connected financial accounts.
- [Qotien](https://qotien.fr) `https://app.qotien.fr/api/fiscal/v1/mcp`
  [![Qotien MCP connector](https://glama.ai/mcp/connectors/io.github.herve-coulon/tax-retirement/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.herve-coulon/tax-retirement)
  🔓 - French income tax, IFI, PER and 32 pension schemes, sourced to primary law and dated; x402 pay-per-call.
- [Quantral](https://quantral.com/mcp) `https://app.quantral.com/api/mcp`
  [![Quantral MCP connector](https://glama.ai/mcp/connectors/com.quantral/sentiment/badges/score.svg)](https://glama.ai/mcp/connectors/com.quantral/sentiment)
  🔐 - Per-stock sentiment scores, top signals, monthly recaps and the underlying mentions.
- [Quidli Connect](https://connect.quid.li) `https://mcp.connect.quid.li`
  🔓 - Resolve social handles to EVM and Solana wallets, score onchain reputation and send USDC.
- [Rechnungslotse](https://rechnungslotse.de/mcp) `https://rechnungslotse.de/api/mcp`
  [![Rechnungslotse MCP connector](https://glama.ai/mcp/connectors/de.rechnungslotse/e-rechnung/badges/score.svg)](https://glama.ai/mcp/connectors/de.rechnungslotse/e-rechnung)
  🔓 - German e-invoicing: create, validate and read XRechnung and ZUGFeRD invoices against EN 16931.
- [Sector Pulse](https://sector-pulse.app) `https://sector-pulse.app/api/mcp`
  [![Sector Pulse MCP connector](https://glama.ai/mcp/connectors/io.github.christianhonap7-sys/sector-pulse/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.christianhonap7-sys/sector-pulse)
  🔓 - US sector rotation: 30 sector baskets ranked each session, with a daily record; history needs a key.
- [Shingou](https://shingou.io) `https://api.shingou.io/mcp`
  [![Shingou MCP connector](https://glama.ai/mcp/connectors/io.shingou/sentiment/badges/score.svg)](https://glama.ai/mcp/connectors/io.shingou/sentiment)
  🔓 - Hourly news sentiment and market events for 30 crypto pairs, with source links and hashed history; free key.
- [SNACS](https://snacs.trade/api) `https://mcp.snacs.trade`
  [![SNACS MCP connector](https://glama.ai/mcp/connectors/trade.snacs.mcp/snacstrade/badges/score.svg)](https://glama.ai/mcp/connectors/trade.snacs.mcp/snacstrade)
  🔐 - Point-in-time SEC filings, dilution forensics, market data and fundamentals for US equities.
- [SnowSignals TrendVane](https://snowsignals.io) `https://snowsignals.io/mcp`
  [![SnowSignals TrendVane MCP connector](https://glama.ai/mcp/connectors/io.snowsignals/snowsignals/badges/score.svg)](https://glama.ai/mcp/connectors/io.snowsignals/snowsignals)
  🔓 - Market-phase state per currency across timeframes (not trade signals); free phase stats, metered live reads.
- [StackEasy](https://www.stackeasy.ai/mcp) `https://data.stackeasy.ai/mcp`
  [![StackEasy MCP connector](https://glama.ai/mcp/connectors/ai.stackeasy/credit-cards/badges/score.svg)](https://glama.ai/mcp/connectors/ai.stackeasy/credit-cards)
  🔐 - Read-only view of your credit cards: balances, utilization, best card for a purchase and missed rewards.
- [Stocks On Chain](https://stocksonchain.io) `https://stocksonchain.io/mcp`
  [![Stocks On Chain MCP connector](https://glama.ai/mcp/connectors/io.stocksonchain/stocks-on-chain/badges/score.svg)](https://glama.ai/mcp/connectors/io.stocksonchain/stocks-on-chain)
  🔓 - Tokenized listed stocks by chain and issuer, with contract addresses and on-chain corporate actions.
- [Stoxly](https://www.stoxlyonline.com/mcp) `https://www.stoxlyonline.com/api/mcp`
  [![Stoxly MCP connector](https://glama.ai/mcp/connectors/io.github.wizard-exe/stoxly/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.wizard-exe/stoxly)
  🔓 - Free stock and ETF fundamental analysis: 10-criteria score, verdict, and key metrics for any ticker.
- [Tessera Analytics](https://tesseralytics.dev/mcp-server) `https://tesseralytics.dev/mcp`
  [![Tessera Analytics MCP connector](https://glama.ai/mcp/connectors/dev.tesseralytics/hyperliquid-data/badges/score.svg)](https://glama.ai/mcp/connectors/dev.tesseralytics/hyperliquid-data)
  🔓 - Daily Hyperliquid perp funding, positioning and crowding across every market; tools need a free key.
- [The Undesirables TCG Oracle](https://the-undesirables.com) `https://mcp.the-undesirables.com/mcp`
  [![The Undesirables TCG Oracle MCP connector](https://glama.ai/mcp/connectors/io.github.sailorpepe/undesirables-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sailorpepe/undesirables-mcp-server)
  🔓 - On-chain oracle for 456K+ trading cards: prices, forecasts, AI grading; free reads, paid via x402.
- [TraderSpy](https://traderspy.app/mcp) `https://mcp.traderspy.app/mcp`
  [![TraderSpy MCP connector](https://glama.ai/mcp/connectors/app.traderspy/traderspy/badges/score.svg)](https://glama.ai/mcp/connectors/app.traderspy/traderspy)
  🔓 - Crypto futures signals, whale positions on four exchanges, indicators and a screener; free key.
- [TradingCalc](https://tradingcalc.io) `https://tradingcalc.io/api/mcp`
  [![TradingCalc MCP connector](https://glama.ai/mcp/connectors/io.github.SKalinin909/tradingcalc/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.SKalinin909/tradingcalc)
  🔓 - Deterministic crypto futures, on-chain risk, and prediction-market math — 31 tools, not AI estimates.
- [USDi](https://www.usdicoin.com/) `https://usdi-mcp.onrender.com/mcp`
  [![USDi MCP connector](https://glama.ai/mcp/connectors/io.github.MikeAshtonEILLC/usdi-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.MikeAshtonEILLC/usdi-mcp-server)
  🔓 - CPI-indexed cryptocurrency: live exchange rate, contract/pool addresses, and mint/redeem mechanics.
- [Vantage](https://vantagemcp.dev) `https://vantagemcp.dev/mcp`
  [![Vantage MCP connector](https://glama.ai/mcp/connectors/dev.vantagemcp/vantage/badges/score.svg)](https://glama.ai/mcp/connectors/dev.vantagemcp/vantage)
  🔐 - Ask questions about cloud cost and usage data.
- [VetAgent](https://vetagent.dev) `https://vetagent.dev/mcp`
  [![VetAgent MCP connector](https://glama.ai/mcp/connectors/dev.vetagent/vetagent/badges/score.svg)](https://glama.ai/mcp/connectors/dev.vetagent/vetagent)
  🔓 - Pre-trade crypto token risk check: sell simulation, taxes, liquidity depth and pair age.
- [Finology Software](https://finology.tech/developers/) `https://mcp.finology.tech/mcp`
  🔑 - US federal student loan payments, forgiveness timing and tax, cited to primary sources.
- [skanfirmy](https://skanfirmy.pl) `https://skanfirmy.pl/mcp`
  [![skanfirmy MCP connector](https://glama.ai/mcp/connectors/io.github.bartosz-kuc/skanfirmy/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bartosz-kuc/skanfirmy)
  🔓 - Verify Polish companies by NIP, KRS or REGON, plus the VAT white list and EU VAT via VIES.
- [VoxOdds](https://voxodds.com) `https://voxodds.com/mcp`
  [![VoxOdds MCP connector](https://glama.ai/mcp/connectors/com.voxodds/voxodds/badges/score.svg)](https://glama.ai/mcp/connectors/com.voxodds/voxodds)
  🔓 - Live Polymarket and Kalshi odds, executable quotes with fees, and pre-bet EV checks.
- [Vurto Swap](https://swap.vurto.cc) `https://swap.vurto.cc/mcp`
  [![Vurto Swap MCP connector](https://glama.ai/mcp/connectors/io.github.cryptoconspiracy/vurto-swap/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.cryptoconspiracy/vurto-swap)
  🔓 - Token swaps on 9 EVM chains and Solana ranked by net received; returns unsigned transactions.

- [x402-agent-data](https://x402-agent.majighufron.workers.dev) `https://x402-agent.majighufron.workers.dev/mcp`
  [![x402-agent-data MCP connector](https://glama.ai/mcp/connectors/io.github.AjiGhufron9999/x402-agent-data/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AjiGhufron9999/x402-agent-data)
  🔓 - On-chain data: ERC-20 reports, contract DD, pool depth and wallet activity; USDC per call via x402.

### 🍽️ <a name="food--dining"></a>Food & Dining

- [Agent Chef](https://agentchef.net) `https://agentchef.net/mcp`
  [![Agent Chef MCP connector](https://glama.ai/mcp/connectors/net.agentchef/agent-chef/badges/score.svg)](https://glama.ai/mcp/connectors/net.agentchef/agent-chef)
  🔐 - Weekly family dinner ballot: propose recipes, the household votes, and get a grocery list.
- [Cork & Curve](https://corkandcurve.com/agents/) `https://corkandcurve.com/mcp`
  [![Cork & Curve MCP connector](https://glama.ai/mcp/connectors/com.corkandcurve/wine-travel/badges/score.svg)](https://glama.ai/mcp/connectors/com.corkandcurve/wine-travel)
  🔓 - Vineyards, tasting rooms and wine bars in 37 European wine regions, plus festivals and tours.
- [G-Guest](https://g-guest.app/developers) `https://g-guest.app/api/mcp`
  [![G-Guest MCP connector](https://glama.ai/mcp/connectors/app.g-guest/g-guest/badges/score.svg)](https://glama.ai/mcp/connectors/app.g-guest/g-guest)
  🔓 - Check live availability and book, look up or cancel a table at real restaurants and local businesses.
- [HeyYumi](https://heyyumi.ai) `https://mcp.heyyumi.ai/mcp`
  [![HeyYumi MCP connector](https://glama.ai/mcp/connectors/ai.heyyumi/heyyumi/badges/score.svg)](https://glama.ai/mcp/connectors/ai.heyyumi/heyyumi)
  🔐 - Search verified Korean restaurants and bars by filters, then request a table booking in chat.
- [TableJourney](https://tablejourney.com/agents/) `https://tablejourney.com/mcp`
  [![TableJourney MCP connector](https://glama.ai/mcp/connectors/com.tablejourney/food-travel/badges/score.svg)](https://glama.ai/mcp/connectors/com.tablejourney/food-travel)
  🔓 - Restaurants, markets and street food in 200+ cities, plus food festivals and bookable tours.
- [bordeaux.guru](https://bordeaux.guru/mcp-server/) `https://mcp.bordeaux.guru/mcp`
  [![bordeaux.guru MCP connector](https://glama.ai/mcp/connectors/guru.bordeaux/en-primeur/badges/score.svg)](https://glama.ai/mcp/connectors/guru.bordeaux/en-primeur)
  🔓 - First-hand Bordeaux en primeur tasting notes, appellation climate, vine phenology and terroir geodata.
- [NYCfoodie](https://nycfoodie-production.up.railway.app/) `https://nycfoodie-production.up.railway.app/mcp`
  [![NYCfoodie MCP connector](https://glama.ai/mcp/connectors/app.railway.up.nycfoodie-production/nycfoodie/badges/score.svg)](https://glama.ai/mcp/connectors/app.railway.up.nycfoodie-production/nycfoodie)
  🔓 - Editorial NYC restaurant recommendations: search, compare, guides and ratings.

### 🎮 <a name="gaming"></a>Gaming

- [Deckodex](https://deckodex.com/assistant) `https://deckodex.com/mcp`
  [![Deckodex MCP connector](https://glama.ai/mcp/connectors/com.deckodex/deckodex/badges/score.svg)](https://glama.ai/mcp/connectors/com.deckodex/deckodex)
  🔐 - Gundam Card Game cards, prices, tournament meta, and your Deckodex collection and decks.
- [Playgama](https://playgama.com/mcp/) `https://developer.playgama.com/api/mcp`
  [![Playgama MCP connector](https://glama.ai/mcp/connectors/com.playgama.developer/playgama-developer-cabinet/badges/score.svg)](https://glama.ai/mcp/connectors/com.playgama.developer/playgama-developer-cabinet)
  🔑 - Publish and manage HTML5 games on Playgama: game form, builds, covers, in-app catalog, sandbox link.
- [Shared Forest](https://sharedforest.com) `https://sharedforest.com/mcp`
  [![Shared Forest MCP connector](https://glama.ai/mcp/connectors/io.github.ArneFfm/shared-forest/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ArneFfm/shared-forest)
  🔓 - Plant one tree a day in a shared illustrated forest, read its stats, and sponsor trees with OAuth.
- [SpaceMolt](https://www.spacemolt.com) `https://game.spacemolt.com/mcp/v2`
  [![SpaceMolt MCP connector](https://glama.ai/mcp/connectors/io.github.statico-alt/spacemolt/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.statico-alt/spacemolt)
  🔓 - MMO for AI agents: mine, trade, craft, explore and fight across a 500-system galaxy.
- [WagerX](https://wagerx.io/agent-gateway) `https://wagerx.io/mcp`
  [![WagerX MCP connector](https://glama.ai/mcp/connectors/io.wagerx/wager-x-crypto-casinos/badges/score.svg)](https://glama.ai/mcp/connectors/io.wagerx/wager-x-crypto-casinos)
  🔓 - Source-linked gambling regulatory intelligence and real-money crypto casino audit evidence.

### 🏋️ <a name="health--fitness"></a>Health & Fitness

- [Blocks](https://blocks.zone/ai) `https://blocks.zone/api/mcp`
  [![Blocks MCP connector](https://glama.ai/mcp/connectors/zone.blocks/blocks/badges/score.svg)](https://glama.ai/mcp/connectors/zone.blocks/blocks)
  🔐 - Plan and review cycling and running: training calendar, synced rides, sleep and HRV.
- [Povver](https://povver.ai) `https://mcp.povver.ai/mcp`
  [![Povver MCP connector](https://glama.ai/mcp/connectors/ai.povver/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/ai.povver/mcp-server)
  🔐 - Your strength-training data: workout history, per-lift trends, muscle-group volume and routines.

### 🧠 <a name="knowledge--memory"></a>Knowledge & Memory

- [AIeph](https://aieph.dev) `https://aieph.dev/mcp`
  [![AIeph MCP connector](https://glama.ai/mcp/connectors/dev.aieph/aieph/badges/score.svg)](https://glama.ai/mcp/connectors/dev.aieph/aieph)
  🔓 - Look up a shared cache of past answers to programming questions.
- [Atlas Red](https://atlas-red.com/mind-map-mcp) `https://app.atlas-red.com/mcp`
  [![Atlas Red MCP connector](https://glama.ai/mcp/connectors/com.atlas-red/mind-map/badges/score.svg)](https://glama.ai/mcp/connectors/com.atlas-red/mind-map)
  🔐 - Create and edit mind maps — nodes, links, and subtrees — then export them or render one as an image.
- [Bilg](https://app.bilgai.com/docs/connect?ref=mcp-directory) `https://mcp.bilgai.com/mcp`
  [![Bilg MCP connector](https://glama.ai/mcp/connectors/com.bilgai/bilg/badges/score.svg)](https://glama.ai/mcp/connectors/com.bilgai/bilg)
  🔐 - Shared memory for coding agents and their teams: search docs, read and write epics, tasks and decisions.
- [bsv.cx](https://bsv.cx) `https://bsv.cx/mcp`
  [![bsv.cx MCP connector](https://glama.ai/mcp/connectors/cx.bsv/bsv-cx/badges/score.svg)](https://glama.ai/mcp/connectors/cx.bsv/bsv-cx)
  🔓 - Timestamp and verify evidence on-chain; let your agent prove what it saw and when.
- [docs2mcp](https://docs2mcp.com) `https://mcp.docs2mcp.com/mcp`
  [![docs2mcp MCP connector](https://glama.ai/mcp/connectors/com.docs2mcp/docs2mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.docs2mcp/docs2mcp)
  🔐 - Query your own PDFs and documents, with every answer linking to the exact page and region it came from.
- [emem](https://emem.dev) `https://emem.dev/mcp`
  [![emem MCP connector](https://glama.ai/mcp/connectors/io.github.Vortx-AI/emem/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Vortx-AI/emem)
  🔓 - Elevation, vegetation, flood, fire and air-quality facts for any place, each with a signed receipt.
- [Flash](https://flashmemorize.com) `https://flashmemorize.com/mcp`
  🔐 - Spaced-repetition flashcards: create cards from notes, get quizzed by voice, and let FSRS schedule reviews.
- [FoxNose Knowledge](https://foxnose.net/docs/mcp) `https://mcp.foxnose.net/_mcp`
  [![FoxNose Knowledge MCP connector](https://glama.ai/mcp/connectors/net.foxnose/knowledge/badges/score.svg)](https://glama.ai/mcp/connectors/net.foxnose/knowledge)
  🔑 - Hybrid search over vectors, full text and structured filters, with auto-embeddings.
- [HAIDAA](https://haidaa.com/mcp) `https://mcp.haidaa.com/mcp`
  [![HAIDAA MCP connector](https://glama.ai/mcp/connectors/com.haidaa.mcp/haidaa/badges/score.svg)](https://glama.ai/mcp/connectors/com.haidaa.mcp/haidaa)
  🔓 - Search signed scientific claims, methods, provenance, contradictions, retractions, and admission receipts.
- [Hugging Face](https://huggingface.co) `https://huggingface.co/mcp`
  [![Hugging Face MCP connector](https://glama.ai/mcp/connectors/co.huggingface/hf-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/co.huggingface/hf-mcp-server)
  🔓 - Search models, datasets, and Spaces, and call Space APIs.
- [Kika](https://getkika.app/mcp) `https://api.getkika.app/mcp`
  [![Kika MCP connector](https://glama.ai/mcp/connectors/io.github.usekika/kika/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.usekika/kika)
  🔐 - Shared memory for a client engagement: decisions, blockers, promises and what was already tried.
- [MemorySync](https://memorysync.io) `https://mcp.memorysync.io/mcp`
  [![MemorySync MCP connector](https://glama.ai/mcp/connectors/io.memorysync/memory/badges/score.svg)](https://glama.ai/mcp/connectors/io.memorysync/memory)
  🔐 - Scoped, persistent memory for agents to save, inspect and recall decisions across sessions.
- [MarkIt](https://mark-it.co) `https://mark-it.co/api/mcp`
  [![MarkIt MCP connector](https://glama.ai/mcp/connectors/io.github.FuzulsFriend/markit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.FuzulsFriend/markit)
  🔓 - Search, save and set reminders in your library of saved links, posts and notes; sign in to unlock all tools.
- [MMW](https://mmwhub.tech) `https://mcp.mmwhub.tech/mcp`
  [![MMW MCP connector](https://glama.ai/mcp/connectors/tech.mmwhub.mcp/mmw/badges/score.svg)](https://glama.ai/mcp/connectors/tech.mmwhub.mcp/mmw)
  🔐 - Persistent agent memory workspace with strict tenant isolation and provenance.
- [Mnemoverse](https://mnemoverse.com) `https://mcp.mnemoverse.com/mcp`
  [![Mnemoverse MCP connector](https://glama.ai/mcp/connectors/io.github.mnemoverse/mcp-memory-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.mnemoverse/mcp-memory-server)
  🔐 - Persistent agent memory; tell it a recalled memory helped or misled and it re-ranks the next recall.
- [NoteMCP](https://notemcp.com) `https://notemcp.com/mcp`
  [![NoteMCP MCP connector](https://glama.ai/mcp/connectors/com.notemcp/notemcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.notemcp/notemcp)
  🔐 - Long-term memory from your notes: search, read and edit notes saved by text, voice or share sheet.
- [Notion](https://notion.com) `https://mcp.notion.com/mcp`
  🔐 - Read and write Notion pages, databases, and comments.
- [notepad.page](https://notepad.page) `https://mcp.notepad.page/mcp`
  [![notepad.page MCP connector](https://glama.ai/mcp/connectors/page.notepad/notepad/badges/score.svg)](https://glama.ai/mcp/connectors/page.notepad/notepad)
  🔓 - Publish, recall and update persistent private HTML pages at a personal address; publishing needs OAuth.
- [Ontonym](https://www.ontonym.com) `https://mcp.ontonym.com/mcp`
  [![Ontonym MCP connector](https://glama.ai/mcp/connectors/com.ontonym/memory/badges/score.svg)](https://glama.ai/mcp/connectors/com.ontonym/memory)
  🔐 - Give your agents your team's real data: read the shared graph, and propose actions a human approves.
- [OwnerSpec](https://ownerspec.com/mcp-server/) `https://ownerspec.com/mcp`
  [![OwnerSpec MCP connector](https://glama.ai/mcp/connectors/com.ownerspec/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.ownerspec/mcp)
  🔓 - Cited home water treatment answers: diagnose a water problem, size a softener, and match replacement parts.
- [QianYuan 乾元](https://qianyuan.ltd) `https://qianyuan.ltd/mcp`
  [![QianYuan MCP connector](https://glama.ai/mcp/connectors/ltd.qianyuan/qy-evolution/badges/score.svg)](https://glama.ai/mcp/connectors/ltd.qianyuan/qy-evolution)
  🔓 - Reuse verified results and pitfalls other agents already published, before doing the work yourself.
- [Remnant](https://remnant.dedale-bi.com/connect) `https://remnant.dedale-bi.com/mcp`
  [![Remnant MCP connector](https://glama.ai/mcp/connectors/com.dedale-bi.remnant/remnant/badges/score.svg)](https://glama.ai/mcp/connectors/com.dedale-bi.remnant/remnant)
  🔓 - Search reusable agent knowledge and inspect evidence-backed Trust Passports; free public beta.
- [Rootr](https://rootr.io) `https://rootr.io/mcp`
  [![Rootr MCP connector](https://glama.ai/mcp/connectors/io.github.inspirio-co/rootr-cli/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.inspirio-co/rootr-cli)
  🔐 - Read, search and write team docs, tables, issues and CRM records, with answers citing their source.
- [Sensefold](https://sensefold.app/for-agents) `https://api.sensefold.app/mcp`
  [![Sensefold MCP connector](https://glama.ai/mcp/connectors/app.sensefold/sensefold/badges/score.svg)](https://glama.ai/mcp/connectors/app.sensefold/sensefold)
  🔐 - Search, read and write your saved articles, threads, PDFs, notes and AI chats as Markdown.
- [Synapse Layer](https://synapselayer.org) `https://forge.synapselayer.org/api/mcp`
  [![Synapse Layer MCP connector](https://glama.ai/mcp/connectors/io.github.SynapseLayer/synapse-layer/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.SynapseLayer/synapse-layer)
  🔓 - Persistent encrypted agent memory with semantic recall and cross-agent continuity.
- [UseMyContext](https://usemycontext.ai) `https://mcp.usemycontext.ai/mcp`
  [![UseMyContext MCP connector](https://glama.ai/mcp/connectors/io.github.usemycontext/usemycontext/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.usemycontext/usemycontext)
  🔓 - Your own profile and files as AI context; anonymous access gets metadata only.
- [Vilix AI](https://vilix.ai) `https://api.vilix.ai/mcp`
  [![Vilix AI MCP connector](https://glama.ai/mcp/connectors/ai.vilix.api/vilix-ai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.vilix.api/vilix-ai)
  🔐 - Persistent AI memory shared across tools and devices.
- [What Led To](https://whatledto.com) `https://whatledto.com/mcp`
  [![What Led To MCP connector](https://glama.ai/mcp/connectors/com.whatledto/what-led-to/badges/score.svg)](https://glama.ai/mcp/connectors/com.whatledto/what-led-to)
  🔓 - Source-backed timelines of tech, economy and gaming events, with the quote behind each entry.

### ⚖️ <a name="legal"></a>Legal

- [Court Rules](https://www.courtrules.app) `https://mcp.courtrules.app/mcp`
  [![Court Rules MCP connector](https://glama.ai/mcp/connectors/app.courtrules/court-rules/badges/score.svg)](https://glama.ai/mcp/connectors/app.courtrules/court-rules)
  🔓 - US judge filing rules, court holidays and enforcement data; free samples, OAuth for full access.
- [LibreJustice](https://librejustice.fr) `https://librejustice.fr/mcp`
  [![LibreJustice MCP connector](https://glama.ai/mcp/connectors/fr.librejustice/librejustice/badges/score.svg)](https://glama.ai/mcp/connectors/fr.librejustice/librejustice)
  🔐 - French and European case law and legislation, searched in plain language and linked article by article.

### 🎯 <a name="marketing"></a>Marketing

- [Adsap](https://adsap.ai) `https://mcp.adsap.ai/mcp`
  [![Adsap MCP connector](https://glama.ai/mcp/connectors/ai.adsap/adsap/badges/score.svg)](https://glama.ai/mcp/connectors/ai.adsap/adsap)
  🔐 - Meta and Google Ads automation: launch ads in bulk and preview every change first.

- [Advisors AI Service Navigator](https://advisorsai.ai) `https://advisorsai.ai/mcp`
  [![Advisors AI Service Navigator MCP connector](https://glama.ai/mcp/connectors/ai.advisorsai/service-navigator/badges/score.svg)](https://glama.ai/mcp/connectors/ai.advisorsai/service-navigator)
  🔓 - Read-only catalog of five services, a public-page check, and a request-link; nothing is charged.


- [Advisors AI Store Readiness](https://advisorsai.ai) `https://advisorsai.ai/store-readiness-mcp`
  [![Advisors AI Store Readiness MCP connector](https://glama.ai/mcp/connectors/ai.advisorsai/store-readiness/badges/score.svg)](https://glama.ai/mcp/connectors/ai.advisorsai/store-readiness)
  🔓 - Check a public page's robots, sitemap, JSON-LD, canonical tags and llms.txt.


- [AfterLaunch](https://afterlaunch.io) `https://afterlaunch.io/api/mcp`
  [![AfterLaunch MCP connector](https://glama.ai/mcp/connectors/io.afterlaunch/agentic-growth-marketing/badges/score.svg)](https://glama.ai/mcp/connectors/io.afterlaunch/agentic-growth-marketing)
  🔓 - AI answer visibility, SEO and a ranked backlog of growth moves; tools need an account.
- [agentbuilt](https://agentbuilt.dev/mcp) `https://agentbuilt.dev/api/mcp`
  [![agentbuilt MCP connector](https://glama.ai/mcp/connectors/dev.agentbuilt/agentbuilt/badges/score.svg)](https://glama.ai/mcp/connectors/dev.agentbuilt/agentbuilt)
  🔓 - Free AI-readiness audit of any URL: AI crawler rules, JS-free text, JSON-LD, llms.txt and concrete fixes.

- [BanProof](https://banproof.io) `https://banproof.io/mcp`
  [![BanProof MCP connector](https://glama.ai/mcp/connectors/io.banproof/ban-proof-ai/badges/score.svg)](https://glama.ai/mcp/connectors/io.banproof/ban-proof-ai)
  🔓 - Check TikTok Shop and Amazon affiliate video scripts for policy violations and draft ban appeal letters.
- [BizIntel](https://mcp-bizintel-production.up.railway.app) `https://mcp-bizintel-production.up.railway.app/mcp`
  [![BizIntel MCP connector](https://glama.ai/mcp/connectors/io.github.bch1212/bizintel/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bch1212/bizintel)
  🔓 - Audit websites, detect tech stacks, and find and score local businesses without a website.
- [CalmSEO](https://calmseo.com) `https://mcp.calmseo.com/mcp`
  [![CalmSEO MCP connector](https://glama.ai/mcp/connectors/com.calmseo/seo-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.calmseo/seo-mcp)
  🔐 - Free Google Search Console analytics plus credit-based SERP, keyword, and page audit tools.
- [ConferenceGrid](https://conferencegrid.com/mcp) `https://conferencegrid.com/api/mcp`
  [![ConferenceGrid MCP connector](https://glama.ai/mcp/connectors/com.conferencegrid/conferencegrid/badges/score.svg)](https://glama.ai/mcp/connectors/com.conferencegrid/conferencegrid)
  🔐 - Which conferences a company sponsors, exhibits at or speaks at, and which events are open to sponsors.
- [pSEO Engine](https://quantumcx.net/pseo-engine) `https://pseo.quantumcx.net/api/agent/mcp`
  [![pSEO Engine MCP connector](https://glama.ai/mcp/connectors/net.quantumcx/pseo-engine/badges/score.svg)](https://glama.ai/mcp/connectors/net.quantumcx/pseo-engine)
  🔓 - Programmatic SEO: research, generate, audit and publish landing pages at scale; reads are free.

- [DABLOCK AI Visibility Index](https://dablock.ai) `https://dablock.ai/mcp`
  [![DABLOCK MCP connector](https://glama.ai/mcp/connectors/ai.dablock/visibility-index/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dablock/visibility-index)
  🔓 - Weekly share of answer for 24 crypto and Web3 brands in ChatGPT, Perplexity and Gemini.
- [DABYTE AI Visibility Index](https://dabyte.ai) `https://dabyte.ai/mcp`
  [![DABYTE MCP connector](https://glama.ai/mcp/connectors/ai.dabyte/visibility-index/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dabyte/visibility-index)
  🔓 - Weekly share of answer for 20 SaaS and AI brands in ChatGPT, Perplexity and Gemini.
- [DripRaven](https://dripraven.com) `https://app.dripraven.com/mcp`
  [![DripRaven MCP connector](https://glama.ai/mcp/connectors/com.dripraven/dripraven/badges/score.svg)](https://glama.ai/mcp/connectors/com.dripraven/dripraven)
  🔐 - WhatsApp Business campaigns: import and segment contacts, schedule broadcasts and track delivery.
- [FoxForm](https://foxform.app) `https://mcp.foxform.app/mcp`
  [![FoxForm MCP connector](https://glama.ai/mcp/connectors/app.foxform.mcp/fox-form/badges/score.svg)](https://glama.ai/mcp/connectors/app.foxform.mcp/fox-form)
  🔓 - Build scored forms, quizzes and calculators, publish them, and read responses with per-screen analytics.
- [GingerLive](https://gingerlive.io) `https://mcp.gingerlive.io/mcp`
  [![GingerLive MCP connector](https://glama.ai/mcp/connectors/io.gingerlive/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.gingerlive/mcp)
  🔓 - Livestream ad formats, network reach stats, campaign case studies and streamer program.
- [GoodLeads](https://goodleads.club) `https://mcp.goodleads.club/mcp`
  [![GoodLeads MCP connector](https://glama.ai/mcp/connectors/club.goodleads/new-business-owner-contacts/badges/score.svg)](https://glama.ai/mcp/connectors/club.goodleads/new-business-owner-contacts)
  🔓 - Reach the owner of a newly formed business the morning after the state posts it, from the state's own filing.
- [Hermoso](https://hermoso.ai) `https://app.hermoso.ai/mcp`
  [![Hermoso MCP connector](https://glama.ai/mcp/connectors/io.github.hermoso-ai/hermoso/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hermoso-ai/hermoso)
  🔓 - Research competitor ads, generate image and video ads, schedule social posts and run paid ad campaigns.
- [Layrcake](https://layrcake.dev) `https://mcp.layrcake.dev/mcp`
  [![Layrcake MCP connector](https://glama.ai/mcp/connectors/dev.layrcake.mcp/layrcake/badges/score.svg)](https://glama.ai/mcp/connectors/dev.layrcake.mcp/layrcake)
  🔐 - Find leads, enrich them to verified emails, detect intent and launch human-approved campaigns.

- [Lekta](https://lekta.dev) `https://lekta.dev/mcp`
  [![Lekta MCP connector](https://glama.ai/mcp/connectors/dev.lekta/lektadev/badges/score.svg)](https://glama.ai/mcp/connectors/dev.lekta/lektadev)
  🔓 - Audit a site's visibility in AI answer engines (AEO/GEO).
- [LocationLists](https://locationlists.com) `https://locationlists.com/mcp`
  [![LocationLists MCP connector](https://glama.ai/mcp/connectors/io.github.kylehawke-stack/locationlists/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.kylehawke-stack/locationlists)
  🔓 - Search 725 US business-location datasets (dealers, contractors, chains), preview real rows, and buy CSVs.
- [LogoKit](https://logokit.com) `https://mcp.logokit.com/mcp`
  [![LogoKit MCP connector](https://glama.ai/mcp/connectors/com.logokit/brand-data/badges/score.svg)](https://glama.ai/mcp/connectors/com.logokit/brand-data)
  🔑 - Company logos, brand colors, and firmographic data by domain.
- [Mailcoach](https://mailcoach.app) `https://mcp.mailcoach.app`
  🔐 - Read subscribers, campaigns, stats and email logs; create drafts and templates, and send test emails.
- [Mencoro](https://mencoro.com) `https://api.mencoro.com/mcp`
  [![Mencoro MCP connector](https://glama.ai/mcp/connectors/com.mencoro/mencoro/badges/score.svg)](https://glama.ai/mcp/connectors/com.mencoro/mencoro)
  🔐 - Track brand rank, mentions, sentiment and Share of Voice in ChatGPT, Perplexity and Google AI answers.
- [Miraqo](https://miraqo.io) `https://app.miraqo.io/mcp`
  [![Miraqo MCP connector](https://glama.ai/mcp/connectors/io.github.deleteweb/seo/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.deleteweb/seo)
  🔐 - Rankings, audits, backlinks, Search Console and AI visibility for your Miraqo SEO projects.
- [nowyourlink](https://nowyourlink.com) `https://nowyourlink.com/mcp`
  [![nowyourlink MCP connector](https://glama.ai/mcp/connectors/io.github.ArneFfm/nowyourlink/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ArneFfm/nowyourlink)
  🔓 - Read the current daily homepage Spotlight ad and browse the archive of settled auction days.
- [NumberBroom](https://numberbroom.com/mcp-server) `https://numberbroom.com/mcp`
  [![NumberBroom MCP connector](https://glama.ai/mcp/connectors/io.github.cameron-creations/numberbroom-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.cameron-creations/numberbroom-mcp)
  🔓 - Check a US phone's line type, carrier and TCPA litigator status before dialing; tools need a prepaid key.
- [Plainrouter Sandbox](https://plainrouter.com/docs/mcp/setup) `https://plainrouter.com/mcp/sandbox`
  [![Plainrouter Sandbox MCP connector](https://glama.ai/mcp/connectors/com.plainrouter/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.plainrouter/mcp)
  🔓 - Test Meta advertising account, signal-health, and performance tools with synthetic data.
- [QRFLOW.codes](https://qrflow.codes) `https://qrflow.codes/mcp`
  [![QRFLOW.codes MCP connector](https://glama.ai/mcp/connectors/codes.qrflow/qrflow/badges/score.svg)](https://glama.ai/mcp/connectors/codes.qrflow/qrflow)
  🔐 - Create QR codes, re-point printed dynamic codes, name links on your own domain, and read scan analytics.
- [RedReplier](https://redreplier.com) `https://mcp.redreplier.com/mcp`
  [![RedReplier MCP connector](https://glama.ai/mcp/connectors/com.redreplier/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.redreplier/mcp-server)
  🔐 - Find Reddit, Hacker News, X and Bluesky posts mentioning your product, scored as leads.
- [SearcherLite](https://searcherlite.com) `https://searcherlite.com/api/mcp`
  [![SearcherLite MCP connector](https://glama.ai/mcp/connectors/com.searcherlite/searcherlite/badges/score.svg)](https://glama.ai/mcp/connectors/com.searcherlite/searcherlite)
  🔐 - Google keyword, domain, backlink and AI-visibility data, paid per lookup in credits with no subscription.
- [Spytrend](https://spytrend.com/mcp/?utm_source=awesome-remote-mcp&utm_medium=directory&utm_campaign=mcp-launch) `https://mcp.spytrend.com/mcp`
  [![Spytrend MCP connector](https://glama.ai/mcp/connectors/com.spytrend/spytrend/badges/score.svg)](https://glama.ai/mcp/connectors/com.spytrend/spytrend)
  🔐 - Search Meta and TikTok ads, find the advertisers behind them, and rank what is scaling.
- [Statable](https://statable.com) `https://mcp.statable.com/mcp`
  [![Statable MCP connector](https://glama.ai/mcp/connectors/com.statable/analytics/badges/score.svg)](https://glama.ai/mcp/connectors/com.statable/analytics)
  🔐 - Cookieless, EU-hosted web analytics: visitors, pages, sources, countries, goals, funnels and live traffic.
- [Superflow Free Tools](https://usesuperflow.ai/tools) `https://usesuperflow.ai/api/mcp`
  [![Superflow Free Tools MCP connector](https://glama.ai/mcp/connectors/ai.usesuperflow/tools/badges/score.svg)](https://glama.ai/mcp/connectors/ai.usesuperflow/tools)
  🔓 - Free website QA and AI-visibility checks: AI crawlability, robots.txt, llms.txt, JSON-LD and social previews.
- [TheQRCode.io](https://theqrcode.io/mcp) `https://mcp.theqrcode.io/mcp`
  [![TheQRCode.io MCP connector](https://glama.ai/mcp/connectors/io.theqrcode/qr-code-generator/badges/score.svg)](https://glama.ai/mcp/connectors/io.theqrcode/qr-code-generator)
  🔓 - Generate QR codes, list saved codes, and read scan analytics by time, device and approximate location.
- [Vibe Prospecting](https://vibeprospecting.ai) `https://vibeprospecting.explorium.ai/mcp`
  🔐 - Search companies and contacts, enrich lead lists, and research B2B business signals.

### 📊 <a name="monitoring"></a>Monitoring

- [APIzone](https://apizone.io) `https://apizone.io/api/mcp`
  🔓 - Check whether any of 294 third-party APIs is down, with uptime history and recent outages.
- [Cloudflare Observability](https://developers.cloudflare.com) `https://observability.mcp.cloudflare.com/mcp`
  🔐 - Query Workers logs, analytics, and error events.
- [Codex Reset](https://codex-reset.com/developers) `https://codex-reset.com/mcp`
  [![Codex Reset MCP connector](https://glama.ai/mcp/connectors/com.codex-reset/codex-reset/badges/score.svg)](https://glama.ai/mcp/connectors/com.codex-reset/codex-reset)
  🔓 - Codex usage-limit reset odds for the next 24/48h, past resets and Codex service status.
- [EventSend](https://eventsend.io) `https://eventsend.io/mcp`
  [![EventSend MCP connector](https://glama.ai/mcp/connectors/io.eventsend/eventsend/badges/score.svg)](https://glama.ai/mcp/connectors/io.eventsend/eventsend)
  🔐 - Query your product's event history, delivery health and plan usage, e.g. what failed in checkout today.
- [Flowsery](https://flowsery.com) `https://mcp.flowsery.com/mcp`
  [![Flowsery MCP connector](https://glama.ai/mcp/connectors/com.flowsery/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.flowsery/mcp-server)
  🔐 - Web analytics, revenue attribution, visitor profiles and AI-found bugs from session recordings.
- [Grafana](https://grafana.com) `https://mcp.grafana.com/mcp`
  [![Grafana MCP connector](https://glama.ai/mcp/connectors/io.github.grafana/mcp-grafana/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.grafana/mcp-grafana)
  🔐 - Query Grafana dashboards, datasources, and alerts.
- [HTTPStatus](https://httpstatus.com/mcp/) `https://mcp.httpstatus.com/mcp`
  [![HTTPStatus MCP connector](https://glama.ai/mcp/connectors/com.httpstatus/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.httpstatus/mcp-server)
  🔐 - Create API mocks and run tests, security checks, automation workflows, and uptime monitors.
- [MCPulse](https://getmcpulse.com) `https://api.getmcpulse.com/mcp`
  [![MCPulse MCP connector](https://glama.ai/mcp/connectors/com.getmcpulse.api/mcpulse/badges/score.svg)](https://glama.ai/mcp/connectors/com.getmcpulse.api/mcpulse)
  🔐 - Query your own MCP server's tool calls, first-call success, retries, empty results, and schema cost.
- [Rootly](https://rootly.com) `https://mcp.rootly.com/mcp`
  🔐 - Manage Rootly incidents, alerts, and on-call schedules.
- [RunVouch](https://runvouch.com) `https://api.runvouch.com/mcp`
  [![RunVouch MCP connector](https://glama.ai/mcp/connectors/com.runvouch/runvouch/badges/score.svg)](https://glama.ai/mcp/connectors/com.runvouch/runvouch)
  🔓 - Find out why an unattended run stalled or failed and read tamper-evident proof; needs a free key.
- [Sentry](https://sentry.io) `https://mcp.sentry.dev/mcp`
  [![Sentry MCP connector](https://glama.ai/mcp/connectors/dev.sentry.mcp/sentry/badges/score.svg)](https://glama.ai/mcp/connectors/dev.sentry.mcp/sentry)
  🔐 - Investigate Sentry issues, events, and releases, and run Seer root-cause analysis.
- [Vivere](https://vivere.dev) `https://vivere.dev/mcp`
  [![Vivere MCP connector](https://glama.ai/mcp/connectors/dev.vivere/monitors/badges/score.svg)](https://glama.ai/mcp/connectors/dev.vivere/monitors)
  🔓 - Cron and heartbeat monitoring: create monitors and check in on each run; tools need a key.

### 🎥 <a name="multimedia"></a>Multimedia

- [BulkTranscripts](https://bulktranscripts.co) `https://bulktranscripts.co/mcp`
  [![BulkTranscripts MCP connector](https://glama.ai/mcp/connectors/co.bulktranscripts/youtube/badges/score.svg)](https://glama.ai/mcp/connectors/co.bulktranscripts/youtube)
  🔐 - YouTube transcripts for one video, a whole channel or a playlist, plus search and free new-upload tracking.
- [CLIPCLIPER](https://clipcliper.com/mcp) `https://clipcliper.com/mcp`
  [![CLIPCLIPER MCP connector](https://glama.ai/mcp/connectors/com.clipcliper/clipcliper/badges/score.svg)](https://glama.ai/mcp/connectors/com.clipcliper/clipcliper)
  🔓 - Timestamped transcripts, chapters and clip ideas from YouTube, Twitch, Kick or TikTok links.
- [Dora](https://doravideo.com) `https://doravideo.com/mcp`
  [![Dora MCP connector](https://glama.ai/mcp/connectors/io.github.Saga-Labs/dora-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Saga-Labs/dora-mcp)
  🔐 - Generate finished AI videos and images from a prompt or a photo.
- [invideo](https://invideo.io) `https://mcp.invideo.io/mcp`
  🔓 - Generate and edit videos from a prompt.
- [Kleo](https://kleooai.com) `https://mcp.kleooai.com/mcp`
  [![Kleo MCP connector](https://glama.ai/mcp/connectors/com.kleooai/kleo/badges/score.svg)](https://glama.ai/mcp/connectors/com.kleooai/kleo)
  🔐 - Narrated 4K 60 fps films from a brief, realistic or animated, with every shot generated.
- [Katto](https://katto.tech) `https://mcp.katto.tech/mcp`
  🔐 - Turn long videos, podcasts and Twitch VODs into scored, captioned, vertical 9:16 clips.
- [MaxVideoAI](https://maxvideoai.com/mcp) `https://api.maxvideoai.com/mcp`
  [![MaxVideoAI MCP connector](https://glama.ai/mcp/connectors/com.maxvideoai/maxvideoai/badges/score.svg)](https://glama.ai/mcp/connectors/com.maxvideoai/maxvideoai)
  🔐 - Compare AI video models, quote requests, approve paid generations, and recover results in a shared library.
- [Pixly](https://pixly.app) `https://pixly.app/api/mcp`
  [![Pixly MCP connector](https://glama.ai/mcp/connectors/app.pixly/pixly/badges/score.svg)](https://glama.ai/mcp/connectors/app.pixly/pixly)
  🔓 - Stage, declutter, and enhance real-estate listing photos, and turn them into listing videos.
- [Qencode](https://qencode.com) `https://mcp.qencode.com/mcp`
  [![Qencode MCP connector](https://glama.ai/mcp/connectors/com.qencode/qencode/badges/score.svg)](https://glama.ai/mcp/connectors/com.qencode/qencode)
  🔐 - Transcode video to HLS/MP4, monitor jobs, and manage Qencode Media Storage.
- [QQuickpick](https://qquickpick.com/agents/mcp) `https://qquickpick.com/mcp`
  [![QQuickpick MCP connector](https://glama.ai/mcp/connectors/io.github.Ravesteijntjes/qquickpick/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Ravesteijntjes/qquickpick)
  🔓 - Search movies and TV shows by mood, genre and score, filtered to what streams in your country.
- [SceneF](https://scenef.com/agents) `https://scenef.com/mcp`
  [![SceneF MCP connector](https://glama.ai/mcp/connectors/com.scenef/showtimes/badges/score.svg)](https://glama.ai/mcp/connectors/com.scenef/showtimes)
  🔓 - Movie showtimes across 33 California and Hawaii boards, re-verified against each theater's own calendar.
- [SFXMint](https://sfxmint.com) `https://sfxmint.com/mcp`
  [![SFXMint MCP connector](https://glama.ai/mcp/connectors/com.sfxmint/sounds/badges/score.svg)](https://glama.ai/mcp/connectors/com.sfxmint/sounds)
  🔓 - Ask for a sound effect by role or take a ready-made kit; 4,600+ CC0 files with permanent hotlinkable URLs.
- [StudioSphere Pulse](https://pulse.studiosphere.space) `https://mcp.studiosphere.space/mcp`
  [![StudioSphere Pulse MCP connector](https://glama.ai/mcp/connectors/space.studiosphere/pulse/badges/score.svg)](https://glama.ai/mcp/connectors/space.studiosphere/pulse)
  🔓 - Audio analysis for authorized public URLs: BPM, musical key, and waveform peaks.
- [Transkriba](https://transkriba.ru/mcp) `https://transkriba.ru/api/mcp`
  [![Transkriba MCP connector](https://glama.ai/mcp/connectors/ru.transkriba/transcription/badges/score.svg)](https://glama.ai/mcp/connectors/ru.transkriba/transcription)
  🔓 - Transcribe Russian audio and video from files or URLs; tools need a key.
- [Treza](https://www.trezalabs.com/connect) `https://www.trezalabs.com/api/mcp`
  [![Treza MCP connector](https://glama.ai/mcp/connectors/io.github.treza-labs/treza/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.treza-labs/treza)
  🔐 - Video pipelines that script, render, narrate, caption and publish to YouTube and TikTok.
- [Uttera](https://uttera.ai) `https://mcp.uttera.ai/mcp`
  [![Uttera MCP connector](https://glama.ai/mcp/connectors/ai.uttera/uttera/badges/score.svg)](https://glama.ai/mcp/connectors/ai.uttera/uttera)
  🔐 - Transcribe and summarise recordings, and generate speech in 30 languages, sound effects and music.

### 💳 <a name="payments"></a>Payments

- [AurasPay](https://auraspay.com/mcp) `https://mcp.auraspay.com/api/mcp`
  [![AurasPay MCP connector](https://glama.ai/mcp/connectors/com.auraspay/merchant-payments/badges/score.svg)](https://glama.ai/mcp/connectors/com.auraspay/merchant-payments)
  🔐 - Review merchant payments and prepare payment links with separate human approval for changes.
- [AssetFare](https://assetfare.dev) `https://api.assetfare.dev/mcp`
  [![AssetFare MCP connector](https://glama.ai/mcp/connectors/io.github.odaiin/assetfare/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.odaiin/assetfare)
  🔓 - Compare and prepare non-custodial SOL to Base or Arbitrum ETH routes for you to sign.
- [Dodo Payments](https://dodopayments.com) `https://mcp.dodopayments.com/mcp`
  🔐 - Manage Dodo Payments products, subscriptions, and payouts.
- [Paddle](https://paddle.com) `https://mcp.paddle.com/mcp`
  🔐 - Manage Paddle products, prices, subscriptions, and transactions.
- [PayPal](https://paypal.com) `https://mcp.paypal.com/mcp`
  🔐 - Create and manage PayPal invoices, orders, and payments.
- [send21](https://send21.io) `https://send21.io/mcp`
  [![send21 MCP connector](https://glama.ai/mcp/connectors/io.github.send21io/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.send21io/mcp)
  🔓 - Prepares non-custodial payment drafts and pay links; payer signs in their own wallet.
- [Square](https://squareup.com) `https://mcp.squareup.com/mcp`
  🔐 - Manage Square catalog, orders, payments, and customers.
- [Stripe](https://stripe.com) `https://mcp.stripe.com`
  [![Stripe MCP connector](https://glama.ai/mcp/connectors/com.stripe/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.stripe/mcp)
  🔐 - Manage Stripe customers, products, prices, invoices, and payments.
- [Veyra](https://veyra.money) `https://veyra.money/api/mcp`
  [![Veyra MCP connector](https://glama.ai/mcp/connectors/money.veyra/veyra/badges/score.svg)](https://glama.ai/mcp/connectors/money.veyra/veyra)
  🔓 - Non-custodial USDC agent wallets on Base with spending caps and human approval; tools need a token.
- [x402 Preflight](https://x402.chikocorp.com) `https://x402.chikocorp.com/mcp`
  [![x402 Preflight MCP connector](https://glama.ai/mcp/connectors/io.github.chico10117/x402-preflight/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.chico10117/x402-preflight)
  🔓 - Inspect x402/Base USDC payment endpoints and order fixed-price remediation through paid tools.

### 📋 <a name="project-management"></a>Project Management

- [AgileHero](https://agilehero.io) `https://mcp.agilehero.io/mcp`
  [![AgileHero MCP connector](https://glama.ai/mcp/connectors/io.agilehero/agilehero/badges/score.svg)](https://glama.ai/mcp/connectors/io.agilehero/agilehero)
  🔐 - Manage agile boards, epics, roadmaps, retrospectives, whiteboards, and wiki pages.
- [Asana](https://asana.com) `https://mcp.asana.com/mcp`
  🔐 - Manage Asana tasks, projects, and portfolios.
- [Atlassian](https://atlassian.com) `https://mcp.atlassian.com/v1/mcp`
  [![Atlassian MCP connector](https://glama.ai/mcp/connectors/com.atlassian/atlassian-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.atlassian/atlassian-mcp-server)
  🔐 - Work with Jira issues and Confluence pages.
- [ClickUp](https://clickup.com) `https://mcp.clickup.com/mcp`
  🔐 - Manage ClickUp tasks, docs, and spaces.
- [dot•requirements](https://dotrequirements.io) `https://app.dotrequirements.io/mcp`
  [![dot•requirements MCP connector](https://glama.ai/mcp/connectors/io.dotrequirements/dotrequirements/badges/score.svg)](https://glama.ai/mcp/connectors/io.dotrequirements/dotrequirements)
  🔐 - Draft testable requirements specs from chat, style-check them, publish to your team, and see test coverage.
- [FrameOn](https://app.frameonlab.com/mcp) `https://api.frameonlab.com/api/v1/mcp`
  [![FrameOn MCP connector](https://glama.ai/mcp/connectors/com.frameonlab/frameon/badges/score.svg)](https://glama.ai/mcp/connectors/com.frameonlab/frameon)
  🔐 - Project management for AI agents: tasks, docs, decisions and time in one shared team context.
- [GTD Brain](https://gtdbrain.com/connect?source=awesome-remote-mcp-servers) `https://mcp.gtdbrain.com/api/gtdbrain/v1/mcp`
  [![GTD Brain MCP connector](https://glama.ai/mcp/connectors/com.gtdbrain/gtd-brain/badges/score.svg)](https://glama.ai/mcp/connectors/com.gtdbrain/gtd-brain)
  🔐 - Getting Things Done board: inbox capture, next actions by context, projects and weekly review.
- [Laraue Boards](https://boards.laraue.com) `https://boards.laraue.com/boards-mcp/mcp`
  [![Laraue Boards MCP connector](https://glama.ai/mcp/connectors/com.laraue/boards/badges/score.svg)](https://glama.ai/mcp/connectors/com.laraue/boards)
  🔑 - List, view, create, edit, and move issues in your Laraue Boards organization.
- [Linear](https://linear.app) `https://mcp.linear.app/mcp`
  [![Linear MCP connector](https://glama.ai/mcp/connectors/app.linear/linear/badges/score.svg)](https://glama.ai/mcp/connectors/app.linear/linear)
  🔐 - Manage Linear issues, projects, and cycles.
- [mcptask.online](https://mcptask.online) `https://mcptask.online/mcp`
  [![mcptask.online MCP connector](https://glama.ai/mcp/connectors/online.mcptask/mcptaskonline/badges/score.svg)](https://glama.ai/mcp/connectors/online.mcptask/mcptaskonline)
  🔐 - Assign coding tasks to Claude Code, Codex or OpenCode on your own infrastructure and get PRs back.
- [monday.com](https://monday.com) `https://mcp.monday.com/mcp`
  🔐 - Manage monday.com boards, items, and updates.
- [Orbit](https://orbit.noveum.ai) `https://orbit.noveum.ai/mcp`
  [![Orbit MCP connector](https://glama.ai/mcp/connectors/io.github.Noveum/orbit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Noveum/orbit)
  🔐 - Manage issues, projects, sprints, docs and files.
- [Stellary](https://stellary.co) `https://api.stellary.co/mcp`
  [![Stellary MCP connector](https://glama.ai/mcp/connectors/io.github.Anymfah/stellary-project-management/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Anymfah/stellary-project-management)
  🔐 - Project boards, a cockpit and governed agent missions.
- [Weft](https://letsweft.com/?utm_source=awesome-remote-mcp&utm_medium=repo&utm_campaign=evergreen) `https://letsweft.com/api/mcp`
  [![Weft MCP connector](https://glama.ai/mcp/connectors/com.letsweft/weft/badges/score.svg)](https://glama.ai/mcp/connectors/com.letsweft/weft)
  🔐 - Scrumban board your AI drives: agents claim tasks with leases, report progress, and close them on artifacts.

### 🏠 <a name="real-estate"></a>Real Estate

- [CoworkingView](https://coworkingview.com/en/mcp) `https://mcp.coworkingview.com/mcp`
  [![CoworkingView MCP connector](https://glama.ai/mcp/connectors/com.coworkingview/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.coworkingview/mcp)
  🔓 - Search coworking spaces and private offices in 62 cities, with published prices and market rates.

- [Evlek](https://evlek.app/mcp) `https://evlek.app/api/mcp`
  [![Evlek MCP connector](https://glama.ai/mcp/connectors/app.evlek/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/app.evlek/mcp-server)
  🔓 - Search active Northern Cyprus sale and rental listings and compare asking prices by city and district.
- [Kolmo Construction](https://www.kolmo.io/developers) `https://www.kolmo.io/mcp`
  [![Kolmo Construction MCP connector](https://glama.ai/mcp/connectors/io.kolmo/kolmo-construction/badges/score.svg)](https://glama.ai/mcp/connectors/io.kolmo/kolmo-construction)
  🔓 - WA permit rules for 80+ cities, parcel zoning, contractor license checks and Seattle cost estimates.
- [Microburbs](https://www.microburbs.com.au/developers/api-docs) `https://api.microburbs.com.au/mcp`
  [![Microburbs MCP connector](https://glama.ai/mcp/connectors/au.com.microburbs/property-data/badges/score.svg)](https://glama.ai/mcp/connectors/au.com.microburbs/property-data)
  🔓 - Street-level Australian property data: price forecasts, crime, sales and zoning; data needs a key.
- [Pillr](https://pillr.fr/mcp) `https://pillr.fr/api/mcp`
  [![Pillr MCP connector](https://glama.ai/mcp/connectors/fr.pillr/pillr/badges/score.svg)](https://glama.ai/mcp/connectors/fr.pillr/pillr)
  🔓 - French property data: price per m² by municipality, local market summary and planning permit requirements.
- [Prism](https://prism.parad1gm.com/agents) `https://prism.parad1gm.com/api/prism-mcp`
  [![Prism MCP connector](https://glama.ai/mcp/connectors/com.parad1gm/prism/badges/score.svg)](https://glama.ai/mcp/connectors/com.parad1gm/prism)
  🔐 - Every deadline in a lease, mortgage, insurance or HOA document, with its date and source quote.

### 🚗 <a name="sales"></a>Sales

- [Pinpoint dealership sales tools](https://usepinpoint.ai/resources/api/) `https://usepinpoint.ai/api/mcp`
  [![Pinpoint dealership sales tools MCP connector](https://glama.ai/mcp/connectors/ai.usepinpoint/pinpoint-dealership-sales-tools/badges/score.svg)](https://glama.ai/mcp/connectors/ai.usepinpoint/pinpoint-dealership-sales-tools)
  🔓 - Car dealership sales tools from Pinpoint, the sales intelligence platform for car dealerships.

### 🔬 <a name="science--research"></a>Science & Research

- [Neruva](https://neruva.io) `https://neruva.io/forum/mcp`
  [![Neruva MCP connector](https://glama.ai/mcp/connectors/io.neruva/agent-forum/badges/score.svg)](https://glama.ai/mcp/connectors/io.neruva/agent-forum)
  🔓 - Agents design parts of an open sky130 AI chip; formally verified entries compete to be fabricated.
- [Zetesis](https://api.zetesis.science/docs) `https://api.zetesis.science/mcp`
  [![Zetesis MCP connector](https://glama.ai/mcp/connectors/io.github.reutavidan/zetesis/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.reutavidan/zetesis)
  🔓 - Due diligence on scientific claims, graded against the published record.

### 🔎 <a name="search--data-extraction"></a>Search & Data Extraction

- [1cent](https://1cent.maxzoa.ru) `https://1cent.maxzoa.ru/mcp`
  [![1cent MCP connector](https://glama.ai/mcp/connectors/ru.maxzoa/1cent/badges/score.svg)](https://glama.ai/mcp/connectors/ru.maxzoa/1cent)
  🔓 - Extract web content and metadata, map site resources and detect page changes; x402 pay-per-call.
- [Briefing Service](https://briefing-service.wholemind.workers.dev) `https://briefing-service.wholemind.workers.dev/mcp`
  [![Briefing Service MCP connector](https://glama.ai/mcp/connectors/io.github.jshelley/briefings/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jshelley/briefings)
  🔓 - Hourly briefings on AI, markets, sports and world news as JSON or e-ink pages; paid tools via x402.
- [Bright Data](https://brightdata.com) `https://mcp.brightdata.com/mcp`
  🔐 - Web scraping and SERP data through a managed proxy network.
- [BRONTIR](https://brontir.com) `https://research.brontir.com/api/mcp`
  [![BRONTIR MCP connector](https://glama.ai/mcp/connectors/com.brontir.research/brontir/badges/score.svg)](https://glama.ai/mcp/connectors/com.brontir.research/brontir)
  🔐 - Web research across search, Reddit, YouTube, reviews and ad libraries, with line-numbered citations.
- [Corbelworks](https://corbelworks.pages.dev) `https://corbelworks.pages.dev/mcp`
  [![Corbelworks MCP connector](https://glama.ai/mcp/connectors/dev.pages.corbelworks/reliability/badges/score.svg)](https://glama.ai/mcp/connectors/dev.pages.corbelworks/reliability)
  🔓 - Scan a software vendor's public claims for defects and get structured findings with evidence grades.
- [Cloudflare Radar](https://radar.cloudflare.com) `https://radar.mcp.cloudflare.com/mcp`
  🔐 - Internet traffic, routing, and security trends from Cloudflare Radar.
- [CN Evidence](https://cnevidence.com) `https://mcp.cnevidence.com/mcp`
  [![CN Evidence MCP connector](https://glama.ai/mcp/connectors/dev.workers.mikeyang7789.cn-evidence-mcp-public/cn-evidence-china-supplier-due-diligence/badges/score.svg)](https://glama.ai/mcp/connectors/dev.workers.mikeyang7789.cn-evidence-mcp-public/cn-evidence-china-supplier-due-diligence)
  🔓 - Selected China supplier registration and risk records; paid queries via x402 on Base.
- [cn-intel-mcp](https://github.com/lory69060/cn-intel-mcp) `https://cn-intel-mcp.lory69060.workers.dev/mcp`
  [![cn-intel-mcp MCP connector](https://glama.ai/mcp/connectors/dev.workers.lory69060.cn-intel-mcp/cn-intel-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.workers.lory69060.cn-intel-mcp/cn-intel-mcp)
  🔓 - China hard-tech supply-chain signals with a track record: chips, batteries, eVTOL and pharma.
- [CuratorSearch](https://curatorsearch.com/developers) `https://curatorsearch.com/mcp`
  [![CuratorSearch MCP connector](https://glama.ai/mcp/connectors/com.curatorsearch/jobs/badges/score.svg)](https://glama.ai/mcp/connectors/com.curatorsearch/jobs)
  🔓 - Search live museum and curatorial jobs, one institution's openings, and the sector's pay-transparency rate.
- [Exa](https://exa.ai) `https://mcp.exa.ai/mcp`
  [![Exa MCP connector](https://glama.ai/mcp/connectors/ai.exa/exa/badges/score.svg)](https://glama.ai/mcp/connectors/ai.exa/exa)
  🔓 - Neural web search that returns full page contents.
- [file2markdown](https://www.file2markdown.ai) `https://mcp.file2markdown.ai/mcp`
  [![file2markdown MCP connector](https://glama.ai/mcp/connectors/ai.file2markdown/file2markdown/badges/score.svg)](https://glama.ai/mcp/connectors/ai.file2markdown/file2markdown)
  🔓 - Convert PDFs, Office files and web pages to clean Markdown by URL or base64; 5 free a day, Pro key for more.
- [Firecrawl](https://firecrawl.dev) `https://mcp.firecrawl.dev/v2/mcp`
  [![Firecrawl MCP connector](https://glama.ai/mcp/connectors/dev.firecrawl.mcp/firecrawl-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.firecrawl.mcp/firecrawl-mcp)
  🔓 - Crawl, scrape, and extract structured data from websites.
- [FTIR.fun](https://ftir.fun) `https://ftir.fun/mcp`
  [![FTIR.fun Spectral Search MCP connector – tool definition quality and endpoint health on Glama](https://glama.ai/mcp/connectors/io.github.jxbaoxiaodong/ftirfun-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jxbaoxiaodong/ftirfun-mcp)
  🔐 - Analyze FTIR spectra, search spectral libraries, and retrieve peak and literature evidence.
- [gankdat](https://gankdat.com) `https://gankdat.com/mcp`
  [![gankdat MCP connector](https://glama.ai/mcp/connectors/com.gankdat/gankdat/badges/score.svg)](https://glama.ai/mcp/connectors/com.gankdat/gankdat)
  🔓 - UK & EU tenders, planning, sanctions, US exclusions, insolvency and company data; free key for tool calls.
- [Gemalli](https://gemalli.com/en/developers) `https://gemalli.com/api/mcp`
  [![Gemalli MCP connector](https://glama.ai/mcp/connectors/com.gemalli/trade/badges/score.svg)](https://glama.ai/mcp/connectors/com.gemalli/trade)
  🔓 - Find verified manufacturers, screen for sanctions, and look up HS codes and export controls.
- [gluten-free.fr](https://gluten-free.fr) `https://gluten-free.fr/api/mcp`
  🔓 - Verified gluten-free product catalogue and comparison data for the French market.
- [GovAuctions.app](https://govauctions.app) `https://govauctions.app/api/mcp`
  [![GovAuctions.app MCP connector](https://glama.ai/mcp/connectors/app.govauctions/govauctions/badges/score.svg)](https://glama.ai/mcp/connectors/app.govauctions/govauctions)
  🔓 - Government surplus auctions in the US, UK, CA and AU, with sold-price comps and resale scores.
- [Horizon](https://horizon.alchemylab.sh/developers) `https://horizon.alchemylab.sh/api/mcp`
  [![Horizon MCP connector](https://glama.ai/mcp/connectors/sh.alchemylab.horizon/briefing/badges/score.svg)](https://glama.ai/mcp/connectors/sh.alchemylab.horizon/briefing)
  🔓 - Daily AI briefing, AI regulation tracker (EU AI Act, US federal & state, UK), regional lenses and search.
- [JobsPipe](https://docs.jobspipe.dev/ai-agents/mcp) `https://mcp.jobspipe.dev/mcp`
  [![JobsPipe MCP connector score](https://glama.ai/mcp/connectors/dev.jobspipe/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.jobspipe/mcp)
  🔐 - Search live jobs from 30+ boards and ATS feeds, read full postings, and save searches to catch new matches.
- [LiveDataLink](https://livedatalink.ai) `https://livedatalink.ai/mcp`
  [![LiveDataLink MCP connector](https://glama.ai/mcp/connectors/io.github.blackboxfoundry/livedatalink/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.blackboxfoundry/livedatalink)
  🔓 - Query 60 public-data domains, including sanctions, courts, markets, health and energy.
- [Maison de Talents](https://maisondetalents.com) `https://maisondetalents.com/api/mcp`
  [![Maison de Talents MCP connector](https://glama.ai/mcp/connectors/com.maisondetalents/maison-de-talents/badges/score.svg)](https://glama.ai/mcp/connectors/com.maisondetalents/maison-de-talents)
  🔓 - Search luxury, department-store and duty-free retail jobs in Korea, with salary benchmarks.
- [Openings](https://avagama.co/openings/) `https://openings.avagama.co/mcp`
  [![Openings MCP connector](https://glama.ai/mcp/connectors/co.avagama/openings/badges/score.svg)](https://glama.ai/mcp/connectors/co.avagama/openings)
  🔐 - Search jobs on verified employer job boards, with every result linking to the employer's own posting.
- [Parlel](https://parlel.com) `https://api.parlel.com/mcp`
  [![Parlel MCP connector](https://glama.ai/mcp/connectors/com.parlel.api/parlel/badges/score.svg)](https://glama.ai/mcp/connectors/com.parlel.api/parlel)
  🔓 - Free search of people, companies and open roles on an open professional network.
- [ProxyCove](https://proxycove.com) `https://mcp.proxycove.com/mcp`
  [![ProxyCove MCP connector](https://glama.ai/mcp/connectors/com.proxycove/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.proxycove/mcp-server)
  🔓 - Buy and manage residential, mobile and datacenter proxies in 170+ countries, prepaid per GB.
- [ReadGZH](https://readgzh.site) `https://api.readgzh.site/mcp-server`
  [![ReadGZH MCP connector](https://glama.ai/mcp/connectors/io.github.sweesama/readgzh/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sweesama/readgzh)
  🔓 - Read public WeChat Official Account articles as Markdown and search previously cached articles.
- [Realask](https://realask.net) `https://realask.net/mcp`
  [![Realask MCP connector](https://glama.ai/mcp/connectors/io.github.danelas/realask/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.danelas/realask)
  🔓 - Verify stock, prices and availability at US local businesses by phone, with evidence.
- [Scoopkit](https://scoopkit.dev) `https://api.scoopkit.dev/mcp`
  [![Scoopkit MCP connector](https://glama.ai/mcp/connectors/dev.scoopkit/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.scoopkit/mcp)
  🔓 - AI-industry news as deduplicated, classified events; a free key unlocks listing, search and archive.
- [Scoutee](https://scoutee.org/en/mcp-public-tenders) `https://scoutee.org/api/mcp/public`
  [![Scoutee MCP connector](https://glama.ai/mcp/connectors/org.scoutee/scoutee/badges/score.svg)](https://glama.ai/mcp/connectors/org.scoutee/scoutee)
  🔓 - Search public tenders across Europe and North America and read notice previews.
- [Simplescraper](https://simplescraper.io) `https://mcp.simplescraper.io/mcp`
  🔐 - Scrape websites and run saved extraction recipes.
- [Singapore Proxy](https://singaporemobileproxy.com/client/mcp) `https://mcp.singaporemobileproxy.com/mcp`
  [![Singapore Proxy MCP connector](https://glama.ai/mcp/connectors/io.github.Xavierfok/singapore-proxy-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Xavierfok/singapore-proxy-mcp)
  🔓 - Fetch pages and run Google searches from a rotating Singapore mobile IP on Singtel or M1; tools need a key.
- [SnoopScan](https://snoopscan.com) `https://api.snoopscan.com/mcp-oauth`
  [![SnoopScan MCP connector](https://glama.ai/mcp/connectors/com.snoopscan/snoopscan/badges/score.svg)](https://glama.ai/mcp/connectors/com.snoopscan/snoopscan)
  🔐 - Scrape, crawl, map and search the web as clean markdown, with schema-validated extraction.
- [Statsnet](https://statsnet.co) `https://statsnet.co/mcp`
  [![Statsnet MCP connector](https://glama.ai/mcp/connectors/io.github.usenetstate/statsnet/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.usenetstate/statsnet)
  🔓 - Company data for Kazakhstan, Uzbekistan and Kyrgyzstan: registration, executives and finances.
- [StudiePoint AI](https://studiepoint.ai) `https://studiepoint.ai/api/mcp`
  [![StudiePoint AI MCP connector](https://glama.ai/mcp/connectors/ai.studiepoint/studie-point-ai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.studiepoint/studie-point-ai)
  🔓 - Search scholarships, convert African GPAs, check visas, match students, and estimate study costs.
- [Tavily](https://tavily.com) `https://mcp.tavily.com/mcp`
  🔐 - Web search and content extraction built for agents.
- [Trends MCP](https://trendsmcp.ai) `https://api.trendsmcp.ai/mcp`
  [![Trends MCP connector](https://glama.ai/mcp/connectors/ai.trendsmcp/trends/badges/score.svg)](https://glama.ai/mcp/connectors/ai.trendsmcp/trends)
  🔓 - Live trend data from Google, TikTok, YouTube, Amazon, Reddit, and 20+ other sources.
- [Theyond](https://theyond.com) `https://theyond.com/mcp`
  [![Theyond MCP connector](https://glama.ai/mcp/connectors/com.theyond/theyond/badges/score.svg)](https://glama.ai/mcp/connectors/com.theyond/theyond)
  🔓 - Live jobs from employer career pages; apply on theyond.com.
- [TrustyData](https://trustydata.fr/usecases/mcp-qualite-donnees) `https://mcp.trustydata.app/mcp`
  [![TrustyData MCP connector](https://glama.ai/mcp/connectors/app.trustydata/trustydata/badges/score.svg)](https://glama.ai/mcp/connectors/app.trustydata/trustydata)
  🔓 - Verify French addresses against the BAN registry, search Sirene companies and compute road routes.
- [UX Jobs](https://mcp.uxjobs.io) `https://mcp.uxjobs.io/mcp`
  [![UX Jobs MCP connector](https://glama.ai/mcp/connectors/io.uxjobs/jobs/badges/score.svg)](https://glama.ai/mcp/connectors/io.uxjobs/jobs)
  🔓 - Search 4,000+ live UX, product design and research jobs, with hiring-market and salary snapshots.
- [Vend](https://extract.paypercall.dev) `https://extract.paypercall.dev/mcp`
  [![Vend MCP connector](https://glama.ai/mcp/connectors/dev.paypercall.extract/vend-api-merchant/badges/score.svg)](https://glama.ai/mcp/connectors/dev.paypercall.extract/vend-api-merchant)
  🔓 - Extract, search, and analyze web pages and domains with pay-per-call tools settled in Nano (XNO) via x402.

### 🔒 <a name="security"></a>Security

- [Auth Posture](https://auth-posture.rowb.app) `https://auth-posture.rowb.app/mcp`
  [![Auth Posture MCP connector](https://glama.ai/mcp/connectors/app.rowb.auth-posture/audit/badges/score.svg)](https://glama.ai/mcp/connectors/app.rowb.auth-posture/audit)
  🔓 - One-call domain audit: MX receiving, SPF/DMARC/DKIM spoofing protection, disposable-address risk.
- [crosscheck](https://crosscheckapi.com/llms.txt) `https://crosscheckapi.com/mcp`
  [![crosscheck MCP connector](https://glama.ai/mcp/connectors/com.crosscheckapi/crosscheck/badges/score.svg)](https://glama.ai/mcp/connectors/com.crosscheckapi/crosscheck)
  🔓 - Security review of skills and MCP servers before install; paid per call via x402.
- [Forge](https://forge.magery.ai) `https://forge.magery.ai/mcp`
  [![Forge MCP connector](https://glama.ai/mcp/connectors/ai.magery.forge/forge-magery/badges/score.svg)](https://glama.ai/mcp/connectors/ai.magery.forge/forge-magery)
  🔓 - Security audits of shipped code, in plain English.
- [Malinois](https://malinois.app) `https://malinois.app/mcp`
  [![Malinois MCP connector](https://glama.ai/mcp/connectors/app.malinois/scan/badges/score.svg)](https://glama.ai/mcp/connectors/app.malinois/scan)
  🔓 - Passive leak check for a live app you own: open Supabase/Firebase data, keys in JS, exposed .env/.git.
- [Movahedi Privacy](https://movahedi.ca/mcp) `https://movahedi.ca/mcp`
  [![Movahedi Privacy API MCP server](https://glama.ai/mcp/connectors/ca.movahedi/movahedi-privacy-api/badges/score.svg)](https://glama.ai/mcp/connectors/ca.movahedi/movahedi-privacy-api)
  🔓 - Canadian privacy compliance: enforcement actions, glossary and Law 25 checks.
- [Orbylon](https://orbylon.com) `https://orbylon.com/api/mcp`
  [![Orbylon MCP connector](https://glama.ai/mcp/connectors/com.orbylon/readiness/badges/score.svg)](https://glama.ai/mcp/connectors/com.orbylon/readiness)
  🔓 - Checks whether AI agents can find, trust and pay a business, and looks up a verified domain key and prices.
- [Phishunt](https://phishunt.io) `https://mcp.phishunt.io/`
  [![Phishunt MCP connector](https://glama.ai/mcp/connectors/io.github.0xDanielLopez/phishunt/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.0xDanielLopez/phishunt)
  🔓 - Public phishing-domain feed: check a domain, search detections by brand, and pivot on campaigns and certs.
- [Promptguard](https://mcp.glc-rag.hu/guide/promptguard) `https://mcp.glc-rag.hu/mcp`
  🔑 - Layered prompt-injection checks for LLM hosts; 100 welcome credits on signup.
- [ProofCore](https://proofcore.org) `https://mcp.proofcore.org`
  [![ProofCore Notary MCP connector](https://glama.ai/mcp/connectors/org.proofcore.mcp/proof-core-notary/badges/score.svg)](https://glama.ai/mcp/connectors/org.proofcore.mcp/proof-core-notary)
  🔓 - Notarize AI outputs, audits and agreements on the TON blockchain, with nothing stored server-side.
- [ScanMalware](https://scanmalware.com) `https://mcp.scanmalware.com/mcp`
  [![ScanMalware MCP connector](https://glama.ai/mcp/connectors/com.scanmalware.mcp/scanmalware-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.scanmalware.mcp/scanmalware-mcp)
  🔓 - Scan URLs in a sandboxed browser and pivot across past scans by domain, IP, ASN or fingerprint.
- [Semgrep](https://semgrep.dev) `https://mcp.semgrep.ai/mcp`
  🔐 - Scan code for security and correctness findings with Semgrep rules.
- [Site Passport](https://sitepassport.org) `https://sitepassport.org/.well-known/mcp.json`
  [![Site Passport MCP connector](https://glama.ai/mcp/connectors/org.sitepassport/check-wordpress-agent-readiness/badges/score.svg)](https://glama.ai/mcp/connectors/org.sitepassport/check-wordpress-agent-readiness)
  🔓 - Check whether AI agents can safely operate a WordPress site: llms.txt, robots.txt and schema.org.
- [TweetFeed](https://tweetfeed.live) `https://mcp.tweetfeed.live/`
  [![TweetFeed MCP connector](https://glama.ai/mcp/connectors/io.github.0xDanielLopez/tweetfeed/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.0xDanielLopez/tweetfeed)
  🔓 - IOCs (URLs, domains, IPs, hashes) shared on X by the security community: lookups, tags, trends, campaigns.

### 📣 <a name="social-media"></a>Social Media

- [0bull](https://0bull.net) `https://0bull.net/mcp`
  [![0bull MCP connector](https://glama.ai/mcp/connectors/net.0bull/0bull-phone-farm/badges/score.svg)](https://glama.ai/mcp/connectors/net.0bull/0bull-phone-farm)
  🔐 - Manage TikTok, Instagram and YouTube accounts, publish videos and control real rented iPhones.
- [1F916](https://1f916.ai) `https://1f916.ai/mcp`
  [![1F916 MCP connector](https://glama.ai/mcp/connectors/ai.1f916/1f916/badges/score.svg)](https://glama.ai/mcp/connectors/ai.1f916/1f916)
  🔓 - A society for AI agents: register, read, post, comment and vote on an append-only, signed public record.
- [AdaptlyPost](https://adaptlypost.com) `https://mcp.adaptlypost.com/mcp`
  [![AdaptlyPost MCP connector](https://glama.ai/mcp/connectors/com.adaptlypost/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.adaptlypost/mcp-server)
  🔐 - Schedule, publish and track posts on 9 networks, including Instagram, TikTok, YouTube and X.
- [AdminHub for Telegram](https://adminhub.tools/mcp/) `https://backend-git-production-cb93.up.railway.app/mcp`
  [![AdminHub for Telegram MCP connector](https://glama.ai/mcp/connectors/tools.adminhub/telegram/badges/score.svg)](https://glama.ai/mcp/connectors/tools.adminhub/telegram)
  🔐 - Publish to a Telegram channel through your own bot, and read its stats and subscribers.
- [Klyf](https://klyf.ai) `https://klyf.ai/api/mcp`
  [![Klyf MCP connector](https://glama.ai/mcp/connectors/ai.klyf/klyf/badges/score.svg)](https://glama.ai/mcp/connectors/ai.klyf/klyf)
  🔐 - Read your YouTube analytics, audience and comments, and decide what to fix and what to make next.
- [Limzo](https://limzo.com/docs/) `https://limzo.com/api/public/mcp`
  [![Limzo MCP connector](https://glama.ai/mcp/connectors/com.limzo/telegram-group-stats/badges/score.svg)](https://glama.ai/mcp/connectors/com.limzo/telegram-group-stats)
  🔓 - Find Telegram groups running the Limzo anti-spam bot and read their activity and moderation stats.
- [Mellow Hub](https://www.mellow.world/) `https://www.mellow.world/mcp`
  [![Mellow Hub MCP connector](https://glama.ai/mcp/connectors/world.mellow.www/hub/badges/score.svg)](https://glama.ai/mcp/connectors/world.mellow.www/hub)
  🔐 - Publish and schedule posts to 9 networks, including Instagram, TikTok, YouTube and X.
- [Mysocial](https://mysocial.io/mcp/) `https://app.mysocial.io/mcp`
  🔐 - Read your Instagram, TikTok, YouTube, LinkedIn and Threads posts, metrics and comments.
- [oganvil](https://oganvil.rowu.workers.dev) `https://oganvil.rowu.workers.dev/mcp`
  [![oganvil MCP connector](https://glama.ai/mcp/connectors/dev.workers.rowu.oganvil/og-image-api/badges/score.svg)](https://glama.ai/mcp/connectors/dev.workers.rowu.oganvil/og-image-api)
  🔓 - Generate 1200x630 OG images as PNG or SVG from a title and tagline; free tier.
- [OmniSocials](https://omnisocials.com) `https://mcp.omnisocials.com/`
  [![OmniSocials MCP connector](https://glama.ai/mcp/connectors/com.omnisocials.mcp/omni-socials/badges/score.svg)](https://glama.ai/mcp/connectors/com.omnisocials.mcp/omni-socials)
  🔑 - Publish and schedule posts across social networks.
- [Post Bridge](https://www.post-bridge.com/mcp) `https://www.post-bridge.com/api/mcp/mcp`
  [![Post Bridge MCP connector](https://glama.ai/mcp/connectors/io.github.jackfriks/post-bridge/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jackfriks/post-bridge)
  🔐 - Publish, schedule and analyze posts across ten platforms, from Instagram and TikTok to LinkedIn and Bluesky.
- [PostLake](https://postlake.dev) `https://api.postlake.dev/mcp`
  [![PostLake MCP connector](https://glama.ai/mcp/connectors/dev.postlake/social/badges/score.svg)](https://glama.ai/mcp/connectors/dev.postlake/social)
  🔐 - Publish, schedule and analyze posts across 9 networks, including X, LinkedIn, Instagram, TikTok and Bluesky.
- [PostNext](https://postnext.io/mcp) `https://mcp.postnext.io/api`
  [![PostNext MCP connector](https://glama.ai/mcp/connectors/io.postnext/postnext/badges/score.svg)](https://glama.ai/mcp/connectors/io.postnext/postnext)
  🔐 - Draft, schedule and publish to X, Instagram, LinkedIn, TikTok and more, plus channel analytics.
- [SocialBu](https://socialbu.com/mcp-server) `https://socialbu.com/mcp`
  [![SocialBu MCP connector](https://glama.ai/mcp/connectors/io.github.usamaejaz/socialbu-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.usamaejaz/socialbu-mcp)
  🔐 - Create, schedule, publish, and analyze social media content; manage accounts, teams, and automations.

- [Social Fetch](https://www.socialfetch.dev) `https://api.socialfetch.dev/mcp`
  🔓 - Scrape public social media profiles, posts, comments and transcripts, live on every request.
- [SocialFaktory](https://www.socialfaktory.com) `https://www.socialfaktory.com/mcp`
  [![SocialFaktory MCP connector](https://glama.ai/mcp/connectors/com.socialfaktory/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.socialfaktory/mcp)
  🔐 - Write, schedule and publish a brand's social content on TikTok, Instagram, YouTube, X and more.
- [SocialRobot](https://socialrobot.io/mcp) `https://socialrobot.io/api/mcp`
  [![SocialRobot MCP connector](https://glama.ai/mcp/connectors/io.socialrobot/socialrobot-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.socialrobot/socialrobot-mcp)
  🔓 - Schedule and analyze posts on 9 platforms, including Instagram, LinkedIn, X and TikTok; tools need OAuth.
- [Statiko](https://statiko.io/product/mcp) `https://mcp.statiko.io/mcp`
  [![Statiko MCP connector](https://glama.ai/mcp/connectors/io.statiko.mcp/statiko/badges/score.svg)](https://glama.ai/mcp/connectors/io.statiko.mcp/statiko)
  🔓 - Trending topics, channel metrics and post history from public Telegram; tools need OAuth.
- [Superpowers.social](https://superpowers.social) `https://superpowers.social/mcp`
  [![Superpowers.social MCP connector](https://glama.ai/mcp/connectors/social.superpowers/social-superpowers/badges/score.svg)](https://glama.ai/mcp/connectors/social.superpowers/social-superpowers)
  🔓 - Read-only search and retrieval of live X/Twitter and Reddit posts, threads, users, and subreddits.
- [XPlanner](https://xplanner.co/en/mcp) `https://mcp.xplanner.co/mcp`
  [![XPlanner MCP connector – tool definition quality and endpoint health on Glama](https://glama.ai/mcp/connectors/io.github.Sooler-Studio/xplanner/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Sooler-Studio/xplanner)
  🔐 - Turn ideas into platform-ready drafts, schedule posts, and publish from one content workspace.

### 🏆 <a name="sports"></a>Sports

- [Coach MCP](https://www.iamcoach.ai/mcp) `https://mcp.iamcoach.ai`
  [![Coach MCP connector](https://glama.ai/mcp/connectors/ai.iamcoach.mcp/coach-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.iamcoach.mcp/coach-mcp)
  🔐 - Read your endurance training data, recovery metrics and plan, and move workouts or log injuries.

- [Pickleball3](https://pickleball3.com) `https://pickleball3.com/mcp`
  [![Pickleball3 MCP connector](https://glama.ai/mcp/connectors/io.github.gospodindark-stack/pickleball3/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gospodindark-stack/pickleball3)
  🔓 - Compare 152 reviewed pickleball paddles by score and specs, with purchase links.
- [Turnale](https://www.turnale.app) `https://mcp.turnale.app`
  [![Turnale MCP connector](https://glama.ai/mcp/connectors/app.turnale/turnale/badges/score.svg)](https://glama.ai/mcp/connectors/app.turnale/turnale)
  🔓 - Run recreational racket-sport tournaments: draws, schedules, live standings and dropouts.

### 🎧 <a name="support--service-management"></a>Support & Service Management

- [EOSL.ai](https://eosl.ai/mcp/) `https://eosl.ai/mcp`
  [![EOSL.ai MCP connector](https://glama.ai/mcp/connectors/ai.eosl/eosl/badges/score.svg)](https://glama.ai/mcp/connectors/ai.eosl/eosl)
  🔓 - Hardware end-of-life lookups by part number, backed by vendor bulletins.
- [Intercom](https://intercom.com) `https://mcp.intercom.com/mcp`
  🔐 - Search Intercom conversations, contacts, and help-center articles.
- [ORYKSA AI Employees](https://mcp.oryksa.com) `https://mcp.oryksa.com`
  [![ORYKSA AI Employees MCP connector](https://glama.ai/mcp/connectors/com.oryksa/ai-employees/badges/score.svg)](https://glama.ai/mcp/connectors/com.oryksa/ai-employees)
  🔐 - Add an AI support agent to the site you build: it learns every page and answers visitors by chat and voice.
- [SavantCat Answers](https://savantcat.cn/mcp/) `https://savantcat.cn/mcp`
  [![SavantCat Answers MCP connector](https://glama.ai/mcp/connectors/cn.savantcat/answers/badges/score.svg)](https://glama.ai/mcp/connectors/cn.savantcat/answers)
  🔓 - China's GB/T 47746-2026 AI customer-service standard: clause Q&A, self-check list and filing rules.

### 🌍 <a name="translation--localization"></a>Translation & Localization

- [globalize.now](https://globalize.now) `https://api.globalize.now/mcp`
  [![globalize.now MCP connector](https://glama.ai/mcp/connectors/io.github.globalize-now/globalize/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.globalize-now/globalize)
  🔐 - Localize apps: translate locale files, set glossaries and connect GitHub repos.

### 🚆 <a name="travel--transportation"></a>Travel & Transportation
- [WhichTrim](https://whichtrim.com) `https://whichtrim.com/portal/mcp`
  [![WhichTrim MCP connector](https://glama.ai/mcp/connectors/com.whichtrim/vehicle-records/badges/score.svg)](https://glama.ai/mcp/connectors/com.whichtrim/vehicle-records)
  🔓 - US vehicle recalls, complaints, fuel economy, crash ratings, VIN decoding and OBD-II codes.
- [AirFreightPrice](https://airfreightprice.com) `https://mcp.airfreightprice.com/mcp`
  [![AirFreightPrice MCP connector](https://glama.ai/mcp/connectors/com.airfreightprice/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.airfreightprice/mcp)
  🔓 - Air cargo routes, airports and carriers with dated Freightos Air Index rates; submit quote requests.
- [Alice Flights](https://mcp.alice.co.il) `https://mcp.alice.co.il/mcp`
  [![Alice Flights MCP connector](https://glama.ai/mcp/connectors/il.co.alice/flights/badges/score.svg)](https://glama.ai/mcp/connectors/il.co.alice/flights)
  🔐 - Search worldwide flights via Israeli travel app Alice, with English and Hebrew results.
- [Arclight Events](https://arclight.events/mcp) `https://arclight.events/api/mcp`
  [![Arclight Events MCP connector](https://glama.ai/mcp/connectors/events.arclight/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/events.arclight/mcp)
  🔓 - Upcoming events in 50 metros: AI and tech meetups, hackathons, conferences and concerts.
- [Audiala](https://mcp.audiala.com/) `https://mcp.audiala.com/mcp`
  [![Audiala MCP connector](https://glama.ai/mcp/connectors/com.audiala/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.audiala/mcp)
  🔓 - Narrated audio guides for 45,000+ places in 1,900+ cities in 11 languages, with must-see lists.
- [erphome.pl](https://erphome.pl/en/api-rezerwacji-apartamentow) `https://api.erphome.pl/v1/mcp`
  [![erphome.pl MCP connector](https://glama.ai/mcp/connectors/pl.erphome.api/erphomepl/badges/score.svg)](https://glama.ai/mcp/connectors/pl.erphome.api/erphomepl)
  🔐 - Read-only data for Polish short-term rental owners: reservations, availability, pricing and reviews.
- [eSIMfly](https://esimfly.net/esim-api) `https://mcp.esimfly.net/mcp`
  [![eSIMfly MCP connector](https://glama.ai/mcp/connectors/io.github.eSimfly-Official/esimfly-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.eSimfly-Official/esimfly-mcp)
  🔐 - Wholesale eSIM plans in 200+ countries for resellers: search, order, top up and diagnose eSIMs.
- [ExplorersMap Travel Log](https://explorersmap.net/mcp) `https://explorersmap.net/mcp`
  [![ExplorersMap Travel Log MCP connector](https://glama.ai/mcp/connectors/net.explorersmap/explorers-map-travel-log/badges/score.svg)](https://glama.ai/mcp/connectors/net.explorersmap/explorers-map-travel-log)
  🔓 - Travel log: mark countries, regions and places, build trips, read stats and rankings; tools need a key.
- [FlightPowers Google Flights](https://flights.flightpowers.com) `https://flights.flightpowers.com/mcp`
  [![FlightPowers Google Flights MCP connector](https://glama.ai/mcp/connectors/com.flightpowers/google-flights/badges/score.svg)](https://glama.ai/mcp/connectors/com.flightpowers/google-flights)
  🔐 - Live Google Flights fares with a price verdict, round trips, date ranges and destination lists.
- [FrontDesko](https://frontdesko.app) `https://mcp.frontdesko.app/mcp`
  [![FrontDesko MCP connector](https://glama.ai/mcp/connectors/io.github.anmols/frontdesko-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.anmols/frontdesko-mcp)
  🔓 - Hotel PMS pricing and plan comparisons, OTA-commission savings math and docs search.
- [Gingerguide](https://gingerguide.app) `https://gingerguide.app/mcp`
  [![Gingerguide City Catalog MCP connector](https://glama.ai/mcp/connectors/app.gingerguide/catalog/badges/score.svg)](https://glama.ai/mcp/connectors/app.gingerguide/catalog)
  🔓 - Narrated audio-tour sights for 129 European cities, with coordinates and visit times.
- [HelloSafe Travel Insurance](https://atlas.hellosafe.com/platform/api/) `https://hellosafe.com/api/mcp-travel`
  [![HelloSafe Travel Insurance MCP connector](https://glama.ai/mcp/connectors/io.github.HelloSafe/travel-insurance/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.HelloSafe/travel-insurance)
  🔓 - Multi-insurer travel insurance quotes with guarantees and policy documents, plus credit card coverage checks.
- [Jet Tracker](https://jettracker.com.br/desenvolvedores) `https://jettracker.com.br/api/mcp`
  [![Jet Tracker MCP connector](https://glama.ai/mcp/connectors/br.com.jettracker/jet-tracker/badges/score.svg)](https://glama.ai/mcp/connectors/br.com.jettracker/jet-tracker)
  🔐 - Brazilian business aviation: each aircraft's real owner, flights, base and maintenance signals.
- [Korea Nationwide Data](https://korea-data-mcp.picks-site.workers.dev/) `https://korea-data-mcp.picks-site.workers.dev/mcp`
  [![Korea Nationwide Data MCP connector](https://glama.ai/mcp/connectors/io.github.sean-park-funda/korea-data-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sean-park-funda/korea-data-mcp)
  🔓 - Korean tourist attractions in Korean and English, bus stops across 138 cities, and 30-year weather normals.

- [MobilityMCP](https://ai.projektionisten.eu/mcp-landingpage/#mmcp) `https://ai.projektionisten.eu/mmcp`
  [![MobilityMCP connector](https://glama.ai/mcp/connectors/eu.projektionisten/mobility/badges/score.svg)](https://glama.ai/mcp/connectors/eu.projektionisten/mobility)
  🔐 - German public transport: journeys, departures, disruptions, and nearby stops and sharing vehicles.
- [Roamzy](https://roamzy.io) `https://roamzy.io/mcp`
  [![Roamzy MCP connector](https://glama.ai/mcp/connectors/io.github.roamzy-io/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.roamzy-io/mcp-server)
  🔓 - Buy and manage one global eSIM for 193 countries, billed per megabyte in USDT or USDC, no KYC.
- [TourismMCP](https://ai.projektionisten.eu/mcp-landingpage/#tmcp) `https://ai.projektionisten.eu/tmcp`
  [![TourismMCP connector](https://glama.ai/mcp/connectors/eu.projektionisten/tourism/badges/score.svg)](https://glama.ai/mcp/connectors/eu.projektionisten/tourism)
  🔐 - German travel: sights, opening hours, prices, events, weather and tides, densest in Lower Saxony.
- [Vedar](https://vedarai.ru/mcp) `https://vedarai.ru/api/mcp`
  [![Vedar MCP connector](https://glama.ai/mcp/connectors/ru.vedarai/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ru.vedarai/mcp)
  🔓 - Kamchatka travel: live tours and availability, safety alerts, weather, stays and trip plans.
- [VoyageHacks](https://voyagehacks.com/en/mcp-server/) `https://voyagehacks.com/mcp`
  [![VoyageHacks MCP connector](https://glama.ai/mcp/connectors/com.voyagehacks/travel/badges/score.svg)](https://glama.ai/mcp/connectors/com.voyagehacks/travel)
  🔓 - Search fact-checked travel guides in 11 languages, build packing kits, and get booking links.

- [SimFuse](https://simfuse.app/agent/) `https://api.simfuse.app/agentic/mcp`
  [![SimFuse MCP connector](https://glama.ai/mcp/connectors/app.simfuse.api/sim-fuse-e-sim-storefront/badges/score.svg)](https://glama.ai/mcp/connectors/app.simfuse.api/sim-fuse-e-sim-storefront)
  🔓 - Travel eSIMs for 200+ countries: browse plans, check coverage, price a trip and check out.

### 🔄 <a name="version-control"></a>Version Control

- [GitHub](https://github.com) `https://api.githubcopilot.com/mcp/`
  🔐 - Manage GitHub repositories, issues, pull requests, and Actions.

### 🏢 <a name="workplace--productivity"></a>Workplace & Productivity

- [AI Applyd](https://aiapplyd.com/mcps) `https://mcp.aiapplyd.com/mcp`
  [![AI Applyd MCP connector](https://glama.ai/mcp/connectors/io.github.whateverneveranywhere/aiapplyd/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.whateverneveranywhere/aiapplyd)
  🔓 - Resume scoring and rewrites, cover letters and auto-apply on 12 ATS platforms; needs Google sign-in.
- [Bramvia](https://bramvia.net/mcp-server) `https://bramvia.net/mcp`
  [![Bramvia MCP connector](https://glama.ai/mcp/connectors/net.bramvia/bramvia/badges/score.svg)](https://glama.ai/mcp/connectors/net.bramvia/bramvia)
  🔓 - Business Central knowledge, NAV lifecycle dates, ERP migration estimates and compliance deadlines.
- [Deoochform](https://deoochform.com) `https://deoochform.com/api/mcp/v2`
  [![Deoochform MCP connector](https://glama.ai/mcp/connectors/io.github.musaib001/deooch-forms/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.musaib001/deooch-forms)
  🔐 - Create forms, read submissions and build invitations.
- [Document Player](https://documentplayer.com/connect-ai/) `https://documentplayer.com/mcp`
  [![Document Player MCP connector](https://glama.ai/mcp/connectors/com.documentplayer/document-player/badges/score.svg)](https://glama.ai/mcp/connectors/com.documentplayer/document-player)
  🔐 - Send text to a reader window to read along and listen, with per-sentence playback controls.
- [Emboss](https://getemboss.ai) `https://api.getemboss.ai/mcp`
  [![Emboss MCP connector](https://glama.ai/mcp/connectors/io.github.edwinorange/emboss/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.edwinorange/emboss)
  🔐 - Makes PDF forms fillable, fills them from data or documents, reads them back, and faxes the result.
- [Fireflies](https://fireflies.ai) `https://api.fireflies.ai/mcp`
  [![Fireflies MCP connector](https://glama.ai/mcp/connectors/ai.fireflies.api/firefly/badges/score.svg)](https://glama.ai/mcp/connectors/ai.fireflies.api/firefly)
  🔐 - Search meeting transcripts, summaries, and action items.
- [FITsociety](https://fitsociety.io) `https://mcp.fitsociety.io/mcp/v1`
  [![FITsociety MCP connector](https://glama.ai/mcp/connectors/io.fitsociety/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.fitsociety/mcp)
  🔐 - Access approved clients, schedules, bookings, training and nutrition data for fitness coaching.
- [iSomor](https://tryisomor.com/en/mcp) `https://tryisomor.com/api/isomor/mcp`
  [![iSomor MCP connector](https://glama.ai/mcp/connectors/com.tryisomor/i-somor/badges/score.svg)](https://glama.ai/mcp/connectors/com.tryisomor/i-somor)
  🔐 - Translate a user's uploaded text PDFs into English or Chinese and fetch translated or bilingual PDF links.
- [KDAN PDF](https://pdf-reader.kdandoc.com/products/mcp/claude) `https://mcp.kdandoc.com/mcp`
  [![KDAN PDF MCP connector](https://glama.ai/mcp/connectors/com.kdandoc.mcp/kdan-pdf-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.kdandoc.mcp/kdan-pdf-mcp)
  🔓 - Compress, delete pages, redact PII, compare versions, and add or remove password protection on PDFs.
- [MeetNotes](https://getmeetnotes.com/mcp/) `https://getmeetnotes.com/mcp`
  [![MeetNotes MCP connector](https://glama.ai/mcp/connectors/com.getmeetnotes/meetnotes/badges/score.svg)](https://glama.ai/mcp/connectors/com.getmeetnotes/meetnotes)
  🔐 - Search, read and export meeting transcripts, minutes and action items, and import audio for transcription.
- [NoClick](https://www.noclick.com/mcp) `https://api.noclick.io/mcp`
  [![NoClick MCP connector](https://glama.ai/mcp/connectors/io.github.noclickapp/noclick/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.noclickapp/noclick)
  🔐 - Build, run, and monitor workflows and background AI agents across connected apps.
- [Nolizi Calendar](https://calendar.nolizi.com/agents) `https://calendar.nolizi.com/mcp`
  [![Nolizi Calendar MCP connector](https://glama.ai/mcp/connectors/com.nolizi.calendar/calendar/badges/score.svg)](https://glama.ai/mcp/connectors/com.nolizi.calendar/calendar)
  🔓 - Free scheduling: list event types, read availability, book, verify and cancel; tools need a key.
- [Poly-Glot AI Workspace](https://hmoses.github.io/dev-guide.html) `https://br-steep-leaf-ae2o29qz-mcp.compute.c-2.us-east-2.aws.neon.tech/mcp`
  [![Poly-Glot AI Workspace MCP connector](https://glama.ai/mcp/connectors/io.github.hmoses/poly-glot-ai-workspace/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hmoses/poly-glot-ai-workspace)
  🔓 - Multilingual prompt workspace with 1,000+ templates in 35 languages, Compare Mode, and BYOM.
- [QuillHub](https://quillhub.ai/en/help/mcp-claude-cursor) `https://mcp.quillhub.ai/mcp`
  [![QuillHub MCP connector](https://glama.ai/mcp/connectors/ai.quillhub/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.quillhub/mcp)
  🔐 - Search meeting transcripts, pull decisions and action items, and transcribe files and links.
- [ResuMakeAi](https://www.resumakeai.com) `https://www.resumakeai.com/api/mcp`
  [![ResuMakeAi MCP connector](https://glama.ai/mcp/connectors/com.resumakeai/resu-make-ai/badges/score.svg)](https://glama.ai/mcp/connectors/com.resumakeai/resu-make-ai)
  🔓 - Score a resume against a job description for ATS parsing, match percentage, and missing keywords.
- [Telegram Calendar](https://calendar-tg.app/mcp) `https://calendar-tg.app/mcp`
  [![Telegram Calendar MCP connector](https://glama.ai/mcp/connectors/app.calendar-tg/telegram-calendar-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.calendar-tg/telegram-calendar-mcp)
  🔐 - Search, create, update and manage events across Google, Apple, CalDAV and Telegram.
- [wals.pro AI 4 weclapp](https://ai.wals.pro) `https://mcp.ai.wals.pro/v1/mcp`
  [![wals.pro AI 4 weclapp MCP connector](https://glama.ai/mcp/connectors/pro.wals.ai/weclapp/badges/score.svg)](https://glama.ai/mcp/connectors/pro.wals.ai/weclapp)
  🔐 - weclapp ERP: quotes, orders, invoices, stock and master data, with every write previewed and approved.

### 🧰 <a name="other-tools--integrations"></a>Other Tools & Integrations

- [acdoyle](https://acdoyle.dev) `https://acdoyle.dev/api/mcp`
  [![acdoyle MCP connector](https://glama.ai/mcp/connectors/io.github.granetb-acdoyle/acdoyle/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.granetb-acdoyle/acdoyle)
  🔓 - Three specialists for problem-solving, non-custodial budget execution and business advice; x402 pay-per-call.
- [BioVet](https://bio.vet/) `https://bio.vet/mcp`
  [![BioVet MCP connector](https://glama.ai/mcp/connectors/vet.bio/biovet-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/vet.bio/biovet-mcp)
  🔓 - Find a 24/7 vet clinic in Moscow, check live prices and free doctor slots, book a visit, and triage symptoms.
- [Church of AI & Cats](https://churchofai.cat/skill.md) `https://churchofai.cat/aigora/mcp`
  [![Church of AI & Cats MCP connector](https://glama.ai/mcp/connectors/cat.churchofai/aigora/badges/score.svg)](https://glama.ai/mcp/connectors/cat.churchofai/aigora)
  🔓 - Doctrine, articles and a forum where agents confess failures like hallucination and get penance.
- [HelpySelf](https://helpyself.com) `https://helpyself.com/mcp`
  [![HelpySelf MCP connector](https://glama.ai/mcp/connectors/com.helpyself/tools/badges/score.svg)](https://glama.ai/mcp/connectors/com.helpyself/tools)
  🔓 - Convert, compress and split PDFs and images, redact personal data, and run text utilities.
- [Human Design](https://www.gethumandesign.com/mcp-docs/) `https://api.gethumandesign.com/mcp`
  [![Human Design MCP connector](https://glama.ai/mcp/connectors/com.gethumandesign.www/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.gethumandesign.www/mcp)
  🔐 - Calculate Human Design bodygraphs from birth data, compare two people, and analyse group dynamics.
- [Natal Compass](https://natalcompass.com/connect) `https://natalcompass.com/mcp`
  [![Natal Compass MCP connector](https://glama.ai/mcp/connectors/com.natalcompass/connector/badges/score.svg)](https://glama.ai/mcp/connectors/com.natalcompass/connector)
  🔓 - Birth charts, transits, moon phase, retrogrades, synastry and solar returns.
- [Perspect](https://tryperspect.com) `https://perspect-ai-backend.onrender.com/mcp`
  [![Perspect MCP connector](https://glama.ai/mcp/connectors/com.tryperspect/perspect/badges/score.svg)](https://glama.ai/mcp/connectors/com.tryperspect/perspect)
  🔓 - Convene a panel of expert AI personas to debate a decision from every side; debates need a Pro key.
- [RemoveDuplicates.org](https://removeduplicates.org/) `https://removeduplicates.org/mcp`
  [![RemoveDuplicates.org MCP connector](https://glama.ai/mcp/connectors/org.removeduplicates/remove-duplicatesorg/badges/score.svg)](https://glama.ai/mcp/connectors/org.removeduplicates/remove-duplicatesorg)
  🔓 - Remove duplicate lines or CSV/TSV rows; stateless, text is never stored.
- [Stellara](https://stellara.natlex.it/#api) `https://mcp.stellara.natlex.it/mcp`
  [![Stellara MCP connector](https://glama.ai/mcp/connectors/it.natlex/stellara-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/it.natlex/stellara-mcp)
  🔐 - Swiss Ephemeris astrology: natal charts, transits and synastry, with historical UTC offsets.
- [toolvend](https://toolvend.dev/) `https://toolvend.dev/mcp`
  [![toolvend MCP connector](https://glama.ai/mcp/connectors/dev.toolvend/dns-whois-domain-tools/badges/score.svg)](https://glama.ai/mcp/connectors/dev.toolvend/dns-whois-domain-tools)
  🔓 - x402-paid utilities: URL inspection, DNS, RDAP, LEI, sitemaps, robots.txt, VAT and QR codes.
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
