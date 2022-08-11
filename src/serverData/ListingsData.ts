import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { ListingData, ListingProps } from 'src/components/listing/Listings.types';
import { LISTINGS_URL } from 'src/scripts/GeneralData';

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

export async function getListingsLabels(
  listingData: ListingData[],
  properties: DevelopmentCardProps[]
) {
  const listings: ListingProps[] = listingData.map((listing: ListingData) => {
    return {
      ...listing,
      developments: properties.filter((property: DevelopmentCardProps) => {
        return property.listing?.name === listing.name;
      }),
    };
  });
  listings.unshift({
    url: LISTINGS_URL,
    name: 'All',
    developments: properties,
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

export async function getListingsPropertiesList(developments: DevelopmentCardProps[]) {
  const listingsFetaured = {
    page: {
      title: 'Properties listing',
    },
    developments,
  };
  return listingsFetaured;
}
