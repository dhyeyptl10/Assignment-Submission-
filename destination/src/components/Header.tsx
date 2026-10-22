import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/95 backdrop-blur border-b border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/destinations" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
            <span className="text-teal-400 text-xs">W</span>
          </div>
          <span className="font-semibold text-white text-sm tracking-wide">WAYFINDER</span>
          <span className="hidden sm:inline font-mono text-xs text-slate-500 ml-1">v2.4.1</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/destinations" className="text-sm text-slate-400 hover:text-white transition">
            Destinations
          </Link>
          <Link href="/regions" className="text-sm text-slate-400 hover:text-white transition">
            Regions
          </Link>
          <Link href="/overview" className="text-sm text-slate-400 hover:text-white transition">
            Planner
          </Link>
        </nav>
      </div>
    </header>
  );
}
