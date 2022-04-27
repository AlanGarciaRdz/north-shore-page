import { Button, Container, Grid, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { DevelopmentCompleteProps } from 'src/components/development/Development.types';
import DevelopmentAmenities from 'src/components/development/DevelopmentAmenities';
import { MainSectionsContainerCSS } from 'styles/theme';

export default function DevelopmentDataInfo({
  description,
  amenities,
}: DevelopmentCompleteProps) {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'relative',
        marginBottom: 45,
        '@sm': {
          marginBottom: 80,
        },
      }}
    >
      <Container
        css={{
          ...MainSectionsContainerCSS,
          width: '100%',
        }}
      >
        <Grid.Container
          justify='space-between'
          alignItems='flex-start'
          css={{
            width: '100%',
          }}
        >
          <Grid xs={12} sm={6}>
            <Grid.Container
              justify='space-between'
              alignItems='center'
              css={{
                width: '100%',
              }}
            >
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Property Descriptions'}
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text>{description}</Text>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={0} css={{ height: 40 }} />
          <Grid xs={12} sm={4}>
            <Grid.Container
              justify='space-between'
              alignItems='center'
              css={{
                width: '100%',
              }}
            >
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Amenities'}
                </Text>
              </Grid>
              <Grid xs={12}>
                <DevelopmentAmenities amenities={amenities} />
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} />
          <Grid xs={12} sm={0} css={{ marginTop: 45 }}>
            <Button
              auto
              bordered
              css={{
                width: '100%',
              }}
            >
              {'Contact agent'}
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
