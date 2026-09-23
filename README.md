<h1>Data Parrot MCP for HubSpot</h1>

Data Parrot brings AI revenue analysis of your HubSpot data into your AI tools.

Data Parrot connects to HubSpot and learns how your company sells. Its MCP server brings deal health, sales forecasting, pipeline analysis, customer health, and win/loss analysis into your AI tools.

Ask your AI tool about your HubSpot forecast, pipeline, deals, sales activity, customer health, and win/loss using analysis Data Parrot has already completed.

[Get a Data Parrot account](https://dataparrot.ai/signup) · [Visit Data Parrot](https://dataparrot.ai) · [MCP documentation](https://dataparrot.ai/docs/mcp) · [Connection guide](https://dataparrot.ai/docs/mcp/connect) · [Agent installation guide](llms-install.md) · [Prompt library](https://dataparrot.ai/docs/mcp/prompts)

[![Listed on mcpservers.org](https://mcpservers.org/badge.svg)](https://mcpservers.org/servers/data-parrot/data-parrot-mcp)

[![Data Parrot AI Revenue Analyst MCP connector – tool definition quality and endpoint health on Glama](https://glama.ai/mcp/connectors/ai.dataparrot/data-parrot/badges/score.svg)](https://glama.ai/mcp/connectors/ai.dataparrot/data-parrot)

## What is the Data Parrot MCP server?

[Data Parrot](https://dataparrot.ai) is an AI revenue intelligence platform for CEOs, CROs, and revenue leaders using HubSpot. It monitors every deal, pipeline movement, and customer interaction so revenue teams can trust the forecast, catch slippage early, and focus the team where it matters.

The Data Parrot MCP server brings that analysis into AI tools that support the [Model Context Protocol](https://modelcontextprotocol.io). Instead of starting with raw CRM records and rebuilding the analysis in every conversation, your AI tool can use Data Parrot's deal health, forecast risk, pipeline movement, customer health, sales activity, and win/loss analysis.

This repository contains connection instructions and a Gemini CLI extension. The MCP server itself is hosted by Data Parrot at `https://api-v3.dataparrot.ai/api/v3/data-parrot/mcp`. There is no local server to run.

## Why use Data Parrot with HubSpot?

Your CRM has the data. Data Parrot has already analyzed how your company sells and what is happening across the sales organization, from individual deals and customers to the forecast and the reasons behind wins and losses.

Data Parrot uses HubSpot CRM fields alongside emails, calls, meetings, notes, property changes, transcripts, and buyer engagement when that information is available. Your CRM does not have to be perfect before you can ask a useful sales question.

Every conversation starts with analysis Data Parrot has already done. You can ask what changed, what is at risk, and where the team needs to focus without first explaining your pipeline or asking the model to reconstruct deal history record by record.

## What can Data Parrot do through MCP?

### Sales forecasting

Build a realistic forecast from closed-won revenue, the remaining pipeline, deal-level risk, best-case upside, and the deals most likely to move the number. You can ask where the business will land this month or quarter and inspect the deals behind the answer.

### Deal health and forecast risk

Review purchase intent, deal progress, stage confidence, close-date confidence, buyer engagement, and forecast risk. Find high-value deals that are stuck, going quiet, slipping, or showing stronger intent than their stage suggests.

### Pipeline analysis

See how the pipeline changed over a period and which deals caused the movement. Data Parrot can help explain pipeline growth, shrinkage, pushed close dates, stage changes, and the deals that need attention now.

### Sales activity and coaching

Use activity and deal evidence to identify where reps need coaching and which deals belong in the next review. This gives leaders a concrete place to start instead of another generic activity summary.

### Customer health

Find high-value customers that need attention and review the supporting account activity. This helps teams spot customer risk before the next renewal or executive review.

### Win/loss analysis

Understand why deals are won and lost using the available CRM and customer activity. Compare reasons across deals, segments, owners, competitors, and time periods without manually reading every record.

## Questions you can ask

Start with questions your revenue team already asks:

- "Where will we land this month? Include closed-won revenue, a realistic remaining forecast, best case, and the deals that could move the number."
- "Which deals put this month's forecast at risk?"
- "Which high-value deals have strong buyer intent but are stuck or going quiet?"
- "What grew or shrank our pipeline this quarter, and which deals caused the change?"
- "Which reps need coaching right now, and which deals should we review with them?"
- "Which high-value customers should we be worried about?"
- "Why are we winning and losing?"

See the [Data Parrot prompt library](https://dataparrot.ai/docs/mcp/prompts) for more examples covering forecasts, open deals, pipeline movement, sales activity, customer health, and win/loss analysis.

## Use the analysis in your existing workflow

The answer does not have to stay in chat. When your AI tool has access to the right file or productivity apps, it can use Data Parrot's analysis to help create a forecast deck, prepare a deal review, update a planning document, or build a working spreadsheet.

Data Parrot supplies the revenue analysis and supporting details. Your connected AI tool handles the document or workflow in the apps you have authorized.

## Data Parrot MCP vs. HubSpot MCP

Data Parrot MCP and HubSpot MCP solve different jobs and can be used side by side.

| | Data Parrot MCP | HubSpot MCP |
| --- | --- | --- |
| Primary job | Answer revenue questions using analysis Data Parrot has already produced | Give an AI tool access to supported HubSpot CRM records and activities |
| Best for | Forecasting, deal risk, pipeline movement, coaching, customer health, and win/loss analysis | Looking up CRM data and taking supported actions in HubSpot |
| Information returned | Data Parrot analysis with supporting HubSpot details | Supported HubSpot records, activities, and account information |
| Revenue data access | Read-only | Read and write access depends on the supported object and configured scopes |

Use [HubSpot's MCP server documentation](https://developers.hubspot.com/ai-tools/mcp) for direct CRM access. Use Data Parrot when the question requires the sales analysis behind the records.

## How it works

1. Data Parrot connects to HubSpot and analyzes deals, pipeline movement, sales activity, customer accounts, and won and lost business.
2. You add the Data Parrot connection to your AI client using its setup guide below.
3. Data Parrot asks you to sign in through your browser and choose the account you want to use.
4. Your AI tool calls the hosted Data Parrot MCP server when a question needs revenue analysis or supporting details.

### Before connecting

You need a connected HubSpot account and a Data Parrot Pro or Max workspace. MCP access is included with those plans at no additional Data Parrot charge.

New to Data Parrot? [Get a Data Parrot account](https://dataparrot.ai/signup). MCP access requires Pro or Max.

You also need access to the workspace with MCP enabled for your user. Your organization may need to allow the connection in your AI client. See the [plans and permissions FAQ](https://dataparrot.ai/docs/mcp/faq).

| Setting | Value |
| --- | --- |
| Server name | `data-parrot` |
| Endpoint | `https://api-v3.dataparrot.ai/api/v3/data-parrot/mcp` |
| Transport | Streamable HTTP |
| Authentication | OAuth through your browser, discovered by the client |

The normal connection flow requires no API key, HubSpot private-app token, or pasted bearer token. Preserve existing client settings and reuse an existing Data Parrot connection for this endpoint instead of creating a duplicate.

## Connect your AI client

Choose your client and follow its setup guide. Client versions, account plans, and organization policies can affect the available connection controls.

| AI client | Setup summary | Instructions |
| --- | --- | --- |
| Claude.ai / Claude Desktop | Add a custom connector, then sign in and enable it in your conversation. | [Claude connector guide](https://dataparrot.ai/docs/mcp/connect/anthropic#connect-the-data-parrot-mcp-server-to-claudeai-or-claude-desktop) |
| Claude Code | Add the HTTP server from your terminal, then authenticate in Claude Code. | [Claude Code guide](https://dataparrot.ai/docs/mcp/connect/anthropic#connect-the-data-parrot-mcp-server-to-claude-code) |
| ChatGPT | Add the remote connection through Developer mode and choose OAuth. | [ChatGPT guide](https://dataparrot.ai/docs/mcp/connect/openai#connect-the-data-parrot-mcp-server-to-chatgpt) |
| Codex app | Add a Streamable HTTP server in MCP settings, then authenticate. | [Codex app guide](https://dataparrot.ai/docs/mcp/connect/openai#connect-the-data-parrot-mcp-server-to-the-codex-app) |
| Codex CLI | Add the remote server and complete browser sign-in; reuse the app connection if already configured. | [Codex CLI guide](https://dataparrot.ai/docs/mcp/connect/openai#connect-the-data-parrot-mcp-server-to-codex-cli) |
| Cursor | Install the separate Data Parrot plugin from GitHub, then authenticate. | [Cursor guide](https://dataparrot.ai/docs/mcp/connect/cursor#connect-data-parrot-to-cursor) |
| Grok.com | Add a custom connector from the Connectors page, then sign in. | [Grok.com guide](https://dataparrot.ai/docs/mcp/connect/xai#connect-the-data-parrot-mcp-server-to-grokcom) |
| Grok CLI | Add the HTTP server, then authenticate from the MCP Servers menu. | [Grok CLI guide](https://dataparrot.ai/docs/mcp/connect/xai#connect-the-data-parrot-mcp-server-to-grok-cli) |
| Cline | Add a remote Streamable HTTP server and complete browser authentication. | [Cline installation instructions](llms-install.md#cline-ide-extension) |
| Gemini CLI | Install this extension or configure the HTTP endpoint directly, then authenticate. | [Gemini CLI installation instructions](llms-install.md#gemini-cli) |

For other clients, see the [custom connection guide](https://dataparrot.ai/docs/mcp/connect/other-clients). The [Cursor/Grok Bot package](https://github.com/data-parrot/cursor-grok-bot-mcp) remains separate; the Grok.com and Grok CLI guides above describe different clients from Grok Bot.

## Permissions and verification

Revenue-data access is read-only: Data Parrot MCP cannot edit HubSpot or Data Parrot revenue records. The connection can access all Data Parrot data in the selected workspace, including synced HubSpot data; **HubSpot per-user permissions are not synchronized or enforced through MCP**.

Connection setup has separate effects. Selecting or switching a workspace changes the connection binding. Requesting workspace access records a request and attempts to notify workspace administrators. Choose the workspace yourself and request access only when you intend to do so.

### Verify the connection

Check that Data Parrot tools are available. If workspace access is unclear, ask the client to call `get_data_parrot_access_status`. Then ask:

> Where will we land this month?

Confirm that the client actually called a Data Parrot business tool successfully and used the intended workspace and period. A chat answer alone is not proof of a connection. If the workspace has no applicable data, the answer should say so. Review important conclusions before acting on them.

If sign-in succeeds but revenue tools are unavailable, check the returned access status: membership, paid-plan eligibility, the HubSpot connection, MCP access for your user, or workspace selection may need attention. Follow the returned setup guidance; do not change permissions or send access requests automatically.

**Validation status:** the installation instructions have been checked against provider documentation. Client installation, authenticated OAuth, workspace access, token refresh, and successful business-tool execution have not been tested as part of this package review. See the [installer guide](llms-install.md) for the documentation-check date and version details.

## Support

For connection problems, use your client's reconnect/authentication controls and review the [MCP FAQ](https://dataparrot.ai/docs/mcp/faq). A browser GET to the MCP endpoint can return HTTP 405; that is not a complete MCP health check.

Follow your client's linked guide to remove the connection. Cline and Gemini removal instructions are in the [installer guide](llms-install.md#reconnect-remove-and-get-help).

Contact [support@dataparrot.ai](mailto:support@dataparrot.ai) with the client version and error message, excluding credentials and customer data.

## License

The files distributed in this repository are available under the [MIT License](LICENSE). This repository does not distribute the hosted Data Parrot service or its private server implementation.
