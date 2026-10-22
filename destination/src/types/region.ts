export interface SubRegionDestination {
  id: string;
  name: string;
  tag: string;
  type: string;
  description: string;
  coordinates: string;
}

export interface NestedRegion {
  slug: string;
  name: string;
  fullPath: string[];
  pathDisplay: string;
  type: string;
  indexId: string;
  crs: string;
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
