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

* transport
  * ⚡ – Streamable HTTP
  * 📡 – SSE (legacy transport, being phased out)
* authentication
  * 🔓 – none, connect anonymously
  * 🔑 – API key or token
  * 🔐 – OAuth
* access
  * 🆓 – no account required
  * 💰 – requires a paid plan

> [!NOTE]
> No access marker means the endpoint comes with a normal account, on a free or paid tier depending on your plan with the provider.

Entries with a [Glama connector](https://glama.ai/mcp/connectors) badge have been independently scored for tool definition quality and endpoint health:

[![Tseha MCP connector](https://glama.ai/mcp/connectors/io.tseha/tseha/badges/score.svg)](https://glama.ai/mcp/connectors/io.tseha/tseha)

## Servers

* 🔗 - [Aggregators](#aggregators)
* 🎨 - [Art & Design](#art--design)
* 🌐 - [Browser Automation](#browser-automation)
* ☁️ - [Cloud Platforms](#cloud-platforms)
* 💬 - [Communication](#communication)
* 📝 - [Content Management](#content-management)
* 👤 - [CRM](#crm)
* 🗄️ - [Databases](#databases)
* 🛠️ - [Developer Tools](#developer-tools)
* 🌳 - [Environment](#environment)
* 📂 - [File Storage](#file-storage)
* 💰 - [Finance](#finance)
* 🧠 - [Knowledge & Memory](#knowledge--memory)
* 🎯 - [Marketing](#marketing)
* 📊 - [Monitoring](#monitoring)
* 🎥 - [Multimedia](#multimedia)
* 💳 - [Payments](#payments)
* 📋 - [Project Management](#project-management)
* 🔎 - [Search & Data Extraction](#search--data-extraction)
* 🔒 - [Security](#security)
* 📣 - [Social Media](#social-media)
* 🎧 - [Support & Service Management](#support--service-management)
* 🚆 - [Travel & Transportation](#travel--transportation)
* 🔄 - [Version Control](#version-control)
* 🏢 - [Workplace & Productivity](#workplace--productivity)
* 🧰 - [Other Tools & Integrations](#other-tools--integrations)

### 🔗 <a name="aggregators"></a>Aggregators

- [Zapier](https://zapier.com) `https://mcp.zapier.com/api/mcp/mcp`
  [![Zapier MCP connector](https://glama.ai/mcp/connectors/com.zapier.mcp/zapier/badges/score.svg)](https://glama.ai/mcp/connectors/com.zapier.mcp/zapier)
  ⚡ 🔐 - Run your Zapier actions across thousands of connected apps as MCP tools.

### 🎨 <a name="art--design"></a>Art & Design

- [Canva](https://canva.com) `https://mcp.canva.com/mcp`
  [![Canva MCP connector](https://glama.ai/mcp/connectors/com.canva.mcp/canva/badges/score.svg)](https://glama.ai/mcp/connectors/com.canva.mcp/canva)
  ⚡ 🔐 - Create, edit, and export Canva designs.
- [Figma](https://figma.com) `https://mcp.figma.com/mcp`
  [![Figma MCP connector](https://glama.ai/mcp/connectors/com.figma.mcp/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.figma.mcp/mcp)
  ⚡ 🔐 - Read Figma files and turn frames and components into code.

### 🌐 <a name="browser-automation"></a>Browser Automation

- [Cloudflare Browser Rendering](https://developers.cloudflare.com/browser-rendering/) `https://browser.mcp.cloudflare.com/mcp`
  ⚡ 🔐 - Render pages, capture screenshots, and scrape HTML from a URL.

### ☁️ <a name="cloud-platforms"></a>Cloud Platforms

- [Cloudflare Bindings](https://developers.cloudflare.com/agents/model-context-protocol/) `https://bindings.mcp.cloudflare.com/mcp`
  ⚡ 🔐 - Build on Workers KV, R2, D1, and other Cloudflare bindings.
- [Heroku](https://heroku.com) `https://mcp.heroku.com/mcp`
  ⚡ 🔐 💰 - Manage Heroku apps, dynos, add-ons, and logs.
- [Netlify](https://netlify.com) `https://netlify-mcp.netlify.app/mcp`
  ⚡ 🔐 - Create, deploy, and manage Netlify sites.
- [Render](https://render.com) `https://mcp.render.com/mcp`
  ⚡ 🔐 - Deploy and inspect Render services, databases, and logs.
- [Vercel](https://vercel.com) `https://mcp.vercel.com`
  [![Vercel MCP connector](https://glama.ai/mcp/connectors/com.vercel/vercel-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.vercel/vercel-mcp)
  ⚡ 🔐 - Manage Vercel projects, deployments, and logs.

### 💬 <a name="communication"></a>Communication

- [Resend](https://resend.com) `https://mcp.resend.com/mcp`
  ⚡ 🔐 - Send transactional email and manage sending domains.

### 📝 <a name="content-management"></a>Content Management

- [Contentful](https://contentful.com) `https://mcp.contentful.com/mcp`
  ⚡ 🔑 - Manage Contentful entries, assets, and content models.
- [dochost](https://dochost.io/mcp) `https://dochost.io/api/mcp`
  [![dochost MCP connector](https://glama.ai/mcp/connectors/io.dochost/dochost/badges/score.svg)](https://glama.ai/mcp/connectors/io.dochost/dochost)
  ⚡ 🔓 - Publish Markdown or HTML as a hosted page and get a shareable link.
- [GoodBarber](https://www.goodbarber.com/mcp/) `https://mcp.goodbarber.dev/mcp/sse`
  [![GoodBarber MCP connector](https://glama.ai/mcp/connectors/dev.goodbarber/goodbarber-public-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.goodbarber/goodbarber-public-mcp)
  ⚡ 🔐 - Manage a GoodBarber no-code app: content, push notifications, shop orders, members, and analytics.
- [Sanity](https://sanity.io) `https://mcp.sanity.io/mcp`
  [![Sanity MCP connector](https://glama.ai/mcp/connectors/io.sanity.www/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.sanity.www/mcp)
  ⚡ 🔐 - Query and mutate Sanity datasets and documents.
- [Storyblok](https://storyblok.com) `https://mcp.storyblok.com/mcp`
  ⚡ 🔓 🆓 - Manage Storyblok spaces, stories, and components.
- [Webflow](https://webflow.com) `https://mcp.webflow.com/mcp`
  [![Webflow MCP connector](https://glama.ai/mcp/connectors/com.webflow/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.webflow/mcp)
  ⚡ 🔐 - Manage Webflow sites, collections, and CMS items.
- [Wix](https://wix.com) `https://mcp.wix.com/mcp`
  [![Wix MCP connector](https://glama.ai/mcp/connectors/com.wix/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.wix/mcp)
  ⚡ 🔐 - Manage Wix sites, business data, and bookings.

### 👤 <a name="crm"></a>CRM

- [Close](https://close.com) `https://mcp.close.com/mcp`
  [![Close MCP connector](https://glama.ai/mcp/connectors/com.close/close-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.close/close-mcp)
  ⚡ 🔐 💰 - Read and update Close leads, contacts, and opportunities.
- [HubSpot](https://hubspot.com) `https://mcp.hubspot.com/anthropic`
  ⚡ 🔐 - Query and update HubSpot CRM contacts, companies, and deals.

### 🗄️ <a name="databases"></a>Databases

- [Convex](https://convex.dev) `https://mcp.convex.dev/mcp`
  ⚡ 🔓 🆓 - Query and manage Convex deployments, tables, and functions.
- [MongoDB](https://mongodb.com) `https://mcp.mongodb.com/mcp`
  ⚡ 🔐 - Query MongoDB Atlas clusters and manage collections and indexes.
- [Neon](https://neon.tech) `https://mcp.neon.tech/mcp`
  ⚡ 🔐 - Provision and query Neon Postgres projects and branches.
- [Prisma](https://prisma.io) `https://mcp.prisma.io/mcp`
  [![Prisma MCP connector](https://glama.ai/mcp/connectors/io.prisma/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.prisma/mcp)
  ⚡ 🔐 - Manage Prisma Postgres databases and run migrations.
- [Supabase](https://supabase.com) `https://mcp.supabase.com/mcp`
  [![Supabase MCP connector](https://glama.ai/mcp/connectors/com.supabase/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.supabase/mcp)
  ⚡ 🔐 - Manage Supabase projects, run SQL, and inspect schemas.

### 🛠️ <a name="developer-tools"></a>Developer Tools

- [Astro Docs](https://astro.build) `https://mcp.docs.astro.build/mcp`
  ⚡ 🔓 🆓 - Search the Astro documentation.
- [Bitrise](https://bitrise.io) `https://mcp.bitrise.io/mcp`
  [![Bitrise MCP connector](https://glama.ai/mcp/connectors/io.github.bitrise-io/bitrise-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.bitrise-io/bitrise-mcp)
  ⚡ 🔐 - Trigger and inspect Bitrise CI builds and artifacts.
- [Cloudflare Docs](https://developers.cloudflare.com) `https://docs.mcp.cloudflare.com/mcp`
  ⚡ 🔓 🆓 - Search the Cloudflare developer documentation.
- [DeepWiki](https://deepwiki.com) `https://mcp.deepwiki.com/mcp`
  ⚡ 🔓 🆓 - Ask questions about any public GitHub repository's generated wiki.
- [Globalping](https://globalping.io) `https://mcp.globalping.dev/mcp`
  ⚡ 🔐 - Run ping, traceroute, DNS, and HTTP checks from a global probe network.
- [OpenRouter](https://openrouter.ai) `https://mcp.openrouter.ai/mcp`
  [![OpenRouter MCP connector](https://glama.ai/mcp/connectors/ai.openrouter.mcp/open-router/badges/score.svg)](https://glama.ai/mcp/connectors/ai.openrouter.mcp/open-router)
  ⚡ 🔐 - Look up OpenRouter model metadata and pricing, and run completions.
- [PartReel](https://partreel.com) `https://mcp.partreel.com/mcp`
  ⚡ 🔓 🆓 - Search and fetch verified KiCad parts (symbol, footprint, 3D model) for AI-assisted PCB design — 21k+ parts, CC-BY-4.0, no account needed.
- [Postman](https://postman.com) `https://mcp.postman.com/mcp`
  ⚡ 🔐 - Work with Postman collections, environments, and APIs.
- [UI Verify](https://uiverify.ai) `https://uiverify.ai/api/mcp`
  [![UI Verify MCP connector](https://glama.ai/mcp/connectors/ai.uiverify/ui-verify/badges/score.svg)](https://glama.ai/mcp/connectors/ai.uiverify/ui-verify)
  ⚡ 🔓 🆓 - Audit a web page for accessibility and layout issues.

### 🌳 <a name="environment"></a>Environment

- [Ambee](https://ambeedata.com) `https://api-mcp-server.ambeedata.com/mcp`
  [![Ambee MCP connector](https://glama.ai/mcp/connectors/com.ambeedata.api-mcp-server/mcp-ambee/badges/score.svg)](https://glama.ai/mcp/connectors/com.ambeedata.api-mcp-server/mcp-ambee)
  ⚡ 🔓 🆓 - Weather, air quality, pollen, and other environmental data.

### 📂 <a name="file-storage"></a>File Storage

- [Box](https://box.com) `https://mcp.box.com/`
  [![Box MCP connector](https://glama.ai/mcp/connectors/com.box.mcp/box/badges/score.svg)](https://glama.ai/mcp/connectors/com.box.mcp/box)
  ⚡ 🔐 - Search, read, and manage files stored in Box.

### 💰 <a name="finance"></a>Finance

- [Fruit Stand](https://fruitstand.dev) `https://api.fruitstand.dev/mcp`
  [![Fruit Stand MCP connector](https://glama.ai/mcp/connectors/dev.fruitstand/fund-returns/badges/score.svg)](https://glama.ai/mcp/connectors/dev.fruitstand/fund-returns)
  ⚡ 🔓 🆓 - Historical return data for funds and tickers.
- [Octagon](https://octagonagents.com) `https://mcp.octagonagents.com/mcp`
  [![Octagon MCP connector](https://glama.ai/mcp/connectors/com.octagonagents.mcp/octagon/badges/score.svg)](https://glama.ai/mcp/connectors/com.octagonagents.mcp/octagon)
  ⚡ 🔐 💰 - Private- and public-market financial research data.
- [Plaid](https://plaid.com) `https://api.dashboard.plaid.com/mcp/sse`
  📡 🔑 - Query Plaid dashboard data for connected financial accounts.
- [Vantage](https://vantagemcp.dev) `https://vantagemcp.dev/mcp`
  [![Vantage MCP connector](https://glama.ai/mcp/connectors/dev.vantagemcp/vantage/badges/score.svg)](https://glama.ai/mcp/connectors/dev.vantagemcp/vantage)
  ⚡ 🔐 - Ask questions about cloud cost and usage data.

### 🧠 <a name="knowledge--memory"></a>Knowledge & Memory

- [Hugging Face](https://huggingface.co) `https://huggingface.co/mcp`
  [![Hugging Face MCP connector](https://glama.ai/mcp/connectors/co.huggingface/hf-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/co.huggingface/hf-mcp-server)
  ⚡ 🔓 🆓 - Search models, datasets, and Spaces, and call Space APIs.
- [Notion](https://notion.com) `https://mcp.notion.com/mcp`
  ⚡ 🔐 - Read and write Notion pages, databases, and comments.
- [Rootr](https://rootr.io) `https://rootr.io/mcp`
  [![Rootr MCP connector](https://glama.ai/mcp/connectors/io.github.inspirio-co/rootr-cli/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.inspirio-co/rootr-cli)
  ⚡ 🔐 - Read, search, and write a team workspace of documents, tables, spreadsheets, issue trackers, and CRM records, with answers citing the source paragraph.

### 🎯 <a name="marketing"></a>Marketing

- [DABLOCK AI Visibility Index](https://dablock.ai) `https://dablock.ai/mcp`
  [![DABLOCK MCP connector](https://glama.ai/mcp/connectors/ai.dablock/visibility-index/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dablock/visibility-index)
  ⚡ 🔓 🆓 - Weekly share of answer for 24 crypto and Web3 brands across ChatGPT, Perplexity and Gemini, with the frozen prompt panel behind it.
- [DABYTE AI Visibility Index](https://dabyte.ai) `https://dabyte.ai/mcp`
  [![DABYTE MCP connector](https://glama.ai/mcp/connectors/ai.dabyte/visibility-index/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dabyte/visibility-index)
  ⚡ 🔓 🆓 - Weekly share of answer for 20 SaaS and AI tool brands across ChatGPT, Perplexity and Gemini, with the frozen prompt panel behind it.
- [Lekta](https://lekta.dev) `https://lekta.dev/mcp`
  [![Lekta MCP connector](https://glama.ai/mcp/connectors/dev.lekta/lektadev/badges/score.svg)](https://glama.ai/mcp/connectors/dev.lekta/lektadev)
  ⚡ 🔓 🆓 - Audit a site's visibility in AI answer engines (AEO/GEO).
- [LogoKit](https://logokit.com) `https://mcp.logokit.com/mcp`
  [![LogoKit MCP connector](https://glama.ai/mcp/connectors/com.logokit/brand-data/badges/score.svg)](https://glama.ai/mcp/connectors/com.logokit/brand-data)
  ⚡ 🔑 - Company logos, brand colors, and firmographic data by domain.

### 📊 <a name="monitoring"></a>Monitoring

- [Cloudflare Observability](https://developers.cloudflare.com) `https://observability.mcp.cloudflare.com/mcp`
  ⚡ 🔐 - Query Workers logs, analytics, and error events.
- [Grafana](https://grafana.com) `https://mcp.grafana.com/mcp`
  [![Grafana MCP connector](https://glama.ai/mcp/connectors/io.github.grafana/mcp-grafana/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.grafana/mcp-grafana)
  ⚡ 🔐 - Query Grafana dashboards, datasources, and alerts.
- [Rootly](https://rootly.com) `https://mcp.rootly.com/mcp`
  ⚡ 🔐 - Manage Rootly incidents, alerts, and on-call schedules.
- [Sentry](https://sentry.io) `https://mcp.sentry.dev/mcp`
  [![Sentry MCP connector](https://glama.ai/mcp/connectors/dev.sentry.mcp/sentry/badges/score.svg)](https://glama.ai/mcp/connectors/dev.sentry.mcp/sentry)
  ⚡ 🔐 - Investigate Sentry issues, events, and releases, and run Seer root-cause analysis.

### 🎥 <a name="multimedia"></a>Multimedia

- [invideo](https://invideo.io) `https://mcp.invideo.io/mcp`
  ⚡ 🔓 🆓 - Generate and edit videos from a prompt.

### 💳 <a name="payments"></a>Payments

- [Dodo Payments](https://dodopayments.com) `https://mcp.dodopayments.com/mcp`
  ⚡ 🔐 - Manage Dodo Payments products, subscriptions, and payouts.
- [Paddle](https://paddle.com) `https://mcp.paddle.com/mcp`
  ⚡ 🔐 - Manage Paddle products, prices, subscriptions, and transactions.
- [PayPal](https://paypal.com) `https://mcp.paypal.com/mcp`
  ⚡ 🔐 - Create and manage PayPal invoices, orders, and payments.
- [Square](https://squareup.com) `https://mcp.squareup.com/mcp`
  ⚡ 🔐 - Manage Square catalog, orders, payments, and customers.
- [Stripe](https://stripe.com) `https://mcp.stripe.com`
  [![Stripe MCP connector](https://glama.ai/mcp/connectors/com.stripe/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.stripe/mcp)
  ⚡ 🔐 - Manage Stripe customers, products, prices, invoices, and payments.

### 📋 <a name="project-management"></a>Project Management

- [Asana](https://asana.com) `https://mcp.asana.com/mcp`
  ⚡ 🔐 - Manage Asana tasks, projects, and portfolios.
- [Atlassian](https://atlassian.com) `https://mcp.atlassian.com/v1/mcp`
  [![Atlassian MCP connector](https://glama.ai/mcp/connectors/com.atlassian/atlassian-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.atlassian/atlassian-mcp-server)
  ⚡ 🔐 - Work with Jira issues and Confluence pages.
- [ClickUp](https://clickup.com) `https://mcp.clickup.com/mcp`
  ⚡ 🔐 - Manage ClickUp tasks, docs, and spaces.
- [Linear](https://linear.app) `https://mcp.linear.app/mcp`
  [![Linear MCP connector](https://glama.ai/mcp/connectors/app.linear/linear/badges/score.svg)](https://glama.ai/mcp/connectors/app.linear/linear)
  ⚡ 🔐 - Manage Linear issues, projects, and cycles.
- [monday.com](https://monday.com) `https://mcp.monday.com/mcp`
  ⚡ 🔐 - Manage monday.com boards, items, and updates.

### 🔎 <a name="search--data-extraction"></a>Search & Data Extraction

- [1cent](https://1cent.maxzoa.ru) `https://1cent.maxzoa.ru/mcp`
  [![1cent MCP connector](https://glama.ai/mcp/connectors/ru.maxzoa/1cent/badges/score.svg)](https://glama.ai/mcp/connectors/ru.maxzoa/1cent)
  ⚡ 🔓 🆓 - Extract web content and metadata, discover site resources, and detect page changes, with free discovery tools and pay-per-call x402 USDC operations on Base.
- [Bright Data](https://brightdata.com) `https://mcp.brightdata.com/mcp`
  ⚡ 🔐 💰 - Web scraping and SERP data through a managed proxy network.
- [Cloudflare Radar](https://radar.cloudflare.com) `https://radar.mcp.cloudflare.com/mcp`
  ⚡ 🔐 - Internet traffic, routing, and security trends from Cloudflare Radar.
- [Exa](https://exa.ai) `https://mcp.exa.ai/mcp`
  [![Exa MCP connector](https://glama.ai/mcp/connectors/ai.exa/exa/badges/score.svg)](https://glama.ai/mcp/connectors/ai.exa/exa)
  ⚡ 🔓 🆓 - Neural web search that returns full page contents.
- [Firecrawl](https://firecrawl.dev) `https://mcp.firecrawl.dev/v2/mcp`
  [![Firecrawl MCP connector](https://glama.ai/mcp/connectors/dev.firecrawl.mcp/firecrawl-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/dev.firecrawl.mcp/firecrawl-mcp)
  ⚡ 🔓 🆓 - Crawl, scrape, and extract structured data from websites.
- [Simplescraper](https://simplescraper.io) `https://mcp.simplescraper.io/mcp`
  ⚡ 🔐 - Scrape websites and run saved extraction recipes.
- [Tavily](https://tavily.com) `https://mcp.tavily.com/mcp`
  ⚡ 🔐 - Web search and content extraction built for agents.

### 🔒 <a name="security"></a>Security

- [Semgrep](https://semgrep.dev) `https://mcp.semgrep.ai/mcp`
  ⚡ 🔐 - Scan code for security and correctness findings with Semgrep rules.

### 📣 <a name="social-media"></a>Social Media

- [OmniSocials](https://omnisocials.com) `https://mcp.omnisocials.com/`
  [![OmniSocials MCP connector](https://glama.ai/mcp/connectors/com.omnisocials.mcp/omni-socials/badges/score.svg)](https://glama.ai/mcp/connectors/com.omnisocials.mcp/omni-socials)
  ⚡ 🔑 - Publish and schedule posts across social networks.

### 🎧 <a name="support--service-management"></a>Support & Service Management

- [Intercom](https://intercom.com) `https://mcp.intercom.com/mcp`
  ⚡ 🔐 - Search Intercom conversations, contacts, and help-center articles.

### 🚆 <a name="travel--transportation"></a>Travel & Transportation

- [Alice Flights](https://mcp.alice.co.il) `https://mcp.alice.co.il/mcp`
  [![Alice Flights MCP connector](https://glama.ai/mcp/connectors/il.co.alice/flights/badges/score.svg)](https://glama.ai/mcp/connectors/il.co.alice/flights)
  ⚡ 🔐 🆓 - Search worldwide flights from Alice, one of Israel's best-known travel apps, including Tel Aviv routes, with English and Hebrew results tagged best, cheapest, and fastest.

### 🔄 <a name="version-control"></a>Version Control

- [GitHub](https://github.com) `https://api.githubcopilot.com/mcp/`
  ⚡ 🔐 - Manage GitHub repositories, issues, pull requests, and Actions.

### 🏢 <a name="workplace--productivity"></a>Workplace & Productivity

- [Fireflies](https://fireflies.ai) `https://api.fireflies.ai/mcp`
  [![Fireflies MCP connector](https://glama.ai/mcp/connectors/ai.fireflies.api/firefly/badges/score.svg)](https://glama.ai/mcp/connectors/ai.fireflies.api/firefly)
  ⚡ 🔐 - Search meeting transcripts, summaries, and action items.

### 🧰 <a name="other-tools--integrations"></a>Other Tools & Integrations

- [Human Design](https://www.gethumandesign.com/mcp-docs/) `https://api.gethumandesign.com/mcp`
  [![Human Design MCP connector](https://glama.ai/mcp/connectors/com.gethumandesign.www/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.gethumandesign.www/mcp)
  ⚡ 🔐 - Calculate Human Design bodygraphs from birth data, compare two people, and analyse group dynamics.
- [Tseha](https://tseha.io) `https://tseha.io/mcp`
  [![Tseha MCP connector](https://glama.ai/mcp/connectors/io.tseha/tseha/badges/score.svg)](https://glama.ai/mcp/connectors/io.tseha/tseha)
  ⚡ 🔓 🆓 - Ethiopian calendar and date conversion.
## Community

* [r/mcp Reddit](https://www.reddit.com/r/mcp)
* [Discord Server](https://glama.ai/mcp/discord)

## Related

* [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) – servers you run locally
* [awesome-mcp-clients](https://github.com/punkpeye/awesome-mcp-clients) – clients that speak MCP
* [glama.ai/mcp/connectors](https://glama.ai/mcp/connectors) – searchable directory of remote servers

## Contributing

Found a remote server that belongs here? See [CONTRIBUTING.md](CONTRIBUTING.md).
