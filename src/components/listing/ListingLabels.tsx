import 'swiper/css';

import { Button, Grid, Text } from '@nextui-org/react';
import React, { FC, useRef } from 'react';

import { ListingProps } from './Listings.types';

interface ListingLabelsProps {
  listings: ListingProps[];
  onChangeListing: (index: number) => void;
  currentListingIndex: number;
  showLength?: boolean;
  fullWidth?: boolean;
}

const ListingLabels: FC<ListingLabelsProps> = ({
  onChangeListing,
  currentListingIndex,
  listings,
  showLength,
  fullWidth,
}) => {
  return (
    <Grid.Container>
      {listings.map((listing: any, index: number) => {
        const isActive = index === currentListingIndex;
        return (
          <Grid xs={fullWidth === true ? 12 : undefined} key={index}>
            <Button
              auto
              id={`listing-label-${listing.url}`}
              onClick={() => {
                onChangeListing(index);
              }}
              css={{
                width: fullWidth === true ? '100%' : 'auto',
                padding: '8px 16px',
                margin: 0,
                borderRadius: 20,
                backgroundColor: isActive ? '$black' : '$white',
                marginRight: fullWidth ? 0 : 20,
                marginBottom: 10,
              }}
            >
              <Text
                css={{
                  margin: 0,
                  height: '100%',
                  textTransform: 'capitalize',
                  color: isActive ? '$white' : '$black',
                  fontSize: '$base',
                }}
              >
                {listing.name.toLowerCase()}
                {showLength ? ` (${listing.developments.length})` : ''}
              </Text>
            </Button>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export default ListingLabels;
