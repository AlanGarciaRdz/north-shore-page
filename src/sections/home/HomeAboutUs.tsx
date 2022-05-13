import { Container, Grid, Text } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import { AboutUsSlide } from 'src/components/aboutUs/AboutUs.type';
import AboutUsSwiper from 'src/components/aboutUs/AboutUsSwiper';
import OptimizeImage from 'src/components/base/OptimizeImage';
import TitleWithBorder from 'src/components/base/TitleWithBorder';
import RenderContainer from 'src/components/layouts/RenderContainer';
import { MainSectionsContainerCSS } from 'styles/theme';

type HomeAboutUsProps = {
  title: string;
  subtitle: string;
  sliders: AboutUsSlide[];
};

export default function HomeAboutUs({
  title,
  subtitle,
  sliders,
}: HomeAboutUsProps) {
  const [currentSlider, setCurrentSlider] = useState(0);
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
          <Grid xs={12} css={{ marginBottom: 30 }}>
            <Container
              css={{
                ...MainSectionsContainerCSS,
              }}
            >
              <TitleWithBorder title={title} />
            </Container>
          </Grid>
          <Grid xs={12} css={{ marginBottom: 40 }}>
            <Container
              css={{
                ...MainSectionsContainerCSS,
              }}
            >
              <Grid.Container>
                <Grid xs={12} sm={6} md={4}>
                  <Text css={{ marginBottom: 0 }}>{subtitle}</Text>
                </Grid>
              </Grid.Container>
            </Container>
          </Grid>
          <Grid xs={12} />
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
                    height: 418,
                    position: 'relative',
                    '@lg': {
                      height: 525,
                    },
                  }}
                >
                  <OptimizeImage
                    src={sliders[currentSlider].image.src}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt={sliders[currentSlider].image.alternativeText}
                    title={sliders[currentSlider].image.title}
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
                      height: 418,
                      position: 'relative',
                      '@lg': {
                        height: 525,
                      },
                    }}
                  >
                    <OptimizeImage
                      src={sliders[currentSlider].image.src}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                      alt={sliders[currentSlider].image.alternativeText}
                      title={sliders[currentSlider].image.title}
                      useBlur={true}
                    />
                  </Container>
                </Container>
              }
            />
          </Grid>
          <Grid xs={12} css={{ marginTop: -80, position: 'relative' }}>
            <Container
              css={{
                ...MainSectionsContainerCSS,
              }}
            >
              <Grid.Container justify='flex-end' alignItems='center'>
                <Grid xs={12} sm={8}>
                  <AboutUsSwiper
                    onChangeSlider={function (index: number): void {
                      setTimeout(() => setCurrentSlider(index), 400);
                    }}
                    sliders={sliders}
                  />
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
