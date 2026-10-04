# Arthodaya

> **Make your first investing mistakes for free.**

A Duolingo-style, language-first safe playground for first-time investors from Tier-2/3 India. Arthodaya teaches investor resilience through consequence-free simulations, not stock tips.

---

## One-Line Pitch

A safe, practice-only trading-terminal and scam-spotting game that teaches market resilience in six Indian languages. Users choose their preferred language, then safely live through the exact emotional traps that cause real losses: the pre-market WhatsApp panic, opening-bell FOMO, and guaranteed-return scams. Zero real money. Zero stock tips. Zero login.

---

## The Problem

India's retail investor base has exploded: **16+ crore Demat accounts**, with **70%+ of new accounts** coming from non-metro cities. Yet SEBI's own studies show **9 out of 10 individual F&O traders incur net losses**.

The problem is not lack of information. It is **emotional preparation at 8:45 AM**.

- First-time investors from Tier-2/3 cities are intimidated by jargon-heavy broker interfaces
- They join WhatsApp/Telegram "tips" groups because no one has taught them basic terms in their own language
- At 8:45 AM, a phone buzzes: "US markets crashed overnight. Sell everything at 9:15." They panic-sell and lock in losses
- Existing solutions (PDFs, videos, chatbots) are passive. Users have never *felt* the consequences of a bad decision in a safe environment

---

## The Solution

### "Subah ke 9 Baje" — The Flagship Experience
A time-bound emotional trainer that recreates the exact moments when bad decisions happen:
1. **8:45 AM** — Phone notifications, WhatsApp panic, countdown timer
2. **9:00 AM** — Scam messages promising guaranteed returns
3. **9:15 AM** — Opening bell FOMO, forced decision point
4. **Feedback** — "More resilient" vs "less resilient," never "correct" vs "wrong"

### Key Features

| Feature | Description |
|---------|-------------|
| 🌅 **Subah ke 9 Baje** | Time-bound scenario game measuring emotional resilience, not returns |
| 🛡️ **Scam Spotter** | Adaptive levels with realistic WhatsApp, SMS, call, and email patterns |
| 📈 **Practice Terminal** | Real trading-app layout with random demo prices, plain-language glossary on every term |
| 🧠 **Skill Tree + Quiz** | 74 financial terms, 3 difficulty tiers, streak-based XP |
| 🗣️ **Voice-First** | Spoken explainers in Hindi, Tamil, Marathi, Bengali, Telugu, English |
|  **Zero Data Collection** | No login, no OTP, no Demat linking. Everything stays on your device |

---

## Technology

- **Single HTML file** — No build step, no dependencies
- **74-term glossary** — Pipe-separated: `term | everyday picture | full form | meaning`
- **6-language i18n** — Hindi, Tamil, Marathi, Bengali, Telugu, English
- **localStorage persistence** — Progress, XP, streaks, badges, practice wallet
- **Service Worker** — Offline-capable via `sw.js`
- **Optional hooks** — Bhashini translation/TTS, custom LLM endpoint (empty by default)

---

## Team

| Name | Role |
|------|------|
| Suhani Jadia | Frontend & UI Design |
| Bhumika Tiwari | Content & Scenario Design |
| Purva Khanapurkar | Backend & Logic |
| Arya Salunkhe | Research & Documentation |

---

## Hackathon

**SANGYAN Investor Resilience Hackathon**
- Main Track: **C — Investor Education for Bharat**
- Organisers: SEBI, NSDL, Science and Technology Council IIT (BHU) Varanasi
- Date: 1–4 October 2026

---

## Guardrails

See [GUARDRAILS.md](GUARDRAILS.md) for the full compliance checklist.

Highlights:
- No buy/sell/hold advice. No price predictions.
- No broker integration. Wallet is virtual and non-withdrawable.
- No profit leaderboards. XP rewards learning only.
- Every outcome screen states that real markets are unpredictable.
- No login, OTP, or Demat linking. No server-side personal data.

---

## Quick Start

```bash
# Clone the repo
git clone <your-repo-url>
cd arthodaya

# Open directly in browser
open index.html

# Or serve locally
python -m http.server 8080
# Then visit http://localhost:8080
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages, Netlify, Vercel, and Cloudflare Pages instructions.

---

## License

MIT License — see [LICENSE](LICENSE)
