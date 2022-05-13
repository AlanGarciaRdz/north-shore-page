import { Container, Grid, Text } from '@nextui-org/react';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { BlogPostProps } from 'src/components/blog/Blog.types';
import { MainSectionsContainerCSS } from 'styles/theme';

export default function BlogPostTitle({ views, publishedAt }: BlogPostProps) {
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
        <Grid.Container justify='space-between'>
          <Grid>
            <Text weight='bold'>{`Published: ${moment(publishedAt).format(
              'LLL'
            )}`}</Text>
          </Grid>
          <Grid>
            <a
              href='https://twitter.com/share?ref_src=twsrc%5Etfw'
              className='twitter-share-button'
              data-show-count='false'
            >
              Tweet
            </a>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
