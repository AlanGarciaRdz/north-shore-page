import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import OptimizeImage from 'src/components/base/OptimizeImage';
import { DevelopmentCompleteProps } from 'src/components/development/Development.types';
import RenderContainer from 'src/components/layouts/RenderContainer';
import { MainSectionsContainerCSS } from 'styles/theme';

export default function DevelopmentGallery({ images }: DevelopmentCompleteProps) {
  const [currentGallery, setCurrentGallery] = useState(0);
  if (images === undefined || images.length === 0) return <div />;
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
      <Container
        fluid
        responsive={false}
        css={{
          padding: 0,
          margin: 0,
          marginBottom: 90,
        }}
      >
        <Grid.Container
          justify='flex-start'
          alignItems='flex-start'
          css={{
            width: '100%',
          }}
        >
          <Grid xs={12}>
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
                    '@lg': {
                      height: 625,
                    },
                  }}
                >
                  <OptimizeImage
                    src={images[currentGallery].src || '/'}
                    layout='fill'
                    objectFit='contain'
                    objectPosition='center'
                    alt={images[currentGallery].alt}
                    useBlur={true}
                  />
                </Container>
              }
              desktopView={
                <Container css={{ ...MainSectionsContainerCSS }}>
                  <Container
                    fluid
                    responsive={false}
                    css={{
                      padding: 0,
                      margin: 0,
                      width: '100%',
                      height: 400,
                      position: 'relative',
                      '@lg': {
                        height: 625,
                      },
                    }}
                  >
                    <OptimizeImage
                      src={images[currentGallery].src || '/'}
                      layout='fill'
                      objectFit='contain'
                      objectPosition='center'
                      alt={images[currentGallery].alt}
                      useBlur={true}
                    />
                  </Container>
                </Container>
              }
            />
          </Grid>
          <Grid xs={12} css={{ marginTop: -44, position: 'relative' }}>
            <Container
              css={{
                ...MainSectionsContainerCSS,
              }}
            >
              <Grid.Container justify='center' alignItems='center'>
                <Grid
                  xs={12}
                  css={{
                    justifyContent: 'center',
                  }}
                >
                  <Card
                    css={{
                      borderRadius: 4,
                      width: '100%',
                      '@md': {
                        width: 344,
                      },
                    }}
                  >
                    <Card.Body css={{ padding: 24, borderRadius: 4 }}>
                      <Grid.Container justify='space-between'>
                        <Grid>
                          <Button
                            auto
                            disabled={currentGallery === 0}
                            onClick={() => {
                              if (currentGallery > 0) {
                                setCurrentGallery(currentGallery - 1);
                              }
                            }}
                            css={{
                              padding: 0,
                              borderRadius: 2,
                              backgroundColor: '#F5F5F5',
                              color: '$text',
                              width: '40px',
                              height: '40px',
                              marginRight: 8,
                            }}
                          >
                            <BsArrowLeft color='inherit' style={{ fontSize: 20 }} />
                          </Button>
                        </Grid>
                        <Grid>
                          <div
                            style={{
                              display: 'flex',
                              height: '100%',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Text weight='bold'>{(currentGallery + 1 + '').padStart(2, '0')}</Text>
                            <Text css={{ margin: '0px 5px' }}>{' / '}</Text>
                            <Text>{(images.length + '').padStart(2, '0')}</Text>
                          </div>
                        </Grid>
                        <Grid>
                          <Button
                            auto
                            disabled={currentGallery === images.length - 1}
                            onClick={() => {
                              if (currentGallery < images.length - 1) {
                                setCurrentGallery(currentGallery + 1);
                              }
                            }}
                            css={{
                              padding: 0,
                              borderRadius: 2,
                              backgroundColor: '#F5F5F5',
                              color: '$text',
                              width: '40px',
                              height: '40px',
                            }}
                          >
                            <BsArrowRight color='inherit' style={{ fontSize: 20 }} />
                          </Button>
                        </Grid>
                      </Grid.Container>
                    </Card.Body>
                  </Card>
                </Grid>
                <Grid xs={1} />
              </Grid.Container>
            </Container>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
