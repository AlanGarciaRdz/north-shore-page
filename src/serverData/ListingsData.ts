import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { LISTINGS_URL } from 'src/scripts/GeneralData';
import { formatToURL } from 'src/scripts/StringTools';

export async function getListingsHeader() {
  const header = {
    page: {
      title: 'Listings',
      image: {
        src: '/dump/home-header.png',
        alt: 'Listings header image',
      },
    },
  };
  return header;
}

export async function getListingsLabels() {
  const developments = [
    {
      id: '0',
    },
    {
      id: '0',
    },
    {
      id: '0',
    },
  ];
  const listingsLabels = [
    {
      url: LISTINGS_URL + formatToURL('/Las Lomas'),
      name: 'Las Lomas',
      developments: [
        ...developments,
        ...developments,
        ...developments,
        ...developments,
        ...developments,
        ...developments,
        ...developments,
        ...developments,
      ],
    },
    {
      url: LISTINGS_URL + formatToURL('/Lo de Marcos'),
      name: 'Lo de Marcos',
      developments: [...developments, ...developments],
    },
    {
      url: LISTINGS_URL + formatToURL('/Sayulita'),
      name: 'Sayulita',
      developments: [
        ...developments,
        ...developments,
        ...developments,
        ...developments,
        ...developments,
        ...developments,
      ],
    },
    {
      url: LISTINGS_URL + formatToURL('/San Pancho'),
      name: 'San Pancho',
      developments: [
        ...developments,
        ...developments,
        ...developments,
        ...developments,
      ],
    },
  ];
  listingsLabels.unshift({
    url: LISTINGS_URL,
    name: 'All',
    developments: listingsLabels.reduce((acc: any, curr: any) => {
      return acc.concat(curr.developments);
    }, []),
  });
  return listingsLabels;
}

export async function getListingsFeatured() {
  const developmentsMainCard: DevelopmentMainCardProps[] = [
    {
      url:
        LISTINGS_URL +
        formatToURL('/Las lomas') +
        '/' +
        formatToURL('/Hacienda Marina'),
      name: 'Hacienda Marina',
      price: 5137400,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + formatToURL('/Las lomas'),
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
      ],
      images: [
        { src: '/dump/development-1.png', alt: 'development-1' },
        { src: '/dump/development-3.png', alt: 'development-3' },
      ],
    },
    {
      url:
        LISTINGS_URL +
        formatToURL('/sayulita') +
        '/' +
        formatToURL('/Casa de leon'),
      name: 'Casa de león',
      price: 8003200,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + formatToURL('/sayulita'),
        name: 'Sayulita',
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
      ],
      images: [
        { src: '/dump/development-1.png', alt: 'development-1' },
        { src: '/dump/development-2.png', alt: 'development-2' },
        { src: '/dump/development-3.png', alt: 'development-3' },
        { src: '/dump/development-2.png', alt: 'development-2' },
      ],
    },
    {
      url:
        LISTINGS_URL +
        formatToURL('/San Pancho') +
        '/' +
        formatToURL('/Casa de Prueba'),
      name: 'Casa de Prueba',
      price: 8003200,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + formatToURL('/San Pancho'),
        name: 'San Pancho',
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
      ],
      images: [
        { src: '/dump/development-1.png', alt: 'development-1' },
        { src: '/dump/development-2.png', alt: 'development-2' },
        { src: '/dump/development-3.png', alt: 'development-3' },
      ],
    },
  ];
  const listingsFetaured = {
    page: {
      title: 'Featured properties',
    },
    developments: developmentsMainCard,
  };
  return listingsFetaured;
}

export async function getListingsPropertiesList() {
  const developmentsCard: DevelopmentCardProps[] = [
    {
      url:
        LISTINGS_URL +
        formatToURL('/Las lomas') +
        '/' +
        formatToURL('/Hacienda Marina'),
      name: 'Hacienda Marina',
      price: 5137400,
      bathrroms: 2,
      bedrooms: 5,
      squareFT: 5200,
      listing: {
        url: LISTINGS_URL + formatToURL('/Las lomas'),
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
      ],
      image: { src: '/dump/development-1.png', alt: 'development-1' },
    },
    {
      url:
        LISTINGS_URL +
        formatToURL('/Sayulita') +
        '/' +
        formatToURL('/Casa de leon'),
      name: 'Casa de león',
      price: 8003200,
      bathrroms: 10,
      bedrooms: 10,
      squareFT: 6500,
      listing: {
        url: LISTINGS_URL + formatToURL('/Sayulita'),
        name: 'Sayulita',
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
      ],
      image: { src: '/dump/development-2.png', alt: 'development-2' },
    },
    {
      url:
        LISTINGS_URL +
        formatToURL('/San Pancho') +
        '/' +
        formatToURL('/Casa de Prueba'),
      name: 'Casa de Prueba',
      price: 8003200,
      bathrroms: 1,
      bedrooms: 1,
      squareFT: 900,
      listing: {
        url: LISTINGS_URL + formatToURL('/San Pancho'),
        name: 'San Pancho',
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
      ],
      image: { src: '/dump/development-3.png', alt: 'development-3' },
    },
  ];
  const listingsFetaured = {
    page: {
      title: 'Properties listing',
    },
    developments: [
      ...developmentsCard,
      ...developmentsCard,
      ...developmentsCard,
      ...developmentsCard,
    ],
  };
  return listingsFetaured;
}
