# Next.js App Router — Multi-Project Architecture Implementation

> **Submission for Frontend Development Assignment**  
> **Student:** Dhyey Patel (`dhyeyptl10`)  
> **Repository:** [https://github.com/dhyeyptl10/Assignment-Submission-](https://github.com/dhyeyptl10/Assignment-Submission-)  
> **Framework:** Next.js 14.2 (App Router) • TypeScript • Tailwind CSS

---

## 📌 Selected Projects Overview

This repository provides an implementation of two distinct projects from the official requirements using Next.js App Router:

| Project | Name | Domain | Primary Routing Concepts |
|---|---|---|---|
| **Project 1** | **Travel Destination Explorer (Wayfinder)** | Spatial cartography & travel catalog | Dynamic routes `[id]`, Optional catch-all `[[...slug]]`, Route groups `(planner)`, Nested layouts, Custom `not-found.tsx` |
| **Project 2** | **Student Directory (Campus Directory)** | Academic informatics portal | Dynamic routes `[id]`, Nested dynamic segments `[dept]/[specialization]`, Query filters, Custom `not-found.tsx` |

---

## 🗺️ Project 1: Travel Destination Explorer (Wayfinder)

Wayfinder is a cartographic travel catalog indexing global settlements, coordinates, terrain profiles, and regional divisions.

### Route Breakdown & Architecture
1. **Explore Destinations (Catalog Root)**: `/destinations`
   - *Strategy:* Static Server Component with client-side interactive filter pills (`All Regions`, `East Asia`, `Southern Europe`, `Scandinavia`, `South America`, `North Africa`).
   - *Design Reference:* `1_destination_listing.png`
2. **Destination Detail**: `/destinations/[id]`
   - *Strategy:* Dynamic Route Segment displaying elevation telemetry, cartographic overview, key information, and practical transit notes. Includes `generateStaticParams()` for compile-time optimization.
   - *Design Reference:* `3_destination_detail_kyoto.png`
3. **Continental & Sub-Regional Hierarchy**: `/regions/[[...slug]]`
   - *Strategy:* **Optional Catch-All Route**.
     - When `slug` is `undefined` (`/regions`): Renders the Continental Divisions overview with satellite terrain previews (`4_regions_landing_optional_path_root.png`).
     - When `slug` is nested (`/regions/asia/japan/kansai`): Renders sub-regional settlement metrics, rail interconnectivity notes, and weather microclimate telemetry (`2_nested_region_explorer_kansai.png`).
4. **Field Workspace Itinerary Draft**: `/(planner)/overview`
   - *Strategy:* **Route Group `(planner)`** isolating workspace state from the public explorer. Renders a custom persistent sidebar layout (`PlannerSidebar.tsx`) with itinerary night stops, pinned geocode bookmarks, transit pass synthesis, and GeoJSON export (`5_trip_planner_overview_layout.png`).
5. **Spatial Exception Handler**: `not-found.tsx`
   - *Strategy:* Custom 404 with Router Diagnostic Note, unresolved path telemetry, and verified recovery shortcuts (`6_destination_region_not_found.png`).

---

## 🎓 Project 2: Student Directory (Campus Directory)

Campus Directory is an academic informatics interface for university programs, student research profiles, and department tracks.

### Route Breakdown & Architecture
1. **Students Listing**: `/campus/students`
   - *Strategy:* Interactive directory with instant search input and department filter dropdown (`Computer Science`, `Design`, `Business`).
   - *Design Reference:* `2_students_listing.png`
2. **Student Profile**: `/campus/students/[id]`
   - *Strategy:* Dynamic route with student academic standing, research focus, advisor info, and enrolled subjects with credit weighting.
   - *Design Reference:* `1_student_profile.png`
3. **Departments Listing**: `/campus/departments`
   - *Strategy:* Program catalog with faculty specialization counts, enrollment totals, and curriculum metrics.
   - *Design Reference:* `3_department_listing.png`
4. **Nested Department Specialization**: `/campus/departments/[dept]/[specialization]`
   - *Strategy:* Nested dynamic routes (e.g. `/campus/departments/computer-science/web-development`) detailing specialization track codes, academic leads, core research labs, and filtered enrollees.
   - *Design Reference:* `4_nested_department_page.png`
5. **Directory Fallback 404**: `/campus/not-found.tsx`
   - *Strategy:* Academic exception page with suggested internal starting points (`5_directory_fallback_not_found.png`).

---

## 🏗️ Technical Architecture & Next.js App Router Highlights

```
src/
├── app/
│   ├── layout.tsx                   # Root HTML shell & global font styles
│   ├── page.tsx                     # Master Project Hub & Selector
│   ├── loading.tsx                  # Global Suspense & skeleton fallback
│   ├── error.tsx                    # Segment error boundary with reset()
│   ├── not-found.tsx                # Wayfinder spatial 404 handler
│   │
│   ├── destinations/
│   │   ├── layout.tsx               # Wayfinder persistent navbar & footer
│   │   ├── page.tsx                 # /destinations (Static listing + filters)
│   │   └── [id]/
│   │       └── page.tsx             # /destinations/[id] (Dynamic route)
│   │
│   ├── regions/
│   │   └── [[...slug]]/
│   │       └── page.tsx             # /regions/[[...slug]] (Optional Catch-All)
│   │
│   ├── (planner)/
│   │   └── overview/
│   │       ├── layout.tsx           # Route group layout with Workspace Sidebar
│   │       └── page.tsx             # /(planner)/overview (Trip draft & notes)
│   │
│   └── campus/
│       ├── layout.tsx               # Campus Directory navbar & footer
│       ├── page.tsx                 # Redirect to /campus/students
│       ├── not-found.tsx            # Campus Directory 404 fallback
│       ├── students/
│       │   ├── page.tsx             # /campus/students (Search & listing)
│       │   └── [id]/
│       │       └── page.tsx         # /campus/students/[id] (Student profile)
│       └── departments/
│           ├── page.tsx             # /campus/departments (Faculties listing)
│           └── [dept]/
│               └── [specialization]/
│                   └── page.tsx     # Nested dynamic department route
│
├── components/                      # Reusable components
├── data/                            # Static dummy data
└── types/                           # Strict TypeScript interfaces
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📋 Evaluation Quick-Links (Locally)
- **Master Showcase Portal:** [http://localhost:3000/](http://localhost:3000/)
- **Wayfinder Destinations:** [http://localhost:3000/destinations](http://localhost:3000/destinations)
- **Wayfinder Destination Detail (Kyoto):** [http://localhost:3000/destinations/kyoto](http://localhost:3000/destinations/kyoto)
- **Wayfinder Regional Catch-All Root:** [http://localhost:3000/regions](http://localhost:3000/regions)
- **Wayfinder Nested Catch-All (Kansai):** [http://localhost:3000/regions/asia/japan/kansai](http://localhost:3000/regions/asia/japan/kansai)
- **Wayfinder Route Group Planner:** [http://localhost:3000/overview](http://localhost:3000/overview)
- **Wayfinder 404 Trigger:** [http://localhost:3000/destinations/invalid-slug](http://localhost:3000/destinations/invalid-slug)
- **Campus Students Directory:** [http://localhost:3000/campus/students](http://localhost:3000/campus/students)
- **Campus Student Profile (Aarav Mehta):** [http://localhost:3000/campus/students/aarav-mehta](http://localhost:3000/campus/students/aarav-mehta)
- **Campus Departments:** [http://localhost:3000/campus/departments](http://localhost:3000/campus/departments)
- **Campus Nested Department (Web Development):** [http://localhost:3000/campus/departments/computer-science/web-development](http://localhost:3000/campus/departments/computer-science/web-development)
