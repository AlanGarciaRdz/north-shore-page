import { Container, Grid } from '@nextui-org/react';
import htmlReactParser from 'html-react-parser';
import { useEffect, useState } from 'react';
import { BlogPostProps } from 'src/components/blog/Blog.types';
import { MainSectionsContainerCSS } from 'styles/theme';

export default function BlogPostBody({ body }: BlogPostProps) {
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
        css={{
          ...MainSectionsContainerCSS,
        }}
      >
        <Grid.Container>
          <Grid xs={12}>
            <div>{htmlReactParser(body)}</div>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
