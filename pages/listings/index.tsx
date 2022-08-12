import { Container } from '@nextui-org/react';
import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { DevelopmentMainCardProps } from 'src/components/development/Development.types';
import PageLayout from 'src/components/layouts/PageLayout';
import ListingFilterCard, { ListingFilter } from 'src/components/listing/ListingFilterCard';
import { ListingData } from 'src/components/listing/Listings.types';
import { GenerateAllMainCards, GenerateAreas, GenerateSearchDevelopmentCards, GetMetaData } from 'src/scripts/RETSPropertiesData';
import { getQueryFromURL, IsEmptyString, removeQueryFromURL, updateQueryFromURL } from 'src/scripts/StringTools';
import ListingsFeaturedProperties from 'src/sections/listings/ListingsFeaturedProperties';
import ListingsPropertiesList from 'src/sections/listings/ListingsPropertiesList';
import { getListingsFeatured, getListingsHeader, getListingsLabels, getListingsPropertiesList } from 'src/serverData/ListingsData';
import { MainSectionsContainerCSS } from 'styles/theme';

const ListingsHeader = dynamic(() => import('src/sections/listings/ListingsHeader'), {
  ssr: false,
});

export const getStaticProps = async () => {
  const metaData = await GetMetaData();
  const listingData = GenerateAreas(metaData);
  const mainDevelopmentsCards: DevelopmentMainCardProps[] = await GenerateAllMainCards(listingData);
  const header = await getListingsHeader();
  const listingsLabels = await getListingsLabels(listingData);
  const listingsFeatured = await getListingsFeatured(mainDevelopmentsCards);
  const listingsPropertiesList = await getListingsPropertiesList();
  return {
    props: {
      header,
      listingsLabels,
      listingsFeatured,
      listingsPropertiesList,
      listingData,
    },
  };
};

function Listings({
  header,
  listingsLabels,
  listingsFeatured,
  listingsPropertiesList,
  listingData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const cardsPerPage = 9;
  const maxPrice = 3000000;

  const [searchDevelopments, setSearchDevelopments] = useState<{
    cards: DevelopmentMainCardProps[];
    total: number;
  }>({ cards: [], total: 0 });
  const [currentFilter, setCurrentFilter] = useState<ListingFilter>({
    initFilters: false,
    findNewLocation: false,
    minValue: 0,
    maxValue: maxPrice,
    location: 'all',
    pagination: 1,
  });

  function initFilter() {
    const filterListing = getQueryFromURL('location');
    const filterPagination = getQueryFromURL('pagination');
    const filterMinValue = getQueryFromURL('minValue');
    const filterMaxValue = getQueryFromURL('maxValue');
    let setFilter: ListingFilter = JSON.parse(JSON.stringify(currentFilter));
    setFilter.initFilters = true;
    if (
      filterListing !== undefined &&
      IsEmptyString(filterListing) === false &&
      filterListing !== currentFilter.location
    ) {
      setFilter = {
        ...setFilter,
        findNewLocation: true,
        location: filterListing,
      };
    }

    if (
      filterPagination !== undefined &&
      IsEmptyString(filterPagination) === false &&
      parseInt(filterPagination) !== currentFilter.pagination
    ) {
      setFilter = {
        ...setFilter,
        pagination: parseInt(filterPagination),
      };
    }

    if (
      filterMinValue !== undefined &&
      IsEmptyString(filterMinValue) === false &&
      parseInt(filterMinValue) !== currentFilter.minValue
    ) {
      setFilter = {
        ...setFilter,
        minValue: parseInt(filterMinValue),
      };
    }

    if (
      filterMaxValue !== undefined &&
      IsEmptyString(filterMaxValue) === false &&
      parseInt(filterMaxValue) !== currentFilter.maxValue
    ) {
      setFilter = {
        ...setFilter,
        maxValue: parseInt(filterMaxValue),
      };
    }
    setCurrentFilter(setFilter);
  }

  function isNewLocation(location: string) {
    const filterListing = getQueryFromURL('location');
    let listingQueryFilter: string | undefined = undefined;
    if (filterListing !== undefined && IsEmptyString(filterListing) === false) {
      listingQueryFilter = filterListing;
    }
    let findNewLocation = false;
    if (listingQueryFilter !== undefined && listingQueryFilter !== location) {
      findNewLocation = true;
    }
    if (listingQueryFilter === undefined && location !== 'all') {
      findNewLocation = true;
    }
    return findNewLocation;
  }

  async function getSearchDevelopments() {
    const filterCheck: ListingFilter = JSON.parse(JSON.stringify(currentFilter));
    let offset: number | undefined = undefined;
    let pagination: number | undefined = undefined;
    let listingDataQuery: ListingData | undefined = undefined;
    if (filterCheck.findNewLocation) {
      pagination = 1;
      if (filterCheck.location === 'all') {
        removeQueryFromURL('location');
      } else {
        updateQueryFromURL('location', filterCheck.location);
      }
      removeQueryFromURL('pagination');
      listingDataQuery = listingData.find((listing) => {
        return listing.locationFilter === filterCheck.location;
      });
    } else {
      listingDataQuery = listingData.find((listing) => {
        return listing.locationFilter === filterCheck.location;
      });
      if (filterCheck.pagination === 1 || filterCheck.pagination === undefined) {
        removeQueryFromURL('pagination');
        pagination = 1;
      } else {
        pagination = filterCheck.pagination;
        offset = (filterCheck.pagination - 1) * cardsPerPage;
        updateQueryFromURL('pagination', filterCheck.pagination.toString());
      }
    }
    const retsDevelopmentsCards = await GenerateSearchDevelopmentCards(
      listingData,
      listingDataQuery,
      cardsPerPage,
      offset,
      filterCheck.minValue,
      filterCheck.maxValue,
      filterCheck.bedrooms,
      filterCheck.bathrooms
    );
    setSearchDevelopments({
      cards: retsDevelopmentsCards.cards,
      total: retsDevelopmentsCards.count,
    });
  }

  useEffect(() => {
    if (currentFilter.initFilters === false) {
      initFilter();
    }
  }, []);

  useEffect(() => {
    if (currentFilter.initFilters === true) {
      getSearchDevelopments();
    }
  }, [currentFilter]);

  return (
    <PageLayout showContactCard={true}>
      <ListingsHeader title={header.page.title} image={header.page.image} />
      <Container
        css={{
          ...MainSectionsContainerCSS,
          marginBottom: 40,
          zIndex: 2,
        }}
      >
        <ListingFilterCard
          maxPrice={maxPrice}
          pageInitFilter={currentFilter}
          listingData={listingsLabels}
          setPageInitFilter={(filter: ListingFilter) => {
            const findNewLocation = isNewLocation(filter.location);
            setCurrentFilter({
              ...filter,
              findNewLocation: findNewLocation,
              pagination: findNewLocation ? 1 : currentFilter.pagination,
            });
          }}
        />
      </Container>
      <Container
        fluid
        responsive={false}
        css={{
          padding: 0,
          margin: 0,
          marginBottom: 40,
          zIndex: 1,
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
          zIndex: 1,
        }}
      >
        <ListingsPropertiesList
          title={listingsPropertiesList.page.title}
          developments={searchDevelopments.cards}
          total={searchDevelopments.total}
          cardsPerPage={cardsPerPage}
          onChangePagination={(pagination) => {
            setCurrentFilter({ ...currentFilter, findNewLocation: false, pagination });
          }}
          currentPagination={currentFilter.pagination}
        />
      </Container>
    </PageLayout>
  );
}

export default Listings;
