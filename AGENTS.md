# AGENTS.md

## Repo Shape
- Single Next.js App Router app. Main routes live in `app/`.
- Home page is `app/page.tsx`; about page is `app/about/page.tsx`.
- Shared UI lives in `components/`; post feed logic lives in `lib/posts.ts`.
- Manual post entries are stored in `data/posts.json` and merged with the live Substack RSS feed in `lib/posts.ts`.

## Commands
- Install: `bun install`
- Dev server: `bun run dev`
- Build: `bun run build`
- Start prod server: `bun run start`
- Lint/check: `bun run check` or `bun run lint`
- Format: `bun run format`

## Verification
- There is no dedicated test suite or typecheck script.
- Use `bun run check` as the default quick verification step.
- For route or config changes, also run `bun run build` when feasible.

## Important Quirks
- Formatting/linting is handled by Biome, not ESLint or Prettier. `biome.json` uses tabs and double quotes.
- `@/*` imports resolve from the repo root via `tsconfig.json`.
- Markdown imports are intentional: `app/about/page.tsx` imports `app/about/about.md`, enabled by `next.config.mjs` through `raw-loader`/`asset/source` rules.
- `next.config.mjs` sets `typescript.ignoreBuildErrors = true`, so a successful production build does not prove type safety.
- `next.config.mjs` also sets `images.unoptimized = true`; do not assume Next image optimization is available.
- The home page is ISR-backed: `app/page.tsx` exports `revalidate = 86400`, and `lib/posts.ts` fetches the Substack feed with the same revalidation window.

## Editing Notes
- Preserve the current visual style unless the task asks for redesign: dark single-column layout, shader background, grain overlays, serif/sans mix.
- Global texture/grain layers and the Collecty widget script are mounted in `app/layout.tsx`; check there before changing site-wide chrome or third-party scripts.
- `components/shader-background.tsx` and `components/about/about-content.tsx` are client components; keep server/client boundaries intact when refactoring.

## External Source Of Truth
- `README.md` is v0/Vercel sync boilerplate. Treat the code and config files as the real source of truth for behavior.
