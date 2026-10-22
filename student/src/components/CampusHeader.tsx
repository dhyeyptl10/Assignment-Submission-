import Link from 'next/link';

export default function CampusHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/students" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
          </div>
          <span className="font-semibold text-slate-800 text-sm">Campus Directory</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/students" className="text-sm text-slate-500 hover:text-blue-600 transition">Students</Link>
          <Link href="/departments" className="text-sm text-slate-500 hover:text-blue-600 transition">Departments</Link>
        </nav>
      </div>
    </header>
  );
}
