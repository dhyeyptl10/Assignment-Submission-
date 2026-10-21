'use client';

import { usePathname } from 'next/navigation';

export default function CampusFooter() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-slate-200 bg-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          Campus Directory © Academic Informatics Core
        </div>

        <div className="flex items-center space-x-2 font-mono text-[11px] text-slate-400">
          <span>Path: {pathname}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
      </div>
    </footer>
  );
}
