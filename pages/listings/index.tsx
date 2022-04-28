import { Container } from '@nextui-org/react';
import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import PageLayout from 'src/components/layouts/PageLayout';
import ListingFilterCard from 'src/components/listing/ListingFilterCard';
import ListingsFeaturedProperties from 'src/sections/listings/ListingsFeaturedProperties';
import ListingsPropertiesList from 'src/sections/listings/ListingsPropertiesList';
import {
  getListingsFeatured,
  getListingsHeader,
  getListingsLabels,
  getListingsPropertiesList,
} from 'src/serverData/ListingsData';
import { MainSectionsContainerCSS } from 'styles/theme';

const ListingsHeader = dynamic(
  () => import('src/sections/listings/ListingsHeader'),
  {
    ssr: false,
  }
);
const ListingLabels = dynamic(
  () => import('src/components/listing/ListingLabels'),
  {
    ssr: false,
  }
);

export const getStaticProps = async () => {
  const header = await getListingsHeader();
  const listingsLabels = await getListingsLabels();
  const listingsFeatured = await getListingsFeatured();
  const listingsPropertiesList = await getListingsPropertiesList();
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
    <PageLayout showContactCard>
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
