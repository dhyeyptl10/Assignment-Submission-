import WayfinderHeader from '@/components/wayfinder/Header';
import WayfinderFooter from '@/components/wayfinder/Footer';
import Link from 'next/link';
import { Layers, CheckCircle2, GitBranch, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <WayfinderHeader />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full">
        <div className="mb-6">
          <Link
            href="/destinations"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Destinations</span>
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-8 shadow-xs">
          <div className="font-mono text-[10px] tracking-wider text-slate-400 font-bold uppercase mb-2">
            Architecture Documentation
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Next.js App Router Spatial & Academic Engine
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            This platform is an official implementation of the Frontend Practice Next.js App Router assignment, providing two distinct enterprise-grade projects designed according to strict cartographic and academic wireframe specifications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
            <div className="bg-slate-50 border border-slate-200 rounded p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Project 1: Wayfinder</span>
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 font-mono">
                <li>• /destinations (Static Listing)</li>
                <li>• /destinations/[id] (Dynamic Segment)</li>
                <li>• /regions/[[...slug]] (Optional Catch-All)</li>
                <li>• /(planner)/overview (Route Group)</li>
                <li>• not-found.tsx (404 Spatial Exception)</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Project 2: Campus Directory</span>
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 font-mono">
                <li>• /campus/students (Student Directory)</li>
                <li>• /campus/students/[id] (Profile Route)</li>
                <li>• /campus/departments (Faculties Index)</li>
                <li>• /campus/departments/[dept]/[spec]</li>
                <li>• /campus/not-found.tsx (Academic 404)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <WayfinderFooter />
    </div>
  );
}
