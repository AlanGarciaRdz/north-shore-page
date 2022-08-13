import { Button, Container, Grid, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import TitleWithBorder from 'src/components/base/TitleWithBorder';
import { DevelopmentCompleteProps } from 'src/components/development/Development.types';
import { formatNumberToPrice } from 'src/scripts/StringTools';
import { MainSectionsContainerCSS } from 'styles/theme';

export default function DevelopmentHeader({
  name,
  listing,
  price,
  contactAgent,
}: DevelopmentCompleteProps & { contactAgent: () => void }) {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'relative',
        marginBottom: 81,
        paddingTop: 40,
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
          alignItems='flex-end'
          css={{
            width: '100%',
          }}
        >
          <Grid xs={12} sm={5}>
            <Grid.Container
              justify='space-between'
              alignItems='center'
              css={{
                width: '100%',
              }}
            >
              <Grid xs={12} css={{ marginBottom: 16 }}>
                <TitleWithBorder title={name || ''} />
              </Grid>
              <Grid xs={12}>
                <Button
                  auto
                  light
                  css={{
                    padding: 0,
                    margin: 0,
                    height: 'auto',
                    '.nextui-button-icon': { marginRight: 4 },
                  }}
                  icon={<GrLocation style={{ fontSize: 15 }} />}
                >
                  <Text>{listing?.name}</Text>
                </Button>
              </Grid>
              <Grid xs={12}>
                <Text weight='bold' css={{ margin: 0 }}>
                  {`${formatNumberToPrice(price)} USD`}
                </Text>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={0} css={{ height: 40 }} />
          <Grid xs={12} sm={5}>
            <Button
              auto
              bordered
              css={{
                width: '100%',
              }}
              onPress={contactAgent}
            >
              {'Contact agent'}
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
