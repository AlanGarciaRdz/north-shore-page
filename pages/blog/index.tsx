import { Container } from '@nextui-org/react';
import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import PageLayout from 'src/components/layouts/PageLayout';
import BlogHeader from 'src/sections/blog/BlogHeader';
import BlogList from 'src/sections/blog/BlogList';
import BlogVisitOurListings from 'src/sections/blog/BlogVisitOurListings';
import { getBlogHeader, getBlogList, getBlogVisitOurListings } from 'src/serverData/BlogData';

export const getStaticProps = async () => {
  const header = await getBlogHeader();
  const blogList = await getBlogList();
  const visitOurListings = await getBlogVisitOurListings();
  return {
    props: {
      header,
      blogList,
      visitOurListings,
    },
  };
};

function Listings({
  header,
  blogList,
  visitOurListings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout showContactCard>
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
        <BlogList blogs={blogList.blogs} />
      </Container>
      <BlogVisitOurListings
        title={visitOurListings.page.title}
        image={visitOurListings.page.image}
      />
    </PageLayout>
  );
}

export default Listings;
