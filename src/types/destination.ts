export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  subRegion: string;
  code: string;
  locationCode: string;
  divisionCode: string;
  countryCode: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
    display: string;
  };
  elevation: string;
  prefecture?: string;
  cartographicOverview: string;
  spatialInsetZone?: string;
  keyInfo: {
    bestSeason: string;
    knownFor: string;
    typicalTripLength: string;
  };
  transitNotes: string;
  imageUrl?: string;
  heroImage?: string;
  spatialTaxonomy: string;
  regionSlugPath?: string;
  featured?: boolean;
}

export type RegionFilter =
  | 'All Regions'
  | 'East Asia'
  | 'Southern Europe'
  | 'Scandinavia'
  | 'South America'
  | 'North Africa';
