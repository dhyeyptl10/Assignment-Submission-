import Link from 'next/link';

const STOPS = [
  { day: 'Day 1', city: 'Kyoto', code: '#KYO', note: 'Arrival · Gion district evening walk' },
  { day: 'Day 2', city: 'Kyoto', code: '#KYO', note: 'Fushimi Inari + Arashiyama bamboo grove' },
  { day: 'Day 3', city: 'Nara', code: '#NAR', note: 'Day trip via JR Nara Line (45 min)' },
  { day: 'Day 4', city: 'Osaka', code: '#OSA', note: 'Transfer · Dotonbori evening' },
  { day: 'Day 5', city: 'Osaka', code: '#OSA', note: 'Osaka Castle + Kuromon Market' },
  { day: 'Day 6', city: 'Kobe', code: '#UKB', note: 'Day trip · Kitano + harbor lunch' },
];

const PINNED = [
  { label: 'Kyoto Station', coords: '34.9858° N, 135.7588° E' },
  { label: 'Kansai Int\'l Airport', coords: '34.4347° N, 135.2440° E' },
  { label: 'Osaka Namba', coords: '34.6686° N, 135.4984° E' },
];

export default function PlannerOverviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <p className="font-mono text-xs text-teal-400 tracking-widest">FIELD WORKSPACE · DRAFT ITINERARY</p>
        <h1 className="text-3xl font-bold text-white">Kansai Circuit — 6 Day Draft</h1>
        <p className="text-slate-400 text-sm">Route group <code className="font-mono text-xs bg-[#1f2937] px-1 rounded">(planner)</code> · URL resolves to <code className="font-mono text-xs bg-[#1f2937] px-1 rounded">/overview</code></p>
      </div>

      {/* Stops */}
      <div id="stops" className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-4">
        <p className="font-mono text-xs text-slate-500 tracking-widest">ITINERARY STOPS</p>
        <div className="space-y-3">
          {STOPS.map((stop, i) => (
            <div key={i} className="flex items-start gap-4 py-2 border-b border-[#1f2937] last:border-0">
              <div className="w-14 shrink-0">
                <span className="font-mono text-xs text-slate-500">{stop.day}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Link href={`/destinations/${stop.code.replace('#', '').toLowerCase()}`} className="text-white font-medium text-sm hover:text-teal-300 transition">
                    {stop.city}
                  </Link>
                  <span className="font-mono text-xs text-teal-400">{stop.code}</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">{stop.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pinned nodes */}
      <div id="pins" className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-4">
        <p className="font-mono text-xs text-slate-500 tracking-widest">PINNED NODES</p>
        <div className="space-y-2">
          {PINNED.map((pin) => (
            <div key={pin.label} className="flex items-center justify-between py-2 border-b border-[#1f2937] last:border-0">
              <span className="text-slate-300 text-sm">{pin.label}</span>
              <span className="font-mono text-xs text-slate-500">{pin.coords}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transit pass */}
      <div id="transit" className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-3">
        <p className="font-mono text-xs text-slate-500 tracking-widest">TRANSIT PASS</p>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-teal-500" />
          <span className="text-slate-300 text-sm">Kansai Area Pass (4 days) — JR West coverage</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-slate-300 text-sm">ICOCA IC card — Osaka Metro + private railways</span>
        </div>
      </div>

      {/* GeoJSON export */}
      <div id="export" className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-3">
        <p className="font-mono text-xs text-slate-500 tracking-widest">GEOJSON EXPORT</p>
        <pre className="font-mono text-xs text-slate-400 bg-[#0d1117] rounded p-4 overflow-auto">
{`{
  "type": "FeatureCollection",
  "crs": "EPSG:4326",
  "features": [
    { "type": "Feature", "id": "KYO", "geometry": { "type": "Point", "coordinates": [135.7681, 35.0116] } },
    { "type": "Feature", "id": "NAR", "geometry": { "type": "Point", "coordinates": [135.8048, 34.6851] } },
    { "type": "Feature", "id": "OSA", "geometry": { "type": "Point", "coordinates": [135.5023, 34.6937] } },
    { "type": "Feature", "id": "UKB", "geometry": { "type": "Point", "coordinates": [135.1955, 34.6901] } }
  ]
}`}
        </pre>
      </div>
    </div>
  );
}
