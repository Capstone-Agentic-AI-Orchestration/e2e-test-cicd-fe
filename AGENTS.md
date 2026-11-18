# AGENTS.md: e2e-test-cicd-fe

Project memory for agents working in this repository. Read it before changing anything. Keep it short and true; update it in the same pull request when a fact here changes.

## What this is
- The **frontend** of the "E2E Test Project" in Alpha. Its backend is `e2e-test-cicd-be`.
- React 19 + TypeScript, built with Vite 6. Entry: `src/main.tsx` renders `App` from `src/App.tsx` into `#root` in `index.html`.
- Created from an older Alpha starter than the project's other repositories; see Known issues.

## Run and check
- `npm install`, then `npm run dev` (Vite on port 5173, `strictPort`).
- Before a pull request: `npm run typecheck`, `npm run lint` (`src` and `tests`), `npm test`. `npm run build` writes `dist/`.

## Known issues (remove each line once fixed)
- `.env.example` names `NEXT_PUBLIC_API_URL` and `API_URL` on port 4000. This is a Vite app: only `VITE_`-prefixed variables reach the browser, and the backend listens on 3000. Use `VITE_API_URL` (e.g. `http://localhost:3000`) when wiring the backend.
- The backend has no HTTP server yet (see its AGENTS.md), so there is nothing to call until that is built.

## Rules
- Never hard-code backend URLs, hosts or keys; read them from env.
- Unit tests: Jest + ts-jest in `tests/unit/`, mirroring `src/`, ending in `.spec.tsx` / `.spec.ts`.
- Work lands on `dev`, then is promoted to `uat` and `main`, by pull request only.
- `.github/workflows/ci.yml` runs tests with coverage, lint and a security scan, and deploys to Vercel only once the repository has the Vercel secrets and the variable `ALPHAORCH_DEPLOY=true` (see README). Do not add secrets to the repository from an agent.
- This repository is public: never commit secrets or real customer data. Commit `package-lock.json` whenever dependencies change.
