import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#1f2937] bg-[#080b14] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-mono text-xs text-slate-500 tracking-widest">WAYFINDER SPATIAL INDEX</p>
            <p className="font-mono text-xs text-slate-600">CRS: EPSG:4326 · WGS84 Datum</p>
          </div>
          <nav className="flex flex-wrap gap-4">
            <Link href="/destinations" className="font-mono text-xs text-slate-500 hover:text-teal-400 transition">
              /destinations
            </Link>
            <Link href="/regions" className="font-mono text-xs text-slate-500 hover:text-teal-400 transition">
              /regions
            </Link>
            <Link href="/overview" className="font-mono text-xs text-slate-500 hover:text-teal-400 transition">
              /overview
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
