import Link from 'next/link';
import { Compass, GraduationCap, MapPin, Layers, Route, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function MasterHubPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between">
      {/* Top Bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-3.5 h-3.5 bg-emerald-500 rounded-sm" />
            <span className="font-bold text-sm tracking-wide">Next.js App Router Core Projects</span>
            <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">v14.2</span>
          </div>

          <div className="text-xs text-slate-400 flex items-center space-x-3">
            <span>Assignment Submission</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-emerald-400 font-mono">Ready for Evaluation</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full flex flex-col justify-center">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs px-3 py-1 rounded-full mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Complete App Router Routing & Layouts Reference</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Next.js App Router Architecture Showcase
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Select one of the implemented reference applications below. Both projects follow strict Next.js App Router conventions: dynamic segments <code className="text-emerald-400 font-mono text-xs bg-slate-800 px-1 py-0.5 rounded">[id]</code>, optional catch-all routes <code className="text-emerald-400 font-mono text-xs bg-slate-800 px-1 py-0.5 rounded">[[...slug]]</code>, route groups <code className="text-emerald-400 font-mono text-xs bg-slate-800 px-1 py-0.5 rounded">(planner)</code>, nested layouts, and custom not-found handling.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Project 1: Travel Destination Explorer */}
          <div className="bg-slate-950/60 border border-slate-800 hover:border-emerald-500/60 transition-all rounded-xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded">
                  PROJECT 1 • SELECTED
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                Travel Destination Explorer (Wayfinder)
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Spatial index and cartographic travel explorer with continental divisions, regional subdivisions, and route draft planner.
              </p>

              {/* Architecture specs */}
              <div className="space-y-2 mb-6 font-mono text-xs text-slate-400 bg-slate-900/80 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between">
                  <span>Static Listing:</span>
                  <span className="text-slate-200">/destinations</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dynamic Route [id]:</span>
                  <span className="text-slate-200">/destinations/[id]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Optional Catch-All [[...slug]]:</span>
                  <span className="text-slate-200">/regions/[[...slug]]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Route Group (planner):</span>
                  <span className="text-slate-200">/(planner)/overview</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Custom Error & 404:</span>
                  <span className="text-emerald-400">not-found.tsx</span>
                </div>
              </div>
            </div>

            <Link
              href="/destinations"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-emerald-900/30"
            >
              <span>Launch Travel Explorer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Project 2: Student Directory */}
          <div className="bg-slate-950/60 border border-slate-800 hover:border-blue-500/60 transition-all rounded-xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2.5 py-1 rounded">
                  PROJECT 2 • SELECTED
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Student Directory (Campus Directory)
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Academic informatics portal with interactive search, department program filters, and specialization tracks.
              </p>

              {/* Architecture specs */}
              <div className="space-y-2 mb-6 font-mono text-xs text-slate-400 bg-slate-900/80 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between">
                  <span>Static Listing:</span>
                  <span className="text-slate-200">/campus/students</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dynamic Route [id]:</span>
                  <span className="text-slate-200">/campus/students/[id]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Departments List:</span>
                  <span className="text-slate-200">/campus/departments</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Nested Dynamic Route:</span>
                  <span className="text-slate-200">/campus/departments/[dept]/[spec]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Custom Fallback 404:</span>
                  <span className="text-blue-400">not-found.tsx</span>
                </div>
              </div>
            </div>

            <Link
              href="/campus/students"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-blue-900/30"
            >
              <span>Launch Campus Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* App Router Checklist */}
        <div className="border border-slate-800 bg-slate-950/40 rounded-xl p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>App Router Technical Implementation Checklist</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center space-x-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Static Routes</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dynamic Routes [id]</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Optional Catch-All [[...slug]]</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Route Groups (group)</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Shared & Nested Layouts</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>not-found.tsx & notFound()</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>loading.tsx Skeletons</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>TypeScript Strict Typing</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-slate-500 text-xs py-4 px-6 text-center">
        Next.js App Router Assignment Submission · Repo: <code className="text-slate-400">dhyeyptl10/Assignment-Submission-</code>
      </footer>
    </div>
  );
}
