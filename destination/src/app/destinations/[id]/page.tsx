import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DESTINATIONS } from '@/data/destinations';

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ id: d.id }));
}

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = DESTINATIONS.find((d) => d.id === params.id);
  if (!destination) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-mono text-xs text-slate-500">
        <Link href="/destinations" className="hover:text-teal-400 transition">destinations</Link>
        <span>/</span>
        <span className="text-slate-300">{destination.id}</span>
      </nav>

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-teal-400">{destination.code}</span>
          <span className="font-mono text-xs bg-[#1f2937] text-slate-400 px-2 py-0.5 rounded">{destination.region}</span>
          {destination.featured && (
            <span className="font-mono text-xs bg-teal-900/40 text-teal-400 border border-teal-500/30 px-2 py-0.5 rounded">FEATURED</span>
          )}
        </div>
        <h1 className="text-4xl font-bold text-white">{destination.name}</h1>
        <p className="text-slate-400">{destination.country}{destination.prefecture ? ` · ${destination.prefecture}` : ''}</p>
      </div>

      {/* Cartographic overview */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-4">
        <p className="font-mono text-xs text-slate-500 tracking-widest">CARTOGRAPHIC OVERVIEW</p>
        <p className="text-slate-300 leading-relaxed">{destination.cartographicOverview}</p>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-[#1f2937]">
          <div>
            <p className="font-mono text-xs text-slate-600 mb-1">COORDINATES</p>
            <p className="font-mono text-xs text-slate-300">{destination.coordinates.display}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate-600 mb-1">ELEVATION</p>
            <p className="font-mono text-xs text-slate-300">{destination.elevation}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate-600 mb-1">SPATIAL TAXONOMY</p>
            <p className="font-mono text-xs text-slate-300">{destination.spatialTaxonomy}</p>
          </div>
          {destination.spatialInsetZone && (
            <div>
              <p className="font-mono text-xs text-slate-600 mb-1">INSET ZONE</p>
              <p className="font-mono text-xs text-slate-300">{destination.spatialInsetZone}</p>
            </div>
          )}
          <div>
            <p className="font-mono text-xs text-slate-600 mb-1">DIVISION CODE</p>
            <p className="font-mono text-xs text-slate-300">{destination.divisionCode}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate-600 mb-1">LOCATION CODE</p>
            <p className="font-mono text-xs text-slate-300">{destination.locationCode}</p>
          </div>
        </div>
      </div>

      {/* Key Info */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-4">
        <p className="font-mono text-xs text-slate-500 tracking-widest">KEY INFORMATION</p>
        <div className="space-y-3">
          <div>
            <p className="font-mono text-xs text-slate-600 mb-1">BEST SEASON</p>
            <p className="text-slate-300 text-sm">{destination.keyInfo.bestSeason}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate-600 mb-1">KNOWN FOR</p>
            <p className="text-slate-300 text-sm">{destination.keyInfo.knownFor}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate-600 mb-1">TYPICAL TRIP LENGTH</p>
            <p className="text-slate-300 text-sm">{destination.keyInfo.typicalTripLength}</p>
          </div>
        </div>
      </div>

      {/* Transit Notes */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 space-y-3">
        <p className="font-mono text-xs text-slate-500 tracking-widest">TRANSIT NOTES</p>
        <p className="text-slate-300 text-sm leading-relaxed">{destination.transitNotes}</p>
      </div>

      {/* Region link */}
      {destination.regionSlugPath && (
        <div className="flex items-center gap-3">
          <Link
            href={destination.regionSlugPath}
            className="font-mono text-xs text-teal-400 hover:text-teal-300 transition border border-teal-500/30 px-3 py-1.5 rounded"
          >
            Explore {destination.subRegion} Region →
          </Link>
        </div>
      )}
    </div>
  );
}
