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
      url: LISTINGS_URL + '?listing=' + formatToURL('Las Lomas'),
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
      url: LISTINGS_URL + '?listing=' + formatToURL('Lo de Marcos'),
      name: 'Lo de Marcos',
      developments: [...developments, ...developments],
    },
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('Sayulita'),
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
      url: LISTINGS_URL + '?listing=' + formatToURL('San Pancho'),
      name: 'San Pancho',
      developments: [...developments, ...developments, ...developments, ...developments],
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

export async function getListingsFeatured(developments: DevelopmentMainCardProps[]) {
  const listingsFetaured = {
    page: {
      title: 'Featured properties',
    },
    developments,
  };
  return listingsFetaured;
}

export async function getListingsPropertiesList(developments: DevelopmentCardProps[]) {
  const listingsFetaured = {
    page: {
      title: 'Properties listing',
    },
    developments,
  };
  return listingsFetaured;
}
