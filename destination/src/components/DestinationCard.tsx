import Link from 'next/link';
import { Destination } from '../types/destination';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href={`/destinations/${destination.id}`} className="block group">
      <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-5 hover:border-teal-500/40 transition-all duration-200 h-full flex flex-col gap-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-teal-400">{destination.code}</span>
              <span className="font-mono text-xs text-slate-600">{destination.countryCode}</span>
            </div>
            <h3 className="text-white font-semibold text-base group-hover:text-teal-300 transition">
              {destination.name}
            </h3>
            <p className="text-slate-400 text-xs">{destination.country}</p>
          </div>
          <span className="text-xs font-mono bg-[#1f2937] text-slate-400 px-2 py-1 rounded shrink-0">
            {destination.region}
          </span>
        </div>
        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{destination.description}</p>
        {/* Footer row */}
        <div className="flex items-center justify-between border-t border-[#1f2937] pt-3">
          <span className="font-mono text-xs text-slate-500">{destination.coordinates.display}</span>
          <span className="font-mono text-xs text-slate-500">{destination.elevation}</span>
        </div>
      </div>
    </Link>
  );
}
