'use client';

import { useState } from 'react';
import { DESTINATIONS } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import { RegionFilter } from '@/types/destination';

const FILTERS: RegionFilter[] = [
  'All Regions',
  'East Asia',
  'Southern Europe',
  'Scandinavia',
  'South America',
  'North Africa',
];

export default function DestinationsPage() {
  const [active, setActive] = useState<RegionFilter>('All Regions');

  const filtered =
    active === 'All Regions'
      ? DESTINATIONS.filter((d) => d.featured)
      : DESTINATIONS.filter((d) => d.region === active && d.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page header */}
      <div className="space-y-1">
        <p className="font-mono text-xs text-teal-400 tracking-widest">WAYFINDER · DESTINATION INDEX</p>
        <h1 className="text-3xl font-bold text-white">Explore Destinations</h1>
        <p className="text-slate-400 text-sm">
          {DESTINATIONS.filter((d) => d.featured).length} verified spatial nodes · WGS84 coordinate system
        </p>
      </div>

      {/* Region filter pills */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition border ${
              active === f
                ? 'bg-teal-600 border-teal-500 text-white'
                : 'bg-transparent border-[#1f2937] text-slate-400 hover:border-teal-500/40 hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Destination grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-slate-500 font-mono text-sm">No destinations found for this region filter.</p>
        </div>
      )}
    </div>
  );
}
