import 'rc-slider/assets/index.css';

import { Card, Container, Grid, Text } from '@nextui-org/react';
import React, { FC, useRef, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';

import ListingDevelopmentData from './ListingDevelopmentData';
import ListingFilterRange from './ListingFilterRange';
import ListingPropertyType from './ListingPropertyType';

interface ListingFilterCardProps {
  maxPrice: number;
}

export type ListingFilter = {
  minValue: number;
  maxValue: number;
  propertyType: string;
  bedrooms?: number;
  bathrooms?: number;
};

function ListingFilterCard({ maxPrice }: ListingFilterCardProps) {
  const [currentFilter, setCurrentFilter] = useState<ListingFilter>({
    minValue: 0,
    maxValue: maxPrice,
    propertyType: 'all',
  });
  return (
    <Container
      fluid
      responsive={false}
      css={{
        padding: 0,
        margin: 0,
        width: '100%',
        height: 329,
        '@sm': {
          height: 246,
        },
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
            <Grid xs={12} lg={3.5}>
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
            <Grid xs={12} sm={5.5} lg={3.5}>
              <ListingPropertyType
                propertyTypes={[
                  { label: 'All', value: 'all' },
                  { label: 'House', value: 'house' },
                  { label: 'Apartment', value: 'apartment' },
                ]}
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
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ListingFilterCard;
