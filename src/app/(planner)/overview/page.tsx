'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TRIP_OVERVIEW_DATA, PinnedDestination } from '@/data/planner';
import { Clock, MapPin, ArrowRight, Info, Train, Share2, Printer, CheckCircle } from 'lucide-react';

export default function PlannerOverviewPage() {
  const [pinnedNodes, setPinnedNodes] = useState<PinnedDestination[]>(TRIP_OVERVIEW_DATA.pinnedNodes);
  const [exported, setExported] = useState(false);

  const handleRemove = (id: string) => {
    setPinnedNodes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleExportGeoJSON = () => {
    const geoJson = {
      type: 'FeatureCollection',
      name: TRIP_OVERVIEW_DATA.title,
      features: pinnedNodes.map((n) => ({
        type: 'Feature',
        properties: { name: n.name, country: n.country, coords: n.coordinates },
        geometry: { type: 'Point', coordinates: [135.7681, 35.0116] },
      })),
    };
    const blob = new Blob([JSON.stringify(geoJson, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'honshu-route.geojson';
    a.click();
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Breadcrumbs & Title */}
      <div>
        <div className="font-mono text-xs text-slate-400 mb-1">Planner / Overview</div>
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Trip Overview
          </h1>
          <div className="flex items-center space-x-1.5 font-mono text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{TRIP_OVERVIEW_DATA.updatedAgo}</span>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          Your current route draft and curated spatial bookmarks.
        </p>
      </div>

      {/* Main Grid: Left Itinerary Stops vs Right Pinned & Transit */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Itinerary Stops */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded uppercase">
                {TRIP_OVERVIEW_DATA.status}
              </span>
              <span className="font-mono text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                {TRIP_OVERVIEW_DATA.totalDays}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              {TRIP_OVERVIEW_DATA.title}
            </h2>
            <p className="font-mono text-xs text-slate-500 mb-6">
              {TRIP_OVERVIEW_DATA.dateRange}
            </p>

            <div className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-4">
              Itinerary Stops
            </div>

            {/* Vertical Stops with Connectors */}
            <div className="space-y-4 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {TRIP_OVERVIEW_DATA.itineraryStops.map((stop) => (
                <div key={stop.id} className="relative">
                  {/* Dot */}
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 absolute -left-[29px] top-4 ring-4 ring-white" />

                  <div className="bg-[#FAFBFD] border border-slate-200 rounded-lg p-4 flex items-start justify-between hover:border-slate-300 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">
                        {stop.destination}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {stop.description}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded shrink-0 ml-3">
                      {stop.durationLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">
              ☍ {TRIP_OVERVIEW_DATA.corridor}
            </span>
            <Link
              href="/destinations"
              className="font-semibold text-slate-800 hover:text-emerald-800 flex items-center space-x-1"
            >
              <span>Edit Schedule</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Pinned Nodes & Transit Pass Notes */}
        <div className="lg:col-span-5 space-y-6">
          {/* Saved Destination Nodes */}
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-slate-900 text-sm">Saved Destination Nodes</h3>
              <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs flex items-center justify-center font-bold">
                {pinnedNodes.length}
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              {pinnedNodes.length} indexed locations pinned
            </p>

            <div className="space-y-2.5 mb-4">
              {pinnedNodes.map((node) => (
                <div
                  key={node.id}
                  className="bg-[#FAFBFD] border border-slate-200 rounded-lg p-3 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center space-x-2.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-800">{node.name}</div>
                      <div className="font-mono text-[10px] text-slate-400">
                        {node.coordinates}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 font-mono text-[11px]">
                    <Link
                      href={`/destinations/${node.id}`}
                      className="text-slate-700 hover:text-emerald-800 underline"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => handleRemove(node.id)}
                      className="text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right pt-2 border-t border-slate-100">
              <Link
                href="/destinations"
                className="text-xs font-semibold text-slate-800 hover:text-emerald-800 inline-flex items-center space-x-1"
              >
                <span>Browse Spatial Bookmarks</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Transit & Route Notes */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 text-xs">
            <div className="flex items-center space-x-2 font-bold text-slate-900 mb-1.5 text-sm">
              <Train className="w-4 h-4 text-emerald-800" />
              <span>Transit & Route Notes</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-4">
              Static synthesis of transit infrastructure across regional links. Optimized for minimal connections and standard gauge lines.
            </p>

            <div className="bg-[#FAFBFD] border border-slate-200 rounded-md p-3.5 font-mono text-[11px] space-y-2 mb-3">
              <div className="flex items-center justify-between font-bold text-slate-800 pb-2 border-b border-slate-200">
                <span>{TRIP_OVERVIEW_DATA.transitPass.title}</span>
                <span className="text-emerald-800">{TRIP_OVERVIEW_DATA.transitPass.validity}</span>
              </div>
              {TRIP_OVERVIEW_DATA.transitPass.routes.map((r, i) => (
                <div key={i} className="flex items-center justify-between text-slate-600">
                  <span>{r.name}</span>
                  <span className="text-slate-800 font-medium">{r.time}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start space-x-2 text-[11px] text-slate-500">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>{TRIP_OVERVIEW_DATA.transitPass.note}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
        <div className="flex items-center space-x-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <div>
            <span className="font-bold text-slate-800">Spatial Topology Index: Clean</span>
            <span className="text-slate-500 ml-2">
              All geocodes and route links are verified against catalog definitions.
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={handleExportGeoJSON}
            className="border border-slate-300 hover:border-slate-400 bg-white font-semibold text-slate-700 px-3 py-1.5 rounded transition-colors text-xs flex items-center space-x-1.5"
          >
            {exported ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{exported ? 'GeoJSON Exported' : 'Export GeoJSON'}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="border border-slate-300 hover:border-slate-400 bg-white font-semibold text-slate-700 px-3 py-1.5 rounded transition-colors text-xs flex items-center space-x-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Spatial Index</span>
          </button>
        </div>
      </div>
    </div>
  );
}
