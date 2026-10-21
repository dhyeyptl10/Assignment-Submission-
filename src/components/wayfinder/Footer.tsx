import Link from 'next/link';

export default function WayfinderFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          <span className="font-semibold text-slate-800">Wayfinder</span> · © 2025 Wayfinder Spatial Index. All rights reserved.
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/destinations" className="hover:text-slate-900 transition-colors">
            Index
          </Link>
          <Link href="/regions" className="hover:text-slate-900 transition-colors">
            Cartography
          </Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            Data Sources
          </Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
