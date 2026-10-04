# Architecture

**Single file, no build step.** `index.html` holds styles, an i18n JSON block, the 74-term glossary (`<script type="text/plain" id="terms">`, pipe-separated: `term | everyday picture | full form | meaning`) and the app script.

---

## State

One object `S`, persisted to `localStorage['arthodaya']`:
- `lang` — selected language (hi/ta/mr/bn/te/en)
- `xp` — experience points (learning rewards only)
- `hearts` — wrong answers cost one; refill daily
- `streak` — consecutive days of activity
- `done` — completed lesson indices
- `badges` — earned badge strings
- `cash` — virtual practice wallet (₹1,00,000 default)
- `hold` — virtual holdings
- `ord` — pending practice orders
- `log` — order message history
- `sl` — scam spotter adaptive level
- `lv9` — "Subah ke 9 Baje" best resilience scores per level

**Nothing leaves the device.**

---

## Modules

| Section | Entry | What it does |
|---------|-------|-------------|
| Practice Market | `cnd()`, `live()` | Generates random candles every 2.5s; redraws chart, quote, depth, watchlist |
| Orders | `tkt()`, `place()`, `exec()`, `fills()` | Market, limit, stop-loss orders; no short-selling |
| Learning | `learn()`, `lesson()`, `quiz()`, `lvQ()` | 3-tier skill tree with video-style mini-lessons |
| Scam Spotter | `SC` data, `scam()` | Adaptive difficulty based on user performance |
| 9 AM Game | `L9`, `R3`, `OUT`, `n9a()`–`n9f()` | Time-bound emotional resilience scenarios |
| Guide | `reply()`, `scamCheck()` | Rule-based assistant; refuses advice before any model call |
| Language | `L`, `XL`, `TR`/`KS`, `VX`, `txAll()` | 6-language UI, spoken explainers, on-device translation |

---

## Data Flow

```
User Action → JavaScript Handler → Update S → localStorage → Re-render UI
                    ↓
            JSON/i18n Content (embedded in HTML)
                    ↓
            Terms Glossary (pipe-separated plain text)
```

---

## Network Calls (All Optional)

| Endpoint | Purpose | Default |
|----------|---------|---------|
| `translate.googleapis.com` | Fallback translation when browser has no built-in Translator | Empty — disabled if unreachable |
| `BHASHINI.url` | Bhashini/Dhruva translation + TTS | Empty |
| `AI.url` | Custom LLM endpoint for Guide | Empty |

**The app works fully offline without any of these.**

---

## Offline Strategy

- `sw.js` caches the shell for offline use
- Translated strings cached in `localStorage['arth_tx']`
- All content (terms, scenarios, quizzes) embedded in the HTML — no external JSON fetch required

---

## File Structure

```
arthodaya/
├── index.html              # Main app (single file, ~120KB)
├── sw.js                   # Service worker for offline caching
├── manifest.webmanifest     # PWA manifest
├─ icon.svg                # App icon
├── check.js                # Sanity checks (npm test)
├── README.md               # Project overview
├── HACKATHON_SUBMISSION.md # SANGYAN submission details
├── ARCHITECTURE.md         # This file
├── GUARDRAILS.md           # Compliance rules
├── CONTRIBUTING.md         # Contribution guidelines
├── DEPLOYMENT.md           # Deployment instructions
└── LICENSE                 # MIT License
```
