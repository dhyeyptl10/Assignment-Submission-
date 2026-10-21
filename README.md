# Next.js App Router Projects

A hands-on implementation of two full frontend applications built using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Both projects are built according to the provided UI designs with custom routing, nested layouts, realistic dummy data, and responsive design.

---

## 📌 Selected Projects

1. **Travel Destination Explorer (Wayfinder)** — A cartographic travel portal with dynamic destination guides, multi-level regional catch-all routes, and an itinerary workspace route group.
2. **Student Directory (Campus Directory)** — A university directory featuring live search, department filtering, dynamic student profile pages, and nested specialization routes.

---

## 🗺️ Project 1: Travel Destination Explorer (Wayfinder)

Wayfinder is designed for travelers to discover destinations across the globe, view detailed travel telemetry (elevation, weather, coordinates, highlights), explore nested regions, and plan itineraries.

### Routes & Implementation

* **`/destinations` — Destination Catalog**
  * Displays curated travel destinations in responsive grid cards.
  * Interactive filter pills (`All Regions`, `East Asia`, `Southern Europe`, `Scandinavia`, etc.) to filter cards instantly without full page reloads.
  * Shows location tags, geocodes, and key highlights.

* **`/destinations/[id]` — Dynamic Destination Detail**
  * Uses Next.js dynamic routing (`[id]`) to render destination-specific details.
  * Shows elevation, coordinates, best season to visit, currency, weather overview, and transit recommendations.
  * Validates destination ID and triggers `notFound()` if an invalid destination is accessed.

* **`/regions/[[...slug]]` — Optional Catch-All Regional Explorer**
  * Implements Next.js **Optional Catch-All** routing:
    * `/regions` (no slug): Displays the continental divisions overview (East Asia, Southern Europe, Scandinavia, etc.).
    * `/regions/asia/japan/kansai` (nested slug): Displays deep regional telemetry, transit connectivity, weather microclimates, and regional settlements.

* **`/(planner)/overview` — Route Group Itinerary Workspace**
  * Utilizes a Next.js **Route Group `(planner)`** to provide an isolated layout without affecting the URL path.
  * Features a persistent workspace sidebar with itinerary stops, pinned destinations, day-by-day notes, and GeoJSON export option.

* **`not-found.tsx` — Custom Spatial 404**
  * Displays a tailored 404 page whenever an unknown destination or region slug is requested, with quick recovery links back to the catalog.

---

## 🎓 Project 2: Student Directory (Campus Directory)

Campus Directory provides an academic management and discovery interface for students, faculty departments, and specialized course tracks.

### Routes & Implementation

* **`/campus/students` — Student Listing & Live Search**
  * Full listing of enrolled students with avatars, majors, year, GPA, and student IDs.
  * Real-time client-side search by name or major.
  * Department dropdown filter (`Computer Science`, `Design`, `Business`).

* **`/campus/students/[id]` — Dynamic Student Academic Profile**
  * Dynamic route rendering full student records: academic status, advisor contact, completed credits, GPA breakdown, and enrolled courses with credit hours.

* **`/campus/departments` — Department Catalog**
  * Overview of all academic faculties, total enrolled students, faculty leads, and active specialization tracks.

* **`/campus/departments/[dept]/[specialization]` — Nested Specialization Track**
  * Nested dynamic routing (e.g., `/campus/departments/computer-science/web-development`).
  * Displays track code, lead professor, labs, requirements, and students enrolled in that specific track.

* **`/campus/not-found.tsx` — Directory Fallback 404**
  * Campus-specific error screen when a student ID or department path does not exist.

---

## ⚙️ Next.js App Router Concepts Demonstrated

* **Dynamic Route Segments (`[id]`):** Used in `/destinations/[id]` and `/campus/students/[id]` with `generateStaticParams()` for fast static page generation.
* **Nested Dynamic Routes (`[dept]/[specialization]`):** Used in `/campus/departments/[dept]/[specialization]` to handle multi-level academic hierarchies.
* **Optional Catch-All Routes (`[[...slug]]`):** Used in `/regions/[[...slug]]` to handle both root `/regions` and arbitrary nested sub-paths like `/regions/asia/japan/kansai`.
* **Route Groups (`(planner)`):** Used to create a dedicated sidebar layout for the trip workspace without adding `(planner)` into the URL path.
* **Shared & Nested Layouts:** Separate headers, footers, and sidebars for Wayfinder and Campus Directory.
* **Loading & Error States:** `loading.tsx` Suspense skeletons and `error.tsx` boundary handlers.
* **Custom Not-Found Handling:** `not-found.tsx` for clean 404 resolution.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                              # Root HTML shell & metadata
│   ├── page.tsx                                # Main portal showcasing both projects
│   ├── loading.tsx                             # Global loading skeleton
│   ├── error.tsx                               # Global error boundary
│   ├── not-found.tsx                           # Global / Wayfinder 404 page
│   │
│   ├── destinations/
│   │   ├── layout.tsx                          # Wayfinder navigation & footer
│   │   ├── page.tsx                            # Destination listing & filters
│   │   └── [id]/page.tsx                       # Destination detail page
│   │
│   ├── regions/
│   │   └── [[...slug]]/page.tsx                # Optional catch-all regional explorer
│   │
│   ├── (planner)/
│   │   └── overview/
│   │       ├── layout.tsx                      # Route group workspace sidebar
│   │       └── page.tsx                        # Itinerary draft & trip overview
│   │
│   └── campus/
│       ├── layout.tsx                          # Campus Directory navigation & footer
│       ├── not-found.tsx                       # Campus 404 fallback
│       ├── students/
│       │   ├── page.tsx                        # Student directory listing & search
│       │   └── [id]/page.tsx                   # Student profile page
│       └── departments/
│           ├── page.tsx                        # Departments overview
│           └── [dept]/[specialization]/
│               └── page.tsx                    # Nested specialization track
│
├── components/                                 # Reusable UI cards, headers, footers
├── data/                                       # Local dummy datasets
└── types/                                      # TypeScript interfaces
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🔗 Quick Links (When Running Locally)

### Wayfinder (Travel Destination Explorer)
* **Destinations Listing:** [http://localhost:3000/destinations](http://localhost:3000/destinations)
* **Destination Detail (Kyoto):** [http://localhost:3000/destinations/kyoto](http://localhost:3000/destinations/kyoto)
* **Regional Explorer (Root):** [http://localhost:3000/regions](http://localhost:3000/regions)
* **Nested Region (Kansai):** [http://localhost:3000/regions/asia/japan/kansai](http://localhost:3000/regions/asia/japan/kansai)
* **Trip Planner Workspace:** [http://localhost:3000/overview](http://localhost:3000/overview)

### Campus Directory (Student Directory)
* **Students Directory:** [http://localhost:3000/campus/students](http://localhost:3000/campus/students)
* **Student Profile (Aarav Mehta):** [http://localhost:3000/campus/students/aarav-mehta](http://localhost:3000/campus/students/aarav-mehta)
* **Departments Catalog:** [http://localhost:3000/campus/departments](http://localhost:3000/campus/departments)
* **Department Track (Web Development):** [http://localhost:3000/campus/departments/computer-science/web-development](http://localhost:3000/campus/departments/computer-science/web-development)
