'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';

export default function WayfinderHeader() {
  const pathname = usePathname();

  const isDestinations = pathname === '/destinations' || pathname.startsWith('/destinations/');
  const isRegions = pathname === '/regions' || pathname.startsWith('/regions/');
  const isAbout = pathname === '/about';

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left Brand and Nav */}
        <div className="flex items-center space-x-10">
          <Link href="/destinations" className="flex items-center space-x-2 text-slate-900 font-semibold text-lg tracking-tight">
            <span className="w-3.5 h-3.5 bg-emerald-700 inline-block rounded-[2px]" />
            <span>Wayfinder</span>
          </Link>

          <nav className="flex items-center space-x-6 text-sm">
            <Link
              href="/destinations"
              className={`py-5 transition-colors font-medium ${
                isDestinations
                  ? 'text-slate-900 border-b-2 border-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Destinations
            </Link>
            <Link
              href="/regions"
              className={`py-5 transition-colors font-medium ${
                isRegions
                  ? 'text-slate-900 border-b-2 border-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Regions
            </Link>
            <Link
              href="/about"
              className={`py-5 transition-colors font-medium ${
                isAbout
                  ? 'text-slate-900 border-b-2 border-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        {/* Right Tools & CTA */}
        <div className="flex items-center space-x-4">
          <div className="text-[11px] font-mono tracking-wider font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
            GEO.INDEX <span className="text-slate-400 font-normal">v2.4</span>
          </div>

          <Link
            href="/overview"
            className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-medium px-4 py-2 rounded transition-colors shadow-sm"
          >
            Plan Trip
          </Link>

          <Link
            href="/"
            title="Switch project or view app router architecture"
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-colors"
          >
            <User className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
