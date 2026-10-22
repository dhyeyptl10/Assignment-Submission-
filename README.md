# Next.js App Router — Assignment Submission

**Student:** Dhyey Patel (`dhyeyptl10`)  
**Framework:** Next.js 14 App Router · TypeScript · Tailwind CSS  
**Repository:** [https://github.com/dhyeyptl10/Assignment-Submission-](https://github.com/dhyeyptl10/Assignment-Submission-)

---

## Projects Implemented

This repository contains **two independent Next.js projects**, each living in its own self-contained folder:

```
Assignment-Submission-/
├── destination/        ← Project 1: Travel Destination Explorer (Wayfinder)
├── student/            ← Project 2: Student Directory (Campus Directory)
└── README.md           ← You are here
```

---

## Project 1 — Travel Destination Explorer (`destination/`)

**Wayfinder** is a cartographic travel portal for discovering global destinations with deep route nesting.

### What's Inside
- **`/destinations`** — Catalog listing with interactive region filter pills
- **`/destinations/[id]`** — Dynamic destination detail (elevation, coordinates, transit, season)
- **`/regions/[[...slug]]`** — Optional catch-all: `/regions` root overview & `/regions/asia/japan/kansai` nested
- **`/(planner)/overview`** — Route group with isolated workspace sidebar layout
- **`not-found.tsx`** — Custom spatial 404 page

### App Router Concepts
- `[id]` — Dynamic routes with `generateStaticParams()`
- `[[...slug]]` — Optional catch-all for multi-level region paths
- `(planner)` — Route group with its own persistent sidebar layout
- Nested layouts, loading skeletons, error boundaries

### Run Locally
```bash
cd destination
npm install
npm run dev        # http://localhost:3000
```

---

## Project 2 — Student Directory (`student/`)

**Campus Directory** is a university academic portal for students, departments, and specialization tracks.

### What's Inside
- **`/students`** — Live search + department filter dropdown
- **`/students/[id]`** — Dynamic student profile (GPA, advisor, enrolled courses, credits)
- **`/departments`** — Department catalog with faculty counts and track breakdowns
- **`/departments/[dept]/[specialization]`** — Nested dynamic specialization track detail
- **`/not-found.tsx`** — Campus-specific fallback 404 page

### App Router Concepts
- `[id]` — Dynamic student profile routes with `generateStaticParams()`
- `[dept]/[specialization]` — Nested dynamic segments for multi-level academic hierarchy
- Shared campus layout with header and footer
- Real-time client-side search without full page reloads
- Custom segment-level `not-found.tsx`

### Run Locally
```bash
cd student
npm install
npm run dev        # http://localhost:3001
```

---

## Running Both Projects Together

```bash
# Terminal 1
cd destination && npm install && npm run dev

# Terminal 2 (new terminal)
cd student && npm install && npm run dev -- -p 3001
```

- Wayfinder → [http://localhost:3000](http://localhost:3000)
- Campus Directory → [http://localhost:3001](http://localhost:3001)

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2 | App Router framework |
| TypeScript | 5.x | Type safety across all files |
| Tailwind CSS | 3.x | Utility-first styling |
| React | 18.x | Component rendering |

---

## Routing Architecture Summary

| Concept | Where Used |
|---|---|
| Static routes | `/destinations`, `/students`, `/departments` |
| Dynamic `[id]` | `/destinations/[id]`, `/students/[id]` |
| Nested dynamic `[a]/[b]` | `/departments/[dept]/[specialization]` |
| Optional catch-all `[[...slug]]` | `/regions/[[...slug]]` |
| Route group `(group)` | `/(planner)/overview` |
| Shared layouts | Wayfinder nav/footer, Campus nav/footer |
| Custom `not-found.tsx` | Both projects |
| `loading.tsx` | Both projects |
| `error.tsx` | Both projects |
