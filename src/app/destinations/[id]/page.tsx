import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DESTINATIONS } from '@/data/destinations';
import { ArrowLeft, Calendar, Compass, Clock, Train, ArrowRight, Camera } from 'lucide-react';

interface DestinationDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({
    id: d.id,
  }));
}

export default function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const destination = DESTINATIONS.find((d) => d.id.toLowerCase() === params.id.toLowerCase());

  if (!destination) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumbs & Back Link */}
      <div className="mb-8">
        <div className="text-xs text-slate-500 font-mono mb-2">
          <Link href="/destinations" className="hover:text-slate-800 transition-colors">
            Destinations
          </Link>{' '}
          / {destination.region}{' '}
          / {destination.country}{' '}
          / <span className="text-slate-800 font-semibold">{destination.name}</span>
        </div>

        <Link
          href="/destinations"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to destinations</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-8 pb-6 border-b border-slate-200 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 font-medium text-xs px-2.5 py-0.5 rounded-full mb-3 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>
              {destination.country} · {destination.region}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            {destination.name}
          </h1>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded text-slate-700">
            GEO: {destination.coordinates.display}
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded text-slate-700">
            INDEX: {destination.id === 'kyoto' ? 'KIX-KANSAI' : `NODE-${destination.divisionCode}`}
          </div>
        </div>
      </div>

      {/* Cartographic Overview Box */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="font-mono text-[10px] tracking-wider text-slate-400 font-bold uppercase mb-2">
              Cartographic Overview
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
              {destination.cartographicOverview}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center space-x-8 text-xs font-mono text-slate-500">
            <div>
              <span className="text-slate-400">Elevation:</span>{' '}
              <span className="text-slate-800 font-semibold">{destination.elevation}</span>
            </div>
            {destination.prefecture && (
              <div>
                <span className="text-slate-400">Prefecture:</span>{' '}
                <span className="text-slate-800 font-semibold">{destination.prefecture}</span>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-5 h-44 rounded overflow-hidden relative bg-slate-100 border border-slate-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop"
            alt={destination.name}
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute top-2.5 left-2.5 font-mono text-[10px] text-white bg-black/60 px-2 py-0.5 rounded flex items-center space-x-1 backdrop-blur-xs">
            <Camera className="w-3 h-3" />
            <span>Spatial Inset</span>
          </div>
          <div className="absolute top-2.5 right-2.5 font-mono text-[10px] text-slate-200 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
            480 × 200 Ref
          </div>
          <div className="absolute bottom-2.5 right-2.5 font-mono text-[11px] font-semibold text-slate-900 bg-white/95 px-2.5 py-1 rounded shadow-sm border border-slate-200">
            {destination.spatialInsetZone || 'Zone 03 / Core'}
          </div>
        </div>
      </div>

      {/* Key Information Table */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-slate-900 flex items-center space-x-2 mb-3">
          <span className="w-1.5 h-3.5 bg-emerald-700 rounded-xs inline-block" />
          <span>Key Information</span>
        </h2>

        <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-100 text-xs">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
            <div className="sm:col-span-3 flex items-center space-x-2 text-slate-500 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Best season</span>
            </div>
            <div className="sm:col-span-9 text-slate-800 font-medium">
              {destination.keyInfo.bestSeason}
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
            <div className="sm:col-span-3 flex items-center space-x-2 text-slate-500 font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>Known for</span>
            </div>
            <div className="sm:col-span-9 text-slate-800 font-medium">
              {destination.keyInfo.knownFor}
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
            <div className="sm:col-span-3 flex items-center space-x-2 text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Typical trip length</span>
            </div>
            <div className="sm:col-span-9 text-slate-800 font-medium">
              {destination.keyInfo.typicalTripLength}
            </div>
          </div>
        </div>
      </div>

      {/* Practical Transit Notes */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 mb-8 flex items-start space-x-4">
        <div className="w-9 h-9 rounded border border-slate-200 flex items-center justify-center bg-slate-50 text-slate-700 shrink-0 mt-0.5">
          <Train className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-900 mb-1">Practical Transit Notes</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {destination.transitNotes}
          </p>
        </div>
      </div>

      {/* Bottom Bar: Spatial Taxonomy Division */}
      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <div>
          Spatial Taxonomy Division:{' '}
          <span className="font-semibold text-slate-800">{destination.spatialTaxonomy}</span>
        </div>

        <Link
          href={destination.regionSlugPath || '/regions/asia/japan/kansai'}
          className="font-semibold text-slate-800 hover:text-emerald-800 flex items-center space-x-1 transition-colors"
        >
          <span>Explore Kansai Region</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
