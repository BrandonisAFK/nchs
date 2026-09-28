# AGENTS.md

## Deployment

- The live site (newcovenanths.com) is hosted on Netlify and rebuilt automatically from this project — no publish step from chat is needed after code changes. Frontend deploys take about a minute; confirm by loading the live URL rather than assuming a just-made edit is visible.
- Rule: server-side routing rules must live in `netlify.toml` (`[[redirects]]`) or in `public/_redirects`, never in the project root, because the build publishes `dist/` and Netlify only reads `_redirects` from the published folder. Why: a root-level `_redirects` was silently ignored, which made every in-app page (`/contact`, `/services`) return Netlify's "Page not found" on the live site while the homepage worked.
- Rule: the site is informational only — no bookings, no lead-capture forms. Contact is phone plus `newcovenanthomeservices@gmail.com`; Netlify Forms delivery to that address was never configured, so forms are not an option here.
