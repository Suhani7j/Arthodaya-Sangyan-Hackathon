# SANGYAN Submission Notes

**Track C: Investor Education for Bharat**

---

## One-Line Pitch

A safe, practice-only trading-terminal and scam-spotting game that teaches market resilience in six Indian languages.

---

## Problem

First-time investors from Tier-2/3 India meet three barriers simultaneously:
1. **Jargon** — NAV, OHLC, stop-loss, expense ratio: terms are explained in English, for the already-literate
2. **Panic mornings** — The 8:45 AM WhatsApp flood before market open triggers emotionally costly decisions
3. **Sophisticated scams** — Fake SEBI advisers, deepfake finfluencers, OTP phishing, cloned broker portals

There is no safe place to practise facing all three at once.

---

## Solution

| Feature | What it does | Hackathon Theme |
|---------|-------------|-----------------|
| 🌅 **Subah ke 9 Baje** | Time-bound emotional scenario game. Scores resilience, not returns | Track C: Investor Education |
| 🛡️ **Scam Spotter** | Adaptive game with realistic WhatsApp/SMS/call/email patterns | Track A: Fraud Resilience |
| 📈 **Practice Terminal** | Trading-app layout with 74-term plain-language glossary | Track C: Education for Bharat |
| 🧠 **Skill Tree + Quiz** | 3-tier lessons (Basics → Intermediate → Hard) with streak-based XP | Track D: Behavioural Resilience |
| 🗣️ **Voice-First** | Spoken explainers in 6 languages, no English assumption | Track C: Bharat-First Design |
| 🔒 **Zero Data** | No login, no OTP, no Demat linking. Everything on-device | Guardrail Compliance |

---

## Alignment with SEBI/NSDL Investor Protection Themes

| SEBI/NSDL Theme | How Arthodaya Addresses It |
|-----------------|---------------------------|
| Investor education & awareness | 74-term glossary, skill tree, plain-language explainers with everyday analogies |
| Fraud prevention | Scam Spotter with red-flag detection; Guide refuses to validate suspicious messages |
| Grievance redressal awareness | Guide mentions SCORES, cybercrime.gov.in, and 1930 helpline |
| Behavioural resilience | "Subah ke 9 Baje" trains pause-before-action, not profit-chasing |
| Tier-2/3 accessibility | Language-first onboarding, voice explainers, single-file offline app |
| Financial literacy for youth | Duolingo-style gamification: streaks, hearts, XP, badges |

---

## Demo Script (3 Minutes)

1. **0:00–0:30** — Language screen. Pick **Hindi**. Tap 🔊 to hear the welcome in Hindi.
2. **0:30–1:00** — Practice Terminal. Tap a **dotted term** (e.g., "Bid", "Spread", "OHLC"). See full form + everyday picture. Place a **limit order**, watch it stay pending.
3. **1:00–1:45** — "Subah ke 9 Baje", **Intermediate** level. Face the midnight scam, then the 8:45 AM panic. Choose the panic option first, see feedback. Replay with the resilient option.
4. **1:45–2:30** — Scam Spotter. Read a WhatsApp message. Identify red flags: urgency, guaranteed returns, personal UPI.
5. **2:30–3:00** — Guide. Paste a suspicious message. Watch it flag red flags and advise safe actions. Close on the guardrails slide.

---

## Team

| Name | Role | Contribution |
|------|------|-------------|
| Suhani Jadia | Frontend & UI Design | Dashboard layout, responsive design, CSS theming |
| Bhumika Tiwari | Content & Scenario Design | "Subah ke 9 Baje" scenarios, scam patterns, quiz questions |
| Purva Khanapurkar | Backend & Logic | JavaScript modules, localStorage, order engine, scoring |
| Arya Salunkhe | Research & Documentation | SEBI guardrail compliance, term glossary, README & submission docs |

--

## Guardrail Checklist

- [x] No buy/sell/hold advice
- [x] No price predictions
- [x] No broker integration
- [x] No real-money flows
- [x] No profit leaderboards
- [x] No login/OTP/Demat linking
- [x] Honest framing on every outcome screen
- [x] Scam content shows red flags only, not templates

Verified by `npm test` (see `check.js`).
