import 'rc-slider/assets/index.css';

import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';

import ListigFilterLocation from './ListigFilterLocation';
import ListingDevelopmentData from './ListingDevelopmentData';
import ListingFilterRange from './ListingFilterRange';
import { ListingProps } from './Listings.types';

export type ListingFilter = {
  findNewLocation: boolean;
  initFilters: boolean;
  minValue: number;
  maxValue: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  pagination?: number;
};
interface ListingFilterCardProps {
  maxPrice: number;
  listingData: ListingProps[];
  pageInitFilter: ListingFilter;
  setPageInitFilter: (filter: ListingFilter) => void;
}

function ListingFilterCard({
  maxPrice,
  listingData,
  pageInitFilter,
  setPageInitFilter,
}: ListingFilterCardProps) {
  const [currentFilter, setCurrentFilter] = useState<ListingFilter>({
    initFilters: false,
    findNewLocation: false,
    minValue: 0,
    maxValue: maxPrice,
    location: 'all',
    pagination: 1,
  });
  useEffect(() => {
    if (pageInitFilter.initFilters === true && currentFilter.initFilters === false) {
      setCurrentFilter(pageInitFilter);
    }
  }, [pageInitFilter]);
  return (
    <Container
      fluid
      responsive={false}
      css={{
        zIndex: 2000,
        padding: 0,
        margin: 0,
        width: '100%',
        height: 'auto',
        '@lg': {
          height: 157,
        },
      }}
    >
      <Card
        css={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
          justifyContent: 'center',
          boxShadow: '0px 10px 20px rgba(126, 148, 166, 0.1)',
          borderRadius: 4,
        }}
      >
        <Card.Body
          css={{
            height: '100%',
            overflow: 'visible',
            padding: '24px 25px 21px 25px',
            borderRadius: 4,
          }}
        >
          <Grid.Container justify='space-between'>
            <Grid xs={12} css={{ alignItems: 'center', marginBottom: 27 }}>
              <BiFilterAlt style={{ fontSize: 20, marginRight: 9 }} />
              <Text weight='bold'>{'Properties filter'}</Text>
            </Grid>
            <Grid xs={12} lg={2.5}>
              <ListingFilterRange
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
                maxPrice={maxPrice}
              />
            </Grid>
            <Grid xs={12} lg={0}>
              <Container
                responsive={false}
                fluid
                css={{
                  padding: 0,
                  margin: 0,
                  height: 30,
                  '@sm': {
                    height: 20,
                  },
                }}
              />
            </Grid>
            <Grid xs={12} sm={5.5} lg={2.5}>
              <ListigFilterLocation
                propertyTypes={listingData.map((listing) => {
                  return {
                    label: listing.name,
                    value: listing.locationFilter,
                  };
                })}
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
              />
            </Grid>
            <Grid
              xs={12}
              sm={0}
              css={{
                height: 30,
              }}
            />
            <Grid xs={12} sm={5.5} lg={3.5}>
              <ListingDevelopmentData
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
              />
            </Grid>
            <Grid xs={12} lg={0}>
              <Container
                responsive={false}
                fluid
                css={{
                  padding: 0,
                  margin: 0,
                  height: 40,
                }}
              />
            </Grid>
            <Grid xs={12} lg={2.5}>
              <Container
                fluid
                responsive={false}
                css={{
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
              >
                <Button
                  color='secondary'
                  auto
                  css={{ width: '100%' }}
                  onPress={() => {
                    setPageInitFilter(currentFilter);
                  }}
                >
                  {'Search'}
                </Button>
              </Container>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ListingFilterCard;
