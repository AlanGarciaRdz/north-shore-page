import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import PageLayout from 'src/components/layouts/PageLayout';
import ListingLabels from 'src/components/listing/ListingLabels';
import { getListingsHeader, getListingsLabels } from 'src/serverData/ListingsData';

const ListingsHeader = dynamic(
  () => import('src/sections/listings/ListingsHeader'),
  {
    ssr: false,
  }
);

export const getStaticProps = async () => {
  const header = await getListingsHeader();
  const listingsLabels = await getListingsLabels();
  return {
    props: {
      header,
      listingsLabels,
    },
  };
};

function Home({
  header,
  listingsLabels,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentFilter, setCurrentFilter] = useState({ listing: 0 });
  return (
    <PageLayout showContactCard>
      <ListingsHeader title={header.page.title} image={header.page.image} />
      <ListingLabels
        listings={listingsLabels}
        onChangeListing={function (index: number): void {
          setCurrentFilter({ ...currentFilter, listing: index });
        }}
      />
    </PageLayout>
  );
}

export default Home;
