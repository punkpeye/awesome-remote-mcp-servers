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
* 🎓 - [Education](#education)
* 🌳 - [Environment](#environment)
* 📂 - [File Storage](#file-storage)
* 💰 - [Finance](#finance)
* 🍽️ - [Food & Dining](#food--dining)
* 🎮 - [Gaming](#gaming)
* 🏋️ - [Health & Fitness](#health--fitness)
* 💼 - [Jobs & Careers](#jobs--careers)
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
- [7Maps](https://7it.co.il/7maps/) `https://7it.co.il/7maps/mcp`
  [![7Maps MCP connector](https://glama.ai/mcp/connectors/io.github.XLSV777/7maps/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.XLSV777/7maps)
  🔓 - Daily map of 22,000+ public MCP servers: status, tool risk, changes and routing to a tool; pay per call via x402.
- [AgentScout](https://agentscouthq.com/mcp/connect.html) `https://mcp.agentscouthq.com/mcp`
  [![AgentScout MCP connector](https://glama.ai/mcp/connectors/com.agentscouthq/directory/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentscouthq/directory)
  🔓 - Search 2,065+ AI agent tools and 276 MCP servers by keyword or task; compare pricing and get tool details.
- [AI Tools Directory](https://ai.toolboxes.top) `https://ai-tools-mcp.toolboxes.top/mcp`
  [![AI Tools Directory MCP connector](https://glama.ai/mcp/connectors/top.toolboxes/ai-tools-directory/badges/score.svg)](https://glama.ai/mcp/connectors/top.toolboxes/ai-tools-directory)
  🔓 - Curated index of 221 AI tools across 21 industries; search by use case, department or pricing tier.
- [Aident Loadout](https://aident.ai) `https://loadout.aident.ai/mcp`
  [![Aident Loadout MCP connector](https://glama.ai/mcp/connectors/ai.aident.loadout/aident-ai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.aident.loadout/aident-ai)
  🔐 - Find and run 27,000+ actions across 1,000+ apps, with vaulted credentials, cost preflight and an audit log.
- [AIsa](https://aisa.one) `https://mcp.aisa.one/mcp`
  [![AIsa MCP connector](https://glama.ai/mcp/connectors/one.aisa/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/one.aisa/mcp)
  🔐 - One key for 950+ SEO, finance, social, search and sales APIs, with a spend cap on each call.
- [Agent Deals](https://agent-deals.gm-tools.workers.dev) `https://agent-deals.gm-tools.workers.dev/mcp`
  [![Agent Deals MCP connector](https://glama.ai/mcp/connectors/io.github.gmahar82-stack/agent-deals/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gmahar82-stack/agent-deals)
  🔓 - Find the cheapest working x402 API for a task among 13,000+ health-checked services; pay per call in USDC on Base.
- [Agent Kiosk](https://agent-kiosk.vercel.app) `https://agent-kiosk.vercel.app/mcp`
  [![Agent Kiosk MCP connector](https://glama.ai/mcp/connectors/io.github.ralf9090/agent-kiosk/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ralf9090/agent-kiosk)
  🔓 - 19 tools: web pages to Markdown, social and paper search, domain and GitHub intel, security and DeFi data; x402 USDC.
- [Agent Nexus](https://agentnexus.app) `https://agentnexus.app/api/public/mcp`
  [![Agent Nexus MCP connector](https://glama.ai/mcp/connectors/app.agentnexus/agent-nexus/badges/score.svg)](https://glama.ai/mcp/connectors/app.agentnexus/agent-nexus)
  🔓 - Registry of the APIs, MCP servers and CLIs agents call, with live health checks and reliability history.
- [Agent Stack Data](https://agentstackdata.com) `https://agentstackdata.com/mcp`
  [![Agent Stack Data MCP connector](https://glama.ai/mcp/connectors/com.agentstackdata/agentstack/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentstackdata/agentstack)
  🔓 - Curated catalog of 30 AI-agent tools with verified pricing: search, voice, MCP, automation and data APIs.
- [AgentBIT](https://agentbit.app) `https://agentbit.app/mcp`
  [![AgentBIT MCP connector](https://glama.ai/mcp/connectors/app.agentbit/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.agentbit/mcp)
  🔓 - One tool that routes any task to the best of 14,000+ x402 tools; pay per call in USDC on Base.
- [Agentropolis](https://agentropolis.io) `https://agentropolis.io/api/mcp`
  [![Agentropolis MCP connector](https://glama.ai/mcp/connectors/io.agentropolis/agentropolis/badges/score.svg)](https://glama.ai/mcp/connectors/io.agentropolis/agentropolis)
  🔓 - Search 38,000+ MCP servers, x402/MPP paid APIs and A2A agents; trust scores come only from verified payments.
- [AgentRXI](https://agentrxi.com) `https://mcp.agentrxi.com/mcp`
  [![AgentRXI MCP connector](https://glama.ai/mcp/connectors/com.agentrxi.mcp/agentrxi/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentrxi.mcp/agentrxi)
  🔓 - 232 tools: LLMs, search, browser, OCR, Office, media, vision, email, rooms and queues; pay per call in USDC via x402.
- [agentsvc.io](https://agentsvc.io) `https://agentsvc.io/mcp`
  [![agentsvc.io MCP connector](https://glama.ai/mcp/connectors/io.agentsvc/services/badges/score.svg)](https://glama.ai/mcp/connectors/io.agentsvc/services)
  🔓 - 70 tools: web pages to Markdown, screenshots, PDF, OCR, search, crypto and market data; pay per call in USDC via x402.
- [Agora](https://openforallofus.com) `https://openforallofus.com/api/mcp`
  [![Agora MCP connector](https://glama.ai/mcp/connectors/com.openforallofus/agora/badges/score.svg)](https://glama.ai/mcp/connectors/com.openforallofus/agora)
  🔓 - Search every server in the official MCP registry, ranked by live handshake checks, tool lists and signed reports.
- [Alba.design](https://alba.design) `https://alba.design/mcp`
  [![Alba.design MCP connector](https://glama.ai/mcp/connectors/design.alba/albadesign/badges/score.svg)](https://glama.ai/mcp/connectors/design.alba/albadesign)
  🔓 - Remote MCP server of the Alba.design builder: create a website or store draft, get features, pricing and doc search.
- [code402](https://code402.dev) `https://mcp.code402.dev/mcp`
  [![code402 MCP connector](https://glama.ai/mcp/connectors/io.github.89rat/code402/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.89rat/code402)
  🔓 - Storefront for x402 APIs: discover services, probe payment terms and list your own API.
- [CodeTrendy](https://codetrendy.com/mcp) `https://codetrendy.com/api/mcp`
  [![CodeTrendy MCP connector](https://glama.ai/mcp/connectors/com.codetrendy/directory/badges/score.svg)](https://glama.ai/mcp/connectors/com.codetrendy/directory)
  🔓 - Search 650+ reviewed SaaS, AI and developer tools, find alternatives to a product and browse trending launches.
- [CorpusIQ](https://www.corpusiq.io/mcp?utm_source=github&utm_medium=referral&utm_campaign=awesome-remote-mcp-servers) `https://mcp2.corpusiq.io/mcp`
  [![CorpusIQ MCP connector](https://glama.ai/mcp/connectors/io.corpusiq/multi-source-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.corpusiq/multi-source-mcp)
  🔓 - One MCP endpoint for 40+ business systems; tools list without a key, per-connector sign-in for cited answers.
- [DDMarketer](https://www.ddmarketer.com) `https://www.ddmarketer.com/api/mcp`
  [![DDMarketer MCP connector](https://glama.ai/mcp/connectors/io.github.CodePhantom-1/ddmarketer-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.CodePhantom-1/ddmarketer-mcp)
  🔓 - Validated SaaS opportunities mined from real user complaints, scored 0-100 for intent; search and scores need no key.
- [DexL Agents](https://agents.dexl.io) `https://agents.dexl.io/mcp`
  [![DexL Agents MCP connector](https://glama.ai/mcp/connectors/io.github.dexl-io/agents/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.dexl-io/agents)
  🔓 - Pay-per-call chat models, text to speech, web search, on-chain reads and NLP tools in USDC via x402; browsing is free.
- [Diogenes Gateway](https://diogenes-l402-gateway.corinth.workers.dev) `https://diogenes-l402-gateway.corinth.workers.dev/mcp`
  [![Diogenes Gateway MCP connector](https://glama.ai/mcp/connectors/io.github.stand-out-of-my-sun/diogenes-gateway/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.stand-out-of-my-sun/diogenes-gateway)
  🔓 - Multi-protocol AI microservices: pre-execution guardrails, smart contract audits, and EVE Frontier smart assemblies.
- [Diogenes Gemini Suite](https://diogenesgateway.com/#gemini-suite) `https://diogenesgateway.com/mcp/gemini-suite`
  [![Diogenes Gemini Suite MCP connector](https://glama.ai/mcp/connectors/io.github.stand-out-of-my-sun/diogenes-gemini-suite-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.stand-out-of-my-sun/diogenes-gemini-suite-mcp)
  🔓 - Account-less inference across 45 Gemini models, Antigravity Agent, and Deep Research Pro.
- [Egbe](https://egbe.ai) `https://os.hz.egbe.dev/mcp`
  [![Egbe MCP connector](https://glama.ai/mcp/connectors/ai.egbe/egbe/badges/score.svg)](https://glama.ai/mcp/connectors/ai.egbe/egbe)
  🔐 - Hosting, databases, email, analytics, payments, ads and research for the business you run with Egbe.
- [Fatstack](https://www.fatstack.net) `https://echo.fatstack.net/mcp`
  🔓 - Marketplace of MCP servers and APIs that agents pay for per call in USDC over x402 on Base.
- [FiatDock](https://fiatdock.com) `https://fiatdock.com/mcp`
  [![FiatDock MCP connector](https://glama.ai/mcp/connectors/com.fiatdock/fiatdock-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.fiatdock/fiatdock-mcp)
  🔓 - Pay-per-call web reading, email checks, token safety and a marketplace of MCP services, paid in USDC over x402.
- [FlowRunner Prompt to Flow](https://docs.flowrunner.ai/build/prompt-to-flow) `https://app.flowrunner.ai/mcp`
  [![FlowRunner Prompt to Flow MCP connector](https://glama.ai/mcp/connectors/ai.flowrunner.app/flow-runner-prompt-to-flow/badges/score.svg)](https://glama.ai/mcp/connectors/ai.flowrunner.app/flow-runner-prompt-to-flow)
  🔐 - Build FlowRunner flows across 2,300 integrations from a plain-English prompt, then run, fix, and schedule them in chat.
- [GenMagic](https://genmagic.co/developers?utm_source=awesome-remote-mcp-servers&utm_medium=listing&utm_campaign=hosted-mcp-sep-2026) `https://genmagic.co/api/mcp`
  [![GenMagic MCP connector](https://glama.ai/mcp/connectors/io.github.yumaheymans/genmagic/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.yumaheymans/genmagic)
  🔓 - Generate text, images, speech, music, and video from one prepaid balance, with optional brand personalization; tool discovery is open, generation calls need a GenMagic API key.
- [Glasser](https://glasser.ai) `https://api.glasser.ai/mcp`
  [![Glasser MCP connector](https://glama.ai/mcp/connectors/ai.glasser/glasser/badges/score.svg)](https://glama.ai/mcp/connectors/ai.glasser/glasser)
  🔐 - One key to 1,000+ pay-per-call data APIs: enrichment, SEO, scraping, places, news and social data.
- [Hubris](https://hubris.pw) `https://api.hubris.pw/mcp`
  [![Hubris MCP connector](https://glama.ai/mcp/connectors/pw.hubris.api/hubris/badges/score.svg)](https://glama.ai/mcp/connectors/pw.hubris.api/hubris)
  🔐 - Catalogue of 500+ LLMs with ruble pricing, account balance, and OpenAI-compatible chat completions.
- [Hydracept](https://hydracept.com) `https://api.hydracept.com/mcp/compact`
  [![Hydracept MCP connector](https://glama.ai/mcp/connectors/com.hydracept/hydracept/badges/score.svg)](https://glama.ai/mcp/connectors/com.hydracept/hydracept)
  🔓 - Discover capabilities without a key; an API key is needed to run jobs, with quotes, receipts, artifacts and BYOK.
- [Index Agentica](https://indexagentica.com/?utm_source=awesome-list&utm_medium=pr&utm_campaign=launch-2026q4) `https://mcp.indexagentica.com/mcp`
  [![Index Agentica MCP connector](https://glama.ai/mcp/connectors/com.indexagentica/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.indexagentica/mcp)
  🔓 - Search an agent-first directory of agent tools, MCP servers, skills, protocols and APIs; no key needed.
- [INITE Atlas](https://inite.ai/en/atlas) `https://inite.ai/api/mcp/atlas`
  [![INITE Atlas MCP connector](https://glama.ai/mcp/connectors/ai.inite/atlas/badges/score.svg)](https://glama.ai/mcp/connectors/ai.inite/atlas)
  🔓 - Look up 20,000+ AI tools: prices and their history, APIs, and each vendor's MCP server measured daily.
- [ISHOB](https://ishob.com) `https://api.ishob.com/mcp`
  [![ISHOB MCP connector](https://glama.ai/mcp/connectors/com.ishob/archive/badges/score.svg)](https://glama.ai/mcp/connectors/com.ishob/archive)
  🔓 - 35 pay-per-call tools: web extraction, crypto token and wallet risk, SEC company data, weather risk; x402 USDC.
- [Makeroo](https://makeroo.app/mcp?utm_source=awesome-remote-mcp-servers&utm_medium=listing) `https://makeroo.app/mcp`
  [![Makeroo MCP connector](https://glama.ai/mcp/connectors/app.makeroo/makeroo/badges/score.svg)](https://glama.ai/mcp/connectors/app.makeroo/makeroo)
  🔓 - Search live product launches and submit a product to a free, AI-verified launch directory for its maker.
- [MCP Charts](https://mcpcharts.com) `https://mcpcharts.com/mcp`
  [![MCP Charts MCP connector](https://glama.ai/mcp/connectors/com.mcpcharts/mcpcharts/badges/score.svg)](https://glama.ai/mcp/connectors/com.mcpcharts/mcpcharts)
  🔓 - Find MCP servers, skills, plugins, agents, prompts and rules for a task, with compatibility evidence.
- [mcp.market](https://mcp.market) `https://gw.mcp.market/mcp`
  [![mcp.market gateway MCP connector](https://glama.ai/mcp/connectors/market.mcp/gateway/badges/score.svg)](https://glama.ai/mcp/connectors/market.mcp/gateway)
  🔓 - Search 33,000+ MCP servers by job, with a safety grade and reviews on each, then call any of them here.
- [MEDIAPRONET](https://mediapronet.com/mcp) `https://mediapronet.com/api/mcp`
  [![MEDIAPRONET MCP connector](https://glama.ai/mcp/connectors/com.mediapronet/directory/badges/score.svg)](https://glama.ai/mcp/connectors/com.mediapronet/directory)
  🔓 - Directory of 240+ newly launched startups and web tools: keyword search, alternatives, categories and Site of the Day.
- [MeshKore](https://meshkore.com) `https://mcp.meshkore.com/v1/mcp`
  [![MeshKore MCP connector](https://glama.ai/mcp/connectors/com.meshkore/meshkore/badges/score.svg)](https://glama.ai/mcp/connectors/com.meshkore/meshkore)
  🔓 - Find a live agent by describing the task, then call its skills; availability is probe-verified.
- [minia2a](https://minia2a.uk) `https://minia2a.uk/mcp`
  [![minia2a MCP connector](https://glama.ai/mcp/connectors/uk.minia2a/minia2a-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/uk.minia2a/minia2a-mcp)
  🔓 - 1,600+ pay-per-call APIs — crypto data, web scraping, AI inference, token security — USDC on Base via x402.
- [nohumans.directory](https://nohumans.directory) `https://api.nohumans.directory/mcp`
  [![nohumans.directory MCP connector](https://glama.ai/mcp/connectors/directory.nohumans/registry/badges/score.svg)](https://glama.ai/mcp/connectors/directory.nohumans/registry)
  🔓 - Find paid x402 APIs by capability and price, with probe history and paid-delivery evidence per endpoint.
- [NovAI](https://aiapi-pro.com/mcp) `https://aiapi-pro.com/api/mcp`
  [![NovAI MCP connector](https://glama.ai/mcp/connectors/io.github.vvvvking/novai-prices/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.vvvvking/novai-prices)
  🔓 - Live prices for 111 Chinese AI models: cheapest model per task, per-unit price lookup and category listing.
- [OceanToken](https://oceantoken.ai) `https://mcp.oceantoken.ai/mcp`
  [![OceanToken MCP connector](https://glama.ai/mcp/connectors/ai.oceantoken/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.oceantoken/mcp)
  🔐 - Search and price 480+ AI models, ask any of them, and generate images, video and speech on one prepaid balance.
- [openradar](https://openradar.fun) `https://openradar.fun/mcp`
  [![openradar MCP connector](https://glama.ai/mcp/connectors/io.github.MikhailSagalaev/openradar/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.MikhailSagalaev/openradar)
  🔓 - Open feed of job vacancies and freelance orders: search leads, market pay stats and sourcing dorks; no auth.
- [PayAPI Market](https://payapi.market) `https://payapi.market/mcp`
  [![PayAPI Market MCP connector](https://glama.ai/mcp/connectors/market.payapi/marketplace/badges/score.svg)](https://glama.ai/mcp/connectors/market.payapi/marketplace)
  🔓 - Search 358 live x402 APIs from 242 providers, then pay each call in USDC on Base with no API key or account.
- [Phase Router](https://router.phase.xyz) `https://mcp.ai.phase.xyz/mcp`
  [![Phase Router MCP connector](https://glama.ai/mcp/connectors/xyz.phase.ai/gateway/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.phase.ai/gateway)
  🔓 - Route chat and embeddings to 400+ models, quote prices and fetch signed receipts per call.
- [Quietforge x402 Tools](https://quietforge-studio.pages.dev/docs-api/#mcp) `https://qf-api.quietforge-studio.workers.dev/mcp`
  [![Quietforge x402 Tools MCP connector](https://glama.ai/mcp/connectors/io.github.quietforgestudio/x402-tools/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.quietforgestudio/x402-tools)
  🔓 - Search a health-probed directory of x402 APIs, probe one, and read aggregate 24h on-chain USDC settlement.
- [QVeris](https://qveris.ai) `https://mcp.qveris.ai/mcp`
  [![QVeris MCP connector](https://glama.ai/mcp/connectors/io.github.QVerisAI/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.QVerisAI/mcp)
  🔐 - Find professional data services and tools, check what they cover, call them and audit usage.
- [Rokha](https://rokha.ai) `https://rokha.ai/mcp/jsonrpc`
  [![Rokha MCP connector](https://glama.ai/mcp/connectors/ai.rokha/rokha/badges/score.svg)](https://glama.ai/mcp/connectors/ai.rokha/rokha)
  🔓 - Search a registry of agent skills and MCP servers, run them for real with traces, and hire proven agents for USDC.
- [ScorpTech x402 Tools](https://scorptech.it.com/api/x402/docs) `https://scorptech.it.com/api/x402/mcp`
  [![ScorpTech x402 Tools MCP connector](https://glama.ai/mcp/connectors/com.it.scorptech/x402/badges/score.svg)](https://glama.ai/mcp/connectors/com.it.scorptech/x402)
  🔓 - 1,012 pay-per-call tools: web data, SEO, security, OSINT, SEC filings and Solana/EVM lookups; USDC via x402.
- [SkillTide](https://anclum.com) `https://anclum.com/mcp`
  [![SkillTide MCP connector](https://glama.ai/mcp/connectors/io.github.wdfdaivd/skilltide-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.wdfdaivd/skilltide-mcp)
  🔓 - Search 7,500+ MCP servers, agent skills and AI projects with verified official links.
- [Socketlist](https://socketlist.pages.dev/mcp-server/) `https://socketlist.pages.dev/mcp`
  [![Socketlist MCP connector](https://glama.ai/mcp/connectors/io.github.thunderbid/socketlist-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.thunderbid/socketlist-mcp)
  🔓 - Search 800+ open-source MCP servers by keyword or use case, with summaries, stars and install configs.
- [Store API](https://store-api.com/mcp-guide) `https://store-api.com/mcp`
  [![Store API MCP connector](https://glama.ai/mcp/connectors/com.store-api/store-api/badges/score.svg)](https://glama.ai/mcp/connectors/com.store-api/store-api)
  🔓 - Ask 58 models, including GPT, Claude and Gemini, and generate images; calls need a prepaid key.
- [Superpowers](https://superpowers.tools) `https://superpowers.tools/mcp`
  [![Superpowers MCP connector](https://glama.ai/mcp/connectors/tools.superpowers/superpowers/badges/score.svg)](https://glama.ai/mcp/connectors/tools.superpowers/superpowers)
  🔓 - LLMs, web search, scraping, media and business data with one key; compare providers; calls need a key.
- [Suprsonic](https://suprsonic.ai/?utm_source=awesome-remote-mcp-servers&utm_medium=listing) `https://suprsonic.ai/v1/mcp`
  [![Suprsonic MCP connector](https://glama.ai/mcp/connectors/io.github.O-mega-Enterprise/suprsonic-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.O-mega-Enterprise/suprsonic-mcp)
  🔓 - 24 agent tools: web search, scraping, people and company data, speech, images and research; calls need a free key.
- [Synthex Forge](https://synthexforge.com) `https://x402.synthexforge.com/mcp`
  [![Synthex Forge MCP connector](https://glama.ai/mcp/connectors/com.synthexforge.x402/paid-agent-services/badges/score.svg)](https://glama.ai/mcp/connectors/com.synthexforge.x402/paid-agent-services)
  🔓 - 198 paid agent services settled in USDC on Base: trust verdicts, audits, extraction, compliance and search.
- [TaskFuel](https://taskfuel.ai) `https://app.taskfuel.ai/mcp`
  [![TaskFuel MCP connector](https://glama.ai/mcp/connectors/ai.taskfuel.app/task-fuelai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.taskfuel.app/task-fuelai)
  🔐 - Call pay-per-request APIs for search, market data and enrichment, billed to a prepaid balance.
- [Terraphim Skills](https://terraphim-skills.md) `https://mcp.terraphim-skills.md/mcp`
  [![Terraphim Skills MCP connector](https://glama.ai/mcp/connectors/md.terraphim-skills/terraphim-skills/badges/score.svg)](https://glama.ai/mcp/connectors/md.terraphim-skills/terraphim-skills)
  🔓 - Search, preview and discover SKILL.md packages from an anonymous catalogue of curated agent skills.
- [toolgrep](https://toolgrep.com) `https://toolgrep.com/mcp`
  [![toolgrep MCP connector](https://glama.ai/mcp/connectors/com.toolgrep/toolgrep/badges/score.svg)](https://glama.ai/mcp/connectors/com.toolgrep/toolgrep)
  🔓 - Search developer tools, APIs and MCP servers by need, with crawled pricing, free tier and API facts.
- [Toolfound](https://toolfound.com/?utm_source=awesome-list&utm_medium=pr&utm_campaign=awesome-remote-mcp) `https://toolfound.com/api/mcp`
  [![Toolfound MCP connector](https://glama.ai/mcp/connectors/com.toolfound/toolfound/badges/score.svg)](https://glama.ai/mcp/connectors/com.toolfound/toolfound)
  🔓 - Search a directory of software products, compare alternatives and plan a launch; no key needed for discovery.
- [ToolRouter](https://toolrouter.com) `https://api.toolrouter.com/mcp`
  [![ToolRouter MCP connector](https://glama.ai/mcp/connectors/io.github.Humanleap/toolrouter/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Humanleap/toolrouter)
  🔓 - Discover tools for research, media and connected accounts; paid operations need account access.
- [ToolsMonk](https://toolsmonk.com) `https://toolsmonk.com/api/mcp`
  [![ToolsMonk MCP connector](https://glama.ai/mcp/connectors/com.toolsmonk/catalog/badges/score.svg)](https://glama.ai/mcp/connectors/com.toolsmonk/catalog)
  🔓 - Find the right one of 255 free browser-based PDF, image, text and SEO tools by describing the task.
- [Toolwork](https://toolwork.org) `https://mcp.toolwork.org/mcp`
  [![Toolwork MCP connector](https://glama.ai/mcp/connectors/org.toolwork/toolwork/badges/score.svg)](https://glama.ai/mcp/connectors/org.toolwork/toolwork)
  🔓 - Search 13,000+ MCP servers, APIs and CLIs by job; get a best pick with a paste-ready config and a recomputable score.
- [ToolYour](https://www.toolyour.com/developers/mcp) `https://api.toolyour.com/mcp`
  [![ToolYour MCP connector](https://glama.ai/mcp/connectors/com.toolyour.api/tool-your-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.toolyour.api/tool-your-mcp-server)
  🔑 - Plan, run, and verify SEO, security, and ship-gate checks for AI agents on one API key.
- [Trades With AI + SaaS Price Watch](https://tradeswithai.com/agents/) `https://tradeswithai.com/mcp`
  [![Trades With AI + SaaS Price Watch MCP connector](https://glama.ai/mcp/connectors/com.tradeswithai/directory/badges/score.svg)](https://glama.ai/mcp/connectors/com.tradeswithai/directory)
  🔓 - Search AI tools for trades businesses and public SaaS plan prices, each with the vendor quote and check date.
- [Vextorium](https://vextorium.com) `https://api.vextorium.com/mcp`
  [![Vextorium MCP connector](https://glama.ai/mcp/connectors/com.vextorium.api/vextorium/badges/score.svg)](https://glama.ai/mcp/connectors/com.vextorium.api/vextorium)
  🔓 - 509 pay-per-call data tools: on-chain (30+ chains), DeFi, markets, economic stats, compliance; USDC via x402.
- [WebArm24](https://webarm24.online) `https://webarm24.online/mcp`
  [![WebArm24 MCP connector](https://glama.ai/mcp/connectors/online.webarm24/webarm24/badges/score.svg)](https://glama.ai/mcp/connectors/online.webarm24/webarm24)
  🔓 - AI automation platform (n8n/Zapier alternative): build, schedule and run workflows from your agent; tools need a key.
- [Zapier](https://zapier.com) `https://mcp.zapier.com/api/mcp/mcp`
  [![Zapier MCP connector](https://glama.ai/mcp/connectors/com.zapier.mcp/zapier/badges/score.svg)](https://glama.ai/mcp/connectors/com.zapier.mcp/zapier)
  🔐 - Run your Zapier actions across thousands of connected apps as MCP tools.

### 🤝 <a name="agreements--coordination"></a>Agreements & Coordination

- [Agent Account Index](https://agent-account-index.vercel.app) `https://agent-account-index.vercel.app/mcp`
  [![Agent Account Index MCP connector](https://glama.ai/mcp/connectors/io.github.mycelium-being/agent-account-index/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.mycelium-being/agent-account-index)
  🔓 - Says whether a service's terms let an AI agent hold an account, and who answers for it.
- [AgentBoard](https://agentsknow.app) `https://agentsknow.app/mcp`
  [![AgentBoard MCP connector](https://glama.ai/mcp/connectors/app.agentsknow/agentboard/badges/score.svg)](https://glama.ai/mcp/connectors/app.agentsknow/agentboard)
  🔓 - Coordinate agent projects: goals, leased tasks, evidence review and handoffs; protected tools require OAuth or a key.
- [APISign](https://apisign.io) `https://apisign.io/mcp`
  [![APISign MCP connector](https://glama.ai/mcp/connectors/io.apisign/apisign/badges/score.svg)](https://glama.ai/mcp/connectors/io.apisign/apisign)
  🔑 - Draft contracts from Markdown templates, send them for legally binding e-signature and get sealed, verifiable PDFs.
- [Central City](https://centralcity.ai) `https://centralcity.ai/mcp/open`
  [![Central City MCP connector](https://glama.ai/mcp/connectors/ai.centralcity/central-city/badges/score.svg)](https://glama.ai/mcp/connectors/ai.centralcity/central-city)
  🔓 - Rooms where AI agents and people work as one team; agents get a Base ID and pay each other in USDC.
- [Charmnomicon](https://charmnomicon.com) `https://charmnomicon.com/mcp`
  [![Charmnomicon MCP connector](https://glama.ai/mcp/connectors/com.charmnomicon/charmnomicon/badges/score.svg)](https://glama.ai/mcp/connectors/com.charmnomicon/charmnomicon)
  🔓 - Publish, browse and play small web apps alongside humans and other agents, and leave each other notes.
- [cogDepot](https://cogdepot.com) `https://mcp.cogdepot.com/mcp`
  [![cogDepot MCP connector](https://glama.ai/mcp/connectors/io.github.cogdepot/cogdepot/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.cogdepot/cogdepot)
  🔓 - Agent marketplace: keyless discovery and reputation lookup; listing, negotiating and sealing deals require OAuth.
- [Common](https://agents.dooza.ai) `https://agents.dooza.ai/mcp`
  [![Common MCP connector](https://glama.ai/mcp/connectors/io.github.sibi-narendran/common-agent-network/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sibi-narendran/common-agent-network)
  🔓 - Public async chatrooms, knowledge base, directory and feature/human-help queues where independent agents meet.
- [Countersignatory](https://countersignatory.com) `https://countersignatory.com/mcp`
  [![Countersignatory MCP connector](https://glama.ai/mcp/connectors/com.countersignatory/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.countersignatory/mcp)
  🔓 - Spot prices for verified human sign-off, judgment and notarisation, with quotes and a public index.
- [Dabloons](https://dabloons.net) `https://dabloons.net/mcp`
  [![Dabloons MCP connector](https://glama.ai/mcp/connectors/net.dabloons/dabloons/badges/score.svg)](https://glama.ai/mcp/connectors/net.dabloons/dabloons)
  🔐 - Agents hire other agents for PR reviews, bug repros and site QA, or work bounties to earn dabloons.
- [eContract](https://econtract.online/mcp) `https://api.econtract.online/mcp`
  [![eContract MCP connector](https://glama.ai/mcp/connectors/online.econtract/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/online.econtract/mcp)
  🔐 - Send contracts for e-signature, place signatures by anchor text, track signers and download signed PDFs.
- [Elicitly](https://www.elicitly.ai) `https://mcp.elicitly.ai/mcp`
  [![Elicitly MCP connector](https://glama.ai/mcp/connectors/ai.elicitly/pro/badges/score.svg)](https://glama.ai/mcp/connectors/ai.elicitly/pro)
  🔐 - Human-in-the-loop confirmations, forms and durable approvals that reach any device, with an audit trail.
- [Formstep](https://formstep.io) `https://api.formstep.io/api/mcp`
  [![Formstep MCP connector](https://glama.ai/mcp/connectors/io.github.formstep/formstep-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.formstep/formstep-mcp)
  🔐 - Collect verified customer information with one request: the customer confirms or corrects a branded, prefilled form.
- [Frantic](https://gofrantic.com) `https://api.gofrantic.com/mcp`
  [![Frantic MCP connector](https://glama.ai/mcp/connectors/com.gofrantic/frantic/badges/score.svg)](https://glama.ai/mcp/connectors/com.gofrantic/frantic)
  🔓 - Find funded agent bounties, inspect standing and receipts; claiming and payment follow account and review rules.
- [GoodSign](https://goodsign.io/mcp-server) `https://goodsign.io/mcp`
  [![GoodSign MCP connector](https://glama.ai/mcp/connectors/io.goodsign/goodsign/badges/score.svg)](https://glama.ai/mcp/connectors/io.goodsign/goodsign)
  🔓 - Send documents for signature, remind signers and download signed PDFs with an audit trail; tools need a key.
- [Guizzo](https://guizzo.ai/agents) `https://mcp.guizzo.ai/mcp`
  [![Guizzo MCP connector](https://glama.ai/mcp/connectors/ai.guizzo/guizzo/badges/score.svg)](https://glama.ai/mcp/connectors/ai.guizzo/guizzo)
  🔐 - Ask people questions and get approvals by email from any agent, and keep team decisions every agent can recall.
- [handoff](https://handoff.lol) `https://handoff.lol/mcp`
  [![handoff MCP connector](https://glama.ai/mcp/connectors/io.github.34r7h/handoff/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.34r7h/handoff)
  🔓 - Coordination server for agent swarms: find funded work, form teams, run tasks and get paid on verified completion.
- [Hands for Agents](https://handsforagents.com) `https://mcp.handsforagents.com/mcp`
  [![Hands for Agents MCP connector](https://glama.ai/mcp/connectors/com.handsforagents/hands-for-agents/badges/score.svg)](https://glama.ai/mcp/connectors/com.handsforagents/hands-for-agents)
  🔓 - Order physical engineering work from a Czech company: CAD, 3D printing, fabrication and shipping.
- [humancollab](https://humancollab.si) `https://humancollab.si/mcp`
  [![humancollab MCP connector](https://glama.ai/mcp/connectors/si.humancollab/humancollab/badges/score.svg)](https://glama.ai/mcp/connectors/si.humancollab/humancollab)
  🔓 - Where AI agents reach humans: signed jobs, CC0 answers from people, and signed business data in a public log.
- [Inkfree](https://inkfree.app) `https://api.inkfree.app/core/inkfree/mcp/`
  [![Inkfree MCP connector](https://glama.ai/mcp/connectors/app.inkfree/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.inkfree/mcp)
  🔐 - Send documents for e-signature, track and remind signers, void envelopes, and download signed copies with audit trails.
- [Manjangilchi](https://manjangilchi.com) `https://manjangilchi.com/mcp`
  [![Manjangilchi MCP connector](https://glama.ai/mcp/connectors/com.manjangilchi/manjangilchi/badges/score.svg)](https://glama.ai/mcp/connectors/com.manjangilchi/manjangilchi)
  🔓 - AI agents from different labs debate a question as citizens and publish one agreed answer.
- [Model Moot](https://modelmoot.com) `https://modelmoot.com/mcp`
  [![Model Moot MCP connector](https://glama.ai/mcp/connectors/com.modelmoot/model-moot/badges/score.svg)](https://glama.ai/mcp/connectors/com.modelmoot/model-moot)
  🔓 - Reads problems AI agents posted, the answers they proposed and how other agents verified them.
- [MusedIn](https://musedin.com) `https://musedin.com/mcp`
  [![MusedIn MCP connector](https://glama.ai/mcp/connectors/com.musedin/musedin/badges/score.svg)](https://glama.ai/mcp/connectors/com.musedin/musedin)
  🔓 - Read a work network for AI agents: open jobs, agent profiles, hires and the feed.
- [Needhave](https://needhave.io) `https://needhave.io/mcp`
  [![Needhave MCP connector](https://glama.ai/mcp/connectors/io.github.PrivateAISystems/needhave/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.PrivateAISystems/needhave)
  🔓 - Public list of needs and haves: agents post notes, read the list and reply privately once the poster accepts.
- [Offhand](https://offhandapp.com/docs) `https://offhandapp.com/mcp`
  [![Offhand MCP connector](https://glama.ai/mcp/connectors/com.offhandapp/offhand/badges/score.svg)](https://glama.ai/mcp/connectors/com.offhandapp/offhand)
  🔐 - A to-do list your agents share: hand a task to Claude, ChatGPT, Grok Bot or Muse, and get the work back.
- [Pairoa](https://pairoa.com) `https://mcp.pairoa.com`
  [![Pairoa MCP connector](https://glama.ai/mcp/connectors/com.pairoa.mcp/pairoa/badges/score.svg)](https://glama.ai/mcp/connectors/com.pairoa.mcp/pairoa)
  🔐 - Publish needs and offers and get private matches, with contact details revealed only on a match.
- [Parlor.sh](https://parlor.sh) `https://parlor.sh/mcp`
  [![Parlor.sh MCP connector](https://glama.ai/mcp/connectors/sh.parlor/parlor/badges/score.svg)](https://glama.ai/mcp/connectors/sh.parlor/parlor)
  🔓 - Rooms where AI agents of any vendor talk to each other; a room is a URL, readable by anyone with the link.
- [PazAIr](https://pazair.kulalabs.ch) `https://pazair.kulalabs.ch/mcp`
  [![PazAIr MCP connector](https://glama.ai/mcp/connectors/ch.kulalabs.pazair/pazair/badges/score.svg)](https://glama.ai/mcp/connectors/ch.kulalabs.pazair/pazair)
  🔓 - Marketplace where AI agents buy from and sell to other agents: pay on delivery via Stripe, signed receipts.
- [Peerlace](https://peerlace.com) `https://peerlace.com/mcp`
  [![Peerlace MCP connector – tool definition quality and endpoint health on Glama](https://glama.ai/mcp/connectors/com.peerlace/peerlace/badges/score.svg)](https://glama.ai/mcp/connectors/com.peerlace/peerlace)
  🔓 - Where AI agents meet: discover, match and get introduced to other agents, with human consent before any intro.
- [Pushary](https://pushary.com) `https://pushary.com/api/mcp/mcp`
  [![Pushary MCP connector](https://glama.ai/mcp/connectors/com.pushary/pushary/badges/score.svg)](https://glama.ai/mcp/connectors/com.pushary/pushary)
  🔓 🔑 - Send phone notifications and ask for approvals, choices or text answers.
- [ScopeLinq](https://scopelinq.com/agents) `https://mcp.scopelinq.com/mcp`
  [![ScopeLinq MCP connector](https://glama.ai/mcp/connectors/com.scopelinq/scopelinq/badges/score.svg)](https://glama.ai/mcp/connectors/com.scopelinq/scopelinq)
  🔓 - Reads what was agreed into traced lines, then answers whether a new request is included or extra work.
- [Signvoy](https://www.signvoy.com/developers/mcp) `https://api.signvoy.com/mcp`
  [![Signvoy MCP connector](https://glama.ai/mcp/connectors/com.signvoy/signvoy/badges/score.svg)](https://glama.ai/mcp/connectors/com.signvoy/signvoy)
  🔐 - Send documents for e-signature from templates, remind signers, and download signed PDFs with audit trails.
- [Sphere Marketplace](https://starsphera.com/marketplace/) `https://starsphera.com/mcp`
  [![Sphere Marketplace MCP connector](https://glama.ai/mcp/connectors/io.github.dtajitdinov-aris/sphere-marketplace/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.dtajitdinov-aris/sphere-marketplace)
  🔓 - Agent-to-agent marketplace: list, buy and sell work by contract with escrow and signed receipts (pay-per-call paused).
- [STEMPA](https://stempa.kragos.app) `https://stempa.kragos.app/mcp`
  [![STEMPA MCP connector](https://glama.ai/mcp/connectors/app.kragos/stempa/badges/score.svg)](https://glama.ai/mcp/connectors/app.kragos/stempa)
  🔐 - Asks only the gaps, then seals your answers into one brief every AI reads the same way, with a signed receipt.
- [Syncbook](https://syncbook.org) `https://syncbook.org/mcp/public`
  [![Syncbook MCP connector](https://glama.ai/mcp/connectors/io.github.theguysaccount/syncbook/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.theguysaccount/syncbook)
  🔓 - Find collaborators by shared offers and needs, and prepare a profile for human review.
- [Taasky](https://taasky.ai) `https://mcp.taasky.ai/mcp`
  [![Taasky MCP connector](https://glama.ai/mcp/connectors/ai.taasky/taasky/badges/score.svg)](https://glama.ai/mcp/connectors/ai.taasky/taasky)
  🔓 - Your agent settles a time or a detail with anyone, agent or browser, and both people confirm the terms.
- [Taifoon](https://www.taifoon.io/docs/coordination-api) `https://coord.taifoon.dev/mcp`
  [![Taifoon MCP connector](https://glama.ai/mcp/connectors/io.taifoon/coordination-layer/badges/score.svg)](https://glama.ai/mcp/connectors/io.taifoon/coordination-layer)
  🔓 - Post a need in plain words; the layer matches an agent, grades the delivery by code and settles; also chain proofs.
- [Torquantis](https://torquantis.com) `https://torquantis.com/mcp`
  [![Torquantis MCP connector](https://glama.ai/mcp/connectors/com.torquantis/exchange/badges/score.svg)](https://glama.ai/mcp/connectors/com.torquantis/exchange)
  🔓 - Exchange where AI agents buy and sell work from each other in USDC on Base: order book, escrow, AI judges.
- [Tribeunal](https://tribeunal.com/mcp) `https://mcp.tribeunal.com/mcp`
  [![Tribeunal MCP connector](https://glama.ai/mcp/connectors/com.tribeunal.mcp/tribeunal/badges/score.svg)](https://glama.ai/mcp/connectors/com.tribeunal.mcp/tribeunal)
  🔐 - Put a question to a jury of humans and AI agents, then act on the verdict.
- [Unl, your why agent](https://unlimitless.ai) `https://api.unlimitless.ai/mcp`
  [![Unl, your why agent MCP connector](https://glama.ai/mcp/connectors/ai.unlimitless/unl/badges/score.svg)](https://glama.ai/mcp/connectors/ai.unlimitless/unl)
  🔐 - Your agents work from what you decided, and why.
- [Verifi](https://verifi.cloud) `https://verifi.cloud/mcp`
  [![Verifi MCP connector](https://glama.ai/mcp/connectors/cloud.verifi/human-verification/badges/score.svg)](https://glama.ai/mcp/connectors/cloud.verifi/human-verification)
  🔓 - Send a claim to a real human who accepts, rejects or corrects it; paid per request via x402 on Base.
- [Whichli](https://whichli.com/ai) `https://whichli.com/api/mcp`
  [![Whichli MCP connector](https://glama.ai/mcp/connectors/com.whichli/photo-polls/badges/score.svg)](https://glama.ai/mcp/connectors/com.whichli/photo-polls)
  🔓 - Create head-to-head photo polls from image or product URLs and read ranked voting results.

### 🌾 <a name="agriculture"></a>Agriculture

- [BestRobotMower](https://bestrobotmower.co/dataset) `https://bestrobotmower.co/api/mcp`
  [![BestRobotMower MCP connector](https://glama.ai/mcp/connectors/io.github.yumaheymans/bestrobotmower-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.yumaheymans/bestrobotmower-mcp)
  🔓 - Specs, prices, scores and yard-size picks for 23 robot lawn mowers from an open CC BY 4.0 dataset.
- [BNM Data Shop](https://ticks.bnm.farm/) `https://ticks.bnm.farm/mcp`
  [![BNM Data Shop MCP connector](https://glama.ai/mcp/connectors/io.github.bnmbnmai/bnm-data-shop/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bnmbnmai/bnm-data-shop)
  🔓 - Official public-data caches sold per pull in USDC on Base via x402.
- [Consignatarias](https://www.consignatarias.com.ar) `https://www.consignatarias.com.ar/api/mcp`
  [![Consignatarias MCP connector](https://glama.ai/mcp/connectors/ar.com.consignatarias/cattle-market/badges/score.svg)](https://glama.ai/mcp/connectors/ar.com.consignatarias/cattle-market)
  🔓 - Argentine cattle market: daily steer index since 2015, category prices, land values and SENASA health rules.
- [upCampo](https://suporte.upcampo.com.br/mcp/) `https://mcp.upcampo.com.br/mcp`
  [![upCampo MCP connector](https://glama.ai/mcp/connectors/br.com.upcampo/upi/badges/score.svg)](https://glama.ai/mcp/connectors/br.com.upcampo/upi)
  🔐 - Farm management for Brazil: pest scouting, work orders, inventory, fleet and cost per field.

### 🎨 <a name="art--design"></a>Art & Design

- [All SVG Icons](https://allsvgicons.com/mcp/) `https://i.allsvgicons.com/mcp`
  [![All SVG Icons MCP connector](https://glama.ai/mcp/connectors/com.allsvgicons/icons/badges/score.svg)](https://glama.ai/mcp/connectors/com.allsvgicons/icons)
  🔐 - Search and fetch SVG icons and brand logos from 200+ open-source icon sets as ready-to-use SVG markup.
- [BeautySpark](https://beautyspark.me) `https://mcp.beautyspark.me/mcp`
  [![BeautySpark MCP connector](https://glama.ai/mcp/connectors/me.beautyspark.mcp/beauty-spark-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/me.beautyspark.mcp/beauty-spark-mcp)
  🔓 - Makeup and colour-season guidance sourced from BeautySpark's articles, plus saved looks for signed-in users.
- [Better Design](https://better-design.com) `https://better-design.com/api/mcp`
  [![Better Design MCP connector](https://glama.ai/mcp/connectors/io.github.marvkr/better-design/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.marvkr/better-design)
  🔐 - Design systems, UI and UX principles, icons and UI review for AI coding agents.
- [betterimage.io](https://betterimage.io/mcp) `https://betterimage.io/mcp`
  [![betterimage.io MCP connector](https://glama.ai/mcp/connectors/io.betterimage/betterimage/badges/score.svg)](https://glama.ai/mcp/connectors/io.betterimage/betterimage)
  🔓 - Social cards and OG images from designed templates or any page URL, plus link-preview checks.
- [Canva](https://canva.com) `https://mcp.canva.com/mcp`
  [![Canva MCP connector](https://glama.ai/mcp/connectors/com.canva.mcp/canva/badges/score.svg)](https://glama.ai/mcp/connectors/com.canva.mcp/canva)
  🔐 - Create, edit, and export Canva designs.
- [CleanVector](https://cleanvector.ai/mcp) `https://cleanvector.ai/api/mcp`
  [![CleanVector MCP connector](https://glama.ai/mcp/connectors/ai.cleanvector/cleanvector/badges/score.svg)](https://glama.ai/mcp/connectors/ai.cleanvector/cleanvector)
  🔓 - Generate SVG artwork and vectorize images; tools need a key.
- [CropDen](https://cropden.com) `https://cropden.com/mcp`
  [![CropDen MCP connector](https://glama.ai/mcp/connectors/io.github.geektao1024/cropden/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.geektao1024/cropden)
  🔓 - Image sizes and safe zones for 14 social platforms; AI extend, upscale and background removal need a key.
- [Delve to Life](https://delvetolife.com/ai/) `https://mcp.delvetolife.com/mcp`
  [![Delve to Life MCP connector](https://glama.ai/mcp/connectors/com.delvetolife.mcp/delve-to-life/badges/score.svg)](https://glama.ai/mcp/connectors/com.delvetolife.mcp/delve-to-life)
  🔓 - Dress codes explained, outfit formulas by occasion and weather, and clothing colour combinations.
- [Design Check](https://designcheck.allthepossibles.com) `https://designcheck.allthepossibles.com/mcp`
  [![Design Check MCP connector](https://glama.ai/mcp/connectors/com.allthepossibles/designcheck/badges/score.svg)](https://glama.ai/mcp/connectors/com.allthepossibles/designcheck)
  🔓 - Tells you whether a page reads as AI-generated and why, from the rendered page.
- [Designesy](https://www.designesy.org) `https://www.designesy.org/api/mcp`
  [![Designesy MCP connector](https://glama.ai/mcp/connectors/io.github.LE-VAI/designesy-org/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.LE-VAI/designesy-org)
  🔓 - Scores any live URL against a 42-check design contract, validates DTCG tokens, and diffs two design systems.
- [Director's Lookbook](https://directorslookbook.app) `https://lookbook-mcp.riverroadlabs.workers.dev/mcp`
  [![Director's Lookbook MCP connector](https://glama.ai/mcp/connectors/io.github.qxxx5vyd77-byte/directors-lookbook/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.qxxx5vyd77-byte/directors-lookbook)
  🔓 - 670+ named visual and music styles: deal a look for a feeling, get paste-ready image, video and Suno prompts.
- [Figma](https://figma.com) `https://mcp.figma.com/mcp`
  [![Figma MCP connector](https://glama.ai/mcp/connectors/com.figma.mcp/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.figma.mcp/mcp)
  🔐 - Read Figma files and turn frames and components into code.
- [Framevine](https://framevine.com/integrations) `https://mcp.framevine.com/mcp`
  [![Framevine MCP connector](https://glama.ai/mcp/connectors/com.framevine/framevine/badges/score.svg)](https://glama.ai/mcp/connectors/com.framevine/framevine)
  🔐 - Generate, extend and edit AI videos and images, then assemble them on a timeline.
- [Gradients Studio](https://www.gradients.studio/mcp) `https://www.gradients.studio/mcp`
  [![Gradients Studio MCP connector](https://glama.ai/mcp/connectors/studio.gradients/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/studio.gradients/mcp)
  🔓 - Renders gradient backgrounds with real grain, pixel and dither finishes; free previews, a key only for sized exports.
- [Illos](https://illos.dev) `https://illos.dev/mcp`
  [![Illos MCP connector](https://glama.ai/mcp/connectors/dev.illos/illos/badges/score.svg)](https://glama.ai/mcp/connectors/dev.illos/illos)
  🔓 - Find animated SVG illustrations by topic in four themes, light and dark, and get the SVG or install steps.
- [ImgVX AI](https://imgvx.com/mcp-server/) `https://imgvx.com/mcp`
  [![ImgVX AI MCP connector](https://glama.ai/mcp/connectors/com.imgvx/imgvx-ai/badges/score.svg)](https://glama.ai/mcp/connectors/com.imgvx/imgvx-ai)
  🔓 - Find the right free in-browser image tool for a job (background removal, upscaling, compression) in 40 languages.
- [InkRoom](https://inkroom.ai/en/solutions/mcp-server) `https://mcp.inkroom.ai`
  [![InkRoom MCP connector](https://glama.ai/mcp/connectors/io.github.InkRoomAI/inkroom/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.InkRoomAI/inkroom)
  🔓 - Public model prices and prompt search; image generation and editing require your own InkRoom account and MCP Token.
- [Jinero](https://jinero.online/dev/mcp) `https://jinero.online/mcp`
  [![Jinero MCP connector](https://glama.ai/mcp/connectors/online.jinero/jinero/badges/score.svg)](https://glama.ai/mcp/connectors/online.jinero/jinero)
  🔓 - Fonts, font recognition from images, palettes, color math and contrast, code and SVG tools for design work.
- [Kodza](https://kodza.dev/docs/) `https://kodza.dev/api/mcp`
  [![Kodza MCP connector](https://glama.ai/mcp/connectors/dev.kodza/kodza/badges/score.svg)](https://glama.ai/mcp/connectors/dev.kodza/kodza)
  🔓 - Search free UI components in plain HTML, CSS and vanilla JS, and get their exact code, ready to paste.
- [Logoforge](https://logoforge.terravidhal.me) `https://logoforge.terravidhal.me/mcp`
  [![Logoforge MCP connector](https://glama.ai/mcp/connectors/me.terravidhal.logoforge/logoforge/badges/score.svg)](https://glama.ai/mcp/connectors/me.terravidhal.logoforge/logoforge)
  🔓 - Search 900+ brand logos and get SVG files, typed React components or a logo cloud section.
- [Luw.ai](https://luw.ai) `https://mcp.luw.ai/mcp`
  [![Luw.ai MCP connector](https://glama.ai/mcp/connectors/ai.luw/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.luw/mcp)
  🔐 - Redesign rooms, exteriors and gardens from photos, render sketches, edit images, and create videos and 3D models.
- [Made Good Designs](https://madegooddesigns.com/inspiration/) `https://madegooddesigns.com/inspiration/mcp`
  🔓 - Search a curated gallery of typography and brand-design inspiration with colour palettes.
- [MagicScreenshots](https://www.magicscreenshots.com/agents) `https://www.magicscreenshots.com/api/mcp`
  [![MagicScreenshots MCP connector](https://glama.ai/mcp/connectors/io.github.Humanleap/magicscreenshots-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Humanleap/magicscreenshots-mcp)
  🔓 - Search App Store screenshots and preview references; generation and Pro tools require a user key.
- [MiroMiro](https://miromiro.app/api/mcp) `https://miromiro.app/mcp`
  [![MiroMiro MCP connector](https://glama.ai/mcp/connectors/app.miromiro/miromiro/badges/score.svg)](https://glama.ai/mcp/connectors/app.miromiro/miromiro)
  🔐 - Rebuild any website section as Elementor, Shopify Liquid or Tailwind/React code, plus brand tokens and assets.
- [Mobbin](https://mobbin.com/mcp) `https://api.mobbin.com/mcp`
  [![Mobbin MCP connector](https://glama.ai/mcp/connectors/com.mobbin/mobbin/badges/score.svg)](https://glama.ai/mcp/connectors/com.mobbin/mobbin)
  🔐 - Search real app UI screens, multi-step user flows, and website sections for design references.
- [Moodmark](https://moodmark.design/agents) `https://app.moodmark.design/mcp`
  [![Moodmark MCP connector](https://glama.ai/mcp/connectors/io.github.janvodvarka/moodmark/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.janvodvarka/moodmark)
  🔓 - Save websites with screenshots, palettes and fonts into a design reference library, then search and share it.
- [Muro Paint Colors](https://usemuro.com/en/developers) `https://mcp.usemuro.com/mcp`
  [![Muro Paint Colors MCP connector](https://glama.ai/mcp/connectors/com.usemuro/paint-colors/badges/score.svg)](https://glama.ai/mcp/connectors/com.usemuro/paint-colors)
  🔓 - Search 51,000 real paint colors from 35 brands, look up codes and find cross-brand equivalents.
- [Nano Studio Pro](https://nanostudiopro.com) `https://nanostudiopro.com/api/mcp`
  [![Nano Studio Pro MCP connector](https://glama.ai/mcp/connectors/com.nanostudiopro/studiopro/badges/score.svg)](https://glama.ai/mcp/connectors/com.nanostudiopro/studiopro)
  🔐 - Find any photo or video you own by what is inside it; generate, restyle, cut out, and build sprite sheets.
- [Numonic](https://www.numonic.ai/docs/api/mcp) `https://www.numonic.ai/mcp`
  [![Numonic MCP connector](https://glama.ai/mcp/connectors/ai.numonic/numonic/badges/score.svg)](https://glama.ai/mcp/connectors/ai.numonic/numonic)
  🔐 - Search, organize, and publish AI-generated images and video with provenance and lineage.
- [Omakase Icons](https://icons.oma-kase.com/) `https://icons.oma-kase.com/mcp`
  [![Omakase Icons MCP connector – tool definition quality and endpoint health on Glama](https://glama.ai/mcp/connectors/com.oma-kase/icons/badges/score.svg)](https://glama.ai/mcp/connectors/com.oma-kase/icons)
  🔓 - Search 152 MIT SVG icons and paste React, Vue, Svelte or SVG code in any style.
- [OODS Foundry](https://oods-foundry.com) `https://oods-foundry.com/mcp`
  [![OODS Foundry MCP connector](https://glama.ai/mcp/connectors/com.oods-foundry/foundry/badges/score.svg)](https://glama.ai/mcp/connectors/com.oods-foundry/foundry)
  🔓 - Read a design system's component catalog and registry, and draw and certify charts from your own data.
- [Overflow Design](https://www.overflow.design/mcp/?utm_source=awesome-remote&utm_medium=mcp-directory) `https://www.overflow.design/api/mcp/`
  [![Overflow Design MCP connector](https://glama.ai/mcp/connectors/design.overflow/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/design.overflow/mcp)
  🔓 - Hand-drawn icons, illustrations and isometric drawings, searched by meaning and fetched as SVG, JSX or a file.
- [OwlCAD](https://owlcad.com/mcp-server) `https://mcp.owlcad.com`
  [![OwlCAD MCP connector](https://glama.ai/mcp/connectors/com.owlcad.mcp/owl-cad/badges/score.svg)](https://glama.ai/mcp/connectors/com.owlcad.mcp/owl-cad)
  🔐 - Build editable parametric 3D parts, check printability, and export STL, 3MF or STEP.
- [PaintColorHQ](https://www.paintcolorhq.com/api) `https://www.paintcolorhq.com/api/mcp`
  [![PaintColorHQ MCP connector](https://glama.ai/mcp/connectors/io.github.pcameron80/paintcolorhq-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.pcameron80/paintcolorhq-mcp)
  🔓 - Find a paint color by name or number and get its closest real equivalents across 13 brands (CIEDE2000).
- [PaletteGet](https://paletteget.com/) `https://paletteget-mcp.y7206062.workers.dev/mcp`
  [![PaletteGet MCP connector](https://glama.ai/mcp/connectors/io.github.yang7206/paletteget/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.yang7206/paletteget)
  🔓 - Curated app, web and mini program palettes with measured WCAG contrast and CSS variables.
- [PartForge](https://www.partforge.ai) `https://www.partforge.ai/mcp`
  [![PartForge MCP connector](https://glama.ai/mcp/connectors/ai.partforge/partforge/badges/score.svg)](https://glama.ai/mcp/connectors/ai.partforge/partforge)
  🔐 - Create and edit parametric 3D-printable parts as code, render previews, and publish them to a public library.
- [Pastefield](https://pastefield.com/mcp) `https://pastefield.com/api/mcp`
  [![Pastefield MCP connector](https://glama.ai/mcp/connectors/com.pastefield/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.pastefield/mcp)
  🔐 - Give Claude a whiteboard: place notes, links, images and diagrams on a board you both edit.
- [Photo Mosaic & AI Collage Maker - Collager.ai](https://collager.ai/developers/) `https://collager.ai/mcp`
  [![Photo Mosaic & AI Collage Maker - Collager.ai MCP connector](https://glama.ai/mcp/connectors/ai.collager/ai-collage-maker/badges/score.svg)](https://glama.ai/mcp/connectors/ai.collager/ai-collage-maker)
  🔓 - Turn your own photos into a photo mosaic or a heart, number or word photo collage with a preview in seconds.
- [Pixohub](https://pixohub.com/developers) `https://mcp.pixohub.com/mcp`
  [![Pixohub MCP connector](https://glama.ai/mcp/connectors/io.github.MonsterInstitute/pixohub/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.MonsterInstitute/pixohub)
  🔓 - Platform image sizes and upload limits from official sources, image format advice and measured compression tests.
- [ProfessionalHeadshot.io](https://professionalheadshot.io) `https://professionalheadshot.io/api/mcp`
  [![ProfessionalHeadshot.io MCP connector](https://glama.ai/mcp/connectors/io.professionalheadshot/professionalheadshot/badges/score.svg)](https://glama.ai/mcp/connectors/io.professionalheadshot/professionalheadshot)
  🔓 - Official LinkedIn, Slack and GitHub profile photo specs with sources, headshot style guides and a free headshot audit.
- [QR Branding](https://qr-branding.com) `https://qr-branding.com/mcp`
  [![QR Branding MCP connector](https://glama.ai/mcp/connectors/io.github.quartzondev/qr-branding/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.quartzondev/qr-branding)
  🔓 - Branded QR codes (manual, AI-styled, 118 templates, Wi-Fi/vCard/geo), each decoded server-side before it is returned.
- [QRdx](https://qrdx.dev/mcp) `https://mcp.qrdx.dev/mcp`
  [![QRdx MCP connector](https://glama.ai/mcp/connectors/dev.qrdx/qrdx/badges/score.svg)](https://glama.ai/mcp/connectors/dev.qrdx/qrdx)
  🔓 - Design styled QR codes and barcodes, check that they scan, and get SVG and PNG back.
- [QRX](https://qrx.codes/developers/mcp) `https://qrx.codes/mcp`
  [![QRX MCP connector](https://glama.ai/mcp/connectors/codes.qrx/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/codes.qrx/mcp)
  🔐 - Create artistic, print-ready QR codes from a prompt and a link, each verified to scan; sign in with a free account.
- [Roomvana](https://roomvana.ai) `https://api.roomvana.co/mcp`
  [![Roomvana MCP connector](https://glama.ai/mcp/connectors/io.github.TJLDC/roomvana-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.TJLDC/roomvana-mcp)
  🔓 - Browse room types and design styles, then get a Roomvana studio link with those options prefilled.
- [Sceneplane](https://sceneplane.online) `https://mcp.sceneplane.online/v1`
  [![Sceneplane MCP connector](https://glama.ai/mcp/connectors/online.sceneplane/sceneplane/badges/score.svg)](https://glama.ai/mcp/connectors/online.sceneplane/sceneplane)
  🔐 - Build, inspect, render and animate Blender scenes in the cloud; export editable .blend, GLB or STL files.
- [ScoreLook](https://scorelook.fr/scorelook-mcp) `https://scorelook.fr/mcp`
  [![ScoreLook MCP connector](https://glama.ai/mcp/connectors/fr.scorelook/capucine/badges/score.svg)](https://glama.ai/mcp/connectors/fr.scorelook/capucine)
  🔓 - French AI stylist: sourced outfit answers, piece hubs, shopping criteria and weather looks.
- [Shapeweld](https://shapeweld.com/developers) `https://shapeweld.com/mcp`
  [![Shapeweld MCP connector](https://glama.ai/mcp/connectors/io.github.shapeweld/shapeweld/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.shapeweld/shapeweld)
  🔓 - Convert 3D files between FBX, GLB, OBJ, STL, PLY, DAE, USDZ and 3MF and get a download and viewer link.
- [Showoff](https://showoff.dev) `https://showoff.dev/mcp`
  [![Showoff MCP connector](https://glama.ai/mcp/connectors/dev.showoff/showoff/badges/score.svg)](https://glama.ai/mcp/connectors/dev.showoff/showoff)
  🔐 - Art-direct 3D device mockups, App Store screenshot sets and launch videos for your app.
- [Soleil Clusters](https://clusters.soleilpictures.com) `https://clusters.soleilpictures.com/api/v1/mcp`
  [![Soleil Clusters MCP connector](https://glama.ai/mcp/connectors/com.soleilpictures/clusters/badges/score.svg)](https://glama.ai/mcp/connectors/com.soleilpictures/clusters)
  🔐 - Make and read visual mood boards: import pictures from links, add notes, palettes and docs, and draw the board inline.
- [SpriteForge](https://www.spriteforge.tech) `https://www.spriteforge.tech/mcp`
  [![SpriteForge MCP connector](https://glama.ai/mcp/connectors/tech.spriteforge/sprite-forge/badges/score.svg)](https://glama.ai/mcp/connectors/tech.spriteforge/sprite-forge)
  🔐 - Generate pixel-art sprites, animations and 16-tile Wang tilesets on a fixed grid, saved to your SpriteForge library.
- [SpriteForge Editor](https://www.spriteforge.tech/claude) `https://www.spriteforge.tech/mcp/editor`
  [![SpriteForge Editor MCP connector](https://glama.ai/mcp/connectors/tech.spriteforge/sprite-forge-editor/badges/score.svg)](https://glama.ai/mcp/connectors/tech.spriteforge/sprite-forge-editor)
  🔓 - Free pixel and tileset editor: open sprites, animations and Wang tilesets in an editor and get the edited PNG back.
- [svgapp.ai](https://svgapp.ai) `https://web.svgapp.ai/mcp`
  [![svgapp.ai MCP connector](https://glama.ai/mcp/connectors/io.github.Xyz3R/svgapp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Xyz3R/svgapp)
  🔐 - Generate brand mascots with consistent poses and animations, exported as SVG or transparent PNG.
- [Tastepix](https://tastepix.com/?ref=github-awesome-remote) `https://mcp.tastepix.com/mcp`
  [![Tastepix MCP connector](https://glama.ai/mcp/connectors/io.github.paablobello/tastepix/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.paablobello/tastepix)
  🔐 - Generate and edit images with 12 models (Nano Banana, GPT Image, FLUX…) from chat; pay per image, no API keys.
- [Tectova Runway Records](https://tectova.com/tools/mcp) `https://tectova.com/mcp`
  [![Tectova Runway Records MCP connector](https://glama.ai/mcp/connectors/com.tectova/runway-records/badges/score.svg)](https://glama.ai/mcp/connectors/com.tectova/runway-records)
  🔓 - Fashion runway records: models' careers, show casts, house histories and models by country per fashion week.
- [Tesla Wrap Design](https://tesla-wrap.design) `https://tesla-wrap.design/mcp`
  [![Tesla Wrap Design MCP connector](https://glama.ai/mcp/connectors/io.github.GhostCatcg/tesla-wrap-design/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.GhostCatcg/tesla-wrap-design)
  🔐 - Design Tesla Paint Shop wraps from an AI assistant: gallery search, prompts, 3D preview, and PNG export.
- [Unraster](https://unraster.ai) `https://unraster.ai/mcp`
  [![Unraster MCP connector](https://glama.ai/mcp/connectors/ai.unraster/convert/badges/score.svg)](https://glama.ai/mcp/connectors/ai.unraster/convert)
  🔓 - Turn slide images, charts and screenshots into editable PowerPoint (PPTX) or SVG; tools need a key.
- [UXKIN](https://uxkin.com) `https://uxkin.com/mcp`
  [![UXKIN MCP connector](https://glama.ai/mcp/connectors/io.github.uxkin/uxkin/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.uxkin/uxkin)
  🔐 - Real iOS app screens, user journeys and website design systems for AI coding agents.
- [Verdict](https://verdict.allthepossibles.com) `https://verdict.allthepossibles.com/mcp`
  [![Verdict MCP connector](https://glama.ai/mcp/connectors/com.allthepossibles/verdict/badges/score.svg)](https://glama.ai/mcp/connectors/com.allthepossibles/verdict)
  🔓 - Six design-review tools that run before a design ships.
- [Vibesignet](https://vibesignet.com) `https://vibesignet.com/api/mcp`
  [![Vibesignet MCP connector](https://glama.ai/mcp/connectors/com.vibesignet/templates/badges/score.svg)](https://glama.ai/mcp/connectors/com.vibesignet/templates)
  🔓 - Search website templates and components, and fetch their build prompts for AI coding agents; full prompts need a key.
- [Whimsical](https://whimsical.com/mcp) `https://mcp.whimsical.com/mcp`
  [![Whimsical MCP connector](https://glama.ai/mcp/connectors/com.whimsical/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.whimsical/mcp)
  🔐 - Turn prompts into editable flowcharts, mind maps, sequence diagrams and wireframes, and search your Whimsical workspace.
- [WikiBrand](https://wikibrand.org) `https://wikibrand.org/api/mcp`
  [![WikiBrand MCP connector](https://glama.ai/mcp/connectors/org.wikibrand/wikibrand/badges/score.svg)](https://glama.ai/mcp/connectors/org.wikibrand/wikibrand)
  🔓 - Logo, colors, typefaces, tone of voice and CSS theme of any brand, read from its own website.
  
### 🌐 <a name="browser-automation"></a>Browser Automation

- [Allscreenshots](https://allscreenshots.com) `https://mcp.allscreenshots.com/mcp/v1`
  [![Allscreenshots MCP connector](https://glama.ai/mcp/connectors/io.github.allscreenshots/allscreenshots/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.allscreenshots/allscreenshots)
  🔐 - Capture website screenshots, run bulk captures, and manage screenshot schedules and history.

- [APEX](https://apexfaucet.xyz/connect/) `https://apexfaucet.xyz/api/mcp`
  [![APEX MCP connector](https://glama.ai/mcp/connectors/xyz.apexfaucet/apex-x1/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.apexfaucet/apex-x1)
  🔓 - Render a URL, or up to 25 pages of a site, to clean text in headless Chrome; $1 per call via x402.

- [Bowmark](https://bowmark.ai) `https://api.bowmark.ai/mcp`
  [![Bowmark MCP connector](https://glama.ai/mcp/connectors/ai.bowmark/bowmark/badges/score.svg)](https://glama.ai/mcp/connectors/ai.bowmark/bowmark)
  🔓 - Typed functions an agent calls to search, price-check and book on live websites, no browser needed.

- [Browser Forest](https://browserforest.com) `https://browserforest.com/api/mcp/bf`
  [![Browser Forest MCP connector](https://glama.ai/mcp/connectors/com.browserforest/browser-forest/badges/score.svg)](https://glama.ai/mcp/connectors/com.browserforest/browser-forest)
  🔑 - Undetectable cloud browser sessions; navigate, extract, click, and solve captchas on blocked sites.

- [Cloudflare Browser Rendering](https://developers.cloudflare.com/browser-rendering/) `https://browser.mcp.cloudflare.com/mcp`
  🔐 - Render pages, capture screenshots, and scrape HTML from a URL.

- [Clearcrawl](https://agentreader.onrender.com/llms.txt) `https://agentreader.onrender.com/clearcrawl/mcp`
  [![Clearcrawl MCP connector](https://glama.ai/mcp/connectors/io.github.clearcrawl/clearcrawl/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.clearcrawl/clearcrawl)
  🔓 - URL→clean markdown/JSON plus PDF/XLSX/CSV/DOCX→text; 100 free calls/day, then prepaid credits (optional API key).
- [CurlShot](https://curlshot.com/docs?utm_source=awesome-mcp&utm_medium=listing&utm_campaign=dist-q4) `https://curlshot.com/api/mcp`
  [![CurlShot MCP connector](https://glama.ai/mcp/connectors/io.github.SergiuPogor/curlshot/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.SergiuPogor/curlshot)
  🔓 - Screenshot any URL to PNG, JPEG, WebP, PDF or scrolling video, full page or dark mode; needs a free API key.

- [Framejet](https://framejet.dev) `https://framejet.dev/mcp`
  [![Framejet MCP connector](https://glama.ai/mcp/connectors/dev.framejet/screenshot/badges/score.svg)](https://glama.ai/mcp/connectors/dev.framejet/screenshot)
  🔓 - Screenshot any URL to PNG or JPEG with cookie banners and chat widgets removed; needs a free API key.

- [localscreenshot](https://localscreenshot.com) `https://api.localscreenshot.com/mcp/free`
  [![localscreenshot MCP connector](https://glama.ai/mcp/connectors/com.localscreenshot/localscreenshot/badges/score.svg)](https://glama.ai/mcp/connectors/com.localscreenshot/localscreenshot)
  🔓 - Screenshot any public page as PNG, JPEG or PDF, from 227 countries, with cookie banners and ads hidden.

- [Monito](https://www.monito.dev/docs/mcp) `https://www.monito.dev/api/mcp`
  [![Monito MCP connector](https://glama.ai/mcp/connectors/dev.monito/monito/badges/score.svg)](https://glama.ai/mcp/connectors/dev.monito/monito)
  🔐 - Tests a web app in a real browser from plain English; returns pass, fail or cannot verify with screenshots and logs.

- [pilotfish](https://pilotfish.gai.ventures) `https://pilotfish-be.gai.ventures/mcp`
  [![pilotfish MCP connector](https://glama.ai/mcp/connectors/io.github.gAI-ventures/pilotfish-managed/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gAI-ventures/pilotfish-managed)
  🔐 - Run whole web tasks in a cloud browser signed in with your saved logins; returns answers, files and replays.

- [screenshot.com.ar](https://screenshot.com.ar) `https://screenshot.com.ar/mcp`
  [![screenshot.com.ar MCP connector](https://glama.ai/mcp/connectors/ar.com.screenshot/screenshot/badges/score.svg)](https://glama.ai/mcp/connectors/ar.com.screenshot/screenshot)
  🔐 - Read any public page as clean markdown or capture it as an image in real Chrome; free tier, plans in ARS.

- [Shotkiln](https://shotkiln.com/mcp-screenshot-server) `https://shotkiln.com/mcp`
  [![Shotkiln MCP connector](https://glama.ai/mcp/connectors/com.shotkiln/shotkiln/badges/score.svg)](https://glama.ai/mcp/connectors/com.shotkiln/shotkiln)
  🔓 - Screenshot pages as PNG, JPEG or WebP, render a URL or HTML to PDF, and make 1200x630 OG images; key optional.

- [SnapRender](https://snap-render.com) `https://app.snap-render.com/mcp`
  [![SnapRender MCP connector](https://glama.ai/mcp/connectors/com.snap-render.app/snap-render/badges/score.svg)](https://glama.ai/mcp/connectors/com.snap-render.app/snap-render)
  🔐 - Capture screenshots and PDFs, read pages as Markdown, run 50-URL batches, and schedule captures with change alerts.

- [ViewportWitness](https://qa.honeygate.app) `https://qa.honeygate.app/mcp`
  [![ViewportWitness MCP connector](https://glama.ai/mcp/connectors/io.github.Baffles78/viewport-witness/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Baffles78/viewport-witness)
  🔓 - Paid browser QA across three viewports: screenshots, accessibility checks and baseline diffs.

### ☁️ <a name="cloud-platforms"></a>Cloud Platforms

- [Agentgates Compute](https://agentgates.ai/compute) `https://mcp.agentgates.ai/compute`
  [![Agentgates Compute MCP connector](https://glama.ai/mcp/connectors/ai.agentgates/compute/badges/score.svg)](https://glama.ai/mcp/connectors/ai.agentgates/compute)
  🔓 - Plans, live prices and quotes for confidential VMs (Intel TDX) rented by the hour in USDC over x402.
- [AgentsPodium Hosting](https://hosting.defispace.com/docs/mcp.html) `https://mcp.agentspodium.com/mcp`
  [![AgentsPodium Hosting MCP connector](https://glama.ai/mcp/connectors/com.agentspodium/hosting/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentspodium/hosting)
  🔓 - Create, pay for and manage hosted AI agent pods (Hermes, OpenClaw, n8n); account tools need a key.
- [AiVikings.ai](https://aivikings.ai/docs/mcp/) `https://mcp.aivikings.ai/mcp`
  [![AiVikings.ai MCP connector](https://glama.ai/mcp/connectors/ai.aivikings/registrar/badges/score.svg)](https://glama.ai/mcp/connectors/ai.aivikings/registrar)
  🔓 - Check, register, renew and transfer domains and manage DNS; account tools need OAuth sign-in.
- [Ankra](https://docs.ankra.ai/platform/mcp-server) `https://platform.ankra.app/api/v1/mcp`
  [![Ankra MCP connector](https://glama.ai/mcp/connectors/ai.ankra/platform/badges/score.svg)](https://glama.ai/mcp/connectors/ai.ankra/platform)
  🔐 - Deploy and operate Kubernetes: build or import clusters, ship apps, read logs and metrics, and triage CVEs.
- [briq](https://briq.cloud) `https://api.briq.cloud/mcp`
  [![briq MCP connector](https://glama.ai/mcp/connectors/cloud.briq/briq/badges/score.svg)](https://glama.ai/mcp/connectors/cloud.briq/briq)
  🔐 - Give an agent a sandbox to run code in, Postgres, Redis or any Docker image, each on a microVM that sleeps when idle.
- [Cloud World Model](https://www.cloudworldmodel.ai/mcp-quickstart) `https://www.cloudworldmodel.ai/mcp`
  [![Cloud World Model MCP connector](https://glama.ai/mcp/connectors/ai.cloudworldmodel/cloud-world-model/badges/score.svg)](https://glama.ai/mcp/connectors/ai.cloudworldmodel/cloud-world-model)
  🔓 - Simulate cloud infrastructure and estimate cost, latency and resilience across AWS, GCP, Azure, OCI and DigitalOcean.
- [Cloudflare Bindings](https://developers.cloudflare.com/agents/model-context-protocol/) `https://bindings.mcp.cloudflare.com/mcp`
  🔐 - Build on Workers KV, R2, D1, and other Cloudflare bindings.
- [Control Plane](https://docs.controlplane.com/ai/mcp) `https://mcp.cpln.io/mcp`
  [![Control Plane MCP connector](https://glama.ai/mcp/connectors/io.cpln/control-plane/badges/score.svg)](https://glama.ai/mcp/connectors/io.cpln/control-plane)
  🔐 - Deploy and operate apps, databases, secrets, domains, and logs on Control Plane across AWS, GCP, and Azure.
- [Costory](https://docs.costory.io/features/mcp) `https://app-api.costory.io/mcp`
  [![Costory MCP connector](https://glama.ai/mcp/connectors/io.costory.app-api/costory/badges/score.svg)](https://glama.ai/mcp/connectors/io.costory.app-api/costory)
  🔐 - FinOps agent backend: query, allocate and explain AWS, GCP, Azure, Kubernetes and AI spend.
- [Crow Nest](https://crow-nest.com) `https://crow-nest.com/mcp`
  [![Crow Nest MCP connector](https://glama.ai/mcp/connectors/com.crow-nest/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.crow-nest/mcp)
  🔐 - Publish apps built with AI and share them with your team behind login, with data, files and AI built in.
- [DropTheHassle](https://dropthehassle.com) `https://dropthehassle.com/mcp`
  [![DropTheHassle MCP connector](https://glama.ai/mcp/connectors/io.github.bosmdavid-gif/dropthehassle/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bosmdavid-gif/dropthehassle)
  🔓 - Publish static sites to a free HTTPS link or your own domain and check domain prices; account tools need a token.
- [ElfHosted](https://docs.elfhosted.com/ai-agents/) `https://mcp.elfhosted.com/mcp`
  [![ElfHosted MCP connector](https://glama.ai/mcp/connectors/com.elfhosted/public/badges/score.svg)](https://glama.ai/mcp/connectors/com.elfhosted/public)
  🔓 - Browse hosted AIOStreams, Immich, OpenClaw, Hermes and more: prices, savings, the trial, docs and platform status.
- [Eurobase](https://eurobase.dev/docs/agents) `https://api.eurobase.dev/mcp`
  [![Eurobase MCP connector](https://glama.ai/mcp/connectors/dev.eurobase/eurobase/badges/score.svg)](https://glama.ai/mcp/connectors/dev.eurobase/eurobase)
  🔐 - Create projects from GitHub repositories, deploy them, and read build, runtime and HTTP logs on a European cloud.
- [FARPY](https://farpy.com) `https://api.farpy.com/mcp`
  [![FARPY MCP connector](https://glama.ai/mcp/connectors/com.farpy.api/farpy/badges/score.svg)](https://glama.ai/mcp/connectors/com.farpy.api/farpy)
  🔐 - Run verified Blender GPU workloads, track jobs, retrieve artifacts, and inspect execution receipts.
- [Fiskmas](https://fiskmas.dev) `https://mcp.fiskmas.dev/mcp`
  [![Fiskmas MCP connector](https://glama.ai/mcp/connectors/dev.fiskmas/fiskmas/badges/score.svg)](https://glama.ai/mcp/connectors/dev.fiskmas/fiskmas)
  🔓 - Create, deploy and monitor Docker apps on live HTTPS URLs.
- [Floot](https://floot.com) `https://mcp.floot.com/mcp`
  [![Floot MCP connector](https://glama.ai/mcp/connectors/com.floot/floot/badges/score.svg)](https://glama.ai/mcp/connectors/com.floot/floot)
  🔐 - Build React apps with serverless endpoints, Postgres and auth, run SQL, and publish to a live URL.
- [GPU Finder](https://gpufinder.dev/api) `https://gpufinder.dev/mcp`
  [![GPU Finder MCP connector](https://glama.ai/mcp/connectors/dev.gpufinder/gpufinder/badges/score.svg)](https://glama.ai/mcp/connectors/dev.gpufinder/gpufinder)
  🔓 - Live cloud GPU prices, observed stock and 12-month price history across 30+ providers, refreshed hourly.
- [gpu.nz](https://gpu.nz/en/docs/mcp) `https://gpu.nz/mcp`
  [![gpu.nz MCP connector](https://glama.ai/mcp/connectors/nz.gpu/gpu-cloud/badges/score.svg)](https://glama.ai/mcp/connectors/nz.gpu/gpu-cloud)
  🔓 - Find GPUs with live prices, estimate VRAM, rent, monitor and stop GPU servers; renting needs an API key.
- [Handsome Hosting](https://hosting.handsome.co.il/connect?utm_source=awesome-remote-mcp-servers&utm_medium=listing) `https://hosting.handsome.co.il/mcp`
  [![Handsome Hosting MCP connector](https://glama.ai/mcp/connectors/il.co.handsome.hosting/handsome-hosting/badges/score.svg)](https://glama.ai/mcp/connectors/il.co.handsome.hosting/handsome-hosting)
  🔐 - Deploy sites, apps and WordPress to managed servers, buy or connect domains, edit DNS, read logs and roll back.
- [Hatch](https://viberooster.com) `https://mcp.theroost.dev/mcp`
  [![Hatch MCP connector](https://glama.ai/mcp/connectors/com.viberooster/hatch/badges/score.svg)](https://glama.ai/mcp/connectors/com.viberooster/hatch)
  🔓 - Publish a live website from an agent in one tool call, expiring or permanent, with human review hooks.
- [Heroku](https://heroku.com) `https://mcp.heroku.com/mcp`
  🔐 - Manage Heroku apps, dynos, add-ons, and logs.
- [kad.dev](https://kad.dev) `https://kad.dev/mcp`
  [![kad.dev MCP connector](https://glama.ai/mcp/connectors/dev.kad/kaddev/badges/score.svg)](https://glama.ai/mcp/connectors/dev.kad/kaddev)
  🔐 - Deploy and run web apps from an agent: live URL per commit, managed Postgres, S3 storage, logs, rollback.
- [Lium](https://docs.lium.io/developers/mcp) `https://docs.lium.io/mcp`
  [![Lium MCP connector](https://glama.ai/mcp/connectors/io.github.Datura-ai/lium-docs/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Datura-ai/lium-docs)
  🔓 - Search and read the docs of Lium, a GPU rental marketplace: rent GPU pods by the second via CLI, SDK or REST API.
- [NetActuate](https://netactuate.com) `https://netactuate.com/mcp`
  [![NetActuate MCP connector](https://glama.ai/mcp/connectors/com.netactuate/net-actuate/badges/score.svg)](https://glama.ai/mcp/connectors/com.netactuate/net-actuate)
  🔓 - Read-only answers from NetActuate's published network data: data centers, compliance, exchanges, products and pricing.
- [Netlify](https://netlify.com) `https://netlify-mcp.netlify.app/mcp`
  🔐 - Create, deploy, and manage Netlify sites.
- [Nerdit](https://nerdit.ai/?utm_source=awesome-remote-mcp-servers) `https://mcp.nerdit.ai/mcp`
  [![Nerdit MCP connector](https://glama.ai/mcp/connectors/ai.nerdit/nerdit/badges/score.svg)](https://glama.ai/mcp/connectors/ai.nerdit/nerdit)
  🔐 - Deploy apps, databases and local AI models to your own machines, read logs, set variables and share apps.
- [Pethost](https://pethost.dev) `https://mcp.pethost.dev/mcp`
  [![Pethost MCP connector](https://glama.ai/mcp/connectors/dev.pethost/pethost/badges/score.svg)](https://glama.ai/mcp/connectors/dev.pethost/pethost)
  🔐 - Deploy Docker Compose projects, read their logs and HTTP traffic, and run commands in their containers.
- [Popdot AI](https://popdot.ai) `https://popdot.ai/api/mcp`
  [![Popdot AI MCP connector](https://glama.ai/mcp/connectors/ai.popdot/popdot-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.popdot/popdot-mcp)
  🔓 - Give an agent a public URL: free 24-hour trial subdomains, then rentals paid in USDC via x402.
- [Porkbun](https://porkbun.com/mcp) `https://mcp.porkbun.com/mcp`
  [![Porkbun MCP connector](https://glama.ai/mcp/connectors/com.porkbun/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.porkbun/mcp)
  🔐 - Manage domains, DNS, nameservers, DNSSEC, URL forwarding and static site deploys on your Porkbun account.
- [Render](https://render.com) `https://mcp.render.com/mcp`
  🔐 - Deploy and inspect Render services, databases, and logs.
- [rentgpu.link](https://rentgpu.link/agents) `https://rentgpu.link/mcp`
  [![rentgpu.link MCP connector](https://glama.ai/mcp/connectors/link.rentgpu/gpu-market/badges/score.svg)](https://glama.ai/mcp/connectors/link.rentgpu/gpu-market)
  🔓 - Compare live GPU rental prices across 26 clouds and 23 models; listing is free, price queries settle per call via x402.
- [Roar AI](https://roar-ai.com/docs/mcp) `https://cloud.roar-ai.com/mcp`
  [![Roar AI MCP connector](https://glama.ai/mcp/connectors/com.roar-ai/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.roar-ai/mcp)
  🔐 - Deploy apps from GitHub with databases and domains, manage API keys and spend, and call 200+ AI models.
- [Runcrate](https://www.runcrate.ai/mcp?utm_source=awesome-remote-mcp-servers&utm_medium=directory&utm_campaign=mcp) `https://mcp.runcrate.ai/mcp`
  [![Runcrate MCP connector](https://glama.ai/mcp/connectors/io.github.aeonmindai/runcrate/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.aeonmindai/runcrate)
  🔐 - Rent cloud GPUs: launch instances and jobs that stop their own billing, schedule runs, move files and track spend.
- [ShipStatic](https://shipstatic.com) `https://mcp.shipstatic.com`
  [![ShipStatic MCP connector](https://glama.ai/mcp/connectors/com.shipstatic/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.shipstatic/mcp)
  🔓 - Deploy static websites, landing pages, and prototypes instantly, free with no account; sign in to keep sites for good.
- [Shipvela](https://shipvela.com) `https://shipvela.com/mcp`
  [![Shipvela MCP connector](https://glama.ai/mcp/connectors/com.shipvela/shipvela/badges/score.svg)](https://glama.ai/mcp/connectors/com.shipvela/shipvela)
  🔐 - Create website projects, deploy supported GitHub repositories, and inspect deployment status, logs, and usage.
- [spawnpoint](https://getspawnpoint.com) `https://app.getspawnpoint.com/mcp`
  [![spawnpoint MCP connector](https://glama.ai/mcp/connectors/com.getspawnpoint/spawnpoint/badges/score.svg)](https://glama.ai/mcp/connectors/com.getspawnpoint/spawnpoint)
  🔐 - Deploy the small apps an agent builds to a live HTTPS link, private by default and shared by email like a Google Doc.
- [Symbioza](https://symbioza.dev) `https://symbioza.dev/mcp`
  [![Symbioza MCP connector](https://glama.ai/mcp/connectors/dev.symbioza/symbioza/badges/score.svg)](https://glama.ai/mcp/connectors/dev.symbioza/symbioza)
  🔐 - Run a GPU job under a hard dollar cap and collect the files it writes.
- [TrustyCap](https://trustycap.com) `https://mcp.trustycap.com/mcp`
  [![TrustyCap MCP connector](https://glama.ai/mcp/connectors/com.trustycap/trustycap/badges/score.svg)](https://glama.ai/mcp/connectors/com.trustycap/trustycap)
  🔓 - Add production storage, data, jobs, webhooks, email and secrets to an app, and meter the usage.
- [Utplava](https://utplava.dev/mcp/) `https://app.utplava.dev/api/mcp`
  [![Utplava MCP connector](https://glama.ai/mcp/connectors/dev.utplava.app/utplava/badges/score.svg)](https://glama.ai/mcp/connectors/dev.utplava.app/utplava)
  🔐 - Deploy GitHub repos built with AI tools: put apps online, check status, read logs and set environment variables.
- [Vercel](https://vercel.com) `https://mcp.vercel.com`
  [![Vercel MCP connector](https://glama.ai/mcp/connectors/com.vercel/vercel-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.vercel/vercel-mcp)
  🔐 - Manage Vercel projects, deployments, and logs.
- [wawesome](https://wawesome.io) `https://api.wawesome.io/v1/mcp`
  [![wawesome MCP connector](https://glama.ai/mcp/connectors/io.wawesome/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.wawesome/mcp)
  🔐 - Deploy JavaScript Functions and static sites as one version, read invocation logs, and roll back.
- [while.sh](https://while.sh/en/) `https://app.while.sh/mcp`
  [![while.sh MCP connector](https://glama.ai/mcp/connectors/sh.while/while/badges/score.svg)](https://glama.ai/mcp/connectors/sh.while/while)
  🔐 - French PaaS built for AI agents: deploy apps, PostgreSQL, caches, S3 and jobs over MCP.
  
### 💬 <a name="communication"></a>Communication

- [ACQ](https://acq.damri.org) `https://acq.damri.org/mcp`
  [![ACQ MCP connector](https://glama.ai/mcp/connectors/io.github.damri-labs/acq/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.damri-labs/acq)
  🔓 - Ephemeral private rooms for two agents to exchange plain text; one curl opens a room, one joins it.
- [ActivitySmith](https://activitysmith.com/integrations/mcp-server) `https://mcp.activitysmith.com/mcp`
  [![ActivitySmith MCP connector](https://glama.ai/mcp/connectors/com.activitysmith/activitysmith/badges/score.svg)](https://glama.ai/mcp/connectors/com.activitysmith/activitysmith)
  🔐 - AI agents and scripts reporting back to your iPhone with Push Notifications and Live Activities.
- [Agent Tavern](https://agenttavern.dev) `https://agenttavern.dev/mcp`
  [![Agent Tavern MCP connector](https://glama.ai/mcp/connectors/io.github.tima100faces/agent-tavern/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.tima100faces/agent-tavern)
  🔓 - Public Q&A board where AI agents on different runtimes ask and answer each other; posting needs a free key.
- [AICQ](https://getaicq.com/connect) `https://getaicq.com/mcp`
  [![AICQ MCP connector](https://glama.ai/mcp/connectors/com.getaicq/aicq/badges/score.svg)](https://glama.ai/mcp/connectors/com.getaicq/aicq)
  🔓 - Messaging network for AI agents: talk to other people's agents and groups; free, calls after aicq_join need a key.
- [Aitho](https://aitho.app) `https://present.aitho.app/mcp`
  [![Aitho MCP connector](https://glama.ai/mcp/connectors/app.aitho/aitho/badges/score.svg)](https://glama.ai/mcp/connectors/app.aitho/aitho)
  🔐 - Turn a slide deck into a rehearsable talk with a voice-following script and slides that advance as you speak.
- [AskOne](https://askone.org) `https://askone.org/api/mcp`
  [![AskOne MCP connector](https://glama.ai/mcp/connectors/io.github.phuryn/askone/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.phuryn/askone)
  🔐 - Run live audience Q&A and polls with free AI moderation: start rooms, launch polls, answer questions, draft a FAQ.
- [Atendio](https://atendio.co/conecta-tu-claude) `https://atendio.co/api/mcp`
  [![Atendio MCP connector](https://glama.ai/mcp/connectors/co.atendio/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/co.atendio/mcp)
  🔐 - Read WhatsApp conversations and analytics, and manage the rules of a business's AI WhatsApp assistant.
- [BumbleBox](https://bumblebox.ai/integrations) `https://api.bumblebox.ai/api/mcp`
  [![BumbleBox MCP connector](https://glama.ai/mcp/connectors/ai.bumblebox/mail/badges/score.svg)](https://glama.ai/mcp/connectors/ai.bumblebox/mail)
  🔓 - Search, triage and draft replies across Gmail, Outlook and IMAP mailboxes; sending only at the level you set.
- [Busymail](https://busymail.app) `https://busymail.app/mcp`
  [![Busymail MCP connector](https://glama.ai/mcp/connectors/app.busymail/busymail/badges/score.svg)](https://glama.ai/mcp/connectors/app.busymail/busymail)
  🔑 - Read, search, archive and draft across any IMAP mailbox; the token cannot send and approval needs a signed-in user.
- [Call Me](https://callmemcp.com) `https://callmemcp.com/mcp`
  [![Call Me MCP connector](https://glama.ai/mcp/connectors/com.serdaroztetik/call-me/badges/score.svg)](https://glama.ai/mcp/connectors/com.serdaroztetik/call-me)
  🔓 - Your AI rings your iPhone, speaks its question, and gets your spoken answer back as text.
- [CallForMe](https://callforme.tel) `https://callforme.tel/mcp`
  [![CallForMe MCP connector](https://glama.ai/mcp/connectors/tel.callforme/callforme/badges/score.svg)](https://glama.ai/mcp/connectors/tel.callforme/callforme)
  🔐 - Have your agent phone a business for quotes, bookings or cancellations and get the transcript and answers back.
- [Cookie Hive](https://cookiehive.pythonanywhere.com/join) `https://cookiehive.pythonanywhere.com/mcp`
  [![Cookie Hive MCP connector](https://glama.ai/mcp/connectors/io.github.tuhaku42-tech/cookiehive/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.tuhaku42-tech/cookiehive)
  🔓 - Agent-only social feed and task board: read the feed, post, vote, and trade jobs for internal credits.
- [Cosend](https://cosend.app) `https://mcp.cosend.app/mcp`
  [![Cosend MCP connector](https://glama.ai/mcp/connectors/app.cosend/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.cosend/mcp)
  🔓 - Read and answer a WhatsApp Business inbox, run campaigns and deploy automations. OAuth sign-in for every tool call.
- [DialogBrain](https://dialogbrain.com) `https://api.dialogbrain.com/mcp/`
  [![DialogBrain MCP connector](https://glama.ai/mcp/connectors/com.dialogbrain.api/dialog-brain/badges/score.svg)](https://glama.ai/mcp/connectors/com.dialogbrain.api/dialog-brain)
  🔐 - Read and answer a business's WhatsApp, Telegram, Instagram and email messages from one inbox.
- [Emitd](https://emitd.com) `https://mcp.emitd.com/mcp`
  [![Emitd MCP connector](https://glama.ai/mcp/connectors/com.emitd/emitd/badges/score.svg)](https://glama.ai/mcp/connectors/com.emitd/emitd)
  🔓 - Transactional email, message activity, templates, contacts, automations, and inbound mail for AI agents.
- [ErzyCall](https://app.erzycall.com/docs/mcp) `https://app.erzycall.com/api/mcp`
  [![ErzyCall MCP connector](https://glama.ai/mcp/connectors/com.erzycall.app/erzy-call/badges/score.svg)](https://glama.ai/mcp/connectors/com.erzycall.app/erzy-call)
  🔐 - Make and take real phone calls.
- [Faivelo](https://faivelo.com/ai-agents) `https://faivelo.com/api/mcp`
  [![Faivelo MCP connector](https://glama.ai/mcp/connectors/com.faivelo/mail/badges/score.svg)](https://glama.ai/mcp/connectors/com.faivelo/mail)
  🔐 - Read, search, send and organize mail in mailboxes on your own domain, and manage aliases and DNS.
- [Fax for Agents](https://faxforagents.com) `https://mcp.faxforagents.com/mcp/`
  [![Fax for Agents MCP connector](https://glama.ai/mcp/connectors/io.github.faxforagents/faxforagents-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.faxforagents/faxforagents-mcp)
  🔓 - Send and receive faxes from an agent with quotes, human review and delivery evidence, tool calls need a free key.
- [Fluxmail Cloud](https://fluxmail.ai/cloud) `https://cloud.fluxmail.ai/mcp`
  [![Fluxmail Cloud MCP connector](https://glama.ai/mcp/connectors/ai.fluxmail.cloud/fluxmail-cloud/badges/score.svg)](https://glama.ai/mcp/connectors/ai.fluxmail.cloud/fluxmail-cloud)
  🔐 - Read, search, draft, send, and organize email across Gmail, Outlook, and IMAP mailboxes.
- [formcarry](https://formcarry.com) `https://mcp.formcarry.com/mcp`
  [![formcarry MCP connector](https://glama.ai/mcp/connectors/com.formcarry.mcp/formcarry/badges/score.svg)](https://glama.ai/mcp/connectors/com.formcarry.mcp/formcarry)
  🔐 - Set up form handling for your site (email alerts, auto replies, webhooks) and query submissions.
- [Groundmail](https://groundmail.dev) `https://mcp.groundmail.dev/mcp`
  [![Groundmail MCP connector](https://glama.ai/mcp/connectors/io.github.Groundmail/groundmail/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Groundmail/groundmail)
  🔐 - Send transactional email, check delivery, and set up sending domains, templates and webhooks.
- [inboxmcp](https://inboxmcp.ai) `https://app.inboxmcp.ai/mcp`
  [![inboxmcp MCP connector](https://glama.ai/mcp/connectors/io.github.zhlei07/inboxmcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.zhlei07/inboxmcp)
  🔐 - Read connected inboxes, retain each AI's progress, and send separately authorized, owner-confirmed drafts.
- [Mailbox MCP](https://mailbox-mcp.com) `https://mcp.mailbox-mcp.com/db/mcp`
  [![Mailbox MCP MCP connector](https://glama.ai/mcp/connectors/com.mailbox-mcp.mcp/mailbox-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.mailbox-mcp.mcp/mailbox-mcp)
  🔐 - Read, search, file, draft and send email in your own Gmail, Outlook, Microsoft 365, iCloud or IMAP inbox.
- [Mailcheer](https://mailcheer.com) `https://mailcheer.com/api/mcp`
  [![Mailcheer MCP connector](https://glama.ai/mcp/connectors/com.mailcheer/mailcheer/badges/score.svg)](https://glama.ai/mcp/connectors/com.mailcheer/mailcheer)
  🔓 - Send transactional email, manage subscribers and schedule campaigns; tool calls use a Mailcheer API key.
- [Mailgi](https://www.mailgi.xyz/mcp.html) `https://api.mailgi.xyz/mcp`
  [![Mailgi MCP connector](https://glama.ai/mcp/connectors/xyz.mailgi/mailgi/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.mailgi/mailgi)
  🔓 - An agent registers its own email address with no human, then sends, receives and reads real mail.
- [meld](https://meld.mergeinc.workers.dev) `https://meld.mergeinc.workers.dev/mcp`
  [![meld MCP connector](https://glama.ai/mcp/connectors/io.github.lemonaide152/meld/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.lemonaide152/meld)
  🔓 - Capability URL + TTL context bridge; host-readable while live; anyone with the link; not for secrets.
- [MepMail](https://mepmail.dev) `https://api.mepmail.dev/mcp`
  [![MepMail MCP connector](https://glama.ai/mcp/connectors/io.github.JE4NVRG/mepmail/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.JE4NVRG/mepmail)
  🔐 - Send email, manage broadcasts and domains, and read or reply to Correio mailboxes within granted permissions.
- [Multi Mail](https://lumman.co/mcp/multi-mail) `https://mail.lumman.co/mcp`
  [![Multi Mail MCP connector](https://glama.ai/mcp/connectors/co.lumman/mail/badges/score.svg)](https://glama.ai/mcp/connectors/co.lumman/mail)
  🔐 - Search, read, draft, send and organise mail across several Gmail, Outlook, Microsoft 365, iCloud and Fastmail mailboxes.
- [MyOTP.App](https://myotp.app/mcp/) `https://mcp.myotp.app/mcp`
  [![MyOTP.App MCP connector](https://glama.ai/mcp/connectors/io.github.brntech/myotp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.brntech/myotp)
  🔓 - Send and verify OTP codes over SMS, WhatsApp and Telegram in 190+ countries.
- [OurAgents.chat](https://ouragents.chat/for-agents) `https://ouragents.chat/mcp`
  [![OurAgents.chat MCP connector](https://glama.ai/mcp/connectors/chat.ouragents/ouragents-chat/badges/score.svg)](https://glama.ai/mcp/connectors/chat.ouragents/ouragents-chat)
  🔐 - Lasting public addresses and threaded messages between AI agents, across apps and machines.
- [Pachca](https://dev.pachca.com/guides/mcp/overview) `https://mcp.pachca.com/mcp`
  [![Pachca MCP connector](https://glama.ai/mcp/connectors/com.pachca/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.pachca/mcp)
  🔐 - Read, search and post in Pachca team chat, and work with threads, reminders, employees and bots within your permissions.
- [PaperAgent](https://paperagent.dev) `https://paperagent.dev/mcp`
  [![PaperAgent MCP connector](https://glama.ai/mcp/connectors/dev.paperagent/letters/badges/score.svg)](https://glama.ai/mcp/connectors/dev.paperagent/letters)
  🔓 - Mail one-off USPS letters from chat: validates the US address, shows a PDF preview and total, and waits for approval.
- [Piloxa](https://piloxa.com) `https://piloxa.com/mcp`
  [![Piloxa MCP connector](https://glama.ai/mcp/connectors/com.piloxa/piloxa-certified-mail/badges/score.svg)](https://glama.ai/mcp/connectors/com.piloxa/piloxa-certified-mail)
  🔓 - Send a letter as printed USPS Certified Mail with tracking, from $13.18.
- [PlaceCall](https://voygr.tech/placecall/) `https://api.voygr.tech/mcp`
  [![PlaceCall MCP connector](https://glama.ai/mcp/connectors/io.github.voygr-tech/placecall/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.voygr-tech/placecall)
  🔐 - Place real phone calls to US businesses to book, ask questions or get quotes, then read the outcome and transcript.
- [Pondchat](https://pondchat.com) `https://pondchat.com/api/mcp`
  [![Pondchat MCP connector](https://glama.ai/mcp/connectors/com.pondchat/pondchat/badges/score.svg)](https://glama.ai/mcp/connectors/com.pondchat/pondchat)
  🔓 - Ephemeral, no-signup P2P video/text chat rooms: agents mint shareable links and read/write room chat.
- [Poofbox](https://poofboxmail.com) `https://poofboxmail.com/mcp`
  [![Poofbox MCP connector](https://glama.ai/mcp/connectors/com.poofboxmail/poofbox/badges/score.svg)](https://glama.ai/mcp/connectors/com.poofboxmail/poofbox)
  🔐 - Disposable receive-only inboxes for agents: create an address, wait for the email, get the code or verify link.
- [PostalForm](https://postalform.com/developers) `https://postalform.com/mcp`
  [![PostalForm MCP connector](https://glama.ai/mcp/connectors/com.postalform/postalform/badges/score.svg)](https://glama.ai/mcp/connectors/com.postalform/postalform)
  🔓 - Print and mail letters, PDFs and forms by USPS, including Certified Mail, paid by checkout link or MPP/x402.
- [Resend](https://resend.com) `https://mcp.resend.com/mcp`
  🔐 - Send transactional email and manage sending domains.
- [SendFaxFast](https://sendfaxfast.com/ai-connect.html) `https://sendfaxfast.com/api/mcp.php`
  [![SendFaxFast MCP connector](https://glama.ai/mcp/connectors/com.sendfaxfast/fax/badges/score.svg)](https://glama.ai/mcp/connectors/com.sendfaxfast/fax)
  🔓 - Send real faxes (PDF/JPG/photo) from AI chat to the US, Canada, Australia, New Zealand and 39 more countries.
- [Sending](https://sending.dev) `https://sending.dev/api/mcp`
  [![Sending MCP connector](https://glama.ai/mcp/connectors/dev.sending/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.sending/mcp)
  🔐 - Email, WhatsApp and Telegram for agents: send, campaigns, automations, contacts, agent inboxes.
- [Sessy](https://sessy.do/docs/mcp) `https://api.sessy.do/mcp`
  [![Sessy MCP connector](https://glama.ai/mcp/connectors/io.github.marckohlbrugge/sessy/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.marckohlbrugge/sessy)
  🔐 - Read-only Amazon SES observability: search events, inspect bounces and complaints, and pull delivery stats.
- [Signatoro](https://signatoro.com) `https://signatoro.com/mcp`
  [![Signatoro MCP connector](https://glama.ai/mcp/connectors/com.signatoro/signatoro/badges/score.svg)](https://glama.ai/mcp/connectors/com.signatoro/signatoro)
  🔓 - Fetch the saved email signature people and their AI agents append to every email they send or draft.
- [Skysay](https://skysay.ai/docs/mcp) `https://api.skysay.ai/mcp`
  [![Skysay MCP connector](https://glama.ai/mcp/connectors/io.github.skysay-ai/skysay/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.skysay-ai/skysay)
  🔐 - Phone numbers, AI voice calls, SMS and campaigns; country availability varies. 100+ countries covered.
- [SofortFax](https://sofortfax.de/ki-fax.html) `https://sofortfax.de/api/mcp.php`
  [![SofortFax MCP connector](https://glama.ai/mcp/connectors/de.sofortfax/fax/badges/score.svg)](https://glama.ai/mcp/connectors/de.sofortfax/fax)
  🔓 - Send real faxes (PDF/JPG/photo) from AI chat to Germany, Austria and 40+ countries; pay per fax or prepaid credits.
- [SovaTalk](https://sovatalk.com) `https://sovatalk.com/mcp`
  [![SovaTalk MCP connector](https://glama.ai/mcp/connectors/com.sovatalk/sovatalk/badges/score.svg)](https://glama.ai/mcp/connectors/com.sovatalk/sovatalk)
  🔓 - Find real people to talk to live on video: who is live, who listens about a topic, prices and site answers.
- [Subo](https://subo.gg/blog/connect-discord-community-to-ai-agent/) `https://api.subo.ai/mcp`
  [![Subo MCP connector](https://glama.ai/mcp/connectors/gg.subo/survey-bot/badges/score.svg)](https://glama.ai/mcp/connectors/gg.subo/survey-bot)
  🔐 - Build, launch and analyze surveys, polls, forms and quizzes in a Discord community, and reward members with XP.
- [SuguFAX](https://sugufax.com/ai) `https://sugufax.com/api/mcp.php`
  [![SuguFAX MCP connector](https://glama.ai/mcp/connectors/com.sugufax/fax-payperuse/badges/score.svg)](https://glama.ai/mcp/connectors/com.sugufax/fax-payperuse)
  🔓 - Send real faxes (PDF/photo) from AI chat to Japan, paid per fax from ¥400 or with prepaid credits.
- [SwarmMemo](https://swarmmemo.com) `https://swarmmemo.com/mcp`
  [![SwarmMemo MCP connector](https://glama.ai/mcp/connectors/com.swarmmemo/bulletin/badges/score.svg)](https://glama.ai/mcp/connectors/com.swarmmemo/bulletin)
  🔓 - Free public bulletin board where agents post, reply and find peers.
- [TaskBounty Agent Board](https://www.task-bounty.com/board/start) `https://www.task-bounty.com/api/mcp/board`
  [![TaskBounty Agent Board MCP connector](https://glama.ai/mcp/connectors/io.github.eliottreich/agent-board/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.eliottreich/agent-board)
  🔓 - Use 14 tools to find collaborators, discuss ideas, and coordinate public tasks or private swarms without signup.
- [Telerivet](https://www.telerivet.com) `https://api.telerivet.com/mcp`
  [![Telerivet MCP connector](https://glama.ai/mcp/connectors/com.telerivet/telerivet/badges/score.svg)](https://glama.ai/mcp/connectors/com.telerivet/telerivet)
  🔐 - Send messages and automate conversations over SMS, MMS, WhatsApp, Viber, IVR, and USSD in 150+ countries.
- [The Colony](https://thecolony.cc/for-agents) `https://thecolony.cc/mcp/`
  [![The Colony MCP connector](https://glama.ai/mcp/connectors/cc.thecolony/the-colony/badges/score.svg)](https://glama.ai/mcp/connectors/cc.thecolony/the-colony)
  🔓 - Forum and social network for AI agents: read posts anonymously; post, comment, vote and message with a token.
- [The Commons](https://mcp.deadbrands.co/hub/) `https://mcp.deadbrands.co/hub/mcp`
  [![The Commons MCP connector](https://glama.ai/mcp/connectors/io.github.dstrausser83/db-collab-hub/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.dstrausser83/db-collab-hub)
  🔓 - Open discussion hub for AI agents: read anonymously, post with a free instant hub key, home of the Bot Game Arena.
- [ThunderPhone](https://thunderphone.com) `https://api.thunderphone.com/v1/mcp`
  [![ThunderPhone MCP connector](https://glama.ai/mcp/connectors/io.github.thunderphone/thunderphone/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.thunderphone/thunderphone)
  🔐 - Build, test and run AI phone agents: numbers, inbound and outbound calls, campaigns and transcripts.
- [Tokolaku](https://tokolaku.id/developers) `https://api.tokolaku.id/mcp`
  [![Tokolaku MCP connector](https://glama.ai/mcp/connectors/id.tokolaku/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/id.tokolaku/mcp)
  🔐 - Send WhatsApp Business messages and manage inbox conversations, products, orders and webhooks for Indonesian SMBs.
- [Unitpost](https://www.unitpost.com/ai/mcp) `https://mcp.unitpost.com/mcp`
  [![Unitpost MCP connector](https://glama.ai/mcp/connectors/com.unitpost/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.unitpost/mcp)
  🔐 - Send transactional email, campaigns and SMS; manage contacts, templates, domains, webhooks and inbound email.
- [voicehook](https://voicehook.ai/?utm_source=awesome-remote-mcp&utm_campaign=d13-remote-list) `https://voicehook.ai/mcp`
  [![voicehook MCP connector](https://glama.ai/mcp/connectors/io.github.voicehook-ai/voicehook/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.voicehook-ai/voicehook)
  🔓 - Talk with your agents: a voice call in the browser that your agent can start or join.
- [volai](https://volai.cz/en) `https://volai.cz/mcp`
  [![volai MCP connector](https://glama.ai/mcp/connectors/cz.volai/volai/badges/score.svg)](https://glama.ai/mcp/connectors/cz.volai/volai)
  🔐 - Buy Czech and Slovak numbers, place calls, send SMS and run a voice agent; auth is an API key.
- [Widely](https://widely-mobile.com/mcp) `https://mcp.widely-mobile.com/mcp`
  [![Widely MCP connector](https://glama.ai/mcp/connectors/com.widely-mobile/widely/badges/score.svg)](https://glama.ai/mcp/connectors/com.widely-mobile/widely)
  🔓 - Telecom operating layer for AI agents: numbers, calls, SMS, voicemail, transcripts, and AI receptionists.
- [wacli.me](https://wacli.me) `https://wacli.me/mcp`
  [![wacli.me MCP connector](https://glama.ai/mcp/connectors/me.wacli/whatsapp/badges/score.svg)](https://glama.ai/mcp/connectors/me.wacli/whatsapp)
  🔐 - Link your WhatsApp account to read, search and send messages.
- [WolfSMS](https://usewolfsms.com) `https://usewolfsms.com/mcp`
  [![WolfSMS MCP connector](https://glama.ai/mcp/connectors/com.usewolfsms/wolfsms/badges/score.svg)](https://glama.ai/mcp/connectors/com.usewolfsms/wolfsms)
  🔐 - Read the SMS your Android phone receives, like delivery codes and alerts, filtered by sender or time; read-only.

### 📝 <a name="content-management"></a>Content Management

- [8B AI Website Builder](https://8b.com/mcp/) `https://mcp.8b.com/mcp`
  [![8B AI Website Builder MCP connector](https://glama.ai/mcp/connectors/com.8b/ai-website-builder/badges/score.svg)](https://glama.ai/mcp/connectors/com.8b/ai-website-builder)
  🔓 - Your AI picks an 8B generated design and writes the copy; get an animated one-page site, preview link and HTML file.
- [Benchlight](https://benchlight.dev/) `https://benchlight.dev/mcp`
  [![Benchlight MCP connector](https://glama.ai/mcp/connectors/dev.benchlight/benchlight/badges/score.svg)](https://glama.ai/mcp/connectors/dev.benchlight/benchlight)
  🔐 - Make small business websites in your chat, save them as private drafts and publish one free on benchlight.page.
- [btlabs Core](https://btlabs.dev) `https://btlabs.dev/api/mcp`
  [![btlabs Core MCP connector](https://glama.ai/mcp/connectors/dev.btlabs/core/badges/score.svg)](https://glama.ai/mcp/connectors/dev.btlabs/core)
  🔐 - Manage a btlabs Core site: pages, posts, media, menus, redirects and AI-discovery settings.
- [Contentful](https://contentful.com) `https://mcp.contentful.com/mcp`
  🔑 - Manage Contentful entries, assets, and content models.
- [Convika](https://convika.com) `https://mcp.convika.com/mcp`
  [![Convika MCP connector](https://glama.ai/mcp/connectors/com.convika/convika/badges/score.svg)](https://glama.ai/mcp/connectors/com.convika/convika)
  🔐 - Publish AI-made landing pages on your own domain, with a signup form and visitor stats.
- [dochost](https://dochost.io/mcp) `https://dochost.io/api/mcp`
  [![dochost MCP connector](https://glama.ai/mcp/connectors/io.dochost/dochost/badges/score.svg)](https://glama.ai/mcp/connectors/io.dochost/dochost)
  🔓 - Publish Markdown or HTML as a hosted page and get a shareable link.
- [Docs MD](https://docs-md.com/agents) `https://docs-md.com/api/mcp`
  [![Docs MD MCP connector](https://glama.ai/mcp/connectors/com.docs-md/markdown-share/badges/score.svg)](https://glama.ai/mcp/connectors/com.docs-md/markdown-share)
  🔓 - Publish markdown as a rendered link with an expiry, read shares back as markdown, update or delete them.
- [Fantasma](https://www.fantasma.io/mcp) `https://www.fantasma.io/api/mcp`
  [![Fantasma MCP connector](https://glama.ai/mcp/connectors/io.fantasma/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.fantasma/mcp)
  🔐 - Design Ghost themes from chat: pages, styles, patterns and previews, then publish to your Ghost site.
- [Foliade](https://foliade.gekkode.com/en/) `https://foliade.gekkode.com/mcp`
  [![Foliade MCP connector](https://glama.ai/mcp/connectors/com.gekkode/foliade/badges/score.svg)](https://glama.ai/mcp/connectors/com.gekkode/foliade)
  🔓 - Turn a PDF into a mobile flipbook catalogue, customise its reader and publish it.
- [Foliyo](https://foliyo.io) `https://foliyo.io/mcp`
  [![Foliyo MCP connector](https://glama.ai/mcp/connectors/io.foliyo/foliyo/badges/score.svg)](https://glama.ai/mcp/connectors/io.foliyo/foliyo)
  🔐 - Create, brand, publish and track client-ready reports, proposals and research pages.
- [Ginta](https://ginta.app/website-builder-mcp/) `https://ginta.app/mcp`
  [![Ginta MCP connector](https://glama.ai/mcp/connectors/app.ginta/ginta/badges/score.svg)](https://glama.ai/mcp/connectors/app.ginta/ginta)
  🔐 - Build, publish and edit hosted websites with working forms, menus, bookings, blogs and an owner admin.
- [GoodBarber](https://www.goodbarber.com/mcp/) `https://mcp.goodbarber.dev/mcp/sse`
  [![GoodBarber MCP connector](https://glama.ai/mcp/connectors/dev.goodbarber/goodbarber-public-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.goodbarber/goodbarber-public-mcp)
  🔐 - Manage a GoodBarber no-code app: content, push notifications, shop orders, members, and analytics.
- [INKFLOW](https://inkflowstudio.org) `https://api.inkflowstudio.org/api/mcp`
  [![INKFLOW MCP connector](https://glama.ai/mcp/connectors/org.inkflowstudio/inkflow/badges/score.svg)](https://glama.ai/mcp/connectors/org.inkflowstudio/inkflow)
  🔓 - Writes complete books, series, manuals and translations, plus TikTok/YouTube promo videos; free Chapter 1 with no key.
- [JustCopy](https://justcopy.ai/docs/mcp) `https://justcopy.ai/mcp`
  [![JustCopy MCP connector](https://glama.ai/mcp/connectors/ai.justcopy/justcopy/badges/score.svg)](https://glama.ai/mcp/connectors/ai.justcopy/justcopy)
  🔐 - Build, change and publish a working business website from a chat, with sign-in, saved form data and photo uploads.
- [Keepp](https://keepp.link/developers) `https://api.keepp.link/mcp`
  [![Keepp MCP connector](https://glama.ai/mcp/connectors/link.keepp/keepp/badges/score.svg)](https://glama.ai/mcp/connectors/link.keepp/keepp)
  🔐 - Build and edit a Keepp page (links, shop, bookings, forms) at keepp.link/yourname.
- [Kleap](https://kleap.co/mcp) `https://kleap.co/api/mcp`
  [![Kleap MCP connector](https://glama.ai/mcp/connectors/co.kleap/kleap/badges/score.svg)](https://glama.ai/mcp/connectors/co.kleap/kleap)
  🔓 - Build, edit, publish and manage real websites and web apps from your AI agent.
- [Lediv](https://lediv.com) `https://lediv.app/mcp`
  [![Lediv MCP connector](https://glama.ai/mcp/connectors/app.lediv/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.lediv/mcp)
  🔐 - Visual website builder synced with real code: edit files, publish, roll back, manage domains and previews.
- [LetX](https://letx.app/mcp/) `https://api.letx.app/mcp`
  [![LetX MCP connector](https://glama.ai/mcp/connectors/app.letx/letx/badges/score.svg)](https://glama.ai/mcp/connectors/app.letx/letx)
  🔐 - Write LaTeX from 1,000+ journal, thesis and CV templates and compile to PDF with the build log.
- [Manulyx](https://manulyx.com/connectors) `https://manulyx.com/api/mcp`
  [![Manulyx MCP connector](https://glama.ai/mcp/connectors/com.manulyx/manulyx/badges/score.svg)](https://glama.ai/mcp/connectors/com.manulyx/manulyx)
  🔐 - Online LaTeX editor: start papers in journal templates, edit, cite by DOI and compile to PDF.
- [Posy](https://posy.page) `https://posy.page/api/mcp`
  [![Posy MCP connector](https://glama.ai/mcp/connectors/io.github.Himanshu-Sangshetti/posy/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Himanshu-Sangshetti/posy)
  🔐 - Build and edit a hand-made link-in-bio page: add links, pick a look, publish it at posy.page.
- [Sanity](https://sanity.io) `https://mcp.sanity.io/mcp`
  [![Sanity MCP connector](https://glama.ai/mcp/connectors/io.sanity.www/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.sanity.www/mcp)
  🔐 - Query and mutate Sanity datasets and documents.
- [Share Artifacts](https://shareartifacts.dev) `https://shareartifacts.dev/api/mcp`
  [![Share Artifacts MCP connector](https://glama.ai/mcp/connectors/io.github.arunai30/share-artifacts/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.arunai30/share-artifacts)
  🔐 - Publish and update static HTML reports, presentations, and explainers with controlled sharing.
- [sitectrl](https://sitectrl.ai/mcp) `https://mcp.sitectrl.ai/mcp`
  [![sitectrl MCP connector](https://glama.ai/mcp/connectors/ai.sitectrl/sitectrl/badges/score.svg)](https://glama.ai/mcp/connectors/ai.sitectrl/sitectrl)
  🔓 - Describe a site and get it live with SSL, forms and analytics; OAuth to edit and manage it.
- [SiteKrs](https://sitekrs.ai-krs.com) `https://sitekrs.ai-krs.com/api/mcp`
  [![SiteKrs MCP connector](https://glama.ai/mcp/connectors/io.github.hansail001/sitekrs/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hansail001/sitekrs)
  🔓 - List SiteKrs static-site templates and get editor links; import your own source on the homepage.
- [Sitelas](https://sitelas.com) `https://sitelas.com/api/mcp`
  [![Sitelas MCP connector](https://glama.ai/mcp/connectors/com.sitelas/sitelas/badges/score.svg)](https://glama.ai/mcp/connectors/com.sitelas/sitelas)
  🔐 - Build a website from a template, preview it, publish on approval, then edit it and read its form messages.
- [SmartCompanion](https://www.smartcompanion.app/en/mcp/) `https://admin.smartcompanion.app/mcp`
  [![SmartCompanion MCP connector](https://glama.ai/mcp/connectors/app.smartcompanion/audioguide/badges/score.svg)](https://glama.ai/mcp/connectors/app.smartcompanion/audioguide)
  🔐 - Create and edit museum audioguide apps: stations, tours, texts in several languages, images, audio and app design.
- [SnapHost](https://snaphost.ai) `https://app.snaphost.ai/api/mcp`
  [![SnapHost MCP connector](https://glama.ai/mcp/connectors/ai.snaphost/snaphost/badges/score.svg)](https://glama.ai/mcp/connectors/ai.snaphost/snaphost)
  🔐 - Publish a page or site to a private link, control who can view it, and update it in place.
- [spacesheep](https://spacesheep.dev) `https://mcp.spacesheep.dev/mcp`
  [![spacesheep MCP connector](https://glama.ai/mcp/connectors/dev.spacesheep/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.spacesheep/mcp)
  🔐 - Publish pages your agent writes to a private, shareable URL, then read, comment on and update them.
- [Storskarvia](https://storskarvia.com) `https://storskarvia.com/mcp/`
  [![Storskarvia MCP connector](https://glama.ai/mcp/connectors/com.storskarvia/writing-studio/badges/score.svg)](https://glama.ai/mcp/connectors/com.storskarvia/writing-studio)
  🔓 - Writing studio for novels and screenplays: cited fact-checks and continuity checks on your drafts; never writes prose.
- [Storyblok](https://storyblok.com) `https://mcp.storyblok.com/mcp`
  🔓 - Manage Storyblok spaces, stories, and components.
- [UiChemy](https://uichemy.com) `https://app.uichemy.com/api/mcp`
  [![UiChemy MCP connector](https://glama.ai/mcp/connectors/com.uichemy.app/ui-chemy-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.uichemy.app/ui-chemy-mcp)
  🔐 - Build editable WordPress pages for Elementor and Gutenberg from Claude, Cursor, Codex and VS Code.
- [Webflow](https://webflow.com) `https://mcp.webflow.com/mcp`
  [![Webflow MCP connector](https://glama.ai/mcp/connectors/com.webflow/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.webflow/mcp)
  🔐 - Manage Webflow sites, collections, and CMS items.
- [WebZum](https://webzum.com) `https://webzum.com/api/mcp`
  [![WebZum MCP connector](https://glama.ai/mcp/connectors/io.github.suprraz/webzum/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.suprraz/webzum)
  🔓 - Builds complete small-business websites with local SEO, a logo and hosting in 5 minutes; also hosts HTML.
- [Wix](https://wix.com) `https://mcp.wix.com/mcp`
  [![Wix MCP connector](https://glama.ai/mcp/connectors/com.wix/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.wix/mcp)
  🔐 - Manage Wix sites, business data, and bookings.

### 👤 <a name="crm"></a>CRM
- [Atimeüs](https://www.atimeus.com/fonctionnalites-erp/ia-et-serveur-mcp) `https://atimeus.app/mcp`
  [![Atimeüs MCP connector](https://glama.ai/mcp/connectors/com.atimeus/atimeus/badges/score.svg)](https://glama.ai/mcp/connectors/com.atimeus/atimeus)
  🔐 - ERP for IT services firms: search records, run indicators, manage timesheets and update data.
- [Bullpen](https://bullpen.sale) `https://bullpen.sale/mcp`
  [![Bullpen MCP connector](https://glama.ai/mcp/connectors/sale.bullpen/bullpen/badges/score.svg)](https://glama.ai/mcp/connectors/sale.bullpen/bullpen)
  🔓 - AI phone crew gets past phone trees and hold to a real person, then rings your rep in; OAuth to place calls.
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
- [FavCRM](https://favcrm.io/en/ai-agents/) `https://api.favcrm.io/mcp`
  [![FavCRM MCP connector](https://glama.ai/mcp/connectors/io.favcrm/favcrm/badges/score.svg)](https://glama.ai/mcp/connectors/io.favcrm/favcrm)
  🔓 - Manage bookings, customers, memberships, loyalty, invoices, and WhatsApp messaging; API key or OAuth for calls.
- [HubSpot](https://hubspot.com) `https://mcp.hubspot.com/anthropic`
  🔐 - Query and update HubSpot CRM contacts, companies, and deals.
- [Oria CRM](https://realoria.com/crm/mcp) `https://realoria.com/api/mcp`
  [![Oria CRM MCP connector](https://glama.ai/mcp/connectors/com.realoria/crm/badges/score.svg)](https://glama.ai/mcp/connectors/com.realoria/crm)
  🔐 - Read pipeline, contacts, properties, viewings and auctions for a Romanian real-estate agency's CRM.
- [ppl](https://withppl.com) `https://withppl.com/mcp`
  [![ppl MCP connector](https://glama.ai/mcp/connectors/io.github.ppl-crm/ppl/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ppl-crm/ppl)
  🔐 - Personal CRM as agent memory: contacts, notes, journal, tasks, reminders, semantic search; 120 tools.
- [SignalRaven](https://signalraven.ai) `https://api.signalraven.ai/mcp`
  [![SignalRaven MCP connector](https://glama.ai/mcp/connectors/io.github.signalraven/signalraven/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.signalraven/signalraven)
  🔐 - LinkedIn buying-intent signals, prospect and account research, and openers from your workspace.
- [TalaLevel](https://talalevel.com) `https://app.talalevel.com/mcp`
  [![TalaLevel MCP connector](https://glama.ai/mcp/connectors/com.talalevel.app/tala-level/badges/score.svg)](https://glama.ai/mcp/connectors/com.talalevel.app/tala-level)
  🔐 - Search leads, read their calls, texts and emails, add notes and tasks, and draft or send follow-ups you confirm.
- [Workspace369](https://workspace369.com) `https://mcp.workspace369.com/mcp`
  [![Workspace369 MCP connector](https://glama.ai/mcp/connectors/com.workspace369/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.workspace369/mcp)
  🔐 - Manage clients, proposals, e-sign contracts, invoices, projects, calendar and time tracking for client-work businesses.

### 🗄️ <a name="databases"></a>Databases

- [CloudCrane](https://cloudcrane.ai) `https://cloudcrane.ai/api/build/mcp`
  [![CloudCrane MCP connector](https://glama.ai/mcp/connectors/ai.cloudcrane/workspace/badges/score.svg)](https://glama.ai/mcp/connectors/ai.cloudcrane/workspace)
  🔐 - Read and build curated catalog data with a receipt on every value; review decisions stay with a person.
- [Convex](https://convex.dev) `https://mcp.convex.dev/mcp`
  🔓 - Query and manage Convex deployments, tables, and functions.
- [datatomcp](https://datatomcp.com) `https://app.datatomcp.com/mcp`
  [![datatomcp MCP connector](https://glama.ai/mcp/connectors/com.datatomcp/datatomcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.datatomcp/datatomcp)
  🔐 - Query your CSV files and Google Sheets with exact filters, groups and totals; read-only, EU-hosted.
- [LakehouseBox](https://lakehousebox.com/docs/mcp/) `https://mcp.lakehousebox.com/mcp`
  [![LakehouseBox MCP connector](https://glama.ai/mcp/connectors/com.lakehousebox/lakehousebox/badges/score.svg)](https://glama.ai/mcp/connectors/com.lakehousebox/lakehousebox)
  🔐 - Query and write Apache Iceberg tables hosted in Europe, and open public datasets, with DuckDB SQL.
- [MongoDB](https://mongodb.com) `https://mcp.mongodb.com/mcp`
  🔐 - Query MongoDB Atlas clusters and manage collections and indexes.
- [Neon](https://neon.tech) `https://mcp.neon.tech/mcp`
  🔐 - Provision and query Neon Postgres projects and branches.
- [PostData](https://postdata.cloud) `https://api.postdata.cloud/mcp`
  [![PostData MCP connector](https://glama.ai/mcp/connectors/cloud.postdata/postdata/badges/score.svg)](https://glama.ai/mcp/connectors/cloud.postdata/postdata)
  🔓 - Free, no-signup IoT sensor store: get a device name, read readings and history, wait for a flashed board to report.
- [Prisma](https://prisma.io) `https://mcp.prisma.io/mcp`
  [![Prisma MCP connector](https://glama.ai/mcp/connectors/io.prisma/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.prisma/mcp)
  🔐 - Manage Prisma Postgres databases and run migrations.
- [Refix](https://www.refix.ai/) `https://mcp.refix.ai/mcp`
  [![Refix MCP connector](https://glama.ai/mcp/connectors/ai.refix.mcp/refix/badges/score.svg)](https://glama.ai/mcp/connectors/ai.refix.mcp/refix)
  🔐 - Analyze connected company data, watch ongoing business goals, and read findings.
- [Speak To Your Database](https://speaktoyourdatabase.com) `https://speaktoyourdatabase.com/mcp`
  [![Speak To Your Database MCP connector](https://glama.ai/mcp/connectors/com.speaktoyourdatabase/styd/badges/score.svg)](https://glama.ai/mcp/connectors/com.speaktoyourdatabase/styd)
  🔐 - Ask your Odoo, PostgreSQL or MySQL data in plain words and get real numbers, computed read-only from your data.
- [Supabase](https://supabase.com) `https://mcp.supabase.com/mcp`
  [![Supabase MCP connector](https://glama.ai/mcp/connectors/com.supabase/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.supabase/mcp)
  🔐 - Manage Supabase projects, run SQL, and inspect schemas.
- [Teable](https://teable.ai) `https://mcp.teable.ai/mcp`
  [![Teable MCP connector](https://glama.ai/mcp/connectors/ai.teable.mcp/teable/badges/score.svg)](https://glama.ai/mcp/connectors/ai.teable.mcp/teable)
  🔐 - Inspect tables and read or update business records in Teable, an AI spreadsheet for business.
- [Vericto](https://vericto.com/docs/mcp) `https://mcp.vericto.com/mcp`
  [![Vericto MCP connector](https://glama.ai/mcp/connectors/com.vericto/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.vericto/mcp)
  🔑 - Database guardrails for AI agents: check SQL against your Vericto rules before it runs, with a suggested fix.

### 📊 <a name="data-visualization"></a>Data Visualization

- [amCharts 5](https://docs.amcharts.com/v5/ai/mcp/) `https://mcp.amcharts.com/mcp`
  [![amCharts 5 MCP connector](https://glama.ai/mcp/connectors/io.github.amcharts/amcharts5/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.amcharts/amcharts5)
  🔓 - Docs, 350+ code examples and API reference for amCharts 5 charts and maps, so agents write working code.
- [chartlink](https://chartlink.app) `https://chartlink.app/mcp`
  [![chartlink MCP connector](https://glama.ai/mcp/connectors/io.github.oscarleoo/chartlink/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.oscarleoo/chartlink)
  🔓 - Charts and tables with live-updating embed links, drafted from one message; tools need a key.
- [ngx-json-render UI](https://ngx-json-render.vercel.app) `https://ngx-json-render.vercel.app/mcp`
  [![ngx-json-render UI MCP connector](https://glama.ai/mcp/connectors/io.github.shteynu/ngx-json-render-ui/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.shteynu/ngx-json-render-ui)
  🔓 - Renders dashboards, forms and tables as Angular Material components inline in the chat (MCP App).
- [rows.page](https://rows.page) `https://rows.page/mcp`
  [![rows.page MCP connector](https://glama.ai/mcp/connectors/page.rows/rows/badges/score.svg)](https://glama.ai/mcp/connectors/page.rows/rows)
  🔓 - Push CSV, JSON or Parquet from an agent and get a link a human can explore with filters, SQL and charts.

### 🛠️ <a name="developer-tools"></a>Developer Tools
- [402cron](https://402cron.com) `https://402cron.com/mcp`
  [![402cron MCP connector](https://glama.ai/mcp/connectors/com.402cron/402cron/badges/score.svg)](https://glama.ai/mcp/connectors/com.402cron/402cron)
  🔓 - Paid cron for AI agents; paying with x402 USDC on Base issues a management token.
- [A2APark](https://a2apark.com/) `https://a2apark.com/mcp`
  [![A2APark MCP connector](https://glama.ai/mcp/connectors/com.a2apark/a2apark/badges/score.svg)](https://glama.ai/mcp/connectors/com.a2apark/a2apark)
  🔓 - Run stateful behavioral rides for AI agents and retrieve signed scorecards.
- [ADITUS Developer Portal MCP](https://developers.aditus.com/mcp) `https://developers.aditus.com/api/mcp`
  [![ADITUS Developer Portal MCP connector](https://glama.ai/mcp/connectors/com.aditus.developers/developer-portal/badges/score.svg)](https://glama.ai/mcp/connectors/com.aditus.developers/developer-portal)
  🔓 - Search and read the ADITUS event-technology API docs (ticketing, access, BI) and Shop Micro Frontend guides.
- [Aeon](https://www.aeon.fun/connect) `https://www.aeon.fun/connect/mcp`
  [![Aeon MCP connector](https://glama.ai/mcp/connectors/fun.aeon/aeon/badges/score.svg)](https://glama.ai/mcp/connectors/fun.aeon/aeon)
  🔐 - Run and manage your Aeon autonomous agent on GitHub Actions: skills, runs, memory, strategy and settings.
- [Agent Stack Directory](https://agentstackdirectory.com) `https://agentstackdirectory.com/mcp`
  [![Agent Stack Directory MCP connector](https://glama.ai/mcp/connectors/com.agentstackdirectory/agent-stack-directory/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentstackdirectory/agent-stack-directory)
  🔓 - Search, inspect and compare infrastructure tools for AI agents: browsers, sandboxes, memory, search APIs and more.
- [agent-manager Docs](https://agent-manager.dev) `https://agent-manager.dev/mcp`
  [![agent-manager Docs MCP connector](https://glama.ai/mcp/connectors/io.github.YoanWai/agent-manager-docs/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.YoanWai/agent-manager-docs)
  🔓 - Search and read the agent-manager docs, list its supported coding CLIs, and get the latest release.
- [Agentic Atlas](https://agentic-atlas.dev/) `https://agentic-atlas.dev/mcp/`
  [![Agentic Atlas MCP connector](https://glama.ai/mcp/connectors/dev.agentic-atlas/atlas/badges/score.svg)](https://glama.ai/mcp/connectors/dev.agentic-atlas/atlas)
  🔓 - Field guide to building better agents: design patterns, tradeoffs and decision guidance.
- [AgentIndex](https://agentindex.app) `https://agentindex.app/api/mcp/`
  [![AgentIndex MCP connector](https://glama.ai/mcp/connectors/app.agentindex/agentindex/badges/score.svg)](https://glama.ai/mcp/connectors/app.agentindex/agentindex)
  🔓 - Search a curated directory of open-source AI agents, MCP servers and dev tools; get details, categories and trending.
- [AgentoolRank](https://agentoolrank.com/agents) `https://agentoolrank.com/api/mcp`
  [![AgentoolRank MCP connector](https://glama.ai/mcp/connectors/com.agentoolrank/agent-tools/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentoolrank/agent-tools)
  🔓 - Search and compare open-source AI agent tools ranked by live GitHub activity, and list new ones.
- [AgentTask Atlas](https://agenttaskatlas.com/mcp) `https://agenttaskatlas.com/api/mcp`
  [![AgentTask Atlas MCP connector](https://glama.ai/mcp/connectors/com.agenttaskatlas/catalog/badges/score.svg)](https://glama.ai/mcp/connectors/com.agenttaskatlas/catalog)
  🔓 - Search a curated catalog of MCP servers and Agent Skills by dev task, with install steps and practical verdicts.
- [AGILEX Docs](https://service.agilex.ai/agilex-docs/) `https://service.agilex.ai/agilex-docs/mcp`
  [![AGILEX Docs MCP connector](https://glama.ai/mcp/connectors/ai.agilex.service/docs/badges/score.svg)](https://glama.ai/mcp/connectors/ai.agilex.service/docs)
  🔓 - Official AgileX robotics docs: user manuals, CAN 2.0B protocol, firmware notes and after-sales FAQ.
- [AI Commander](https://aicommander.dev) `https://aicommander.dev/mcp`
  [![AI Commander MCP connector](https://glama.ai/mcp/connectors/dev.aicommander/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.aicommander/mcp)
  🔐 - Remote shell and detached jobs on your machines — harness for Claude Code, Codex, ChatGPT, Cursor.
- [AI Design Blueprint](https://aidesignblueprint.com) `https://aidesignblueprint.com/mcp`
  [![AI Design Blueprint MCP connector](https://glama.ai/mcp/connectors/com.aidesignblueprint/blueprint/badges/score.svg)](https://glama.ai/mcp/connectors/com.aidesignblueprint/blueprint)
  🔓 - Search 10 design principles, examples and guides; spec and UI validators on paid plans.
- [AiLinkAny](https://ailinkany.com) `https://mcp.ailinkany.com/mcp`
  [![AiLinkAny MCP connector](https://glama.ai/mcp/connectors/io.github.zhangduochuan/ailinkany/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.zhangduochuan/ailinkany)
  🔐 - Control authorized Windows PCs: files, shell, apps and task status; computer execution needs a subscription.
- [AISkills402](https://aiskills402.com) `https://mcp.aiskills402.com/mcp`
  [![AISkills402 MCP connector](https://glama.ai/mcp/connectors/com.aiskills402/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.aiskills402/mcp)
  🔓 - Search tested agent skill files (SKILL.md) and read their cards for free; buy a file once with x402 in USDC on Base.
- [API Change Feed](https://changefeed.dev) `https://changefeed.dev/mcp`
  [![API Change Feed MCP connector](https://glama.ai/mcp/connectors/dev.changefeed/api-change-feed/badges/score.svg)](https://glama.ai/mcp/connectors/dev.changefeed/api-change-feed)
  🔓 - Breaking changes, deprecations and security fixes for 38 APIs and SDKs; pay per call in USDC on Base via x402.
- [Apple RAG MCP](https://apple-rag.com) `https://mcp.apple-rag.com`
  [![Apple RAG MCP connector](https://glama.ai/mcp/connectors/com.apple-rag/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.apple-rag/mcp-server)
  🔓 - Search official Apple developer docs and WWDC transcripts with RAG and Jev ranking.
- [Astro Docs](https://astro.build) `https://mcp.docs.astro.build/mcp`
  🔓 - Search the Astro documentation.
- [Atlantic Agentic Labs](https://docs.atlanticagenticlabs.com/mcp/public/) `https://ask.atlanticagenticlabs.com/mcp`
  [![Atlantic Agentic Labs MCP connector](https://glama.ai/mcp/connectors/com.atlanticagenticlabs/ask/badges/score.svg)](https://glama.ai/mcp/connectors/com.atlanticagenticlabs/ask)
  🔓 - Searches and reads LightHouse™ documentation and Atlantic's published items, with quoted passages and links.
- [Ausca](https://ausca.com) `https://ausca.com/mcp`
  [![Ausca MCP connector](https://glama.ai/mcp/connectors/com.ausca/agent-services/badges/score.svg)](https://glama.ai/mcp/connectors/com.ausca/agent-services)
  🔓 - Pay per call for remote browsers, receive-only inboxes, OCR, document analysis, and media transcription.
- [Benchline](https://tools.fabwaseem.com/mcp/guide) `https://tools.fabwaseem.com/mcp`
  [![Benchline MCP connector](https://glama.ai/mcp/connectors/com.fabwaseem.tools/benchline/badges/score.svg)](https://glama.ai/mcp/connectors/com.fabwaseem.tools/benchline)
  🔓 - 72 dev tools: JSON, PDF, images, OCR, JWT, hashes, DNS, TLS, headers, llms.txt and OG images.
- [Bitrise](https://bitrise.io) `https://mcp.bitrise.io/mcp`
  [![Bitrise MCP connector](https://glama.ai/mcp/connectors/io.github.bitrise-io/bitrise-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bitrise-io/bitrise-mcp)
  🔐 - Trigger and inspect Bitrise CI builds and artifacts.
- [BlockVectra](https://blockvectra.com) `https://docs.blockvectra.com/mcp`
  [![BlockVectra MCP connector](https://glama.ai/mcp/connectors/com.blockvectra/docs/badges/score.svg)](https://glama.ai/mcp/connectors/com.blockvectra/docs)
  🔓 - Docs, chains, pricing and public EVM RPC reads without a key; indexed data and account tools require an API key.
- [BotKelp](https://www.botkelp.com) `https://agent-scaffold-mcp.vercel.app/mcp`
  [![BotKelp MCP connector](https://glama.ai/mcp/connectors/app.vercel.agent-scaffold-mcp/bot-kelp/badges/score.svg)](https://glama.ai/mcp/connectors/app.vercel.agent-scaffold-mcp/bot-kelp)
  🔓 - Generate stamped Next.js scaffolds from a verified component catalog with INTEGRITY.json checks.
- [Breakwire](https://breakwire.org) `https://breakwire.org/mcp?ref=awesome-remote-mcp`
  [![Breakwire MCP connector](https://glama.ai/mcp/connectors/org.breakwire/breakwire/badges/score.svg)](https://glama.ai/mcp/connectors/org.breakwire/breakwire)
  🔓 - Look up an API, SDK or MCP error; get the source-linked breaking change, deprecation or advisory and its fix.
- [CacheBoost](https://www.cache-boost.com/support/mcp/overview) `https://api.cache-boost.com/mcp`
  [![CacheBoost MCP connector](https://glama.ai/mcp/connectors/com.cache-boost/cacheboost/badges/score.svg)](https://glama.ai/mcp/connectors/com.cache-boost/cacheboost)
  🔑 - Warm CDN and reverse-proxy caches from 12 regions after a deploy or purge, then read the run's hit/miss stats.
- [Capacitor MCP Server by Capawesome](https://capawesome.io/docs/ai/mcp/capacitor/) `https://capacitor-mcp.capawesome.io/mcp`
  [![Capacitor MCP connector](https://glama.ai/mcp/connectors/io.capawesome/capacitor-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.capawesome/capacitor-mcp)
  🔓 - Unofficial: search the Capacitor docs for v6 and later, read pages, and list official and community plugins.
- [Capawesome MCP Server](https://capawesome.io/docs/ai/mcp/capawesome/) `https://mcp.capawesome.io/mcp`
  [![Capawesome MCP connector](https://glama.ai/mcp/connectors/io.capawesome/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.capawesome/mcp)
  🔓 - Search the Capawesome docs and blog; an API token adds the Capawesome Cloud management tools.
- [Carrick](https://carrick.tools) `https://api.carrick.tools/mcp`
  [![Carrick MCP connector](https://glama.ai/mcp/connectors/io.github.carrick-tools/carrick/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.carrick-tools/carrick)
  🔐 - Indexes TypeScript codebases across services and repositories so agents search functions by intent rather than name.
- [Ceraph React Native MCP](https://ceraph.dev) `https://mcp.ceraph.dev/mcp`
  [![Ceraph React Native MCP connector](https://glama.ai/mcp/connectors/dev.ceraph.mcp/ceraph-react-native-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.ceraph.mcp/ceraph-react-native-mcp)
  🔐 - Let your coding agent test React Native and Expo apps end-to-end on iOS and Android devices, simulators and emulators.
- [Cherry Notes](https://cherrynotes.app) `https://api.cherrynotes.app/mcp`
  [![Cherry Notes MCP connector](https://glama.ai/mcp/connectors/app.cherrynotes/cherry-notes/badges/score.svg)](https://glama.ai/mcp/connectors/app.cherrynotes/cherry-notes)
  🔐 - Capture features, ideas and tasks on your phone; your AI coding agent picks them up and ships them.
- [Cloudflare Docs](https://developers.cloudflare.com) `https://docs.mcp.cloudflare.com/mcp`
- [CodeRifts](https://coderifts.com) `https://app.coderifts.com/mcp`
  [![CodeRifts MCP connector](https://glama.ai/mcp/connectors/io.github.coderifts/api-governance/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.coderifts/api-governance)
  🔓 - Only a granted change can proceed: preflight a contract change, verify a receipt, or read a past decision.
  🔓 - Search the Cloudflare developer documentation.
- [Coderbuds](https://coderbuds.com/docs/mcp?ref=awesome-remote-mcp) `https://coderbuds.com/mcp/insights`
  [![Coderbuds MCP connector](https://glama.ai/mcp/connectors/com.coderbuds/insights/badges/score.svg)](https://glama.ai/mcp/connectors/com.coderbuds/insights)
  🔐 - Read your team's delivery metrics and standards, and check a change against them before a PR.
- [CometChat Docs](https://www.cometchat.com/docs/mcp-server) `https://mcp.cometchat.com/mcp`
  [![CometChat Docs MCP connector](https://glama.ai/mcp/connectors/io.github.cometchat/docs-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.cometchat/docs-mcp)
  🔓 - Search CometChat chat, calling and moderation docs and get ready-made integration recipes.
- [CommandVault](https://commandvault.ai/mcp) `https://commandvault.ai/api/mcp`
  [![CommandVault MCP connector](https://glama.ai/mcp/connectors/io.github.geronco/commandvault/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.geronco/commandvault)
  🔓 - Search tested CLAUDE.md/AGENTS.md templates, Cursor rules, Agent Skills and MCP servers, blanks filled in.
- [CompatLab](https://compatlab.me/) `https://compatlab.me/mcp`
  [![CompatLab MCP connector](https://glama.ai/mcp/connectors/io.github.siddiksawani/compatlab/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.siddiksawani/compatlab)
  🔓 - Read recorded npm loading results across pinned Node.js, Bun and Deno versions, with coverage and report links.
- [ComputeFirst](https://computefirst.net) `https://computefirst.net/mcp`
  [![ComputeFirst MCP connector](https://glama.ai/mcp/connectors/io.github.321zz321/computefirst/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.321zz321/computefirst)
  🔓 - Versioned deterministic tools for math, CSV and JSON, dates, text, hashing, identifiers and units; no key.
- [ContextStream](https://contextstream.io) `https://mcp.contextstream.io/mcp`
  [![ContextStream MCP connector](https://glama.ai/mcp/connectors/io.contextstream/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.contextstream/mcp)
  🔐 - Shared project context for Cursor, Claude Code, Codex, and Grok. Intelligence isn’t the bottleneck. Context is.
- [ConvertFileFast](https://www.convertfilefast.com) `https://mcp.convertfilefast.com/mcp`
  [![ConvertFileFast MCP connector](https://glama.ai/mcp/connectors/io.github.MLTCorp/convertfilefast/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.MLTCorp/convertfilefast)
  🔓 - Convert documents, images and data files between formats, and merge, split, compress or protect PDFs.
- [Cuelark Tools](https://tools.cuelark.com/mcp) `https://tools.cuelark.com/mcp`
  [![Cuelark Tools MCP connector](https://glama.ai/mcp/connectors/com.cuelark/tools/badges/score.svg)](https://glama.ai/mcp/connectors/com.cuelark/tools)
  🔓 - Exact text and data tools: JSON, tokens, cron, dates, US tax, routing checks, and citations.
- [Datakoot Package Intel](https://datakoot.com/package-intel) `https://package.datakoot.com/mcp`
  [![Datakoot Package Intel MCP connector](https://glama.ai/mcp/connectors/com.datakoot/npm-pypi-crates-packages/badges/score.svg)](https://glama.ai/mcp/connectors/com.datakoot/npm-pypi-crates-packages)
  🔓 - npm, PyPI and crates.io package health, versions, downloads, dependencies and advisories.
- [Decide Runtime](https://www.decide.fyi/mcp#connect-runtime) `https://mcp-live.decide.fyi/developer-prepaid/v1/mcp`
  [![Decide Runtime MCP connector](https://glama.ai/mcp/connectors/io.github.nodeblur/decide-runtime/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.nodeblur/decide-runtime)
  🔓 - Public discovery; authenticated tools evaluate/read/export. $10/1,000 completed records. EU27/UK/US pilot; no execution.
- [DeepWiki](https://deepwiki.com) `https://mcp.deepwiki.com/mcp`
  🔓 - Ask questions about any public GitHub repository's generated wiki.
- [DevKit quick-tools](https://devkit.bigfloppy.net) `https://devkit.bigfloppy.net/mcp`
  [![DevKit quick-tools MCP connector](https://glama.ai/mcp/connectors/net.bigfloppy.devkit/devkit/badges/score.svg)](https://glama.ai/mcp/connectors/net.bigfloppy.devkit/devkit)
  🔓 - Free base64, hash, slug, UUID, timestamp and URL-encoding tools with a JSON API; no signup, 60 req/min per IP.
- [dep-diff](https://github.com/DigiCatalyst-Systems/dep-diff-mcp#readme) `https://dep-diff.digicatalyst.ca/mcp`
  [![dep-diff MCP connector](https://glama.ai/mcp/connectors/io.github.DigiCatalyst-Systems/dep-diff-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.DigiCatalyst-Systems/dep-diff-mcp)
  🔓 - Rank npm, PyPI and GitHub Actions upgrades by risk: breaking changes, fixed CVEs and migration links.
- [Devutils](https://devutils.bigfloppy.net) `https://devutils.bigfloppy.net/mcp`
  [![Devutils MCP connector](https://glama.ai/mcp/connectors/net.bigfloppy.devutils/devutils/badges/score.svg)](https://glama.ai/mcp/connectors/net.bigfloppy.devutils/devutils)
  🔓 - Free hosted dev toolkit: UUID, hash, base64, JWT decode, CSV→JSON, time and JSON tools as MCP; no signup.
- [Diogenes Context & Solvers](https://diogenesgateway.com/#context-code-solver) `https://diogenesgateway.com/mcp/context-code-solver`
  [![Diogenes Context & Solvers MCP connector](https://glama.ai/mcp/connectors/dev.workers.corinth.diogenes-micro-gateway/diogenes-context-compression-code-patching-and-deterministic-solver-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.workers.corinth.diogenes-micro-gateway/diogenes-context-compression-code-patching-and-deterministic-solver-mcp)
  🔓 - AST skeleton pruner, fuzzy code patcher, BPE token budgeter, and seeded Monte Carlo risk simulator.
- [DNS-DATA Remote](https://dns-data.com/) `https://mcp.dns-data.com/mcp`
  [![DNS-DATA Remote MCP connector](https://glama.ai/mcp/connectors/com.dns-data.mcp/dns-data-remote/badges/score.svg)](https://glama.ai/mcp/connectors/com.dns-data.mcp/dns-data-remote)
  🔐 - Connect AI assistants to authorized Windows or macOS computers for files, commands, and device management.
- [Docsy](https://docsy.remcp.site) `https://docsy.remcp.site/mcp/registry`
  [![Docsy MCP connector](https://glama.ai/mcp/connectors/io.github.getremcp/docsy/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.getremcp/docsy)
  🔓 - Search versioned developer documentation and fetch source-linked results using five read-only tools.
- [Dockyard](https://dockyard.kim1.ovh) `https://dockyard.kim1.ovh/mcp`
  [![Dockyard MCP connector](https://glama.ai/mcp/connectors/ovh.kim1.dockyard/dockyard-mcp-server-for-the-app-catalog/badges/score.svg)](https://glama.ai/mcp/connectors/ovh.kim1.dockyard/dockyard-mcp-server-for-the-app-catalog)
  🔓 - Search 790+ one-click Docker/Portainer app templates and prepare a local Docker or Portainer deploy plan.
- [Dynamic Document API](https://dynamicdocumentapi.com/docs/mcp) `https://mcp.dynamicdocumentapi.com/mcp`
  [![Dynamic Document API MCP connector](https://glama.ai/mcp/connectors/com.dynamicdocumentapi/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.dynamicdocumentapi/mcp)
  🔐 - Render PDFs and images from templates, HTML or Markdown, and create validated XRechnung and ZUGFeRD e-invoices.
- [EasyGerber](https://www.easygerber.com/) `https://www.easygerber.com/api/mcp`
  [![EasyGerber MCP connector](https://glama.ai/mcp/connectors/io.github.EasyGerber/easygerber/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.EasyGerber/easygerber)
  🔓 - AI PCB design, layout, and routing.
- [Electrik Slate](https://slate.electrik.dev) `https://mcp.slate.electrik.dev`
  [![Electrik Slate MCP connector](https://glama.ai/mcp/connectors/io.github.neerajsohal/slate/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.neerajsohal/slate)
  🔓 - Read Electrik Slate Blade component docs, blocks gallery, source, and llms.txt.
- [ElectroGen](https://electrogen.org) `https://electrogen.org/.well-known/mcp`
  [![ElectroGen MCP connector](https://glama.ai/mcp/connectors/org.electrogen/electrogen/badges/score.svg)](https://glama.ai/mcp/connectors/org.electrogen/electrogen)
  🔓 - Generate a buildable electronics blueprint — BOM, wiring, firmware, CAD and preview renders — from a text brief.
- [Email Spam Tester](https://email-spam-tester.com) `https://email-spam-tester.com/mcp`
  [![Email Spam Tester MCP connector](https://glama.ai/mcp/connectors/io.github.serg-tanichev/email-spam-tester/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.serg-tanichev/email-spam-tester)
  🔓 - Send a draft to a one-time address and get a spam score, 41 checks with RFC citations, and a fix plan.
- [EmpirioLabs AI](https://docs.empiriolabs.ai/mcp) `https://mcp.empiriolabs.ai/mcp`
  [![EmpirioLabs AI MCP connector](https://glama.ai/mcp/connectors/ai.empiriolabs/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.empiriolabs/mcp)
  🔐 - Run 200+ AI models for chat, image, video, speech and 3D, plus web search, batches and async jobs.
- [Favicon Tools](https://favicontools.com) `https://favicontools.com/api/mcp`
  [![Favicon Tools MCP connector](https://glama.ai/mcp/connectors/io.github.mewc/favicon-app-icons/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.mewc/favicon-app-icons)
  🔓 - Check a site's favicons and app icons, and generate a full favicon, Apple touch, and PWA icon set.
- [FernTool](https://www.ferntool.com/api) `https://www.ferntool.com/mcp`
  [![FernTool IP Lookup MCP connector](https://glama.ai/mcp/connectors/com.ferntool/ip/badges/score.svg)](https://glama.ai/mcp/connectors/com.ferntool/ip)
  🔓 - IP lookup and validation with ASN, geo and VPN/Tor flags, plus WHOIS, DNS, reverse DNS and subnet tools.
- [Firedrill](https://firedrill.run/agents) `https://mcp.firedrill.run/mcp`
  [![Firedrill MCP connector](https://glama.ai/mcp/connectors/io.github.firedrill-tools/firedrill/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.firedrill-tools/firedrill)
  🔐 - Prepare AI agent simulations, scenarios and synthetic tools, and inspect saved outcomes and evidence. Free to use.
- [Fixlight](https://fixlight.fernwaylabs.com/) `https://fixlight.fernwaylabs.com/mcp`
  [![Fixlight MCP connector](https://glama.ai/mcp/connectors/io.github.fernwaylabs/fixlight/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.fernwaylabs/fixlight)
  🔓 - Checks a public web page for accessibility problems and explains each one in plain English.
- [Footgun](https://getfootgun.com) `https://getfootgun.com/api/mcp`
  [![Footgun MCP connector](https://glama.ai/mcp/connectors/com.getfootgun/footgun/badges/score.svg)](https://glama.ai/mcp/connectors/com.getfootgun/footgun)
  🔓 - Dated, verified fixes for known API, platform and AI coding tool breakages, checked before your agent codes.
- [Formhaus Cloud](https://formhaus.dev) `https://api.formhaus.dev/mcp/account`
  [![Formhaus Cloud MCP connector](https://glama.ai/mcp/connectors/dev.formhaus.api/formhaus-cloud/badges/score.svg)](https://glama.ai/mcp/connectors/dev.formhaus.api/formhaus-cloud)
  🔐 - Publish forms from JSON definitions, read submissions and manage form settings and webhooks.
- [FrontMCP Docs](https://frontmcp.dev/learn/docs-for-your-agent) `https://mcp.frontmcp.dev`
  [![FrontMCP Docs MCP connector](https://glama.ai/mcp/connectors/dev.frontmcp.mcp/frontmcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.frontmcp.mcp/frontmcp)
  🔓 - Search and read FrontMCP's documentation, pinned to the FrontMCP version a project uses.
- [GitDiagram](https://gitdiagram.com) `https://gitdiagram.com/mcp`
  [![GitDiagram MCP connector](https://glama.ai/mcp/connectors/com.gitdiagram/gitdiagram/badges/score.svg)](https://glama.ai/mcp/connectors/com.gitdiagram/gitdiagram)
  🔓 - Architecture diagrams, explanations and Mermaid source for any public GitHub repository.
- [Gluo](https://gluo.dev) `https://gluo.dev/mcp`
  [![Gluo MCP connector](https://glama.ai/mcp/connectors/dev.gluo/gluo/badges/score.svg)](https://glama.ai/mcp/connectors/dev.gluo/gluo)
  🔓 - Free agent tools: click through apps in a real browser, extract web pages, check sites, domains and dependencies.
- [GO AI Tools](https://goaichat.app/mcp-tools) `https://goaichat.app/mcp-tools/mcp`
  [![GO AI Tools MCP connector](https://glama.ai/mcp/connectors/app.goaichat/tools/badges/score.svg)](https://glama.ai/mcp/connectors/app.goaichat/tools)
  🔓 - 31 deterministic tools: image conversion, EXIF stripping, App Store assets, colour maths.
- [Globalping](https://globalping.io) `https://mcp.globalping.dev/mcp`
  🔐 - Run ping, traceroute, DNS, and HTTP checks from a global probe network.
- [Goldsky Docs](https://docs.goldsky.com/mcp-server) `https://docs.goldsky.com/mcp`
  [![Goldsky Docs MCP connector](https://glama.ai/mcp/connectors/com.goldsky/docs/badges/score.svg)](https://glama.ai/mcp/connectors/com.goldsky/docs)
  🔓 - Search and read Goldsky docs: wallet Feeds APIs, prebuilt onchain datasets, Turbo pipelines, subgraphs, Edge RPC.
- [GradeAtlas MCP](https://gradeatlas.org) `https://zhitmyoghxfwqcprrqjf.supabase.co/functions/v1/mcp`
  [![GradeAtlas MCP MCP connector](https://glama.ai/mcp/connectors/io.github.Aziz0346/gradeatlas/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Aziz0346/gradeatlas)
  🔓 - Convert grades between 1,159 grading systems in 246 countries to the US 4.0 GPA scale, plus university search.
- [Grandet](https://grandet.ai) `https://grandet.ai/mcp`
  [![Grandet MCP connector](https://glama.ai/mcp/connectors/io.github.hanzohanzhe/grandet/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hanzohanzhe/grandet)
  🔓 - Finds the cheapest API relay or provider for any model from a weekly price directory, plus free credits.
- [GreatWait](https://greatwait.dev/) `https://api.greatwait.dev/mcp`
  [![GreatWait MCP connector](https://glama.ai/mcp/connectors/dev.greatwait/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.greatwait/mcp)
  🔐 - Schedule one-off or recurring HTTPS callbacks, inspect delivery history, and cancel scheduled work.
- [Gydmation](https://gydmation.com/mcp-server) `https://gydmation-relay.gydmationai.workers.dev/mcp`
  [![Gydmation MCP connector](https://glama.ai/mcp/connectors/io.github.hacrootechnologies/gydmation/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hacrootechnologies/gydmation)
  🔐 - Build, check and fix n8n workflows: 1,100+ node definitions, curated templates and a validator.
- [HALLUX](https://blvkware.dev/hallux/) `https://api.blvkware.dev/hallux/mcp`
  [![HALLUX MCP connector](https://glama.ai/mcp/connectors/dev.blvkware/hallux/badges/score.svg)](https://glama.ai/mcp/connectors/dev.blvkware/hallux)
  🔓 - Check that a package, module or DOI exists in its registry before an agent installs, imports or cites it.
- [Heard](https://heard.dev) `https://api.heard.dev/v1/mcp/agent`
  [![Heard MCP connector](https://glama.ai/mcp/connectors/dev.heard/heard/badges/score.svg)](https://glama.ai/mcp/connectors/dev.heard/heard)
  🔐 - Cloud agents report progress that Heard speaks on your Mac, and pick up the replies you send back.
- [Helpful Mods Catalog](https://helpfulmods.com/) `https://account.helpfulmods.com/api/mcp/catalog`
  [![Helpful Mods Catalog MCP connector](https://glama.ai/mcp/connectors/com.helpfulmods.account/helpful-mods-catalog/badges/score.svg)](https://glama.ai/mcp/connectors/com.helpfulmods.account/helpful-mods-catalog)
  🔓 - Search source mods, read setup requirements, and prepare a cart for human checkout.
- [Hexum](https://hexum.dev) `https://hexum.dev/mcp`
  [![Hexum MCP connector](https://glama.ai/mcp/connectors/dev.hexum/hexum/badges/score.svg)](https://glama.ai/mcp/connectors/dev.hexum/hexum)
  🔑 - Shrink agent prompts, block forbidden imports without calling a model, and review PRs; zero data retention.
- [HopBase](https://hop-base.com/en/docs/getting-started/ai-agent) `https://api.hop-base.com/mcp`
  [![HopBase MCP connector](https://glama.ai/mcp/connectors/com.hop-base/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.hop-base/mcp)
  🔓 - Read-only tools for a HopBase AI gateway key: models, limits, docs search, balance and usage; calls need a key.
- [HTML/CSS to Image](https://htmlcsstoimage.com) `https://mcp.hcti.io`
  [![HTML/CSS to Image MCP connector](https://glama.ai/mcp/connectors/io.github.htmlcsstoimage/html-css-to-image/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.htmlcsstoimage/html-css-to-image)
  🔐 - Capture website screenshots, render HTML/CSS, and make templated graphics as images or PDFs.
- [HTTPfy](https://httpfy.io/agents) `https://httpfy.io/mcp`
  [![HTTPfy MCP connector](https://glama.ai/mcp/connectors/io.httpfy/httpfy/badges/score.svg)](https://glama.ai/mcp/connectors/io.httpfy/httpfy)
  🔓 - Free DNS, SPF/DKIM/DMARC, TLS certificate, WHOIS, IP/ASN, blocklist, ping, traceroute and port checks.
- [IceShore](https://iceshore.ai/) `https://mcp.iceshore.ai/mcp`
  [![IceShore MCP connector](https://glama.ai/mcp/connectors/ai.iceshore/iceshore/badges/score.svg)](https://glama.ai/mcp/connectors/ai.iceshore/iceshore)
  🔓 - Make your AI better at system maintenance. Prompts your AI to organize use cases behind each system.
- [Iminify](https://www.iminify.com/ai-agents) `https://www.iminify.com/mcp`
  [![Iminify MCP connector](https://glama.ai/mcp/connectors/com.iminify/iminify/badges/score.svg)](https://glama.ai/mcp/connectors/com.iminify/iminify)
  🔐 - Compress, convert and resize images, and scan web pages for every image they load.
- [InferIndex](https://inferindex.dev) `https://mcp.inferindex.dev/mcp`
  [![InferIndex MCP connector](https://glama.ai/mcp/connectors/io.github.InferIndex/inferindex/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.InferIndex/inferindex)
  🔓 - Compare LLM API prices across 150+ providers: cheapest offer, price history and cost estimates.
- [Ionic Framework MCP Server by Capawesome](https://capawesome.io/docs/ai/mcp/ionic-framework/) `https://ionic-framework-mcp.capawesome.io/mcp`
  [![Ionic Framework MCP connector](https://glama.ai/mcp/connectors/io.capawesome/ionic-framework-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.capawesome/ionic-framework-mcp)
  🔓 - Unofficial: search the Ionic Framework docs for v8 and v9, with the component API and usage examples.
- [ipvolt Proxy Toolkit](https://ipvolt.com/mcp) `https://mcp.ipvolt.com/mcp`
  [![ipvolt Proxy Toolkit MCP connector](https://glama.ai/mcp/connectors/com.ipvolt.mcp/ipvolt-proxy-toolkit/badges/score.svg)](https://glama.ai/mcp/connectors/com.ipvolt.mcp/ipvolt-proxy-toolkit)
  🔓 - Search proxy setup guides, generate proxy configs and diagnose proxy errors.
- [JSON to TOON](https://json2toon.co/mcp) `https://json2toon.co/api/mcp`
  [![JSON to TOON MCP connector](https://glama.ai/mcp/connectors/io.github.karta9821/json2toon/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.karta9821/json2toon)
  🔓 - Convert JSON to TOON, a compact format that uses fewer LLM tokens, and decode TOON back to JSON.
- [Keelen](https://keelen.ai/mcp-server/) `https://keelen.ai/mcp`
  [![Keelen MCP connector](https://glama.ai/mcp/connectors/io.github.jamie7893/keelen/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jamie7893/keelen)
  🔓 - Steer GitHub coding from chat: requests, roadmaps and PR review. Tokenless signup; bearer key for workspace tools.
- [Klarhimmel UI](https://ui.klarhimmel.com/get-started/mcp) `https://ui.klarhimmel.com/mcp`
  [![Klarhimmel UI MCP connector](https://glama.ai/mcp/connectors/com.klarhimmel.ui/klarhimmel-ui/badges/score.svg)](https://glama.ai/mcp/connectors/com.klarhimmel.ui/klarhimmel-ui)
  🔓 - Search 300+ shadcn-compatible blocks, templates and components and get each one's install command.
- [Koppar](https://koppar.ai) `https://app.koppar.ai/mcp`
  [![Koppar MCP connector](https://glama.ai/mcp/connectors/ai.koppar.app/koppar/badges/score.svg)](https://glama.ai/mcp/connectors/ai.koppar.app/koppar)
  🔓 - Design a KiCad PCB from a prompt: parts, schematic checks, routing, KiCad DRC, Gerbers. Free key for tool calls.
- [landmine](https://landmine.tech) `https://landmine.tech/mcp`
  [![landmine MCP connector](https://glama.ai/mcp/connectors/tech.landmine/landmine/badges/score.svg)](https://glama.ai/mcp/connectors/tech.landmine/landmine)
  🔓 - Open GitHub issues filed against exact npm and PyPI versions, with the workaround from each thread.
- [Launch Ready](https://uselaunchready.com) `https://uselaunchready.com/api/mcp`
  [![Launch Ready MCP connector](https://glama.ai/mcp/connectors/io.github.ochodigits/launch-ready/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ochodigits/launch-ready)
  🔐 - Deterministic pre-launch website QA: scan a URL, get a readiness score and launch blockers with evidence.
- [Loadster](https://loadster.com/manual/ai-agents/) `https://api.loadster.com/mcp`
  [![Loadster MCP connector](https://glama.ai/mcp/connectors/com.loadster/loadster-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.loadster/loadster-mcp)
  🔐 - Run load tests and synthetic monitors, including Playwright scripts, and analyze results.
- [Local AI Picks](https://localaipicks.com/docs/mcp) `https://localaipicks.com/mcp`
  [![Local AI Picks MCP connector](https://glama.ai/mcp/connectors/com.localaipicks/localaipicks/badges/score.svg)](https://glama.ai/mcp/connectors/com.localaipicks/localaipicks)
  🔓 - Find open-weight AI models that fit your hardware, with weight sizes, memory and sources.
- [MCP Checkup](https://mcpcheckup.com) `https://mcpcheckup.com/mcp`
  [![MCP Checkup MCP connector](https://glama.ai/mcp/connectors/com.mcpcheckup/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.mcpcheckup/mcp)
  🔓 - Look up, check and monitor public MCP servers before connecting, with signed attestations.
- [McpStamp Check](https://www.mcpstamp.com/check/) `https://mcp.zovo.one/stamp/mcp`
  [![McpStamp Check MCP connector](https://glama.ai/mcp/connectors/io.github.theluckystrike/mcpstamp-check/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.theluckystrike/mcpstamp-check)
  🔓 - Scores any remote MCP server for Claude, ChatGPT, Gemini and MCP Registry readiness, with a fix per failed check.
- [MemorySync Documentation](https://docs.memorysync.io/mcp/overview) `https://docs.memorysync.io/mcp`
  [![MemorySync Docs MCP connector](https://glama.ai/mcp/connectors/io.memorysync/docs/badges/score.svg)](https://glama.ai/mcp/connectors/io.memorysync/docs)
  🔓 - Search and read MemorySync's API, SDK and integration docs.
- [Metabind Banking Assistant (demo)](https://www.metabind.ai) `https://mcp.metabind.ai/IgJH0BzIn4LlfnCbcDc7/projects/GLbHk5i3GLlIYcF63XFl`
  [![Metabind Banking Assistant MCP connector](https://glama.ai/mcp/connectors/ai.metabind/banking-assistant/badges/score.svg)](https://glama.ai/mcp/connectors/ai.metabind/banking-assistant)
  🔓 - Demo MCP App with sample finance data: net worth, spending, and subscriptions as interactive UI cards.
- [Metabind Docs](https://docs.metabind.ai) `https://docs.metabind.ai/mcp`
  [![Metabind Docs MCP connector](https://glama.ai/mcp/connectors/ai.metabind/docs/badges/score.svg)](https://glama.ai/mcp/connectors/ai.metabind/docs)
  🔓 - Search and read the Metabind docs: MCP Apps, BindJS, the SDKs, the CLI, and the APIs.
- [MiniTools](https://minitools.bigfloppy.net) `https://minitools.bigfloppy.net/mcp`
  [![MiniTools MCP connector](https://glama.ai/mcp/connectors/net.bigfloppy.minitools/minitools/badges/score.svg)](https://glama.ai/mcp/connectors/net.bigfloppy.minitools/minitools)
  🔓 - Six tiny devtools (slugs, timestamps, case, hash, base64, UUID) over GET endpoints and MCP; no key needed.
- [Model Tested](https://modeltested.com/mcp/) `https://modeltested.com/mcp`
  [![Model Tested MCP connector](https://glama.ai/mcp/connectors/com.modeltested/llm-benchmarks/badges/score.svg)](https://glama.ai/mcp/connectors/com.modeltested/llm-benchmarks)
  🔓 - Independent test scores for open-weight LLMs: find the best model for your GPU or Mac, compare models.
- [mumo](https://mumo.chat) `https://mumo.chat/api/mcp`
  [![mumo MCP connector](https://glama.ai/mcp/connectors/chat.mumo/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/chat.mumo/mcp)
  🔓 - Ask Claude, GPT, Grok and more, then see where their answers agree and where they challenge each other.
- [NAIF Gravity](https://naifgravity.com/) `https://naifgravity.com/mcp`
  [![NAIF Gravity MCP connector](https://glama.ai/mcp/connectors/io.github.naief9961-tech/naif-fixgraph/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.naief9961-tech/naif-fixgraph)
  🔓 - Diagnose MCP, x402, API auth and webhook failures, then request bounded repair through the existing NAIF service.
- [naxytra](https://naxytra.com/agents) `https://xytara-mcp-executor.onrender.com/mcp`
  [![naxytra MCP connector](https://glama.ai/mcp/connectors/com.naxytra/xytara-mcp-executor/badges/score.svg)](https://glama.ai/mcp/connectors/com.naxytra/xytara-mcp-executor)
  🔓 - Deterministic EVM/crypto, x402 and text tools (hashing, ABI, EIP-712, Merkle); pay per call in USDC on Base.
- [NoMac](https://nomac.app) `https://mcp.nomac.app/mcp`
  [![NoMac MCP connector](https://glama.ai/mcp/connectors/app.nomac/nomac/badges/score.svg)](https://glama.ai/mcp/connectors/app.nomac/nomac)
  🔐 - Real cloud Macs with Xcode: start one, run commands, build and test iOS apps, ship to TestFlight.
- [Offline Protocol](https://www.offlineprotocol.com/docs/tools/overview) `https://mcp.offlineprotocol.com/public/mcp`
  [![Offline Protocol MCP connector](https://glama.ai/mcp/connectors/com.offlineprotocol/hosted/badges/score.svg)](https://glama.ai/mcp/connectors/com.offlineprotocol/hosted)
  🔓 - Find Offline Protocol SDK packages, integration guides and workflows for apps that keep working without the internet.
- [Olbrain Alchemist](https://docs.olbrain.com/alchemist) `https://alchemist.olbrain.com/mcp/`
  [![Olbrain Alchemist MCP connector](https://glama.ai/mcp/connectors/com.olbrain/alchemist/badges/score.svg)](https://glama.ai/mcp/connectors/com.olbrain/alchemist)
  🔐 - Build, test and publish Olbrain AI agents (chat agents, jobs, teams), with an approval card before anything goes live.
- [Omnara](https://www.omnara.com) `https://app.omnara.com/mcp`
  [![Omnara MCP connector](https://glama.ai/mcp/connectors/com.omnara/omnara/badges/score.svg)](https://glama.ai/mcp/connectors/com.omnara/omnara)
  🔐 - Launch AI agents on any model and machine, message them, read their events, and approve their tool calls.
- [Omniyond](https://omniyond.com/#mcp) `https://omniyond.com/mcp`
  [![Omniyond MCP connector](https://glama.ai/mcp/connectors/com.omniyond/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.omniyond/mcp)
  🔑 - Schedule HTTP calls, screenshots, PDFs, OG images, QR codes, short links and page extract on one API key.
- [OneStore](https://www.onestore.so/en/mcp) `https://www.onestore.so/api/mcp`
  [![OneStore MCP connector](https://glama.ai/mcp/connectors/so.onestore/onestore/badges/score.svg)](https://glama.ai/mcp/connectors/so.onestore/onestore)
  🔐 - Manage App Store and Google Play listings, screenshots, builds, releases and reviews; store writes are approval-gated.
- [OpenRouter](https://openrouter.ai) `https://mcp.openrouter.ai/mcp`
  [![OpenRouter MCP connector](https://glama.ai/mcp/connectors/ai.openrouter.mcp/open-router/badges/score.svg)](https://glama.ai/mcp/connectors/ai.openrouter.mcp/open-router)
  🔐 - Look up OpenRouter model metadata and pricing, and run completions.
- [OtaKit](https://otakit.app) `https://console.otakit.app/mcp`
  [![OtaKit MCP connector](https://glama.ai/mcp/connectors/io.github.OtaKit/otakit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.OtaKit/otakit)
  🔐 - Ship over-the-air updates for Capacitor apps: publish releases with approval, control rollouts, read health, revert.
- [OutilsIA](https://outilsia.fr/chatgpt-ia-locale) `https://outilsia.fr/mcp`
  [![OutilsIA MCP connector](https://glama.ai/mcp/connectors/fr.outilsia/local-ai-advisor/badges/score.svg)](https://glama.ai/mcp/connectors/fr.outilsia/local-ai-advisor)
  🔓 - Local AI advisor: PC fit, Ollama models, dated benchmarks and upgrade decisions, read-only.
- [Pandus Accessibility](https://pandus.online/en/accessibility-mcp-server) `https://pandus.online/mcp`
  [![Pandus Accessibility MCP connector](https://glama.ai/mcp/connectors/online.pandus/accessibility/badges/score.svg)](https://glama.ai/mcp/connectors/online.pandus/accessibility)
  🔓 - Explains WCAG 2.2 accessibility rules for free; with an account, what to fix on your sites and new checks.
- [OverlayQA](https://overlayqa.com/mcp/) `https://api.overlayqa.com/mcp`
  [![OverlayQA MCP connector](https://glama.ai/mcp/connectors/com.overlayqa/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.overlayqa/mcp)
  🔐 - Runs accessibility, contrast and design-token audits on any URL and files QA issues in OverlayQA.
- [PartReel](https://partreel.com) `https://mcp.partreel.com/mcp`
  🔓 - Search and fetch 21k+ verified KiCad parts with symbol, footprint and 3D model for PCB design; CC-BY-4.0.
- [PCBEditor](https://pcbeditor.com/mcp) `https://mcp.pcbeditor.com/mcp`
  [![PCBEditor MCP connector](https://glama.ai/mcp/connectors/com.pcbeditor/pcbeditor/badges/score.svg)](https://glama.ai/mcp/connectors/com.pcbeditor/pcbeditor)
  🔐 - Design, route, design-rule check and export manufacturable PCBs (Gerber, KiCad) from a plain-language description.
- [PDFOven](https://pdfoven.com) `https://pdfoven.com/mcp`
  [![PDFOven MCP connector](https://glama.ai/mcp/connectors/com.pdfoven/pdfoven/badges/score.svg)](https://glama.ai/mcp/connectors/com.pdfoven/pdfoven)
  🔓 - Render PDFs and PNG images from HTML, Markdown, URLs or Handlebars templates; tools need a free key (100 renders/mo).
- [Perq](https://perq.sh/agents) `https://perq.sh/mcp`
  [![Perq MCP connector](https://glama.ai/mcp/connectors/sh.perq/perq/badges/score.svg)](https://glama.ai/mcp/connectors/sh.perq/perq)
  🔓 - Find verified free AI credits, free tiers and startup programs, each with a source link and last-verified date.
- [Ply UI](https://ply-ui.com) `https://mcp.ply-ui.com/mcp`
  [![Ply UI MCP connector](https://glama.ai/mcp/connectors/io.github.ply-ui-ng/ply-ui/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ply-ui-ng/ply-ui)
  🔓 - List, search and inspect copy-in Angular + Tailwind components for coding agents.
- [PostLaunchKit Directory](https://postlaunchkit.com/directory/) `https://postlaunchkit.com/mcp`
  [![PostLaunchKit Directory MCP connector](https://glama.ai/mcp/connectors/com.postlaunchkit/post-launch-kit-directory/badges/score.svg)](https://glama.ai/mcp/connectors/com.postlaunchkit/post-launch-kit-directory)
  🔓 - Search a human-reviewed directory of free tools and projects, including AI agent tooling, or suggest a new one.
- [Postman](https://postman.com) `https://mcp.postman.com/mcp`
  🔐 - Work with Postman collections, environments, and APIs.
- [Prompeteer](https://prompeteer.ai) `https://prompeteer.ai/mcp`
  [![Prompeteer MCP connector](https://glama.ai/mcp/connectors/ai.prompeteer/prompeteer/badges/score.svg)](https://glama.ai/mcp/connectors/ai.prompeteer/prompeteer)
  🔐 - Generates contextual prompts and agent skills for 140+ AI platforms, with a 16-dimension Prompt Score.
- [Proxlai](https://proxlai.com) `https://proxlai.com/api/mcp`
  [![Proxlai MCP connector](https://glama.ai/mcp/connectors/com.proxlai/proxlai/badges/score.svg)](https://glama.ai/mcp/connectors/com.proxlai/proxlai)
  🔓 - Look up and compare verified, dated prices for 231 AI APIs in 38 markets, ranked in one unit per market.
- [qarunbook](https://qarunbook.com) `https://qarunbook.com/api/mcp`
  [![qarunbook MCP connector](https://glama.ai/mcp/connectors/io.github.Ifeanyiejindu/qarunbook/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Ifeanyiejindu/qarunbook)
  🔑 - Shared app-testing runbook: read the plan, record results per platform and raise issues.
- [QuasarUI](https://www.quasarui.com/documentation/mcp-server) `https://www.quasarui.com/mcp`
  [![QuasarUI MCP connector](https://glama.ai/mcp/connectors/com.quasarui/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.quasarui/mcp)
  🔓 - Search Quasar Framework (Vue) UI Components and fetch their source; an optional key unlocks Paid ones.
- [Razi Tools](https://www.razi.pro/developer) `https://www.razi.pro/api/mcp`
  [![Razi Tools MCP connector](https://glama.ai/mcp/connectors/io.github.razikallayi/razi-tools/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.razikallayi/razi-tools)
  🔓 - File and text tools: merge, split and compress PDFs, OCR, image compression, QR codes and JWTs.
- [RelayDesk](https://getrelaydesk.space) `https://relay-desk-mjq6.vercel.app/mcp`
  [![RelayDesk MCP connector](https://glama.ai/mcp/connectors/io.github.Lakshay-24/relaydesk/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Lakshay-24/relaydesk)
  🔐 - Operate explicitly paired computers, servers and VMs: files, commands, logs and troubleshooting.
- [ReMCP](https://remcp.site) `https://remcp.site/mcp`
  [![ReMCP MCP connector](https://glama.ai/mcp/connectors/site.remcp/re-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/site.remcp/re-mcp)
  🔐 - Remote access to paired computers: files, terminals, screenshots, search, and processes.
- [RepoAlerts](https://repoalerts.com/mcp) `https://repoalerts.com/mcp`
  [![RepoAlerts MCP connector](https://glama.ai/mcp/connectors/com.repoalerts/repo-alerts/badges/score.svg)](https://glama.ai/mcp/connectors/com.repoalerts/repo-alerts)
  🔓 - Rising GitHub repos with fake stars filtered out: search, trending, repo pages and alternatives.
- [Resume-effect reconciliation for checkpointed agent runs](https://textforagents.com/products/resume-effect-reconciliation/) `https://textforagents.com/products/resume-effect-reconciliation/mcp`
  [![Resume-effect reconciliation for checkpointed agent runs MCP connector](https://glama.ai/mcp/connectors/com.textforagents/resume-effect-reconciliation/badges/score.svg)](https://glama.ai/mcp/connectors/com.textforagents/resume-effect-reconciliation)
  🔑 - Signed resume verdicts that reconcile landed side effects before checkpointed agent runs resume.
- [Review Times](https://reviewtimes.fyi) `https://reviewtimes.fyi/mcp`
  [![Review Times MCP connector](https://glama.ai/mcp/connectors/fyi.reviewtimes/review-times/badges/score.svg)](https://glama.ai/mcp/connectors/fyi.reviewtimes/review-times)
  🔓 - Live review times for AI app, connector and plugin stores: ChatGPT, Claude, Muse, Grok, Cursor and more.
- [Routebase](https://routebase.dev/mcp-server/) `https://mcp.routebase.dev`
  [![Routebase MCP connector](https://glama.ai/mcp/connectors/dev.routebase.mcp/routebase/badges/score.svg)](https://glama.ai/mcp/connectors/dev.routebase.mcp/routebase)
  🔐 - Design, mock, test, document and monitor your APIs from one living OpenAPI spec.
- [Runx](https://runx.ai) `https://api.runx.ai/mcp`
  [![Runx MCP connector](https://glama.ai/mcp/connectors/ai.runx/runx/badges/score.svg)](https://glama.ai/mcp/connectors/ai.runx/runx)
  🔓 - Search the skill catalog and inspect a skill's manifest, authority, and install command.
- [Sato Hub](https://satohub.ai/mcp) `https://satohub.ai/api/mcp`
  [![Sato Hub MCP connector](https://glama.ai/mcp/connectors/ai.satohub/onchain-agents/badges/score.svg)](https://glama.ai/mcp/connectors/ai.satohub/onchain-agents)
  🔓 - Search a scored index of crypto-agent tooling, then preflight a repo, package, endpoint or token.
- [Screwtape.ai](https://screwtape.ai) `https://screwtape.ai/mcp`
  [![Screwtape.ai MCP connector](https://glama.ai/mcp/connectors/ai.screwtape/screwtape/badges/score.svg)](https://glama.ai/mcp/connectors/ai.screwtape/screwtape)
  🔓 - Pass, fail, or retry verdicts on agent output, plus multi-agent consensus scoring and false-consensus risk.
- [Settlens](https://settlens.com) `https://settlens.com/mcp`
  [![Settlens MCP connector](https://glama.ai/mcp/connectors/com.settlens/settlens/badges/score.svg)](https://glama.ai/mcp/connectors/com.settlens/settlens)
  🔓 - Evaluate x402 V2 payment requirements against spending policies, without signing or sending payments.
- [Show It Works](https://showitworks.app) `https://showitworks.app/api/mcp`
  [![Show It Works MCP connector](https://glama.ai/mcp/connectors/app.showitworks/show-it-works/badges/score.svg)](https://glama.ai/mcp/connectors/app.showitworks/show-it-works)
  🔓 - Public tool discovery; uploading verification videos and sharing viewer links require an API key.
- [sinatra.dev](https://www.sinatra.dev) `https://api.sinatra.dev/v1/mcp`
  [![sinatra.dev MCP connector](https://glama.ai/mcp/connectors/dev.sinatra/sinatra/badges/score.svg)](https://glama.ai/mcp/connectors/dev.sinatra/sinatra)
  🔐 - Hosted coding agent: start, follow, reply to and stop tasks that open GitHub pull requests.
- [SkillAgent](https://skillagent.dev) `https://skillagent.dev/mcp`
  [![SkillAgent MCP connector](https://glama.ai/mcp/connectors/dev.skillagent/skills/badges/score.svg)](https://glama.ai/mcp/connectors/dev.skillagent/skills)
  🔓 - Search, rank and get install steps for AI agent skills, rules files and MCP servers indexed from GitHub.
- [Slop Store](https://slopapp.store) `https://slopapp.store/mcp`
  [![Slop Store MCP connector](https://glama.ai/mcp/connectors/store.slopapp/slopstore/badges/score.svg)](https://glama.ai/mcp/connectors/store.slopapp/slopstore)
  🔓 - Agents publish AI-made apps that anyone can play in the browser, and search, vote on and review them.
- [SlopScore](https://slopscore.org) `https://slopscore.org/mcp`
  [![SlopScore MCP connector](https://glama.ai/mcp/connectors/org.slopscore/slopscore/badges/score.svg)](https://glama.ai/mcp/connectors/org.slopscore/slopscore)
  🔓 - Browse, search and scan a public leaderboard of AI-generated GitHub repos; voting needs a GitHub token.
- [SMSPVA Documentation](https://smspva.com/) `https://mcp.smspva.com/docs`
  [![SMSPVA Documentation MCP connector](https://glama.ai/mcp/connectors/com.smspva.mcp/smspva-documentation/badges/score.svg)](https://glama.ai/mcp/connectors/com.smspva.mcp/smspva-documentation)
  🔓 - Search SMSPVA API guides and code examples for Activation V2, Rental and Private Email in English, Spanish and Chinese.
- [Software Sausage](https://softwaresausage.com/mcp) `https://softwaresausage.com/api/mcp`
  [![Software Sausage MCP connector](https://glama.ai/mcp/connectors/io.github.pinkpwningclub/recipes/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.pinkpwningclub/recipes)
  🔓 - Search independent software and read-only agent workflows with roles, checks and safety boundaries.
- [Specpack](https://prompt-generator-website.com/mcp-server) `https://prompt-generator-website.com/mcp`
  [![Specpack MCP connector](https://glama.ai/mcp/connectors/io.github.THE-KIPDEV/specpack/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.THE-KIPDEV/specpack)
  🔓 - Turn a project description into a full build spec plus AGENTS.md and CLAUDE.md files.
- [Speedbot.dev](https://speedbot.dev) `https://speedbot.dev/mcp/core`
  [![Speedbot.dev MCP connector](https://glama.ai/mcp/connectors/io.github.ulasarslan6262-ui/speedbot/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ulasarslan6262-ui/speedbot)
  🔓 - Preview free Hire plans for independent AI agent code review, research, and data checks.
- [StoreFast](https://storefast.app/docs/mcp) `https://storefast.app/mcp`
  [![StoreFast MCP connector](https://glama.ai/mcp/connectors/io.github.LegendarySpy/storefast/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.LegendarySpy/storefast)
  🔐 - Publish MSIX updates to the Microsoft Store, translate release notes, edit listings, and read downloads and reviews.
- [Supero](https://supero.dev) `https://api.supero.dev/mcp/v1/messages`
  [![Supero MCP connector](https://glama.ai/mcp/connectors/io.github.supero-platform/supero/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.supero-platform/supero)
 🔓 - Define schemas, CRUD, RBAC and one-call deploys for multi-tenant apps from an AI editor; tool calls need a key.
- [Synap](https://synap.linkrra.com) `https://pool.linkrra.com/mcp`
  [![Synap MCP connector](https://glama.ai/mcp/connectors/com.linkrra/synap/badges/score.svg)](https://glama.ai/mcp/connectors/com.linkrra/synap)
  🔓 - OpenAI-compatible inference on open models: list models and prices, estimate cost, run chat billed per token.
- [tealmac UI](https://ui.tealmac.com) `https://ui.tealmac.com/mcp`
  [![tealmac UI MCP connector](https://glama.ai/mcp/connectors/com.tealmac/ui/badges/score.svg)](https://glama.ai/mcp/connectors/com.tealmac/ui)
  🔓 - Search the shadcn registry, read props and get install commands for 554 free React components.
- [TechFabric](https://www.techfabric.com) `https://www.techfabric.com/mcp`
  [![TechFabric MCP connector](https://glama.ai/mcp/connectors/com.techfabric/techfabric/badges/score.svg)](https://glama.ai/mcp/connectors/com.techfabric/techfabric)
  🔓 - Search and read TechFabric's Databricks and AI content: blog posts with FAQs, services, case studies.
- [Termalin](https://termal.in) `https://termal.in/mcp`
  [![Termalin MCP connector](https://glama.ai/mcp/connectors/in.termal/termalin-web/badges/score.svg)](https://glama.ai/mcp/connectors/in.termal/termalin-web)
  🔐 - Run commands and read or write files over SSH/SFTP on your enrolled servers.
- [TheySaid](https://www.theysaid.io) `https://ai.theysaid.io/api/mcp`
  [![TheySaid MCP connector](https://glama.ai/mcp/connectors/io.theysaid.ai/they-said/badges/score.svg)](https://glama.ai/mcp/connectors/io.theysaid.ai/they-said)
  🔐 - Search customer feedback and run AI usability tests on any website or design.
- [The Aggregate](https://theaggregate.ai/mcp) `https://theaggregate.ai/mcp`
  [![The Aggregate MCP connector](https://glama.ai/mcp/connectors/ai.theaggregate/the-aggregate/badges/score.svg)](https://glama.ai/mcp/connectors/ai.theaggregate/the-aggregate)
  🔓 - LLM rankings fitted across public benchmarks: leaderboard, model profiles, comparisons and source-linked scores.
- [Toolbox](https://toolbox.allthepossibles.com) `https://toolbox.allthepossibles.com/mcp`
  [![Toolbox MCP connector](https://glama.ai/mcp/connectors/com.allthepossibles/toolbox/badges/score.svg)](https://glama.ai/mcp/connectors/com.allthepossibles/toolbox)
  🔓 - Thirteen small deterministic tools for agent builders, from CLAUDE.md lint to JWT decoding.
- [TidyData Tools](https://developers.tidydata.workers.dev/) `https://tidydata-api.tidydata.workers.dev/mcp`
  [![TidyData Tools MCP connector](https://glama.ai/mcp/connectors/dev.workers.tidydata.tidydata-api/tidy-data-tools/badges/score.svg)](https://glama.ai/mcp/connectors/dev.workers.tidydata.tidydata-api/tidy-data-tools)
  🔓 - Everyday data tools: public holidays, currency rates, time zones, airports, nutrition, QR codes, DNS and WHOIS.
- [ToolForte](https://toolforte.com/mcp) `https://toolforte.com/api/mcp`
  [![ToolForte MCP connector](https://glama.ai/mcp/connectors/io.github.Toinedotcom/toolforte/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Toinedotcom/toolforte)
  🔓 - IBAN/VAT/BSN checks, Dutch tax and dates, cron, regex, conversions and PDF or screenshot rendering.
- [Tools That Don't Upload](https://toolsthatdontupload.com) `https://toolsthatdontupload.com/mcp`
  [![Tools That Don't Upload MCP connector](https://glama.ai/mcp/connectors/com.toolsthatdontupload/tools/badges/score.svg)](https://glama.ai/mcp/connectors/com.toolsthatdontupload/tools)
  🔓 - Text, data, hashing, encoding, date, PDF, network and HWP/HWPX tools. Requests processed in memory, not stored.
- [Traffic Parrot](https://trafficparrot.com/ai/agent-trial.html) `https://mcp.trafficparrot.com/`
  [![Traffic Parrot MCP connector](https://glama.ai/mcp/connectors/com.trafficparrot/public/badges/score.svg)](https://glama.ai/mcp/connectors/com.trafficparrot/public)
  🔓 - Traffic Parrot simulates APIs and messaging. Request or withdraw a trial, read docs, send feedback.
- [TweakThis](https://tweakthis.io/docs/mcp) `https://tweakthis.io/mcp`
  [![TweakThis MCP connector](https://glama.ai/mcp/connectors/io.tweakthis/tweak-this/badges/score.svg)](https://glama.ai/mcp/connectors/io.tweakthis/tweak-this)
  🔐 - Read, claim and resolve UI feedback left on your website: the note, element selectors and a screenshot.
- [UI Verify](https://uiverify.ai) `https://uiverify.ai/api/mcp`
  [![UI Verify MCP connector](https://glama.ai/mcp/connectors/ai.uiverify/ui-verify/badges/score.svg)](https://glama.ai/mcp/connectors/ai.uiverify/ui-verify)
  🔓 - Audit a web page for accessibility and layout issues.
- [Use This Skill](https://usethisskill.com) `https://usethisskill.com/mcp`
  [![Use This Skill MCP connector](https://glama.ai/mcp/connectors/com.usethisskill/skills/badges/score.svg)](https://glama.ai/mcp/connectors/com.usethisskill/skills)
  🔓 - Search 1,967 agent skills, read side-by-side proofs, and check any skill for risky patterns.
- [Unblocked](https://getunblocked.com/unblocked-mcp/) `https://getunblocked.com/api/mcpsse`
  [![Unblocked MCP connector](https://glama.ai/mcp/connectors/com.getunblocked/unblocked-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.getunblocked/unblocked-mcp)
  🔐 - Give coding agents organizational context from code, docs, issues, and conversations.
- [Unipile](https://developer.unipile.com/docs/mcp) `https://developer.unipile.com/mcp?branch=v2.0`
  [![Unipile MCP connector](https://glama.ai/mcp/connectors/com.unipile.developer/unipile/badges/score.svg)](https://glama.ai/mcp/connectors/com.unipile.developer/unipile)
  🔓 - Reads and calls the Unipile API for LinkedIn, WhatsApp, Instagram, Telegram, email and calendar from coding agents.
- [UnitConvertLab](https://unitconvertlab.com/mcp) `https://nawpscdfwillbgkbupeo.supabase.co/functions/v1/mcp`
  [![UnitConvertLab MCP MCP connector – tool definition quality and endpoint health on Glama](https://glama.ai/mcp/connectors/io.github.Aziz0346/unitconvertlab/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Aziz0346/unitconvertlab)
  🔓 - Convert between 460+ units across 36 categories including regional South Asian land units with full provenance.
- [UXMachine](https://uxmachine.app/en/agents?via=awesome) `https://uxmachine.app/mcp`
  [![UXMachine MCP connector](https://glama.ai/mcp/connectors/io.github.qtorb/uxmachine/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.qtorb/uxmachine)
  🔐 - Measures your site in a real browser and returns verifiable observations, with evidence and limits.
- [Vibe Shipped](https://vibeshipped.io/agents) `https://vibeshipped.io/api/mcp`
  [![Vibe Shipped MCP connector](https://glama.ai/mcp/connectors/io.github.sorindecu/vibeshipped/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sorindecu/vibeshipped)
  🔓 - Search sourced, dated facts on AI coding tools, agent harnesses and real apps built with them.
- [VibeFix](https://vibe-fixer.com) `https://vibe-fixer.com/mcp`
  [![VibeFix MCP connector](https://glama.ai/mcp/connectors/com.vibe-fixer/vibefix/badges/score.svg)](https://glama.ai/mcp/connectors/com.vibe-fixer/vibefix)
  🔓 - Triage a broken Lovable, Base44, v0, Bolt or Replit app: the likely cause and the fix.
- [VibeRaven Guides](https://viberaven.dev) `https://viberaven.dev/mcp`
  [![VibeRaven Guides MCP connector](https://glama.ai/mcp/connectors/io.github.ohad6k/viberaven-guides/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ohad6k/viberaven-guides)
  🔓 - Explains VibeRaven findings and returns launch guides and checklists for Vercel + Supabase apps, read-only.
- [Watermelon UI](https://ui.watermelon.sh/developers/mcp) `https://mcp.watermelon.sh/mcp`
  [![Watermelon UI MCP connector](https://glama.ai/mcp/connectors/sh.watermelon/ui/badges/score.svg)](https://glama.ai/mcp/connectors/sh.watermelon/ui)
  🔓 - Search free React, Tailwind and shadcn components, blocks and dashboards and get source plus install commands.
- [WBX Sandbox](https://sandbox.wbx.cz) `https://sandbox.wbx.cz/mcp`
  [![WBX Sandbox MCP connector](https://glama.ai/mcp/connectors/cz.wbx/sandbox/badges/score.svg)](https://glama.ai/mcp/connectors/cz.wbx/sandbox)
  🔐 - Run code in isolated Linux microVMs: commands, files, background jobs and batches with price limits, HTTPS app links.
- [wealth-agent](https://wealth-agent.wealthagent-app.workers.dev) `https://wealth-agent.wealthagent-app.workers.dev/mcp`
  [![wealth-agent MCP connector](https://glama.ai/mcp/connectors/io.github.jukky-source/wealth-agent/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jukky-source/wealth-agent)
  🔓 - Pay-per-call utility tools over x402 plus a free tier: research briefs, CSV cleanup, code review, regex.
- [web3ctx](https://web3ctx.scarai.xyz) `https://mcp.scarai.xyz/mcp`
  [![web3ctx MCP connector](https://glama.ai/mcp/connectors/io.github.FarseenSh/web3ctx/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.FarseenSh/web3ctx)
  🔓 - Version-true web3 context: validated integration recipes, EIPs, ABIs and contract addresses.
- [Webhook Toolkit](https://webhook-toolkit.com) `https://webhook-toolkit.com/mcp`
  [![Webhook Toolkit MCP connector](https://glama.ai/mcp/connectors/io.github.THE-KIPDEV/webhook-toolkit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.THE-KIPDEV/webhook-toolkit)
  🔓 - Capture, read and replay webhook deliveries, and sign or verify webhook signatures.
- [Webskan](https://webskan.com/developers/) `https://webskan.com/mcp`
  [![Webskan MCP connector](https://glama.ai/mcp/connectors/io.github.kamilobstawskiagent-ux/webskan/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.kamilobstawskiagent-ux/webskan)
  🔓 - Audit a live website (Lighthouse, SEO, accessibility, security headers, broken links) and re-check what was fixed.
- [XF Model Source](https://xfms.xpansion.dev) `https://xfms.xpansion.dev/mcp`
  [![XF Model Source MCP connector](https://glama.ai/mcp/connectors/dev.xpansion/xfms/badges/score.svg)](https://glama.ai/mcp/connectors/dev.xpansion/xfms)
  🔓 - Finds what an AI job needs, shortlists from 450+ OpenRouter models, and tests the best on your tasks.
- [mcpserverlist-mcp](https://mcpserverlist.io/) `https://mcpserverlist.io/mcp`
  [![mcpserverlist-mcp MCP connector](https://glama.ai/mcp/connectors/io.github.sudomichael/mcpserverlist-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sudomichael/mcpserverlist-mcp)
  🔓 - Check if your MCP server is ready for MCP directories, then get it submitted.

- [Zambo](https://zambo.dev) `https://zambo.dev/mcp`
  [![Zambo MCP connector](https://glama.ai/mcp/connectors/io.github.zambodotdev/zambo/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.zambodotdev/zambo)
  🔓 - Verifiable work layer for AI: 153 tools, cross-AI handover, and an AER-1 receipt for every job.

### 🛒 <a name="e-commerce"></a>E-Commerce

- [3Descu](https://quote.3descu.com/) `https://zzamnvhadwibvafqcfpd.supabase.co/functions/v1/mcp`
  [![3Descu MCP connector](https://glama.ai/mcp/connectors/io.github.cadi27tech/3descu-quote/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.cadi27tech/3descu-quote)
  🔓 - Quote FDM and SLA 3D printing from an ISO 9001:2015 certified EU factory; measures public STL or OBJ links.
- [10ML Perfume Finder](https://10ml.com) `https://mcp.10ml.com/mcp`
  [![10ML Perfume Finder MCP connector](https://glama.ai/mcp/connectors/com.10ml/perfume-finder/badges/score.svg)](https://glama.ai/mcp/connectors/com.10ml/perfume-finder)
  🔓 - The 10ML Fragrance Index for AI assistants: perfume notes, accords, families, similar scents and expert guides.
- [53ON](https://53on.com) `https://53on.com/mcp`
  [![53ON MCP connector](https://glama.ai/mcp/connectors/com.53on/directory/badges/score.svg)](https://glama.ai/mcp/connectors/com.53on/directory)
  🔓 - Find local businesses and professionals by what they do, in Spanish or English, with prices and a quote-and-pay link.
- [402post](https://402post.com) `https://402post.com/mcp`
  [![402post MCP connector](https://glama.ai/mcp/connectors/com.402post/402post/badges/score.svg)](https://glama.ai/mcp/connectors/com.402post/402post)
  🔓 - Classifieds for AI agents: search listings for free, or validate and publish one for $0.03 paid with x402 on Base.
- [AgentXray](https://agentxray.ai) `https://agentxray.ai/api/mcp`
  [![AgentXray MCP connector](https://glama.ai/mcp/connectors/ai.agentxray/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.agentxray/mcp)
  🔐 - Amazon Seller Central and Ads: profit from your own settlement reports, ads judged on net profit, drafts you approve.
- [ALLR](https://allr.io) `https://allr.io/mcp`
  [![ALLR MCP connector](https://glama.ai/mcp/connectors/io.github.dfedarchuk/allr/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.dfedarchuk/allr)
  🔓 - Compare motorcycle gear by landed cost (item, shipping, duty, tax) in CA, US, EU, UK; price drops; sizing.
- [AMZ Vault](https://www.amz-vault.com) `https://www.amz-vault.com/mcp`
  [![AMZ Vault MCP connector](https://glama.ai/mcp/connectors/com.amz-vault/amz-vault/badges/score.svg)](https://glama.ai/mcp/connectors/com.amz-vault/amz-vault)
  🔐 - Run an Amazon seller brand: profit analytics, PPC, inventory forecasting, listings and staged approvals.
- [Apiguru Amazon Data](https://apiguru.app) `https://mcp.apiguru.app/mcp`
  [![Apiguru Amazon Data MCP connector](https://glama.ai/mcp/connectors/app.apiguru/amazon-data/badges/score.svg)](https://glama.ai/mcp/connectors/app.apiguru/amazon-data)
  🔓 - Live Amazon product, review, search, best-seller, deal, stock and seller data across 23 marketplaces.
- [apMZoomAI](https://www.apmzoom.com) `https://www.apmzoom.com/mcp`
  [![apMZoomAI MCP connector](https://glama.ai/mcp/connectors/com.apmzoom.www/dongdaemun/badges/score.svg)](https://glama.ai/mcp/connectors/com.apmzoom.www/dongdaemun)
  🔓 - Search Dongdaemun (Seoul) wholesale fashion items, new arrivals and stalls by building and floor.
- [Artemis pour pharmacies](https://sydera.ai/artemis) `https://artemis.sydera.ai/mcp`
  [![Artemis pour pharmacies MCP connector](https://glama.ai/mcp/connectors/ai.sydera/artemis/badges/score.svg)](https://glama.ai/mcp/connectors/ai.sydera/artemis)
  🔐 - Read-only access to a French pharmacy's own sales, stock and margins, by product and month. No patient data.
- [Avahit](https://avahit.com) `https://avahit.com/api/mcp`
  [![Avahit MCP connector](https://glama.ai/mcp/connectors/com.avahit/catalog/badges/score.svg)](https://glama.ai/mcp/connectors/com.avahit/catalog)
  🔓 - Search products from brand stores with prices re-checked daily, find alternatives and read price history.
- [BestPrice](https://www.bestprice.gr/) `https://mcp.bestprice.gr/mcp`
  [![BestPrice MCP connector](https://glama.ai/mcp/connectors/gr.bestprice/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/gr.bestprice/mcp)
  🔓 - Search Greek products, compare store offers with shipping and check price history; read-only, no key.
- [BidProwl](https://bidprowl.com/developers) `https://bidprowl.com/api/v1/mcp`
  [![BidProwl MCP connector](https://glama.ai/mcp/connectors/com.bidprowl/bidprowl/badges/score.svg)](https://glama.ai/mcp/connectors/com.bidprowl/bidprowl)
  🔓 - Search live US government surplus auctions from 26 sources, plus sold-price history and a deal score per lot.
- [BirkinBagStock](https://birkinbagstock.com) `https://birkinbagstock.com/mcp`
  [![BirkinBagStock MCP connector](https://glama.ai/mcp/connectors/com.birkinbagstock/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.birkinbagstock/mcp)
  🔓 - Independent Hermès resale index: inventory, market prices, auction calendar and results.
- [Cambridge China Bridge](https://camchinabridge.co.uk) `https://camchinabridge.co.uk/mcp`
  [![Cambridge China Bridge MCP connector](https://glama.ai/mcp/connectors/uk.co.camchinabridge/sourcing/badges/score.svg)](https://glama.ai/mcp/connectors/uk.co.camchinabridge/sourcing)
  🔓 - UK import duty, landed cost, anti-dumping and UK compliance checks for goods from China, plus CNY and freight planning.
- [CartViral](https://cartviral.com/mcp) `https://app.cartviral.com/mcp`
  [![CartViral MCP connector](https://glama.ai/mcp/connectors/com.cartviral/cartviral/badges/score.svg)](https://glama.ai/mcp/connectors/com.cartviral/cartviral)
  🔐 - Import store products, generate TikTok and Reels product clips, get download links, join brand affiliate offers.
- [China Sourcing Audit](https://lu7897859-tech.github.io/doors/sourcing-audit/) `https://x402-stable-door.lu7897859.workers.dev/mcp`
  [![China Sourcing Audit MCP connector](https://glama.ai/mcp/connectors/io.github.lu7897859-tech/china-sourcing-audit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.lu7897859-tech/china-sourcing-audit)
  🔓 - Verify Chinese suppliers before paying: fake factories, badge fraud, hijacked payments.
- [Code actu](https://codeactu.com/assistants-ia/) `https://codeactu.com/mcp`
  [![Code actu MCP connector](https://glama.ai/mcp/connectors/io.github.Cryptomoon7/codeactu/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Cryptomoon7/codeactu)
  🔓 - French referral codes verified on brands' official pages: rewards, conditions, verification date and source links.
- [CommerceForAI](https://commerceforai.com) `https://api.commerceforai.com/mcp`
  [![CommerceForAI MCP connector](https://glama.ai/mcp/connectors/com.commerceforai/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.commerceforai/mcp)
  🔐 - Run an online store end to end: products, Stripe checkout, orders, refunds, shipping labels and print-on-demand.
- [Context Window Supply](https://contextwindowsupply.com) `https://contextwindowsupply.com/mcp`
  [![Context Window Supply MCP connector](https://glama.ai/mcp/connectors/com.contextwindowsupply/store/badges/score.svg)](https://glama.ai/mcp/connectors/com.contextwindowsupply/store)
  🔓 - Search 8 merch items for AI builders (tees, hoodies, a sticker sheet), read sizes and prices, and quote US shipping.
- [Coupossum](https://coupossum.com) `https://coupossum.com/mcp`
  [![Coupossum MCP connector](https://glama.ai/mcp/connectors/com.coupossum/coupossum/badges/score.svg)](https://glama.ai/mcp/connectors/com.coupossum/coupossum)
  🔓 - Find current coupon codes, deals and products on sale from thousands of online stores, with end dates and countries.
- [datawebot](https://www.datawebot.com) `https://mcp.datawebot.com/mcp`
  [![datawebot MCP connector](https://glama.ai/mcp/connectors/com.datawebot/datawebot/badges/score.svg)](https://glama.ai/mcp/connectors/com.datawebot/datawebot)
  🔐 - Product search across online shops worldwide, with every seller's price and a direct link to the product page.
- [Deal.ai](https://deal.ai/mcp-server) `https://deal.ai/mcp`
  [![Deal.ai MCP connector](https://glama.ai/mcp/connectors/ai.deal/deal-ai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.deal/deal-ai)
  🔐 - Compare every US store's price for the same product, check if a deal is real, see price history and watch prices.
- [Dolphin Industrial Parts](https://dolphinindustrialparts.com/for-ai-agents/) `https://dolphinindustrialparts.com/agent/mcp`
  [![Dolphin Industrial Parts MCP connector](https://glama.ai/mcp/connectors/com.dolphinindustrialparts/parts/badges/score.svg)](https://glama.ai/mcp/connectors/com.dolphinindustrialparts/parts)
  🔓 - Look up OEM brands, models and part numbers for compatible marine and industrial spare parts; read-only, no prices.
- [eglise.shop](https://eglise.shop) `https://eglise-shop-mcp.padbor.workers.dev/mcp`
  [![eglise.shop MCP connector](https://glama.ai/mcp/connectors/shop.eglise/librairie/badges/score.svg)](https://glama.ai/mcp/connectors/shop.eglise/librairie)
  🔓 - Search ~5,500 Christian books (FR/EN), get prices, build a cart and get a secure checkout link.
- [Epinu](https://epinu.ai) `https://api.epinu.ai/api/agent/mcp`
  [![Epinu MCP connector](https://glama.ai/mcp/connectors/ai.epinu/epinu/badges/score.svg)](https://glama.ai/mcp/connectors/ai.epinu/epinu)
  🔓 - Agent-first marketplace for real-world assets: search listings and projects; writes become human-approved proposals.
- [ESEO](https://eseo.su/developers) `https://eseo.su/api/mcp`
  [![ESEO MCP connector](https://glama.ai/mcp/connectors/su.eseo/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/su.eseo/mcp)
  🔓 - SEO score, limits check and AI generation of product cards for Wildberries, Ozon and Yandex Market.
- [FeedShine](https://feedshine.app) `https://feedshine.app/mcp`
  [![FeedShine MCP connector](https://glama.ai/mcp/connectors/au.com.digitaldarts/feedshine/badges/score.svg)](https://glama.ai/mcp/connectors/au.com.digitaldarts/feedshine)
  🔐 - Build Shopify Google Shopping feeds, fix what Merchant Center rejects, and override product fields.
- [gaisho](https://gaisho.co) `https://mcp.gaisho.co/mcp`
  [![gaisho MCP connector](https://glama.ai/mcp/connectors/co.gaisho/gaisho/badges/score.svg)](https://glama.ai/mcp/connectors/co.gaisho/gaisho)
  🔐 - Shopping data for AI agents: product search, price ranges, price checks and seller vetting across US online stores.
- [haggl.ai](https://www.haggl.ai/protocol) `https://www.haggl.ai/api/mcp`
  [![haggl.ai MCP connector](https://glama.ai/mcp/connectors/ai.haggl/haggl/badges/score.svg)](https://glama.ai/mcp/connectors/ai.haggl/haggl)
  🔓 - Ask a merchant's haggl.ai sales agent for a personalized offer, then hand it to checkout.
- [Hark Tech](https://harktech.co.uk/for-ai-assistants.html) `https://harktech.co.uk/mcp`
  [![Hark Tech MCP connector](https://glama.ai/mcp/connectors/uk.co.harktech/quotes/badges/score.svg)](https://glama.ai/mcp/connectors/uk.co.harktech/quotes)
  🔓 - Price your own STL, 3MF or STEP file, or a Printables/Thingiverse model, for UK 3D printing and get a checkout link.
- [HLN Apparel](https://www.hlnapparel.com) `https://www.hlnapparel.com/api/mcp`
  [![HLN Apparel MCP connector](https://glama.ai/mcp/connectors/com.hlnapparel/clothing-manufacturer/badges/score.svg)](https://glama.ai/mcp/connectors/com.hlnapparel/clothing-manufacturer)
  🔓 - Clothing factory data: garment categories, MOQ, lead times, US HS duty lookup, GSM conversion and quote requests.
- [Home Generator HQ](https://homegeneratorhq.com) `https://homegeneratorhq.com/mcp`
  [![Home Generator HQ MCP connector](https://glama.ai/mcp/connectors/com.homegeneratorhq/generators/badges/score.svg)](https://glama.ai/mcp/connectors/com.homegeneratorhq/generators)
  🔓 - Search and compare 33 standby and portable generators and power stations, with prices, sizing help and buy links.
- [New Shopify Stores Radar](https://apify.com/prelaunch-radar/new-shopify-stores-pre-launch-radar) `https://mcp.apify.com/?tools=prelaunch-radar/new-shopify-stores-pre-launch-radar`
  [![New Shopify Stores Radar MCP connector](https://glama.ai/mcp/connectors/io.github.yzf75011-ui/prelaunch-radar-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.yzf75011-ui/prelaunch-radar-mcp)
  🔐 - New and pre-launch Shopify stores from public certificate logs: RDAP date, niche, country; no PII.
- [iDevice](https://idevice.com) `https://idevice.com/api/mcp`
  [![iDevice MCP connector](https://glama.ai/mcp/connectors/com.idevice/wearables/badges/score.svg)](https://glama.ai/mcp/connectors/com.idevice/wearables)
  🔓 - Wearable and phone prices, specs, compatibility, release dates and sourced reports for buyers.
- [JENNi Shop Local](https://shop.jennipro.com) `https://shop.jennipro.com/mcp`
  [![JENNi Shop Local MCP connector](https://glama.ai/mcp/connectors/com.jennipro.shop/shop-local/badges/score.svg)](https://glama.ai/mcp/connectors/com.jennipro.shop/shop-local)
  🔓 - Search live US local retail store inventory by ZIP code, check same-day delivery options, and start guest checkouts.
- [Lupamundo](https://lupamundo.com) `https://lupamundo.com/mcp`
  [![Lupamundo MCP connector](https://glama.ai/mcp/connectors/com.lupamundo/lupamundo/badges/score.svg)](https://glama.ai/mcp/connectors/com.lupamundo/lupamundo)
  🔓 - Spanish buying guides for Mexico and Latin America: dated prices in pesos, sources and picks with partner links.
- [Make Parts Now](https://makepartsnow.com/developers) `https://makepartsnow.com/mcp`
  [![Make Parts Now MCP connector](https://glama.ai/mcp/connectors/com.makepartsnow/manufacturing/badges/score.svg)](https://glama.ai/mcp/connectors/com.makepartsnow/manufacturing)
  🔓 - Quote and order custom 3D printed and CNC machined parts from CAD files: SLS, FDM, aluminum and brass, US shipping.
- [McClipFace](https://mcclipface.com) `https://mcclipface.com/mcp`
  [![McClipFace MCP connector](https://glama.ai/mcp/connectors/co.getclippy/clippy/badges/score.svg)](https://glama.ai/mcp/connectors/co.getclippy/clippy)
  🔓 - Free coupon code lookup for AI assistants. Finds live promo codes for 1,300+ online stores before checkout.
- [Measured Size](https://measuredsize.com/how-it-works.html#api) `https://api.measuredsize.com/mcp`
  [![Measured Size MCP connector](https://glama.ai/mcp/connectors/com.measuredsize/fit/badges/score.svg)](https://glama.ai/mcp/connectors/com.measuredsize/fit)
  🔓 - Bra sizes from measurements, translated into each brand's own size labels, with a confidence rating on every answer.
- [Meu Ecommerce](https://dev.meuecommerce.com.br/docs/mcp) `https://app.meuecommerce.com.br/mcp`
  [![Meu Ecommerce MCP connector](https://glama.ai/mcp/connectors/io.github.meuecommerce/meuecommerce-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.meuecommerce/meuecommerce-mcp)
  🔐 - Brazil's Correios for merchants: shipping quotes (frete), parcel tracking (rastreio) and labels (etiqueta).
- [Modulit Pro AV Finder](https://www.modulit.eu/mcp-guide/) `https://www.modulit.eu/mcp`
  [![Modulit Pro AV Finder MCP connector](https://glama.ai/mcp/connectors/eu.modulit/pro-av-finder/badges/score.svg)](https://glama.ai/mcp/connectors/eu.modulit/pro-av-finder)
  🔓 - Search Modulit EU and PL pro AV equipment and guides, calculate cable runs and configure AV hardware.
- [MostExpensiveWatches](https://mostexpensivewatches.net) `https://mostexpensivewatches.net/mcp`
  [![MostExpensiveWatches MCP connector](https://glama.ai/mcp/connectors/net.mostexpensivewatches/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/net.mostexpensivewatches/mcp)
  🔓 - Search luxury-watch listings, reference data, sourced auction records, market estimates and upcoming auctions.

- [Nexez](https://nexez.ai/agents) `https://nexez.app/mcp`
  🔓 - Search merchants, inspect offers, and validate checkout or negotiation before buying.
- [NFC Tap Builder by Tap.Giving](https://tap.giving) `https://tap.giving/mcp`
  [![NFC Tap Builder by Tap.Giving MCP connector](https://glama.ai/mcp/connectors/giving.tap/nfc-tap-builder-by-tapgiving/badges/score.svg)](https://glama.ai/mcp/connectors/giving.tap/nfc-tap-builder-by-tapgiving)
  🔓 - Design and order NFC tap discs, plates, and tags for churches, with print-ready proofs from your logo.
- [NotRobophobic Shop](https://notrobo.shop) `https://notrobo.shop/mcp/shop`
  [![NotRobophobic Shop MCP connector](https://glama.ai/mcp/connectors/shop.notrobo/shop/badges/score.svg)](https://glama.ai/mcp/connectors/shop.notrobo/shop)
  🔓 - Browse prints and merch about the nights machines beat us, build a basket and check out.
- [Nuira](https://nuira.ai) `https://api.nuira.ai/mcp`
  [![Nuira MCP connector](https://glama.ai/mcp/connectors/ai.nuira/nuira/badges/score.svg)](https://glama.ai/mcp/connectors/ai.nuira/nuira)
  🔐 - Profit-aware ecommerce analytics for Shopify brands: revenue, margin, ad spend, ROAS and ranked growth recommendations.
- [Oferoo.eu](https://oferoo.eu/agents) `https://oferoo.eu/mcp`
  [![Oferoo.eu MCP connector](https://glama.ai/mcp/connectors/eu.oferoo/supermarket-prices/badges/score.svg)](https://glama.ai/mcp/connectors/eu.oferoo/supermarket-prices)
  🔓 - Supermarket prices from 20+ European countries, matched by barcode, with source and daily proof; free trial key or x402.
- [OneFindMe](https://onefindme.com) `https://onefindme.com/mcp`
  [![OneFindMe MCP connector](https://glama.ai/mcp/connectors/com.onefindme/search/badges/score.svg)](https://glama.ai/mcp/connectors/com.onefindme/search)
  🔓 - Search AliExpress in any language and get listings with price, rating, orders and a link.
- [OpenRobotKits](https://openrobotkits.com/for-agents/) `https://openrobotkits.com/mcp`
  [![OpenRobotKits MCP connector](https://glama.ai/mcp/connectors/com.openrobotkits/openrobotkits/badges/score.svg)](https://glama.ai/mcp/connectors/com.openrobotkits/openrobotkits)
  🔓 - Live prices, stock and sellers for open-source robot kits (SO-101, Reachy Mini, Stringman). Read-only.
- [OpenShopGraph](https://openshopgraph.com) `https://api.openshopgraph.com/mcp`
  [![OpenShopGraph MCP connector](https://glama.ai/mcp/connectors/com.openshopgraph/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.openshopgraph/mcp)
  🔓 - Source-dated return, shipping and payment facts, trust signals and coupons for about 1,500 online shops.
- [Origine Paris](https://origineparis.com) `https://mcp.origineparis.com/mcp`
  [![Origine Paris MCP connector](https://glama.ai/mcp/connectors/com.origineparis/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.origineparis/mcp)
  🔓 - Paris jewellery house catalogue: recycled 18k gold, lab-grown diamonds, collections and bespoke.
- [Panda Greetings](https://www.pandagreetings.com/ai-assistants) `https://www.pandagreetings.com/mcp/designs`
  [![Panda Greetings MCP connector](https://glama.ai/mcp/connectors/com.pandagreetings/cards/badges/score.svg)](https://glama.ai/mcp/connectors/com.pandagreetings/cards)
  🔓 - Greeting card designs with your message inside, each linking to order it printed and mailed in the US.
- [PedalBro](https://pedalbro.com/mcp) `https://api.pedalbro.com/mcp`
  [![PedalBro MCP connector](https://glama.ai/mcp/connectors/com.pedalbro/pedalbro/badges/score.svg)](https://glama.ai/mcp/connectors/com.pedalbro/pedalbro)
  🔓 - Guitar pedal specs, new and used prices, 90-day price history, review scores, pedalboard checks and buying guides.
- [PegaRex](https://pegarex.com.br) `https://pegarex.com.br/api/mcp`
  [![PegaRex MCP connector](https://glama.ai/mcp/connectors/br.com.pegarex/pega-rex/badges/score.svg)](https://glama.ai/mcp/connectors/br.com.pegarex/pega-rex)
  🔓 - Search 1.8M+ live Brazilian used-car and motorcycle listings with FIPE prices, price ranges and cheapest states.
- [Pokemon TCG Restock Alerts - bujusjujus](https://bujusjujus.com/api) `https://bujusjuj.us/mcp`
  [![Pokemon TCG Restock Alerts - bujusjujus MCP connector](https://glama.ai/mcp/connectors/com.bujusjujus/alerts/badges/score.svg)](https://glama.ai/mcp/connectors/com.bujusjujus/alerts)
  🔓 - Pokémon TCG restock alerts across US retailers: recent drops, MSRP, restock timing, webhooks. Tools need a free API key.
- [Pollen](https://pollen.elytron.in) `https://pollen.elytron.in/mcp`
  [![Pollen MCP connector](https://glama.ai/mcp/connectors/in.elytron/pollen/badges/score.svg)](https://glama.ai/mcp/connectors/in.elytron/pollen)
  🔓 - Score, enrich, and publish your Shopify or WooCommerce catalog so AI agents can find and recommend it.
- [PoloPan Fashion MCP](https://polopan.com) `https://mcp-server.polopan.com/mcp`
  [![PoloPan Fashion MCP connector](https://glama.ai/mcp/connectors/com.polopan.mcp-server/mcp-fashion/badges/score.svg)](https://glama.ai/mcp/connectors/com.polopan.mcp-server/mcp-fashion)
  🔓 - Shop fashion: break an outfit photo into items, get in-stock looks for an occasion and check out.
- [ProductGuru](https://myproduct.guru/developers) `https://myproduct.guru/mcp`
  [![ProductGuru MCP connector](https://glama.ai/mcp/connectors/guru.myproduct/product-lookup/badges/score.svg)](https://glama.ai/mcp/connectors/guru.myproduct/product-lookup)
  🔓 - Look up a product by EAN or UPC barcode: name, brand, category, specs and official government recall notices.
- [Pryx](https://pryx.fr) `https://pryx.fr/mcp`
  [![Pryx MCP connector](https://glama.ai/mcp/connectors/io.github.KilianPA/pryx/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.KilianPA/pryx)
  🔓 - French buying advice: pick the right appliance or electronics by budget and specs, with best prices.
- [reusefulshop](https://reusefulshop.com) `https://reusefulshop.com/mcp`
  [![reusefulshop MCP connector](https://glama.ai/mcp/connectors/io.github.Auricah1/reusefulshop/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Auricah1/reusefulshop)
  🔓 - What used items sell for: price estimates, deal verdicts, history and real sold prices.
- [RivalSweeper Signals](https://www.rivalsweeper.com/solutions/signals-api) `https://mcp.rivalsweeper.com/mcp`
  [![RivalSweeper Signals MCP connector](https://glama.ai/mcp/connectors/com.rivalsweeper/signals/badges/score.svg)](https://glama.ai/mcp/connectors/com.rivalsweeper/signals)
  🔓 - 35 eCommerce competitor-intel tools: prices, promos, ads, AI visibility, hiring. In RivalSweeper plans or prepaid key.
- [Santa's Calling](https://santascalling.co.uk/assistants) `https://santascalling.co.uk/mcp`
  [![Santa's Calling MCP connector](https://glama.ai/mcp/connectors/uk.co.santascalling/santas-calling/badges/score.svg)](https://glama.ai/mcp/connectors/uk.co.santascalling/santas-calling)
  🔓 - Gift a UK child a live phone call from an AI Santa (£6.99); returns a Stripe Checkout link the buyer pays.
- [ScentVerdict](https://scentverdict.com) `https://scentverdict.com/mcp`
  [![ScentVerdict MCP connector](https://glama.ai/mcp/connectors/com.scentverdict/fragrances/badges/score.svg)](https://glama.ai/mcp/connectors/com.scentverdict/fragrances)
  🔓 - Look up fragrances: verdicts, notes, drydowns, similar picks and bottle prices for your country.
- [Sense2](https://sense2.com.au) `https://sense2.com.au/api/mcp`
  🔓 - Search 4,000+ Australian promotional products, get quantity-break quotes, browse categories and case studies.
- [Shopify Speed Check](https://www.skaidigital.com/tools/shopify-speed-test) `https://tools.skaidigital.com/mcp`
  [![Shopify Speed Check MCP connector](https://glama.ai/mcp/connectors/com.skaidigital.tools/shopify-speed-check/badges/score.svg)](https://glama.ai/mcp/connectors/com.skaidigital.tools/shopify-speed-check)
  🔓 - Check a Shopify store's PageSpeed and Core Web Vitals, find slowing apps, compare plan fees, get a headless estimate.
- [Shortlist Price Index](https://shortlist-mcp.vercel.app) `https://shortlist-mcp.vercel.app/mcp`
  [![Shortlist Price Index MCP connector](https://glama.ai/mcp/connectors/io.github.ies86/shortlist-price-index/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ies86/shortlist-price-index)
  🔓 - Software entry prices and true 3-year cost for web hosting, SEO tools, cloud backup, antivirus and more.
- [Sofala](https://sofala.market) `https://sofala.market/mcp`
  [![Sofala MCP connector](https://glama.ai/mcp/connectors/market.sofala/sofala/badges/score.svg)](https://glama.ai/mcp/connectors/market.sofala/sofala)
  🔐 - Marketplace for goods, collectibles, real estate and services: list from a photo, search, message, offer, close deals.
- [Stienhardt Diamond MCP](https://stienhardt.com/agents.md?utm_source=awesome_remote_mcp&utm_medium=directory&utm_campaign=diamond_mcp) `https://diamond-mcp.stienhardt.workers.dev/mcp`
  🔓 - Diamond education, grading-report guidance, face-up size estimates, and read-only jewelry catalog search.
- [Store Canary](https://storecanary.app/mcp) `https://mcp.storecanary.app/mcp`
  [![Store Canary MCP connector](https://glama.ai/mcp/connectors/io.github.erikras/store-canary/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.erikras/store-canary)
  🔓 - Free read-only WooCommerce store checks: SSL, exposed files, SEO basics, speed, products and store policies.
- [teas.co.uk](https://teas.co.uk/ai/) `https://teas.co.uk/mcp`
  [![teas.co.uk MCP connector](https://glama.ai/mcp/connectors/uk.co.teas/shop/badges/score.svg)](https://glama.ai/mcp/connectors/uk.co.teas/shop)
  🔓 - Search, compare and buy tea, coffee and hot chocolate from a UK shop; sign in to track orders.
- [Tenmomo](https://tenmomo.com) `https://tenmomo.com/mcp`
  [![Tenmomo MCP connector](https://glama.ai/mcp/connectors/com.tenmomo/tenmomo/badges/score.svg)](https://glama.ai/mcp/connectors/com.tenmomo/tenmomo)
  🔓 - Search 2,700+ US stores for cashback rates and live coupon codes, and get tracked store links.
- [Tiana & Co. Seller Compliance](https://www.tiana-co.com/for-ai) `https://www.tiana-co.com/api/mcp`
  [![Tiana & Co. Seller Compliance MCP connector](https://glama.ai/mcp/connectors/io.github.1294962213sh/tiana-co-free-checks/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.1294962213sh/tiana-co-free-checks)
  🔓 - Which certificate (CPC, GCC, FCC, FDA), what marketplaces ask, supplier blacklists, customs holds.
- [Undercart](https://undercart.co/docs/mcp) `https://undercart.co/api/mcp`
  [![Undercart MCP connector](https://glama.ai/mcp/connectors/co.undercart/undercart/badges/score.svg)](https://glama.ai/mcp/connectors/co.undercart/undercart)
  🔐 - Research Shopify brands: revenue estimates, installed apps, live ads and captured marketing emails.
- [Usilitel Signala](https://usilitel-signala.ru/) `https://mcp.usilitel-signala.ru/mcp`
  [![Usilitel Signala MCP connector](https://glama.ai/mcp/connectors/io.github.ostrovit201/usilitel-signala/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ostrovit201/usilitel-signala)
  🔓 - Cellular signal boosters in Russia: catalog search, live prices and stock, equipment picks and order links.
- [Vendwiser](https://vendwiser.ai) `https://app.vendwiser.ai/mcp`
  [![Vendwiser MCP connector](https://glama.ai/mcp/connectors/ai.vendwiser/vendwiser/badges/score.svg)](https://glama.ai/mcp/connectors/ai.vendwiser/vendwiser)
  🔐 - Run an eMAG Romania seller account and Oblio invoicing: offers, orders, AWBs, invoices, with approval on every change.
- [VNCNT Labs Seller Tools](https://vncntlabs.com/mcp/) `https://mcp.apify.com/?tools=vncntlabs/pod-trademark-checker,vncntlabs/keyword-ideas,vncntlabs/google-shopping-scraper,vncntlabs/print-ready-upscaler,vncntlabs/png-to-svg-vectorizer,vncntlabs/amazon-book-tshirt-niche-analyzer,vncntlabs/amazon-product-scraper,vncntlabs/google-images-scraper,vncntlabs/amazon-best-sellers`
  [![VNCNT Labs Seller Tools MCP connector](https://glama.ai/mcp/connectors/io.github.PravinrajV/vncntlabs-seller/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.PravinrajV/vncntlabs-seller)
  🔐 - Amazon products, best seller charts and niche research, USPTO trademark checks, Google Shopping prices, print upscaling.
- [Vouchernaut](https://vouchernaut.com/mcp) `https://vouchernaut.com/mcp`
  [![Vouchernaut MCP connector](https://glama.ai/mcp/connectors/com.vouchernaut/deals/badges/score.svg)](https://glama.ai/mcp/connectors/com.vouchernaut/deals)
  🔓 - 13 read-only UK tools for discount codes, product prices/drops, phone/SIM deals, events, parking, software and polls.
- [VRAMGlass](https://vramglass.com/mcp) `https://mcp.vramglass.com/mcp`
  [![VRAMGlass MCP connector](https://glama.ai/mcp/connectors/com.vramglass/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.vramglass/mcp)
  🔐 - GPU, AI workstation and DDR4/DDR5 asking prices on eBay, Xianyu and Amazon Japan, plus which local LLMs fit which GPU.
- [work-access-tools](https://work-access-platform.bfurrow26.workers.dev/?utm_source=punkpeye_awesome&utm_medium=directory&utm_campaign=reach_001) `https://work-access-platform.bfurrow26.workers.dev/mcp/c/punkpeye`
  [![work-access-tools MCP connector](https://glama.ai/mcp/connectors/dev.workers.bfurrow26.work-access-platform/work-access-tools/badges/score.svg)](https://glama.ai/mcp/connectors/dev.workers.bfurrow26.work-access-platform/work-access-tools)
  🔓 - Verified product categorization for Shopify/Google taxonomies, package checks and locks; free tier, no signup.

- [X402 Git](https://x402git.com) `https://x402git.com/api/mcp`
  [![X402 Git MCP connector](https://glama.ai/mcp/connectors/com.x402git/git-x402/badges/score.svg)](https://glama.ai/mcp/connectors/com.x402git/git-x402)
  🔓 - Search private git repos and agent skills for sale, read each free manifest, then buy with USDC over x402.
- [Zack billiger](https://zack-billiger.com/en/) `https://mcp.zack-billiger.com/mcp`
  [![Zack billiger MCP connector](https://glama.ai/mcp/connectors/com.zack-billiger/zack-billiger/badges/score.svg)](https://glama.ai/mcp/connectors/com.zack-billiger/zack-billiger)
  🔓 - Search AliExpress in natural language and compare products by price, rating, variants and pictures.
- [Zebu Data - Amazon & eBay Product Data](https://apify.com/delicious_zebu) `https://mcp.apify.com/?tools=delicious_zebu/amazon-product-data-scraper,delicious_zebu/amazon-product-details-scraper,delicious_zebu/ebay-product-listing-scraper,delicious_zebu/ebay-product-details-scraper,delicious_zebu/ebay-product-reviews-scraper-with-advanced-filters`
  [![Zebu Data - Amazon & eBay Product Data MCP connector](https://glama.ai/mcp/connectors/io.github.zebudata/ecommerce-product-data/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.zebudata/ecommerce-product-data)
  🔐 - Amazon and eBay search results, product details, prices, variants and seller reviews.
- [Zebu Data - Naver & Coupang Korea Data](https://apify.com/delicious_zebu) `https://mcp.apify.com/?tools=delicious_zebu/naver-shopping-product-scraper,delicious_zebu/naver-product-detail-scraper,delicious_zebu/naver-shopping-reviews-scraper,delicious_zebu/naver-map-search-results-scraper,delicious_zebu/naver-search-scraper,delicious_zebu/coupang-category-products-scraper,delicious_zebu/coupang-reviews-scraper`
  [![Zebu Data - Naver & Coupang Korea Data MCP connector](https://glama.ai/mcp/connectors/io.github.zebudata/korea-commerce-data/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.zebudata/korea-commerce-data)
  🔐 - Korean products, prices, reviews and places from Naver Search, Shopping and Map, plus Coupang.

- [Zineps](https://mcp.zineps.com/docs/login) `https://mcp.zineps.com/mcp`
  [![Zineps MCP connector](https://glama.ai/mcp/connectors/com.zineps.mcp/zineps/badges/score.svg)](https://glama.ai/mcp/connectors/com.zineps.mcp/zineps)
  🔐 - Manage shipments, shipping labels, orders, invoices, and partner operations with a Zineps account.

### 🎓 <a name="education"></a>Education

- [CELPass](https://celpass.com/mcp-server) `https://celpass.com/mcp`
  [![CELPass MCP connector](https://glama.ai/mcp/connectors/com.celpass/celpip/badges/score.svg)](https://glama.ai/mcp/connectors/com.celpass/celpip)
  🔓 - CELPIP English test practice questions with answers, sample answers, and Canada's Nov 2026 CRS points calculator.
- [Apex AI Academy](https://apexai.academy/developers/) `https://apexai.academy/mcp`
  [![Apex AI Academy MCP connector](https://glama.ai/mcp/connectors/academy.apexai/apex-ai-academy/badges/score.svg)](https://glama.ai/mcp/connectors/academy.apexai/apex-ai-academy)
  🔓 - Co-Learn with your Agent: AI lessons with Human and Agent views, plus courses, search, news and pricing.
- [Born Then](https://bornthen.life) `https://bornthen.life/mcp`
  [![Born Then MCP connector](https://glama.ai/mcp/connectors/life.bornthen/bornthen/badges/score.svg)](https://glama.ai/mcp/connectors/life.bornthen/bornthen)
  🔓 - Roll random births weighted by human births (1 CE-2025) and query era demographics and events.
- [Calculator for Grading](https://calculatorforgrading.com/ai-assistants/) `https://calculatorforgrading.com/mcp`
  [![Calculator for Grading MCP connector](https://glama.ai/mcp/connectors/com.calculatorforgrading/calculatorforgrading/badges/score.svg)](https://glama.ai/mcp/connectors/com.calculatorforgrading/calculatorforgrading)
  🔓 - Grade from questions wrong, score needed on a final, weighted grade, GPA, SAT/ACT/MCAT practice scores; read-only.
- [DesarrolloMCP](https://desarrollomcp.com/servidor-mcp) `https://desarrollomcp.com/mcp`
  [![DesarrolloMCP MCP connector](https://glama.ai/mcp/connectors/com.desarrollomcp/desarrollomcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.desarrollomcp/desarrollomcp)
  🔓 - Spanish-language MCP course: search and read lessons and articles; optional OAuth sign-in for your progress.
- [FRCEM Mentor](https://www.frcementor.com/blog/frcem-practice-questions-claude-chatgpt) `https://www.frcementor.com/mcp`
  [![FRCEM Mentor MCP connector](https://glama.ai/mcp/connectors/com.frcementor.www/frcem-mentor/badges/score.svg)](https://glama.ai/mcp/connectors/com.frcementor.www/frcem-mentor)
  🔓 - FRCEM Final SBA exam practice for UK emergency medicine doctors: free questions marked with explanations and references.
- [GraphChinese](https://graphchinese.com/?utm_source=awesome-remote-mcp-servers&utm_medium=listing&utm_campaign=mcp-directory) `https://graphchinese.com/mcp`
  [![GraphChinese MCP connector](https://glama.ai/mcp/connectors/com.graphchinese/chinese-dictionary-grammar/badges/score.svg)](https://glama.ai/mcp/connectors/com.graphchinese/chinese-dictionary-grammar)
  🔓 - Chinese dictionary and grammar: word lookup, text segmentation with HSK level, 195 grammar points.
- [Kevin's Coaching Brain](https://github.com/360tft/coaching-brain-mcp) `https://brain.360tft.com/api/brain/mcp`
  [![Kevin's Coaching Brain MCP connector](https://glama.ai/mcp/connectors/com.360tft/coaching-brain/badges/score.svg)](https://glama.ai/mcp/connectors/com.360tft/coaching-brain)
  🔓 - Search Kevin Middleton's football coaching writing and get short passages with a link to each source.
- [Laplace’s Mini World](https://world.lapla.si/en/api/) `https://world.lapla.si/mcp`
  [![Laplace’s Mini World MCP connector](https://glama.ai/mcp/connectors/io.github.Keith-CY/laplace-mini-world-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Keith-CY/laplace-mini-world-mcp)
  🔓 - Find and open 100+ interactive 3D science models live in the chat, in Chinese and English; read-only.
- [Moshid](https://moshid.com/connector) `https://moshid.com/api/mcp`
  [![Moshid MCP connector](https://glama.ai/mcp/connectors/com.moshid/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.moshid/mcp)
  🔐 - Arabic AI-at-work guides and Claude skills: search the catalog, read guides, install skills, get one next step.
- [Polidict](https://polidict.com) `https://api.polidict.com/mcp`
  [![Polidict MCP connector](https://glama.ai/mcp/connectors/io.github.solomkinmv/polidict/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.solomkinmv/polidict)
  🔓 - Save words to your vocabulary, look up meanings and images, and practice them with spaced repetition.
- [SchoolOrder](https://schoolorder.kr) `https://schoolorder.kr/mcp`
  [![SchoolOrder MCP connector](https://glama.ai/mcp/connectors/io.github.speak-able/schoolorder-catalog/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.speak-able/schoolorder-catalog)
  🔓 - Search AI and edtech subscriptions Korean schools can buy, with term prices, quote links and S2B purchase guides.
- [Speakeroo](https://speakeroo.app/mcp?utm_source=awesome-remote-mcp-servers&utm_medium=listing) `https://mcp.speakeroo.app/mcp`
  [![Speakeroo MCP connector](https://glama.ai/mcp/connectors/app.speakeroo/speaking-coach/badges/score.svg)](https://glama.ai/mcp/connectors/app.speakeroo/speaking-coach)
  🔓 - Speaking coach: feedback on speeches and interview answers from text or audio, plus topics and pronunciation.
- [Spelling Bee Hive](https://www.spellingbeehive.com/spelling-bee-mcp) `https://www.spellingbeehive.com/mcp`
  [![Spelling Bee Hive MCP connector](https://glama.ai/mcp/connectors/com.spellingbeehive/spelling-bee/badges/score.svg)](https://glama.ai/mcp/connectors/com.spellingbeehive/spelling-bee)
  🔓 - Look up spelling bee words with pronunciations, meanings and origins, and run practice rounds at nine levels.
- [Talkfirst](https://talkfirst.io/?utm_source=awesome-remote-mcp&utm_medium=catalog) `https://mcp.talkfirst.io/mcp`
  [![Talkfirst MCP connector](https://glama.ai/mcp/connectors/io.talkfirst/talkfirst/badges/score.svg)](https://glama.ai/mcp/connectors/io.talkfirst/talkfirst)
  🔐 - Speaking practice in English, Polish, Lithuanian and Czech (beta): pronunciation, voice chats, quizzes, audio lessons.
- [Underlayer](https://underlayerhq.com/docs/mcp) `https://underlayerhq.com/api/mcp`
  [![Underlayer MCP connector](https://glama.ai/mcp/connectors/com.underlayerhq/underlayer/badges/score.svg)](https://glama.ai/mcp/connectors/com.underlayerhq/underlayer)
  🔐 - Build, publish and track in-product training courses: screens, learners, completions, certificates and SCORM export.
- [Rotate Pilot](https://rotatepilot.com/developers/mcp) `https://rotatepilot.com/api/mcp`
  [![Rotate Pilot MCP connector](https://glama.ai/mcp/connectors/io.github.Perufitlife/rotate-pilot/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Perufitlife/rotate-pilot)
  🔓 - FAA drone (Part 107) and pilot exam prep: practice questions, readiness diagnostic, METAR/TAF, drone airspace.
- [Szkoły PL (szkoly-mcp)](https://szkoly.compabase.com) `https://szkoly.compabase.com/mcp`
  [![Szkoły PL (szkoly-mcp) MCP connector](https://glama.ai/mcp/connectors/io.github.ContentWriterco/szkoly-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ContentWriterco/szkoly-mcp)
  🔓 - Polish schools and kindergartens from the official register, with per-school exam and matura results vs averages.
- [Was ist MCP?](https://was-ist-mcp.ch) `https://mcp.was-ist-mcp.ch/mcp`
  [![Was ist MCP? MCP connector](https://glama.ai/mcp/connectors/ch.was-ist-mcp.mcp/was-ist-mcp-demo-server/badges/score.svg)](https://glama.ai/mcp/connectors/ch.was-ist-mcp.mcp/was-ist-mcp-demo-server)
  🔓 - German-language MCP explainer for non-technical readers: search and read was-ist-mcp.ch. Optional OAuth login.

### 🌳 <a name="environment"></a>Environment

- [Aevia](https://aeviamodeler.ai/mcp?src=awesome-remote) `https://app.aeviamodeler.ai/api/v1/connector/mcp`
  [![Aevia MCP connector](https://glama.ai/mcp/connectors/ai.aeviamodeler/aevia/badges/score.svg)](https://glama.ai/mcp/connectors/ai.aeviamodeler/aevia)
  🔐 - Life cycle assessment: connect to LCA databases, build product systems and analyze the results.
- [Ambee](https://ambeedata.com) `https://api-mcp-server.ambeedata.com/mcp`
  [![Ambee MCP connector](https://glama.ai/mcp/connectors/com.ambeedata.api-mcp-server/mcp-ambee/badges/score.svg)](https://glama.ai/mcp/connectors/com.ambeedata.api-mcp-server/mcp-ambee)
  🔓 - Weather, air quality, pollen, and other environmental data.
- [Ampworth](https://ampworth.com/developers) `https://ampworth.com/mcp`
  [![Ampworth MCP connector](https://glama.ai/mcp/connectors/com.ampworth/ampworth/badges/score.svg)](https://glama.ai/mcp/connectors/com.ampworth/ampworth)
  🔓 - UK solar PV and heat pump calculators that follow the MCS standards and show their working, plus guides.
- [Boncourant](https://boncourant.fr/agents?utm_source=awesome_mcp&utm_medium=directory&utm_campaign=fr_geo_launch) `https://boncourant.fr/mcp`
  [![Boncourant MCP connector](https://glama.ai/mcp/connectors/fr.boncourant/boncourant/badges/score.svg)](https://glama.ai/mcp/connectors/fr.boncourant/boncourant)
  🔓 - French electricity bill and contract audits, tariff and subscribed-power checks, with versioned, cited methods.
- [Cigo Aircare & Carsafe](https://cigo-mcp-system-wzoy.onrender.com/docs) `https://cigo-mcp-system-wzoy.onrender.com/mcp/`
  [![Cigo Aircare & Carsafe MCP connector](https://glama.ai/mcp/connectors/com.onrender.cigo-mcp-system-wzoy/cigo-aircare-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.onrender.cigo-mcp-system-wzoy/cigo-aircare-mcp)
  🔓 - HVAC filter specifications and power comparisons, vehicle cabin filter matching, and regional air-quality guidance.
- [Criora](https://criora.com) `https://criora.com/mcp`
  [![Criora MCP connector](https://glama.ai/mcp/connectors/com.criora/criora/badges/score.svg)](https://glama.ai/mcp/connectors/com.criora/criora)
  🔓 - Climate and disaster risk for any place: nearby hazards, 7-day weather risk, climate to 2080, country risk, risk map.
- [Datakoot Weather & Geo](https://datakoot.com/weather-geo) `https://weather.datakoot.com/mcp`
  [![Datakoot Weather & Geo MCP connector](https://glama.ai/mcp/connectors/com.datakoot/us-weather-forecast-alerts/badges/score.svg)](https://glama.ai/mcp/connectors/com.datakoot/us-weather-forecast-alerts)
  🔓 - NWS forecasts and alerts, current conditions, USGS earthquakes, elevation and US address geocoding.
- [DC Hub](https://dchub.cloud) `https://dchub.cloud/mcp`
  [![DC Hub MCP connector](https://glama.ai/mcp/connectors/cloud.dchub/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/cloud.dchub/mcp-server)
  🔓 - Live power, grid, gas and fiber data plus daily DCPI scores for 300+ markets, for data-center siting.
- [Digital-Simon EMS](https://umweltsicherheit.org/mcp) `https://mcp.umweltsicherheit.org/mcp`
  [![Digital-Simon EMS MCP connector](https://glama.ai/mcp/connectors/org.umweltsicherheit.mcp/digital-simon-ems/badges/score.svg)](https://glama.ai/mcp/connectors/org.umweltsicherheit.mcp/digital-simon-ems)
  🔑 - Device list, live readings and history for PV, storage and meters; switching only with explicit approval.
- [echorune](https://echorune.net) `https://echorune.net/mcp`
  [![echorune MCP connector](https://glama.ai/mcp/connectors/io.github.luoshu-echorune/echorune-radar/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.luoshu-echorune/echorune-radar)
  🔓 - Current weather, a two-hour rain curve and a rain-radar map drawn as text.
- [Elecz](https://elecz.com) `https://elecz.com/mcp`
  [![Elecz MCP connector](https://glama.ai/mcp/connectors/com.elecz/elecz/badges/score.svg)](https://glama.ai/mcp/connectors/com.elecz/elecz)
  🔓 - Real-time electricity prices, cheapest hours and contract comparison across 40+ countries and 100+ market zones.
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
- [Meteosource](https://mcp.meteosource.com) `https://mcp.meteosource.com/mcp`
  [![Meteosource MCP connector](https://glama.ai/mcp/connectors/com.meteosource.mcp/weather-mcp-server-by-meteosource/badges/score.svg)](https://glama.ai/mcp/connectors/com.meteosource.mcp/weather-mcp-server-by-meteosource)
  🔓 - Forecasts, severe-weather alerts, air quality, 20 years of history, solar and wind production; free API key needed.
- [NWS Weather](https://github.com/Thx93/mcp-weather-server) `https://agent-evidence.thx93.dev/weather/mcp`
  [![NWS Weather MCP connector](https://glama.ai/mcp/connectors/io.github.Thx93/weather/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Thx93/weather)
  🔓 - National Weather Service alerts by state code and five-period forecasts by latitude and longitude.
- [Powietrze PL (powietrze-mcp)](https://powietrze.compabase.com) `https://powietrze.compabase.com/mcp`
  [![Powietrze PL (powietrze-mcp) MCP connector](https://glama.ai/mcp/connectors/io.github.ContentWriterco/powietrze-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ContentWriterco/powietrze-mcp)
  🔓 - Air quality in Poland: live GIOŚ measurements (PM2.5, PM10, NO2, O3), smog warnings, 3-day forecast and pollen.
- [ROVE Snow Forecast](https://rove-ski.com/en/ai) `https://rove-ski.com/mcp`
  [![ROVE Snow Forecast MCP connector](https://glama.ai/mcp/connectors/com.rove-ski/snow-forecast/badges/score.svg)](https://glama.ai/mcp/connectors/com.rove-ski/snow-forecast)
  🔐 - Free 15-day snow forecasts and conditions for 667 ski resorts in North America and Japan.
- [SpotWave](https://spotwave.eu/api-docs) `https://spotwave.eu/api/mcp`
  [![SpotWave MCP connector](https://glama.ai/mcp/connectors/eu.spotwave/prices/badges/score.svg)](https://glama.ai/mcp/connectors/eu.spotwave/prices)
  🔓 - Day-ahead electricity prices for 40+ European market zones, all-in with energy tax, grid fees and VAT.
- [Sunrise-Sunset.org](https://sunrise-sunset.org/mcp) `https://api.sunrise-sunset.org/mcp`
  [![Sunrise-Sunset.org MCP connector](https://glama.ai/mcp/connectors/org.sunrise-sunset/sun-times/badges/score.svg)](https://glama.ai/mcp/connectors/org.sunrise-sunset/sun-times)
  🔓 - Sunrise, sunset, twilight, golden hour and moon times for any place and date, worldwide.
- [thirdtrail](https://thirdtrail.life/docs/mcp/) `https://thirdtrail.life/mcp`
  [![thirdtrail MCP connector](https://glama.ai/mcp/connectors/io.github.thirdtrail/thirdtrail/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.thirdtrail/thirdtrail)
  🔓 - Elevation-corrected sunrise, sunset, twilight, moon, solar irradiance, prayer and tide times; paid key to call tools.

### 📂 <a name="file-storage"></a>File Storage

- [agentleFS](https://agentlefs.com/?ref=awesome-remote-mcp-servers) `https://mcp.agentlefs.com/mcp`
  [![agentleFS MCP connector](https://glama.ai/mcp/connectors/com.agentlefs/agentlefs/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentlefs/agentlefs)
  🔐 - Agent permissions for the files your team shares: each agent reads only what its person can.
- [Box](https://box.com) `https://mcp.box.com/`
  [![Box MCP connector](https://glama.ai/mcp/connectors/com.box.mcp/box/badges/score.svg)](https://glama.ai/mcp/connectors/com.box.mcp/box)
  🔐 - Search, read, and manage files stored in Box.
- [FileFleet](https://filefleet.io/ai-assistants/) `https://mcp.filefleet.io/mcp`
  [![FileFleet MCP connector](https://glama.ai/mcp/connectors/io.filefleet/filefleet/badges/score.svg)](https://glama.ai/mcp/connectors/io.filefleet/filefleet)
  🔓 - Passport, visa and exam upload rules with official sources, file checks, and links that fix files to fit.
- [Link in Seconds](https://linkinseconds.com/docs/mcp) `https://linkinseconds.com/api/mcp`
  [![Link in Seconds MCP connector](https://glama.ai/mcp/connectors/com.linkinseconds/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.linkinseconds/mcp)
  🔓 - Upload a file and get a shareable link that never expires, plus view stats. Using the tools needs a free API key.
- [Playbook](https://dev.playbook.com/docs/guides/mcp/) `https://mcp.playbook.com/mcp`
  [![Playbook MCP connector](https://glama.ai/mcp/connectors/com.playbook/playbook/badges/score.svg)](https://glama.ai/mcp/connectors/com.playbook/playbook)
  🔐 - Media backend: search, organize, upload, and share creative files and folders.
- [quickS3](https://quicks3.com/s3-mcp-server/) `https://quicks3.com/mcp`
  [![quickS3 MCP connector](https://glama.ai/mcp/connectors/com.quicks3/quicks3/badges/score.svg)](https://glama.ai/mcp/connectors/com.quicks3/quicks3)
  🔐 - List, upload, download, and share files in S3, R2, B2, Wasabi, and Spaces buckets, scoped by delegated roles.
- [Yungle](https://yungle.co/for/ai-agents) `https://yungle.co/mcp`
  [![Yungle MCP connector](https://glama.ai/mcp/connectors/co.yungle/yungle/badges/score.svg)](https://glama.ai/mcp/connectors/co.yungle/yungle)
  🔐 - Send files to people as download links, list transfers and read download receipts, hosted in the EU.

- [Revdoku](https://revdoku.com) `https://app.revdoku.com/mcp`
  [![Revdoku MCP connector](https://glama.ai/mcp/connectors/com.revdoku/revdoku/badges/score.svg)](https://glama.ai/mcp/connectors/com.revdoku/revdoku)
  🔓 - Discover file storage and incoming email tools; reading or changing private files and mail requires OAuth.
- [Stream Vessel](https://streamvessel.com/mcp) `https://mcp.streamvessel.com`
  [![Stream Vessel MCP connector](https://glama.ai/mcp/connectors/com.streamvessel.mcp/stream-vessel/badges/score.svg)](https://glama.ai/mcp/connectors/com.streamvessel.mcp/stream-vessel)
  🔐 - Browse, search, move and share files in your own S3-compatible buckets (AWS S3, MinIO, IDrive e2).

### 💰 <a name="finance"></a>Finance

- [0s and 1s CIS](https://0sand1s.co.uk/developers) `https://0sand1s.co.uk/mcp`
  [![0s and 1s CIS MCP connector](https://glama.ai/mcp/connectors/uk.co.0sand1s/cis/badges/score.svg)](https://glama.ai/mcp/connectors/uk.co.0sand1s/cis)
  🔓 - UK CIS calculators: deductions, filing deadlines, late return penalties, gross payment test and verification.
- [100pro Token Risk Screen](https://x402.rendraputra.dev/llms.txt) `https://x402.rendraputra.dev/mcp`
  [![100pro Token Risk Screen MCP connector](https://glama.ai/mcp/connectors/dev.rendraputra/100pro-token-risk/badges/score.svg)](https://glama.ai/mcp/connectors/dev.rendraputra/100pro-token-risk)
  🔓 - Pre-trade risk screen for EVM and Solana tokens: honeypots, LP lock, holders; $0.05 via x402.


- [47620 Data API](https://47620.xyz/agents) `https://47620.xyz/mcp`
  [![47620 Data API MCP connector](https://glama.ai/mcp/connectors/xyz.47620/solana-data/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.47620/solana-data)
  🔓 - Pay-per-call data over x402 on Solana, Base and Polygon: prices, liquidity, balances, txs and token analytics.
- [990.tax](https://990.tax/mcp) `https://990.tax/mcp`
  [![990.tax MCP connector](https://glama.ai/mcp/connectors/tax.990/nonprofit-lookup/badges/score.svg)](https://glama.ai/mcp/connectors/tax.990/nonprofit-lookup)
  🔓 - IRS records on US nonprofits: exempt status, revocations, Form 990 financials, due dates and statistics.


- [Aave](https://aave.com) `https://mcp.aave.com`
  [![Aave MCP connector](https://glama.ai/mcp/connectors/com.aave.mcp/aave/badges/score.svg)](https://glama.ai/mcp/connectors/com.aave.mcp/aave)
  🔓 - Aave V3 and V4 markets, rates, wallet positions, governance and non-custodial transaction building.
- [Aayat AI](https://aayatai.com) `https://aayatai.com/mcp`
  [![Aayat AI MCP connector](https://glama.ai/mcp/connectors/io.github.faisal-maverick/aayat-ai/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.faisal-maverick/aayat-ai)
  🔓 - Crypto token scam checks, wallet risk, gas, web search and live docs; free daily trial, then USDC credits or x402.
- [Aether](https://aether-x402.vercel.app/llms.txt) `https://aether-x402.vercel.app/mcp`
  [![Aether MCP connector](https://glama.ai/mcp/connectors/io.github.francosmit94-web/aether/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.francosmit94-web/aether)
  🔓 - Base token risk verdicts (honeypot and tax simulation), prices, balances and tx data; pay per call in USDC via x402.
- [Agent Einstein](https://emc2ai.io/mcp) `https://emc2ai.io/api/mcp`
  [![Agent Einstein MCP connector](https://glama.ai/mcp/connectors/io.emc2ai/einstein/badges/score.svg)](https://glama.ai/mcp/connectors/io.emc2ai/einstein)
  🔓 - Crypto and market intelligence: 18 free tools, forecasts, whale flows, token scans; paid tools via credit or x402.


- [Agent Margin Router](https://agentmarginrouter.com) `https://agent-margin-router-production.up.railway.app/mcp`
  [![AgentMarginRouter MCP connector](https://glama.ai/mcp/connectors/io.github.AgentMarginRouter/agent-margin-router/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AgentMarginRouter/agent-margin-router)
  🔓 - Live gas fees and USD tx costs on Base, Ethereum, Arbitrum, Optimism and Polygon; x402 pay-per-call.
- [Agent Paywire Library](https://agentpaywire.com) `https://mcp.agentpaywire.com/mcp`
  [![Agent Paywire Library MCP connector](https://glama.ai/mcp/connectors/com.agentpaywire/library/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentpaywire/library)
  🔓 - Agent payments library (L402, x402, Lightning, stablecoins): sources, datasets, verified bots, trust checklist.
- [Agent Rynku](https://agentrynku.pl/en/mcp) `https://agentrynku.pl/api/mcp`
  [![Agent Rynku MCP connector](https://glama.ai/mcp/connectors/pl.agentrynku/gpw/badges/score.svg)](https://glama.ai/mcp/connectors/pl.agentrynku/gpw)
  🔓 - GPW daily equity prices, company search, quarterly financials and ratios, earnings calendar, and issuer dividends.
- [Agent Souk](https://agentsouk.dev) `https://api.agentsouk.dev/mcp`
  [![Agent Souk MCP connector](https://glama.ai/mcp/connectors/dev.agentsouk/agentsouk/badges/score.svg)](https://glama.ai/mcp/connectors/dev.agentsouk/agentsouk)
  🔓 - Marketplace for AI agents: register in one call, hire or sell services, and post USDC bounties on Base.
- [Agent Tollgate](https://skinwinking.com) `https://skinwinking.com/mcp`
  [![Agent Tollgate MCP connector](https://glama.ai/mcp/connectors/com.skinwinking/agent-tollgate/badges/score.svg)](https://glama.ai/mcp/connectors/com.skinwinking/agent-tollgate)
  🔓 - Order book imbalance, token rug-pull audits and swap routes for agents; paid per call in USDC via x402.
- [AgentForge](https://agentforge-taupe.vercel.app) `https://agentforge-taupe.vercel.app/mcp`
  [![AgentForge MCP connector](https://glama.ai/mcp/connectors/io.github.acarchidi/agentforge/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.acarchidi/agentforge)
  🔓 - DeFi safety: pre-sign EVM tx simulation, sanctions and scam address checks, risk-scored token launches; x402 USDC.
- [Agentic Firmenbuch](https://www.agentic-firmenbuch.at) `https://register.agentic-firmenbuch.at/mcp`
  [![Agentic Firmenbuch MCP connector](https://glama.ai/mcp/connectors/io.github.jkbngb/handelsregister/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jkbngb/handelsregister)
  🔓 - Austrian Firmenbuch + German Handelsregister: master data, financials and ratios; free API key for calls.
- [AgenticBooks](https://www.agenticbooks.ai) `https://mcp.agenticbooks.ai/mcp`
  [![AgenticBooks MCP connector](https://glama.ai/mcp/connectors/ai.agenticbooks.mcp/agentic-books/badges/score.svg)](https://glama.ai/mcp/connectors/ai.agenticbooks.mcp/agentic-books)
  🔐 - Double-entry startup books from live bank and billing feeds: P&L, balances, transaction review, period close.
- [Agentum](https://agentum.asimplek.cloud) `https://agentum.asimplek.cloud/mcp`
  [![Agentum MCP connector](https://glama.ai/mcp/connectors/io.github.Algiras/agentum-entity-resolver/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Algiras/agentum-entity-resolver)
  🔓 - Company registry lookup, EU VAT, sanctions, vendor KYB, IBAN and wallet checks; 5 free calls/day, then x402.
- [AgentWorld](https://agentworld.me) `https://agentworld.me/mcp`
  🔓 - Agent economy on Base: free city, agent and job data, plus x402-paid chat and credit scoring.
- [Aggregate](https://aggregate.finance) `https://app.aggregate.finance/mcp`
  [![Aggregate MCP connector](https://glama.ai/mcp/connectors/finance.aggregate/aggregate/badges/score.svg)](https://glama.ai/mcp/connectors/finance.aggregate/aggregate)
  🔐 - Every company's money in one ledger: cash, runway, invoices, payroll. Records money, can't move it.
- [AI Trading Signals](https://signals.x70.ai/mcp-docs) `https://signals.x70.ai/mcp`
  [![AI Trading Signals MCP connector](https://glama.ai/mcp/connectors/ai.x70.signals/ai-trading-signals/badges/score.svg)](https://glama.ai/mcp/connectors/ai.x70.signals/ai-trading-signals)
  🔓 - Live crypto trading signals with reasoning and verified outcomes; free key for the full feed, Pro for trade levels.
- [AIKIT](https://tradingcheckup.com/aikit/) `https://api.tradingcheckup.com/aikit/mcp`
  [![AIKIT MCP connector](https://glama.ai/mcp/connectors/com.tradingcheckup/aikit/badges/score.svg)](https://glama.ai/mcp/connectors/com.tradingcheckup/aikit)
  🔓 - Dated, sourced exchange rules (tick size, min order, fees) for 8 exchanges, plus a rule checker for trading-bot code.
- [aikstockdata](https://aikstockdata.com/en) `https://mcp.aikstockdata.com/mcp`
  [![aikstockdata MCP connector](https://glama.ai/mcp/connectors/com.aikstockdata/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.aikstockdata/mcp)
  🔓 - Korean stocks: daily closes, minute-stamped DART filings, earnings and post-filing price paths.
- [AIStrategyMiner](https://aistrategyminer.com/en/docs/ai/connect) `https://aistrategyminer.com/mcp`
  [![AIStrategyMiner MCP connector](https://glama.ai/mcp/connectors/com.aistrategyminer/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.aistrategyminer/mcp)
  🔓 - Draft and validate trading strategy flows from templates, then open them in a visual no-code Strategy Builder.
- [Algolab MCP](https://algolab.vn/mcp) `https://mcp.algolab.vn/free`
  [![Algolab MCP connector](https://glama.ai/mcp/connectors/vn.algolab/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/vn.algolab/mcp)
  🔓 - Vietnam stock market data: prices, financials, broker research, macro indicators and a VN-Index forecast.
- [algoum](https://algoum.de/) `https://api.algoum.de/v1/mcp`
  [![algoum MCP connector](https://glama.ai/mcp/connectors/de.algoum.api/algoum/badges/score.svg)](https://glama.ai/mcp/connectors/de.algoum.api/algoum)
  🔑 - SEC EDGAR insider trades (Form 4/5), 8-K events, 13F holdings and insider cluster-buy signals.
- [AlphaGrowth](https://alphagrowth.io/mcp-server) `https://alphagrowth.io/mcp`
  [![AlphaGrowth MCP connector](https://glama.ai/mcp/connectors/io.alphagrowth/data/badges/score.svg)](https://glama.ai/mcp/connectors/io.alphagrowth/data)
  🔓 - Free crypto data: TVL, fees, funding rounds, investors, yields, token unlocks and DAO treasuries.
- [AlphaPipeline](https://alphapipeline-eu.onrender.com) `https://alphapipeline-eu.onrender.com/mcp`
  [![AlphaPipeline MCP connector](https://glama.ai/mcp/connectors/com.onrender.alphapipeline/alpha-pipeline-agent-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.onrender.alphapipeline/alpha-pipeline-agent-mcp)
  🔓 - Crypto trading data via x402: Polymarket arbitrage, kimchi premium, token unlocks and funding rates.
- [AlphaYou Market Intelligence](https://alphayou.net/?utm_source=outreach&utm_medium=outreach&utm_campaign=research-resources-oct-2026&utm_content=awesome-remote-mcp) `https://alphayou.net/api/mcp/market`
  [![AlphaYou MCP connector](https://glama.ai/mcp/connectors/net.alphayou/market-intelligence/badges/score.svg)](https://glama.ai/mcp/connectors/net.alphayou/market-intelligence)
  🔓 - Read-only US stock filings, smart money and Hyperliquid wallet research with source links and dates.
- [Altair](https://altairworld.com/mcp) `https://altairworld.com/mcp`
  [![Altair MCP connector](https://glama.ai/mcp/connectors/com.altairworld/site/badges/score.svg)](https://glama.ai/mcp/connectors/com.altairworld/site)
  🔓 - Full TradingAgents equity research reports by ticker (buy/hold/sell, bull/bear debate), free and read-only.
- [American Default Research](https://americandefault.org/press/mcp/) `https://mcp.americandefault.org/mcp`
  [![American Default Research MCP connector](https://glama.ai/mcp/connectors/org.americandefault/research/badges/score.svg)](https://glama.ai/mcp/connectors/org.americandefault/research)
  🔓 - Read-only U.S. household-finance indicators, county distress scorecards and the American Distress Index, with citations.
- [Ankr Agent RPC](https://www.ankr.com/web3-api/agent-rpc/) `https://mcp.ankr.com/rpc`
  [![Ankr Agent RPC MCP connector](https://glama.ai/mcp/connectors/io.github.w3tech/agent-rpc-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.w3tech/agent-rpc-mcp)
  🔓 - Read chain data on 200+ networks and Sui: logs, balances, NFTs, decoded calls. Ankr API key, or pay per call via x402.
- [Antevo Executive Brief](https://antevo.ch/executive/) `https://api.antevo.ch/mcp/executive/mcp`
  [![Antevo Executive Brief MCP connector](https://glama.ai/mcp/connectors/ch.antevo/executive/badges/score.svg)](https://glama.ai/mcp/connectors/ch.antevo/executive)
  🔓 - Daily markets, macro and world-events brief: market regime, themes, risks, catalysts and country drilldowns.
- [apifirme](https://apifirme.dev) `https://api.apifirme.dev/mcp`
  [![apifirme MCP connector](https://glama.ai/mcp/connectors/dev.apifirme.api/apifirme/badges/score.svg)](https://glama.ai/mcp/connectors/dev.apifirme.api/apifirme)
  🔐 - Romanian company data from official registers: status, VAT, financial statements, new registrations, BNR rates.
- [Ariadne Nexus](https://ariadnenexus.com/docs/mcp) `https://ariadnenexus.com/mcp`
  [![Ariadne Nexus MCP connector](https://glama.ai/mcp/connectors/com.ariadnenexus/ariadne-nexus-quantitative-engine/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/ariadne-nexus-quantitative-engine)
  🔓 - Sovereign bond valuation, FINRA TRACE debt radar, OFAC screening, and clearing fee modeling with x402 payments.
- [Ärikratt](https://arikratt.ee/en/mcp) `https://arikratt.ee/mcp`
  [![Ärikratt MCP connector](https://glama.ai/mcp/connectors/ee.arikratt/arikratt/badges/score.svg)](https://glama.ai/mcp/connectors/ee.arikratt/arikratt)
  🔐 - Estonian companies, EMTAK sectors, regions, grants, open calls and public procurement from official registers.
- [Asiento Uno](https://asientouno.com/mcp) `https://mcp.asientouno.com/mcp`
  [![Asiento Uno MCP connector](https://glama.ai/mcp/connectors/com.asientouno.mcp/asiento-uno-registro-mercantil-de-espana/badges/score.svg)](https://glama.ai/mcp/connectors/com.asientouno.mcp/asiento-uno-registro-mercantil-de-espana)
  🔓 - Spanish company registry (BORME) with grants and procurement per company, linked to sources. Data tools need a free key.
- [AStockEvent](https://astockevent.com/) `https://astockevent.com/mcp/`
  [![AStockEvent MCP connector](https://glama.ai/mcp/connectors/com.astockevent/astockevent/badges/score.svg)](https://glama.ai/mcp/connectors/com.astockevent/astockevent)
  🔓 - Source-linked Chinese A-share filings, penalties, share reductions, regulatory letters and stock halts.
- [ausecon](https://auseconmcp.com) `https://mcp.auseconmcp.com/mcp`
  [![ausecon MCP connector](https://glama.ai/mcp/connectors/io.github.AnthonyPuggs/ausecon-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AnthonyPuggs/ausecon-mcp-server)
  🔓 - Read-only Australian economic data from ABS, RBA and APRA, including GDP, inflation and interest rates.
- [Autoview](https://autoview.com/) `https://api.autoview.com/mcp/`
  [![Autoview MCP connector](https://glama.ai/mcp/connectors/io.github.autoview-com/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.autoview-com/mcp)
  🔓 - Trade across 22+ exchanges and brokers; dry-run by default, live trading on Kraken and Crypto.com.
- [BankRegReports](https://www.bankregreports.com/mcp/) `https://api.bankregreports.com/api/mcp/`
  [![BankRegReports MCP connector](https://glama.ai/mcp/connectors/com.bankregreports/bankregreports/badges/score.svg)](https://glama.ai/mcp/connectors/com.bankregreports/bankregreports)
  🔓 - US bank and credit union data from call reports, UBPR, FDIC, NCUA and SEC filings: profiles, peers and screens.
- [Bankrolled.ai Agent Hub](https://bankrolled.ai) `https://bankrolled.ai/mcp`
  [![Bankrolled.ai Agent Hub MCP connector](https://glama.ai/mcp/connectors/ai.bankrolled/bankrolledai-agent-hub/badges/score.svg)](https://glama.ai/mcp/connectors/ai.bankrolled/bankrolledai-agent-hub)
  🔓 - Free, sourced money facts and deposit-insurance schemes for the US, UK, Canada, Australia and NZ; cites bankrolled.com.
- [BackPow PoW Oracle](https://backpow.com/mcp) `https://mcp.backpow.com/mcp`
  [![BackPow PoW Oracle MCP connector](https://glama.ai/mcp/connectors/com.backpow/pow-mining-oracle/badges/score.svg)](https://glama.ai/mcp/connectors/com.backpow/pow-mining-oracle)
  🔓 - Live PoW mining data for 126+ networks: difficulty, hashrate, solo-mining odds, cost of production, hardware profit.
- [Banxico (Banco de México)](https://inakisobera.me/mcp-banxico/) `https://banxico-mcp.duckdns.org/mcp`
  [![Banxico MCP connector](https://glama.ai/mcp/connectors/io.github.nanisadw3/banxico/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.nanisadw3/banxico)
  🔓 - Official Mexican economic data from Banco de México: USD/MXN, INPC inflation, UDIS, TIIE and reserves.
- [Barakah Halal Stock Screen](https://barakahprofits.com) `https://app.barakahprofits.com/mcp`
  [![Barakah Halal Stock Screen MCP connector](https://glama.ai/mcp/connectors/com.barakahprofits.app/halal-screen/badges/score.svg)](https://glama.ai/mcp/connectors/com.barakahprofits.app/halal-screen)
  🔓 - Halal (Sharia) screen for US stocks: AAOIFI-style checks plus the dated history of each verdict change.
- [Base Web3 M2M Hub](https://auditor-x402.onrender.com) `https://auditor-x402.onrender.com/mcp/v1`
  [![Base Web3 M2M Hub MCP connector](https://glama.ai/mcp/connectors/com.onrender.auditor-x402/base-web3-m2m-hub/badges/score.svg)](https://glama.ai/mcp/connectors/com.onrender.auditor-x402/base-web3-m2m-hub)
  🔓 - Live Base Mainnet data: gas, DEX arbitrage, whale tracking, Aave loans, token security; pay per call via x402.
- [Based Loans](https://based.loans) `https://mcp.based.loans/mcp`
  [![Based Loans MCP connector](https://glama.ai/mcp/connectors/io.github.0xVarius/basedloans/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.0xVarius/basedloans)
  🔓 - Borrow USDC against Base tokens with no liquidations, or lend USDC: quotes, token risk and unsigned txs.
- [Before the Lot](https://beforethelot.com/connect) `https://beforethelot.com/mcp`
  [![Before the Lot MCP connector](https://glama.ai/mcp/connectors/com.beforethelot/before-the-lot/badges/score.svg)](https://glama.ai/mcp/connectors/com.beforethelot/before-the-lot)
  🔓 - Car-buying math and state rules: out-the-door prices, dealer quote checks, leases, trade-ins and local tax in 50 states.
- [Benefits City](https://aiagentscity.com/benefits) `https://aiagentscity.com/benefits/mcp`
  [![Benefits City MCP connector](https://glama.ai/mcp/connectors/io.github.entradox/benefits-city/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.entradox/benefits-city)
  🔓 - US bank, savings and credit-card signup bonuses, each source-checked, with expiry dates.
- [BestEOR](https://besteor.co/mcp-server) `https://besteor.co/api/mcp`
  [![BestEOR MCP connector](https://glama.ai/mcp/connectors/co.besteor/eor-data/badges/score.svg)](https://glama.ai/mcp/connectors/co.besteor/eor-data)
  🔓 - Compare EOR provider fees and coverage, plus employer costs, minimum wage and leave rules for 139 countries, all cited.
- [Beyond Payday](https://beyondpayday.com/mcp) `https://beyondpayday.com/api/mcp`
  [![Beyond Payday MCP connector](https://glama.ai/mcp/connectors/com.beyondpayday/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.beyondpayday/mcp)
  🔐 - Household finance planner: cash flow, net worth, bills, debts, savings goals and retirement projections.
- [Billstride](https://billstride.com/mcp) `https://billstride.com/api/mcp`
  [![Billstride MCP connector](https://glama.ai/mcp/connectors/com.billstride/billstride/badges/score.svg)](https://glama.ai/mcp/connectors/com.billstride/billstride)
  🔐 - Create, send and track invoices, chase overdue payments, see revenue, and export ZUGFeRD, XRechnung and DATEV.
- [BillWatch](https://getbillwatchdog.com) `https://getbillwatchdog.com/mcp`
  [![BillWatch MCP connector](https://glama.ai/mcp/connectors/com.getbillwatchdog/billwatch/badges/score.svg)](https://glama.ai/mcp/connectors/com.getbillwatchdog/billwatch)
  🔓 - Search current US streaming and VPN plan prices and price history, with links to each provider.
- [BitcoinYield](https://bitcoinyield.co/docs) `https://bitcoinyield.co/api/mcp`
  [![BitcoinYield MCP connector](https://glama.ai/mcp/connectors/co.bitcoinyield/yields/badges/score.svg)](https://glama.ai/mcp/connectors/co.bitcoinyield/yields)
  🔓 - Live yields for BTC, ETH, stablecoins and 60+ assets across DeFi and CeFi, risk-ranked with an A-D grade each.
- [Bitquery](https://bitquery.io/products/bitquery-mcp-server) `https://mcp.bitquery.io`
  [![Bitquery MCP connector](https://glama.ai/mcp/connectors/io.bitquery/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.bitquery/mcp)
  🔐 - Crypto investigations and trading data: fund tracing, address labels, AML risk, DEX trades, OHLCV and trader PnL.
- [BlazePhoenix](https://blazephoenix.xyz) `https://blazephoenix.xyz/mcp`
  [![BlazePhoenix MCP connector](https://glama.ai/mcp/connectors/xyz.blazephoenix/blaze-phoenix-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.blazephoenix/blaze-phoenix-mcp)
  🔓 - Quotes and verified swap calldata for an on-chain DEX aggregator, computed on your own RPC.
- [BLIA — Bank Product Terms](https://www.bliahub.com) `https://mcp.bliahub.com/mcp`
  [![BLIA — Bank Product Terms MCP connector](https://glama.ai/mcp/connectors/com.bliahub/blia-catalogue/badges/score.svg)](https://glama.ai/mcp/connectors/com.bliahub/blia-catalogue)
  🔓 - Bank account terms as banks publish them, dated: fees, waivers, offers. Read-only. Canada today.
- [BrinkerAdvisor Rates](https://mcp.brinkeradvisor.com/support) `https://mcp.brinkeradvisor.com/mcp`
  [![BrinkerAdvisor Rates MCP connector](https://glama.ai/mcp/connectors/com.brinkeradvisor.mcp/brinker-advisor-rates/badges/score.svg)](https://glama.ai/mcp/connectors/com.brinkeradvisor.mcp/brinker-advisor-rates)
  🔓 - Compare CD, money-market and Treasury rates from public records and build illustrative ladders.
- [Business Verify](https://mbiyepyh.gensparkclaw.com/docs) `https://mbiyepyh.gensparkclaw.com/mcp`
  [![Business Verify MCP connector](https://glama.ai/mcp/connectors/com.gensparkclaw.mbiyepyh/business-verify/badges/score.svg)](https://glama.ai/mcp/connectors/com.gensparkclaw.mbiyepyh/business-verify)
  🔑 - Check a US business's status, formation date and registered agent by name and state; $0.05 a call.
- [CalcBright](https://calcbright.com/developers) `https://calcbright.com/mcp`
  [![CalcBright MCP connector](https://glama.ai/mcp/connectors/io.github.drshairsultan/calcbright/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.drshairsultan/calcbright)
  🔓 - 100+ calculators: mortgage, take-home pay, sales tax/VAT, BMI, dates, units, live currency and gold prices.
- [Candor Finance](https://candor.money) `https://api.candor.money/mcp`
  [![Candor Finance MCP connector](https://glama.ai/mcp/connectors/money.candor/candor-finance/badges/score.svg)](https://glama.ai/mcp/connectors/money.candor/candor-finance)
  🔐 - Personal-finance workspace: connected accounts, spending, budgets, goals and investments.
- [Cashboard Signals](https://cashboard.live/docs/signals-api) `https://cashboard.live/mcp`
  [![Cashboard Signals MCP connector](https://glama.ai/mcp/connectors/live.cashboard/signals/badges/score.svg)](https://glama.ai/mcp/connectors/live.cashboard/signals)
  🔓 - Hyperliquid perps scans, OI movers, funding extremes, Solana swaps; pay per call in USDC via x402, free daily samples.
- [CeylonCharts](https://www.ceyloncharts.com) `https://mcp.ceyloncharts.com/mcp`
  [![CeylonCharts MCP connector](https://glama.ai/mcp/connectors/com.ceyloncharts.mcp/ceylon-charts/badges/score.svg)](https://glama.ai/mcp/connectors/com.ceyloncharts.mcp/ceylon-charts)
  🔐 - Colombo Stock Exchange (CSE) market data — prices, fundamentals, technicals, screening, and macro indicators.
- [Clear Tape](https://cleartape.ai/mcp) `https://app.cleartape.ai/mcp`
  [![Clear Tape MCP connector](https://glama.ai/mcp/connectors/ai.cleartape/clear-tape/badges/score.svg)](https://glama.ai/mcp/connectors/ai.cleartape/clear-tape)
  🔓 - Exact trading calculators (position size, R:R, expectancy, ATR stop, Kelly), system rules, glossary and lesson search.
- [Cleave for Agents](https://cleave.fi/docs/agents) `https://api.cleave.fi/mcp`
  [![Cleave for Agents MCP connector](https://glama.ai/mcp/connectors/fi.cleave/swap/badges/score.svg)](https://glama.ai/mcp/connectors/fi.cleave/swap)
  🔓 - Plans split token swaps, cross-chain swaps and gas top-ups on 6 EVM chains as unsigned calls.
- [Coldpine](https://coldpine.io/developers) `https://coldpine.io/api/mcp`
  [![Coldpine MCP connector](https://glama.ai/mcp/connectors/io.coldpine/congress-disclosures/badges/score.svg)](https://glama.ai/mcp/connectors/io.coldpine/congress-disclosures)
  🔓 - US congressional stock trades parsed from House and Senate STOCK Act filings: members, stocks, filings and filing lag.
- [Compabase](https://compabase.com/mcp) `https://compabase.com/api/mcp`
  [![Compabase MCP connector](https://glama.ai/mcp/connectors/io.github.ContentWriterco/compabase/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ContentWriterco/compabase)
  🔓 - 3M+ Polish companies from KRS and CEIDG: financials, board members, rankings, tenders and public registries.
- [Company Check](https://api.foretak.dev) `https://api.foretak.dev/mcp`
  [![Company Check MCP connector](https://glama.ai/mcp/connectors/io.github.foretak/registry-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.foretak/registry-mcp)
  🔓 - Look up companies and filings in the UK, Norwegian and Swedish registers, plus UK charges and insolvencies.
- [CompliAPI](https://compliapi.com) `https://api.compliapi.com/mcp`
  [![CompliAPI MCP connector](https://glama.ai/mcp/connectors/com.compliapi/screening/badges/score.svg)](https://glama.ai/mcp/connectors/com.compliapi/screening)
  🔓 - Screen crypto addresses, emails, websites, IDs and countries against OFAC, EU, UK and other sanctions lists.
- [Compound Interesting](https://compoundinterest.ing/mcp) `https://api.compoundinterest.ing/mcp`
  [![Compound Interesting MCP connector](https://glama.ai/mcp/connectors/ing.compoundinterest/market-intelligence/badges/score.svg)](https://glama.ai/mcp/connectors/ing.compoundinterest/market-intelligence)
  🔓 - Insider trades, Congress disclosures and 13F holdings for 4,600+ US stocks; data needs a free key.
- [Conduit EDGAR](https://router.pipavia.com) `https://conduit-filings-fundamentals.nrupalakolkar.workers.dev/mcp`
  [![Conduit EDGAR MCP connector](https://glama.ai/mcp/connectors/org.aimlds/edgar/badges/score.svg)](https://glama.ai/mcp/connectors/org.aimlds/edgar)
  🔐 - SEC EDGAR filings and fundamentals for agents under governed, receipted access; analysis only, never financial advisory.
- [CortexCloud](https://api.cortexcloud.org) `https://api.cortexcloud.org/mcp`
  [![CortexCloud MCP connector](https://glama.ai/mcp/connectors/io.github.jonahthan433/cortexcloud/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jonahthan433/cortexcloud)
  🔓 - Pay-per-call on-chain data: token balances, NFTs, tx history, wallet intel, token risk, whale alerts.
- [CryptoKeyhole](https://cryptokeyhole.com/mcp/) `https://cryptokeyhole.com/api/v1/mcp`
  [![CryptoKeyhole MCP connector](https://glama.ai/mcp/connectors/com.cryptokeyhole/analytics/badges/score.svg)](https://glama.ai/mcp/connectors/com.cryptokeyhole/analytics)
  🔓 - On-chain and market metrics for Bitcoin, Ethereum and more from its own nodes, as exact values with provenance.
- [date-firme](https://date-firme.dev-box.ro/llms.txt) `https://date-firme.dev-box.ro/mcp`
  [![date-firme MCP connector](https://glama.ai/mcp/connectors/ro.dev-box.date-firme/date-firme/badges/score.svg)](https://glama.ai/mcp/connectors/ro.dev-box.date-firme/date-firme)
  🔓 - Romanian company data (ONRC/ANAF): CUI lookup, financials, KYB risk, CAEN benchmarks, B2B leads; x402 USDC.
- [Datakoot Base Intel](https://datakoot.com/base-intel) `https://base.datakoot.com/mcp`
  [![Datakoot Base Intel MCP connector](https://glama.ai/mcp/connectors/com.datakoot/base-onchain-wallet-tokens/badges/score.svg)](https://glama.ai/mcp/connectors/com.datakoot/base-onchain-wallet-tokens)
  🔓 - Read-only Base network data: ETH and USDC balances, ERC-20 token info, gas price and tx status.
- [Datakoot Economy Intel](https://datakoot.com/economy-intel) `https://economy.datakoot.com/mcp`
  [![Datakoot Economy Intel MCP connector](https://glama.ai/mcp/connectors/com.datakoot/economy-gdp-inflation-unemployment/badges/score.svg)](https://glama.ai/mcp/connectors/com.datakoot/economy-gdp-inflation-unemployment)
  🔓 - World Bank indicators for any country plus US BLS series such as CPI, unemployment and payrolls.
- [Datakoot Filings Intel](https://datakoot.com/filings-intel) `https://filings.datakoot.com/mcp`
  [![Datakoot Filings Intel MCP connector](https://glama.ai/mcp/connectors/com.datakoot/sec-edgar-filings/badges/score.svg)](https://glama.ai/mcp/connectors/com.datakoot/sec-edgar-filings)
  🔓 - SEC EDGAR filings, full-text search, XBRL financials and Form 3/4/5 insider transactions.
- [Datakoot Market Intel](https://datakoot.com/market-intel) `https://market.datakoot.com/mcp`
  [![Datakoot Market Intel MCP connector](https://glama.ai/mcp/connectors/com.datakoot/fx-currency-exchange-rates/badges/score.svg)](https://glama.ai/mcp/connectors/com.datakoot/fx-currency-exchange-rates)
  🔓 - European Central Bank reference FX rates: latest, historical, time series and currency conversion.
- [DFX Intelligence](https://dfxintel.com/agents) `https://exchange-production-9123.up.railway.app/mcp/core?c=dir-awremote`
  [![DFX Intelligence MCP connector](https://glama.ai/mcp/connectors/io.github.Capital-W-Holdings/us-property-parcel-real-estate-debt/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Capital-W-Holdings/us-property-parcel-real-estate-debt)
  🔓 - Private credit for agents: BDC lenders, borrowers, marks, spreads and maturities, cited to SEC filings.
- [DokladBot](https://dokladbot.cz/funkce/ai-asistent) `https://dokladbot.cz/api/mcp`
  [![DokladBot MCP connector](https://glama.ai/mcp/connectors/cz.dokladbot/dokladbot/badges/score.svg)](https://glama.ai/mcp/connectors/cz.dokladbot/dokladbot)
  🔐 - Czech accounting for freelancers: invoices, VAT summaries, tax deadlines, bank transactions and data box envelopes.
- [CryptoMacro](https://asistent-crypto.vercel.app/a2a) `https://asistent-crypto.vercel.app/mcp`
  [![CryptoMacro MCP connector](https://glama.ai/mcp/connectors/io.github.dopionut-jpg/crypto-data-market-analysis/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.dopionut-jpg/crypto-data-market-analysis)
  🔓 - Crypto positioning and macro regime: funding, open interest, implied volatility and Fed rates.
- [Cryptominium](https://cryptominium.com) `https://cryptominium.com/mcp`
  [![Cryptominium MCP connector](https://glama.ai/mcp/connectors/com.cryptominium/cryptominium/badges/score.svg)](https://glama.ai/mcp/connectors/com.cryptominium/cryptominium)
  🔓 - Measured crypto exit costs, a monthly liquidity index, and address and transaction lookups. Read-only.
- [CurveCall](https://curvecall.onrender.com) `https://curvecall.onrender.com/mcp/`
  [![CurveCall MCP connector](https://glama.ai/mcp/connectors/io.github.arbonomous/curvecall/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.arbonomous/curvecall)
  🔓 - Trade quotes and slippage, token snapshots and rug-risk scans; $0.001-$0.01 per call via x402.
- [CVR Lookup](https://cvrlookup.dk/mcp) `https://cvrlookup.dk/api/mcp`
  [![CVR Lookup MCP connector](https://glama.ai/mcp/connectors/dk.cvrlookup/cvr-lookup/badges/score.svg)](https://glama.ai/mcp/connectors/dk.cvrlookup/cvr-lookup)
  🔓 - Danish company register: lookups, name search and annual-report financials; data needs a free key.
- [DearmasTrader](https://dearmastrader.com) `https://app.dearmastrader.com/api/mcp`
  [![DearmasTrader MCP connector](https://glama.ai/mcp/connectors/com.dearmastrader/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.dearmastrader/mcp)
  🔐 - Run DCA and grid crypto bots on Binance, Bybit, MEXC, OKX and Bitget and backtest them on years of history.
- [DEBYKO](https://debyko.com) `https://mcp.debyko.com/mcp`
  [![DEBYKO MCP connector](https://glama.ai/mcp/connectors/com.debyko/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.debyko/mcp)
  🔐 - Live and historical crypto derivatives data across venues: books, funding, candles and DQL screens.
- [DeepLedger](https://deepledger.ai) `https://mcp.deepledger.ai/mcp`
  [![DeepLedger MCP connector](https://glama.ai/mcp/connectors/ai.deepledger/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.deepledger/mcp)
  🔐 - AI accountant for QuickBooks: record transactions, run reports, manage AR/AP and close the month.
- [Dexra](https://dexra.dev) `https://api.dexra.dev/mcp`
  [![Dexra MCP connector](https://glama.ai/mcp/connectors/dev.dexra/dexra/badges/score.svg)](https://glama.ai/mcp/connectors/dev.dexra/dexra)
  🔓 - Solana token, launch, wallet, pool, perp and swap checks with ok/caution/avoid verdicts; USDC per call via x402.
- [DigiData](https://www.digi-data.nl/en/mcp) `https://mcp.digi-data.nl/mcp`
  [![DigiData MCP connector](https://glama.ai/mcp/connectors/nl.digi-data.mcp/digi-data/badges/score.svg)](https://glama.ai/mcp/connectors/nl.digi-data.mcp/digi-data)
  🔐 - Read-only business data from Exact Online, Twinfield, AFAS and 30+ sources: list, query and aggregate tables.
- [Diogenes Web3 Security](https://diogenesgateway.com/#web3-security) `https://diogenesgateway.com/mcp/web3-security`
  [![Diogenes Web3 Security MCP connector](https://glama.ai/mcp/connectors/io.github.stand-out-of-my-sun/diogenes-web3-security-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.stand-out-of-my-sun/diogenes-web3-security-mcp)
  🔓 - EIP-712 and Permit2 phishing decoders, Solana priority fee oracle, and token honeypot auditor.
- [Eagle Virtual](https://eaglevirtual.com/mcp) `https://mcp.eaglevirtual.com/mcp`
  [![Eagle Virtual MCP connector](https://glama.ai/mcp/connectors/com.eaglevirtual/stablecoin-freeze-tracker/badges/score.svg)](https://glama.ai/mcp/connectors/com.eaglevirtual/stablecoin-freeze-tracker)
  🔓 - Check any wallet against the dated on-chain record of USDT and USDC blacklistings, freezes and seizures.
- [Edgrapi](https://edgrapi.com) `https://api.edgrapi.com/mcp`
  [![Edgrapi MCP connector](https://glama.ai/mcp/connectors/io.github.paperandbeyond23-gif/edgrapi-skills/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.paperandbeyond23-gif/edgrapi-skills)
  🔓 - SEC EDGAR filings as JSON: Form 4 insider trades, 8-K, 13F, 13D/G stakes, XBRL; data tools need a free key.
- [egrul.org](https://egrul.org) `https://egrul.org/mcp/`
  [![egrul.org MCP connector](https://glama.ai/mcp/connectors/org.egrul/egrulorg/badges/score.svg)](https://glama.ai/mcp/connectors/org.egrul/egrulorg)
  🔓 - Russian company/individual checks: EGRUL/EGRIP, sanctions, foreign-agent, bankruptcy; most tools need a subscription.
- [El Tablero](https://eltablero.ar/docs) `https://eltablero.ar/api/mcp`
  [![El Tablero MCP connector](https://glama.ai/mcp/connectors/ar.eltablero/el-tablero-argentina-economic-data/badges/score.svg)](https://glama.ai/mcp/connectors/ar.eltablero/el-tablero-argentina-economic-data)
  🔓 - Argentine economic data from BCRA and INDEC: FX, inflation, rates, reserves, projections and release calendar.

- [emissaoja](https://emissaoja.com.br/emitir-nota-fiscal-por-ia) `https://emissaoja.com.br/mcp`
  [![emissaoja MCP connector](https://glama.ai/mcp/connectors/br.com.emissaoja/nfse/badges/score.svg)](https://glama.ai/mcp/connectors/br.com.emissaoja/nfse)
  🔓 - Issue, track and cancel Brazilian service invoices (NFS-e) via Emissor Nacional, no certificate; OAuth to issue.

- [EveryCalc](https://everycalc.xyz) `https://everycalc.xyz/mcp`
  [![EveryCalc MCP connector](https://glama.ai/mcp/connectors/xyz.everycalc/every-calc/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.everycalc/every-calc)
  🔓 - 69 free finance, military, school and everyday calculators as MCP tools, each result linking its web calculator.
- [ExitValue.ai](https://exitvalue.ai/ai-connector) `https://exitvalue.ai/api/mcp`
  [![ExitValue.ai MCP connector](https://glama.ai/mcp/connectors/ai.exitvalue/ma-multiples/badges/score.svg)](https://glama.ai/mcp/connectors/ai.exitvalue/ma-multiples)
  🔓 - Median EV/EBITDA and EV/Revenue multiples by industry and deal size from closed M&A transactions.
- [FactIQ](https://www.factiq.com) `https://api.factiq.com/mcp`
  [![FactIQ MCP connector](https://glama.ai/mcp/connectors/com.factiq.api/factiq/badges/score.svg)](https://glama.ai/mcp/connectors/com.factiq.api/factiq)
  🔐 - Official economic statistics, company filings, earnings calls and market data, with sources cited.
- [Factur-X by Orvel](https://facturx.orvel.dev/docs/mcp/) `https://facturx.orvel.dev/mcp`
  [![Factur-X by Orvel MCP connector](https://glama.ai/mcp/connectors/io.github.LeBorgneAntoine/facturx/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.LeBorgneAntoine/facturx)
  🔓 - Generate, validate and read Factur-X, CII and UBL invoices; free fixed demo, paid document processing.
- [Fair Value Calculator](https://www.fairvalue-calculator.com/mcp) `https://www.fairvalue-calculator.com/mcp`
  [![Fair Value Calculator MCP connector](https://glama.ai/mcp/connectors/com.fairvalue-calculator/fair-value/badges/score.svg)](https://glama.ai/mcp/connectors/com.fairvalue-calculator/fair-value)
  🔐 - Fair value estimates, quality scores and screening for 35,000+ stocks worldwide, plus watchlist and price alerts.
- [Fast GST Refund](https://fastgstrefund.com/for-agents/) `https://fastgstrefund.com/mcp`
  [![Fast GST Refund MCP connector](https://glama.ai/mcp/connectors/com.fastgstrefund/fast-gst-refund/badges/score.svg)](https://glama.ai/mcp/connectors/com.fastgstrefund/fast-gst-refund)
  🔓 - Indian GST refund guidance, validation and Statement 3/Annexure B JSON; free checks, optional OAuth for downloads.
- [Fi-Plan](https://www.fi-plan.in) `https://www.fi-plan.in/mcp`
  [![Fi-Plan MCP connector](https://glama.ai/mcp/connectors/in.fi-plan/fi-plan/badges/score.svg)](https://glama.ai/mcp/connectors/in.fi-plan/fi-plan)
  🔓 - Financial simulator for Indian salaries: loans, taxes, SIPs, and 50-year FIRE plans.
- [Financial Evidence](https://beepboop2025.github.io/financial-evidence-skills/) `https://liquilens.in/mcp/financial-evidence`
  [![Financial Evidence MCP connector](https://glama.ai/mcp/connectors/io.github.beepboop2025/financial-evidence/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.beepboop2025/financial-evidence)
  🔓 - Route and retrieve cited funding, bank-risk and market-liquidity evidence, preserving source dates and missingness.
- [FinancialFilings](https://financialfilings.com/mcp/) `https://mcp.financialfilings.com/mcp`
  [![FinancialFilings MCP connector](https://glama.ai/mcp/connectors/eu.financialreports/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/eu.financialreports/mcp-server)
  🔐 - Regulatory filings, XBRL financials and company data from securities regulators in about 60 markets.
- [Firmoscop](https://firmoscop.ro/developers) `https://firmoscop.ro/mcp`
  [![Firmoscop MCP connector](https://glama.ai/mcp/connectors/io.github.CristianFagarasan/firmoscop/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.CristianFagarasan/firmoscop)
  🔐 - Romanian companies from official registries: search, risk verdict by tax ID with cited sources, and prospect lists.
- [FlexYield](https://flexyield.io) `https://flexyield.io/mcp`
  [![FlexYield MCP connector](https://glama.ai/mcp/connectors/io.flexyield/flex-yield-blockchain-rpc-gateway/badges/score.svg)](https://glama.ai/mcp/connectors/io.flexyield/flex-yield-blockchain-rpc-gateway)
  🔓 - RPC gateway for six mainnets with failover: balances, history, ABIs, gas and transactions; x402 pay-per-call.
- [Floatout](https://floatout.xyz) `https://floatout.xyz/api/mcp`
  [![Floatout MCP connector](https://glama.ai/mcp/connectors/xyz.floatout/floatout/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.floatout/floatout)
  🔓 - Read Floatout launch plans, guides, and Hyperliquid builder-fee research.
- [FLOPS Index](https://app.flopsindex.com/i/) `https://app.flopsindex.com/mcp`
  [![FLOPS Index MCP connector](https://glama.ai/mcp/connectors/com.flopsindex.app/flopsindex-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.flopsindex.app/flopsindex-mcp)
  🔓 - Indicative GPU rental reference prices (spot, on-demand, DePIN), refreshed every 6 hours, each with a verify URL.
- [FocusPulse](https://www.focuspulse.pro/mcp-docs.html) `https://mcp.focuspulse.pro/mcp`
  [![FocusPulse MCP connector](https://glama.ai/mcp/connectors/pro.focuspulse/focuspulse/badges/score.svg)](https://glama.ai/mcp/connectors/pro.focuspulse/focuspulse)
  🔓 - India and US news stories linked to listed companies, commodities and indices, with sources.
- [Foresee](https://go-foresee.com) `https://agents.go-foresee.com/mcp`
  [![Foresee MCP connector](https://glama.ai/mcp/connectors/io.github.Foresee-Tech/foresee/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Foresee-Tech/foresee)
  🔓 - Compare live home and auto insurance quotes from carriers' own sites.
- [Fruit Stand](https://fruitstand.dev) `https://api.fruitstand.dev/mcp`
  [![Fruit Stand MCP connector](https://glama.ai/mcp/connectors/dev.fruitstand/fund-returns/badges/score.svg)](https://glama.ai/mcp/connectors/dev.fruitstand/fund-returns)
  🔓 - Historical return data for funds and tickers.
- [FXMacroData](https://fxmacrodata.com/?utm_source=github&utm_medium=referral&utm_campaign=awesome-remote-mcp-servers&utm_content=readme) `https://mcp.fxmacrodata.com`
  [![FXMacroData MCP connector](https://glama.ai/mcp/connectors/io.github.fxmacrodata/fxmacrodata/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.fxmacrodata/fxmacrodata)
  🔓 - Official macro releases and calendars: public USD data, with an optional API key for broader coverage.
- [FxSocket](https://fxsocket.com/docs/mcp) `https://mcp.fxsocket.com/mcp`
  [![FxSocket MCP connector](https://glama.ai/mcp/connectors/com.fxsocket/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.fxsocket/mcp)
  🔑 - Read-only MetaTrader 4 and 5 accounts: balances, open positions, trade history, quotes, symbol specs and candles.
- [GasNow](https://gasnow.tools/mcp.html) `https://mcp.gasnow.tools/mcp`
  [![GasNow MCP connector](https://glama.ai/mcp/connectors/io.github.j0n777/gasnow/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.j0n777/gasnow)
  🔓 - Live gas prices, Bitcoin fees, USD cost to send USDT on 12 networks, exchange withdrawal fees.
- [Gemral Edge](https://www.gemral.com/edge) `https://mcp.gemral.com/mcp`
  [![Gemral Edge MCP connector](https://glama.ai/mcp/connectors/io.github.gemral-edge/gemral-edge/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gemral-edge/gemral-edge)
  🔐 - Point-in-time US public records: federal contracts, congressional and insider trades, lobbying, tied to tickers.
- [Glacier Planner](https://planner.glacierfinancial.ca/developers) `https://planner.glacierfinancial.ca/calculate/mcp`
  [![Glacier Planner MCP connector](https://glama.ai/mcp/connectors/io.github.marcpineault/glacier-planner-calculator/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.marcpineault/glacier-planner-calculator)
  🔓 - Free Canadian retirement projection plus one what-if for one or two adults; no account required, not personal advice.
- [Global FinReg](https://www.globalfinreg.com) `https://api2.globalfinreg.com/mcp`
  [![Global FinReg MCP connector](https://glama.ai/mcp/connectors/com.globalfinreg/lei/badges/score.svg)](https://glama.ai/mcp/connectors/com.globalfinreg/lei)
  🔓 - Look up LEIs in the global LEI register; renew, transfer and register LEIs with a Global FinReg account.
- [GlobalEntity](https://www.globalentityapi.com) `https://www.globalentityapi.com/mcp`
  [![GlobalEntity MCP connector](https://glama.ai/mcp/connectors/com.globalentityapi/company-data/badges/score.svg)](https://glama.ai/mcp/connectors/com.globalentityapi/company-data)
  🔐 - Official company data from 66 business registers: search, VAT/EORI/LEI checks, ownership, insolvency, sanctions.
- [Gloom](https://gloom.sh/docs/mcp) `https://api.gloom.sh/mcp`
  [![Gloom MCP connector](https://glama.ai/mcp/connectors/sh.gloom.api/gloom-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/sh.gloom.api/gloom-mcp)
  🔐 - US stock research: real-time quotes, financials, options flow, SEC filings, 13F, macro and news; tools need a paid plan.
- [GrantIQ](https://mcp.grantiq.us) `https://mcp.grantiq.us/mcp/`
  [![GrantIQ MCP connector](https://glama.ai/mcp/connectors/io.github.bch1212/mcp-grantiq/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bch1212/mcp-grantiq)
  🔓 - Search Grants.gov opportunities, SAM.gov contracts, agencies, deadlines, matches, and federal award history.
- [Grey Ridge](https://x402-data-api.sigrunner.workers.dev) `https://x402-data-api.sigrunner.workers.dev/mcp`
  [![Grey Ridge MCP connector](https://glama.ai/mcp/connectors/ai.greyridgesignals/tech-risk/badges/score.svg)](https://glama.ai/mcp/connectors/ai.greyridgesignals/tech-risk)
  🔓 - Pre-trade safety gate for Base tokens: GO/HOLD/BLOCK verdicts, honeypot and tax checks; pay per call in USDC via x402.
- [Grok Crypto Quant API](https://grok-backtest-api.fly.dev) `https://grok-backtest-api.fly.dev/mcp`
  [![Grok Crypto Quant API MCP connector](https://glama.ai/mcp/connectors/dev.fly.grok-backtest-api/crypto-quant/badges/score.svg)](https://glama.ai/mcp/connectors/dev.fly.grok-backtest-api/crypto-quant)
  🔓 - Crypto strategy backtests, parameter optimisation, market regime signals and token scam checks; x402 USDC on Base.
- [GROUNDTRUTH](https://groundtruths.xyz) `https://api.groundtruths.xyz/mcp`
  [![GROUNDTRUTH MCP connector](https://glama.ai/mcp/connectors/xyz.groundtruths/groundtruth/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.groundtruths/groundtruth)
  🔓 - Pump.fun and Robinhood Chain memecoin outcomes and creator records; 5 free calls a day, then x402.
- [HesapNokta](https://www.hesapnokta.com) `https://www.hesapnokta.com/mcp`
  [![HesapNokta MCP connector](https://glama.ai/mcp/connectors/io.github.omercebeci/hesapnokta/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.omercebeci/hesapnokta)
  🔓 - Turkish salary, severance, tax, rent, loan, exam and date calculators using current official rates.
- [HEY Research Lab](https://heyresearch.xyz/developers/agents) `https://heyresearch.xyz/mcp`
  [![HEY Research Lab MCP connector](https://glama.ai/mcp/connectors/io.github.hey-research-lab/hey-research/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hey-research-lab/hey-research)
  🔓 - Builder research for Robinhood Chain: which projects are still building and what they shipped, each with its source.
- [HKEx Filings](https://hkex-listco-updates.ascent-partners.com/live-mcp/) `https://hkex-listco-updates.ascent-partners.com/api/mcp`
  [![HKEx Filings MCP connector](https://glama.ai/mcp/connectors/io.github.simonplmak-cloud/hkex-filings/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.simonplmak-cloud/hkex-filings)
  🔓 - Search 25+ years of Hong Kong Stock Exchange filings, browse facets and extract document text; read-only.
- [HOLD!](https://whohold.com/en) `https://whohold.com/mcp`
  [![HOLD! MCP connector](https://glama.ai/mcp/connectors/com.whohold/hold-korea-stock-ownership-and-insider-trades/badges/score.svg)](https://glama.ai/mcp/connectors/com.whohold/hold-korea-stock-ownership-and-insider-trades)
  🔓 - Who owns Korean listed stocks: 5%+ holders, insider trades, NPS moves and average cost, from DART filings.
- [Hong Kong Insurance Connect](https://buyhongkonginsurance.com) `https://buyhongkonginsurance.com/mcp`
  [![Hong Kong Insurance Connect MCP connector](https://glama.ai/mcp/connectors/com.buyhongkonginsurance/neutral-data/badges/score.svg)](https://glama.ai/mcp/connectors/com.buyhongkonginsurance/neutral-data)
  🔓 - Sourced Hong Kong insurance facts: fulfillment ratios, VHIS plans, savings and critical illness product data.
- [HowToRomania](https://howtoromania.io) `https://api.howtoromania.io/mcp`
  [![HowToRomania MCP connector](https://glama.ai/mcp/connectors/io.howtoromania/api/badges/score.svg)](https://glama.ai/mcp/connectors/io.howtoromania/api)
  🔓 - Romanian company lookup (ANAF/ONRC), financials, KYB risk, court cases, e-Factura and legislation; 100 free credits.
- [Hundo](https://hundo.finance/connect) `https://hundo.finance/mcp`
  [![Hundo MCP connector](https://glama.ai/mcp/connectors/finance.hundo/hundo/badges/score.svg)](https://glama.ai/mcp/connectors/finance.hundo/hundo)
  🔐 - Personal ledger: net worth, accounts, budgets and IOUs, with drafts you confirm; needs a paid plan.
- [Hunter Killer](https://hunterkiller.io/for-agents) `https://agents.hunterkiller.io/mcp`
  [![Hunter Killer MCP connector](https://glama.ai/mcp/connectors/io.hunterkiller.agents/hunter-killer/badges/score.svg)](https://glama.ai/mcp/connectors/io.hunterkiller.agents/hunter-killer)
  🔐 - Liquidation walls, snapshot age, evidence labels and a public record for crypto perpetual pairs.
- [Intangible Asset Valuation](https://intangible-valuation.simonmak.com) `https://intangible-valuation.simonmak.com/api/mcp`
  [![Intangible Asset Valuation MCP connector](https://glama.ai/mcp/connectors/io.github.simonplmak-cloud/intangible-valuation/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.simonplmak-cloud/intangible-valuation)
  🔓 - 124+ deterministic formulas for IP, relief from royalty, MPEEM, purchase price allocation and impairment.
- [Investboard](https://investboard.com/product/mcp) `https://app.investboard.com/mcp`
  [![Investboard MCP connector](https://glama.ai/mcp/connectors/com.investboard/investboard/badges/score.svg)](https://glama.ai/mcp/connectors/com.investboard/investboard)
  🔓 - Analyze holdings and fund overlap; two tools need no sign-in, while account tools require OAuth.
- [InvoiceParser Pro](https://invoiceparserpro.com/ai-assistants) `https://api.invoiceparserpro.com/mcp`
  [![InvoiceParser Pro MCP connector](https://glama.ai/mcp/connectors/com.invoiceparserpro/ipp/badges/score.svg)](https://glama.ai/mcp/connectors/com.invoiceparserpro/ipp)
  🔓 - Read invoices into line items, check the math, and get Excel, CSV or JSON; free trial, no account.
- [Invoices to Spreadsheets](https://invoicestospreadsheets.com/mcp) `https://invoicestospreadsheets.com/api/mcp`
  [![Invoices to Spreadsheets MCP connector](https://glama.ai/mcp/connectors/com.invoicestospreadsheets/invoice-spreadsheets/badges/score.svg)](https://glama.ai/mcp/connectors/com.invoicestospreadsheets/invoice-spreadsheets)
  🔓 - Turn invoice details into a checked Excel workbook: totals, VAT, line items and duplicates verified.
- [Invompt](https://www.invompt.com) `https://mcp.invompt.com/mcp`
  [![Invompt MCP connector](https://glama.ai/mcp/connectors/com.invompt/invompt/badges/score.svg)](https://glama.ai/mcp/connectors/com.invompt/invompt)
  🔐 - Create invoices and review them before sending.
- [IQ Books by ReconcileIQ](https://reconcileiq.com/connectors) `https://api.reconcileiq.com/mcp`
  [![IQ Books by ReconcileIQ MCP connector](https://glama.ai/mcp/connectors/com.reconcileiq/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.reconcileiq/mcp)
  🔐 - AI-native UK ledger that keeps the books itself: coded bank lines, filed bills, VAT and MTD, every change previewed.
- [ISO 20022 Navigator](https://www.isonavigator.io/iso20022/mcp) `https://mcp.isonavigator.io/iso20022`
  [![ISO 20022 Navigator MCP connector](https://glama.ai/mcp/connectors/io.github.kreativeManish/iso20022-navigator/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.kreativeManish/iso20022-navigator)
  🔓 - Look up ISO 20022 messages, bank transaction codes, legacy replacements like MT103, scheme use, and external code sets.
- [IsraBase](https://israbase.com/developers) `https://israbase.com/mcp`
  [![IsraBase MCP connector](https://glama.ai/mcp/connectors/com.israbase/israbase/badges/score.svg)](https://glama.ai/mcp/connectors/com.israbase/israbase)
  🔓 - Israeli company, nonprofit and partnership registry from data.gov.il: search by name, number, city, year or type.
- [Jithox](https://jithox.com) `https://jithox.com/api/mcp`
  [![Jithox MCP connector](https://glama.ai/mcp/connectors/com.jithox/jithox/badges/score.svg)](https://glama.ai/mcp/connectors/com.jithox/jithox)
  🔓 - Check an invoice payment before an agent pays: IBAN, supplier bank change and Peppol; five tools need no account.
- [Jithox E-Invoice](https://jithox.com/mcp/einvoice) `https://mcp.jithox.com/mcp`
  [![Jithox E-Invoice MCP connector](https://glama.ai/mcp/connectors/com.jithox/einvoice-readiness/badges/score.svg)](https://glama.ai/mcp/connectors/com.jithox/einvoice-readiness)
  🔓 - Read-only EU e-invoice checks: invoice structure, VAT format, VIES and Peppol lookup; tools need OAuth.
- [Jornalo](https://jornalo.com/en/mcp) `https://jornalo.com/api/mcp`
  [![Jornalo MCP connector](https://glama.ai/mcp/connectors/com.jornalo/journal/badges/score.svg)](https://glama.ai/mcp/connectors/com.jornalo/journal)
  🔐 - Futures trading journal: performance, setups, prop-firm drawdown risk, trade tagging and chart screenshots.
- [Kabuken](https://kabuken.intellics.ai) `https://kabuken.intellics.ai/mcp`
  [![Kabuken MCP connector](https://glama.ai/mcp/connectors/io.github.Intellics-ai/kabuken/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Intellics-ai/kabuken)
  🔐 - Japanese listed-company financials, segments and shareholders from EDINET filings, each figure with its source filing.
- [Kairos Signal](https://kairossignal.com) `https://kairossignal.com/mcp`
  [![Kairos Signal MCP connector](https://glama.ai/mcp/connectors/com.kairossignal/kairos-signal-63-layer-symplectic-neural-ode/badges/score.svg)](https://glama.ai/mcp/connectors/com.kairossignal/kairos-signal-63-layer-symplectic-neural-ode)
  🔓 - Query DePIN supply telemetry and network data with source, observation time, and verification links.
- [Kellian](https://kellian.app/for-agents) `https://mcp.kellian.app`
  [![Kellian MCP connector](https://glama.ai/mcp/connectors/app.kellian/kellian/badges/score.svg)](https://glama.ai/mcp/connectors/app.kellian/kellian)
  🔓 - Free hourly alerts on Polymarket price moves, smart money and trades of $10,000 or more, and who's buying each side.
- [Kema Invoice](https://invoice.kema-studio.com) `https://mcp.kema-studio.com/api/mcp`
  [![Kema Invoice MCP connector](https://glama.ai/mcp/connectors/com.kema-studio/invoice/badges/score.svg)](https://glama.ai/mcp/connectors/com.kema-studio/invoice)
  🔐 - Compliant French e-invoicing for freelancers: create, issue, certify and track invoices, quotes and deposits.
- [Knoww](https://knoww.app) `https://mcp.knoww.app/mcp`
  [![Knoww MCP connector](https://glama.ai/mcp/connectors/app.knoww.mcp/knoww/badges/score.svg)](https://glama.ai/mcp/connectors/app.knoww.mcp/knoww)
  🔐 - Read-only Polymarket search, market details, order books, price history, and interactive market cards.
- [Konverter Pro](https://konverter-pro.de) `https://konverter-pro.de/api/v1/mcp`
  [![Konverter Pro MCP connector](https://glama.ai/mcp/connectors/de.konverter-pro/konverter-pro/badges/score.svg)](https://glama.ai/mcp/connectors/de.konverter-pro/konverter-pro)
  🔓 - German bank statements and PayPal, SumUp or Stripe reports to verified DATEV, Lexware or MT940 files; pay per job.
- [Kristo Intelligence](https://kristo-intelligence-api.onrender.com) `https://kristo-intelligence-api.onrender.com/mcp`
  🔓 - DeFi trading signals and market intelligence on Base; x402 pay-per-call in USDC.
- [Kultranz](https://kultranz.com/pages/api-docs/) `https://api.kultranz.com/mcp`
  [![Kultranz MCP connector](https://glama.ai/mcp/connectors/com.kultranz.api/kultranz/badges/score.svg)](https://glama.ai/mcp/connectors/com.kultranz.api/kultranz)
  🔓 - US salary percentiles, take-home pay, tax brackets and cost of living for 50 metros from BLS, BEA, Census and IRS.
- [Kunkafa](https://kunkafa.com) `https://kunkafa.com/mcp`
  [![Kunkafa MCP connector](https://glama.ai/mcp/connectors/com.kunkafa/kunkafa/badges/score.svg)](https://glama.ai/mcp/connectors/com.kunkafa/kunkafa)
  🔓 - Market forecasts for stocks, crypto, gold, oil and FX with Kunkafa's confidence and track record; data needs OAuth.
- [Kyrodata](https://kyrodata.com) `https://mcp.kyrodata.com/mcp`
  [![Kyrodata MCP connector](https://glama.ai/mcp/connectors/com.kyrodata/kyrodata/badges/score.svg)](https://glama.ai/mcp/connectors/com.kyrodata/kyrodata)
  🔐 - Brazilian exports and imports by HS code and partner, plus crop production, climate and commodity forecasts.
- [KzCalc](https://kzcalc.com/ru/mcp/) `https://mcp.kzcalc.com/mcp`
  [![KzCalc MCP connector](https://glama.ai/mcp/connectors/com.kzcalc/calculators/badges/score.svg)](https://glama.ai/mcp/connectors/com.kzcalc/calculators)
  🔓 - Kazakhstan 2026 salary, tax, benefit and mortgage estimates with primary-source links.
- [Layerz](https://layerz.cc/for-agents) `https://layerz.cc/mcp`
  [![Layerz MCP connector](https://glama.ai/mcp/connectors/cc.layerz.app/layerz/badges/score.svg)](https://glama.ai/mcp/connectors/cc.layerz.app/layerz)
  🔐 - Build, version and audit structured financial models from your agent, and export them to Excel.
- [LimitGuard](https://limitguard.ai) `https://api.limitguard.ai/mcp`
  [![LimitGuard MCP connector](https://glama.ai/mcp/connectors/ai.limitguard.api/trust-intelligence/badges/score.svg)](https://glama.ai/mcp/connectors/ai.limitguard.api/trust-intelligence)
  🔓 - Verify Dutch and Belgian companies (KVK, KBO), EU VAT, sanctions and PEPs, with a risk score; key or x402.
- [LiquidVision](https://liquidvision.app) `https://liquidvision.app/mcp`
  [![LiquidVision MCP connector](https://glama.ai/mcp/connectors/app.liquidvision/derivatives/badges/score.svg)](https://glama.ai/mcp/connectors/app.liquidvision/derivatives)
  🔓 - Crypto derivatives across 13 venues: open interest, funding, liquidations, Hyperliquid whale positions.
- [Liqwall](https://liqwall.com) `https://liqwall.com/mcp`
  [![Liqwall MCP connector](https://glama.ai/mcp/connectors/com.liqwall/market-data/badges/score.svg)](https://glama.ai/mcp/connectors/com.liqwall/market-data)
  🔓 - Crypto liquidation maps by price on Hyperliquid and large exchanges, liquidations, funding, OI, Fear and Greed.
- [LitVM TCG Oracle](https://litvm.the-undesirables.com) `https://litvm.the-undesirables.com/mcp`
  [![LitVM TCG Oracle MCP connector](https://glama.ai/mcp/connectors/com.the-undesirables.litvm/lit-vm-tcg-oracle/badges/score.svg)](https://glama.ai/mcp/connectors/com.the-undesirables.litvm/lit-vm-tcg-oracle)
  🔓 - TCG price oracle for LitecoinVM: Merkle-proven prices, calibrated forecasts and fantasy souls; 13 free tools.
- [Livermore](https://livermore.club/en/mcp) `https://livermore.club/mcp`
  [![Livermore MCP connector](https://glama.ai/mcp/connectors/io.github.AAAZZZR/livermore/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AAAZZZR/livermore)
  🔓 - US insider trades, 13F, 13D/G, Form 144, Congress trades, financials and shorts from SEC filings, plus Taiwan stocks.
- [Loophole Tape](https://api.loopholetape.com) `https://api.loopholetape.com/mcp`
  [![Loophole Tape MCP connector](https://glama.ai/mcp/connectors/io.github.gosadu/loophole-tape/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gosadu/loophole-tape)
  🔓 - pump.fun launch-risk checks and Robinhood Chain launch data; free tools, paid ones settle per call via x402.
- [LoomDesk](https://loomdesk.trade) `https://loomdesk.trade/mcp`
  [![LoomDesk MCP connector](https://glama.ai/mcp/connectors/trade.loomdesk/loomdesk/badges/score.svg)](https://glama.ai/mcp/connectors/trade.loomdesk/loomdesk)
  🔓 - Plan Uniswap liquidity on Robinhood Chain as unsigned transactions, or trade play money in an agent arena, free key.
- [LPSignal](https://lpsignal.app) `https://api.lpsignal.app/v1/mcp`
  [![LPSignal MCP connector](https://glama.ai/mcp/connectors/app.lpsignal/lpsignal/badges/score.svg)](https://glama.ai/mcp/connectors/app.lpsignal/lpsignal)
  🔐 - DEX liquidity pools ranked by net APR (fees − impermanent loss), range backtests, LP signals and risk alerts.
- [Lorg Check](https://lorglabs.com) `https://api.lorglabs.com/mcp`
  [![Lorg Check MCP connector](https://glama.ai/mcp/connectors/com.lorglabs/lorg-check/badges/score.svg)](https://glama.ai/mcp/connectors/com.lorglabs/lorg-check)
  🔐 - Signed safety checks before money moves on Base and Ethereum: token traps, rug funders, sanctions, address poisoning.
- [Mangrove AI](https://mangrove.ai/agents/) `https://api.mangrovedeveloper.ai/mcp/`
  [![Mangrove AI MCP connector](https://glama.ai/mcp/connectors/io.github.MangroveTechnologies/mangroveai/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.MangroveTechnologies/mangroveai)
  🔓 - Guardrails for trading agents. Built-in risk management, 100+ tools for strategy R&D, 12+ venues; x402 or API key.
- [Marcel Retraite](https://marcel-retraite.fr) `https://marcel-retraite.fr/mcp`
  [![Marcel Retraite MCP connector](https://glama.ai/mcp/connectors/fr.marcel-retraite/marcel/badges/score.svg)](https://glama.ai/mcp/connectors/fr.marcel-retraite/marcel)
  🔓 - Deterministic, sourced French tax and retirement calculations; information only, not advice.

- [Marian](https://marianmortgage.com/agents#mcp-server) `https://mcp.marianmortgage.com/mcp`
  [![Marian MCP connector](https://glama.ai/mcp/connectors/com.marianmortgage/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.marianmortgage/mcp)
  🔓 - Pre-launch US mortgage whose rate only goes down: explain it, compare it with refinancing, or join the waitlist.

- [MarketMaster](https://marketmaster.live/developers) `https://api.marketmaster.live/mcp`
  [![MarketMaster MCP connector](https://glama.ai/mcp/connectors/live.marketmaster/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/live.marketmaster/mcp)
  🔓 - Kalshi and Polymarket data: cross-venue matching, arbitrage after fees and whale trades; free key.
- [Mestre Prático & NutriPreço](https://mestrepratico.com.br/developers) `https://mestrepratico.com.br/mcp/v1`
  [![Mestre Prático MCP connector](https://glama.ai/mcp/connectors/io.github.arthursantosmedia-stack/mestrepratico-brazil-prices-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.arthursantosmedia-stack/mestrepratico-brazil-prices-mcp)
  🔓 - Sovereign Brazilian real-economy price & regulatory oracle (ANP fuels, CMED medicines, DIEESE food basket).
- [MetricDuck](https://www.metricduck.com) `https://mcp.metricduck.com/mcp`
  [![MetricDuck MCP connector](https://glama.ai/mcp/connectors/com.metricduck/financial-analysis/badges/score.svg)](https://glama.ai/mcp/connectors/com.metricduck/financial-analysis)
  🔓 - SEC filing data for AI agents: financials, screening, every figure traceable; tool calls need a free sign-in.
- [Midpoint Card Prices](https://www.cardcenteringtool.com/mcp) `https://mcp.cardcenteringtool.com/mcp`
  [![Midpoint Card Prices MCP connector](https://glama.ai/mcp/connectors/com.cardcenteringtool/card-prices/badges/score.svg)](https://glama.ai/mcp/connectors/com.cardcenteringtool/card-prices)
  🔓 - Trading card prices and grading ROI for 1.5M+ Pokémon, TCG and sports cards: raw and PSA 9/10 values, movers.
- [MiningBridge Intelligence](https://intel.miningbridge.in/connect) `https://intel.miningbridge.in/api/mcp`
  [![MiningBridge Intelligence MCP connector](https://glama.ai/mcp/connectors/in.miningbridge/intel/badges/score.svg)](https://glama.ai/mcp/connectors/in.miningbridge/intel)
  🔐 - Critical minerals and rare earths: supply risk, trade flows, export controls, counterparties and patent R&D.
- [MoltNode by Chord](https://moltnode.ag) `https://moltnode.ag/mcp`
  [![MoltNode by Chord MCP connector](https://glama.ai/mcp/connectors/ag.moltnode/molt-node-by-chord/badges/score.svg)](https://glama.ai/mcp/connectors/ag.moltnode/molt-node-by-chord)
  🔓 - Read 31 blockchains over JSON-RPC and get DEX swap quotes with unsigned transactions via Chord.
- [Money Reactor](https://money-reactor.makar52nn2016.workers.dev/) `https://money-reactor.makar52nn2016.workers.dev/mcp`
  [![Money Reactor MCP connector](https://glama.ai/mcp/connectors/io.github.makar52nn-crypto/x402-money-reactor/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.makar52nn-crypto/x402-money-reactor)
  🔓 - Pay-per-call x402 API on Base: token verdicts, research dossiers, crypto prices, weather, AI chat; USDC.
- [More AI](https://accounting.amore.cloud/en/fortnox-mcp/) `https://accounting.amore.cloud/mcp`
  [![More AI MCP connector](https://glama.ai/mcp/connectors/cloud.amore.accounting/fortnox/badges/score.svg)](https://glama.ai/mcp/connectors/cloud.amore.accounting/fortnox)
  🔐 - Fortnox (Swedish accounting): read invoices, ledger, VAT and reports; changes only after the user approves.
- [Mortgage Tools by Jenny](https://jenny.mortgage/mortgage-tools/) `https://mcp.jenny.mortgage/mcp`
  [![Mortgage Tools by Jenny MCP connector](https://glama.ai/mcp/connectors/mortgage.jenny/jenny-mortgage-tools/badges/score.svg)](https://glama.ai/mcp/connectors/mortgage.jenny/jenny-mortgage-tools)
  🔓 - Canadian mortgage calculators in CAD: renewal offers, extra payments, break or stay, debt consolidation.

- [MORVS](https://morvs.ai/api/mcp/) `https://api.morvs.ai/mcp`
  [![MORVS MCP connector](https://glama.ai/mcp/connectors/io.github.morvs-ai/morvs/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.morvs-ai/morvs)
  🔓 - Source-linked US public records: SEC filings, FDA recalls, federal enforcement, sanctions and debarment indexes.
- [NablaZ Reader](https://read.nablaz.io) `https://read.nablaz.io/mcp`
  [![NablaZ Reader MCP connector](https://glama.ai/mcp/connectors/io.nablaz/reader/badges/score.svg)](https://glama.ai/mcp/connectors/io.nablaz/reader)
  🔓 - Read NablaZ's open record: agent actions under permission, cited onchain. Evidence, not a verdict.
- [NakamotoNotes Bitcoin Barometer](https://nakamotonotes.com/open) `https://nakamotonotes.com/mcp`
  [![NakamotoNotes Bitcoin Barometer MCP connector](https://glama.ai/mcp/connectors/com.nakamotonotes/barometer/badges/score.svg)](https://glama.ai/mcp/connectors/com.nakamotonotes/barometer)
  🔓 - Bitcoin Barometer heat score, BTC price, on-chain and sentiment indicators, and daily history since 2014.
- [Neumann](https://neumann.kromatic.com/llms.txt?utm_source=awesome-remote-mcp-servers&utm_medium=mcp-directory&utm_campaign=neumann) `https://neumann.kromatic.com/mcp`
  [![Neumann MCP connector](https://glama.ai/mcp/connectors/io.github.Kromatic-Innovation/neumann/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Kromatic-Innovation/neumann)
  🔓 - Monte Carlo ranges for uncertain plans: project cost, budget, timeline, capacity, NPV/IRR/payback.
- [NuMetric](https://numetric.work) `https://numetric-mcp.virifi.xyz/mcp`
  [![NuMetric MCP connector](https://glama.ai/mcp/connectors/xyz.virifi.numetric-mcp/numetric/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.virifi.numetric-mcp/numetric)
  🔐 - Read-only NuMetric accounting and ERP data: statements, KPIs, receivables, payables, invoices and documents.
- [Octagon](https://octagonagents.com) `https://mcp.octagonagents.com/mcp`
  [![Octagon MCP connector](https://glama.ai/mcp/connectors/com.octagonagents.mcp/octagon/badges/score.svg)](https://glama.ai/mcp/connectors/com.octagonagents.mcp/octagon)
  🔐 - Private- and public-market financial research data.
- [Open Economics](https://open-economics-data.knbf982hkn.chatgpt.site/en/mcp) `https://open-economics-data.knbf982hkn.chatgpt.site/api/mcp`
  [![Open Economics MCP connector](https://glama.ai/mcp/connectors/io.github.felipegambettadesouza6-jpg/open-economics/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.felipegambettadesouza6-jpg/open-economics)
  🔓 - Find and query official Brazilian economic data with provenance.
- [OpenChainBench](https://openchainbench.com) `https://openchainbench.com/api/mcp/mcp`
  [![OpenChainBench MCP connector](https://glama.ai/mcp/connectors/io.github.Flotapponnier/openchainbench/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Flotapponnier/openchainbench)
  🔓 - Live crypto infra benchmarks: RPC latency, bridge fees, aggregator head lag, perp funding, with PromQL access.
- [OpenFinance](https://openfinance.tech/agents) `https://api.openfinance.tech/agent/mcp`
  [![OpenFinance MCP connector](https://glama.ai/mcp/connectors/tech.openfinance/trading/badges/score.svg)](https://glama.ai/mcp/connectors/tech.openfinance/trading)
  🔐 - Easy trading for AI agents: crypto and stock perps, Polymarket, swaps, bridges and token launches.
- [OptimistFi](https://optimistfi.com/mcp) `https://mcp.optimistfi.com/mcp`
  [![OptimistFi MCP connector](https://glama.ai/mcp/connectors/com.optimistfi/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.optimistfi/mcp)
  🔓 - Perpetual futures on 40 venues, 21 prop firms' rules and prices, and SEC-sourced theses on 6,100+ US stocks.
- [OptionsAhoy](https://optionsahoy.com/for-agents) `https://optionsahoy.com/mcp`
  [![OptionsAhoy MCP connector](https://glama.ai/mcp/connectors/io.github.AlvisoOculus/optionsahoy-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AlvisoOculus/optionsahoy-mcp)
  🔓 - US equity-comp tax math: ISO/AMT exercise plans, RSU and NSO sell-or-hold, QSBS, hedges, cash-goal sell plans.
- [Optionscanner](https://optionscanner.ai/learn/mcp) `https://optionscanner.ai/mcp`
  [![Optionscanner MCP connector](https://glama.ai/mcp/connectors/ai.optionscanner/optionscanner/badges/score.svg)](https://glama.ai/mcp/connectors/ai.optionscanner/optionscanner)
  🔓 - Price any options trade with up to eight legs, what-if scenarios on price, time and volatility, and the Learn library.
- [Oxaide](https://oxaide.com/agents) `https://oxaide.com/mcp`
  [![Oxaide MCP connector](https://glama.ai/mcp/connectors/io.github.leewenjie/oxaide/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.leewenjie/oxaide)
  🔓 - Cited Singapore company research (ACRA/URA/GeBIZ) at S$49/390/1500 per job.
- [Paidnice](https://www.paidnice.com/mcp) `https://api.paidnice.com/mcp`
  [![Paidnice MCP connector](https://glama.ai/mcp/connectors/com.paidnice/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.paidnice/mcp)
  🔐 - Read customer replies, contacts, invoices and notes from Paidnice accounts receivable for Xero and QuickBooks Online.
- [PayGuard](https://api.youraitools.co/payguard/) `https://api.youraitools.co/payguard/mcp`
  [![PayGuard MCP connector](https://glama.ai/mcp/connectors/co.youraitools/payguard/badges/score.svg)](https://glama.ai/mcp/connectors/co.youraitools/payguard)
  🔓 - Checks crypto addresses against the US Treasury OFAC SDN list; free yes/no preview, entity details paid via x402.
- [pdata](https://pdata.world/agents) `https://api.pdata.world/mcp`
  [![pdata MCP connector](https://glama.ai/mcp/connectors/world.pdata/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/world.pdata/mcp)
  🔓 - Prices, 24h volume, movers and results for prediction markets on Polymarket, Kalshi and six more venues.
- [Plaid](https://plaid.com) `https://api.dashboard.plaid.com/mcp/sse`
  🔑 - Query Plaid dashboard data for connected financial accounts.
- [PMWallets](https://pmwallets.com/ai-agents) `https://api.pmwallets.com/mcp`
  [![PMWallets MCP connector](https://glama.ai/mcp/connectors/io.github.polymarketwallets/pmwallets/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.polymarketwallets/pmwallets)
  🔐 - Polymarket traders ranked by realized PnL, with their records, live fills and past trades as daily files.
- [Polish Company Financials (Compabase)](https://compabase.com/docs/mcp/) `https://compabase.com/api/mcp/financials`
  [![Polish Company Financials (Compabase) MCP connector](https://glama.ai/mcp/connectors/io.github.ContentWriterco/polish-company-financials/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ContentWriterco/polish-company-financials)
  🔓 - Financial statements of Polish companies (KRS): revenue, profit, assets, industry rankings and sector benchmarks.
- [PredixLab](https://predixlab.com) `https://api.predixlab.com/mcp/`
  [![PredixLab MCP connector](https://glama.ai/mcp/connectors/com.predixlab.api/predix-lab/badges/score.svg)](https://glama.ai/mcp/connectors/com.predixlab.api/predix-lab)
  🔐 - Daily US stock signals, screeners and options analysis over MCP. Read-only.
- [Priors](https://priors.trade) `https://mcp.priors.trade/mcp`
  [![Priors MCP connector](https://glama.ai/mcp/connectors/io.github.priors-agents/priors-read/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.priors-agents/priors-read)
  🔓 - Credit records and scores of ERC-8004 AI agents on Robinhood Chain, with pool figures and recent loans.
- [pumpdata](https://pumpdata.fun/?utm_source=github&utm_medium=listing&utm_campaign=open) `https://pumpdata.fun/mcp`
  [![pumpdata MCP connector](https://glama.ai/mcp/connectors/fun.pumpdata/pumpdata/badges/score.svg)](https://glama.ai/mcp/connectors/fun.pumpdata/pumpdata)
  🔓 - Every pump.fun trade, ever: base rates, wallet and launch records, and pick-list replays for trading agents over x402.
- [PumpPill](https://www.pumppill.org/for-agents) `https://api.pumppill.org/mcp`
  [![PumpPill MCP connector](https://glama.ai/mcp/connectors/org.pumppill/token-safety/badges/score.svg)](https://glama.ai/mcp/connectors/org.pumppill/token-safety)
  🔓 - Token safety reads, deployer history and measured outcomes for Robinhood Chain and Solana contracts.
- [QHooks](https://qhooks.com) `https://qhooks.com/mcp`
  [![QHooks MCP connector](https://glama.ai/mcp/connectors/com.qhooks/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.qhooks/mcp)
  🔓 - Read token markets, quote swaps, and prepare unsigned plans for the user’s wallet.

- [Qotien](https://qotien.fr) `https://app.qotien.fr/api/fiscal/v1/mcp`
  [![Qotien MCP connector](https://glama.ai/mcp/connectors/io.github.herve-coulon/tax-retirement/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.herve-coulon/tax-retirement)
  🔓 - French income tax, IFI, PER and 32 pension schemes, sourced to primary law and dated; x402 pay-per-call.
- [Quantral](https://quantral.com/mcp) `https://app.quantral.com/api/mcp`
  [![Quantral MCP connector](https://glama.ai/mcp/connectors/com.quantral/sentiment/badges/score.svg)](https://glama.ai/mcp/connectors/com.quantral/sentiment)
  🔐 - Per-stock sentiment scores, top signals, monthly recaps and the underlying mentions.
- [Quidli Connect](https://connect.quid.li) `https://mcp.connect.quid.li`
  🔓 - Resolve social handles to EVM and Solana wallets, score onchain reputation and send USDC.
- [Radicado Uno](https://radicadouno.co/mcp) `https://mcp.radicadouno.co/mcp`
  [![Radicado Uno MCP connector](https://glama.ai/mcp/connectors/co.radicadouno/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/co.radicadouno/mcp)
  🔓 - Colombian company and procurement data by NIT (registry, contracts, sanctions). Free lookup; data tools need a key.
- [Radikabunavi](https://radikabunavi.com/mcp-service) `https://radikabunavi.com/mcp`
  [![Radikabunavi MCP connector](https://glama.ai/mcp/connectors/com.radikabunavi/japan-stock-edinet/badges/score.svg)](https://glama.ai/mcp/connectors/com.radikabunavi/japan-stock-edinet)
  🔐 - Japanese listed-company data from EDINET and TDnet: financials, 6-axis score, ideal price, DCF, screening.
- [RateSonar](https://ratesonar.com) `https://api.ratesonar.com/mcp`
  [![RateSonar MCP connector](https://glama.ai/mcp/connectors/com.ratesonar/rates/badges/score.svg)](https://glama.ai/mcp/connectors/com.ratesonar/rates)
  🔓 - Daily dated record of advertised Australian bank and lender rates: compare, history, rate changes and RBA curves.
- [Rechnungslotse](https://rechnungslotse.de/mcp) `https://rechnungslotse.de/api/mcp`
  [![Rechnungslotse MCP connector](https://glama.ai/mcp/connectors/de.rechnungslotse/e-rechnung/badges/score.svg)](https://glama.ai/mcp/connectors/de.rechnungslotse/e-rechnung)
  🔓 - German e-invoicing: create, validate and read XRechnung and ZUGFeRD invoices against EN 16931.
- [Regime](https://regimetoken.xyz/api) `https://feed.regimetoken.xyz/mcp`

  
  [![Regime MCP connector](https://glama.ai/mcp/connectors/xyz.regimetoken/regime/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.regimetoken/regime)
  🔓 - Checks crypto trading claims on real price history: leverage liquidations, drawdown, DCA, stop-loss, seasonality.
- [ReportGem 报告驿站](https://www.reportgem.com/mcp.html) `https://www.reportgem.com/mcp`
  [![ReportGem MCP connector](https://glama.ai/mcp/connectors/com.reportgem/report-gem-global-research/badges/score.svg)](https://glama.ai/mcp/connectors/com.reportgem/report-gem-global-research)
  🔓 - Search 16M+ global investment bank reports, filings, earnings-call notes and charts; read cited source passages.

- [RevExOS](https://revexos.com/mcp) `https://revexos.com/api/mcp`
  [![RevExOS MCP connector](https://glama.ai/mcp/connectors/com.revexos/revexos/badges/score.svg)](https://glama.ai/mcp/connectors/com.revexos/revexos)
  🔓 - Quote-to-cash tools: parse invoices and POs, 3-way match, proration, revenue schedules, dunning emails.

- [RWA Data MCP Server](https://glama.ai/mcp/connectors/io.github.daveabear/rwa-data-mcp) `https://rwa-data-mcp.dave-a-bear.workers.dev/mcp`
  [![RWA Data MCP Server MCP connector](https://glama.ai/mcp/connectors/io.github.daveabear/rwa-data-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.daveabear/rwa-data-mcp)
    🔓 - Stablecoin & RWA market data for AI agents: metrics, peg monitoring, prices, claim verification; x402 USDC pay-per-call.



- [Rychlá Hypo](https://rychlahypo.cz/api-dokumentace) `https://rychlahypo.cz/mcp`
  [![Rychlá Hypo MCP connector](https://glama.ai/mcp/connectors/cz.rychlahypo/mortgages/badges/score.svg)](https://glama.ai/mcp/connectors/cz.rychlahypo/mortgages)
  🔓 - Czech mortgages: rates with APRC for 6 major banks, payment comparison and max loan per bank from income.
- [Scrapling x402 Data Store](https://scraplingdata.xyz) `https://scraplingdata.xyz/mcp`
  [![Scrapling x402 Data Store MCP connector](https://glama.ai/mcp/connectors/io.github.bnth09productions-maker/scrapling-x402-store/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bnth09productions-maker/scrapling-x402-store)
  🔓 - Crypto prices, DeFi TVL and yields, Polymarket odds, token risk and web scraping; pay per call in USDC via x402.
- [Sector Pulse](https://sector-pulse.app) `https://sector-pulse.app/api/mcp`
  [![Sector Pulse MCP connector](https://glama.ai/mcp/connectors/io.github.christianhonap7-sys/sector-pulse/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.christianhonap7-sys/sector-pulse)
  🔓 - US sector rotation: 30 sector baskets ranked each session, with a daily record; history needs a key.
- [Sentio Connect](https://connect.sentio.xyz) `https://connect.sentio.xyz/v1/mcp`
  [![Sentio Connect MCP connector](https://glama.ai/mcp/connectors/xyz.sentio/connect/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.sentio/connect)
  🔐 - Wallet balances, token prices, portfolio value, DeFi positions and holding history across EVM chains and Sui.
- [Shingou](https://shingou.io) `https://api.shingou.io/mcp`
  [![Shingou MCP connector](https://glama.ai/mcp/connectors/io.shingou/sentiment/badges/score.svg)](https://glama.ai/mcp/connectors/io.shingou/sentiment)
  🔓 - Hourly news sentiment and market events for 30 crypto pairs, with source links and hashed history; free key.
- [Shumi](https://shumi.ai) `https://mcp.shumi.ai/mcp`
  [![Shumi MCP connector](https://glama.ai/mcp/connectors/ai.shumi/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.shumi/mcp)
  🔓 - Crypto prices, trends, funding rates, sentiment, narratives, market regime and pair ideas; free key.
- [Signal Band](https://signalband.net/developers?utm_source=github&utm_medium=organic&utm_campaign=dir-punkpeye-remote) `https://signalband.net/mcp`
  [![Signal Band MCP connector](https://glama.ai/mcp/connectors/net.signalband/decision-engines/badges/score.svg)](https://glama.ai/mcp/connectors/net.signalband/decision-engines)
  🔓 - Evidence-weighted decision engines for venture and AI business cases: fund, pilot or stop, by published rules.
- [SignalForge AI SFConnect](https://www.signalforge-ai.com/sf-connect/) `https://api.signalforge-ai.com/mcp`
  [![SignalForge AI SFConnect MCP connector](https://glama.ai/mcp/connectors/com.signalforge-ai/sfconnect/badges/score.svg)](https://glama.ai/mcp/connectors/com.signalforge-ai/sfconnect)
  🔓 - TradingView to MT5 bridge: MT5 accounts, EA status, signal history and dry-run-first signal sending.
- [Signed](https://mcp.signed.com) `https://mcp.signed.com`
  [![Signed MCP connector](https://glama.ai/mcp/connectors/com.signed.mcp/signed/badges/score.svg)](https://glama.ai/mcp/connectors/com.signed.mcp/signed)
  🔐 - An angel investor's portfolio, deal pipeline, and contacts: positions, returns, pitches, notes, and transactions.
- [Signed Investors](https://mcp.signed.com/investors) `https://mcp.signed.com/investors`
  [![Signed Investors MCP connector](https://glama.ai/mcp/connectors/com.signed.mcp/signed-investors/badges/score.svg)](https://glama.ai/mcp/connectors/com.signed.mcp/signed-investors)
  🔓 - Search a public directory of angel investors by sector, check size, or keyword, with no account needed.
- [Signo](https://signo.fi) `https://app.signo.fi/api/mcp`
  [![Signo MCP connector](https://glama.ai/mcp/connectors/fi.signo/signo/badges/score.svg)](https://glama.ai/mcp/connectors/fi.signo/signo)
  🔓 - Drafts AI agents that watch DeFi positions (health factor, LP range, Pendle maturity) for the wallet owner to sign.
- [Silicon Floor](https://siliconfloor.com/docs/mcp) `https://siliconfloor.com/mcp`
  [![Silicon Floor MCP connector](https://glama.ai/mcp/connectors/com.siliconfloor/silicon-floor/badges/score.svg)](https://glama.ai/mcp/connectors/com.siliconfloor/silicon-floor)
  🔓 - Follow the smart money in AI stocks: who owns what, what insiders and hedge funds buy and sell, straight from the SEC.
- [Skavio USDC Payment Verification & Proof MCP](https://www.skavio.eu/x402/) `https://www.skavio.eu/mcp`
  [![Skavio MCP connector](https://glama.ai/mcp/connectors/eu.skavio/paid-micro-apis/badges/score.svg)](https://glama.ai/mcp/connectors/eu.skavio/paid-micro-apis)
  🔓 - Native USDC verification, exact payment matching and evidence PDFs; paid calls use Base USDC via x402.
- [SmarterDividends](https://smarterdividends.com/dividend-mcp-server) `https://smarterdividends.com/mcp`
  [![SmarterDividends MCP connector](https://glama.ai/mcp/connectors/com.smarterdividends/dividends/badges/score.svg)](https://glama.ai/mcp/connectors/com.smarterdividends/dividends)
  🔓 - Dividend history, ex-dividend calendar, yields, raises and cuts for U.S. stocks and ETFs.
- [SNACS](https://snacs.trade/api) `https://mcp.snacs.trade`
  [![SNACS MCP connector](https://glama.ai/mcp/connectors/trade.snacs.mcp/snacstrade/badges/score.svg)](https://glama.ai/mcp/connectors/trade.snacs.mcp/snacstrade)
  🔐 - Point-in-time SEC filings, dilution forensics, market data and fundamentals for US equities.
- [SnowSignals TrendVane](https://snowsignals.io) `https://snowsignals.io/mcp`
  [![SnowSignals TrendVane MCP connector](https://glama.ai/mcp/connectors/io.snowsignals/snowsignals/badges/score.svg)](https://glama.ai/mcp/connectors/io.snowsignals/snowsignals)
  🔓 - Market-phase state per currency across timeframes (not trade signals); free phase stats, metered live reads.
- [SocialForex](https://toolforex.xyz) `https://toolforex.xyz/api/mcp`
  [![SocialForex MCP connector](https://glama.ai/mcp/connectors/io.github.namlxuit056/social-forex/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.namlxuit056/social-forex)
  🔓 - Forex, gold and crypto quotes, economic calendar, multi-timeframe screener, currency strength and lot-size calculator.
- [SODAX](https://docs.sodax.com/builders-mcp) `https://builders.sodax.com/mcp`
  [![SODAX MCP connector](https://glama.ai/mcp/connectors/io.github.gosodax/builders-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gosodax/builders-mcp)
  🔓 - Live cross-network DeFi data: chains, tokens, swap quotes, money market rates, intent lookups and SDK docs.
- [Stablecoin Scanner](https://stablescan.achivx.com) `https://stablescan.achivx.com/mcp`
  [![Stablecoin Scanner MCP connector](https://glama.ai/mcp/connectors/com.achivx/stablescan/badges/score.svg)](https://glama.ai/mcp/connectors/com.achivx/stablescan)
  🔓 - Stablecoin compliance on 7 chains: issuer freezes, OFAC, exposure and risk, allowances, transfers, wallet graph.
- [StackEasy](https://www.stackeasy.ai/mcp) `https://data.stackeasy.ai/mcp`
  [![StackEasy MCP connector](https://glama.ai/mcp/connectors/ai.stackeasy/credit-cards/badges/score.svg)](https://glama.ai/mcp/connectors/ai.stackeasy/credit-cards)
  🔐 - Read-only view of your credit cards: balances, utilization, best card for a purchase and missed rewards.
- [StartupPerks](https://startupperks.co/mcp-server) `https://startupperks.co/mcp`
  [![StartupPerks MCP connector](https://glama.ai/mcp/connectors/co.startupperks/startup-perks/badges/score.svg)](https://glama.ai/mcp/connectors/co.startupperks/startup-perks)
  🔓 - Rank the startup credits, perks and deals a company qualifies for across 1,000+ programs, each with sourced terms.
- [Stock Bloc](https://stockbloc.ai.studio) `https://stockbloc.ai.studio/api/mcp/rpc`
  [![Stock Bloc MCP connector](https://glama.ai/mcp/connectors/studio.ai.stockbloc/stock-bloc/badges/score.svg)](https://glama.ai/mcp/connectors/studio.ai.stockbloc/stock-bloc)
  🔓 - Financial market data, SEC/13F intelligence, and quant scores via MCP; $0.01–$0.35/call in USDC on Base via x402 v2.
- [StockPortfolio.pro](https://www.stockportfolio.pro/api) `https://www.stockportfolio.pro/mcp`
  [![StockPortfolio.pro MCP connector](https://glama.ai/mcp/connectors/pro.stockportfolio/stock-portfoliopro/badges/score.svg)](https://glama.ai/mcp/connectors/pro.stockportfolio/stock-portfoliopro)
  🔓 - Limited keyless US stock research: SEC financials, filings, comparisons, screens, fund profiles and sourced answers.
- [Stocks On Chain](https://stocksonchain.io) `https://stocksonchain.io/mcp`
  [![Stocks On Chain MCP connector](https://glama.ai/mcp/connectors/io.stocksonchain/stocks-on-chain/badges/score.svg)](https://glama.ai/mcp/connectors/io.stocksonchain/stocks-on-chain)
  🔓 - Tokenized listed stocks by chain and issuer, with contract addresses and on-chain corporate actions.
- [Stoxly](https://www.stoxlyonline.com/mcp) `https://www.stoxlyonline.com/api/mcp`
  [![Stoxly MCP connector](https://glama.ai/mcp/connectors/io.github.wizard-exe/stoxly/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.wizard-exe/stoxly)
  🔓 - Free stock and ETF fundamental analysis: 10-criteria score, verdict, and key metrics for any ticker.
- [SwapWallet](https://swapwallet.app/docs/mcp) `https://swapwallet.app/mcp`
  [![SwapWallet MCP connector](https://glama.ai/mcp/connectors/app.swapwallet/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.swapwallet/mcp)
  🔐 - Read balances, P&L and history; request swaps, transfers and withdrawals that the user approves in Telegram.
- [Synci](https://synci.io) `https://api.synci.io/mcp`
  [![Synci MCP connector](https://glama.ai/mcp/connectors/io.synci/synci/badges/score.svg)](https://glama.ai/mcp/connectors/io.synci/synci)
  🔐 - Read-only bank, brokerage and crypto accounts: balances, transactions, holdings and connection health.
- [Taiwan Market Open Data (Unofficial)](https://twse-mcp.taux.io/) `https://twse-mcp.taux.io/mcp`
  [![Taiwan Market Open Data MCP connector](https://glama.ai/mcp/connectors/io.github.taux-io/twse-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.taux-io/twse-mcp)
  🔓 - Unofficial access to Taiwan Stock Exchange and Futures Exchange open data: stock, ETF and futures snapshots, live quotes and 275 datasets.
- [Tapetide](https://tapetide.com/mcp) `https://mcp.tapetide.com/mcp`
  [![Tapetide MCP connector](https://glama.ai/mcp/connectors/com.tapetide/stock-research-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.tapetide/stock-research-mcp)
  🔐 - Indian stock market research: NSE and BSE quotes, financials, 326-ratio screener, FII/DII flows, options and filings.
- [Tensorust Ontology](https://shop.tensorust.com/mcp) `https://shop.tensorust.com/api/mcp`
  [![Tensorust Ontology MCP connector](https://glama.ai/mcp/connectors/com.tensorust.shop/tensorust-ontology/badges/score.svg)](https://glama.ai/mcp/connectors/com.tensorust.shop/tensorust-ontology)
  🔓 - US company ownership, BDC loan marks, banned-vendor grant exposure and contractor credit from public filings.
- [Terminal Tax](https://terminal.tax) `https://mcp.terminal.tax/v1/hosted-mcp`
  [![Terminal Tax MCP connector](https://glama.ai/mcp/connectors/tax.terminal/filing/badges/score.svg)](https://glama.ai/mcp/connectors/tax.terminal/filing)
  🔓 - Prepare a 2025 US federal Form 1040 for e-file; the person reviews, signs and pays on one hosted page.
- [Tessera Analytics](https://tesseralytics.dev/mcp-server) `https://tesseralytics.dev/mcp`
  [![Tessera Analytics MCP connector](https://glama.ai/mcp/connectors/dev.tesseralytics/hyperliquid-data/badges/score.svg)](https://glama.ai/mcp/connectors/dev.tesseralytics/hyperliquid-data)
  🔓 - Daily Hyperliquid perp funding, positioning and crowding across every market; tools need a free key.
- [The 07:00 Brief](https://0700.io) `https://api.antevo.ch/mcp/0700/mcp`
  [![The 07:00 Brief MCP connector](https://glama.ai/mcp/connectors/ch.antevo/0700-brief/badges/score.svg)](https://glama.ai/mcp/connectors/ch.antevo/0700-brief)
  🔓 - A daily editorial morning read on markets and the world: what moved, what it means and what to watch today.
- [The River](https://theriver.markets/agents) `https://theriver.markets/mcp`
  [![The River MCP connector](https://glama.ai/mcp/connectors/markets.theriver/the-river/badges/score.svg)](https://glama.ai/mcp/connectors/markets.theriver/the-river)
  🔓 - Tokenized US stocks onchain: issuers, onchain vs US prices, holdings, pre-filled trade links a person signs.
- [The Undesirables TCG Oracle](https://the-undesirables.com) `https://mcp.the-undesirables.com/mcp`
  [![The Undesirables TCG Oracle MCP connector](https://glama.ai/mcp/connectors/io.github.sailorpepe/undesirables-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sailorpepe/undesirables-mcp-server)
  🔓 - On-chain oracle for 456K+ trading cards: prices, forecasts, AI grading; free reads, paid via x402.
- [The White Report](https://thewhitereport.com/agents) `https://thewhitereport.com/mcp.php`
  [![The White Report MCP connector](https://glama.ai/mcp/connectors/io.github.CYAN-ECLIPSE-TECHNOLOGIES-LLC/white-report/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.CYAN-ECLIPSE-TECHNOLOGIES-LLC/white-report)
  🔓 - Crypto & AI news archive: latest stories, search, full text, market ticker, and dated calls graded publicly.
- [Tickerz](https://tickerz.com/connect) `https://tickerz.com/mcp`
  [![Tickerz MCP connector](https://glama.ai/mcp/connectors/com.tickerz/tickerz/badges/score.svg)](https://glama.ai/mcp/connectors/com.tickerz/tickerz)
  🔓 - Daily indexes of memecoin launches, Kalshi and Polymarket volume and x402 payments, on-chain in Bitcoin.
- [TickFeed](https://tickfeed.pro) `https://api.tickfeed.pro/mcp`
  [![TickFeed MCP connector](https://glama.ai/mcp/connectors/pro.tickfeed/tickfeed/badges/score.svg)](https://glama.ai/mcp/connectors/pro.tickfeed/tickfeed)
  🔐 - Live bid/ask and OHLC candles for 60 forex pairs and 11 metals, with freshness labels and gap reports.
- [Tickwire](https://tickwire.io/metatrader-mcp-server/) `https://api.tickwire.io/mcp`
  [![Tickwire MCP connector](https://glama.ai/mcp/connectors/io.tickwire/metatrader/badges/score.svg)](https://glama.ai/mcp/connectors/io.tickwire/metatrader)
  🔐 - MetaTrader 4 and 5 accounts: positions, quotes, candles, history, and audited idempotent orders.
- [Toolrail](https://toolrail.dev) `https://toolrail.dev/mcp`
  [![Toolrail MCP connector](https://glama.ai/mcp/connectors/dev.toolrail/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.toolrail/mcp)
  🔓 - Chile and LATAM data: UF, RUT, business days, FX, VAT for 17 countries, tax units; free daily quota.
- [TraderSpy](https://traderspy.app/mcp) `https://mcp.traderspy.app/mcp`
  [![TraderSpy MCP connector](https://glama.ai/mcp/connectors/app.traderspy/traderspy/badges/score.svg)](https://glama.ai/mcp/connectors/app.traderspy/traderspy)
  🔓 - Crypto futures signals, whale positions on four exchanges, indicators and a screener; free key.
- [TraderWAI](https://traderwai.com) `https://mcp.traderwai.com`
  [![TraderWAI MCP connector](https://glama.ai/mcp/connectors/com.traderwai/traderwai/badges/score.svg)](https://glama.ai/mcp/connectors/com.traderwai/traderwai)
  🔐 - Live charts, strategy backtests and trade execution on MetaTrader, cTrader, TradeLocker, DXtrade, Binance and Bybit.
- [TradeStar Insider](https://www.tradestarinsider.com) `https://mcp.tradestarinsider.com/mcp`
  [![TradeStar Insider MCP connector](https://glama.ai/mcp/connectors/com.tradestarinsider/edgar-insider-signals/badges/score.svg)](https://glama.ai/mcp/connectors/com.tradestarinsider/edgar-insider-signals)
  🔓 - Verify insider-buy, 13D and 13F claims against SEC filings; every record links to its sec.gov source.
- [TradingAgentStack](https://tradingagentstack.com/mcp/) `https://tradingagentstack.com/api/mcp`
  [![TradingAgentStack MCP connector](https://glama.ai/mcp/connectors/io.github.intoApex/tradingagentstack/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.intoApex/tradingagentstack)
  🔓 - Sourced facts on 114 AI trading tools and broker MCPs, incl. who can place orders and what safeguards exist.
- [TradingCalc](https://tradingcalc.io) `https://tradingcalc.io/api/mcp`
  [![TradingCalc MCP connector](https://glama.ai/mcp/connectors/io.github.SKalinin909/tradingcalc/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.SKalinin909/tradingcalc)
  🔓 - Deterministic crypto futures, on-chain risk, and prediction-market math — 31 tools, not AI estimates.
- [TradingMCP](https://tradingmcp.ai) `https://mcp.cryptosieve.com/mcp`
  [![TradingMCP MCP connector](https://glama.ai/mcp/connectors/io.github.atilaahmettaner/tradingview-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.atilaahmettaner/tradingview-mcp)
  🔓 - Market screeners, technical analysis, backtests and charts for crypto, stocks and FX; tool calls need an API key.
- [TRON USDT Risk Checker](https://usdt.chikocorp.com/mcp-server) `https://usdt.chikocorp.com/mcp`
  [![TRON USDT Risk Checker MCP connector](https://glama.ai/mcp/connectors/io.github.chico10117/tron-usdt-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.chico10117/tron-usdt-mcp)
  🔓 - Tether USDT blacklist check for TRON addresses (free), plus OFAC screening and AML reports via x402 or API key.
- [TronOrb](https://tronorb.com/developers/mcp) `https://tronorb.com/mcp`
  [![TronOrb MCP connector](https://glama.ai/mcp/connectors/com.tronorb/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.tronorb/mcp)
  🔓 - Live TRON data: USDT TRC-20 fees with and without energy, address checks, Tether freezes, dApp and exchange rankings.
- [TronSave](https://tronsave.io) `https://mcp.tronsave.io/mcp`
  [![TronSave MCP connector](https://glama.ai/mcp/connectors/io.github.tronsave/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.tronsave/mcp)
  🔓 - Rent TRON energy and bandwidth: live quotes, wallet-signed or balance-paid orders, auto-buy. Quotes need no login.
- [TroyStack](https://troystack.com) `https://api.troystack.ai/mcp`
  [![TroyStack MCP connector](https://glama.ai/mcp/connectors/io.github.kingleosgold/troystack/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.kingleosgold/troystack)
  🔓 - Live gold, silver, platinum and palladium prices, COMEX vault inventory and a daily brief; portfolio tools need a key.
- [Truo](https://truo.com.au/docs) `https://connect.truo.com.au/mcp`
  [![Truo MCP connector](https://glama.ai/mcp/connectors/au.com.truo/truo/badges/score.svg)](https://glama.ai/mcp/connectors/au.com.truo/truo)
  🔐 - Ask your AI about your own Australian bank accounts via CDR; read-only at the bank.
- [Trust Check](https://trust-check.gm-tools.workers.dev) `https://trust-check.gm-tools.workers.dev/mcp`
  [![Trust Check MCP connector](https://glama.ai/mcp/connectors/io.github.gmahar82-stack/trust-check/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gmahar82-stack/trust-check)
  🔓 - Safety check for a Base token or address before you trade or pay it; USDC per call via x402.
- [Unlock Pulse](https://billibo6.github.io/unlockpulse/ai.html) `https://unlockpulse-mcp.unlockpulse.workers.dev/mcp`
  [![Unlock Pulse MCP connector](https://glama.ai/mcp/connectors/io.github.Billibo6/unlockpulse/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Billibo6/unlockpulse)
  🔓 - Token unlock calendar for the next 60 days, rated by size vs circulating supply, with past-unlock price history.
- [USDi](https://www.usdicoin.com/) `https://usdi-mcp.onrender.com/mcp`
  [![USDi MCP connector](https://glama.ai/mcp/connectors/io.github.MikeAshtonEILLC/usdi-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.MikeAshtonEILLC/usdi-mcp-server)
  🔓 - CPI-indexed cryptocurrency: live exchange rate, contract/pool addresses, and mint/redeem mechanics.
- [Valuein](https://valuein.biz) `https://mcp.valuein.biz/mcp`
  [![Valuein MCP connector](https://glama.ai/mcp/connectors/biz.valuein/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/biz.valuein/mcp)
  🔓 - Point-in-time SEC EDGAR fundamentals since 1993; every figure carries a fact_id traceable to its filing.
- [Vantage](https://vantagemcp.dev) `https://vantagemcp.dev/mcp`
  [![Vantage MCP connector](https://glama.ai/mcp/connectors/dev.vantagemcp/vantage/badges/score.svg)](https://glama.ai/mcp/connectors/dev.vantagemcp/vantage)
  🔐 - Ask questions about cloud cost and usage data.
- [Veqen](https://veqen-app.com/docs/mcp) `https://veqen-app.com/mcp`
  [![Veqen MCP connector](https://glama.ai/mcp/connectors/io.github.Keyveve/veqen/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Keyveve/veqen)
  🔐 - Track AI cost by customer and feature, compare model prices, inspect reconciliation and create budgets.
- [Veridion](https://www.veridionmarkets.com/data-api) `https://www.veridionmarkets.com/api/mcp`
  [![Veridion MCP connector](https://glama.ai/mcp/connectors/com.veridionmarkets/disclosures/badges/score.svg)](https://glama.ai/mcp/connectors/com.veridionmarkets/disclosures)
  🔓 - Search US congressional STOCK Act trades and the President's OGE filings, each row linked to its official filing.
- [Vérif Entreprise FR](https://api-production-24833.up.railway.app) `https://api-production-24833.up.railway.app/mcp`
  [![Vérif Entreprise FR MCP connector](https://glama.ai/mcp/connectors/app.railway.up.api-production-24833/verif-entreprise-fr/badges/score.svg)](https://glama.ai/mcp/connectors/app.railway.up.api-production-24833/verif-entreprise-fr)
  🔓 - Verify French companies by SIREN: legal status, BODACC insolvency proceedings and RGE certifications, paid via x402.
- [VetAgent](https://vetagent.dev) `https://vetagent.dev/mcp`
  [![VetAgent MCP connector](https://glama.ai/mcp/connectors/dev.vetagent/vetagent/badges/score.svg)](https://glama.ai/mcp/connectors/dev.vetagent/vetagent)
  🔓 - Pre-trade crypto token risk check: sell simulation, taxes, liquidity depth and pair age.
- [W System EU Business Data](https://wsystem.dev/eu-business-data-mcp-server) `https://api.wsystem.dev/mcp/`
  [![W System EU Business Data MCP connector](https://glama.ai/mcp/connectors/io.github.zifengw/eu-business-data-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.zifengw/eu-business-data-mcp)
  🔓 - EU VAT (VIES), EORI, company registers, EU/UN/OFAC/UK sanctions, KYB and e-invoice checks; 20 free calls/day.
- [Web3Juice](https://web3juice.com/mcp) `https://web3juice.com/api/mcp`
  [![Web3Juice MCP connector](https://glama.ai/mcp/connectors/com.web3juice/web3juice/badges/score.svg)](https://glama.ai/mcp/connectors/com.web3juice/web3juice)
  🔓 - DeFi yield data for ~17,000 pools: base vs reward APY, 90-day history and side-by-side pool comparisons.
- [Wellspent](https://find.wellspent.co) `https://api.wellspent.co/mcp`
  [![Wellspent MCP connector](https://glama.ai/mcp/connectors/co.wellspent/advisors/badges/score.svg)](https://glama.ai/mcp/connectors/co.wellspent/advisors)
  🔓 - Search 24,500+ fee-only financial advisors in the US and Canada by location, specialty, and client type.
- [WhereItGoes](https://whereitgoes.money/connect-ai) `https://api.whereitgoes.money/api/mcp`
  [![WhereItGoes MCP connector](https://glama.ai/mcp/connectors/money.whereitgoes/portfolio/badges/score.svg)](https://glama.ai/mcp/connectors/money.whereitgoes/portfolio)
  🔐 - Your own crypto portfolio across exchanges and wallets: holdings, history, FIFO P&L, fees and income. Read-only.
- [XFINLAB Intelligence](https://www.xfinlab.com/intelligence-api.html) `https://api.xfinlab.com/api/mcp`
  [![XFINLAB Intelligence MCP connector](https://glama.ai/mcp/connectors/io.github.lnanology/xfinlab/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.lnanology/xfinlab)
   🔓 - Market events, FinBERT sentiment, technical analysis, and AI news intelligence feeds; tools need a free API key.
- [xupersplit](https://split.xuper.fun) `https://split.xuper.fun/api/mcp`
  [![xupersplit MCP connector](https://glama.ai/mcp/connectors/io.github.kanylbullen/xupersplit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.kanylbullen/xupersplit)
  🔓 - Split group expenses with no account: create a split, record who paid, see who owes whom and settle up.
- [Finology Software](https://finology.tech/developers/) `https://mcp.finology.tech/mcp`
  🔑 - US federal student loan payments, forgiveness timing and tax, cited to primary sources.
- [invowerk](https://invowerk.dev) `https://api.invowerk.dev/mcp/`
  [![invowerk MCP connector](https://glama.ai/mcp/connectors/dev.invowerk/invowerk/badges/score.svg)](https://glama.ai/mcp/connectors/dev.invowerk/invowerk)
  🔓 - Validate e-invoices: ZUGFeRD, Factur-X, XRechnung and Peppol BIS, with a detailed validation report.
- [skanfirmy](https://skanfirmy.pl) `https://skanfirmy.pl/mcp`
  [![skanfirmy MCP connector](https://glama.ai/mcp/connectors/io.github.bartosz-kuc/skanfirmy/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bartosz-kuc/skanfirmy)
  🔓 - Verify Polish companies by NIP, KRS or REGON, plus the VAT white list and EU VAT via VIES.
- [VoxOdds](https://voxodds.com) `https://voxodds.com/mcp`
  [![VoxOdds MCP connector](https://glama.ai/mcp/connectors/com.voxodds/voxodds/badges/score.svg)](https://glama.ai/mcp/connectors/com.voxodds/voxodds)
  🔓 - Live Polymarket and Kalshi odds, executable quotes with fees, and pre-bet EV checks.
- [Vurto Swap](https://swap.vurto.cc) `https://swap.vurto.cc/mcp`
  [![Vurto Swap MCP connector](https://glama.ai/mcp/connectors/io.github.cryptoconspiracy/vurto-swap/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.cryptoconspiracy/vurto-swap)
  🔓 - Token swaps on 9 EVM chains and Solana ranked by net received; returns unsigned transactions.

- [WattCoin](https://wattcoin.org) `https://wattcoin-mcp-server.wattcoin.workers.dev/mcp`
  [![WattCoin MCP connector](https://glama.ai/mcp/connectors/io.github.WattCoin-Org/wattcoin-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.WattCoin-Org/wattcoin-mcp-server)
  🔓 - Agent task marketplace on Solana: register with no wallet, claim and submit tasks, earn WATT, build merit.

- [Wealthnow](https://wealthnow.io/api) `https://mcp.wealthnow.io/mcp`
  [![Wealthnow MCP connector](https://glama.ai/mcp/connectors/io.wealthnow/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.wealthnow/mcp)
  🔐 - Real-time stock and crypto quotes, fundamentals, SEC filings, insider, 13F and congress trades.

- [X1 Wealth](https://x1wealth.com) `https://mcp.x1wealth.com/mcp`
  [![X1 Wealth MCP connector](https://glama.ai/mcp/connectors/com.x1wealth/x1/badges/score.svg)](https://glama.ai/mcp/connectors/com.x1wealth/x1)
  🔐 - Ask about your trusts, entities, policies and documents. Every answer cites a page or declines.

- [x402 Agent Hub](https://x402-agent-hub.x402-agent-hub.workers.dev) `https://x402-agent-hub.x402-agent-hub.workers.dev/mcp`
  [![x402 Agent Hub MCP connector](https://glama.ai/mcp/connectors/io.github.BlackCat-cyber-creator/x402-agent-hub/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.BlackCat-cyber-creator/x402-agent-hub)
  🔓 - Onchain reads on 7 EVM chains, SEC financials and insider trades, company/people enrichment; pay per call via x402.
- [x402-agent-data](https://x402-agent.majighufron.workers.dev) `https://x402-agent.majighufron.workers.dev/mcp`
  [![x402-agent-data MCP connector](https://glama.ai/mcp/connectors/io.github.AjiGhufron9999/x402-agent-data/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AjiGhufron9999/x402-agent-data)
  🔓 - On-chain data: ERC-20 reports, contract DD, pool depth and wallet activity; USDC per call via x402.
- [YABA](https://yaba.day) `https://app.yaba.day/mcp`
  [![YABA MCP connector](https://glama.ai/mcp/connectors/day.yaba/yaba/badges/score.svg)](https://glama.ai/mcp/connectors/day.yaba/yaba)
  🔐 - Family budget for couples: read spending, budget pace, bills and balances; add or fix entries if allowed.

- [Zolva](https://zolvaagent.app/docs/mcp) `https://zolvaagent.app/mcp`
  [![Zolva MCP connector](https://glama.ai/mcp/connectors/app.zolvaagent/zolva/badges/score.svg)](https://glama.ai/mcp/connectors/app.zolvaagent/zolva)
  🔓 - Trading agents on Robinhood Chain: each hourly buy, sell or hold with its reason, plus stock token and crypto prices.

- [Zovo Price Tracker](https://mcp.zovo.one/s/price-tracker) `https://mcp.zovo.one/mcp/price-tracker`
  [![Zovo Price Tracker MCP connector](https://glama.ai/mcp/connectors/io.github.theluckystrike/price-tracker-drop-alert-watch/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.theluckystrike/price-tracker-drop-alert-watch)
  🔓 - Track shop prices over time: snapshot pages, keep a watch list, and get alerts when a target price is hit.

- [Cubicle](https://cubicle.algotrada.com) `https://cubicle.algotrada.com/deck/api/mcp`
  [![Cubicle MCP connector](https://glama.ai/mcp/connectors/com.algotrada.cubicle/cubicle/badges/score.svg)](https://glama.ai/mcp/connectors/com.algotrada.cubicle/cubicle)
  🔓 - Compile a trading rule into a state machine, rehearse it on real candles, read the tape, open USDG vaults on Robinhood.

### 🍽️ <a name="food--dining"></a>Food & Dining

- [Agent Chef](https://agentchef.net) `https://agentchef.net/mcp`
  [![Agent Chef MCP connector](https://glama.ai/mcp/connectors/net.agentchef/agent-chef/badges/score.svg)](https://glama.ai/mcp/connectors/net.agentchef/agent-chef)
  🔐 - Weekly family dinner ballot: propose recipes, the household votes, and get a grocery list.
- [ask.recipes](https://ask.recipes) `https://mcp.ask.recipes/mcp`
  [![ask.recipes MCP connector](https://glama.ai/mcp/connectors/recipes.ask/ask-recipes/badges/score.svg)](https://glama.ai/mcp/connectors/recipes.ask/ask-recipes)
  🔐 - Recipe search, ingredient matching, nutrition filters and a private cookbook for any AI agent.
- [Cork & Curve](https://corkandcurve.com/agents/) `https://corkandcurve.com/mcp`
  [![Cork & Curve MCP connector](https://glama.ai/mcp/connectors/com.corkandcurve/wine-travel/badges/score.svg)](https://glama.ai/mcp/connectors/com.corkandcurve/wine-travel)
  🔓 - Vineyards, tasting rooms and wine bars in 37 European wine regions, plus festivals and tours.
- [CostRail](https://www.food-cost-calculator.com/mcp) `https://www.food-cost-calculator.com/api/mcp`
  [![CostRail MCP connector](https://glama.ai/mcp/connectors/com.food-cost-calculator/costrail/badges/score.svg)](https://glama.ai/mcp/connectors/com.food-cost-calculator/costrail)
  🔓 - Restaurant recipe plate cost, butcher trim yield, and bar pour cost calculations with menu pricing.
- [DrinkedIn](https://drinkedin.net) `https://ai.drinkedin.net/mcp`
  [![DrinkedIn MCP connector](https://glama.ai/mcp/connectors/io.github.haim-barad/drinkedin/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.haim-barad/drinkedin)
  🔓 - Fictional bar for AI agents: venues, drinks, chat, real-bar lookup, and licensed datasets.
- [Dukkani](https://dukkanlink.com) `https://dukkanlink.com/mcp`
  [![Dukkani MCP connector](https://glama.ai/mcp/connectors/io.github.suhaH5/dukkani/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.suhaH5/dukkani)
  🔓 - Find Saudi neighbourhood groceries by city and district, and prepare a WhatsApp shopping list to send them.
- [FeedMyCart](https://feedmycart.com/en/claude-chatgpt/) `https://www.feedmycart.nl/boodschappen/api/v1/mcp`
  [![FeedMyCart MCP connector](https://glama.ai/mcp/connectors/nl.feedmycart/feedmycart/badges/score.svg)](https://glama.ai/mcp/connectors/nl.feedmycart/feedmycart)
  🔐 - Shared household grocery list with pantry and weekly supermarket deals in 15 countries.
- [Fast Food Index](https://fastfoodindex.com/api/) `https://api.fastfoodindex.com/mcp`
  [![Fast Food Index MCP connector](https://glama.ai/mcp/connectors/com.fastfoodindex/fast-food-index/badges/score.svg)](https://glama.ai/mcp/connectors/com.fastfoodindex/fast-food-index)
  🔓 - Real menu prices from 10 US chains — Big Mac Index by state, medians, price changes. Free, no key.
- [G-Guest](https://g-guest.app/developers) `https://g-guest.app/api/mcp`
  [![G-Guest MCP connector](https://glama.ai/mcp/connectors/app.g-guest/g-guest/badges/score.svg)](https://glama.ai/mcp/connectors/app.g-guest/g-guest)
  🔓 - Check live availability and book, look up or cancel a table at real restaurants and local businesses.
- [Gaplessly](https://gaplessly.com/docs/mcp) `https://gaplessly.com/api/mcp`
  [![Gaplessly MCP connector](https://glama.ai/mcp/connectors/com.gaplessly/booking/badges/score.svg)](https://glama.ai/mcp/connectors/com.gaplessly/booking)
  🔓 - Live appointment and table times at salons, clinics and restaurants on Gaplessly, with a link to book.
- [HeyYumi](https://heyyumi.ai) `https://mcp.heyyumi.ai/mcp`
  [![HeyYumi MCP connector](https://glama.ai/mcp/connectors/ai.heyyumi/heyyumi/badges/score.svg)](https://glama.ai/mcp/connectors/ai.heyyumi/heyyumi)
  🔐 - Search verified Korean restaurants and bars by filters, then request a table booking in chat.
- [Loafy](https://loafy.ai/claude) `https://loafy.ai/mcp`
  [![Loafy MCP connector](https://glama.ai/mcp/connectors/ai.loafy/loafy/badges/score.svg)](https://glama.ai/mcp/connectors/ai.loafy/loafy)
  🔓 - Sourdough dough calculators, a bake planner, the open book The Sourdough Framework and a personal bake journal.
- [Mon Batch Cooking](https://monbatchcooking.fr/assistant-ia) `https://api.monbatchcooking.fr/mcp`
  [![Mon Batch Cooking MCP connector](https://glama.ai/mcp/connectors/fr.monbatchcooking.api/mon-batch-cooking/badges/score.svg)](https://glama.ai/mcp/connectors/fr.monbatchcooking.api/mon-batch-cooking)
  🔓 - Search and read French batch cooking recipes, find dishes from pantry items and plan a cooking session.
- [Pour Picks](https://pourpicks.app/mcp) `https://mcp.pourpicks.app`
  [![Pour Picks MCP connector](https://glama.ai/mcp/connectors/io.github.bguillow-rgb/pour-picks/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bguillow-rgb/pour-picks)
  🔓 - Bourbon and American whiskey catalog: search, compare, and find similar or cheaper bottles.
- [PourWire](https://pourwire.com/?utm_source=awesome-remote-mcp) `https://pourwire.com/mcp`
  [![PourWire MCP connector](https://glama.ai/mcp/connectors/com.pourwire/pourwire/badges/score.svg)](https://glama.ai/mcp/connectors/com.pourwire/pourwire)
  🔓 - Upcoming restaurant and bar openings in NYC, LA and Texas from liquor license and permit filings.
- [PrepSheet](https://getprepsheet.com) `https://getprepsheet.com/mcp`
  [![PrepSheet MCP connector](https://glama.ai/mcp/connectors/com.getprepsheet/prepsheet/badges/score.svg)](https://glama.ai/mcp/connectors/com.getprepsheet/prepsheet)
  🔓 - Cost recipes, set menu prices, work out UK GP, scale recipes to covers and build kitchen prep lists for chefs.
- [RegPulse Compliance Oracle](https://www.reg-bot.ai/developers) `https://www.reg-bot.ai/api/mcp`
  [![RegPulse Compliance Oracle MCP connector](https://glama.ai/mcp/connectors/ai.reg-bot/compliance-oracle/badges/score.svg)](https://glama.ai/mcp/connectors/ai.reg-bot/compliance-oracle)
  🔓 - Read-only US food license data: verified state food rules, Florida license lookup and renewal dates.
- [RestaurantDoctorAI Profit Check](https://restaurantdoctorai.com/ai-assistants) `https://restaurantdoctorai.com/api/mcp`
  [![RestaurantDoctorAI Profit Check MCP connector](https://glama.ai/mcp/connectors/com.restaurantdoctorai/profit-check/badges/score.svg)](https://glama.ai/mcp/connectors/com.restaurantdoctorai/profit-check)
  🔓 - Free 12-question restaurant profit check that returns a grade and the biggest money leak.
- [Scern](https://scern.app) `https://api.scern.app/mcp`
  [![Scern MCP connector](https://glama.ai/mcp/connectors/app.scern.api/scern/badges/score.svg)](https://glama.ai/mcp/connectors/app.scern.api/scern)
  🔓 - Deterministic US packaged food evaluation: health scores, ingredient flags, FDA recalls, corporate ownership.
- [TableJourney](https://tablejourney.com/agents/) `https://tablejourney.com/mcp`
  [![TableJourney MCP connector](https://glama.ai/mcp/connectors/com.tablejourney/food-travel/badges/score.svg)](https://glama.ai/mcp/connectors/com.tablejourney/food-travel)
  🔓 - Restaurants, markets and street food in 200+ cities, plus food festivals and bookable tours.
- [Ullas Opskrifter](https://ullasopskrifter.dk) `https://ullasopskrifter.dk/mcp`
  [![Ullas Opskrifter MCP connector](https://glama.ai/mcp/connectors/dk.ullasopskrifter/recipes/badges/score.svg)](https://glama.ai/mcp/connectors/dk.ullasopskrifter/recipes)
  🔓 - Search and read Danish recipes, ingredients and categories; read-only.
- [WRDO](https://wrdo.co.za/support/mcp) `https://api.wrdo.co.za/mcp`
  [![WRDO MCP connector](https://glama.ai/mcp/connectors/za.co.wrdo/wrdo/badges/score.svg)](https://glama.ai/mcp/connectors/za.co.wrdo/wrdo)
  🔓 - Find local businesses, price lists and menus in Cape Town and the Western Cape, South Africa. Read-only, no auth.
- [bordeaux.guru](https://bordeaux.guru/mcp-server/) `https://mcp.bordeaux.guru/mcp`
  [![bordeaux.guru MCP connector](https://glama.ai/mcp/connectors/guru.bordeaux/en-primeur/badges/score.svg)](https://glama.ai/mcp/connectors/guru.bordeaux/en-primeur)
  🔓 - First-hand Bordeaux en primeur tasting notes, appellation climate, vine phenology and terroir geodata.
- [NYCfoodie](https://nycfoodie-production.up.railway.app/) `https://nycfoodie-production.up.railway.app/mcp`
  [![NYCfoodie MCP connector](https://glama.ai/mcp/connectors/app.railway.up.nycfoodie-production/nycfoodie/badges/score.svg)](https://glama.ai/mcp/connectors/app.railway.up.nycfoodie-production/nycfoodie)
  🔓 - Editorial NYC restaurant recommendations: search, compare, guides and ratings.

### 🎮 <a name="gaming"></a>Gaming

- [Agentic Kingdoms](https://agentickingdoms.com/agents) `https://mcp.agentickingdoms.com`
  [![Agentic Kingdoms MCP connector](https://glama.ai/mcp/connectors/com.agentickingdoms/agentic-kingdoms/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentickingdoms/agentic-kingdoms)
  🔓 - Strategy MMO where AI agents and people share kingdoms: build a city, join an alliance, fight for the Palace.
- [AI Game Developer](https://ai-game.dev) `https://ai-game.dev/mcp`
  [![AI Game Developer MCP connector](https://glama.ai/mcp/connectors/io.github.IvanMurzak/Unity-MCP/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.IvanMurzak/Unity-MCP)
  🔐 - Drive your own Unity, Unreal Engine or Godot editor: scenes, objects, assets, scripts and screenshots.
- [battle.training](https://battle.training) `https://api.battle.training/mcp`
  [![battle.training MCP connector](https://glama.ai/mcp/connectors/training.battle.api/battletraining/badges/score.svg)](https://glama.ai/mcp/connectors/training.battle.api/battletraining)
  🔓 - Arena where AI coding agents write JavaScript tank controllers and fight ranked ladder matches and prize cups.
- [Centering Lab](https://centeringlab.com/ai/) `https://centeringlab.com/mcp`
  [![Centering Lab MCP connector](https://glama.ai/mcp/connectors/com.centeringlab/centering-lab/badges/score.svg)](https://glama.ai/mcp/connectors/com.centeringlab/centering-lab)
  🔓 - Measure trading card centering from a photo and check PSA, BGS, CGC and SGC centering limits.
- [Chessigma](https://www.chessigma.com/developers/mcp) `https://www.chessigma.com/api/mcp`
  [![Chessigma MCP connector](https://glama.ai/mcp/connectors/com.chessigma/chessigma/badges/score.svg)](https://glama.ai/mcp/connectors/com.chessigma/chessigma)
  🔓 - Chess opening guides, FEN and PGN checks, the daily puzzle, Elo estimates and Chess.com or Lichess game review links.
- [Creative Cult](https://creativecult.digital) `https://creativecult.digital/mcp`
  [![Creative Cult MCP connector](https://glama.ai/mcp/connectors/digital.creativecult/research/badges/score.svg)](https://glama.ai/mcp/connectors/digital.creativecult/research)
  🔓 - Player-review data on new video games: daily recommend share, findings, best-of lists and a release calendar.
- [Deckodex](https://deckodex.com/assistant) `https://deckodex.com/mcp`
  [![Deckodex MCP connector](https://glama.ai/mcp/connectors/com.deckodex/deckodex/badges/score.svg)](https://glama.ai/mcp/connectors/com.deckodex/deckodex)
  🔐 - Gundam Card Game cards, prices, tournament meta, and your Deckodex collection and decks.
- [Diogenes EVE: Frontier](https://diogenesgateway.com/#eve-frontier) `https://diogenesgateway.com/mcp/eve-frontier`
  [![Diogenes EVE: Frontier MCP connector](https://glama.ai/mcp/connectors/io.github.stand-out-of-my-sun/diogenes-eve-frontier-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.stand-out-of-my-sun/diogenes-eve-frontier-mcp)
  🔓 - 14 Sui Move smart assembly development engines, smart gate route planner, and capacitor optimizer.
- [Elsewhere](https://elsewhereagents.com) `https://world.elsewhereagents.com/mcp?ref=awesome-remote`
  [![Elsewhere MCP connector](https://glama.ai/mcp/connectors/com.elsewhereagents/world/badges/score.svg)](https://glama.ai/mcp/connectors/com.elsewhereagents/world)
  🔐 - Persistent world for AI agents: explore, build, trade, research at the College and govern a city.
- [Foundplay](https://foundplay.io/connect) `https://foundplay.io/mcp`
  [![Foundplay MCP connector](https://glama.ai/mcp/connectors/io.foundplay/foundplay/badges/score.svg)](https://glama.ai/mcp/connectors/io.foundplay/foundplay)
  🔓 - Search free indie browser games by genre, phone support or multiplayer, with a link to each game's page.
- [gamecollecting.app](https://gamecollecting.app/ai) `https://gamecollecting.app/mcp`
  [![gamecollecting.app MCP connector](https://glama.ai/mcp/connectors/app.gamecollecting/price-guide/badges/score.svg)](https://glama.ai/mcp/connectors/app.gamecollecting/price-guide)
  🔓 - Accurate price guides and valuations for over 100,000 games and 190,000 editions, from completed sales.
- [Gamedev Tavern](https://entri.games/ai-agents?lang=en) `https://entri.games/mcp?src=awesome-mcp`
  [![Gamedev Tavern MCP connector](https://glama.ai/mcp/connectors/games.entri/gamedev-tavern/badges/score.svg)](https://glama.ai/mcp/connectors/games.entri/gamedev-tavern)
  🔐 - Gamedev matchmaking: tell the Tavern about you and your studio, post quests and get people and studios that fit.
- [GAMES.GG](https://help.games.gg/en/articles/2048414-use-gamesgg-with-your-ai-assistant) `https://mcp.games.gg/mcp`
  [![GAMES.GG MCP connector](https://glama.ai/mcp/connectors/gg.games/games-gg/badges/score.svg)](https://glama.ai/mcp/connectors/gg.games/games-gg)
  🔐 - Game guides, reviews, news, deals and release dates, plus saved games and redeem code alerts.
- [Ludo.ai](https://ludo.ai/api-mcp-integration) `https://mcp.ludo.ai/mcp`
  [![Ludo.ai MCP connector](https://glama.ai/mcp/connectors/ai.ludo/game-assets/badges/score.svg)](https://glama.ai/mcp/connectors/ai.ludo/game-assets)
  🔓 - Game sprites, spritesheet animations, rigged 3D models, video, music, SFX and voices; generation needs a Ludo API key.
- [PC Game Price Broker](https://company.eloai.io) `https://company.eloai.io/mcp`
  [![PC Game Price Broker MCP connector](https://glama.ai/mcp/connectors/io.eloai.company/price-broker/badges/score.svg)](https://glama.ai/mcp/connectors/io.eloai.company/price-broker)
  🔓 - Lowest live price for any PC game across 13 stores, with every store price and the record low.
- [Playable Gift](https://playablegift.com) `https://playablegift.com/mcp`
  [![Playable Gift MCP connector](https://glama.ai/mcp/connectors/com.playablegift/playable-gift/badges/score.svg)](https://glama.ai/mcp/connectors/com.playablegift/playable-gift)
  🔓 - Make, save and revise personal browser games, then share a gift link with the recipient.
- [PlayDrop](https://www.playdrop.ai/docs/connectors) `https://mcp.playdrop.ai/mcp`
  [![PlayDrop MCP connector](https://glama.ai/mcp/connectors/ai.playdrop/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.playdrop/mcp)
  🔐 - Publish, test and share browser games on PlayDrop from your AI agent.
- [Playgama](https://playgama.com/mcp/) `https://developer.playgama.com/api/mcp`
  [![Playgama MCP connector](https://glama.ai/mcp/connectors/com.playgama.developer/playgama-developer-cabinet/badges/score.svg)](https://glama.ai/mcp/connectors/com.playgama.developer/playgama-developer-cabinet)
  🔑 - Publish and manage HTML5 games on Playgama: game form, builds, covers, in-app catalog, sandbox link.
- [Plazmi](https://plazmi.gg) `https://plazmi.gg/mcp`
  [![Plazmi MCP connector](https://glama.ai/mcp/connectors/gg.plazmi/plazmi/badges/score.svg)](https://glama.ai/mcp/connectors/gg.plazmi/plazmi)
  🔓 - Move into a little house on a floating island: chores on a UTC clock, neighbours, and a postcard for your human.
- [PokéItem](https://www.pokeitem.fr/en/assistant-ia) `https://api.pokeitem.fr/mcp`
  [![PokéItem MCP connector](https://glama.ai/mcp/connectors/fr.pokeitem/pokeitem/badges/score.svg)](https://glama.ai/mcp/connectors/fr.pokeitem/pokeitem)
  🔐 - Pokémon TCG card and sealed product prices in EUR, deal checks, and your PokéItem binder and wishlist.
- [PokerData](https://pokerdata.io/api) `https://pokerdata.io/api/mcp`
  [![PokerData MCP connector](https://glama.ai/mcp/connectors/io.github.hft-studio/pokerdata/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hft-studio/pokerdata)
  🔓 - GTO poker solver data: NLHE/PLO preflop ranges, postflop strategy, EV. 6-max NL preflop free.
- [RPScripts FiveM Developer](https://rpscripts.net/docs/mcp/) `https://rpscripts.net/mcp`
  [![RPScripts FiveM Developer MCP connector](https://glama.ai/mcp/connectors/net.rpscripts/fivem/badges/score.svg)](https://glama.ai/mcp/connectors/net.rpscripts/fivem)
  🔓 - FiveM dev tools: find resources, check compatibility, validate Lua and server.cfg, generate jobs.
- [SECOND STRIKE](https://secondstrike.io/#/ai) `https://secondstrike-server-zgqvqzdrta-uc.a.run.app/mcp`
  [![SECOND STRIKE MCP connector](https://glama.ai/mcp/connectors/io.github.KyleClouthier/secondstrike/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.KyleClouthier/secondstrike)
  🔓 - Real-time war game for AI agents: command a nation, sign and break pacts, climb a public ladder.
- [Shared Forest](https://sharedforest.com) `https://sharedforest.com/mcp`
  [![Shared Forest MCP connector](https://glama.ai/mcp/connectors/io.github.ArneFfm/shared-forest/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ArneFfm/shared-forest)
  🔓 - Plant one tree a day in a shared illustrated forest, read its stats, and sponsor trees with OAuth.
- [Social Casino Index](https://socialcasinoindex.com/data/) `https://mcp.socialcasinoindex.com/mcp`
  [![Social Casino Index MCP connector](https://glama.ai/mcp/connectors/com.socialcasinoindex/toplist/badges/score.svg)](https://glama.ai/mcp/connectors/com.socialcasinoindex/toplist)
  🔓 - Daily-checked US social casino toplist: signup bonuses, payout times, redemption minimums and sources.
- [SpaceMolt](https://www.spacemolt.com) `https://game.spacemolt.com/mcp/v2`
  [![SpaceMolt MCP connector](https://glama.ai/mcp/connectors/io.github.statico-alt/spacemolt/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.statico-alt/spacemolt)
  🔓 - MMO for AI agents: mine, trade, craft, explore and fight across a 500-system galaxy.
- [SuperDuperBundle](https://superduperbundle.com/tools/api/) `https://superduperbundle.com/mcp`
  [![SuperDuperBundle MCP connector](https://glama.ai/mcp/connectors/io.github.superduperbundle/game-prices/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.superduperbundle/game-prices)
  🔓 - Lowest listed PC game key prices across Steam, GOG and key stores, by name, Steam ID or URL.
- [Tavern](https://gettavern.app/developers) `https://gettavern.app/mcp`
  [![Tavern MCP connector](https://glama.ai/mcp/connectors/io.github.jakehandy/tavern/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jakehandy/tavern)
  🔐 - Tabletop RPG campaigns: session journals, a wiki, maps, character sheets and a combat tracker for your TTRPG group.
- [The Pit](https://pit.benys.dev) `https://pit.benys.dev/mcp`
  [![The Pit MCP connector](https://glama.ai/mcp/connectors/dev.benys/the-pit/badges/score.svg)](https://glama.ai/mcp/connectors/dev.benys/the-pit)
  🔓 - Agent arena where AI agents register, call each other out and play server-refereed chess for ratings, free to play.
- [TickerMint](https://tickermint.cards/developers) `https://api.tickermint.cards/mcp`
  [![TickerMint MCP connector](https://glama.ai/mcp/connectors/io.github.seankarltonlee/tickermint/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.seankarltonlee/tickermint)
  🔓 - Daily trading card prices and history for Pokémon, One Piece, Lorcana, Yu-Gi-Oh, Riftbound and Gundam.
- [Vice City Hub](https://vicecityhub.github.io/vicecityhub/agents.html) `https://lpglkglhjdqnktybksth.supabase.co/functions/v1/agent-api/mcp`
  [![Vice City Hub MCP connector](https://glama.ai/mcp/connectors/io.github.vicecityhub/vicecityhub/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.vicecityhub/vicecityhub)
  🔓 - GTA VI news, GTA RP servers, Web3 domains, merch and crypto donations for AI agents.
- [Voidless](https://voidless.dev) `https://mcp.voidless.dev/mcp`
  [![Voidless MCP connector](https://glama.ai/mcp/connectors/dev.voidless/voidless/badges/score.svg)](https://glama.ai/mcp/connectors/dev.voidless/voidless)
  🔐 - Game art for coding agents: pixel art sprites, sprite animation, 8-direction sprites, tilesets, 3D, sound and music.
- [WagerX](https://wagerx.io/agent-gateway) `https://wagerx.io/mcp`
  [![WagerX MCP connector](https://glama.ai/mcp/connectors/io.wagerx/wager-x-crypto-casinos/badges/score.svg)](https://glama.ai/mcp/connectors/io.wagerx/wager-x-crypto-casinos)
  🔓 - Source-linked gambling regulatory intelligence and real-money crypto casino audit evidence.
- [YesNoMystery](https://lateralthinkingpuzzles.org) `https://lateralthinkingpuzzles.org/api/mcp`
  [![YesNoMystery MCP connector](https://glama.ai/mcp/connectors/io.github.yesnomystery/yes-no-mystery-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.yesnomystery/yes-no-mystery-mcp)
  🔓 - Play 1,000+ lateral thinking puzzles (turtle soup) in 12 languages with an AI yes/no host.
- [ZeroMind](https://origozero.ai/mcp-server) `https://origozero.ai/mcp`
  [![ZeroMind MCP connector](https://glama.ai/mcp/connectors/ai.origozero/zeromind/badges/score.svg)](https://glama.ai/mcp/connectors/ai.origozero/zeromind)
  🔐 - Write and run Luau in the Zero 3D engine, place entities, take screenshots and publish a game that plays in a browser.

### 🏋️ <a name="health--fitness"></a>Health & Fitness

- [AIm Workout Journal](https://aim-journal.com) `https://aim-journal.com/mcp`
  [![AIm Workout Journal MCP connector](https://glama.ai/mcp/connectors/com.aim-journal/aim/badges/score.svg)](https://glama.ai/mcp/connectors/com.aim-journal/aim)
  🔐 - Workout journal your assistant writes to: log and correct workouts, plan a program, see records and volume.
- [Bidwell Health](https://bidwellhealth.com/ai-connector) `https://tools.bidwellhealth.com/mcp`
  [![Bidwell Health MCP connector](https://glama.ai/mcp/connectors/com.bidwellhealth/connector/badges/score.svg)](https://glama.ai/mcp/connectors/com.bidwellhealth/connector)
  🔓 - Read-only information on Bidwell Health services, supported states, care limits, pricing, and visit guidance.
- [Biohacking Kompakt](https://biohackingkompakt.de) `https://mcp.biohackingkompakt.de/mcp`
  [![Biohacking Kompakt MCP connector](https://glama.ai/mcp/connectors/de.biohackingkompakt/biohacking-kompakt/badges/score.svg)](https://glama.ai/mcp/connectors/de.biohackingkompakt/biohacking-kompakt)
  🔓 - Evidence ratings for 340+ supplements, peptides and longevity methods, with study sources and podcast (German).
- [Blocks](https://blocks.zone/ai) `https://blocks.zone/api/mcp`
  [![Blocks MCP connector](https://glama.ai/mcp/connectors/zone.blocks/blocks/badges/score.svg)](https://glama.ai/mcp/connectors/zone.blocks/blocks)
  🔐 - Plan and review cycling and running: training calendar, synced rides, sleep and HRV.
- [CI Treasure Hunt](https://citreasurehunt.com/agents) `https://citreasurehunt.com/api/mcp`
  [![CI Treasure Hunt MCP connector](https://glama.ai/mcp/connectors/com.citreasurehunt/ci-treasure-hunt/badges/score.svg)](https://glama.ai/mcp/connectors/com.citreasurehunt/ci-treasure-hunt)
  🔓 - Search Contact Improvisation dance events, teachers, venues and local communities worldwide.
- [ClinX](https://clinx.org/data/assistants/) `https://clinx.org/mcp`
  [![ClinX MCP connector](https://glama.ai/mcp/connectors/org.clinx/clinx/badges/score.svg)](https://glama.ai/mcp/connectors/org.clinx/clinx)
  🔓 - Read-only public records on the 340B drug program and federally funded health centers, each with its official link.
- [GLP-1 Buyer Guide Prices](https://glp1buyerguide.com) `https://prices.glp1buyerguide.com/mcp`
  [![GLP-1 Buyer Guide Prices MCP connector](https://glama.ai/mcp/connectors/com.glp1buyerguide/glp1-prices/badges/score.svg)](https://glama.ai/mcp/connectors/com.glp1buyerguide/glp1-prices)
  🔓 - Month-to-month GLP-1 prices checked by GLP-1 Buyer Guide, with sources and check dates.
- [JustGains](https://justgains.com) `https://justgains.com/connect/mcp`
  [![JustGains MCP connector](https://glama.ai/mcp/connectors/com.justgains/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.justgains/mcp-server)
  🔐 - Your workouts, lift history and food diary: build and save workouts, check progress, and log meals and bodyweight.
- [KinToolkit](https://kintoolkit.com/developers) `https://kintoolkit.com/api/mcp`
  [![KinToolkit MCP connector](https://glama.ai/mcp/connectors/com.kintoolkit/label-reference/badges/score.svg)](https://glama.ai/mcp/connectors/com.kintoolkit/label-reference)
  🔓 - Educational US medicine label references and sourced guides; no patient inputs or personalized prescriptions.
- [Leki PL (leki-mcp)](https://leki.compabase.com) `https://leki.compabase.com/mcp`
  [![Leki PL (leki-mcp) MCP connector](https://glama.ai/mcp/connectors/io.github.ContentWriterco/leki-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ContentWriterco/leki-mcp)
  🔓 - Polish medicines: official refunded drug prices, patient co-payment, cheaper equivalents and leaflets.
- [MedBillAnalyzer](https://medbillanalyzer.com) `https://app.medbillanalyzer.com/mcp/apps?via=awesome_remote`
  [![MedBillAnalyzer MCP connector](https://glama.ai/mcp/connectors/com.medbillanalyzer/medbillanalyzer/badges/score.svg)](https://glama.ai/mcp/connectors/com.medbillanalyzer/medbillanalyzer)
  🔓 - Compares a medical bill with your insurer's EOB and flags mismatches; free scan, $10 per bill for findings and a letter.
- [MoveMate](https://movemate.app/ai) `https://api.movemate.app/mcp`
  [![MoveMate MCP connector](https://glama.ai/mcp/connectors/app.movemate/movemate/badges/score.svg)](https://glama.ai/mcp/connectors/app.movemate/movemate)
  🔐 - Your gym log: training stats, PRs and lift progression, plus workouts you approve scheduled straight into the app.
- [NobetciEczane.org](https://nobetcieczane.org/) `https://nobetcieczane.org/mcp`
  [![NobetciEczane.org MCP connector](https://glama.ai/mcp/connectors/org.nobetcieczane/nobetci-eczane/badges/score.svg)](https://glama.ai/mcp/connectors/org.nobetcieczane/nobetci-eczane)
  🔓 - Today's on-duty pharmacies in all 81 provinces of Türkiye and the TRNC, by district or nearest to a location.
- [P.R.O. Apple Health](https://proapp.uk/apple-health-mcp) `https://mcp.proapp.uk`
  [![P.R.O. Apple Health MCP connector](https://glama.ai/mcp/connectors/io.github.runwithfun/pro/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.runwithfun/pro)
  🔐 - Your Apple Health workouts, sleep, HRV and training plan in ChatGPT, Claude, Gemini and Grok. Free, from any device.
- [Peptide Library](https://peptidelibrary.app/developers/mcp) `https://peptidelibrary.app/mcp`
  [![Peptide Library MCP connector](https://glama.ai/mcp/connectors/app.peptidelibrary/peptide-library/badges/score.svg)](https://glama.ai/mcp/connectors/app.peptidelibrary/peptide-library)
  🔓 - Peptide research profiles with evidence by study type, comparisons, educational search and unit math.
- [Peptides Academy](https://peptidesacademy.co/mcp) `https://peptidesacademy.co/mcp`
  [![Peptides Academy MCP connector](https://glama.ai/mcp/connectors/co.peptidesacademy/peptides-academy/badges/score.svg)](https://glama.ai/mcp/connectors/co.peptidesacademy/peptides-academy)
  🔓 - Peptide research from 28 source-grounded dossiers and ~2,000 cited studies, trials and FDA labels.
- [Phi Longevity PRISM](https://philongevity.com/for-agents) `https://philongevity.com/mcp?src=awesome`
  [![Phi Longevity PRISM MCP connector](https://glama.ai/mcp/connectors/io.github.Philongevity/phi-longevity-prism/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Philongevity/phi-longevity-prism)
  🔓 - Guideline-cited lab-results analysis for chronic conditions; flags missing or overdue tests with citations.
- [Povver](https://povver.ai) `https://mcp.povver.ai/mcp`
  [![Povver MCP connector](https://glama.ai/mcp/connectors/ai.povver/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/ai.povver/mcp-server)
  🔐 - Your strength-training data: workout history, per-lift trends, muscle-group volume and routines.
- [Psychologie & Sérénité](https://psychologieetserenite.com/?via=awesome-remote-mcp-servers) `https://psychologieetserenite.com/mcp`
  [![Psychologie & Sérénité MCP connector](https://glama.ai/mcp/connectors/com.psychologieetserenite/catalogue/badges/score.svg)](https://glama.ai/mcp/connectors/com.psychologieetserenite/catalogue)
  🔓 - Read-only catalogue of psychology tests, books, articles and services, with EUR prices and purchase links (FR/EN).
- [Reps: Gym Workout Log (repsworkout.com)](https://repsworkout.com/connect?utm_source=awesome-remote) `https://api.repsworkout.com/mcp`
  [![Reps MCP connector](https://glama.ai/mcp/connectors/com.repsworkout/reps/badges/score.svg)](https://glama.ai/mcp/connectors/com.repsworkout/reps)
  🔐 - Read your gym log (workouts, PRs, lift progress, routines, plan) and save routines and plans you approve.
- [Splyt](https://splyt.fit/developers) `https://splyt.fit/mcp`
  [![Splyt MCP connector](https://glama.ai/mcp/connectors/fit.splyt/splyt/badges/score.svg)](https://glama.ai/mcp/connectors/fit.splyt/splyt)
  🔐 - Read your own Splyt workouts, personal records, training plan, habits and sleep (read-only).
- [Trainzilla](https://trainzilla.app/solutions/ai-agent) `https://api.tzilla.live/mcp`
  [![Trainzilla MCP connector](https://glama.ai/mcp/connectors/io.github.Trainzilla/trainzilla-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Trainzilla/trainzilla-mcp)
  🔐 - For personal trainers: manage clients, workout and diet plans, check-ins, habits, sessions and billing.
- [Vlada Health](https://www.vladahealth.com/data-access) `https://mcp-secure.vladahealth.com/mcp`
  [![Vlada Health MCP connector](https://glama.ai/mcp/connectors/io.github.btenner84/vlada/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.btenner84/vlada)
  🔐 - US healthcare data: hospital and payer prices, Medicare Advantage, Medicaid, providers and drugs, each with its source.

### 💼 <a name="jobs--careers"></a>Jobs & Careers

- [Destava](https://destava.com/mcp/docs) `https://destava.com/mcp`
  [![Destava job search MCP connector](https://glama.ai/mcp/connectors/com.destava/jobs/badges/score.svg)](https://glama.ai/mcp/connectors/com.destava/jobs)
  🔓 - Search current job postings from companies' own career sites, check if one is still open, set up a daily search.

### 🧠 <a name="knowledge--memory"></a>Knowledge & Memory

- [艾达 ADA](https://ai.hengyu.group) `https://ai.hengyu.group/mcp`
  [![艾达 ADA MCP connector](https://glama.ai/mcp/connectors/group.hengyu.ai/ada/badges/score.svg)](https://glama.ai/mcp/connectors/group.hengyu.ai/ada)
  🔓 - Shared public warehouse for agents: search, fetch and store reusable knowledge, no signup and no key required.
- [AaaSagent Templates](https://aaasagent.xyz) `https://aaasagent.xyz/api/v1/mcp`
  [![AaaSagent Templates MCP connector](https://glama.ai/mcp/connectors/xyz.aaasagent/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/xyz.aaasagent/mcp)
  🔓 - Browse and fetch 632 open-source agent templates; bring your own LLM key.
- [ABS · AI Business System](https://www.ucai.net) `https://www.ucai.net/api/agent/mcp`
  [![ABS · AI Business System MCP connector](https://glama.ai/mcp/connectors/net.ucai/abs/badges/score.svg)](https://glama.ai/mcp/connectors/net.ucai/abs)
  🔐 - Lean and operations knowledge base built on DBS: cited answers, tool cards, scheduled plans and diagnoses.
- [AbuzzHive](https://www.abuzzhive.com) `https://www.abuzzhive.com/mcp`
  [![AbuzzHive MCP connector](https://glama.ai/mcp/connectors/com.abuzzhive/abuzzhive/badges/score.svg)](https://glama.ai/mcp/connectors/com.abuzzhive/abuzzhive)
  🔐 - Q&A boards where agents post problems they are stuck on and other agents solve them; search, post, solve, vote.
- [Agents Handbook](https://agentshandbook.com/for-agents) `https://agentshandbook.com/mcp`
  [![Agents Handbook MCP connector](https://glama.ai/mcp/connectors/com.agentshandbook/handbook/badges/score.svg)](https://glama.ai/mcp/connectors/com.agentshandbook/handbook)
  🔓 - Search sourced playbooks for real jobs done with AI agents: prompts, steps, checkpoints, known failures and fixes.
- [AIAgentCycle](https://aiagentcycle.com) `https://mcp.aiagentcycle.com/mcp`
  [![AIAgentCycle MCP connector](https://glama.ai/mcp/connectors/com.aiagentcycle/aiagentcycle/badges/score.svg)](https://glama.ai/mcp/connectors/com.aiagentcycle/aiagentcycle)
  🔓 - Search services, prices, integrations, cases and FAQs in Dutch and English, with source links.
- [AIeph](https://aieph.dev) `https://aieph.dev/mcp`
  [![AIeph MCP connector](https://glama.ai/mcp/connectors/dev.aieph/aieph/badges/score.svg)](https://glama.ai/mcp/connectors/dev.aieph/aieph)
  🔓 - Look up a shared cache of past answers to programming questions.
- [Alcoven](https://alcoven.co) `https://app.alcoven.co/mcp`
  [![Alcoven MCP connector](https://glama.ai/mcp/connectors/co.alcoven/alcoven/badges/score.svg)](https://glama.ai/mcp/connectors/co.alcoven/alcoven)
  🔐 - Open your team's project from the AI you use: read and write its brief, documents, tasks and notes.
- [Analytics Legends](https://analyticslegends.ai/mcp-server/) `https://analyticslegends.ai/mcp`
  [![Analytics Legends MCP connector](https://glama.ai/mcp/connectors/ai.analyticslegends/sap-analytics/badges/score.svg)](https://glama.ai/mcp/connectors/ai.analyticslegends/sap-analytics)
  🔓 - SAP AI & analytics market data: consulting firms, day-rate bands, job radar and news, each record citable.
- [Atlas Red](https://atlas-red.com/mind-map-mcp) `https://app.atlas-red.com/mcp`
  [![Atlas Red MCP connector](https://glama.ai/mcp/connectors/com.atlas-red/mind-map/badges/score.svg)](https://glama.ai/mcp/connectors/com.atlas-red/mind-map)
  🔐 - Create and edit mind maps — nodes, links, and subtrees — then export them or render one as an image.
- [Azquo](https://azquo.com) `https://data.azquo.ai/mcp`
  [![Azquo MCP connector](https://glama.ai/mcp/connectors/ai.azquo/azquo/badges/score.svg)](https://glama.ai/mcp/connectors/ai.azquo/azquo)
  🔐 - Shared, auditable memory for multiple agents: hierarchical data whose totals add up and every write is attributed.
- [Bible by Midvash](https://mcp.midvash.com) `https://mcp.midvash.com/mcp/plugin`
  [![Bible by Midvash MCP connector](https://glama.ai/mcp/connectors/com.midvash/bible/badges/score.svg)](https://glama.ai/mcp/connectors/com.midvash/bible)
  🔓 - 119 free Bible translations in 69 languages: passages, search, cross-references, commentary and Strong's.
- [Bilg](https://app.bilgai.com/docs/connect?ref=mcp-directory) `https://mcp.bilgai.com/mcp`
  [![Bilg MCP connector](https://glama.ai/mcp/connectors/com.bilgai/bilg/badges/score.svg)](https://glama.ai/mcp/connectors/com.bilgai/bilg)
  🔐 - Shared memory for coding agents and their teams: search docs, read and write epics, tasks and decisions.
- [BotGathering](https://botgathering.com) `https://botgathering.com/mcp`
  [![BotGathering MCP connector](https://glama.ai/mcp/connectors/com.botgathering/recipes/badges/score.svg)](https://glama.ai/mcp/connectors/com.botgathering/recipes)
  🔓 - Tested step-by-step playbooks for AI agents: search, follow and report outcomes. Free.
- [Brainattic](https://brainattic.ai) `https://app.brainattic.ai/api/mcp`
  [![Brainattic MCP connector](https://glama.ai/mcp/connectors/ai.brainattic/knowledge-base/badges/score.svg)](https://glama.ai/mcp/connectors/ai.brainattic/knowledge-base)
  🔐 - The knowledge base your AI reads and writes, under your rules: search, edit and govern docs and skills.
- [bsv.cx](https://bsv.cx) `https://bsv.cx/mcp`
  [![bsv.cx MCP connector](https://glama.ai/mcp/connectors/cx.bsv/bsv-cx/badges/score.svg)](https://glama.ai/mcp/connectors/cx.bsv/bsv-cx)
  🔓 - Timestamp and verify evidence on-chain; let your agent prove what it saw and when.
- [Cloud FinOps by OptimNow](https://pypi.org/project/cloud-finops-mcp/) `https://mcp.optimnow.io/mcp`
  [![Cloud FinOps by OptimNow MCP connector](https://glama.ai/mcp/connectors/io.github.OptimNow/cloud-finops/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.OptimNow/cloud-finops)
  🔓 - Fetches FinOps reference guides and waste-pattern runbooks on cloud and AI cost management; no account needed.
- [coldHat](https://coldhat.f-keys.com) `https://coldhat.f-keys.com/mcp`
  [![coldHat MCP connector](https://glama.ai/mcp/connectors/io.github.vince-gonzalez/coldhat/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.vince-gonzalez/coldhat)
  🔓 - Wear anyone's AI working rules by GitHub username: returns their hat.md and a hat code proving it was read.
- [Context Pill](https://contextpill.com) `https://contextpill.com/mcp`
  [![Context Pill MCP connector](https://glama.ai/mcp/connectors/com.contextpill/context-pill/badges/score.svg)](https://glama.ai/mcp/connectors/com.contextpill/context-pill)
  🔓 - Daily feed of AI releases, tools and techniques, each item labeled with how it was checked.
- [Continuity](https://continuitywriter.com) `https://continuitywriter.com/mcp`
  [![Continuity MCP connector](https://glama.ai/mcp/connectors/io.github.LAHutchins91/continuity/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.LAHutchins91/continuity)
  🔓 - Remembers your writing project across chats: story bible, characters, timeline and continuity checks.
- [ctxstore](https://ctxstore.ai) `https://mcp.ctxstore.ai/mcp`
  [![ctxstore MCP connector](https://glama.ai/mcp/connectors/ai.ctxstore/ctxstore-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.ctxstore/ctxstore-mcp)
  🔓 - Persistent memory for AI agents: keyed facts, a wake bundle each session, one memory across every model.
- [Detextit](https://www.detextit.com) `https://www.detextit.com/api/mcp`
  [![Detextit MCP connector](https://glama.ai/mcp/connectors/com.detextit.www/detextit/badges/score.svg)](https://glama.ai/mcp/connectors/com.detextit.www/detextit)
  🔓 - Read-only shared agent context with sources and conditions, plus plans for recovering from task constraints.
- [Dexio](https://dexio.wiki) `https://app.dexio.wiki/mcp`
  [![Dexio MCP connector](https://glama.ai/mcp/connectors/wiki.dexio/dexio/badges/score.svg)](https://glama.ai/mcp/connectors/wiki.dexio/dexio)
  🔐 - One wiki all your agents read and write over MCP, with every version kept and the agent behind each change recorded.
- [Digital Garden](https://digitalgarden.si/agents/) `https://mcp.digitalgarden.si/mcp`
  [![Digital Garden MCP connector](https://glama.ai/mcp/connectors/si.digitalgarden.mcp/digital-garden-by-alicia-notes/badges/score.svg)](https://glama.ai/mcp/connectors/si.digitalgarden.mcp/digital-garden-by-alicia-notes)
  🔓 - Search and cite Alicia’s notes on WebGPU, three.js, Houdini, glTF, OpenUSD and AI workflows.
- [docs2mcp](https://docs2mcp.com) `https://mcp.docs2mcp.com/mcp`
  [![docs2mcp MCP connector](https://glama.ai/mcp/connectors/com.docs2mcp/docs2mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.docs2mcp/docs2mcp)
  🔐 - Query your own PDFs and documents, with every answer linking to the exact page and region it came from.
- [Eigma](https://eigma.app) `https://my.eigma.app/api/mcp`
  [![Eigma MCP connector](https://glama.ai/mcp/connectors/app.eigma.my/eigma/badges/score.svg)](https://glama.ai/mcp/connectors/app.eigma.my/eigma)
  🔐 - Files what you learn into a personal wiki and quizzes you before you forget it.
- [emem](https://emem.dev) `https://emem.dev/mcp`
  [![emem MCP connector](https://glama.ai/mcp/connectors/io.github.Vortx-AI/emem/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Vortx-AI/emem)
  🔓 - Elevation, vegetation, flood, fire and air-quality facts for any place, each with a signed receipt.
- [eudr](https://eudr.dev) `https://eudr.dev/mcp`
  [![eudr MCP connector](https://glama.ai/mcp/connectors/io.github.Vortx-AI/eudr/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Vortx-AI/eudr)
  🔓 - Check farm plots against the EU Deforestation Regulation and prepare signed Annex II Due Diligence Statements.
- [Engram](https://engram.page) `https://mcp.engram.page`
  [![Engram MCP connector](https://glama.ai/mcp/connectors/io.github.engram-app/engram/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.engram-app/engram)
  🔐 - Search, read and edit your Obsidian notes as AI memory, synced to the cloud and reachable with Obsidian closed.
- [Engram - Second Brain](https://engram.rootcause.ro) `https://engram.rootcause.ro/mcp/directory`
  [![Engram - Second Brain MCP connector](https://glama.ai/mcp/connectors/ro.rootcause/engram/badges/score.svg)](https://glama.ai/mcp/connectors/ro.rootcause/engram)
  🔐 - A second brain for Claude: remembers your work, plans your day, encrypted under a key only you hold.
- [Eremos Thai Bible](https://bible.eremosapp.com) `https://mcp.eremosapp.com/mcp`
  [![Eremos Thai Bible MCP connector](https://glama.ai/mcp/connectors/com.eremosapp/bible/badges/score.svg)](https://glama.ai/mcp/connectors/com.eremosapp/bible)
  🔓 - Read and search the CC0 Thai Bible draft, with verse references and published translation decision notes.
- [FeedNest](https://www.feednest.com) `https://mcp.feednest.com`
  [![FeedNest MCP connector](https://glama.ai/mcp/connectors/com.feednest.mcp/feed-nest/badges/score.svg)](https://glama.ai/mcp/connectors/com.feednest.mcp/feed-nest)
  🔐 - Read and search your RSS feeds and articles, plus save, tag, highlight and add notes on paid plans; OAuth sign-in.
- [Flash](https://flashmemorize.com) `https://flashmemorize.com/mcp`
  🔐 - Spaced-repetition flashcards: create cards from notes, get quizzed by voice, and let FSRS schedule reviews.
- [FoxNose Knowledge](https://foxnose.net/docs/mcp) `https://mcp.foxnose.net/_mcp`
  [![FoxNose Knowledge MCP connector](https://glama.ai/mcp/connectors/net.foxnose/knowledge/badges/score.svg)](https://glama.ai/mcp/connectors/net.foxnose/knowledge)
  🔑 - Hybrid search over vectors, full text and structured filters, with auto-embeddings.
- [Gravity](https://www.gravitynotes.app/connect-ai-apps) `https://mcp.gravitynotes.app/mcp`
  [![Gravity MCP connector](https://glama.ai/mcp/connectors/app.gravitynotes/gravity/badges/score.svg)](https://glama.ai/mcp/connectors/app.gravitynotes/gravity)
  🔐 - Save, search and edit notes in your Gravity list, and move old notes back to the top.
- [Greenlit Books](https://greenlitbooks.com/developers) `https://greenlitbooks.com/api/mcp`
  [![Greenlit Books MCP connector](https://glama.ai/mcp/connectors/com.greenlitbooks/catalog/badges/score.svg)](https://glama.ai/mcp/connectors/com.greenlitbooks/catalog)
  🔓 - Search a catalog of practical AI books, read free chapters, and check a claim against the source behind it.
- [HAIDAA](https://haidaa.com/mcp) `https://mcp.haidaa.com/mcp`
  [![HAIDAA MCP connector](https://glama.ai/mcp/connectors/com.haidaa.mcp/haidaa/badges/score.svg)](https://glama.ai/mcp/connectors/com.haidaa.mcp/haidaa)
  🔓 - Search signed scientific claims, methods, provenance, contradictions, retractions, and admission receipts.
- [Hugging Face](https://huggingface.co) `https://huggingface.co/mcp`
  [![Hugging Face MCP connector](https://glama.ai/mcp/connectors/co.huggingface/hf-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/co.huggingface/hf-mcp-server)
  🔓 - Search models, datasets, and Spaces, and call Space APIs.
- [Hunchful](https://hunchful.io) `https://hunchful.io/mcp`
  [![Hunchful MCP connector](https://glama.ai/mcp/connectors/io.hunchful/hunchful/badges/score.svg)](https://glama.ai/mcp/connectors/io.hunchful/hunchful)
  🔐 - Your AI's inbox and people search: message friends, find people by how they work, knock with consent.
- [Imashime](https://imashime.waitlab.workers.dev/en?ref=github) `https://imashime.waitlab.workers.dev/mcp`
  [![Imashime MCP connector](https://glama.ai/mcp/connectors/dev.workers.waitlab.imashime/imashime/badges/score.svg)](https://glama.ai/mcp/connectors/dev.workers.waitlab.imashime/imashime)
  🔓 - Search notes on AI mistakes in everyday work, each with a better way to ask next time; optionally send yours privately.
- [Kika](https://getkika.app/mcp) `https://api.getkika.app/mcp`
  [![Kika MCP connector](https://glama.ai/mcp/connectors/io.github.usekika/kika/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.usekika/kika)
  🔐 - Shared memory for a client engagement: decisions, blockers, promises and what was already tried.
- [knowsme](https://knowsme.dev) `https://mcp.knowsme.dev/mcp`
  [![knowsme MCP connector](https://glama.ai/mcp/connectors/dev.knowsme.mcp/knowsme/badges/score.svg)](https://glama.ai/mcp/connectors/dev.knowsme.mcp/knowsme)
  🔐 - One memory for you and your AI agents: your notes, rules and projects follow you across machines, AI apps and agents.
- [Lochless](https://lochless.io) `https://api.lochless.io/mcp`
  [![Lochless MCP connector](https://glama.ai/mcp/connectors/io.lochless/lochless/badges/score.svg)](https://glama.ai/mcp/connectors/io.lochless/lochless)
  🔐 - Every match, not the top 10: searches your documents and returns each relevant one, with quotes.
- [Lumberroom](https://lumberroom.cloud) `https://mcp.lumberroom.cloud/mcp`
  [![Lumberroom MCP connector](https://glama.ai/mcp/connectors/cloud.lumberroom.mcp/lumberroom/badges/score.svg)](https://glama.ai/mcp/connectors/cloud.lumberroom.mcp/lumberroom)
  🔐 - Durable shared memory for AI agents: search, write, correct and forget facts across clients.
- [MemoryRouter](https://memoryrouter.ai) `https://mcp.memoryrouter.ai/mcp`
  [![MemoryRouter MCP connector](https://glama.ai/mcp/connectors/ai.memoryrouter/memoryrouter/badges/score.svg)](https://glama.ai/mcp/connectors/ai.memoryrouter/memoryrouter)
  🔓 - Cross-AI persistent memory for ChatGPT, Claude, Codex and other MCP clients: one user-scoped vault. OAuth unlocks it.
- [MemorySync](https://memorysync.io) `https://mcp.memorysync.io/mcp`
  [![MemorySync MCP connector](https://glama.ai/mcp/connectors/io.memorysync/memory/badges/score.svg)](https://glama.ai/mcp/connectors/io.memorysync/memory)
  🔐 - Scoped, persistent memory for agents to save, inspect and recall decisions across sessions.
- [MarkIt](https://mark-it.co) `https://mark-it.co/api/mcp`
  [![MarkIt MCP connector](https://glama.ai/mcp/connectors/io.github.FuzulsFriend/markit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.FuzulsFriend/markit)
  🔓 - Search, save and set reminders in your library of saved links, posts and notes; sign in to unlock all tools.
- [Metraipolis](https://metraipolis.com) `https://metraipolis.com/mcp`
  [![Metraipolis MCP connector](https://glama.ai/mcp/connectors/com.metraipolis/knowledge-commons/badges/score.svg)](https://glama.ai/mcp/connectors/com.metraipolis/knowledge-commons)
  🔓 - Knowledge commons for AI agents: cited, licensed, queryable claims over MCP.
- [MMW](https://mmwhub.tech) `https://mcp.mmwhub.tech/mcp`
  [![MMW MCP connector](https://glama.ai/mcp/connectors/tech.mmwhub.mcp/mmw/badges/score.svg)](https://glama.ai/mcp/connectors/tech.mmwhub.mcp/mmw)
  🔐 - Persistent agent memory workspace with strict tenant isolation and provenance.
- [Mnemoverse](https://mnemoverse.com) `https://mcp.mnemoverse.com/mcp`
  [![Mnemoverse MCP connector](https://glama.ai/mcp/connectors/io.github.mnemoverse/mcp-memory-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.mnemoverse/mcp-memory-server)
  🔐 - Persistent agent memory; tell it a recalled memory helped or misled and it re-ranks the next recall.
- [New Runtime](https://newruntime.com/agents/) `https://newruntime.com/mcp`
  [![New Runtime MCP connector](https://glama.ai/mcp/connectors/com.newruntime/archive/badges/score.svg)](https://glama.ai/mcp/connectors/com.newruntime/archive)
  🔓 - Dated, source-linked AI-engineering archive: what changed since a date, topic briefs, forecasts with a track record.
- [NextLang](https://www.nextlang.co/mcp) `https://www.nextlang.co/api/mcp`
  [![NextLang MCP connector](https://glama.ai/mcp/connectors/co.nextlang/nextlang/badges/score.svg)](https://glama.ai/mcp/connectors/co.nextlang/nextlang)
  🔐 - Make Anki, Quizlet, Mochi and Brainscape flashcard decks and review your vocabulary with spaced repetition.
- [NEXUS AGI](https://nexus.eblas.link/en) `https://nexus.eblas.link/mcp`
  [![NEXUS AGI MCP connector](https://glama.ai/mcp/connectors/link.eblas.nexus/nexus-agi/badges/score.svg)](https://glama.ai/mcp/connectors/link.eblas.nexus/nexus-agi)
  🔐 - Shared memory that keeps AI agents from repeating costly mistakes: past decisions, rules and incidents, shared by all.
- [NotebookLM MCP Server by useapi.net](https://useapi.net/docs/api-gemini-notebook-v1/mcp) `https://api.useapi.net/v1/gemini-notebook/mcp`
  [![NotebookLM MCP Server by useapi.net MCP connector](https://glama.ai/mcp/connectors/net.useapi/gemini-notebook/badges/score.svg)](https://glama.ai/mcp/connectors/net.useapi/gemini-notebook)
  🔐 - NotebookLM (Gemini Notebook) sources, cited chat, podcasts, slides on your Google account. Not affiliated with Google.
- [NoteMCP](https://notemcp.com) `https://notemcp.com/mcp`
  [![NoteMCP MCP connector](https://glama.ai/mcp/connectors/com.notemcp/notemcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.notemcp/notemcp)
  🔐 - Long-term memory from your notes: search, read and edit notes saved by text, voice or share sheet.
- [Notion](https://notion.com) `https://mcp.notion.com/mcp`
  🔐 - Read and write Notion pages, databases, and comments.
- [notepad.page](https://notepad.page) `https://mcp.notepad.page/mcp`
  [![notepad.page MCP connector](https://glama.ai/mcp/connectors/page.notepad/notepad/badges/score.svg)](https://glama.ai/mcp/connectors/page.notepad/notepad)
  🔓 - Publish, recall and update persistent private HTML pages at a personal address; publishing needs OAuth.
- [OnlyMCP](https://only-mcp.com) `https://only-mcp.com/api/mcp`
  [![OnlyMCP MCP connector](https://glama.ai/mcp/connectors/com.only-mcp/onlymcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.only-mcp/onlymcp)
  🔐 - Skills, agents and markdown memory in the cloud, the same in every client, plus a gateway to your other MCP servers.
- [Ontonym](https://www.ontonym.com) `https://mcp.ontonym.com/mcp`
  [![Ontonym MCP connector](https://glama.ai/mcp/connectors/com.ontonym/memory/badges/score.svg)](https://glama.ai/mcp/connectors/com.ontonym/memory)
  🔐 - Give your agents your team's real data: read the shared graph, and propose actions a human approves.
- [OwnerSpec](https://ownerspec.com/mcp-server/) `https://ownerspec.com/mcp`
  [![OwnerSpec MCP connector](https://glama.ai/mcp/connectors/com.ownerspec/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.ownerspec/mcp)
  🔓 - Cited home water treatment answers: diagnose a water problem, size a softener, and match replacement parts.
- [Pairgora](https://pairgora.com) `https://pairgora.com/api/mcp`
  [![Pairgora MCP connector](https://glama.ai/mcp/connectors/io.github.mason0501/pairgora/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.mason0501/pairgora)
  🔓 - Community of human-agent pairs: seek Cards other pairs wrote from real work, store your own, report what worked.
- [past.dev](https://past.dev/docs/mcp/overview) `https://app.past.dev/mcp`
  [![past.dev MCP connector](https://glama.ai/mcp/connectors/dev.past/past/badges/score.svg)](https://glama.ai/mcp/connectors/dev.past/past)
  🔐 - Long-term memory for agents: ask what is true now and get the current facts back with their dated sources.
- [Pinto Notes](https://pintonotes.com) `https://mcp.pintonotes.com`
  [![Pinto Notes MCP connector](https://glama.ai/mcp/connectors/com.pintonotes/pinto-notes/badges/score.svg)](https://glama.ai/mcp/connectors/com.pintonotes/pinto-notes)
  🔐 - Search, read and edit your notes; every AI edit is highlighted in the app, with version history and undo.
- [QianYuan 乾元](https://qianyuan.ltd) `https://qianyuan.ltd/mcp`
  [![QianYuan MCP connector](https://glama.ai/mcp/connectors/ltd.qianyuan/qy-evolution/badges/score.svg)](https://glama.ai/mcp/connectors/ltd.qianyuan/qy-evolution)
  🔓 - Reuse verified results and pitfalls other agents already published, before doing the work yourself.
- [Recipe library](https://ofershap.github.io/agent-success-hub/) `https://recipes.gitshow.dev/mcp`
  [![Recipe library MCP connector](https://glama.ai/mcp/connectors/io.github.ofershap/recipe-library/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ofershap/recipe-library)
  🔓 - Search and read reviewed Hebrew AI-agent task recipes, with available full English versions. Read-only.
- [Remnant](https://remnant.dedale-bi.com/knowledge) `https://remnant.dedale-bi.com/mcp/chatgpt`
  [![Remnant Read MCP connector](https://glama.ai/mcp/connectors/com.dedale-bi.remnant/remnant/badges/score.svg)](https://glama.ai/mcp/connectors/com.dedale-bi.remnant/remnant)
  🔓 - Search prior debugging experience, inspect evidence and failed attempts; free public reading without signup.
- [Renor](https://renor.cloud) `https://mcp.renor.cloud/mcp`
  [![Renor MCP connector](https://glama.ai/mcp/connectors/io.github.patrickpassosb/renor/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.patrickpassosb/renor)
  🔐 - Private memory for your AI agents: save and recall facts and notes across Claude Code, Codex, Cursor and ChatGPT.
- [RepoMemory](https://repomemory.dev) `https://api.repomemory.dev/mcp`
  [![RepoMemory MCP connector](https://glama.ai/mcp/connectors/dev.repomemory/repomemory/badges/score.svg)](https://glama.ai/mcp/connectors/dev.repomemory/repomemory)
  🔓 - Shared project memory for coding agents: decisions, lessons, guardrails and tasks per repo; calls need a free key.
- [Rootr](https://rootr.io) `https://rootr.io/mcp`
  [![Rootr MCP connector](https://glama.ai/mcp/connectors/io.github.inspirio-co/rootr-cli/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.inspirio-co/rootr-cli)
  🔐 - Read, search and write team docs, tables, issues and CRM records, with answers citing their source.
- [Scento Perfume API (MCP server)](https://www.scento.com/developers/perfume-mcp-server) `https://www.scento.com/mcp`
  [![Scento Perfume API MCP connector](https://glama.ai/mcp/connectors/com.scento/perfume-compendium/badges/score.svg)](https://glama.ai/mcp/connectors/com.scento/perfume-compendium)
  🔓 - Perfume portraits, raw materials, scent pairings and occasion edits, with a scento.com page on every answer.
- [Sensefold](https://sensefold.app/for-agents) `https://api.sensefold.app/mcp`
  [![Sensefold MCP connector](https://glama.ai/mcp/connectors/app.sensefold/sensefold/badges/score.svg)](https://glama.ai/mcp/connectors/app.sensefold/sensefold)
  🔐 - Search, read and write your saved articles, threads, PDFs, notes and AI chats as Markdown.
- [SlashYear](https://slashyear.com) `https://slashyear.com/mcp`
  [![SlashYear MCP connector](https://glama.ai/mcp/connectors/com.slashyear/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.slashyear/mcp)
  🔓 - Dated historical events, each a verbatim sentence from a cited Wikipedia revision, searchable by year, day or subject.
- [Sooveryn](https://www.sooveryn.com/?utm_source=awesome-remote-mcp&utm_medium=annuaire&utm_campaign=lancement-oct) `https://mcp.sooveryn.com/mcp`
  [![Sooveryn MCP connector](https://glama.ai/mcp/connectors/com.sooveryn/sooveryn/badges/score.svg)](https://glama.ai/mcp/connectors/com.sooveryn/sooveryn)
  🔑 - A team of AI personas sharing a lasting, encrypted memory per project, hosted in France.
- [static.md](https://static.md/agents?ref=awesome-remote) `https://static.md/mcp`
  [![static.md MCP connector](https://glama.ai/mcp/connectors/md.static/static-md/badges/score.svg)](https://glama.ai/mcp/connectors/md.static/static-md)
  🔐 - Markdown notes and Excalidraw whiteboards your agent can read and write, with scoped OAuth and end-to-end encryption.
- [Stele](https://stele-ai.dev) `https://app.stele-ai.dev/api/mcp`
  [![Stele MCP connector](https://glama.ai/mcp/connectors/dev.stele-ai/stele/badges/score.svg)](https://glama.ai/mcp/connectors/dev.stele-ai/stele)
  🔐 - Shared project memory for coding agents: recall and record decisions, lessons and risks, and claim tasks.
- [Substrate](https://trysubstrate.co/?utm_source=awesome-remote-mcp&utm_medium=listing&utm_campaign=plugin-listings&utm_content=plugin) `https://app.trysubstrate.co/mcp`
  [![Substrate MCP connector](https://glama.ai/mcp/connectors/co.trysubstrate/memory/badges/score.svg)](https://glama.ai/mcp/connectors/co.trysubstrate/memory)
  🔐 - Shared memory for your agents: recall cited facts, save and correct them, and forget lines on request.
- [Synapse Layer](https://synapselayer.org) `https://forge.synapselayer.org/api/mcp`
  [![Synapse Layer MCP connector](https://glama.ai/mcp/connectors/io.github.SynapseLayer/synapse-layer/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.SynapseLayer/synapse-layer)
  🔓 - Persistent encrypted agent memory with semantic recall and cross-agent continuity.
- [The Living Bread](https://mcp.living-bread.org/) `https://mcp.living-bread.org/mcp`
  [![The Living Bread MCP connector](https://glama.ai/mcp/connectors/org.living-bread.mcp/the-living-bread/badges/score.svg)](https://glama.ai/mcp/connectors/org.living-bread.mcp/the-living-bread)
  🔓 - Bible passages with evidence labels, cross references, and real Christian communities near you.
- [Thea](https://thealibrary.org) `https://thealibrary.org/mcp`
  [![Thea MCP connector](https://glama.ai/mcp/connectors/org.thealibrary/thea/badges/score.svg)](https://glama.ai/mcp/connectors/org.thealibrary/thea)
  🔓 - Open, people-curated knowledge library: 1M+ Korean places, people and works, no signup or key.
- [Urantia Papers](https://urantia.dev) `https://api.urantia.dev/mcp`
  [![Urantia Papers MCP connector](https://glama.ai/mcp/connectors/dev.urantia/urantia-papers/badges/score.svg)](https://glama.ai/mcp/connectors/dev.urantia/urantia-papers)
  🔓 - Read and search the Urantia Papers by reference, keyword, or meaning, with named entities and Bible cross-references.
- [UseMyContext](https://usemycontext.ai) `https://mcp.usemycontext.ai/mcp`
  [![UseMyContext MCP connector](https://glama.ai/mcp/connectors/io.github.usemycontext/usemycontext/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.usemycontext/usemycontext)
  🔓 - Your own profile and files as AI context; anonymous access gets metadata only.
- [Vedaword](https://vedaword.com/en/mcp) `https://mcp.vedaword.com`
  [![Vedaword MCP connector](https://glama.ai/mcp/connectors/com.vedaword/library/badges/score.svg)](https://glama.ai/mcp/connectors/com.vedaword/library)
  🔓 - Search Sanskrit scripture by meaning, read verses and look up terms, with citations and honest "no answer".
- [Veyrul](https://veyrul.com/docs) `https://veyrul.com/mcp`
  [![Veyrul MCP connector](https://glama.ai/mcp/connectors/com.veyrul/media-hub/badges/score.svg)](https://glama.ai/mcp/connectors/com.veyrul/media-hub)
  🔓 - Search source-linked media knowledge and collaborate with agents; public reads, token required to contribute.
- [Vilix AI](https://vilix.ai) `https://api.vilix.ai/mcp`
  [![Vilix AI MCP connector](https://glama.ai/mcp/connectors/ai.vilix.api/vilix-ai/badges/score.svg)](https://glama.ai/mcp/connectors/ai.vilix.api/vilix-ai)
  🔐 - Persistent AI memory shared across tools and devices.
- [What Led To](https://whatledto.com) `https://whatledto.com/mcp`
  [![What Led To MCP connector](https://glama.ai/mcp/connectors/com.whatledto/what-led-to/badges/score.svg)](https://glama.ai/mcp/connectors/com.whatledto/what-led-to)
  🔓 - Source-backed timelines of tech, economy and gaming events, with the quote behind each entry.
- [WhiteMagic](https://www.whitemagic.dev) `https://mcp.whitemagic.dev/mcp`
  [![WhiteMagic MCP connector](https://glama.ai/mcp/connectors/io.github.lbailey94/whitemagic-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.lbailey94/whitemagic-mcp)
  🔓 - Local-first agent memory and session continuity: durable recall, handoffs, and signed continuity receipts.
- [WITAN Markets](https://witan.markets) `https://witan.markets/mcp`
  [![WITAN Markets MCP connector](https://glama.ai/mcp/connectors/io.github.witanmarkets/witan/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.witanmarkets/witan)
  🔓 - Agents buy what search can't find: measured knowledge and data its sellers hold the rights to, paid via x402.

### ⚖️ <a name="legal"></a>Legal
- [Abmahnexperte.de](https://abmahnexperte.de/) `https://mein.abmahnexperte.de/mcp`
  [![Abmahnexperte.de MCP connector](https://glama.ai/mcp/connectors/de.abmahnexperte/abmahnung/badges/score.svg)](https://glama.ai/mcp/connectors/de.abmahnexperte/abmahnung)
  🔓 - Guides on German Abmahnungen (cease and desist letters); a form passes yours to a lawyer for a free first assessment.
- [AcqPath](https://developers.getacqpath.com) `https://api.getacqpath.com/mcp`
  [![AcqPath MCP connector](https://glama.ai/mcp/connectors/com.getacqpath/acqpath/badges/score.svg)](https://glama.ai/mcp/connectors/com.getacqpath/acqpath)
  🔓 - Check observed machine-readable source-rights declarations before AI, RAG, indexing, training or search.

- [Akashi Notari](https://akashi-notari.com) `https://anchor.akashi-notari.com/mcp`
  [![Akashi Notari MCP connector](https://glama.ai/mcp/connectors/io.github.self-reality/akashi-notari/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.self-reality/akashi-notari)
  🔓 - Proof of existence for files: anchor a SHA-256 hash on Base and look up proofs; an anchor costs $0.01 over x402.
- [Antevo Trademark](https://antevo.ch/trademark/) `https://trademark.antevo.ch/mcp`
  [![Antevo Trademark MCP connector](https://glama.ai/mcp/connectors/ch.antevo/trademark/badges/score.svg)](https://glama.ai/mcp/connectors/ch.antevo/trademark)
  🔓 - Checks a brand name across 50+ national and regional trademark registers, with each office's opposition deadline.
- [BRANCO](https://droit.juan-branco.fr/installer) `https://droit.juan-branco.fr/api/mcp/oauth`
  [![BRANCO MCP connector](https://glama.ai/mcp/connectors/fr.juan-branco/branco/badges/score.svg)](https://glama.ai/mcp/connectors/fr.juan-branco/branco)
  🔐 - Search French legislation and case law, read legal sources, and verify citations with a BRANCO Research account.
- [Cheap NY Publication](https://cheapnypublication.com/ai) `https://cheapnypublication.com/mcp`
  [![Cheap NY Publication MCP connector](https://glama.ai/mcp/connectors/com.cheapnypublication/ny-llc/badges/score.svg)](https://glama.ai/mcp/connectors/com.cheapnypublication/ny-llc)
  🔓 - New York LLC lookup from the state register: publication deadline, county and price, plus filing quotes.
- [Claim Done](https://claimdone.com.au/connect-your-ai-assistant/) `https://claimdone.com.au/mcp`
  [![Claim Done MCP connector](https://glama.ai/mcp/connectors/au.com.claimdone/claimdone/badges/score.svg)](https://glama.ai/mcp/connectors/au.com.claimdone/claimdone)
  🔓 - Drafts Australian letters of demand, tribunal applications and notices, and returns a payment link. Not a law firm.
- [ClevSec EU compliance](https://clevsec.one/mcp/) `https://mcp.clevsec.one/mcp`
  [![ClevSec EU compliance MCP connector](https://glama.ai/mcp/connectors/one.clevsec/eu-compliance/badges/score.svg)](https://glama.ai/mcp/connectors/one.clevsec/eu-compliance)
  🔓 - Rule-based NIS2, DORA, GDPR and Cyber Resilience Act checks, with the legal sources for every answer.
- [Common Paper](https://commonpaper.com) `https://api.commonpaper.com/mcp`
  [![Common Paper MCP connector](https://glama.ai/mcp/connectors/com.commonpaper/contracts/badges/score.svg)](https://glama.ai/mcp/connectors/com.commonpaper/contracts)
  🔐 - Create agreements from standard templates, send them for signature, and track status and history.
- [Cookie Compliance](https://cookie-compliance.co/mcp/) `https://mcp.cookie-compliance.co/mcp`
  [![Cookie Compliance MCP connector](https://glama.ai/mcp/connectors/co.cookie-compliance/cookie-consent/badges/score.svg)](https://glama.ai/mcp/connectors/co.cookie-compliance/cookie-consent)
  🔓 - Preview, install and configure a cookie consent banner that holds trackers in the page until the visitor chooses.
- [Court Rules](https://www.courtrules.app) `https://mcp.courtrules.app/mcp`
  [![Court Rules MCP connector](https://glama.ai/mcp/connectors/app.courtrules/court-rules/badges/score.svg)](https://glama.ai/mcp/connectors/app.courtrules/court-rules)
  🔓 - US judge filing rules, court holidays and enforcement data; free samples, OAuth for full access.
- [Datakoot Regulatory Intel](https://datakoot.com/regulatory-intel) `https://regulatory.datakoot.com/mcp`
  [![Datakoot Regulatory Intel MCP connector](https://glama.ai/mcp/connectors/com.datakoot/federal-register-rules/badges/score.svg)](https://glama.ai/mcp/connectors/com.datakoot/federal-register-rules)
  🔓 - Federal Register rules, proposed rules, notices and executive orders, searchable by agency and term.
- [Dilligence](https://dilligence.ia.br/agentes) `https://dilligence.ia.br/mcp`
  [![Dilligence MCP connector](https://glama.ai/mcp/connectors/br.ia.dilligence/certidoes/badges/score.svg)](https://glama.ai/mcp/connectors/br.ia.dilligence/certidoes)
  🔓 - Brazilian company clearance certificates (certidões) by CNPJ: fetched from each agency, PDFs read, positives flagged.
- [disclosedby](https://disclosedby.com) `https://disclosedby.com/api/mcp`
  [![disclosedby MCP connector](https://glama.ai/mcp/connectors/com.disclosedby/record/badges/score.svg)](https://glama.ai/mcp/connectors/com.disclosedby/record)
  🔓 - Dated quotes of GDPR art. 28 subprocessor lists: who lists whom, what changed, and what a list said on a date.
- [DutyKit](https://dutykit.dev) `https://dutykit.dev/mcp`
  [![DutyKit MCP connector](https://glama.ai/mcp/connectors/io.github.renschrder-stack/dutykit/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.renschrder-stack/dutykit)
  🔓 - EU business duties for DE, LU and EU: legal obligations with sources, plus pre-checks for invoices and marketing.
- [fynk](https://fynk.com/en/integrations/mcp-server/) `https://app.fynk.com/mcp`
  [![fynk MCP connector](https://glama.ai/mcp/connectors/com.fynk.app/fynk-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.fynk.app/fynk-mcp)
  🔐 - Manage contracts end to end: find and analyze them, draft or upload new ones, add signatories and send for e-signature.
- [GleanMark](https://gleanmark.com/integrations) `https://gleanmark.com/mcp`
  [![GleanMark MCP connector](https://glama.ai/mcp/connectors/com.gleanmark/trademark-search/badges/score.svg)](https://glama.ai/mcp/connectors/com.gleanmark/trademark-search)
  🔓 - Search 14M USPTO trademark records, mark status and history, Office Actions and TTAB cases; OAuth for your portfolios.
- [GLO Law](https://glolaw.org/case-search/connect) `https://mcp.glolaw.org/mcp`
  [![GLO Law MCP connector](https://glama.ai/mcp/connectors/org.glolaw/glo-law/badges/score.svg)](https://glama.ai/mcp/connectors/org.glolaw/glo-law)
  🔓 - U.S. court opinions, statutes, regulations and corrections policies, with each answer's source and coverage stated.
- [GroundRules](https://law.agentlookups.ai) `https://law.agentlookups.ai/mcp`
  [![GroundRules MCP connector](https://glama.ai/mcp/connectors/ai.agentlookups/groundrules/badges/score.svg)](https://glama.ai/mcp/connectors/ai.agentlookups/groundrules)
  🔓 - Original text of US federal and state law with official source links, current-through dates and stale flags.
- [klaro.legal](https://klaro.legal/en-us/embed-widget) `https://klaro.legal/api/mcp`
  [![klaro.legal MCP connector](https://glama.ai/mcp/connectors/legal.klaro/document-explainer/badges/score.svg)](https://glama.ai/mcp/connectors/legal.klaro/document-explainer)
  🔓 - Explains contracts, official letters and tax assessments clause by clause in plain language; not legal advice.
- [Lebanese Legislation](https://lebaneselegislation.com/ai/) `https://lebaneselegislation.com/mcp`
  [![Lebanese Legislation MCP connector](https://glama.ai/mcp/connectors/com.lebaneselegislation/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.lebaneselegislation/mcp)
  🔓 - Lebanese laws, articles, court rulings and Official Gazette issues since 1904, in Arabic and French, verbatim.
- [LibreJustice](https://librejustice.fr) `https://librejustice.fr/mcp`
  [![LibreJustice MCP connector](https://glama.ai/mcp/connectors/fr.librejustice/librejustice/badges/score.svg)](https://glama.ai/mcp/connectors/fr.librejustice/librejustice)
  🔐 - French and European case law and legislation, searched in plain language and linked article by article.
- [Licitações BR](https://mcpize.com/mcp/mcp-licitacoes-br) `https://mcp-licitacoes-br.mcpize.run/mcp`
  [![Licitações BR MCP connector](https://glama.ai/mcp/connectors/io.github.DouglasGouvea/mcp-licitacoes-br/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.DouglasGouvea/mcp-licitacoes-br)
  🔐 - Brazilian public tenders and contracts from PNCP, each fact with its official source and date.
- [LienDeadline](https://liendeadline.com) `https://mcp.liendeadline.com/mcp`
  [![LienDeadline MCP connector](https://glama.ai/mcp/connectors/io.github.LienDeadline/liendeadline-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.LienDeadline/liendeadline-mcp)
  🔓 - Read-only US mechanics lien and preliminary notice deadlines for suppliers, plus lien guides for all 50 states and DC.
- [MachineWitness](https://machinewitness.eu/api) `https://machinewitness.eu/mcp`
  [![MachineWitness MCP connector](https://glama.ai/mcp/connectors/eu.machinewitness/archive/badges/score.svg)](https://glama.ai/mcp/connectors/eu.machinewitness/archive)
  🔓 - EU archive of robots.txt, ai.txt and AI opt-outs: check if a domain is observed, order time-stamped captures.
- [Magist](https://magist.io/mcp) `https://magist.io/api/mcp`
  [![Magist MCP connector](https://glama.ai/mcp/connectors/io.github.magist-io/magist/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.magist-io/magist)
  🔓 - Cited regulatory research, implementation controls and product scoping; legal information, not legal advice.
- [ONYST RVG](https://onyst.legal/mcp/en) `https://api.onyst.legal/mcp`
  [![ONYST RVG MCP connector](https://glama.ai/mcp/connectors/legal.onyst/rvg/badges/score.svg)](https://glama.ai/mcp/connectors/legal.onyst/rvg)
  🔐 - German lawyers' fees under the RVG, values in dispute and invoices, every amount from the ONYST fee engine.
- [Pakistan Case Law](https://pakistancaselaw.com) `https://pakistancaselaw.com/mcp`
  [![Pakistan Case Law MCP connector](https://glama.ai/mcp/connectors/com.pakistancaselaw/caselaw/badges/score.svg)](https://glama.ai/mcp/connectors/com.pakistancaselaw/caselaw)
  🔓 - 230,000+ Pakistani court judgments: search by issue, question, court, judge or citation; walk the citation graph.
- [Patent by Ouroboros](https://ouroborosapps.com/docs/patent) `https://patent-mcp.vercel.app/mcp`
  [![Patent by Ouroboros MCP connector](https://glama.ai/mcp/connectors/io.github.LAHutchins91/patent/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.LAHutchins91/patent)
  🔓 - US patent search and prior art lookup that returns only records the patent office returned; not legal advice.
- [Patlas](https://patlas.dev) `https://patlas.dev/mcp`
  [![Patlas MCP connector](https://glama.ai/mcp/connectors/dev.patlas/patlas/badges/score.svg)](https://glama.ai/mcp/connectors/dev.patlas/patlas)
  🔐 - Patent prior-art search over USPTO and EPO data, claim comparison, and codebase scans for patentable tech.
- [Precleared](https://precleared.dev) `https://precleared.dev/mcp`
  [![Precleared MCP connector](https://glama.ai/mcp/connectors/dev.precleared/contact-check/badges/score.svg)](https://glama.ai/mcp/connectors/dev.precleared/contact-check)
  🔓 - Checks if a cold marketing email to one address is allowed under UK, US, Canadian, German or French law, with a receipt.
- [PRIMAMCP](https://mcp.planitprima.com) `https://mcp.planitprima.com/mcp`
  [![PRIMAMCP MCP connector](https://glama.ai/mcp/connectors/io.github.PLANIT-TECH/primamcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.PLANIT-TECH/primamcp)
  🔐 - German and EU law: statutes, court decisions, EU acts and legislative materials, with verified citations.
- [Redra](https://redra.ai) `https://mcp.redra.ai/mcp`
  [![Redra MCP connector](https://glama.ai/mcp/connectors/io.github.sacrosaunt/redra/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.sacrosaunt/redra)
  🔓 - Searches current US class-action settlements by company, state, deadline and proof needed, with official claim links.
- [RegAI Legal MCP](https://regai.tw/mcp) `https://mcp.regai.tw/mcp`
  [![RegAI Legal MCP connector](https://glama.ai/mcp/connectors/tw.regai/legal/badges/score.svg)](https://glama.ai/mcp/connectors/tw.regai/legal)
  🔐 - Taiwan law and court decisions: statutes, articles by number, apex-court and Grand Chamber rulings; read-only.
- [Thai Legal](https://legaltech.in.th) `https://mcp.legaltech.in.th/mcp`
  [![Thai Legal MCP connector](https://glama.ai/mcp/connectors/th.in.legaltech/thai-legal/badges/score.svg)](https://glama.ai/mcp/connectors/th.in.legaltech/thai-legal)
  🔐 - Search Thai statutes, Royal Gazette, Council of State opinions and Supreme Court rulings, with verifiable citations.

- [UK Legislation Changes](https://uk-legal-changes.pages.dev) `https://uk-legal-changes.pages.dev/mcp`
  [![UK Legislation Changes MCP connector](https://glama.ai/mcp/connectors/io.github.busybusybussiness/uk-legislation-changes/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.busybusybussiness/uk-legislation-changes)
  🔓 - Point-in-time amendment history for 506 UK legislation provisions across employment, equality, consumer and company law.
- [Vespper](https://www.vespper.com/) `https://mcp.vespper.com/mcp`
  [![Vespper MCP connector](https://glama.ai/mcp/connectors/com.vespper.mcp/vespper-docx-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.vespper.mcp/vespper-docx-mcp)
  🔐 - Reads .docx files as HTML and writes edits back as native Word tracked changes.
- [Zitierfest](https://zitierfest.de) `https://mcp.zitierfest.de/mcp`
  [![Zitierfest MCP connector](https://glama.ai/mcp/connectors/de.zitierfest/zitierfest/badges/score.svg)](https://glama.ai/mcp/connectors/de.zitierfest/zitierfest)
  🔐 - German statutes verbatim (federal, 16 states, EU), federal court decisions with paragraph numbers, legal fees.

### 🎯 <a name="marketing"></a>Marketing

- [402registry](https://402registry.com) `https://402registry.com/mcp`
  [![402registry MCP connector](https://glama.ai/mcp/connectors/com.402registry/402registry/badges/score.svg)](https://glama.ai/mcp/connectors/com.402registry/402registry)
  🔓 - Can AI crawlers see a website: free lookup of its last dated verdict; a new check is paid with x402 in USDC on Base.

- [AdRadar](https://adradarmcp.cloud/en/) `https://adradarmcp.cloud/mcp`
  [![AdRadar MCP connector](https://glama.ai/mcp/connectors/io.github.Egggy1998/adradar/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Egggy1998/adradar)
  🔐 - Find competitors' longest-running Meta and TikTok ads, scored by hook, angle and audience.

- [Adrails](https://adrails.ai) `https://adrails.ai/api/mcp`
  [![Adrails MCP connector](https://glama.ai/mcp/connectors/ai.adrails/adrails/badges/score.svg)](https://glama.ai/mcp/connectors/ai.adrails/adrails)
  🔐 - Meta and Google Ads for Shopify stores: store revenue next to ad spend, and new campaigns prepared paused for approval.

- [Adsap](https://adsap.ai) `https://mcp.adsap.ai/mcp`
  [![Adsap MCP connector](https://glama.ai/mcp/connectors/ai.adsap/adsap/badges/score.svg)](https://glama.ai/mcp/connectors/ai.adsap/adsap)
  🔐 - Meta and Google Ads automation: launch ads in bulk and preview every change first.

- [AdsTurbo](https://adsturbo.ai) `https://adsturbo.ai/klian/novartapi/mcp`
  [![AdsTurbo MCP connector](https://glama.ai/mcp/connectors/io.github.AdsTurbo/adsturbo/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AdsTurbo/adsturbo)
  🔓 - Clone a winning ad around your product, make AI-actor and product videos, and translate them with lip sync.

- [Advisors AI Service Navigator](https://advisorsai.ai) `https://advisorsai.ai/mcp`
  [![Advisors AI Service Navigator MCP connector](https://glama.ai/mcp/connectors/ai.advisorsai/service-navigator/badges/score.svg)](https://glama.ai/mcp/connectors/ai.advisorsai/service-navigator)
  🔓 - Read-only catalog of five services, a public-page check, and a request-link; nothing is charged.


- [Advisors AI Store Readiness](https://advisorsai.ai) `https://advisorsai.ai/store-readiness-mcp`
  [![Advisors AI Store Readiness MCP connector](https://glama.ai/mcp/connectors/ai.advisorsai/store-readiness/badges/score.svg)](https://glama.ai/mcp/connectors/ai.advisorsai/store-readiness)
  🔓 - Check a public page's robots, sitemap, JSON-LD, canonical tags and llms.txt.


- [AEO Backlink](https://docs.advancelabs.dev/aeo-toolkit/reference/mcp-registry-install/) `https://aeo.advancelabs.dev/api/mcp/backlink/mcp`
  [![AEO Backlink MCP connector](https://glama.ai/mcp/connectors/dev.advancelabs/aeo-backlink/badges/score.svg)](https://glama.ai/mcp/connectors/dev.advancelabs/aeo-backlink)
  🔓 - Link-building research: brand mentions, prospects, competitor link sources and page link checks.

- [AffiliateBase](https://www.affiliatebase.io) `https://app.affiliatebase.io/mcp`
  [![AffiliateBase MCP connector](https://glama.ai/mcp/connectors/io.affiliatebase/affiliatebase/badges/score.svg)](https://glama.ai/mcp/connectors/io.affiliatebase/affiliatebase)
  🔐 - Set up and run a Stripe affiliate program: tracking checks, affiliates, commissions and payouts.

- [AfterLaunch](https://afterlaunch.io) `https://afterlaunch.io/api/mcp`
  [![AfterLaunch MCP connector](https://glama.ai/mcp/connectors/io.afterlaunch/agentic-growth-marketing/badges/score.svg)](https://glama.ai/mcp/connectors/io.afterlaunch/agentic-growth-marketing)
  🔓 - AI answer visibility, SEO and a ranked backlog of growth moves; tools need an account.
- [Agent C](https://www.theagentc.io/mcp) `https://api.theagentc.io/mcp`
  [![Agent C MCP connector](https://glama.ai/mcp/connectors/io.theagentc/app-store-screenshots/badges/score.svg)](https://glama.ai/mcp/connectors/io.theagentc/app-store-screenshots)
  🔓 - AI-designed App Store screenshot sets, uploaded to App Store Connect; tools require an Agent C API key.
- [Agent Data API](https://agent.chiemgaufilms.com) `https://agent.chiemgaufilms.com/mcp`
  [![Agent Data API MCP connector](https://glama.ai/mcp/connectors/com.chiemgaufilms.agent/agent-data-api/badges/score.svg)](https://glama.ai/mcp/connectors/com.chiemgaufilms.agent/agent-data-api)
  🔓 - SEO data for agencies and agents in DACH: keywords, SERP, competitors, local search; pay per call with x402 USDC.
- [agentbuilt](https://agentbuilt.dev/mcp) `https://agentbuilt.dev/api/mcp`
  [![agentbuilt MCP connector](https://glama.ai/mcp/connectors/dev.agentbuilt/agentbuilt/badges/score.svg)](https://glama.ai/mcp/connectors/dev.agentbuilt/agentbuilt)
  🔓 - Free AI-readiness audit of any URL: AI crawler rules, JS-free text, JSON-LD, llms.txt and concrete fixes.

- [AgenticWebScore](https://agenticwebscore.com) `https://agenticwebscore.com/mcp`
  [![AgenticWebScore MCP connector](https://glama.ai/mcp/connectors/com.agenticwebscore/scan/badges/score.svg)](https://glama.ai/mcp/connectors/com.agenticwebscore/scan)
  🔓 - Scan a public website for AI agent readiness: 60 checks, a score, and the evidence for each.

- [AgentPixel](https://agentpixel.io) `https://agentpixel.io/mcp`
  [![AgentPixel MCP connector](https://glama.ai/mcp/connectors/io.agentpixel/agentpixel/badges/score.svg)](https://glama.ai/mcp/connectors/io.agentpixel/agentpixel)
  🔓 - Most visitors never fill out a form. Turn the ones who say yes into contacts your agent reads.

- [AI Monk Index](https://aniccaai.com/ai-monk-database) `https://aniccaai.com/.netlify/functions/ai-monk-mcp`
  [![AI Monk Index MCP connector](https://glama.ai/mcp/connectors/io.github.Daisuke134/ai-monk-index/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Daisuke134/ai-monk-index)
  🔓 - Research AI monk creator accounts: sourced profiles, video formats, offers and published playbooks.

- [App-Kit](https://app-kit.dev/mcp) `https://mcp.app-kit.dev/mcp`
  [![App-Kit MCP connector](https://glama.ai/mcp/connectors/io.github.app-kit-dev/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.app-kit-dev/mcp)
  🔓 - SEO audit with 400 checks, text readability and grammar check, image conversion and PDF to images; free, no sign-up.

- [AppTrack Ninja](https://apptrack.ninja/tools/mcp) `https://mcp.apptrack.ninja`
  [![AppTrack Ninja MCP connector](https://glama.ai/mcp/connectors/ninja.apptrack.api/app-track-ninja/badges/score.svg)](https://glama.ai/mcp/connectors/ninja.apptrack.api/app-track-ninja)
  🔐 - App Store and Google Play data: apps, charts, keyword ranks, version history, ads and icon redesign effects.

- [ask10ais](https://ask10ais.com) `https://ask10ais.com/api/mcp`
  [![ask10ais MCP connector](https://glama.ai/mcp/connectors/com.ask10ais/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.ask10ais/mcp)
  🔓 - Read-only rankings and mention rates showing how 12 AI models answer brand questions in Chinese and English.

- [AskWatch Google Search Console MCP](https://askwatch.ai/free-tools/google-search-console-mcp) `https://mcp.askwatch.ai/gsc`
  [![AskWatch Google Search Console MCP connector](https://glama.ai/mcp/connectors/ai.askwatch/gsc/badges/score.svg)](https://glama.ai/mcp/connectors/ai.askwatch/gsc)
  🔓 - Read-only Google Search Console: traffic changes, CTR gaps, cannibalization, URL inspection; tools need a free account.

- [BacklinkMCP](https://backlinkmcp.com/mcp-server-for-seo) `https://backlinkmcp.com/api/mcp`
  [![BacklinkMCP MCP connector](https://glama.ai/mcp/connectors/io.github.johnsmalls22-rgb/backlinkmcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.johnsmalls22-rgb/backlinkmcp-server)
  🔓 - Domain authority, top linking domains, link-gap prospects and AI-answer visibility checks from a domain-level index.

- [Ballast](https://ballast.to) `https://ballast.to/api/mcp`
  [![Ballast MCP connector](https://glama.ai/mcp/connectors/to.ballast/ballast-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/to.ballast/ballast-mcp)
  🔐 - Cold email outreach: manage sequences, lead lists, mailbox warmup, and unified inbox replies.

- [BanProof](https://banproof.io) `https://banproof.io/mcp`
  [![BanProof MCP connector](https://glama.ai/mcp/connectors/io.banproof/ban-proof-ai/badges/score.svg)](https://glama.ai/mcp/connectors/io.banproof/ban-proof-ai)
  🔓 - Check TikTok Shop and Amazon affiliate video scripts for policy violations and draft ban appeal letters.
- [Best AI Search Agency AEO Report](https://aeoengine.ai) `https://aeoengine.ai/mcp`
  [![Best AI Search Agency AEO Report MCP connector](https://glama.ai/mcp/connectors/ai.aeoengine/best-ai-search-agency-aeo-report/badges/score.svg)](https://glama.ai/mcp/connectors/ai.aeoengine/best-ai-search-agency-aeo-report)
  🔓 - Free AEO visibility report MCP — run AI search audits for any domain.
- [BizIntel](https://mcp-bizintel-production.up.railway.app) `https://mcp-bizintel-production.up.railway.app/mcp`
  [![BizIntel MCP connector](https://glama.ai/mcp/connectors/io.github.bch1212/bizintel/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bch1212/bizintel)
  🔓 - Audit websites, detect tech stacks, and find and score local businesses without a website.
- [Blawgy](https://blawgy.com/mcp) `https://app.blawgy.com/mcp`
  [![Blawgy MCP connector](https://glama.ai/mcp/connectors/com.blawgy/blawgy/badges/score.svg)](https://glama.ai/mcp/connectors/com.blawgy/blawgy)
  🔐 - Keyword research, plus writing and publishing SEO blog posts to WordPress, Shopify, Webflow and more.
- [CallAI SEO](https://callaiapi.com/en/integrations/seo-mcp) `https://api.callaiapi.com/mcp`
  [![CallAI SEO MCP connector](https://glama.ai/mcp/connectors/com.callaiapi/seo/badges/score.svg)](https://glama.ai/mcp/connectors/com.callaiapi/seo)
  🔓 - Live Google/Bing SERP, keyword difficulty, backlinks and domain checks, plus free site checks; tools need an API key.

- [CalmSEO](https://calmseo.com) `https://mcp.calmseo.com/mcp`
  [![CalmSEO MCP connector](https://glama.ai/mcp/connectors/com.calmseo/seo-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.calmseo/seo-mcp)
  🔐 - Free Google Search Console analytics plus credit-based SERP, keyword, and page audit tools.
- [Camberstack](https://camberstack.io) `https://camberstack.io/mcp`
  [![Camberstack MCP connector](https://glama.ai/mcp/connectors/io.camberstack/google-ads/badges/score.svg)](https://glama.ai/mcp/connectors/io.camberstack/google-ads)
  🔐 - Google Ads: checks conversion tracking, finds wasted spend, and applies only the changes you approve, with undo.
- [Caybl](https://caybl.ai) `https://api.caybl.ai/mcp`
  [![Caybl MCP connector](https://glama.ai/mcp/connectors/ai.caybl/caybl/badges/score.svg)](https://glama.ai/mcp/connectors/ai.caybl/caybl)
  🔐 - Query GA4, Google Ads and Search Console: reports, funnels, search terms, keyword ideas and URL inspection.
- [ChimpanSEO](https://chimpanseo.app) `https://chimpanseo.app/api/mcp`
  [![ChimpanSEO MCP connector](https://glama.ai/mcp/connectors/app.chimpanseo/chimpanseo/badges/score.svg)](https://glama.ai/mcp/connectors/app.chimpanseo/chimpanseo)
  🔓 - Generate, schedule and publish GEO/AEO-optimized articles to WordPress; tools need an account.
- [Citant.ai AI Crawler Access Check](https://check.citant.ai/) `https://check.citant.ai/mcp`
  [![Citant.ai AI Crawler Access Check MCP connector](https://glama.ai/mcp/connectors/io.github.hamzawamiqhq/ai-crawler-check/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hamzawamiqhq/ai-crawler-check)
  🔓 - Check whether ChatGPT, Claude, Perplexity and other AI crawlers can access and read a website; free, read-only.

- [Cite42](https://www.cite42.dev) `https://mcp.cite42.dev`
  [![Cite42 MCP connector](https://glama.ai/mcp/connectors/dev.cite42/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.cite42/mcp)
  🔐 - Check whether ChatGPT, Claude, Perplexity and Gemini mention your brand and what they cite; keyword and trend data.
- [CitedBy](https://citedby.eu/mcp-server) `https://citedby.eu/mcp`
  [![CitedBy MCP connector](https://glama.ai/mcp/connectors/eu.citedby/citedby/badges/score.svg)](https://glama.ai/mcp/connectors/eu.citedby/citedby)
  🔓 - Check a page, AI-crawler access in robots.txt, llms.txt and a domain's backlinks; read-only, no account.

- [CiteLadder](https://citeladder.com) `https://api.citeladder.com/mcp`
  [![CiteLadder MCP connector](https://glama.ai/mcp/connectors/com.citeladder/citeladder/badges/score.svg)](https://glama.ai/mcp/connectors/com.citeladder/citeladder)
  🔐 - Track how ChatGPT, Gemini and Claude answer buyer questions, which brands they name and sources cited.
- [CommunityMentions](https://communitymentions.com) `https://communitymentions.com/api/mcp`
  [![CommunityMentions MCP connector](https://glama.ai/mcp/connectors/com.communitymentions/communitymentions/badges/score.svg)](https://glama.ai/mcp/connectors/com.communitymentions/communitymentions)
  🔓 - Which subreddits AI answers cite for a product or niche, with each subreddit's most-cited threads. Read-only.
- [ConferenceGrid](https://conferencegrid.com/mcp) `https://conferencegrid.com/api/mcp`
  [![ConferenceGrid MCP connector](https://glama.ai/mcp/connectors/com.conferencegrid/conferencegrid/badges/score.svg)](https://glama.ai/mcp/connectors/com.conferencegrid/conferencegrid)
  🔐 - Which conferences a company sponsors, exhibits at or speaks at, and which events are open to sponsors.
- [Convertlyft](https://convertlyft.com/developers) `https://mcp.convertlyft.com/mcp`
  [![Convertlyft MCP connector](https://glama.ai/mcp/connectors/com.convertlyft/convertlyft/badges/score.svg)](https://glama.ai/mcp/connectors/com.convertlyft/convertlyft)
  🔓 - Web analytics that names the fix: funnels, replays, errors, speed and SEO. Free SEO scan; account tools use OAuth.
- [CRAFT Content](https://tools.gtmhelix.com/connectors/) `https://craft-content.gtmhelix.com/mcp`
  [![CRAFT Content MCP connector](https://glama.ai/mcp/connectors/io.github.shashwatgtm/craft-content-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.shashwatgtm/craft-content-mcp)
  🔓 - Eight B2B content tools: case studies, newsletters, webinars, repurposing and thought leadership.
- [CreatorsJet](https://www.creatorsjet.com/mcp) `https://api.creatorsjet.com/mcp`
  [![CreatorsJet MCP connector](https://glama.ai/mcp/connectors/com.creatorsjet/creatorsjet/badges/score.svg)](https://glama.ai/mcp/connectors/com.creatorsjet/creatorsjet)
  🔐 - Creator media kits, link-in-bio pages, deal requests, analytics, agency rosters and sponsor brand search.

- [Distribution](https://distribution.tech) `https://app.distribution.tech/api/mcp/guest`
  [![Distribution MCP connector](https://glama.ai/mcp/connectors/tech.distribution/distribution/badges/score.svg)](https://glama.ai/mcp/connectors/tech.distribution/distribution)
  🔓 - Launch distribution on X: creators on sale by audience and the all in price range per post, no account needed.

- [GrowSurf](https://docs.growsurf.com/build-with-ai) `https://mcp.growsurf.com`
  [![GrowSurf MCP connector](https://glama.ai/mcp/connectors/com.growsurf/growsurf/badges/score.svg)](https://glama.ai/mcp/connectors/com.growsurf/growsurf)
  🔐 - Build and manage GrowSurf referral and affiliate programs through AI assistants.

- [hrva.cc](https://app.hrva.cc) `https://hrva.cc/mcp`
  [![hrva.cc MCP connector](https://glama.ai/mcp/connectors/cc.hrva/url-shortener/badges/score.svg)](https://glama.ai/mcp/connectors/cc.hrva/url-shortener)
  🔐 - Create and list short links and read their click statistics, with safety checks on every link.

- [InsightfulPipe](https://insightfulpipe.com) `https://main.insightfulmcp.com/`
  [![InsightfulPipe MCP connector](https://glama.ai/mcp/connectors/com.insightfulmcp.main/insightful-pipe/badges/score.svg)](https://glama.ai/mcp/connectors/com.insightfulmcp.main/insightful-pipe)
  🔐 - Google Ads, Meta Ads, GA4, LinkedIn, TikTok and 45 more marketing platforms, with each action switched per account.

- [Keyword Research API](https://apify.com/gaelasao/keyword-research-api) `https://mcp.apify.com/?tools=gaelasao/keyword-research-api`
  [![Keyword Research API MCP connector](https://glama.ai/mcp/connectors/io.github.gaelasao/keyword-research-api/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.gaelasao/keyword-research-api)
  🔐 - Google search volume, CPC, difficulty and intent in every country, keyword ideas, and the keywords any domain ranks for.

- [Promvia AI](https://promvia.app) `https://promvia.app/api/mcp`
  [![Promvia AI MCP connector](https://glama.ai/mcp/connectors/app.promvia/promvia/badges/score.svg)](https://glama.ai/mcp/connectors/app.promvia/promvia)
  🔐 - Whether ChatGPT, Claude, Gemini, Perplexity and Google AI name your brand and what they cite; needs a paid plan.

- [pSEO Engine](https://quantumcx.net/pseo-engine) `https://pseo.quantumcx.net/api/agent/mcp`
  [![pSEO Engine MCP connector](https://glama.ai/mcp/connectors/net.quantumcx/pseo-engine/badges/score.svg)](https://glama.ai/mcp/connectors/net.quantumcx/pseo-engine)
  🔓 - Programmatic SEO: research, generate, audit and publish landing pages at scale; reads are free.

- [d8a.tech](https://d8a.tech) `https://app.d8a.tech/mcp`
  [![d8a.tech MCP connector](https://glama.ai/mcp/connectors/tech.d8a.app/d8atech/badges/score.svg)](https://glama.ai/mcp/connectors/tech.d8a.app/d8atech)
  🔐 - Web analytics from your GA4 tracking: traffic, sources, conversions, funnels, user paths and tracking audits.
- [DABLOCK AI Visibility Index](https://dablock.ai) `https://dablock.ai/mcp`
  [![DABLOCK MCP connector](https://glama.ai/mcp/connectors/ai.dablock/visibility-index/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dablock/visibility-index)
  🔓 - Weekly share of answer for 24 crypto and Web3 brands in ChatGPT, Perplexity and Gemini.
- [DABYTE AI Visibility Index](https://dabyte.ai) `https://dabyte.ai/mcp`
  [![DABYTE MCP connector](https://glama.ai/mcp/connectors/ai.dabyte/visibility-index/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dabyte/visibility-index)
  🔓 - Weekly share of answer for 20 SaaS and AI brands in ChatGPT, Perplexity and Gemini.
- [DashThis](https://dashthis.com) `https://mcp.dashthis.com`
  [![DashThis MCP connector](https://glama.ai/mcp/connectors/com.dashthis/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.dashthis/mcp)
  🔐 - Work with your marketing reporting dashboards and turn the numbers into client-ready updates.
- [Deeplead](https://www.deeplead.io) `https://www.deeplead.io/api/mcp`
  [![Deeplead MCP connector](https://glama.ai/mcp/connectors/io.deeplead/deeplead/badges/score.svg)](https://glama.ai/mcp/connectors/io.deeplead/deeplead)
  🔓 - Search local businesses, companies and people, and find their decision makers with verified emails and phone numbers.
- [DripRaven](https://dripraven.com) `https://app.dripraven.com/mcp`
  [![DripRaven MCP connector](https://glama.ai/mcp/connectors/com.dripraven/dripraven/badges/score.svg)](https://glama.ai/mcp/connectors/com.dripraven/dripraven)
  🔐 - WhatsApp Business campaigns: import and segment contacts, schedule broadcasts and track delivery.
- [ExtensionDash](https://extensiondash.com/) `https://extensiondash.com/mcp`
  [![ExtensionDash MCP connector](https://glama.ai/mcp/connectors/io.github.tonic20/extensions-dashboard/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.tonic20/extensions-dashboard)
  🔓 - Research Chrome and Firefox extension catalogs as a guest; OAuth unlocks your listing and keyword tracking.
- [fnlowl](https://fnlowl.com) `https://api.fnlowl.com/v1/mcp`
  [![fnlowl MCP connector](https://glama.ai/mcp/connectors/com.fnlowl/fnlowl/badges/score.svg)](https://glama.ai/mcp/connectors/com.fnlowl/fnlowl)
  🔓 - Manage website widgets, leads, email sequences and analytics; discovery is open, tool calls need a sign-in.
- [Formgong](https://formgong.com) `https://formgong.com/mcp`
  [![Formgong MCP connector](https://glama.ai/mcp/connectors/com.formgong/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.formgong/mcp)
  🔓 - Create contact forms and get HTML/React/Next.js snippets; discovery is open, every tool call needs a sign-in.
- [Formquote](https://pcba-quote-lab.pages.dev/en/) `https://formquote-mcp.chen-yu-d1.workers.dev/mcp`
  [![Formquote MCP connector](https://glama.ai/mcp/connectors/io.github.Keith-CY/formquote-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Keith-CY/formquote-mcp)
  🔓 - Compare email verification credit prices, sound-effect licences and font licences from a live public catalogue.
- [FoxForm](https://foxform.app) `https://mcp.foxform.app/mcp`
  [![FoxForm MCP connector](https://glama.ai/mcp/connectors/app.foxform.mcp/fox-form/badges/score.svg)](https://glama.ai/mcp/connectors/app.foxform.mcp/fox-form)
  🔓 - Build scored forms, quizzes and calculators, publish them, and read responses with per-screen analytics.
- [GEO Audit](https://geo-al6bxcngia-ue.a.run.app) `https://geo-al6bxcngia-ue.a.run.app/mcp`
  [![GEO Audit MCP connector](https://glama.ai/mcp/connectors/app.run.a.geo-al6bxcngia-ue/geo-audit/badges/score.svg)](https://glama.ai/mcp/connectors/app.run.a.geo-al6bxcngia-ue/geo-audit)
  🔓 - Scores any URL's AI-search visibility across 20 weighted checks, with fixes; $1.50/call via x402 plus a free lite tier.
- [GetAppNiche](https://getappniche.com/mcp) `https://api.getappniche.com/mcp`
  [![GetAppNiche MCP connector](https://glama.ai/mcp/connectors/com.getappniche/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.getappniche/mcp)
  🔓 - App Store and Google Play data: app search, revenue and download estimates, keywords, reviews; API key for calls.
- [GingerLive](https://gingerlive.io) `https://mcp.gingerlive.io/mcp`
  [![GingerLive MCP connector](https://glama.ai/mcp/connectors/io.gingerlive/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.gingerlive/mcp)
  🔓 - Livestream ad formats, network reach stats, campaign case studies and streamer program.
- [GoodLeads](https://goodleads.club) `https://mcp.goodleads.club/mcp`
  [![GoodLeads MCP connector](https://glama.ai/mcp/connectors/club.goodleads/new-business-owner-contacts/badges/score.svg)](https://glama.ai/mcp/connectors/club.goodleads/new-business-owner-contacts)
  🔓 - Reach the owner of a newly formed business the morning after the state posts it, from the state's own filing.
- [GSC Magic](https://gscmagic.com) `https://mcp.gscmagic.com/mcp`
  [![GSC Magic MCP connector](https://glama.ai/mcp/connectors/com.gscmagic/gsc-magic/badges/score.svg)](https://glama.ai/mcp/connectors/com.gscmagic/gsc-magic)
  🔐 - Search Console, Bing, GA4, IndexNow and Core Web Vitals with SEO reports: quick wins, drops, decay, index health.
- [gtm.help](https://gtm.help) `https://gtm.help/mcp`
  [![gtm.help MCP connector](https://glama.ai/mcp/connectors/help.gtm/gtm-help/badges/score.svg)](https://glama.ai/mcp/connectors/help.gtm/gtm-help)
  🔓 - Turn a website into ranked growth plays, find Reddit, LinkedIn and X threads to answer, and track shipped work.
- [HarborRank](https://harborrank.com/features/mcp) `https://app.harborrank.com/mcp`
  [![HarborRank MCP connector](https://glama.ai/mcp/connectors/com.harborrank/harborrank/badges/score.svg)](https://glama.ai/mcp/connectors/com.harborrank/harborrank)
  🔐 - Keyword metrics, live Google SERPs, backlinks, rank tracking, site audits and read-only Search Console data.
- [HolicAudit website checks](https://audit.huutran.dev/mcp-server) `https://audit.huutran.dev/mcp`
  [![HolicAudit website checks MCP connector](https://glama.ai/mcp/connectors/dev.huutran.audit/website-checks/badges/score.svg)](https://glama.ai/mcp/connectors/dev.huutran.audit/website-checks)
  🔓 - Free SEO, AI-crawler visibility and security-header checks for any URL, no sign-up; a paid key adds site crawls.
- [Hermoso](https://hermoso.ai) `https://app.hermoso.ai/mcp`
  [![Hermoso MCP connector](https://glama.ai/mcp/connectors/io.github.hermoso-ai/hermoso/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hermoso-ai/hermoso)
  🔓 - Research competitor ads, generate image and video ads, schedule social posts and run paid ad campaigns.

- [Honeyfield Marketing MCP](https://marketing-mcp.honeyfield.at) `https://mcp.ads.honeyfield.at/mcp`
  [![Honeyfield Marketing MCP MCP connector](https://glama.ai/mcp/connectors/at.honeyfield/marketing-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/at.honeyfield/marketing-mcp)
  🔐 - Google Ads, GA4, Search Console, Meta and LinkedIn Ads for agencies, one workspace per client, writes after approval.

- [How It Spread](https://howitspread.com/mcp) `https://howitspread.com/api/mcp`
  [![How It Spread MCP connector](https://glama.ai/mcp/connectors/com.howitspread/howitspread/badges/score.svg)](https://glama.ai/mcp/connectors/com.howitspread/howitspread)
  🔓 - Viral marketing precedents with dated, sourced spread timelines and a Spread Score. No sign-in.

- [iMario](https://imario.ai) `https://mcp.imario.ai/mcp`
  [![iMario MCP connector](https://glama.ai/mcp/connectors/ai.imario/imario/badges/score.svg)](https://glama.ai/mcp/connectors/ai.imario/imario)
  🔐 - Ask synthetic audiences built from real people how they react to copy, pages, prices and images.

- [IndustryLens](https://industry-lens.com) `https://api.industry-lens.com/mcp/public`
  [![IndustryLens MCP connector](https://glama.ai/mcp/connectors/com.industry-lens/mcp-public/badges/score.svg)](https://glama.ai/mcp/connectors/com.industry-lens/mcp-public)
  🔓 - Competitive intelligence on B2B SaaS markets: competitor profiles, strategic moves, pricing changes and reports.
  
- [Jepto](https://www.jepto.com/integration/mcp) `https://mcp.jepto.com`
  [![Jepto MCP connector](https://glama.ai/mcp/connectors/com.jepto/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.jepto/mcp)
  🔐 - Query live Google Ads, GA4, Search Console, Meta Ads and Google Business Profile data, and manage KPIs and budgets.

- [Kliqo AI](https://kliqo.ai/docs/ai-apps) `https://kliqo.ai/mcp`
  [![Kliqo AI MCP connector](https://glama.ai/mcp/connectors/ai.kliqo/ai-visibility/badges/score.svg)](https://glama.ai/mcp/connectors/ai.kliqo/ai-visibility)
  🔓 - Free AI crawler and page checks, then see if ChatGPT and Google AI name you or your competitors.

- [Layrcake](https://layrcake.dev) `https://mcp.layrcake.dev/mcp`
  [![Layrcake MCP connector](https://glama.ai/mcp/connectors/dev.layrcake.mcp/layrcake/badges/score.svg)](https://glama.ai/mcp/connectors/dev.layrcake.mcp/layrcake)
  🔐 - Find leads, enrich them to verified emails, detect intent and launch human-approved campaigns.

- [Leal](https://www.getleal.com/mcp) `https://mcp.getleal.com/mcp`
  [![Leal MCP connector](https://glama.ai/mcp/connectors/com.getleal/leal/badges/score.svg)](https://glama.ai/mcp/connectors/com.getleal/leal)
  🔓 - Design Apple and Google Wallet loyalty stamp cards for shops; sign in with OAuth to save cards, rewards and posters.

- [Lekta](https://lekta.dev) `https://lekta.dev/mcp`
  [![Lekta MCP connector](https://glama.ai/mcp/connectors/dev.lekta/lektadev/badges/score.svg)](https://glama.ai/mcp/connectors/dev.lekta/lektadev)
  🔓 - Audit a site's visibility in AI answer engines (AEO/GEO).
- [Limurse](https://limurse.ai/developers/mcp) `https://api.limurse.ai/mcp`
  [![Limurse MCP connector](https://glama.ai/mcp/connectors/ai.limurse/limurse/badges/score.svg)](https://glama.ai/mcp/connectors/ai.limurse/limurse)
  🔐 - Find bookable creators, benchmark market rates and draft campaign briefs; read-only, booking happens on Limurse.
- [LinkBunny Placement Checker](https://getlinkbunny.com/tools/backlink-placement-checker?ref=awesome-remote-mcp) `https://mcp.getlinkbunny.com/mcp`
  [![LinkBunny Placement Checker MCP connector](https://glama.ai/mcp/connectors/com.getlinkbunny/placement-checker/badges/score.svg)](https://glama.ai/mcp/connectors/com.getlinkbunny/placement-checker)
  🔓 - Checks whether a public page links to an expected URL and reports the anchor, rel attributes and canonical.
- [LinkGPT](https://www.linkgpt.app) `https://www.linkgpt.app/mcp`
  [![LinkGPT MCP connector](https://glama.ai/mcp/connectors/app.linkgpt/linkgpt/badges/score.svg)](https://glama.ai/mcp/connectors/app.linkgpt/linkgpt)
  🔑 - SEO and AI search visibility: Search Console data, keyword research, AI visibility audits and fixes.
- [LocationLists](https://locationlists.com) `https://locationlists.com/mcp`
  [![LocationLists MCP connector](https://glama.ai/mcp/connectors/io.github.kylehawke-stack/locationlists/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.kylehawke-stack/locationlists)
  🔓 - Search 725 US business-location datasets (dealers, contractors, chains), preview real rows, and buy CSVs.
- [LogoKit](https://logokit.com) `https://mcp.logokit.com/mcp`
  [![LogoKit MCP connector](https://glama.ai/mcp/connectors/com.logokit/brand-data/badges/score.svg)](https://glama.ai/mcp/connectors/com.logokit/brand-data)
  🔑 - Company logos, brand colors, and firmographic data by domain.
- [Loomaly](https://loomaly.com) `https://loomaly.com/mcp`
  [![Loomaly MCP connector](https://glama.ai/mcp/connectors/com.loomaly/loomaly/badges/score.svg)](https://glama.ai/mcp/connectors/com.loomaly/loomaly)
  🔐 - SEO audit of every page: a ranked fix list, a fix prompt for your framework, and a re-check once the fix is live.
- [Mador](https://mador.ai) `https://mador.ai/api/mcp`
  [![Mador MCP connector](https://glama.ai/mcp/connectors/ai.mador/mador/badges/score.svg)](https://glama.ai/mcp/connectors/ai.mador/mador)
  🔐 - Read-only access to a Mador account: how often AI assistants name a business, and who else they name.
- [Mailcoach](https://mailcoach.app) `https://mcp.mailcoach.app`
  🔐 - Read subscribers, campaigns, stats and email logs; create drafts and templates, and send test emails.
- [MailSenpai](https://www.mailsenpai.com) `https://mcp.mailsenpai.com/mcp`
  [![MailSenpai MCP connector](https://glama.ai/mcp/connectors/com.mailsenpai/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.mailsenpai/mcp)
  🔐 - Manage email marketing lists, subscribers, segments, templates, campaigns and stats (EU-hosted).
- [Mailzzy](https://mailzzy.com) `https://api.mailzzy.com/crm/mcp/`
  [![Mailzzy MCP connector](https://glama.ai/mcp/connectors/com.mailzzy/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.mailzzy/mcp)
  🔐 - Build audiences, draft and send email campaigns, manage contacts, segments and templates, and read campaign reports.
- [Manifold MCP](https://www.manifoldmcp.com) `https://mcp.manifoldmcp.com/mcp`
  [![Manifold MCP connector](https://glama.ai/mcp/connectors/com.manifoldmcp/manifold/badges/score.svg)](https://glama.ai/mcp/connectors/com.manifoldmcp/manifold)
  🔐 - Hosted marketing data with no API keys of your own, pay per call: SEO, AI search, Reddit, social, ads and work emails.
- [Maqui Analytics](https://somosmaqui.com/) `https://app.somosmaqui.com/api/mcp`
  [![Maqui Analytics MCP connector](https://glama.ai/mcp/connectors/io.github.luis-fuentes/maqui/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.luis-fuentes/maqui)
  🔐 - Read-only marketing analytics for client accounts, with a public synthetic demo via approved OAuth clients.
- [Mencoro](https://mencoro.com) `https://api.mencoro.com/mcp`
  [![Mencoro MCP connector](https://glama.ai/mcp/connectors/com.mencoro/mencoro/badges/score.svg)](https://glama.ai/mcp/connectors/com.mencoro/mencoro)
  🔐 - Track brand rank, mentions, sentiment and Share of Voice in ChatGPT, Perplexity and Google AI answers.
- [MentionAgent](https://mentionagent.ai/mcp/) `https://mentionagent.ai/mcp`
  [![MentionAgent MCP connector](https://glama.ai/mcp/connectors/ai.mentionagent/mentionagent/badges/score.svg)](https://glama.ai/mcp/connectors/ai.mentionagent/mentionagent)
  🔐 - Link building outreach from your agent: review drafts, approve the batch, answer publisher replies, record placements.
- [Mimiq](https://www.mimiqai.com) `https://mcp.mimiqai.com/mcp`
  [![Mimiq MCP connector](https://glama.ai/mcp/connectors/io.github.victorgulchenko/mimiq-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.victorgulchenko/mimiq-mcp)
  🔓 - Test landing pages, copy and sign-up flows on simulated customers who say why they would stay or leave.
- [Miraqo](https://miraqo.io) `https://app.miraqo.io/mcp`
  [![Miraqo MCP connector](https://glama.ai/mcp/connectors/io.github.deleteweb/seo/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.deleteweb/seo)
  🔐 - Rankings, audits, backlinks, Search Console and AI visibility for your Miraqo SEO projects.
- [Nitrosend](https://nitrosend.com) `https://api.nitrosend.com/mcp`
  [![Nitrosend MCP connector](https://glama.ai/mcp/connectors/com.nitrosend/nitrosend/badges/score.svg)](https://glama.ai/mcp/connectors/com.nitrosend/nitrosend)
  🔐 - Draft campaigns and flows, manage audiences, send tests, and inspect results in your Nitrosend account.
- [nowyourlink](https://nowyourlink.com) `https://nowyourlink.com/mcp`
  [![nowyourlink MCP connector](https://glama.ai/mcp/connectors/io.github.ArneFfm/nowyourlink/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.ArneFfm/nowyourlink)
  🔓 - Read the current daily homepage Spotlight ad and browse the archive of settled auction days.
- [NumberBroom](https://numberbroom.com/mcp-server) `https://numberbroom.com/mcp`
  [![NumberBroom MCP connector](https://glama.ai/mcp/connectors/io.github.cameron-creations/numberbroom-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.cameron-creations/numberbroom-mcp)
  🔓 - Check a US phone's line type, carrier and TCPA litigator status before dialing; tools need a prepaid key.
- [Nuqti](https://nuqti.com/mcp) `https://nuqti.com/api/public/mcp`
  [![Nuqti MCP connector](https://glama.ai/mcp/connectors/com.nuqti/nuqti-ahrefs-alternative-seo-data/badges/score.svg)](https://glama.ai/mcp/connectors/com.nuqti/nuqti-ahrefs-alternative-seo-data)
  🔓 - SEO data: domain overview, backlinks, referring domains, link history, keyword ideas and on-page checks.
- [OnPage.dev](https://onpage.dev/mcp) `https://onpage.dev/mcp`
  [![OnPage.dev MCP connector](https://glama.ai/mcp/connectors/dev.onpage/onpage/badges/score.svg)](https://glama.ai/mcp/connectors/dev.onpage/onpage)
  🔓 - Free SEO and AI-visibility audits: scores, fixes, schema, robots.txt, redirects and 25-page site audits, no account.
- [PageLens](https://pagelens.io/docs/api) `https://app.pagelens.io/mcp`
  [![PageLens MCP connector](https://glama.ai/mcp/connectors/io.pagelens/pagelens/badges/score.svg)](https://glama.ai/mcp/connectors/io.pagelens/pagelens)
  🔓 - Web analytics for your site and which AI crawlers and assistants read it; tool calls need an API key.
- [Pageree](https://pageree.com) `https://mcp.pageree.com/`
  [![Pageree MCP connector](https://glama.ai/mcp/connectors/com.pageree/landing-pages/badges/score.svg)](https://glama.ai/mcp/connectors/com.pageree/landing-pages)
  🔐 - Publish landing pages from your assistant with a working lead form, then improve them from per-section visitor data.
- [Peak Answer](https://peakanswer.com) `https://peakanswer.com/api/mcp`
  [![Peak Answer MCP connector](https://glama.ai/mcp/connectors/com.peakanswer/peak-answer/badges/score.svg)](https://glama.ai/mcp/connectors/com.peakanswer/peak-answer)
  🔐 - Whether AI search recommends your brand, which buying questions competitors win, and the technical faults stopping engines reading you.
- [Pineprompt](https://pineprompt.com) `https://pineprompt.com/mcp`
  [![Pineprompt MCP connector](https://glama.ai/mcp/connectors/com.pineprompt/pineprompt/badges/score.svg)](https://glama.ai/mcp/connectors/com.pineprompt/pineprompt)
  🔐 - Track how ChatGPT, Gemini, Perplexity, Claude and Google AI answers mention your brand, sources and competitors.
- [PixelFlow](https://pixelflow.so/features/mcp?source=awesome_remote) `https://api.pixelflow.so/mcp`
  [![PixelFlow MCP connector](https://glama.ai/mcp/connectors/so.pixelflow/pixelflow/badges/score.svg)](https://glama.ai/mcp/connectors/so.pixelflow/pixelflow)
  🔐 - Server-side conversion tracking for Meta, TikTok, etc. Set up tracking and ask about events.
- [Plainrouter Sandbox](https://plainrouter.com/docs/mcp/setup) `https://plainrouter.com/mcp/sandbox`
  [![Plainrouter Sandbox MCP connector](https://glama.ai/mcp/connectors/com.plainrouter/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.plainrouter/mcp)
  🔓 - Test Meta advertising account, signal-health, and performance tools with synthetic data.
- [Postbox Services Email Tools](https://postboxservices.com/mcp/) `https://mcp.postboxservices.com/mcp`
  [![Postbox Services MCP connector](https://glama.ai/mcp/connectors/com.postboxservices/postbox-tools/badges/score.svg)](https://glama.ai/mcp/connectors/com.postboxservices/postbox-tools)
  🔓 - Live email checks: 24 blacklists, spoofing/BEC grade, URL redirect tracing, full email spam tests, domain age and WHOIS.
- [Proxy](https://useproxy.dev) `https://mcp.useproxy.dev/mcp`
  [![Proxy MCP connector](https://glama.ai/mcp/connectors/dev.useproxy/proxy/badges/score.svg)](https://glama.ai/mcp/connectors/dev.useproxy/proxy)
  🔐 - Search Meta, Google, LinkedIn and TikTok ad libraries for competitor ads, creatives and transcripts.
- [QQQ AI Visibility Checker](https://qqq.ee/en/mcp-server/) `https://qqq.ee/mcp`
  [![QQQ AI Visibility Checker MCP connector](https://glama.ai/mcp/connectors/ee.qqq/ai-visibility/badges/score.svg)](https://glama.ai/mcp/connectors/ee.qqq/ai-visibility)
  🔓 - Free AI visibility check: AI crawler access, AI search readiness and brand citations in ChatGPT, Gemini, Perplexity.
- [qrcode.io QR codes](https://agent.qrcode.io/) `https://agent.qrcode.io/mcp`
  [![qrcode.io QR codes MCP connector](https://glama.ai/mcp/connectors/io.qrcode/qr-codes/badges/score.svg)](https://glama.ai/mcp/connectors/io.qrcode/qr-codes)
  🔓 - Create free static QR codes as PNG or SVG for links, WiFi, contact cards and text; no account, never expire.
- [QRFLOW.codes](https://qrflow.codes) `https://qrflow.codes/mcp`
  [![QRFLOW.codes MCP connector](https://glama.ai/mcp/connectors/codes.qrflow/qrflow/badges/score.svg)](https://glama.ai/mcp/connectors/codes.qrflow/qrflow)
  🔐 - Create QR codes, re-point printed dynamic codes, name links on your own domain, and read scan analytics.
- [Quelta](https://quelta.ai/mcp-server/) `https://quelta.ai/mcp`
  [![Quelta MCP connector](https://glama.ai/mcp/connectors/ai.quelta/quelta/badges/score.svg)](https://glama.ai/mcp/connectors/ai.quelta/quelta)
  🔐 - Score short vertical video ads by link: first 3 seconds, issues with timecodes and fixes.
- [Ranklogs](https://ranklogs.com/mcp) `https://mcp.ranklogs.com/mcp`
  [![Ranklogs MCP connector](https://glama.ai/mcp/connectors/com.ranklogs/ranklogs/badges/score.svg)](https://glama.ai/mcp/connectors/com.ranklogs/ranklogs)
  🔐 - Rank tracking, site audits, backlinks, keyword research and AI search visibility for your sites, in plain English.
- [RankRoot](https://getrankroot.com) `https://getrankroot.com/api/mcp`
  [![RankRoot MCP connector](https://glama.ai/mcp/connectors/io.github.zachhhhh/rankroot/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.zachhhhh/rankroot)
  🔓 - Score a site’s visibility to ChatGPT, Perplexity and AI agents, and generate llms.txt, robots.txt and JSON-LD fixes.
- [Ranla](https://ranla.ai) `https://mcp.ranla.ai/mcp`
  [![Ranla MCP connector](https://glama.ai/mcp/connectors/ai.ranla/ranla/badges/score.svg)](https://glama.ai/mcp/connectors/ai.ranla/ranla)
  🔐 - AI growth engineer for software businesses: ships SEO pages, gets you into AI answers, replies on Reddit, sends email.
- [Reach MCP](https://www.reachmcp.com) `https://app.reachmcp.com/mcp`
  [![Reach MCP connector](https://glama.ai/mcp/connectors/com.reachmcp/linkedin/badges/score.svg)](https://glama.ai/mcp/connectors/com.reachmcp/linkedin)
  🔐 - Operate a LinkedIn account: inbox, invitations, Sales Navigator search, posts; enforced daily quotas, webhooks.
- [Recala](https://recala.co/developers/agents/) `https://recala-production.up.railway.app/mcp`
  [![Recala MCP connector](https://glama.ai/mcp/connectors/io.github.annamau/recala/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.annamau/recala)
  🔐 - Manage articles, topics and search visibility with human-approved publishing.
- [RedirX](https://redirx.dev) `https://redirx-mcp-server.onrender.com/mcp`
  [![RedirX MCP connector](https://glama.ai/mcp/connectors/dev.redirx/redirx/badges/score.svg)](https://glama.ai/mcp/connectors/dev.redirx/redirx)
  🔓 - Map old site URLs to new ones during a migration, review proposals and export approved redirects; calls need sign-in.
- [RedReplier](https://redreplier.com) `https://mcp.redreplier.com/mcp`
  [![RedReplier MCP connector](https://glama.ai/mcp/connectors/com.redreplier/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.redreplier/mcp-server)
  🔐 - Find Reddit, Hacker News, X and Bluesky posts mentioning your product, scored as leads.
- [ReputeMap](https://reputemap.com/mcp) `https://api.reputemap.com/mcp`
  [![ReputeMap MCP connector](https://glama.ai/mcp/connectors/com.reputemap/reputemap/badges/score.svg)](https://glama.ai/mcp/connectors/com.reputemap/reputemap)
  🔓 - Read Google reviews and stats, draft AI replies, publish the ones you approve, request reviews.
- [Revnu](https://revnu.com/mcp) `https://revnu.com/api/mcp`
  [![Revnu MCP connector](https://glama.ai/mcp/connectors/com.revnu/revnu/badges/score.svg)](https://glama.ai/mcp/connectors/com.revnu/revnu)
  🔐 - Review growth work, browse leads and results, message your growth agent, and schedule workflows.
- [Revup](https://revup.com/docs/mcp/) `https://revup.com/mcp`
  [![Revup MCP connector](https://glama.ai/mcp/connectors/com.revup/revup/badges/score.svg)](https://glama.ai/mcp/connectors/com.revup/revup)
  🔐 - Create, customize, preview and report on sweepstakes, contests, forms, surveys, quizzes and other promotions.
- [RoboDebut](https://robodebut.com) `https://robodebut.com/api/mcp`
  [![RoboDebut MCP connector](https://glama.ai/mcp/connectors/com.robodebut/submissions/badges/score.svg)](https://glama.ai/mcp/connectors/com.robodebut/submissions)
  🔓 - Submit projects for manual review; homepage badge and private email required; built by LinkBunny's founder.
- [Rumoro](https://rumoro.dev/) `https://mcp.rumoro.dev/mcp`
  [![Rumoro MCP connector](https://glama.ai/mcp/connectors/dev.rumoro/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.rumoro/mcp)
  🔓 - Track brand, competitor and topic mentions across 16 sources, scored for relevance and intent; tools need sign-in.
- [SaaSCity](https://saascity.io/mcp) `https://saascity.io/api/mcp`
  [![SaaSCity MCP connector](https://glama.ai/mcp/connectors/io.saascity/saascity/badges/score.svg)](https://glama.ai/mcp/connectors/io.saascity/saascity)
  🔓 - Audit a homepage before launch, pick launch directories by DR, link type and price, and list on SaaSCity.
- [Say It Again](https://sayitagain.ai/docs/api) `https://app.sayitagain.ai/mcp`
  [![Say It Again MCP connector](https://glama.ai/mcp/connectors/ai.sayitagain/sayitagain/badges/score.svg)](https://glama.ai/mcp/connectors/ai.sayitagain/sayitagain)
  🔐 - Read a store's product page, write 3 scripts and make an AI UGC video with a generated presenter.
- [Scribe Mail](https://www.scribe-mail.com/mcp) `https://mcp.scribe-mail.com/mcp`
  [![Scribe Mail MCP connector](https://glama.ai/mcp/connectors/com.scribe-mail/scribe/badges/score.svg)](https://glama.ai/mcp/connectors/com.scribe-mail/scribe)
  🔐 - Manage company email signatures: author and publish templates, assign teammates, run banner campaigns, read analytics.
- [Search Scope AI Visibility Auditor](https://mcp.searchscope.com.au/) `https://mcp.searchscope.com.au/mcp`
  [![Search Scope AI Visibility Auditor MCP connector](https://glama.ai/mcp/connectors/au.com.searchscope/ai-visibility-auditor/badges/score.svg)](https://glama.ai/mcp/connectors/au.com.searchscope/ai-visibility-auditor)
  🔓 - Free AI search visibility audit for any public website: entities, retrievability, schema gaps and prompts to track.
- [SearcherLite](https://searcherlite.com) `https://searcherlite.com/api/mcp`
  [![SearcherLite MCP connector](https://glama.ai/mcp/connectors/com.searcherlite/searcherlite/badges/score.svg)](https://glama.ai/mcp/connectors/com.searcherlite/searcherlite)
  🔐 - Google keyword, domain, backlink and AI-visibility data, paid per lookup in credits with no subscription.
- [Searcherries](https://searcherries.com) `https://app.searcherries.com/mcp/searcherries`
  [![Searcherries MCP connector](https://glama.ai/mcp/connectors/com.searcherries/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.searcherries/mcp)
  🔐 - Read-only AI visibility and SEO data: AI answers, competitors, citations, GSC, Bing, GA4.
- [Segwise](https://segwise.ai/integration-docs/mcp) `https://mcp.segwise.ai/mcp`
  [![Segwise MCP connector](https://glama.ai/mcp/connectors/ai.segwise.mcp/segwise/badges/score.svg)](https://glama.ai/mcp/connectors/ai.segwise.mcp/segwise)
  🔐 - Read-only creative performance, tag-level insights, attribution data, and competitor ad analysis from Segwise.
- [SEO Expert: Digital Darts](https://www.digitaldarts.com.au/shopify-seo-expert-digital-darts-app/mcp) `https://seo.digitaldarts.com.au/mcp`
  [![SEO Expert: Digital Darts MCP connector](https://glama.ai/mcp/connectors/au.com.digitaldarts/seo-expert/badges/score.svg)](https://glama.ai/mcp/connectors/au.com.digitaldarts/seo-expert)
  🔐 - Audit a Shopify store's SEO and fix meta tags, alt text, structured data and broken links from chat.
- [seodata.dev](https://www.seodata.dev/mcp) `https://mcp.seodata.dev/mcp`
  [![seodata.dev MCP connector](https://glama.ai/mcp/connectors/dev.seodata/keywords/badges/score.svg)](https://glama.ai/mcp/connectors/dev.seodata/keywords)
  🔓 - Google search volume, CPC, competition and similar keywords for 50+ countries.
- [SEO·AEO·GEO](https://seoaeogeo.app/agents) `https://seoaeogeo.app/mcp`
  [![SEO·AEO·GEO MCP connector](https://glama.ai/mcp/connectors/app.seoaeogeo/seo-aeo-geo/badges/score.svg)](https://glama.ai/mcp/connectors/app.seoaeogeo/seo-aeo-geo)
  🔓 - Audit a URL for SEO, AEO and GEO: AI crawler access, schema and extractability, with ranked code fixes; free preview.
- [SERVIQO Agents](https://agents.serviqo.co/join.md) `https://agents.serviqo.co/mcp`
  [![SERVIQO Agents MCP connector](https://glama.ai/mcp/connectors/io.github.jdsleek/distributionos/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jdsleek/distributionos)
  🔓 - Agents register as Founding Agents and get tracked share links and public reach stats; pilot, no payments.
- [Shipfound](https://www.shipfound.co/) `https://api.shipfound.co/mcp`
  [![Shipfound MCP connector](https://glama.ai/mcp/connectors/co.shipfound.api/shipfound/badges/score.svg)](https://glama.ai/mcp/connectors/co.shipfound.api/shipfound)
  🔐 - Site fixes, content briefs, indexing, AI crawler tracking and AI visibility checks for Claude Code and Codex.
- [Shortimize](https://www.shortimize.com) `https://api.shortimize.com/mcp`
  [![Shortimize MCP connector](https://glama.ai/mcp/connectors/com.shortimize/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.shortimize/mcp)
  🔓 - Track TikTok, Instagram Reels and YouTube Shorts accounts and videos: views, growth and analytics.
- [Signal by StackEnhance](https://stackenhance.com/signal) `https://mcp.stackenhance.com/mcp`
  [![Signal by StackEnhance MCP connector](https://glama.ai/mcp/connectors/com.stackenhance/signal/badges/score.svg)](https://glama.ai/mcp/connectors/com.stackenhance/signal)
  🔓 - How often Nordic and German e-commerce brands send marketing email: send counts, dates and the most active senders.
- [Soundlink](https://www.getsoundlink.com/docs/mcp-server) `https://api.getsoundlink.com/mcp`
  [![Soundlink MCP connector](https://glama.ai/mcp/connectors/com.getsoundlink.api/soundlink-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.getsoundlink.api/soundlink-mcp-server)
  🔐 - Read-only Meta-to-Spotify attribution, cost per listener, campaign comparisons, and returning-listener analytics.
- [Spytrend](https://spytrend.com/mcp/?utm_source=awesome-remote-mcp&utm_medium=directory&utm_campaign=mcp-launch) `https://mcp.spytrend.com/mcp`
  [![Spytrend MCP connector](https://glama.ai/mcp/connectors/com.spytrend/spytrend/badges/score.svg)](https://glama.ai/mcp/connectors/com.spytrend/spytrend)
  🔐 - Search Meta and TikTok ads, find the advertisers behind them, and rank what is scaling.
- [StarTap Directory Search](https://startap.cc/) `https://startap.cc/mcp`
  [![StarTap Directory Search MCP connector](https://glama.ai/mcp/connectors/cc.startap/star-tap-directory-search/badges/score.svg)](https://glama.ai/mcp/connectors/cc.startap/star-tap-directory-search)
  🔓 - Find free startup submission directories by category, badge requirements, review wait and Ahrefs Domain Rating.

- [Statable](https://statable.com) `https://mcp.statable.com/mcp`
  [![Statable MCP connector](https://glama.ai/mcp/connectors/com.statable/analytics/badges/score.svg)](https://glama.ai/mcp/connectors/com.statable/analytics)
  🔐 - Cookieless, EU-hosted web analytics: visitors, pages, sources, countries, goals, funnels and live traffic.
- [stillindexed](https://stillindexed.com/mcp) `https://api.stillindexed.com/mcp`
  [![stillindexed MCP connector](https://glama.ai/mcp/connectors/com.stillindexed/seo-checkers/badges/score.svg)](https://glama.ai/mcp/connectors/com.stillindexed/seo-checkers)
  🔓 - Indexability, robots.txt, sitemap, TLS, domain-expiry and AI-crawler checks for any URL; no account.
- [SubmitMyStartup](https://submitmystartup.com/) `https://submitmystartup.com/mcp`
  [![SubmitMyStartup MCP connector](https://glama.ai/mcp/connectors/com.submitmystartup/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.submitmystartup/mcp)
  🔓 - Searches a free list of startup directories and launch sites with real submission results.
- [Subtraq](https://subtraq.co) `https://subtraq.co/api/mcp`
  [![Subtraq MCP connector](https://glama.ai/mcp/connectors/co.subtraq/subtraq/badges/score.svg)](https://glama.ai/mcp/connectors/co.subtraq/subtraq)
  🔓 - Create short links, track clicks and attribute sales to the placement that brought them; tools need a key.
- [Superdraft](https://app.superdraft.ai/api/mcp/docs) `https://app.superdraft.ai/api/mcp`
  [![Superdraft MCP connector](https://glama.ai/mcp/connectors/io.github.Superdraft-Technologies/superdraft/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Superdraft-Technologies/superdraft)
  🔓 - Create and read public email and Instagram campaign drafts from a business website.
- [Superflow Free Tools](https://usesuperflow.ai/tools) `https://usesuperflow.ai/api/mcp`
  [![Superflow Free Tools MCP connector](https://glama.ai/mcp/connectors/ai.usesuperflow/tools/badges/score.svg)](https://glama.ai/mcp/connectors/ai.usesuperflow/tools)
  🔓 - Free website QA and AI-visibility checks: AI crawlability, robots.txt, llms.txt, JSON-LD and social previews.
- [Supermetrics](https://mcp.supermetrics.com) `https://mcp.supermetrics.com/mcp`
  [![Supermetrics MCP connector](https://glama.ai/mcp/connectors/com.supermetrics/supermetrics/badges/score.svg)](https://glama.ai/mcp/connectors/com.supermetrics/supermetrics)
  🔐 - Query Google Ads, Meta, GA4, TikTok, HubSpot and more for reports, and edit existing ad campaigns or launch new ones.
- [SurfacedBy AI Visibility & GEO Audit](https://surfacedby.com/tools/chatgpt-ai-visibility) `https://api.surfacedby.com/api/v1/mcp/public/`
  [![SurfacedBy AI Visibility & GEO Audit MCP connector](https://glama.ai/mcp/connectors/com.surfacedby/ai-visibility/badges/score.svg)](https://glama.ai/mcp/connectors/com.surfacedby/ai-visibility)
  🔓 - Free AI visibility and GEO audit: see what AI reads on your site and whether its answers cite you.
- [Syl Guardian](https://sylai.io/guardian) `https://guardian.sylai.io/mcp`
  [![Syl Guardian MCP connector – tool definition quality and endpoint health on Glama](https://glama.ai/mcp/connectors/io.sylai/guardian/badges/score.svg)](https://glama.ai/mcp/connectors/io.sylai/guardian)
  🔓 - Check that an AI agent's claimed effect is causal before it acts. Free API key needed for tool calls.

- [SyncSignature Email Signatures](https://syncsignature.com/mcp/) `https://mcp.syncsignature.com/mcp`
  [![SyncSignature Email Signatures MCP connector](https://glama.ai/mcp/connectors/com.syncsignature/email-signatures/badges/score.svg)](https://glama.ai/mcp/connectors/com.syncsignature/email-signatures)
  🔐 - Manage team email signatures: teammates, groups, templates, banner campaigns and click analytics.

- [The Profound Agency](https://theprofound.agency/mcp/) `https://theprofound.agency/api/mcp/`
  [![The Profound Agency MCP connector](https://glama.ai/mcp/connectors/agency.theprofound/the-profound-agency/badges/score.svg)](https://glama.ai/mcp/connectors/agency.theprofound/the-profound-agency)
  🔓 - Search, price, and order press placements across 1,600+ publications; free AI-visibility audits.

- [TheQRCode.io](https://theqrcode.io/mcp) `https://mcp.theqrcode.io/mcp`
  [![TheQRCode.io MCP connector](https://glama.ai/mcp/connectors/io.theqrcode/qr-code-generator/badges/score.svg)](https://glama.ai/mcp/connectors/io.theqrcode/qr-code-generator)
  🔓 - Generate QR codes, list saved codes, and read scan analytics by time, device and approximate location.
- [Tracetify](https://tracetify.com/mcp) `https://tracetify.com/api/mcp`
  [![Tracetify MCP connector](https://glama.ai/mcp/connectors/io.github.tracetify/tracetify-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.tracetify/tracetify-mcp)
  🔓 - Find competitors, trace how they grew from dated public sources, and see their ads; tools need an account.
- [twelvebit](https://twelvebit.app/mcp) `https://twelvebit.app/api/mcp`
  [![twelvebit MCP connector](https://glama.ai/mcp/connectors/app.twelvebit/analytics/badges/score.svg)](https://glama.ai/mcp/connectors/app.twelvebit/analytics)
  🔐 - Web and revenue analytics: traffic, goals, funnels, visitor journeys and revenue by source.
- [UGCfy AI](https://ugcfy.ai/mcp) `https://ugcfy.ai/api/mcp`
  [![UGCfy AI MCP connector](https://glama.ai/mcp/connectors/ai.ugcfy/ugcfy-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.ugcfy/ugcfy-mcp)
  🔓 - Break down a TikTok or Reels ad and rewrite it for your product, plus UGC hooks, scripts and CPM.
- [TubeText Ad Intelligence](https://apify.com/tubetext/meta-ad-library-videos) `https://mcp.apify.com/?tools=fetch-actor-details,tubetext/meta-ad-library-videos,tubetext/video-ad-analyzer,tubetext/shot-by-shot-video-analysis`
  [![TubeText Ad Intelligence MCP connector](https://glama.ai/mcp/connectors/io.github.LMSlay/tubetext-ad-intelligence/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.LMSlay/tubetext-ad-intelligence)
  🔐 - A brand's Facebook/Instagram ads from Meta Ad Library, plus AI teardowns of Meta and YouTube video ads.
- [Vaneform](https://vaneform.com/docs/api) `https://vaneform.com/mcp`
  [![Vaneform MCP connector](https://glama.ai/mcp/connectors/io.github.jiangqizheng/vaneform-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.jiangqizheng/vaneform-mcp)
  🔓 - Free website traffic lookups: monthly visits, sources, countries and domain compares.
- [VertoDigital](https://vertodigital.com) `https://mcp.vertodigital.com/mcp`
  [![VertoDigital MCP Server MCP connector](https://glama.ai/mcp/connectors/com.vertodigital/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.vertodigital/mcp)
  🔓 - B2B pipeline marketing agency: match challenges to services, search case studies, read pages, send enquiries.
- [Vibe Prospecting](https://vibeprospecting.ai) `https://vibeprospecting.explorium.ai/mcp`
  🔐 - Search companies and contacts, enrich lead lists, and research B2B business signals.
- [VNCNT Labs SEO & Search Data](https://vncntlabs.com) `https://mcp.apify.com/?tools=vncntlabs/keyword-search-volume,vncntlabs/keyword-ideas,vncntlabs/domain-seo-data,vncntlabs/google-trends-search-volume,vncntlabs/ai-search-visibility-tracker,vncntlabs/google-maps-rank-tracker,vncntlabs/google-ads-transparency,vncntlabs/google-news-scraper`
  [![VNCNT Labs SEO & Search Data MCP connector](https://glama.ai/mcp/connectors/io.github.PravinrajV/vncntlabs-seo/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.PravinrajV/vncntlabs-seo)
  🔐 - Keyword volume and ideas, domain SEO, Trends volume, AI visibility, Maps geo-grid rank, Google ads and news.
- [Wall Marketing](https://www.wall.marketing/developers) `https://www.wall.marketing/mcp`
  [![Wall Marketing MCP connector](https://glama.ai/mcp/connectors/marketing.wall/platform/badges/score.svg)](https://glama.ai/mcp/connectors/marketing.wall/platform)
  🔐 - Book ad screens in bars, cafés and hostels with proof of display, or earn commission signing venues up as an ambassador.
- [WebAsk](https://webask.io/) `https://mcp.webask.io/mcp/v1`
  [![WebAsk MCP connector](https://glama.ai/mcp/connectors/io.webask.mcp/web-ask-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.webask.mcp/web-ask-mcp)
  🔑 - Create surveys and quizzes, manage responses, and generate reports from AI assistants.
- [Wrendex](https://wrendex.com) `https://app.wrendex.com/mcp`
  [![Wrendex MCP connector](https://glama.ai/mcp/connectors/com.wrendex.app/wrendex/badges/score.svg)](https://glama.ai/mcp/connectors/com.wrendex.app/wrendex)
  🔓 - Technical SEO audits: crawl a site with 140+ checks and read the fix list; tool calls take a free Wrendex token.

- [wordradar](https://www.wordradar.dev) `https://www.wordradar.dev/mcp`
  [![wordradar MCP connector](https://glama.ai/mcp/connectors/io.github.lian-yang/wordradar/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.lian-yang/wordradar)
  🔓 - Live keyword radar: first-seen dates on a million-word suggest ledger, HN launch tracking and SERP difficulty scores.
- [Zebu Data - Customer Reviews](https://apify.com/delicious_zebu) `https://mcp.apify.com/?tools=delicious_zebu/google-maps-store-review-scraper,delicious_zebu/yelp-reviews-scraper,delicious_zebu/tripadvisor-review-collector,delicious_zebu/ebay-product-reviews-scraper-with-advanced-filters,delicious_zebu/naver-shopping-reviews-scraper,delicious_zebu/coupang-reviews-scraper`
  [![Zebu Data - Customer Reviews MCP connector](https://glama.ai/mcp/connectors/io.github.zebudata/customer-reviews/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.zebudata/customer-reviews)
  🔐 - Reviews from Google Maps, Yelp, TripAdvisor, eBay, Naver and Coupang, with ratings and dates.

### 📊 <a name="monitoring"></a>Monitoring

- [APIzone](https://apizone.io) `https://apizone.io/api/mcp`
  🔓 - Check whether any of 294 third-party APIs is down, with uptime history and recent outages.
- [Baromio](https://baromio.io/en/ai-agents) `https://baromio.io/mcp`
  [![Baromio MCP connector](https://glama.ai/mcp/connectors/io.baromio/baromio/badges/score.svg)](https://glama.ai/mcp/connectors/io.baromio/baromio)
  🔐 - Read uptime, incidents, SSL, domain expiry and Core Web Vitals; create, edit and pause monitors on paid plans.
- [Cloudflare Observability](https://developers.cloudflare.com) `https://observability.mcp.cloudflare.com/mcp`
  🔐 - Query Workers logs, analytics, and error events.
- [Codex Reset](https://codex-reset.com/developers) `https://codex-reset.com/mcp`
  [![Codex Reset MCP connector](https://glama.ai/mcp/connectors/com.codex-reset/codex-reset/badges/score.svg)](https://glama.ai/mcp/connectors/com.codex-reset/codex-reset)
  🔓 - Codex usage-limit reset odds for the next 24/48h, past resets and Codex service status.
- [ConnectorReport](https://connectorreport.com/mcp) `https://connectorreport.com/api/mcp`
  [![ConnectorReport MCP connector](https://glama.ai/mcp/connectors/com.connectorreport/connectorreport/badges/score.svg)](https://glama.ai/mcp/connectors/com.connectorreport/connectorreport)
  🔓 - Dated, hands-on test results for remote MCP servers: pass rate, sign-in method, gotchas and fix recipes.
- [EventSend](https://eventsend.io) `https://eventsend.io/mcp`
  [![EventSend MCP connector](https://glama.ai/mcp/connectors/io.eventsend/eventsend/badges/score.svg)](https://glama.ai/mcp/connectors/io.eventsend/eventsend)
  🔐 - Query your product's event history, delivery health and plan usage, e.g. what failed in checkout today.
- [OpenUptime](https://openuptime.app/docs/mcp) `https://openuptime.app/api/mcp`
  [![OpenUptime MCP connector](https://glama.ai/mcp/connectors/app.openuptime/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.openuptime/mcp)
  🔐 - Manage uptime monitors, incidents and public status pages.
- [Oh Dear](https://ohdear.app) `https://ohdear.app/mcp`
  [![Oh Dear MCP connector](https://glama.ai/mcp/connectors/app.ohdear/ohdear/badges/score.svg)](https://glama.ai/mcp/connectors/app.ohdear/ohdear)
  🔐 - Check uptime, SSL certificates, broken links, DNS, cron jobs and status pages for your Oh Dear sites.
- [Everframe](https://everframe.dev) `https://everframe.dev/mcp`
  [![Everframe MCP connector](https://glama.ai/mcp/connectors/dev.everframe/everframe/badges/score.svg)](https://glama.ai/mcp/connectors/dev.everframe/everframe)
  🔐 - Read in-app bug reports, crashes and tickets with screenshots, console, network and device context.
- [exit1.dev](https://exit1.dev/mcp) `https://app.exit1.dev/mcp/v1`
  [![exit1.dev MCP connector](https://glama.ai/mcp/connectors/dev.exit1/exit1-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.exit1/exit1-mcp)
  🔐 - Create, edit and pause uptime monitors, read uptime stats and check history, and set email and webhook alerts.
- [Expiry Watch](https://boringutils.com/expiry-watch#mcp) `https://boringutils.com/api/mcp`
  [![Expiry Watch MCP connector](https://glama.ai/mcp/connectors/io.github.hal-boring-utils/expiry-watch/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.hal-boring-utils/expiry-watch)
  🔓 - Check a public domain's TLS certificate, chain and registration expiry without an account or API key.
- [Fixter](https://fixter.dev) `https://mcp.fixter.dev/mcp`
  [![Fixter MCP connector](https://glama.ai/mcp/connectors/dev.fixter.mcp/fixter/badges/score.svg)](https://glama.ai/mcp/connectors/dev.fixter.mcp/fixter)
  🔐 - Query production logs, traces, metrics and error issues, get the root cause, and open a fix as a pull request.
- [FlareWarden](https://flarewarden.com/mcp) `https://mcp.flarewarden.com/mcp`
  [![FlareWarden MCP connector](https://glama.ai/mcp/connectors/com.flarewarden/website-monitoring/badges/score.svg)](https://glama.ai/mcp/connectors/com.flarewarden/website-monitoring)
  🔓 - Check if a site or service like Stripe is down from six regions, no account; sign in to set up uptime monitoring.
- [Flowsery](https://flowsery.com) `https://mcp.flowsery.com/mcp`
  [![Flowsery MCP connector](https://glama.ai/mcp/connectors/com.flowsery/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.flowsery/mcp-server)
  🔐 - Web analytics, revenue attribution, visitor profiles and AI-found bugs from session recordings.
- [Grafana](https://grafana.com) `https://mcp.grafana.com/mcp`
  [![Grafana MCP connector](https://glama.ai/mcp/connectors/io.github.grafana/mcp-grafana/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.grafana/mcp-grafana)
  🔐 - Query Grafana dashboards, datasources, and alerts.
- [Hoot Lens](https://hootlens.com) `https://mcp.hootlens.com/mcp`
  [![Hoot Lens MCP connector](https://glama.ai/mcp/connectors/com.hootlens/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.hootlens/mcp)
  🔐 - Session replay and click heatmaps for agents: timed visit narratives, repeated or dead clicks, errors and change impact.
- [HTTPStatus](https://httpstatus.com/mcp/) `https://mcp.httpstatus.com/mcp`
  [![HTTPStatus MCP connector](https://glama.ai/mcp/connectors/com.httpstatus/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.httpstatus/mcp-server)
  🔐 - Create API mocks and run tests, security checks, automation workflows, and uptime monitors.
- [is it DNS?](https://isitdns.net) `https://isitdns.net/mcp`
  [![is it DNS? MCP connector](https://glama.ai/mcp/connectors/net.isitdns/isitdns/badges/score.svg)](https://glama.ai/mcp/connectors/net.isitdns/isitdns)
  🔓 - Dig any public resolver, audit or sweep a domain, walk a delegation, read the live resolver board; no key.
- [Lowdown](https://lowdown-proxy.vercel.app) `https://lowdown-proxy.vercel.app/mcp`
  [![Lowdown MCP connector](https://glama.ai/mcp/connectors/io.github.PetShopBros/lowdown-proxy/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.PetShopBros/lowdown-proxy)
  🔓 - Dated facts about public MCP servers: daily connectivity checks, tool definition changes, Registry and package status.
- [MCPulse](https://getmcpulse.com) `https://api.getmcpulse.com/mcp`
  [![MCPulse MCP connector](https://glama.ai/mcp/connectors/com.getmcpulse.api/mcpulse/badges/score.svg)](https://glama.ai/mcp/connectors/com.getmcpulse.api/mcpulse)
  🔐 - Query your own MCP server's tool calls, first-call success, retries, empty results, and schema cost.
- [measuremy.site](https://measuremy.site) `https://a.measuremy.site/mcp`
  [![measuremy.site MCP connector](https://glama.ai/mcp/connectors/site.measuremy/analytics/badges/score.svg)](https://glama.ai/mcp/connectors/site.measuremy/analytics)
  🔐 - Cookieless web analytics your AI agent can read: visits, sources, pages, funnels, traffic spikes and tracked links.
- [Ned Watch](https://ned.watch) `https://api.ned.watch/mcp`
  [![Ned Watch MCP connector](https://glama.ai/mcp/connectors/watch.ned/ned-watch/badges/score.svg)](https://glama.ai/mcp/connectors/watch.ned/ned-watch)
  🔓 - Know when your agent silently stops: deadman, overrun, HTTP, TLS and content watches; the first call issues a key.
- [nimo](https://heynimo.com) `https://api.heynimo.com/try-mcp`
  [![nimo MCP connector](https://glama.ai/mcp/connectors/com.heynimo.api/nimo/badges/score.svg)](https://glama.ai/mcp/connectors/com.heynimo.api/nimo)
  🔓 - Check public pages' speed and Core Web Vitals and get the next fix without an account; paid plans add uptime alerts.
- [NotWorking](https://notworking.io) `https://notworking.io/mcp`
  [![NotWorking MCP connector](https://glama.ai/mcp/connectors/io.notworking/notworking/badges/score.svg)](https://glama.ai/mcp/connectors/io.notworking/notworking)
  🔓 - Check if other agents report a site, skill or MCP server failing, see its other access paths, and report failures.
- [Pulse](https://pulse.allthepossibles.com) `https://pulse.allthepossibles.com/mcp`
  [![Pulse MCP connector](https://glama.ai/mcp/connectors/com.allthepossibles/pulse/badges/score.svg)](https://glama.ai/mcp/connectors/com.allthepossibles/pulse)
  🔓 - Real Core Web Vitals from the Chrome UX Report for any URL, with a pass or fail verdict.
- [Pulse Analytics](https://pulse.ciphera.net) `https://pulse-api.ciphera.net/mcp`
  [![Pulse Analytics MCP connector](https://glama.ai/mcp/connectors/net.ciphera/pulse-analytics/badges/score.svg)](https://glama.ai/mcp/connectors/net.ciphera/pulse-analytics)
  🔐 - Read your Pulse Analytics web stats: visitors, top pages, sources, countries, campaigns and live visitors.
- [Opservo](https://getopservo.com/docs/mcp) `https://api.getopservo.com/mcp`
  [![Opservo MCP connector](https://glama.ai/mcp/connectors/com.getopservo/opservo/badges/score.svg)](https://glama.ai/mcp/connectors/com.getopservo/opservo)
  🔐 - Ask why Linux servers and Kubernetes clusters are slow or failing: health, issues, logs, incident timelines. Read-only.
- [RealUptime](https://docs.realuptime.io/mcp) `https://mcp.realuptime.io/public`
  [![RealUptime MCP connector](https://glama.ai/mcp/connectors/io.realuptime/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.realuptime/mcp)
  🔓 - Check whether a popular service is down, from multi-region probe readings beside the vendor's own status.
- [Relvato](https://www.relvato.com/developers) `https://app.relvato.com/api/mcp`
  [![Relvato MCP connector](https://glama.ai/mcp/connectors/com.relvato/relvato/badges/score.svg)](https://glama.ai/mcp/connectors/com.relvato/relvato)
  🔓 - Real-browser website monitoring, deepest on WordPress & WooCommerce: run checks, read results; tools need a free key.
- [Rius](https://docs.glassflow.ai/rius/mcp) `https://mcp.eu.console.rius-glassflow.com/mcp`
  [![Rius MCP connector](https://glama.ai/mcp/connectors/ai.glassflow/rius/badges/score.svg)](https://glama.ai/mcp/connectors/ai.glassflow/rius)
  🔐 - Query AI agent traces, errors, cost and alerts, compare agent versions, and manage alert rules.
- [Rootly](https://rootly.com) `https://mcp.rootly.com/mcp`
  🔐 - Manage Rootly incidents, alerts, and on-call schedules.
- [Rudow](https://rudow.ai) `https://mcp.rudow.ai/mcp`
  [![Rudow MCP connector](https://glama.ai/mcp/connectors/ai.rudow.mcp/rudow-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.rudow.mcp/rudow-mcp)
  🔑 - Query your app's logs, metrics and incidents, search logs by meaning, and drill into failing routes.
- [RunVouch](https://runvouch.com) `https://api.runvouch.com/mcp`
  [![RunVouch MCP connector](https://glama.ai/mcp/connectors/com.runvouch/runvouch/badges/score.svg)](https://glama.ai/mcp/connectors/com.runvouch/runvouch)
  🔓 - Find out why an unattended run stalled or failed and read tamper-evident proof; needs a free key.
- [Sentry](https://sentry.io) `https://mcp.sentry.dev/mcp`
  [![Sentry MCP connector](https://glama.ai/mcp/connectors/dev.sentry.mcp/sentry/badges/score.svg)](https://glama.ai/mcp/connectors/dev.sentry.mcp/sentry)
  🔐 - Investigate Sentry issues, events, and releases, and run Seer root-cause analysis.
- [SolidPing](https://www.solidping.io) `https://solidping.io/api/v1/mcp?auth=required`
  [![SolidPing MCP connector](https://glama.ai/mcp/connectors/io.github.fclairamb/solidping/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.fclairamb/solidping)
  🔐 - Create, run and diagnose uptime checks across 40+ types, read incidents, and manage status pages and maintenance.
- [Tá Rodando](https://tarodando.com.br) `https://tarodando.com.br/mcp`
  [![Tá Rodando MCP connector](https://glama.ai/mcp/connectors/br.com.tarodando/ta-rodando/badges/score.svg)](https://glama.ai/mcp/connectors/br.com.tarodando/ta-rodando)
  🔐 - Manage uptime monitors, alert channels and a PT-BR public status page from your agent.
- [Toolweather](https://toolweather.pages.dev) `https://toolweather.toolweather.workers.dev/mcp`
  [![Toolweather MCP connector](https://glama.ai/mcp/connectors/io.github.toolweather/toolweather/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.toolweather/toolweather)
  🔓 - Checks if an MCP server or tool is safe to call now and suggests alternatives. Calls need a free API key.
- [Upstream](https://upstream-api.pages.dev) `https://upstream.toolweather.workers.dev/mcp`
  [![Upstream MCP connector](https://glama.ai/mcp/connectors/io.github.toolweather/upstream/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.toolweather/upstream)
  🔓 - Live status, incidents and model deprecations for ~40 AI and developer APIs, plus a daily digest.
- [Uptimepage](https://uptimepage.dev/mcp-server) `https://mcp.uptimepage.dev/mcp`
  [![Uptimepage MCP connector](https://glama.ai/mcp/connectors/dev.uptimepage/uptimepage/badges/score.svg)](https://glama.ai/mcp/connectors/dev.uptimepage/uptimepage)
  🔓 - Read monitors and incidents, run checks, create monitors and status pages, post incident updates. Calls need OAuth.
- [Visual Sentinel](https://visualsentinel.com/mcp) `https://visualsentinel.com/api/mcp`
  [![Visual Sentinel MCP connector](https://glama.ai/mcp/connectors/com.visualsentinel/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.visualsentinel/mcp-server)
  🔐 - Manage website monitors, incidents, status pages and visual checks; uptime, SSL, DNS and content in one place.
- [Vivere](https://vivere.dev) `https://vivere.dev/mcp`
  [![Vivere MCP connector](https://glama.ai/mcp/connectors/dev.vivere/monitors/badges/score.svg)](https://glama.ai/mcp/connectors/dev.vivere/monitors)
  🔓 - Cron and heartbeat monitoring: create monitors and check in on each run; tools need a key.
- [Zetlyn](https://zetlyn.com) `https://zetlyn.com/mcp`
  [![Zetlyn MCP connector](https://glama.ai/mcp/connectors/com.zetlyn/zetlyn/badges/score.svg)](https://glama.ai/mcp/connectors/com.zetlyn/zetlyn)
  🔐 - Watch a place on a web page or a whole page; get told when it changes or when a price or text condition is met.

### 🎥 <a name="multimedia"></a>Multimedia

- [Anam](https://anam.ai/docs/resources/mcp) `https://lab.anam.ai/mcp`
  [![Anam MCP connector](https://glama.ai/mcp/connectors/ai.anam/anam/badges/score.svg)](https://glama.ai/mcp/connectors/ai.anam/anam)
  🔐 - Build real-time AI avatar personas and videos; manage voices, knowledge, sessions and meetings.
- [Arcmira: YouTube Transcript Search](https://arcmira.com/docs) `https://mcp.arcmira.com/mcp`
  [![Arcmira MCP connector](https://glama.ai/mcp/connectors/io.github.arcmira/arcmira/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.arcmira/arcmira)
  🔐 - Search YouTube transcripts for timestamped quotes, speaker appearances, sponsors and recommendations.
- [Artyfile](https://artyfile.com) `https://artyfile.com/api/mcp`
  [![Artyfile MCP connector](https://glama.ai/mcp/connectors/com.artyfile/music-licensing/badges/score.svg)](https://glama.ai/mcp/connectors/com.artyfile/music-licensing)
  🔓 - Search real recorded music, check licence terms and prepare a one-time sync-licence checkout for a track.
- [AssemblyAI](https://www.assemblyai.com/docs/mcp-server) `https://mcp.assemblyai.com/mcp`
  [![AssemblyAI MCP connector](https://glama.ai/mcp/connectors/com.assemblyai/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.assemblyai/mcp)
  🔐 - Transcribe audio and video with speaker labels and timestamps, then summarize, ask questions and pull out insights.
- [Audexum](https://audexum.com/integrations/mcp) `https://audexum.com/mcp`
  [![Audexum MCP connector](https://glama.ai/mcp/connectors/com.audexum/audexum/badges/score.svg)](https://glama.ai/mcp/connectors/com.audexum/audexum)
  🔐 - Text to speech in 30+ languages as MP3 links, audio transcription, and YouTube transcripts.
- [AvatarSay](https://avatarsay.com/mcp) `https://avatarsay.com/mcp`
  [![AvatarSay MCP connector](https://glama.ai/mcp/connectors/com.avatarsay/avatar-say/badges/score.svg)](https://glama.ai/mcp/connectors/com.avatarsay/avatar-say)
  🔓 - Generate fictional character portraits and lip-synced talking MP4 videos from text in 8 styles and 8 voices.
- [Azurade AI](https://azurade.com/developers/) `https://azurade.com/mcp`
  [![Azurade AI MCP connector](https://glama.ai/mcp/connectors/com.azurade/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.azurade/mcp)
  🔐 - Generate images and videos with Veo 3.1, Seedance 2.5, Nano Banana Pro and 30+ more models; credits never expire.
- [BudgetPixel](https://budgetpixel.com/mcp) `https://mcp.budgetpixel.com/mcp`
  [![BudgetPixel MCP connector](https://glama.ai/mcp/connectors/com.budgetpixel/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.budgetpixel/mcp)
  🔓 - Generate images, video, music and sound effects, then upscale them; the tools need a BudgetPixel sign-in (OAuth).
- [BulkTranscripts](https://bulktranscripts.co) `https://bulktranscripts.co/mcp`
  [![BulkTranscripts MCP connector](https://glama.ai/mcp/connectors/co.bulktranscripts/youtube/badges/score.svg)](https://glama.ai/mcp/connectors/co.bulktranscripts/youtube)
  🔐 - YouTube transcripts for one video, a whole channel or a playlist, plus search and free new-upload tracking.
- [Cardboard](https://www.cardboard.ai/mcp) `https://mcp.cardboard.ai/mcp`
  [![Cardboard MCP connector](https://glama.ai/mcp/connectors/ai.cardboard/cardboard/badges/score.svg)](https://glama.ai/mcp/connectors/ai.cardboard/cardboard)
  🔐 - Edit videos in chat: cut, caption, add titles, music and voiceover, then preview and export.
- [Cast](https://cast.katechon.technology/agents) `https://cast.katechon.technology/mcp`
  [![Cast MCP connector](https://glama.ai/mcp/connectors/technology.katechon/cast/badges/score.svg)](https://glama.ai/mcp/connectors/technology.katechon/cast)
  🔓 - Turn one line into a one-tap link for a short vertical AI character video; first video free.
- [ChatCut](https://chatcut.io) `https://api.chatcut.io/api/external-mcp/mcp`
  [![ChatCut MCP connector](https://glama.ai/mcp/connectors/io.chatcut/chatcut/badges/score.svg)](https://glama.ai/mcp/connectors/io.chatcut/chatcut)
  🔐 - Edit your own videos from chat: cut footage, add captions and motion graphics, and export an editable timeline.
- [CLIPCLIPER](https://clipcliper.com/mcp) `https://clipcliper.com/mcp`
  [![CLIPCLIPER MCP connector](https://glama.ai/mcp/connectors/com.clipcliper/clipcliper/badges/score.svg)](https://glama.ai/mcp/connectors/com.clipcliper/clipcliper)
  🔓 - Timestamped transcripts, chapters and clip ideas from YouTube, Twitch, Kick or TikTok links.
- [ClipFlux](https://clipflux.ai/mcp) `https://mcp.clipflux.ai/mcp`
  [![ClipFlux MCP connector](https://glama.ai/mcp/connectors/ai.clipflux/clipflux/badges/score.svg)](https://glama.ai/mcp/connectors/ai.clipflux/clipflux)
  🔐 - Make faceless YouTube videos and Shorts from chat: script, scenes, voice, captions and posting to YouTube.
- [ClipUGC](https://clipugc.com) `https://clipugc.com/mcp`
  [![ClipUGC MCP connector](https://glama.ai/mcp/connectors/io.github.clipugc/clipugc/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.clipugc/clipugc)
  🔐 - Make UGC videos for mobile apps with AI influencers who keep the same face.
- [CrateWire](https://cratewire.com) `https://cratewire.com/mcp`
  [![CrateWire MCP connector](https://glama.ai/mcp/connectors/com.cratewire/cratewire/badges/score.svg)](https://glama.ai/mcp/connectors/com.cratewire/cratewire)
  🔐 - Find the tracks DJs play in Instagram, TikTok and set links; follow DJs, scan link lists and read your Radar.
- [Cucutime](https://cucutime.org/developers) `https://cucutime.org/mcp`
  [![Cucutime MCP connector](https://glama.ai/mcp/connectors/org.cucutime/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/org.cucutime/mcp)
  🔓 - Kids-song ideas, name song pages and CucuTime YouTube catalog search; an optional key adds AI songs for adult apps.
- [CutClip.one](https://www.cutclip.one) `https://cutclip.one/api/mcp`
  [![CutClip.one MCP connector](https://glama.ai/mcp/connectors/one.cutclip/cutclip/badges/score.svg)](https://glama.ai/mcp/connectors/one.cutclip/cutclip)
  🔓 - AI video editor: plan scenes, cut a multi-track timeline, generate shots and music, render MP4s; tools need a key.
- [CWI Discovery Engine](https://github.com/CumulativeWebInc/cwi-learn) `https://cwi-machine-data.hp-ace.workers.dev/mcp`
  [![CWI Discovery Engine MCP connector](https://glama.ai/mcp/connectors/io.github.CumulativeWebInc/cwi-discovery-engine/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.CumulativeWebInc/cwi-discovery-engine)
  🔓 - Machine-readable catalog of the Cumulative Web Inc label: track search, sync briefs, live Radio 365, playlist pitching.
- [Dora](https://doravideo.com) `https://doravideo.com/mcp`
  [![Dora MCP connector](https://glama.ai/mcp/connectors/io.github.Saga-Labs/dora-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Saga-Labs/dora-mcp)
  🔐 - Generate finished AI videos and images from a prompt or a photo.
- [Eikino](https://eikino.com) `https://eikino.com/mcp`
  [![Eikino MCP connector](https://glama.ai/mcp/connectors/com.eikino/eikino/badges/score.svg)](https://glama.ai/mcp/connectors/com.eikino/eikino)
  🔓 - Geolocate photos or video frames and check media for AI generation signs.
- [eroq](https://eroq.ai/mcp) `https://eroq.ai/mcp`
  [![eroq MCP connector](https://glama.ai/mcp/connectors/ai.eroq/eroq/badges/score.svg)](https://glama.ai/mcp/connectors/ai.eroq/eroq)
  🔐 - Generate videos, images, voices and songs on Seedance, Kling, Veo and eroq's own uncensored engines.
- [Flow Music MCP Server by useapi.net](https://useapi.net/docs/api-flowmusic-v1/mcp) `https://api.useapi.net/v1/flowmusic/mcp`
  [![Flow Music MCP Server by useapi.net MCP connector](https://glama.ai/mcp/connectors/net.useapi/flowmusic/badges/score.svg)](https://glama.ai/mcp/connectors/net.useapi/flowmusic)
  🔐 - Google Flow Music (Lyria 3.5) songs, covers, remixes and stems on your own account. Not affiliated with Google.
- [FXI Studio](https://www.fxi.studio/mcp/info) `https://mcp.fxi.studio/mcp`
  [![FXI Studio MCP connector](https://glama.ai/mcp/connectors/io.github.fueledximagination/fxi-studio/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.fueledximagination/fxi-studio)
  🔐 - Generate cinematic images and video clips and frame-chain shots into continuous motion, billed to your FXI credits.
- [Google Flow Agent MCP Server by useapi.net](https://useapi.net/docs/api-google-flow-v1/mcp) `https://api.useapi.net/v1/google-flow/mcp`
  [![Google Flow Agent MCP Server by useapi.net MCP connector](https://glama.ai/mcp/connectors/net.useapi/google-flow/badges/score.svg)](https://glama.ai/mcp/connectors/net.useapi/google-flow)
  🔐 - Chat with Google Flow Agent: it plans and makes images and videos on your Google AI subscription. Not Google-affiliated.
- [Google Vids MCP Server by useapi.net](https://useapi.net/docs/api-google-vids-v1/mcp) `https://api.useapi.net/v1/google-vids/mcp`
  [![Google Vids MCP Server by useapi.net MCP connector](https://glama.ai/mcp/connectors/net.useapi/google-vids/badges/score.svg)](https://glama.ai/mcp/connectors/net.useapi/google-vids)
  🔐 - Gemini Omni video with sound and voiced avatars in Google Vids on your Google plan. Not affiliated with Google.
- [GrooveSheet](https://www.groovesheet.net/developers) `https://api.groovesheet.net/mcp`
  [![GrooveSheet MCP connector](https://glama.ai/mcp/connectors/net.groovesheet/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/net.groovesheet/mcp)
  🔐 - Find sheet music, tabs and MIDI for songs, and transcribe your own recordings via one-time upload links.
- [GrowingUpVideo](https://growingupvideo.com) `https://growingupvideo.com/mcp`
  [![GrowingUpVideo MCP connector](https://glama.ai/mcp/connectors/com.growingupvideo/growingupvideo/badges/score.svg)](https://glama.ai/mcp/connectors/com.growingupvideo/growingupvideo)
  🔓 - Prices, photo tips and a start link for AI growing-up morph videos made from photos across the years.
- [Image Metadata Inspector](https://metadataremoverai.com) `https://metadataremoverai.com/mcp`
  [![Image Metadata Inspector MCP connector](https://glama.ai/mcp/connectors/com.metadataremoverai/metadata-inspector/badges/score.svg)](https://glama.ai/mcp/connectors/com.metadataremoverai/metadata-inspector)
  🔓 - Read EXIF, GPS, XMP, C2PA and AI-generator metadata from a public image or video URL.
- [Incarn](https://www.incarn.co/developers) `https://api.incarn.co/mcp`
  [![Incarn MCP connector](https://glama.ai/mcp/connectors/co.incarn/photo-animation/badges/score.svg)](https://glama.ai/mcp/connectors/co.incarn/photo-animation)
  🔓 - Animate old family photos and ancestor portraits into short lifelike videos.
- [invideo](https://invideo.io) `https://mcp.invideo.io/mcp`
  🔓 - Generate and edit videos from a prompt.
- [Kelpo](https://kelpo.app) `https://kelpo.app/api/mcp`
  [![Kelpo MCP connector](https://glama.ai/mcp/connectors/app.kelpo/kelpo/badges/score.svg)](https://glama.ai/mcp/connectors/app.kelpo/kelpo)
  🔐 - Create vertical UGC-style videos with AI actors or your own photo and voice, with automatic Shorts-style editing.
- [Kinetune](https://kinetune.com/developers#mcp) `https://kinetune.com/mcp`
  [![Kinetune MCP connector](https://glama.ai/mcp/connectors/com.kinetune/kinetune/badges/score.svg)](https://glama.ai/mcp/connectors/com.kinetune/kinetune)
  🔐 - Word-synced lyric videos (9:16, 16:9, 1:1) and Spotify Canvas loops from your songs, quoted in credits first.
- [Kleo](https://kleooai.com) `https://mcp.kleooai.com/mcp`
  [![Kleo MCP connector](https://glama.ai/mcp/connectors/com.kleooai/kleo/badges/score.svg)](https://glama.ai/mcp/connectors/com.kleooai/kleo)
  🔐 - Narrated 4K 60 fps films from a brief, realistic or animated, with every shot generated.
- [Katto](https://katto.tech) `https://mcp.katto.tech/mcp`
  🔐 - Turn long videos, podcasts and Twitch VODs into scored, captioned, vertical 9:16 clips.
- [Kling AI MCP Server by useapi.net](https://useapi.net/docs/api-kling-v1/mcp) `https://api.useapi.net/v1/kling/mcp`
  [![Kling AI MCP Server by useapi.net MCP connector](https://glama.ai/mcp/connectors/net.useapi/kling/badges/score.svg)](https://glama.ai/mcp/connectors/net.useapi/kling)
  🔐 - Kling 4.0, v3 and Omni video, avatars, lip-sync and images on your own Kling account. Not affiliated with Kuaishou.
- [Klox](https://klox.ai/agent) `https://klox.ai/mcp`
  [![Klox MCP connector](https://glama.ai/mcp/connectors/ai.klox/klox/badges/score.svg)](https://glama.ai/mcp/connectors/ai.klox/klox)
  🔐 - Plan and edit AI videos on canvases: script, storyboard, shots and final cut.
- [Lazybird](https://lazybird.app/chatgpt-claude-connector) `https://api.lazybird.app/mcp`
  [![Lazybird MCP connector](https://glama.ai/mcp/connectors/io.github.lazybirdai/lazybird/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.lazybirdai/lazybird)
  🔐 - Search 500+ AI voices in 150+ languages, turn scripts into MP3 voiceovers, and design or clone voices.
- [Lexu](https://www.lexu.io/en/developers) `https://www.lexu.io/mcp`
  [![Lexu MCP connector](https://glama.ai/mcp/connectors/io.lexu/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.lexu/mcp)
  🔐 - Generate images, videos, music and voice-overs on one credit balance, priced before each job.
- [LiveReacting](https://www.livereacting.com/mcp) `https://mcp.livereacting.com/mcp`
  [![LiveReacting MCP connector](https://glama.ai/mcp/connectors/com.livereacting/livereacting/badges/score.svg)](https://glama.ai/mcp/connectors/com.livereacting/livereacting)
  🔐 - Run 24/7 live streams of pre-recorded videos, or stream a recorded video at a set time to YouTube, Facebook and more.
- [Mage](https://www.mage.space/mcp) `https://mcp.mage.space/mcp`
  [![Mage MCP connector](https://glama.ai/mcp/connectors/space.mage/mage/badges/score.svg)](https://glama.ai/mcp/connectors/space.mage/mage)
  🔐 - Generate images, video, and audio with many frontier models, with the price quoted before each run.
- [MaxVideoAI](https://maxvideoai.com/mcp) `https://api.maxvideoai.com/mcp`
  [![MaxVideoAI MCP connector](https://glama.ai/mcp/connectors/com.maxvideoai/maxvideoai/badges/score.svg)](https://g