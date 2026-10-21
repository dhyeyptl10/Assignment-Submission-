'use client';

import { useState } from 'react';
import { DESTINATIONS } from '@/data/destinations';
import DestinationCard from '@/components/wayfinder/DestinationCard';
import { RegionFilter } from '@/types/destination';
import { Info } from 'lucide-react';

const FILTERS: RegionFilter[] = [
  'All Regions',
  'East Asia',
  'Southern Europe',
  'Scandinavia',
  'South America',
  'North Africa',
];

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState<RegionFilter>('All Regions');

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (!d.featured) return false;
    if (activeFilter === 'All Regions') return true;
    if (activeFilter === 'South America') {
      return d.region === 'Central America' || d.region === 'South America';
    }
    return d.region === activeFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Catalogue Sub-header */}
      <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-6 border-b border-slate-200 gap-4">
        <div>
          <div className="font-mono text-xs tracking-wider text-slate-400 font-semibold mb-1">
            CATALOGUE // 01 • LIVE SURVEY
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
            Explore destinations
          </h1>
          <p className="text-xs text-slate-500">
            Browse curated travel places organized by geographic region and terrain.
          </p>
        </div>

        <div className="text-right sm:self-end">
          <div className="font-mono text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
            Total Recorded Entities
          </div>
          <div className="font-mono text-base font-bold text-slate-900">
            06 NODES ACTIVE
          </div>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap border ${
              activeFilter === f
                ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-semibold shadow-xs'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid of 6 Destination Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredDestinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>

      {/* Cartographic Validation Notice */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <div className="flex items-center space-x-2">
          <Info className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Destinations are systematically validated against public cartographic terrain datasets.</span>
        </div>
        <div className="font-mono text-[11px] text-slate-400 font-semibold tracking-wider">
          COORDINATE FORMAT: WGS84
        </div>
      </div>
    </div>
  );
}
