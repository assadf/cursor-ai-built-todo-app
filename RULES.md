## Tech stack

# Frontend: 
- Next.js + TypeScript + Tailwind
- ESLint + Prettier - Coding conventions
- Jest - for unit testing
- Redux - for frontend state management

# Backend
- Node.js (NestJS) - Backend Server and API's
- MongoDb + Mongoose - database store
- Passport.js - middleware authentication - Google auth Integration for now
- Jest - for unit testing

# Infra:
- Docker/Docker-Compose - local deployment as well as cloud ready deployment
- GitHub Actions - for CI/CD with placeholder step for deployment
- Deployment/hosting has yet to be deployed

## Architecture & patterns

- Clean architecture; feature-first folders for both frontend and backend
- API: REST; consistent nouns; version `/v1`; 2xx/4xx/5xx
- DO NOT user Next.js's API routing. Stick with NestJS
- Create monorepo but separate configuration for Next.js and NestJS. Do not share components between these two; treat these as two separate/independet applications.
- Use npm for all package management

## Code standards
- TypeScript scrict; no `any`
- ESLint + Prettier; fail CI on lint/test/type errors
- Naming: verbs for functions, nouns for variables; no abbreviations

## Testing
- Unit for pure logic; integration for services; e2e for flows
- Coverage target: 80% lines; snapshot tests only for stable UI

## Error handling & logging
- Never swallow errors; return typed error shapes
- Server logs: structured JSON; PII-safe

## Security & privacy
- No secrets in repo; use env vars + `.env.example`
- Input validation at boundaries (zod/class-validator)
- Auth: JWT access + refresh; store in localStorage. Implement CSRF mitigation and strong Content Security Policy

## Performance & UX
- Web: LCP < 2.5s on 4G; bundle splitting; image optimization
- API: p95 < 250ms; DB indices for hot paths

## Documentation
- Refer to `README.md` on the purpose of this application
- Refer to `FEATURES.md` for a list of features with a checklist.  Update the checklist when a feature has been implemented. Always use this file unless I say `#ignorefeatures` in the chats
