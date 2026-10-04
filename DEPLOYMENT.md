# Deployment

Arthodaya is a **zero-build, single-file app**. Deploy it anywhere static files are served.

---

## GitHub Pages (Recommended)

No workflow file needed.

1. Create a repo named `arthodaya` and upload all files at the top level
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**
6. Your URL: `https://<your-username>.github.io/arthodaya/` (ready in 1–2 minutes)

---

## Netlify

1. Drag and drop the project folder into [Netlify Drop](https://app.netlify.com/drop)
2. No build command needed
3. Publish directory: `.` (root)

---

## Vercel

1. Import the GitHub repository
2. Framework preset: **Other**
3. Build command: leave empty
4. Output directory: `.`

---

## Cloudflare Pages

1. Connect your GitHub repository
2. Build command: leave empty
3. Build output directory: `.`

---

## Optional: Enable Live Translation / TTS

**Never commit API keys.** Set these at deploy time via environment variables or a small proxy server:

| Variable | Purpose |
|----------|---------|
| `BHASHINI.url` | Bhashini/Dhruva translation + TTS endpoint |
| `AI.url` | Custom LLM endpoint for the Arthodaya Guide |

The app works **fully offline without either** — these are enhancements, not requirements.

---

## Team

Deployed by the Arthodaya team for SANGYAN Hackathon 2026:
Suhani Jadia, Bhumika Tiwari, Purva Khanapurkar, Arya Salunkhe
