import { Container, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import { AmenitiesProps } from './Development.types';

type DevelopmentAmenitiesProps = {
  amenities?: AmenitiesProps[];
};

const DevelopmentAmenities = ({ amenities }: DevelopmentAmenitiesProps) => {
  return (
    <Container
      responsive={false}
      fluid
      css={{
        padding: 0,
        margin: 0,
        width: '100%',
        minHeight: 90,
      }}
    >
      <Grid.Container>
        {amenities?.map((amenity, index) => {
          return (
            <Grid css={{ marginRight: 8, marginBottom: 8 }} key={index}>
              <Container
                responsive={false}
                fluid
                css={{
                  padding: '2px 8px',
                  borderRadius: 3,
                  margin: 0,
                  backgroundColor: '$secondaryLight',
                  color: '$white',
                  height: 30,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {amenity.name}
              </Container>
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
};
export default DevelopmentAmenities;
