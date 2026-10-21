import Link from 'next/link';
import { Destination } from '@/types/destination';
import { Landmark, Waves, Mountain, Building2, Sailboat, Trees } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const getIcon = () => {
    switch (destination.id) {
      case 'kyoto':
        return <Landmark className="w-4 h-4 text-slate-700" />;
      case 'bergen':
        return <Waves className="w-4 h-4 text-slate-700" />;
      case 'oaxaca':
        return <Mountain className="w-4 h-4 text-slate-700" />;
      case 'florence':
        return <Building2 className="w-4 h-4 text-slate-700" />;
      case 'essaouira':
        return <Sailboat className="w-4 h-4 text-slate-700" />;
      case 'queenstown':
        return <Mountain className="w-4 h-4 text-slate-700" />;
      default:
        return <Trees className="w-4 h-4 text-slate-700" />;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all group">
      {/* Top Banner Box */}
      <div className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-md px-4 py-3 flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2.5">
          {getIcon()}
          <span className="font-mono text-xs font-semibold text-slate-700 tracking-wide">
            {destination.locationCode}
          </span>
        </div>
        <span className="font-mono text-[11px] font-semibold text-slate-600 bg-white/70 px-2 py-0.5 rounded border border-indigo-100">
          {destination.divisionCode}
        </span>
      </div>

      {/* Title & Metadata */}
      <div className="flex-1 mb-4">
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
            {destination.name}
          </h3>
          <span className="font-mono text-xs text-slate-500 font-medium">
            {destination.countryCode}
          </span>
        </div>

        <p className="text-xs text-slate-500 mb-2.5">
          {destination.country} • {destination.region}
        </p>

        <p className="text-xs text-slate-600 leading-relaxed">
          {destination.description}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/destinations/${destination.id}`}
          className="text-xs font-semibold text-slate-800 hover:text-emerald-800 flex items-center space-x-1 transition-colors"
        >
          <span>View destination</span>
          <span className="text-sm">→</span>
        </Link>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      </div>
    </div>
  );
}
