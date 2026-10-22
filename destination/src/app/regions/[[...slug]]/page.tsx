import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTINENTAL_DIVISIONS, KANSAI_REGION } from '@/data/regions';
import RegionCard from '@/components/RegionCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['asia', 'japan', 'kansai'] },
  ];
}

export default function RegionsPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug ?? [];

  // Root: /regions
  if (slug.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
          <div className="space-y-1">
            <p className="font-mono text-xs text-teal-400 tracking-widest">WAYFINDER · CONTINENTAL DIVISIONS</p>
            <h1 className="text-3xl font-bold text-white">Regional Explorer</h1>
            <p className="text-slate-400 text-sm">{CONTINENTAL_DIVISIONS.length} continental divisions indexed · Optional catch-all route</p>
          </div>
          <div className="bg-[#111827] border border-[#1f2937] rounded-lg px-4 py-2 font-mono text-xs text-slate-500">
            Route: <span className="text-teal-400">/regions/[[...slug]]</span> — slug is undefined at root
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CONTINENTAL_DIVISIONS.map((div) => (
              <RegionCard key={div.id} division={div} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Nested: /regions/asia/japan/kansai
  if (slug.join('/') === 'asia/japan/kansai') {
    const region = KANSAI_REGION;
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-1 font-mono text-xs text-slate-500">
            <Link href="/regions" className="hover:text-teal-400 transition">regions</Link>
            {slug.map((s, i) => (
              <span key={i} className="flex items-center gap-1">
                <span>/</span>
                <span className={i === slug.length - 1 ? 'text-slate-300' : ''}>{s}</span>
              </span>
            ))}
          </nav>

          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-teal-400">{region.indexId}</span>
              <span className="font-mono text-xs bg-[#1f2937] text-slate-400 px-2 py-0.5 rounded">{region.type}</span>
            </div>
            <h1 className="text-4xl font-bold text-white">{region.name}</h1>
            <p className="text-slate-400 text-sm">{region.pathDisplay}</p>
          </div>

          <p className="text-slate-300 leading-relaxed">{region.description}</p>

          {/* Metrics */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-4">
            <p className="font-mono text-xs text-slate-500 tracking-widest">SPATIAL METRICS</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Object.entries(region.metrics).map(([k, v]) => (
                <div key={k}>
                  <p className="font-mono text-xs text-slate-600 mb-1">{k.replace(/([A-Z])/g, ' $1').toUpperCase()}</p>
                  <p className="font-mono text-xs text-slate-300">{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prefectures */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-3">
            <p className="font-mono text-xs text-slate-500 tracking-widest">PREFECTURES ({region.prefecturesCount})</p>
            <div className="flex flex-wrap gap-2">
              {region.prefecturesList.map((p) => (
                <span key={p} className="font-mono text-xs bg-[#1f2937] text-slate-300 px-2 py-1 rounded">{p}</span>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-slate-500 tracking-widest">REGIONAL DESTINATIONS</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {region.destinations.map((d) => (
                <Link key={d.id} href={`/destinations/${d.id}`}>
                  <div className="bg-[#111827] border border-[#1f2937] rounded-lg p-4 hover:border-teal-500/40 transition">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-teal-400">{d.tag}</span>
                      <span className="font-mono text-xs text-slate-500">{d.type}</span>
                    </div>
                    <p className="text-white font-medium text-sm">{d.name}</p>
                    <p className="text-slate-400 text-xs mt-1">{d.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Rail & Climate notes */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-4">
            <p className="font-mono text-xs text-slate-500 tracking-widest">RAIL INTERCONNECTIVITY</p>
            <p className="text-slate-300 text-sm leading-relaxed">{region.railInterconnectivity}</p>
          </div>
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-3">
            <p className="font-mono text-xs text-slate-500 tracking-widest">MICROCLIMATES</p>
            <p className="text-slate-300 text-sm leading-relaxed">{region.microclimates}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  notFound();
}
