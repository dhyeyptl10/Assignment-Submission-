import Link from 'next/link';
import WayfinderHeader from '@/components/wayfinder/Header';
import WayfinderFooter from '@/components/wayfinder/Footer';
import { ArrowUpRight, Terminal, Info } from 'lucide-react';

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <WayfinderHeader />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full">
        {/* Breadcrumb */}
        <div className="font-mono text-xs text-slate-400 mb-4">
          Wayfinder / <span className="text-emerald-800 font-semibold">Error 404</span>
        </div>

        {/* 404 Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-6 shadow-xs">
          {/* Top badges */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 font-mono text-xs">
            <div className="inline-flex items-center space-x-1.5 text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>404 · Unresolved Destination Path</span>
            </div>
            <span className="text-slate-400">REF: ERR_PATH_UNRESOLVED</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Destination or region not found
          </h1>
          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed mb-6">
            The requested geographic route identifier could not be resolved within the Wayfinder spatial database. The path may have changed or the slug syntax is invalid.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link
              href="/destinations"
              className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold px-4 py-2.5 rounded flex items-center space-x-1.5 transition-colors shadow-xs"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Return to Destinations</span>
            </Link>

            <Link
              href="/regions"
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded flex items-center space-x-1.5 transition-colors"
            >
              <span>Browse All Regions</span>
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <div className="flex items-center justify-between mb-3 font-mono text-[10px] tracking-wider text-slate-400 font-bold uppercase">
              <span>Suggested Directory Shortcuts</span>
              <span>Spatial Index Verified</span>
            </div>

            {/* Shortcuts table */}
            <div className="border border-slate-200 rounded divide-y divide-slate-100 text-xs font-mono">
              <Link
                href="/destinations/kyoto"
                className="p-3 flex items-center justify-between hover:bg-slate-50 transition-colors group"
              >
                <span className="font-sans font-bold text-slate-800 group-hover:text-emerald-800">
                  Kyoto, Japan
                </span>
                <span className="text-slate-400 group-hover:text-slate-700 flex items-center space-x-2">
                  <span>/destinations/kyoto</span>
                  <span>→</span>
                </span>
              </Link>

              <Link
                href="/destinations/bergen"
                className="p-3 flex items-center justify-between hover:bg-slate-50 transition-colors group"
              >
                <span className="font-sans font-bold text-slate-800 group-hover:text-emerald-800">
                  Bergen, Norway
                </span>
                <span className="text-slate-400 group-hover:text-slate-700 flex items-center space-x-2">
                  <span>/destinations/bergen</span>
                  <span>→</span>
                </span>
              </Link>

              <Link
                href="/regions/asia/japan/kansai"
                className="p-3 flex items-center justify-between hover:bg-slate-50 transition-colors group"
              >
                <span className="font-sans font-bold text-slate-800 group-hover:text-emerald-800">
                  Kansai Region
                </span>
                <span className="text-slate-400 group-hover:text-slate-700 flex items-center space-x-2">
                  <span>/regions/asia/japan/kansai</span>
                  <span>→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Router Diagnostic Note box */}
          <div className="mt-6 bg-[#FAFBFD] border border-slate-200 rounded p-4 font-mono text-[11px] text-slate-600">
            <div className="flex items-center justify-between text-slate-400 uppercase text-[10px] font-bold tracking-wider mb-2">
              <div className="flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Router Diagnostic Note</span>
              </div>
            </div>
            <div className="space-y-0.5 text-slate-500">
              <div>query_target: <span className="text-emerald-800 font-semibold">srcdoc</span></div>
              <div>resolution_tree: null [index match fail at root:destinations/]</div>
              <div>dispatch_timestamp: {new Date().toISOString()}</div>
            </div>
          </div>
        </div>

        {/* Footer Support link */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-2">
          <div className="flex items-center space-x-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Persistent path error?</span>
          </div>
          <Link href="/about" className="text-slate-700 underline hover:text-emerald-800">
            Contact Spatial Index Support
          </Link>
        </div>
      </main>

      <WayfinderFooter />
    </div>
  );
}
