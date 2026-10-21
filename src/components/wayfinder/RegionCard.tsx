import Link from 'next/link';
import { ContinentalDivision } from '@/types/region';
import { Compass, Waves, Snowflake, Mountain } from 'lucide-react';

interface RegionCardProps {
  division: ContinentalDivision;
}

export default function RegionCard({ division }: RegionCardProps) {
  const getIcon = () => {
    switch (division.id) {
      case 'east-asia':
        return <Compass className="w-4 h-4 text-slate-700" />;
      case 'southern-europe':
        return <Waves className="w-4 h-4 text-slate-700" />;
      case 'scandinavia':
        return <Snowflake className="w-4 h-4 text-slate-700" />;
      case 'central-south-america':
        return <Mountain className="w-4 h-4 text-slate-700" />;
      default:
        return <Compass className="w-4 h-4 text-slate-700" />;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all group">
      <div>
        {/* Top Info */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center bg-slate-50 mt-0.5">
              {getIcon()}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {division.name}
              </h3>
              <p className="font-mono text-[11px] text-slate-500 tracking-wider">
                {division.code} · {division.basin}
              </p>
            </div>
          </div>

          <span className="font-mono text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
            {division.settlementsCount} settlements
          </span>
        </div>

        {/* Panoramic Terrain Image */}
        <div className="relative h-28 w-full rounded overflow-hidden mb-4 bg-slate-100 border border-slate-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={division.image}
            alt={division.name}
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2.5 font-mono text-[10px] tracking-wider font-semibold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
            {division.terrainBadge}
          </div>
        </div>

        {/* Sub-regions summary */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {division.subRegionsSummary}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider">
          {division.jurisdictionCode}
        </span>
        <Link
          href={division.browseLink}
          className="font-semibold text-slate-800 hover:text-emerald-800 flex items-center space-x-1 transition-colors"
        >
          <span>Browse {division.name.split('&')[0].trim()}</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
