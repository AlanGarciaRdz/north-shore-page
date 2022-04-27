import { Grid, Input, Text } from '@nextui-org/react';
import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { BiDroplet } from 'react-icons/bi';
import { IoMoonOutline } from 'react-icons/io5';

import { ListingFilter } from './ListingFilterCard';

type ListingDevelopmentDataProps = {
  currentFilter: ListingFilter;
  setCurrentFilter: Dispatch<SetStateAction<ListingFilter>>;
};

function ListingDevelopmentData({
  currentFilter,
  setCurrentFilter,
}: ListingDevelopmentDataProps) {
  return (
    <Grid.Container justify='space-between'>
      <Grid xs={5.5}>
        <Grid.Container justify='space-between'>
          <Grid>
            <Text>{'Bedrooms'}</Text>
          </Grid>
          <Grid xs={12} />
          <Grid
            xs={12}
            css={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <IoMoonOutline style={{ fontSize: 30, marginRight: 12 }} />
            <Input
              type='number'
              css={{
                width: 'calc(100% - 43px)',
                height: 35,
                '.nextui-input-wrapper': {
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  border: '1px solid $accents3 !important',
                },
              }}
              value={currentFilter.bedrooms}
              onChange={(e) => {
                setCurrentFilter({
                  ...currentFilter,
                  bedrooms: parseFloat(e.target.value),
                });
              }}
            />
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={5.5}>
        <Grid.Container justify='space-between'>
          <Grid>
            <Text>{'Bathrooms'}</Text>
          </Grid>
          <Grid xs={12} />
          <Grid
            xs={12}
            css={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <BiDroplet style={{ fontSize: 30, marginRight: 12 }} />
            <Input
              animated={true}
              type='number'
              css={{
                width: 'calc(100% - 43px)',
                height: 35,
                '.nextui-input-wrapper': {
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  border: '1px solid $accents3 !important',
                },
              }}
              value={currentFilter.bathrooms}
              onChange={(e) => {
                setCurrentFilter({
                  ...currentFilter,
                  bathrooms: parseFloat(e.target.value),
                });
              }}
            />
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default ListingDevelopmentData;
