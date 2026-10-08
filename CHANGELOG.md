# Changelog

All notable changes to Infra Backlog. Format: [Keep a Changelog](https://keepachangelog.com/), versions follow SemVer.

## [5.3.0] - 2026-10-08
### Changed
- **Moved:** Infra Backlog is now **Orbiscale Flow**, a module of Orbiscale (`knoc-network-ops-console/flow/`). This site forwards old links, keeping `?q=` searches.

## [5.0.0] - 2026-10-08
### Added
- Every item has an **◎ Orbiscale** link that opens where it lives on the Orbiscale map; `?q=<text>` pre-fills the search (used by Orbiscale to open an item here).
- Splash screen while the board loads.
### Changed
- New default palette **Executive** (teal-led for the Backlog, blue for Orbiscale).

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
