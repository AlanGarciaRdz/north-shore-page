import { Card, Container, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import OptimizeImage from 'src/components/base/OptimizeImage';

import { BlogCardProps } from './Blog.types';

const BlogCard = (blog: BlogCardProps) => {
  return (
    <Link href={blog.url || '/'}>
      <Container
        responsive={false}
        fluid
        css={{
          padding: 0,
          margin: 0,
          width: '100%',
        }}
      >
        <Card
          clickable
          css={{
            borderRadius: 4,
            boxShadow: '10px 10px 20px rgba(126, 148, 166, 0.1)',
          }}
        >
          <Card.Body css={{ padding: 0, margin: 0, height: 296 }}>
            <OptimizeImage
              src={blog.image?.src || '/'}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              alt={blog.image?.alt}
              useBlur={false}
            />
          </Card.Body>
          <Card.Footer css={{ padding: 24 }}>
            <Grid.Container>
              <Grid xs={12} css={{ marginBottom: 8 }}>
                <Text h3 css={{ margin: 0 }}>
                  {blog.title}
                </Text>
              </Grid>
              <Grid xs={12} css={{ marginBottom: 24 }}>
                <Text css={{ margin: 0 }}>{blog.smallDesc}</Text>
              </Grid>
              <Grid xs={12}>
                <Grid.Container justify='space-between'>
                  <Grid xs={6}>
                    <Text css={{ margin: 0 }}>{`${blog.views} Views`}</Text>
                  </Grid>
                  <Grid xs={6} justify='flex-end' alignItems='center'>
                    <AiOutlineHeart style={{ fontSize: 20, marginRight: 6 }} />
                    <Text
                      css={{ margin: 0 }}
                      weight='bold'
                    >{`${blog.likes}`}</Text>
                  </Grid>
                </Grid.Container>
              </Grid>
            </Grid.Container>
          </Card.Footer>
        </Card>
      </Container>
    </Link>
  );
};
export default BlogCard;
