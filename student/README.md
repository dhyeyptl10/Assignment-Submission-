# Campus Directory — Student Academic Portal

**Project 2 of 2** · Next.js 14 App Router · TypeScript · Tailwind CSS

---

## What is Campus Directory?

A university academic management portal for browsing students, exploring departments, and viewing nested specialization tracks — built entirely with Next.js App Router routing features.

---

## Routes Implemented

| Route | Type | Description |
|---|---|---|
| `/students` | Static | Live search + department filter dropdown |
| `/students/[id]` | Dynamic `[id]` | Full student profile — year, GPA, advisor, subjects |
| `/departments` | Static | All faculties with specialization track links |
| `/departments/[dept]/[specialization]` | Nested Dynamic | Track detail with enrolled students |

---

## App Router Concepts Used

- **Dynamic Routes `[id]`** — `/students/[id]` with `generateStaticParams()` for all student slugs
- **Nested Dynamic Routes `[dept]/[specialization]`** — Multi-level academic hierarchy (`/departments/computer-science/web-development`)
- **Shared Layout** — `CampusHeader` and `CampusFooter` injected via layout files
- **Client-side Search** — `'use client'` + `useState` for real-time filtering without server round-trips
- **Custom `not-found.tsx`** — Clean 404 with links back to directory
- **`loading.tsx`** — Suspense skeleton
- **`error.tsx`** — Error boundary

---

## Project Structure

```
student/
├── src/
│   ├── app/
│   │   ├── layout.tsx                          # Root HTML shell
│   │   ├── page.tsx                            # Redirects to /students
│   │   ├── loading.tsx                         # Loading skeleton
│   │   ├── error.tsx                           # Error boundary
│   │   ├── not-found.tsx                       # Custom 404
│   │   ├── students/
│   │   │   ├── layout.tsx                      # Shared header + footer
│   │   │   ├── page.tsx                        # /students (search + filter)
│   │   │   └── [id]/
│   │   │       └── page.tsx                    # /students/[id]
│   │   └── departments/
│   │       ├── layout.tsx                      # Shared header + footer
│   │       ├── page.tsx                        # /departments catalog
│   │       └── [dept]/
│   │           └── [specialization]/
│   │               └── page.tsx                # /departments/[dept]/[specialization]
│   ├── components/                             # CampusHeader, CampusFooter, StudentCard
│   ├── data/                                   # students.ts (students + departments)
│   └── types/                                  # student.ts
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
# → http://localhost:3001
```

| URL | What you'll see |
|---|---|
| `localhost:3001/students` | Full student directory with search |
| `localhost:3001/students/aarav-mehta` | Aarav's profile with subjects & credits |
| `localhost:3001/departments` | All 3 department faculty cards |
| `localhost:3001/departments/computer-science/web-development` | Web Dev track detail + enrolled students |
| `localhost:3001/departments/design/interaction-design` | Interaction Design track |
| `localhost:3001/departments/business/fintech` | FinTech specialization |

---

## Sample Students

| ID | Name | Department | Year |
|---|---|---|---|
| STU-1042 | Aarav Mehta | Computer Science | 3rd Year |
| STU-1089 | Elena Rostova | Design | 2nd Year |
| STU-1120 | Marcus Chen | Business | 4th Year |
| STU-1155 | Priya Sharma | Computer Science | 1st Year |
| STU-1201 | Lucas Dubois | Design | 3rd Year |
| STU-1244 | Maya Lin | Business | 2nd Year |
| STU-1310 | Tariq Al-Mansoor | Computer Science | 4th Year |
| STU-1388 | Sophia Müller | Computer Science | 2nd Year |
