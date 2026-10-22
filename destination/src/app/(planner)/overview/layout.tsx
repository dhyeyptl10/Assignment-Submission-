import Header from '@/components/Header';

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 shrink-0 border-r border-[#1f2937] bg-[#0d1117] flex-col p-5 gap-6">
          <div className="space-y-1">
            <p className="font-mono text-xs text-slate-600 tracking-widest">FIELD WORKSPACE</p>
            <p className="font-mono text-xs text-teal-400">DRAFT · ACTIVE</p>
          </div>
          <nav className="space-y-1 flex-1">
            {[
              { label: 'Overview', href: '/overview', active: true },
              { label: 'Itinerary Stops', href: '/overview#stops', active: false },
              { label: 'Pinned Nodes', href: '/overview#pins', active: false },
              { label: 'Transit Pass', href: '/overview#transit', active: false },
              { label: 'GeoJSON Export', href: '/overview#export', active: false },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 rounded text-sm transition ${
                  item.active
                    ? 'bg-teal-900/30 text-teal-300 border border-teal-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-[#1f2937]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-[#1f2937] pt-4 space-y-1">
            <p className="font-mono text-xs text-slate-600">Route Group</p>
            <p className="font-mono text-xs text-slate-500">(planner)</p>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
