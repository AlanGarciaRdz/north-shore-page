import { Container, Grid, Text } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { DevelopmentCompleteProps } from 'src/components/development/Development.types';
import { formatNumberToPrice, IsEmptyString } from 'src/scripts/StringTools';
import { MainSectionsContainerCSS } from 'styles/theme';

const DevelopmentMap = dynamic(() => import('./DevelopmentMap'), {
  ssr: false,
});

export default function DevelopmentGeneralInfo({
  geo,
  price,
  lotSize,
  area,
  bathrooms,
  halfBathrooms,
  bedrooms,
  exteriorFeatures,
  interiorFeatures,
  construction,
  view,
  cooling,
  showingInstructions,
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
        marginBottom: 40,
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
              {IsEmptyString(exteriorFeatures) === false && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Exterior Features: '}
                    <span style={{ fontWeight: 'normal' }}>{exteriorFeatures}</span>
                  </Text>
                </Grid>
              )}
              {IsEmptyString(interiorFeatures) === false && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Interior Features: '}
                    <span style={{ fontWeight: 'normal' }}>{interiorFeatures}</span>
                  </Text>
                </Grid>
              )}
              {IsEmptyString(construction) === false && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Construction: '}
                    <span style={{ fontWeight: 'normal' }}>{construction}</span>
                  </Text>
                </Grid>
              )}
              {IsEmptyString(view) === false && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'View: '}
                    <span style={{ fontWeight: 'normal' }}>{view}</span>
                  </Text>
                </Grid>
              )}
              {IsEmptyString(cooling) === false && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Cooling: '}
                    <span style={{ fontWeight: 'normal' }}>{cooling}</span>
                  </Text>
                </Grid>
              )}
              {IsEmptyString(showingInstructions) === false && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'How To Show: '}
                    <span style={{ fontWeight: 'normal' }}>{showingInstructions}</span>
                  </Text>
                </Grid>
              )}
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={0} css={{ height: 20 }} />
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
                  {'GENERAL DESCRIPTION'}
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'List Price USD$: '}
                  <span style={{ fontWeight: 'normal' }}>{`${formatNumberToPrice(price)}`}</span>
                </Text>
              </Grid>
              {bathrooms !== undefined && bathrooms !== 0 && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Bathrooms: '}
                    <span style={{ fontWeight: 'normal' }}>{bathrooms}</span>
                  </Text>
                </Grid>
              )}
              {halfBathrooms !== undefined && halfBathrooms !== 0 && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Half Bathrooms: '}
                    <span style={{ fontWeight: 'normal' }}>{halfBathrooms}</span>
                  </Text>
                </Grid>
              )}
              {bedrooms !== undefined && bedrooms !== 0 && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Bedrooms: '}
                    <span style={{ fontWeight: 'normal' }}>{bedrooms}</span>
                  </Text>
                </Grid>
              )}
              {area !== undefined && area !== 0 && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Area: '}
                    <span style={{ fontWeight: 'normal' }}>{area}</span>
                  </Text>
                </Grid>
              )}
              {lotSize !== undefined && lotSize !== 0 && (
                <Grid xs={12} css={{ marginBottom: 16 }}>
                  <Text weight='bold' css={{ margin: 0 }}>
                    {'Lot Size: '}
                    <span style={{ fontWeight: 'normal' }}>{lotSize}</span>
                  </Text>
                </Grid>
              )}
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
