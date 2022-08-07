import { Container, Grid, Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import TitleWithBorder from 'src/components/base/TitleWithBorder';
import { DevelopmentCardProps } from 'src/components/development/Development.types';
import DevelopmentCard from 'src/components/development/DevelopmentCard';
import { MainSectionsContainerCSS } from 'styles/theme';

type ListingsPropertiesListProps = {
  title: string;
  developments: DevelopmentCardProps[];
};

export default function ListingsPropertiesList({
  title,
  developments,
}: ListingsPropertiesListProps) {
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
        <Grid xs={12} css={{ marginBottom: 40 }}>
          <Container
            css={{
              ...MainSectionsContainerCSS,
              width: '100%',
            }}
          >
            <Grid.Container justify='space-evenly'>
              {developments.map((development, developmentHeaderIndex) => {
                return (
                  <Grid
                    key={developmentHeaderIndex}
                    xs={12}
                    sm={5.8}
                    lg={3.8}
                    css={{ marginBottom: 30 }}
                  >
                    <DevelopmentCard {...development} />
                  </Grid>
                );
              })}
            </Grid.Container>
          </Container>
        </Grid>
        <Grid xs={12}>
          <Container
            css={{
              ...MainSectionsContainerCSS,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Pagination
              siblings={0}
              css={
                {
                  /*
                '.nextui-pagination-item': {
                  backgroundColor: 'transparent',
                  color: '$text',
                },
                '.nextui-pagination-item-active': {
                  backgroundColor: 'transparent',
                  span: {
                    color: '$text',
                  },
                },
                '.nextui-pagination-highlight': {
                  backgroundColor: 'transparent',
                },
                */
                }
              }
              color='secondary'
              total={20}
              initialPage={1}
            />
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
