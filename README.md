# Arthodaya — Investor Resilience Simulator

Practice-only money and scam-awareness learning for Bharat, built for the **SANGYAN Investor Resilience Hackathon (SEBI · NSDL · IIT BHU), Track C: Investor Education for Bharat**.

Everything runs in the browser from a single `index.html`. No login, no OTP, no Demat linking, no server-side personal data. Progress lives in `localStorage`.

## What is inside
| Feature | What it does |
|---|---|
| **Practice terminal** | Trading-app-style screen with random demo prices, candles, order ticket, depth and virtual ₹1,00,000 wallet. Dotted words open a plain-language glossary card. |
| **Subah ke 9 Baje** | 3-level market-morning simulator (midnight scam, panic news, follow-up). Scores resilience, never profit. |
| **Scam spotter** | Adaptive difficulty, 7 realistic scam messages. |
| **Skill tree and Quiz** | 74 terms, 3 tiers, hearts, streaks, combo XP. |
| **Arthodaya Guide** | Offline rule-based assistant with a scam-message checker. Optional LLM hook. |
| **Languages and voice** | Hindi, Tamil, Marathi, Bengali, Telugu, English. A 🔊 button on every section speaks a short explainer in the chosen language. |

## Quick start
```bash
git clone https://github.com/<your-user>/arthodaya.git
cd arthodaya
npm start        # serves on http://localhost:3000  (or just open index.html)
npm test         # syntax + guardrail checks
```
Deploy: GitHub Pages straight from the `main` branch (see [DEPLOYMENT.md](DEPLOYMENT.md)).

## Repo map (all files sit in one folder)
```
index.html            the whole app (HTML + CSS + JS + term data)
manifest.webmanifest  PWA manifest
sw.js                 offline cache for the app shell
icon.svg              app icon
check.js              dependency-free checks (npm test)
i18n-template.en.json translation template
ARCHITECTURE.md · TRANSLATION.md · DEPLOYMENT.md · GUARDRAILS.md · HACKATHON_SUBMISSION.md
```

## Guardrails (non-negotiable)
No stock tips or buy/sell/hold advice. No broker integration. No profit leaderboards: XP and streaks reward learning only. Every outcome screen says real markets are unpredictable. See [GUARDRAILS.md](GUARDRAILS.md).

## Docs
[Architecture](ARCHITECTURE.md) · [Translation guide](TRANSLATION.md) · [Deployment](DEPLOYMENT.md) · [Guardrails](GUARDRAILS.md) · [Hackathon submission](HACKATHON_SUBMISSION.md) · [Contributing](CONTRIBUTING.md)

## License
MIT. All prices, stories and scam messages are invented for teaching. This is not investment advice.
