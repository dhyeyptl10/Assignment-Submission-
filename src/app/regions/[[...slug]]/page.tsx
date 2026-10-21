import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTINENTAL_DIVISIONS, NESTED_REGIONS } from '@/data/regions';
import RegionCard from '@/components/wayfinder/RegionCard';
import { ArrowLeft, GitFork, ArrowUpRight, Train, Thermometer } from 'lucide-react';

interface RegionsOptionalCatchAllPageProps {
  params: {
    slug?: string[];
  };
}

export function generateStaticParams() {
  return [
    { slug: undefined },
    { slug: ['asia', 'japan', 'kansai'] },
  ];
}

export default function RegionsOptionalCatchAllPage({ params }: RegionsOptionalCatchAllPageProps) {
  const slugArray = params.slug || [];
  const slugKey = slugArray.join('/').toLowerCase();

  // 1. Root Level (slug is undefined / empty) -> Matches 4_regions_landing_optional_path_root.png
  if (slugArray.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Catalog breadcrumbs & badge */}
        <div className="mb-4">
          <div className="text-xs font-mono text-slate-400 mb-2">
            catalog / <span className="text-slate-800 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">Regions</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 font-mono text-[10px] tracking-wider font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>INDEX ROOT · LEVEL 0</span>
          </div>

          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                Geographic Regions
              </h1>
              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                Explore global destinations cataloged by continent, subcontinent, and terrain systems. Select a continental division to drill down into nested jurisdictions.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-right sm:self-end">
              <div>
                <div className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                  Settlements
                </div>
                <div className="font-mono text-base font-bold text-slate-900">70 Indexed</div>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <div className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                  Jurisdictions
                </div>
                <div className="font-mono text-base font-bold text-slate-900">4 Divisions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Route Architecture Callout (Directly from design 4_regions_landing_optional_path_root.png) */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 mb-8 flex items-start space-x-3.5 shadow-2xs">
          <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center bg-slate-50 text-slate-700 shrink-0 mt-0.5">
            <GitFork className="w-4 h-4 text-emerald-800" />
          </div>
          <div className="flex-1 text-xs">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-bold text-slate-800">Route Architecture</span>
              <span className="font-mono text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200 font-semibold">
                optional catch-all
              </span>
            </div>
            <p className="text-slate-600 font-mono text-[11px] mb-1">
              Optional catch-all route pattern:{' '}
              <span className="text-emerald-800 font-semibold bg-emerald-50 px-1 py-0.5 rounded">
                /regions/[[...slug]]
              </span>{' '}
              — currently at root segment level.
            </p>
            <p className="font-mono text-[10px] text-slate-400">
              PARAMS: slug: undefined · RESOLUTION: ContinentalDivisionRegistry::Root
            </p>
          </div>
        </div>

        {/* Continental Divisions Sub-header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-sm font-bold text-slate-900">Continental Divisions</h2>
            <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              4 systems
            </span>
          </div>

          <div className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider">
            SORT: CANONICAL GEODESIC
          </div>
        </div>

        {/* Grid of 4 Continental Divisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CONTINENTAL_DIVISIONS.map((division) => (
            <RegionCard key={division.id} division={division} />
          ))}
        </div>

        {/* Bottom Status bar */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>INDEX STATUS: SYNCED (EP-2025.04.1)</span>
          </div>
          <div>PROJECTION: EPSG:4326 · GRANULARITY: SUBREGIONAL</div>
        </div>
      </div>
    );
  }

  // 2. Nested Sub-Region Level (e.g. /regions/asia/japan/kansai) -> Matches 2_nested_region_explorer_kansai.png
  const nestedRegion = NESTED_REGIONS[slugKey];

  if (!nestedRegion) {
    notFound();
  }

  return (
    <div>
      {/* Top Meta Bar */}
      <div className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-mono text-slate-500 py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div>
            URI: <span className="text-emerald-800 font-semibold">/regions/{nestedRegion.fullPath.join('/')}</span> · TYPE: {nestedRegion.type}
          </div>
          <div>
            CRS: {nestedRegion.crs} · INDEX_ID: {nestedRegion.indexId}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Navigation Breadcrumbs & Back */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 text-xs">
          <Link
            href="/regions"
            className="inline-flex items-center space-x-1.5 font-semibold text-slate-700 hover:text-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Japan overview</span>
          </Link>

          <div className="font-mono text-slate-500">
            <Link href="/destinations" className="hover:text-slate-900">
              Destinations
            </Link>{' '}
            / Asia / Japan / <span className="font-semibold text-slate-900">{nestedRegion.name.split(' ')[0]}</span>
          </div>
        </div>

        {/* Region Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 pb-8 border-b border-slate-200">
          <div className="lg:col-span-8">
            <div className="font-mono text-xs text-slate-400 mb-1">
              ↳ {nestedRegion.pathDisplay}
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              {nestedRegion.name}
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed max-w-2xl mb-4">
              {nestedRegion.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center space-x-1 bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-700">
                <span className="text-slate-400">Parent:</span>
                <span className="font-semibold">{nestedRegion.parent.name}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </span>

              <span className="inline-flex items-center space-x-1 bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-700">
                <span className="text-slate-400">Grandparent:</span>
                <span className="font-semibold">{nestedRegion.grandparent.name}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </span>

              <span className="inline-flex items-center space-x-1.5 bg-indigo-50 border border-indigo-100 text-indigo-900 px-2.5 py-1 rounded font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>
                  Prefectures: {nestedRegion.prefecturesCount} ({nestedRegion.prefecturesList.join(', ')})
                </span>
              </span>
            </div>
          </div>

          {/* Spatial Index Metrics Box */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-lg p-5 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 font-mono">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Spatial Index Metrics
              </span>
              <span className="text-emerald-800 font-semibold">{nestedRegion.metrics.spatialIndex}</span>
            </div>

            <div className="space-y-2.5 divide-y divide-slate-50 text-slate-600">
              <div className="flex items-center justify-between pt-1">
                <span>Administrative Division</span>
                <span className="font-semibold text-slate-900">{nestedRegion.metrics.adminDivision}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span>Total Area</span>
                <span className="font-mono font-medium text-slate-800">{nestedRegion.metrics.totalArea}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span>Population Index</span>
                <span className="font-mono font-medium text-slate-800">{nestedRegion.metrics.populationIndex}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span>Principal Gateway</span>
                <span className="font-semibold text-slate-900">{nestedRegion.metrics.principalGateway}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations in this region */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Destinations in this region ({nestedRegion.destinations.length})
            </h2>
            <div className="font-mono text-xs text-slate-500">
              Sort: <span className="font-semibold text-slate-800">Hierarchy</span> | <span className="text-emerald-800 hover:underline cursor-pointer">Density Map</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 -mt-3 mb-6">
            Settlement nodes cataloged with active transit corridors and spatial reference points.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nestedRegion.destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-[11px] text-slate-500 font-medium">
                      {dest.tag}
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {dest.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{dest.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {dest.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 text-[11px]">{dest.coordinates}</span>
                  <Link
                    href={`/destinations/${dest.id}`}
                    className="font-semibold text-slate-800 hover:text-emerald-800 flex items-center space-x-1 transition-colors"
                  >
                    <span>View destination</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Spatial Notes & Connectivity Box */}
        <div className="bg-[#FAFBFD] border border-slate-200 rounded-lg p-6 text-xs text-slate-600">
          <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm mb-4">
            <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px]">
              i
            </span>
            <span>Regional Spatial Notes & Connectivity</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <div className="flex items-center space-x-2 font-bold text-slate-900 mb-2">
                <Train className="w-3.5 h-3.5 text-slate-700" />
                <span>Rail Interconnectivity & Transit Arteries</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                {nestedRegion.railInterconnectivity}
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 font-bold text-slate-900 mb-2">
                <Thermometer className="w-3.5 h-3.5 text-slate-700" />
                <span>Geographic Microclimates & Topography</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                {nestedRegion.microclimates}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-slate-500 font-mono text-[11px] gap-2">
            <div>{nestedRegion.primaryPass}</div>
            <div>{nestedRegion.verifiedNotes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
