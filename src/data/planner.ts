export interface ItineraryStop {
  id: string;
  destination: string;
  destinationId: string;
  durationLabel: string;
  description: string;
}

export interface PinnedDestination {
  id: string;
  name: string;
  country: string;
  coordinates: string;
}

export const TRIP_OVERVIEW_DATA = {
  title: 'Autumn in Honshu',
  status: 'Active Draft',
  totalDays: '8 Days Total',
  dateRange: 'Dates: Oct 14-22 • 3 Destinations',
  updatedAgo: 'Updated 42m ago',
  corridor: 'Tokaido-Sanyo Main Corridor',
  itineraryStops: [
    {
      id: 'stop-1',
      destination: 'Kyoto',
      destinationId: 'kyoto',
      durationLabel: '3 nights',
      description: 'Historic ward corridors, Gion, Arashiyama bamboo path',
    },
    {
      id: 'stop-2',
      destination: 'Osaka',
      destinationId: 'osaka',
      durationLabel: '2 nights',
      description: 'Dotonbori food district, Namba architectural nexus',
    },
    {
      id: 'stop-3',
      destination: 'Nara',
      destinationId: 'nara',
      durationLabel: 'Day trip',
      description: 'Todai-ji temple, Kasuga Taisha park preserve',
    },
  ] as ItineraryStop[],
  pinnedNodes: [
    {
      id: 'kyoto',
      name: 'Kyoto, Japan',
      country: 'Japan',
      coordinates: '35.0116° N, 135.7681° E',
    },
    {
      id: 'bergen',
      name: 'Bergen, Norway',
      country: 'Norway',
      coordinates: '60.3913° N, 5.3221° E',
    },
    {
      id: 'florence',
      name: 'Florence, Italy',
      country: 'Italy',
      coordinates: '43.7696° N, 11.2558° E',
    },
  ] as PinnedDestination[],
  transitPass: {
    title: 'JR Kansai W. Pass',
    validity: 'Valid (Days 1-5)',
    routes: [
      { name: 'Kyoto ↔ Osaka Express', time: '28m via Tokaido Line' },
      { name: 'Osaka ↔ Nara Rapid', time: '39m via Yamatoji Line' },
    ],
    note: 'Luggage forwarding available between Kyoto & Osaka terminals.',
  },
};
