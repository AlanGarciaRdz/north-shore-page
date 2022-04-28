import { DevelopmentCompleteProps } from 'src/components/development/Development.types';
import { LISTINGS_URL } from 'src/scripts/GeneralData';
import { formatToURL } from 'src/scripts/StringTools';

export async function getDevelopmentData() {
  const developmentData: DevelopmentCompleteProps = {
    url:
      LISTINGS_URL +
      formatToURL('Las lomas') +
      '/' +
      formatToURL('Hacienda Marina'),
    name: 'Hacienda Marina',
    price: 5137400,
    oceanFrontMeters: 52.1,
    squareFT: 20444,
    lotSqFT: 3787.02,
    m2: 1900,
    lotM2: 40748.34,
    bathrroms: 5,
    bedrooms: 3,
    commonAmenities: 'Beach Access; Gated',
    appliances:
      'Clothes Washer; Compactor; Dishwasher; Disposal; Freezer; Microwave; Refrigerator; Ice Maker; Warming Drawer; Washer/Dryer Hookups; Wine Cooler',
    walls: 'Concrete; Sheetrock',
    devices: 'Ceiling Fans; Water Purification',
    roadTypes: 'Cobblestone; Paved',
    title: 'Fideicomiso',
    connectivity: 'Cobblestone',
    electricity: 'CFE',
    sewage: 'Septic',
    location: 'Beachfront; Gated Community',
    howToShow: 'Agent To Accompany; By Appointment Only',
    listing: {
      url: LISTINGS_URL + formatToURL('Las lomas'),
      name: 'Las lomas',
    },
    amenities: [
      {
        name: 'Private pool',
      },
      {
        name: 'Pet Friendly',
      },
      {
        name: 'Parking on property',
      },
      {
        name: 'Ocean view',
      },
      {
        name: 'Private pool',
      },
      {
        name: 'Pet Friendly',
      },
      {
        name: 'Parking on property',
      },
      {
        name: 'Ocean view',
      },
      {
        name: 'Private pool',
      },
      {
        name: 'Pet Friendly',
      },
      {
        name: 'Parking on property',
      },
      {
        name: 'Ocean view',
      },
      {
        name: 'Private pool',
      },
      {
        name: 'Pet Friendly',
      },
      {
        name: 'Parking on property',
      },
      {
        name: 'Ocean view',
      },
    ],
    images: [
      { src: '/dump/development-1.png', alt: 'development-1' },
      { src: '/dump/development-1.png', alt: 'development-1' },
      { src: '/dump/development-3.png', alt: 'development-3' },
      { src: '/dump/development-2.png', alt: 'development-2' },
      { src: '/dump/development-3.png', alt: 'development-3' },
      { src: '/dump/development-1.png', alt: 'development-1' },
      { src: '/dump/development-1.png', alt: 'development-1' },
      { src: '/dump/development-3.png', alt: 'development-3' },
      { src: '/dump/development-2.png', alt: 'development-2' },
      { src: '/dump/development-3.png', alt: 'development-3' },
      { src: '/dump/development-1.png', alt: 'development-1' },
      { src: '/dump/development-3.png', alt: 'development-3' },
      { src: '/dump/development-2.png', alt: 'development-2' },
      { src: '/dump/development-2.png', alt: 'development-2' },
      { src: '/dump/development-2.png', alt: 'development-2' },
      { src: '/dump/development-1.png', alt: 'development-1' },
      { src: '/dump/development-3.png', alt: 'development-3' },
      { src: '/dump/development-2.png', alt: 'development-2' },
    ],
    mainImageDesktop: {
      src: '/dump/development-desktop.png',
      alt: 'development-desktop',
    },
    mainImageMobile: {
      src: '/dump/development-mobile.png',
      alt: 'development-mobile',
    },
    mapImage: {
      src: '/dump/map.png',
      alt: 'map',
    },
    description:
      'The very private setting of Son Reve belies its 20,000 square feet of gorgeous contemporary architecture. A gated Villa within the gated community of Las Olas in San Pancho, Son Reve is only a short 45-minute drive from the PV Airport. This outstanding property with its over 170 feet of sandy-beach frontage has perfect symmetry in design and function. With the huge bedroom suites located at each wing of the Villa, the main living areas open out to a perfect outdoor living areas surrounding the over-sized swimming pool offering endless days and nights under the sun and the stars. Son Reve is a dream but only when you experience it yourself will you be able to realize it for yourself!',
  };
  return developmentData;
}
