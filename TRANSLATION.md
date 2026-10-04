# Translation guide

Current coverage: menus, tour, assistant greeting, section headings and spoken explainers are hand-written in hi, ta, mr, bn, te. Hindi also has hand-written terminal strings (`HD`). All other text is machine-translated at runtime (browser Translator, else the web fallback) and cached.

## Make a language fully offline and accurate
1. Copy `i18n-template.en.json` to `i18n-<code>.json`.
2. Translate every value (keep `{0}`-style placeholders and ₹ numbers as they are).
3. Have a native speaker review financial terms (NAV, SIP, margin call, stop-loss).
4. Wire it in by merging the strings into `L`, `TR` or the `HD`-style dictionary (see `txAll()`), or open an issue to load these JSON files at runtime.

## Style rules
Plain words, short sentences, keep English for terms people actually say (NAV, SIP, Demat). Never translate "no guarantee" into something that sounds like a promise.
