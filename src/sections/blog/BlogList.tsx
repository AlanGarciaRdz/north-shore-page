import { Container, Grid, Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { BasePaginationProps } from 'src/components/base/BaseInterface';
import { BlogCardProps } from 'src/components/blog/Blog.types';
import BlogCard from 'src/components/blog/BlogCard';
import { MainSectionsContainerCSS } from 'styles/theme';

type BlogListProps = {
  blogs: BlogCardProps[];
  paginationData: BasePaginationProps;
};

export default function BlogList({ blogs, paginationData }: BlogListProps) {
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
            <Grid.Container justify='space-between'>
              {blogs.map((blog, blogIndex) => {
                return (
                  <Grid
                    key={blogIndex}
                    xs={12}
                    sm={4.8}
                    lg={2.8}
                    css={{ marginBottom: 30 }}
                  >
                    <BlogCard {...blog} />
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
              total={paginationData.pageCount}
              initialPage={paginationData.page}
            />
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
