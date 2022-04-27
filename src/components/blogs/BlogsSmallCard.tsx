import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

import OptimizeImage from '../base/OptimizeImage';
import { BlogSmallCardProps } from './Blogs.type';

type BlogsSmallCardProps = {
  blog: BlogSmallCardProps;
};

export default function BlogsSmallCard({ blog }: BlogsSmallCardProps) {
  return (
    <Link href={blog.url || '/'}>
      <Container
        responsive={false}
        fluid
        css={{
          padding: 0,
          margin: 0,
          width: '230px',
        }}
      >
        <Card
          clickable
          css={{
            borderRadius: 0,
            boxShadow: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <Card.Body
            css={{ padding: 0, margin: 0, borderRadius: 4, height: 156 }}
          >
            <OptimizeImage
              src={blog.image?.src || '/'}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              alt={blog.image?.alt}
              useBlur={false}
            />
          </Card.Body>
          <Card.Footer css={{ padding: 0, paddingTop: 16, borderRadius: 0 }}>
            <Grid.Container>
              <Grid xs={12} css={{ marginBottom: 8 }}>
                <Text css={{ margin: 0, padding: 0 }} weight='bold'>
                  {blog.title}
                </Text>
              </Grid>
              <Grid xs={12}>
                <Button
                  light
                  auto
                  css={{ padding: 0, margin: 0, height: 20 }}
                  iconRight={<BsArrowRight />}
                >
                  {`Read more`}
                </Button>
              </Grid>
            </Grid.Container>
          </Card.Footer>
        </Card>
      </Container>
    </Link>
  );
}
