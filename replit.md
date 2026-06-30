# Glam & Glow by Kiran

Hair & makeup artist website for Glam & Glow by Kiran in Delta, BC.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173

## Build

```bash
pnpm build
```

Static export is written to the `out/` folder.

## Project structure

```
├── public/          # Static assets (favicon, images)
│   └── images/      # Gallery and site photos
├── src/
│   ├── app/         # Next.js pages & layout
│   ├── components/  # UI and page sections
│   ├── data/        # Site content data
│   ├── hooks/
│   └── lib/
├── next.config.mjs
├── package.json
└── tsconfig.json
```
