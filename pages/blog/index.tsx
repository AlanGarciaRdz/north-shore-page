import { Container } from '@nextui-org/react';
import { InferGetStaticPropsType } from 'next';
import qs from 'qs';
import { useEffect, useState } from 'react';
import API from 'src/API/API';
import PageLayout from 'src/components/layouts/PageLayout';
import BlogHeader from 'src/sections/blog/BlogHeader';
import BlogList from 'src/sections/blog/BlogList';
import BlogVisitOurListings from 'src/sections/blog/BlogVisitOurListings';
import { getBlogHeader, getBlogList, getBlogVisitOurListings } from 'src/serverData/BlogData';

async function GetBlogs() {
  const api = new API();
  const query = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 5,
      },
      populate: {
        thumbnail: { populate: '*' },
        blog_likes: {
          filters: {
            liked: {
              $eq: true,
            },
          },
        },
        blog_views: {
          filters: {
            viewed: {
              $eq: true,
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getHomeBlogs = await api.GET(`/blogs?${query}`);
  return getHomeBlogs;
}

async function GetBlogData() {
  const api = new API();
  const query = qs.stringify(
    {
      populate: ['headerImage', 'bottomBannerImage'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getBlogPage = await api.GET(`/blog-page?${query}`);
  return getBlogPage;
}

export const getStaticProps = async () => {
  const responseBlogPage = await GetBlogData();
  const responseBlogs = await GetBlogs();
  const blogsData = responseBlogs.data;
  const homePageAttributes = responseBlogPage.data.attributes;
  const header = await getBlogHeader(homePageAttributes);
  const blogList = await getBlogList(blogsData);
  const visitOurListings = await getBlogVisitOurListings(homePageAttributes);
  const paginationData = responseBlogs.meta;
  return {
    props: {
      header,
      blogList,
      visitOurListings,
      paginationData,
    },
    revalidate: 60,
  };
};

function Listings({
  header,
  blogList,
  visitOurListings,
  paginationData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      GetBlogData();
      GetBlogs();
    }
  });
  return (
    <PageLayout showContactCard={true}>
      <BlogHeader title={header.page.title} image={header.page.image} />
      <Container
        fluid
        responsive={false}
        css={{
          padding: 0,
          margin: 0,
          marginBottom: 40,
        }}
      >
        <BlogList blogs={blogList.blogs} paginationData={paginationData} />
      </Container>
      <BlogVisitOurListings
        title={visitOurListings.page.title}
        link={visitOurListings.page.link}
        image={visitOurListings.page.image}
      />
    </PageLayout>
  );
}

export default Listings;
