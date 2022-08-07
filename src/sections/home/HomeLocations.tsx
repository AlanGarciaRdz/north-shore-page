import { Button, Container, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import TitleWithBorder from 'src/components/base/TitleWithBorder';
import { DevelopmentCardProps } from 'src/components/development/Development.types';
import DevelopmentsSwiper from 'src/components/development/DevelopmentsSwiper';
import RenderContainer from 'src/components/layouts/RenderContainer';
import ListingLabels from 'src/components/listing/ListingLabels';
import { ListingProps } from 'src/components/listing/Listings.types';
import { LISTINGS_URL } from 'src/scripts/GeneralData';
import { MainSectionsContainerCSS } from 'styles/theme';

type HomeLocationsProps = {
  title: string;
  subtitle: string;
  listings: ListingProps[];
  goToListingLabel: string;
};

export default function HomeLocations({
  listings,
  title,
  subtitle,
  goToListingLabel,
}: HomeLocationsProps) {
  const [currentListingIndex, setCurrentListingIndex] = useState(0);
  if (listings.length === 0) return <div />;
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
          marginBottom: 40,
        }}
      >
        <Grid.Container
          justify='flex-start'
          alignItems='flex-start'
          css={{
            width: '100%',
          }}
        >
          <Grid xs={12} css={{ marginBottom: 30 }}>
            <TitleWithBorder title={title} />
          </Grid>
          <Grid xs={12} sm={3.7}>
            <Text css={{ marginBottom: 0 }}>{subtitle}</Text>
          </Grid>
        </Grid.Container>
      </Container>
      <Grid.Container
        justify='flex-start'
        alignItems='flex-start'
        css={{
          width: '100%',
        }}
      >
        <Grid xs={12} css={{ marginBottom: 40 }}>
          <RenderContainer
            mobileView={
              <Container
                css={{
                  ...MainSectionsContainerCSS,
                }}
              >
                <ListingLabels
                  fullWidth={true}
                  listings={listings}
                  onChangeListing={(index: number) => {
                    setCurrentListingIndex(index);
                  }}
                  currentListingIndex={currentListingIndex}
                />
              </Container>
            }
            desktopView={
              <Container
                css={{
                  ...MainSectionsContainerCSS,
                }}
              >
                <ListingLabels
                  listings={listings}
                  onChangeListing={(index: number) => {
                    setCurrentListingIndex(index);
                  }}
                  currentListingIndex={currentListingIndex}
                />
              </Container>
            }
          />
        </Grid>
        <Grid xs={12} css={{ marginBottom: 24 }}>
          <RenderContainer
            mobileView={
              <Container
                css={{
                  padding: 0,
                  margin: 'auto',
                }}
              >
                <DevelopmentsSwiper
                  addMarginLeft
                  developments={
                    listings[currentListingIndex].developments as DevelopmentCardProps[]
                  }
                />
              </Container>
            }
            desktopView={
              <Container
                css={{
                  ...MainSectionsContainerCSS,
                }}
              >
                <DevelopmentsSwiper
                  showNavButtons
                  developments={
                    listings[currentListingIndex].developments as DevelopmentCardProps[]
                  }
                />
              </Container>
            }
          />
        </Grid>
        <Grid xs={12}>
          <Container
            css={{
              ...MainSectionsContainerCSS,
            }}
          >
            <Link href={listings[currentListingIndex].url || LISTINGS_URL}>
              <Button
                auto
                bordered
                iconRight={<BsArrowRight />}
                css={{
                  backgroundColor: '$background',
                  borderColor: '$background',
                  color: '$text',
                }}
              >
                {`${goToListingLabel} ${listings[currentListingIndex].name}`}
              </Button>
            </Link>
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
