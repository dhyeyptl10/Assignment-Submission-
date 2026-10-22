# Wayfinder — Travel Destination Explorer

**Project 1 of 2** · Next.js 14 App Router · TypeScript · Tailwind CSS

---

## What is Wayfinder?

A cartographic travel portal for discovering global destinations across continents, exploring regional hierarchies, and planning itineraries — all built with Next.js App Router's advanced routing features.

---

## Routes Implemented

| Route | Type | Description |
|---|---|---|
| `/destinations` | Static | Interactive listing with region filter pills |
| `/destinations/[id]` | Dynamic `[id]` | Destination detail — elevation, coordinates, transit, season |
| `/regions` | Optional catch-all root | Continental divisions overview |
| `/regions/asia/japan/kansai` | Optional catch-all nested | Sub-regional telemetry, rail connectivity, microclimates |
| `/overview` | Route group `(planner)` | Isolated workspace sidebar with itinerary draft + GeoJSON export |

---

## App Router Concepts Used

- **Dynamic Routes `[id]`** — `/destinations/[id]` with `generateStaticParams()`
- **Optional Catch-All `[[...slug]]`** — `/regions/[[...slug]]` handles root and any nested depth
- **Route Group `(planner)`** — Groups the planner layout without polluting the URL (`/overview` not `/(planner)/overview`)
- **Nested Layouts** — Shared `Header` + `Footer` in destinations layout; isolated sidebar in planner layout
- **Custom `not-found.tsx`** — Spatial 404 with diagnostic notes and recovery links
- **`loading.tsx`** — Global Suspense skeleton
- **`error.tsx`** — Global error boundary

---

## Project Structure

```
destination/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root HTML shell
│   │   ├── page.tsx                      # Redirects to /destinations
│   │   ├── loading.tsx                   # Loading skeleton
│   │   ├── error.tsx                     # Error boundary
│   │   ├── not-found.tsx                 # Custom 404
│   │   ├── destinations/
│   │   │   ├── layout.tsx                # Shared header + footer
│   │   │   ├── page.tsx                  # /destinations (filter + listing)
│   │   │   └── [id]/
│   │   │       └── page.tsx              # /destinations/[id]
│   │   ├── regions/
│   │   │   └── [[...slug]]/
│   │   │       └── page.tsx              # /regions + /regions/any/nested/path
│   │   └── (planner)/
│   │       └── overview/
│   │           ├── layout.tsx            # Sidebar layout (route group)
│   │           └── page.tsx              # /overview
│   ├── components/                       # Header, Footer, DestinationCard, RegionCard
│   ├── data/                             # destinations.ts, regions.ts
│   └── types/                            # destination.ts, region.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

---

## Run Locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

| URL | What you'll see |
|---|---|
| `localhost:3000/destinations` | Full destination catalog with filter pills |
| `localhost:3000/destinations/kyoto` | Kyoto detail with cartographic info |
| `localhost:3000/regions` | Continental divisions (optional catch-all root) |
| `localhost:3000/regions/asia/japan/kansai` | Kansai nested region explorer |
| `localhost:3000/overview` | Route group planner workspace |
