# e2e-test-cicd-fe

Our goal is to test the CICD workflow for this project

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command | Does |
| ------- | ---- |
| `npm run dev` | Run locally in watch mode |
| `npm run build` | Produce a production build |
| `npm test` | Run the test suite |
| `npm run typecheck` | Type-check without emitting |
| `npm run lint` | Lint `src` and `tests` |

## Layout

```
src/          React components
tests/unit/   Unit tests
```

---

_Scaffolded by Alpha. Copy `.env.example` to `.env` before running._

## CI/CD

`.github/workflows/ci.yml` runs unit tests with coverage, lint and a security scan on every push and pull request to `dev`, `uat` and `main` (from `Capstone-Agentic-AI-Orchestration/alphaorch-workflow@v1:workflow-templates/customer/fe-react.yml`).

Work lands on `dev`, is promoted to `uat`, then to `main`, by pull request only.

Deploys go to **Vercel** after the checks pass. They are off until the repository has:

- secret `VERCEL_TOKEN`
- secret `VERCEL_ORG_ID`
- secret `VERCEL_PROJECT_ID`
- variable `ALPHAORCH_DEPLOY` set to `true`
