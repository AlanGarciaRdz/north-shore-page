import { Button, Container, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import TitleWithBorder from 'src/components/base/TitleWithBorder';
import { BlogSmallCardProps } from 'src/components/blogs/Blogs.type';
import BlogsSmallSwiper from 'src/components/blogs/BlogsSmallSwiper';
import RenderContainer from 'src/components/layouts/RenderContainer';
import { BLOGS_URL } from 'src/scripts/GeneralData';
import { MainSectionsContainerCSS } from 'styles/theme';

type HomeBlogsProps = {
  title: string;
  subtitle: string;
  goToBlogsLabel: string;
  blogs: BlogSmallCardProps[];
};

export default function HomeBlogs({
  title,
  subtitle,
  blogs,
  goToBlogsLabel,
}: HomeBlogsProps) {
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
        <Grid xs={12} css={{ marginBottom: 24 }}>
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
        <Grid xs={12}>
          <Container
            css={{
              ...MainSectionsContainerCSS,
            }}
          >
            <Link href={BLOGS_URL}>
              <Button
                auto
                bordered
                iconRight={<BsArrowRight />}
                css={{
                  backgroundColor: '$background',
                  borderColor: '$background',
                  color: '$text',
                }}
              >
                {goToBlogsLabel}
              </Button>
            </Link>
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
