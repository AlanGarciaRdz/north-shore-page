import { Container } from '@nextui-org/react';
import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import APISimplyRETS from 'src/API/APISimplyRETS';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import PageLayout from 'src/components/layouts/PageLayout';
import ListingFilterCard from 'src/components/listing/ListingFilterCard';
import { LISTINGS_URL } from 'src/scripts/GeneralData';
import { formatToURL } from 'src/scripts/StringTools';
import ListingsFeaturedProperties from 'src/sections/listings/ListingsFeaturedProperties';
import ListingsPropertiesList from 'src/sections/listings/ListingsPropertiesList';
import { getListingsFeatured, getListingsHeader, getListingsLabels, getListingsPropertiesList } from 'src/serverData/ListingsData';
import { MainSectionsContainerCSS } from 'styles/theme';

const ListingsHeader = dynamic(() => import('src/sections/listings/ListingsHeader'), {
  ssr: false,
});
const ListingLabels = dynamic(() => import('src/components/listing/ListingLabels'), {
  ssr: false,
});

async function GetListing() {
  const retsAPI = new APISimplyRETS();
  const getProperties = await retsAPI.GET('/properties');
  const getPropertiesMetData = await retsAPI.OPTIONS('/properties');
  return getProperties;
}

export const getStaticProps = async () => {
  interface RetsDevelopmentsCardsProps {
    developmentsCards: DevelopmentCardProps[];
    developmentMainCards: DevelopmentMainCardProps[];
  }
  const retsProperties = await GetListing();
  const retsDevelopmentsCards: RetsDevelopmentsCardsProps = retsProperties.reduce(
    (returnData: RetsDevelopmentsCardsProps, retsProperty: any, index: number) => {
      const amenities = [
        ...retsProperty.property.exteriorFeatures.split(','),
        ...retsProperty.property.interiorFeatures.split(','),
      ]
        .map((amenity: string) => {
          return {
            name: amenity,
          };
        })
        .splice(0, 4);
      const bathrroms = parseFloat(
        retsProperty.property.bathsFull.toString() +
          '.' +
          retsProperty.property.bathsHalf.toString()
      );
      const developmentCard: DevelopmentCardProps = {
        url: LISTINGS_URL + formatToURL('Las lomas') + '/' + formatToURL('Hacienda Marina'),
        name: 'Hacienda Marina',
        price: retsProperty.listPrice,
        bathrroms: bathrroms,
        bedrooms: retsProperty.property.bedrooms,
        squareFT: retsProperty.property.area,
        listing: {
          url: LISTINGS_URL + '?listing=' + formatToURL('Las lomas'),
          name: 'Las lomas',
        },
        amenities: amenities,
        image: { src: retsProperty.photos[0], alt: `${retsProperty.listingId}-thumbnail` },
      };
      returnData.developmentsCards.push(developmentCard);
      if (index < 3) {
        const developmentMainCard: DevelopmentMainCardProps = {
          url: LISTINGS_URL + formatToURL('Las lomas') + '/' + formatToURL('Hacienda Marina'),
          name: 'Hacienda Marina',
          price: retsProperty.listPrice,
          bathrroms: bathrroms,
          bedrooms: retsProperty.property.bedrooms,
          squareFT: retsProperty.property.area,
          listing: {
            url: LISTINGS_URL + '?listing=' + formatToURL('Las lomas'),
            name: 'Las lomas',
          },
          amenities: amenities,
          images: retsProperty.photos.map((photo: string, index: number) => ({
            src: photo,
            alt: `${retsProperty.listingId}-gallery-${index}`,
          })),
        };
        returnData.developmentMainCards.push(developmentMainCard);
      }
      return returnData;
    },
    {
      developmentsCards: [],
      developmentMainCards: [],
    } as RetsDevelopmentsCardsProps
  );
  const header = await getListingsHeader();
  const listingsLabels = await getListingsLabels();
  const listingsFeatured = await getListingsFeatured(retsDevelopmentsCards.developmentMainCards);
  const listingsPropertiesList = await getListingsPropertiesList(
    retsDevelopmentsCards.developmentsCards
  );
  return {
    props: {
      header,
      listingsLabels,
      listingsFeatured,
      listingsPropertiesList,
    },
  };
};

function Listings({
  header,
  listingsLabels,
  listingsFeatured,
  listingsPropertiesList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentFilter, setCurrentFilter] = useState({ listing: 0 });
  return (
    <PageLayout showContactCard={true}>
      <ListingsHeader title={header.page.title} image={header.page.image} />
      <Container
        css={{
          ...MainSectionsContainerCSS,
          marginBottom: 40,
        }}
      >
        <ListingLabels
          showLength
          listings={listingsLabels}
          onChangeListing={function (index: number): void {
            setCurrentFilter({ ...currentFilter, listing: index });
          }}
          currentListingIndex={currentFilter.listing}
        />
      </Container>
      <Container
        css={{
          ...MainSectionsContainerCSS,
          marginBottom: 40,
        }}
      >
        <ListingFilterCard maxPrice={3000000} />
      </Container>
      <Container
        fluid
        responsive={false}
        css={{
          padding: 0,
          margin: 0,
          marginBottom: 40,
        }}
      >
        <ListingsFeaturedProperties
          title={listingsFeatured.page.title}
          developments={listingsFeatured.developments}
        />
      </Container>
      <Container
        fluid
        responsive={false}
        css={{
          padding: 0,
          margin: 0,
          marginBottom: 40,
        }}
      >
        <ListingsPropertiesList
          title={listingsPropertiesList.page.title}
          developments={listingsPropertiesList.developments}
        />
      </Container>
    </PageLayout>
  );
}

export default Listings;
