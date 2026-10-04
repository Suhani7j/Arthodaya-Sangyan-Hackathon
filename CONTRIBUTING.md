# Contributing

1. Fork, then create a branch: `git checkout -b feat/short-name` (or `fix/`, ``).
2. Make changes. Keep the app dependency-free and single-file unless a split is agreed in an issue.
3. Run `npm test` before committing.
4. Commit with a short imperative message, e.g. `Add Marathi term translations`.
5. Open a pull request using the template. Any change touching quiz, scam or advice text needs a second reviewer.

## Definition of done
- Works at 360 px width and with keyboard only.
- No new network calls without being documented in `ARCHITECTURE.md`.
- Passes every rule in `GUARDRAILS.md`.
