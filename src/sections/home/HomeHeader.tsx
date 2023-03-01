import { Button, Container, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BaseImageProps } from 'src/components/base/BaseInterface';
import OptimizeImage from 'src/components/base/OptimizeImage';
import { LISTINGS_URL } from 'src/scripts/GeneralData';
import { MainSectionsContainerCSS } from 'styles/theme';

type HomeHeaderProps = {
  image: BaseImageProps;
  title: string;
  button: {
    label: string;
    link: string;
  };
};

function HomeHeader({ image, title, button }: HomeHeaderProps) {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'relative',
        height: '655px',
      }}
    >
      <Container
        css={{
          ...MainSectionsContainerCSS,
          width: '100%',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 160,
          zIndex: 3,
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
          <Grid xs={6} md={12}>
            <Text h2 color='#ffffff' css={{ marginBottom: 16 }}>
              {title}
            </Text>
          </Grid>
          <Grid xs={12} />
          <Grid xs={12} sm={6}>
            <Link href={LISTINGS_URL}>
              <div>
                <Button
                  auto
                  onPress={() => {}}
                  css={{
                    width: '100%',
                    backgroundColor: '$white',
                    color: '$black',
                    '@sm': {
                      width: '388px',
                    },
                  }}
                >
                  {button.label}
                </Button>
              </div>
            </Link>
          </Grid>
        </Grid.Container>
      </Container>
      <Container
        fluid
        responsive={false}
        css={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          background: 'linear-gradient(180deg, rgba(2,0,36,0.3) 10%,  rgba(2,0,36,0.3) 100%)',
          zIndex: 2,
        }}
      />
      <OptimizeImage
        src={image.src}
        alt={image.alternativeText}
        title={image.title}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        useBlur={true}
        containerCSS={{
          zIndex: 1,
          position: 'absolute',
          width: '100vw',
          maxWidth: '100vw',
          overflow: 'hidden',
          height: '655px',
        }}
      />
    </Container>
  );
}
export default HomeHeader;
