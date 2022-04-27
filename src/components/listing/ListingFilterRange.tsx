import 'rc-slider/assets/index.css';

import { Grid, Text } from '@nextui-org/react';
import { isArray } from 'lodash';
import Slider from 'rc-slider';
import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { formatNumberToPrice } from 'src/scripts/StringTools';

import { ListingFilter } from './ListingFilterCard';

type ListingFilterRangeProps = {
  maxPrice: number;
  currentFilter: ListingFilter;
  setCurrentFilter: Dispatch<SetStateAction<ListingFilter>>;
};

function ListingFilterRange({
  maxPrice,
  currentFilter,
  setCurrentFilter,
}: ListingFilterRangeProps) {
  return (
    <Grid.Container justify='space-between'>
      <Grid>
        <Text>{'Price Range'}</Text>
      </Grid>
      <Grid>
        <Text weight={'bold'}>{`${formatNumberToPrice(
          currentFilter.minValue
        )} - ${formatNumberToPrice(currentFilter.maxValue)}`}</Text>
      </Grid>
      <Grid
        xs={12}
        css={{
          height: 35,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '.rc-slider-rail': {
            backgroundColor: '#D1D1D1',
          },
          '.rc-slider-track': {
            backgroundColor: '$secondaryLight',
          },
          '.rc-slider-handle': {
            backgroundColor: '$secondaryLight',
            border: '0px solid transparent',
            opacity: 1,
          },
          '.rc-slider-handle-dragging': {
            borderColor: 'transparent !important',
            boxShadow: 'none !important',
          },
        }}
      >
        <Slider
          range
          min={0}
          max={maxPrice}
          value={[currentFilter.minValue, currentFilter.maxValue]}
          onChange={(value: number | number[]) => {
            if (isArray(value)) {
              setCurrentFilter({
                ...currentFilter,
                minValue: value[0],
                maxValue: value[1],
              });
            }
          }}
        />
      </Grid>
    </Grid.Container>
  );
}

export default ListingFilterRange;
