# Architecture

**Single file, no build step.** `index.html` holds styles, an i18n JSON block, the 74-term glossary (`<script type="text/plain" id="terms">`, pipe-separated: term | everyday picture | full form | meaning) and the app script.

## State
One object `S`, persisted to `localStorage['arthodaya']`: language, XP, hearts, streak, completed lessons, badges, practice wallet and orders. Nothing leaves the device.

## Modules (all inside the main script)
| Section | Entry points |
|---|---|
| Practice market | `cnd()` generates random candles every 2.5 s; `live()` redraws chart, quote, depth, watchlist |
| Orders | `tkt()`, `place()`, `exec()`, `fills()` (market, limit, stop-loss; no short-selling) |
| Learning | `learn()`, `lesson()`, `quiz()`, `lvQ()` |
| Scam spotter | `SC` data, `scam()`, adaptive level `S.sl` |
| 9 AM game | `L9`, `R3`, `OUT`, `n9a()` to `n9f()` |
| Guide | `reply()` rules, `scamCheck()` red-flag regexes, optional `AI.url` |
| Language layer | `L` (UI strings), `XL`, `TR`/`KS` (headings), `VX` (spoken explainers), `txAll()` (translates remaining text) |

## Network calls (all optional)
- `translate.googleapis.com`: fallback translation of on-screen English text when the browser has no built-in Translator. Disable by deleting the `gt()` function.
- `BHASHINI.url`: Bhashini/Dhruva translation and TTS, empty by default.
- `AI.url`: your own LLM endpoint, empty by default.

## Offline
`sw.js` caches the shell. Translated strings are cached in `localStorage['arth_tx']`.
