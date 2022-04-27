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
  return listingsLabels;
}
