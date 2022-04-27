import { Container, Grid, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import TitleWithBorder from 'src/components/base/TitleWithBorder';
import { BlogSmallCardProps } from 'src/components/blogs/Blogs.type';
import BlogsSmallSwiper from 'src/components/blogs/BlogsSmallSwiper';
import RenderContainer from 'src/components/layouts/RenderContainer';
import { MainSectionsContainerCSS } from 'styles/theme';

type HomeBlogsProps = {
  title: string;
  subtitle: string;
  blogs: BlogSmallCardProps[];
};

export default function HomeBlogs({ title, subtitle, blogs }: HomeBlogsProps) {
  if (blogs.length === 0) return <div />;
  return (
    <Container
      fluid
      responsive={false}
      css={{
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'relative',
        marginBottom: 80,
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
        <Grid xs={12}>
          <Container
            css={{
              ...MainSectionsContainerCSS,
            }}
          >
            <Grid.Container>
              <Grid xs={12} sm={3.7}>
                <Text css={{ marginBottom: 0 }}>{subtitle}</Text>
              </Grid>
            </Grid.Container>
          </Container>
        </Grid>
        <Grid xs={12} css={{ marginBottom: 32 }} />
        <Grid xs={12}>
          <RenderContainer
            mobileView={<BlogsSmallSwiper blogs={blogs} addMarginLeft />}
            desktopView={
              <Container
                css={{
                  ...MainSectionsContainerCSS,
                }}
              >
                <BlogsSmallSwiper blogs={blogs} />
              </Container>
            }
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
