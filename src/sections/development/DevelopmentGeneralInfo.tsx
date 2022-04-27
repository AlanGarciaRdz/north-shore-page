import { Container, Grid, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import OptimizeImage from 'src/components/base/OptimizeImage';
import { DevelopmentCompleteProps } from 'src/components/development/Development.types';
import RenderContainer from 'src/components/layouts/RenderContainer';
import { MainSectionsContainerCSS } from 'styles/theme';

export default function DevelopmentGeneralInfo({
  mapImage,
  mainImageMobile,
  mainImageDesktop,
  commonAmenities,
  appliances,
  walls,
  devices,
  roadTypes,
  title,
  connectivity,
  electricity,
  sewage,
  location,
  howToShow,
  price,
  m2,
  squareFT,
  lotM2,
  lotSqFT,
  oceanFrontMeters,
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
        marginBottom: 80,
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
          <Grid xs={12} css={{ marginBottom: 45 }}>
            <RenderContainer
              mobileView={
                <Container
                  fluid
                  responsive={false}
                  css={{
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    height: 400,
                    position: 'relative',
                  }}
                >
                  <OptimizeImage
                    src={mainImageMobile?.src || '/'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt={mainImageMobile?.alt}
                    useBlur={true}
                  />
                </Container>
              }
              desktopView={
                <Container
                  fluid
                  responsive={false}
                  css={{
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    height: 700,
                    position: 'relative',
                  }}
                >
                  <OptimizeImage
                    src={mainImageDesktop?.src || '/'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt={mainImageDesktop?.alt}
                    useBlur={true}
                  />
                </Container>
              }
            />
          </Grid>
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
                  {'Common Amenities: '}
                  <span style={{ fontWeight: 'normal' }}>
                    {commonAmenities}
                  </span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Appliances: '}
                  <span style={{ fontWeight: 'normal' }}>{appliances}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Walls: '}
                  <span style={{ fontWeight: 'normal' }}>{walls}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Devices: '}
                  <span style={{ fontWeight: 'normal' }}>{devices}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Road Types: '}
                  <span style={{ fontWeight: 'normal' }}>{roadTypes}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Title: '}
                  <span style={{ fontWeight: 'normal' }}>{title}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Connectivity: '}
                  <span style={{ fontWeight: 'normal' }}>{connectivity}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Electricity: '}
                  <span style={{ fontWeight: 'normal' }}>{electricity}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Sewage: '}
                  <span style={{ fontWeight: 'normal' }}>{sewage}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Location: '}
                  <span style={{ fontWeight: 'normal' }}>{location}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'How To Show: '}
                  <span style={{ fontWeight: 'normal' }}>{howToShow}</span>
                </Text>
              </Grid>
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
                  <span style={{ fontWeight: 'normal' }}>{price}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Total M2 const: '}
                  <span style={{ fontWeight: 'normal' }}>{m2}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Total SqFt: '}
                  <span style={{ fontWeight: 'normal' }}>{squareFT}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Lot M2: '}
                  <span style={{ fontWeight: 'normal' }}>{lotM2}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Lot SqFt: '}
                  <span style={{ fontWeight: 'normal' }}>{lotSqFT}</span>
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {'Ocen Front Meters: '}
                  <span style={{ fontWeight: 'normal' }}>
                    {oceanFrontMeters}
                  </span>
                </Text>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} />
          <Grid xs={12} css={{ marginTop: 45 }}>
            <RenderContainer
              mobileView={
                <Container
                  fluid
                  responsive={false}
                  css={{
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    height: 400,
                    position: 'relative',
                  }}
                >
                  <OptimizeImage
                    src={mapImage?.src || '/'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt={mapImage?.alt}
                    useBlur={true}
                  />
                </Container>
              }
              desktopView={
                <Container
                  fluid
                  responsive={false}
                  css={{
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    height: 700,
                    position: 'relative',
                  }}
                >
                  <OptimizeImage
                    src={mapImage?.src || '/'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt={mapImage?.alt}
                    useBlur={true}
                  />
                </Container>
              }
            />
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
