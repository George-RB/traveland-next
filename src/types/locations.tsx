export interface LocationCard {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export type Locations = LocationCard[];

export const locationItems: Locations = [
  {
    id: 'cardTurkey',
    image: '/img/travel/image 45.png',
    alt: 'View of Istanbul, Turkey',
    title: 'Istanbul, Turkey',
    description: 'Istanbul is a major city in Turkey that straddles Europe.',
  },
  {
    id: 'cardMalaysia',
    image: '/img/travel/image 48.png',
    alt: 'View of Kuala Lumpur, Malaysia',
    title: 'Kuala Lumpur, Malaysia',
    description: 'A 272-step long trek leads you to this century.',
  },
  {
    id: 'cardSeul',
    image: '/img/travel/image 47.png',
    alt: 'View of Seoul, South Korea',
    title: 'Seoul, South Korea',
    description:
      'South Korea officially the Republic of Korea is a country in East Asia.',
  },
];
