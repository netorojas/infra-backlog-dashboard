# Changelog

All notable changes to Infra Backlog. Format: [Keep a Changelog](https://keepachangelog.com/), versions follow SemVer.

## [4.0.0] - 2026-10-07
### Added
- **Settings › Look and colours**: 7 palettes plus your own brand colours, shared with Orbiscale.
- **Settings › Contact and support** with a pre-filled GitHub issue draft and private security advisory.
- `SECURITY.md` and GitHub issue templates.
### Changed
- New default palette: light "Ember" (red-led) and dark "Grove" (forest and gold).
- Orbinoc is now called Orbiscale across the suite.

## [3.0.0] - 2026-10-07
### Added
- Themes: light *overworld* and dark *night-navy*; hidden easter egg.
- 10 more integrations (NetBox, Veeam, Commvault, Terraform Cloud, AWX, GitHub/Azure DevOps, Vault, Prometheus, Splunk, Okta).
- Localhost kit: `serve.sh`, `serve.ps1`, Dockerfile and docker-compose.
### Changed
- Licence: AGPL-3.0-or-later (open-core) with a commercial licence available. v2.x and earlier remain MIT.

## [2.0.0] - 2026-10-06
### Added
- Shared portal shell (`assets/portal.*`): demo sign-in (Entra ID, Google, GitHub, enterprise SSO), settings panel, 26 integration blueprints with field mapping and a simulated connection test, command palette, FAQ, changelog and a 60-second tour.
- Responsive layout down to 360 px with a mobile drawer and bottom sheets.
- The old 15-step tour (`tour.js`) is replaced by the shared quick tour.
### Security
- No credential is collected. Integration secrets are stored only as a vault reference; connectors default to read-only.

## [1.1.0] - 2026-10-05
### Added
- Public demo with a fictional company (Contoso LATAM), Open Graph cards, GIF and MP4 walkthrough, gitleaks on every push.

## 4.1.0 — Executive workspace

- Executive navy/blue/teal palette by default; existing choices retained, graphite/violet added.
- Initial loading state, with initialization fallback notice and reduced-motion support.
- Removed KPI count-up on navigation and repeated delayed topology fitting.
- FinOps demonstration: explicit fictional USD costs, budgets and potential savings; Azure, AWS and IBM inventory from the existing snapshot.
- Shared work-origin view uses existing backlog evidence and an explicit fictional SBC association. External email, Teams, calendar and billing connectors remain unconnected.
- Validation: JavaScript syntax, panel output, cost totals, inventory providers and relation IDs. Browser visual/performance validation pending.
