import Link from 'next/link';
import PlannerSidebar from '@/components/wayfinder/PlannerSidebar';
import { Cloud, Plus, User } from 'lucide-react';

export default function PlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Top Header for Planner Workspace */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40 h-16 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/destinations" className="font-bold text-slate-900 text-base">
            Wayfinder
          </Link>
          <div className="flex items-center space-x-1.5 font-mono text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Trip Planner</span>
          </div>
          <span className="text-slate-300">/</span>
          <span className="font-mono text-xs text-slate-500">/(planner)/overview</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-500 font-mono">
            <Cloud className="w-4 h-4 text-slate-400" />
            <span>Synced local index</span>
          </div>

          <div className="h-4 w-px bg-slate-200" />

          <button className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold px-3.5 py-1.5 rounded flex items-center space-x-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            <span>New Route</span>
          </button>

          <Link
            href="/"
            title="Switch Project"
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
          >
            <User className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Main Workspace with Sidebar */}
      <div className="flex flex-1">
        <PlannerSidebar />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
