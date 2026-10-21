'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Bookmark, SlidersHorizontal, BookOpen, ArrowLeft } from 'lucide-react';

export default function PlannerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-200 bg-[#FAFBFD] flex flex-col justify-between h-[calc(100vh-64px)] sticky top-16 p-4">
      <div>
        {/* Workspace title */}
        <div className="mb-6 px-3">
          <div className="font-mono text-[10px] tracking-widest text-slate-400 font-semibold uppercase mb-1">
            Workspace
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-800 text-sm">Field Workspace</span>
            <span className="font-mono text-xs text-slate-400">v1.2</span>
          </div>
        </div>

        {/* Primary nav list */}
        <nav className="space-y-1 mb-8">
          <Link
            href="/overview"
            className="flex items-center justify-between px-3 py-2 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-100"
          >
            <div className="flex items-center space-x-2.5">
              <LayoutGrid className="w-4 h-4 text-emerald-800" />
              <span>Overview</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
          </Link>

          <Link
            href="/overview#saved"
            className="flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <Bookmark className="w-4 h-4 text-slate-400" />
              <span>Saved Places</span>
            </div>
            <span className="font-mono text-[11px] text-slate-500 bg-slate-200/60 px-1.5 py-0.2 rounded">
              3
            </span>
          </Link>

          <Link
            href="/overview#preferences"
            className="flex items-center space-x-2.5 px-3 py-2 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <span>Preferences</span>
          </Link>
        </nav>

        {/* Index Resources */}
        <div className="px-3 mb-2 font-mono text-[10px] tracking-widest text-slate-400 font-semibold uppercase">
          Index Resources
        </div>
        <nav className="space-y-1">
          <Link
            href="/about"
            className="flex items-center space-x-2.5 px-3 py-2 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Documentation</span>
          </Link>

          <Link
            href="/destinations"
            className="flex items-center space-x-2.5 px-3 py-2 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Exit to Public Explorer</span>
          </Link>
        </nav>
      </div>

      {/* Cartographic mesh status card */}
      <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs">
        <div className="flex items-center space-x-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-semibold text-slate-800 text-[11px]">Cartographic Mesh</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Japan Rail & Regional Sub-grids active. No conflicts found.
        </p>
      </div>
    </aside>
  );
}
