import Link from 'next/link';
import { ContinentalDivision } from '../types/region';

export default function RegionCard({ division }: { division: ContinentalDivision }) {
  return (
    <Link href={division.browseLink} className="block group">
      <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-5 hover:border-teal-500/40 transition-all duration-200">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="font-mono text-xs text-teal-400">{division.code}</span>
            <h3 className="text-white font-semibold text-base group-hover:text-teal-300 transition mt-0.5">
              {division.name}
            </h3>
          </div>
          <span className="font-mono text-xs bg-[#1f2937] text-slate-400 px-2 py-1 rounded shrink-0">
            {division.settlementsCount} nodes
          </span>
        </div>
        <p className="text-slate-400 text-xs mb-3">{division.terrainBadge} · {division.basin}</p>
        <p className="text-slate-500 text-xs leading-relaxed">{division.subRegionsSummary}</p>
        <div className="mt-3 border-t border-[#1f2937] pt-3">
          <span className="font-mono text-xs text-slate-600">{division.jurisdictionCode}</span>
        </div>
      </div>
    </Link>
  );
}
