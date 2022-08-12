import { DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { ListingData, ListingProps } from 'src/components/listing/Listings.types';

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

export async function getListingsLabels(listingData: ListingData[]) {
  const listings: ListingProps[] = listingData.map((listing: ListingData) => {
    return {
      ...listing,
    };
  });
  listings.unshift({
    url: 'all',
    locationFilter: 'all',
    name: 'All',
    searchQuerys: [],
    developments: [],
  });
  return listings;
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

export async function getListingsPropertiesList() {
  const listingsFetaured = {
    page: {
      title: 'Properties listing',
    },
  };
  return listingsFetaured;
}
