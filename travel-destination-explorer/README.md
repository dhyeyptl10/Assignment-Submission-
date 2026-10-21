# Wayfinder — Travel Destination Explorer

A spatial cartographic travel directory implemented with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

## Routes & Concepts
- `/destinations` — Interactive listing with region filter pills (`All Regions`, `East Asia`, `Southern Europe`, etc.)
- `/destinations/[id]` — Dynamic route with cartographic telemetry, elevation, coordinates, and transit guides
- `/regions/[[...slug]]` — Optional catch-all route handling continental roots (`/regions`) and nested sub-regions (`/regions/asia/japan/kansai`)
- `/(planner)/overview` — Route group with dedicated field workspace sidebar and itinerary draft
- `not-found.tsx` — Custom spatial 404 page

## Running This Project
```bash
npm install
npm run dev
```
Runs at `http://localhost:3000`.
