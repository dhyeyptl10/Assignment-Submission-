import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-1">
          <p className="font-mono text-xs text-red-400 tracking-widest">SPATIAL EXCEPTION — 404 NOT FOUND</p>
          <h1 className="text-3xl font-bold text-white">Destination not found</h1>
          <p className="text-slate-400 text-sm">
            The path you requested does not exist in the spatial index. It may have been removed or the
            coordinates are incorrect.
          </p>
        </div>
        <div className="border border-[#1f2937] rounded-lg p-4 bg-[#111827] space-y-2">
          <p className="font-mono text-xs text-slate-500 tracking-widest">ROUTER DIAGNOSTIC NOTE</p>
          <p className="font-mono text-xs text-slate-400">STATUS: UNRESOLVED_PATH</p>
          <p className="font-mono text-xs text-slate-400">ACTION: REDIRECT_TO_CATALOG</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/destinations"
            className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-sm rounded transition"
          >
            Browse Destinations
          </Link>
          <Link
            href="/regions"
            className="px-4 py-2 border border-[#1f2937] hover:border-teal-500 text-slate-300 text-sm rounded transition"
          >
            Explore Regions
          </Link>
        </div>
      </div>
    </div>
  );
}
