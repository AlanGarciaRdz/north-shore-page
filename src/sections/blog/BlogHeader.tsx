import { Container, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { BaseImageProps } from 'src/components/base/BaseInterface';
import OptimizeImage from 'src/components/base/OptimizeImage';
import TitleWithBorder from 'src/components/base/TitleWithBorder';
import { MainSectionsContainerCSS } from 'styles/theme';

type BlogHeaderProps = {
  image: BaseImageProps;
  title: string;
};

export default function BlogHeader({ image, title }: BlogHeaderProps) {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'relative',
        height: '351px',
        '@sm': {
          height: '655px',
        },
        marginBottom: 40,
      }}
    >
      <Container
        css={{
          ...MainSectionsContainerCSS,
          width: '100%',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 80,
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
            <TitleWithBorder color='$white' title={title} />
          </Grid>
          <Grid xs={12} />
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
          height: '351px',
          '@sm': {
            height: '655px',
          },
        }}
      />
    </Container>
  );
}
