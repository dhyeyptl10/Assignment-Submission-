export interface SubRegionDestination {
  id: string;
  name: string;
  tag: string;
  type: string;
  description: string;
  coordinates: string;
}

export interface NestedRegion {
  slug: string; // e.g. "kansai"
  name: string;
  fullPath: string[]; // ["asia", "japan", "kansai"]
  pathDisplay: string; // "Asia / Japan / Kansai"
  type: string; // "SUB_REGION_INDEX"
  indexId: string; // "#7240-KNSI"
  crs: string; // "EPSG:4326"
  description: string;
  parent: { name: string; link: string };
  grandparent: { name: string; link: string };
  prefecturesCount: number;
  prefecturesList: string[];
  metrics: {
    spatialIndex: string;
    adminDivision: string;
    totalArea: string;
    populationIndex: string;
    principalGateway: string;
  };
  destinations: SubRegionDestination[];
  railInterconnectivity: string;
  microclimates: string;
  primaryPass: string;
  verifiedNotes: string;
}

export interface ContinentalDivision {
  id: string;
  name: string;
  code: string;
  basin: string;
  settlementsCount: number;
  terrainBadge: string;
  subRegionsSummary: string;
  jurisdictionCode: string;
  browseLink: string;
  image: string;
}
