import { Container, Grid } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import TitleWithBorder from 'src/components/base/TitleWithBorder';
import { DevelopmentMainCardProps } from 'src/components/development/Development.types';
import RenderContainer from 'src/components/layouts/RenderContainer';
import { MainSectionsContainerCSS } from 'styles/theme';

const DevelopmenstMainCard = dynamic(
  () => import('src/components/development/DevelopmentsMainCard/DevelopmenstMainCard'),
  {
    ssr: false,
  }
);

type ListingsFeaturedPropertiesProps = {
  title: string;
  developments: DevelopmentMainCardProps[];
};

export default function ListingsFeaturedProperties({
  title,
  developments,
  contactAgent,
}: ListingsFeaturedPropertiesProps & { contactAgent: () => void }) {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'relative',
      }}
    >
      <Grid.Container
        justify='space-between'
        alignItems='center'
        css={{
          width: '100%',
          bottom: 0,
          zIndex: 3,
        }}
      >
        <Grid xs={12} css={{ marginBottom: 40 }}>
          <Container
            css={{
              ...MainSectionsContainerCSS,
              width: '100%',
            }}
          >
            <TitleWithBorder title={title} />
          </Container>
        </Grid>
        <Grid xs={12} />
        <Grid xs={12}>
          <RenderContainer
            mobileView={
              <Container
                css={{
                  padding: 0,
                  margin: 'auto',
                }}
              >
                <DevelopmenstMainCard
                  addMarginLeft
                  developments={developments}
                  isNormalSwiper
                  contactAgent={contactAgent}
                />
              </Container>
            }
            desktopView={
              <Container
                css={{
                  ...MainSectionsContainerCSS,
                }}
              >
                <DevelopmenstMainCard
                  showNavButtons
                  developments={developments}
                  isNormalSwiper
                  contactAgent={contactAgent}
                />
              </Container>
            }
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
