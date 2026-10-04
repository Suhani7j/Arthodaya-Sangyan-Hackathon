# Deployment

## GitHub Pages (no workflow needed)
1. Create a repo named `arthodaya` and upload every file at the top level.
2. Settings, Pages, Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)**, Save.
3. Your URL: `https://<user>.github.io/arthodaya/` (ready in 1-2 minutes).

## Alternatives
Netlify, Vercel or Cloudflare Pages: drag the folder in, no build command, publish directory `.`.

## Optional keys
Never commit keys. For Bhashini or an LLM, put the endpoint behind your own small server and set `BHASHINI.url` / `AI.url` at deploy time.
