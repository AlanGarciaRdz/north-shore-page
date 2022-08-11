import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import qs from 'qs';
import { useEffect } from 'react';
import API from 'src/API/API';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import PageLayout from 'src/components/layouts/PageLayout';
import { GenerateAllDevelopmentCards, GenerateAllMainCards, GenerateAreas, GetMetaData } from 'src/scripts/RETSPropertiesData';
import { getHomeAboutUs, getHomeBlogs, getHomeHeader, getHomeLocation } from 'src/serverData/HomeData';

const HomeHeader = dynamic(() => import('src/sections/home/HomeHeader'), {
  ssr: false,
});
const HomeMainDevelopments = dynamic(() => import('src/sections/home/HomeMainDevelopments'), {
  ssr: false,
});
const HomeLocations = dynamic(() => import('src/sections/home/HomeLocations'), {
  ssr: false,
});
const HomeAboutUs = dynamic(() => import('src/sections/home/HomeAboutUs'), {
  ssr: false,
});
const HomeBlogs = dynamic(() => import('src/sections/home/HomeBlogs'), {
  ssr: false,
});

async function GetHomeBlogs() {
  const api = new API();
  const query = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 5,
      },
      populate: ['thumbnail'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getHomeBlogs = await api.GET(`/blogs?${query}`);
  return getHomeBlogs;
}

async function GetHomeData() {
  const api = new API();
  const query = qs.stringify(
    {
      populate: [
        'headerImage',
        'headerButton',
        'aboutUsSlider',
        'aboutUsSlider.image',
        'seo',
        'seo.metaImage',
        'seo.metaSocial',
        'seo.metaSocial.image',
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getHomePage = await api.GET(`/home-page?${query}`);
  return getHomePage;
}

export const getStaticProps = async () => {
  const metaData = await GetMetaData();
  const listingData = GenerateAreas(metaData);
  const retsDevelopmentsCards: DevelopmentCardProps[] = await GenerateAllDevelopmentCards(
    listingData,
    7
  );
  const mainDevelopmentsCards: DevelopmentMainCardProps[] = await GenerateAllMainCards(
    listingData,
    4
  );
  const responseHomePage = await GetHomeData();
  const responseHomeBlogs = await GetHomeBlogs();
  const blogsData = responseHomeBlogs.data;
  const homePageAttributes = responseHomePage.data.attributes;
  const header = await getHomeHeader(homePageAttributes, mainDevelopmentsCards);
  const location = await getHomeLocation(homePageAttributes, listingData, retsDevelopmentsCards);
  const aboutUs = await getHomeAboutUs(homePageAttributes);
  const homeBlogs = await getHomeBlogs(blogsData, homePageAttributes);
  return {
    props: {
      header,
      location,
      aboutUs,
      homeBlogs,
    },
  };
};

function Home({
  header,
  location,
  aboutUs,
  homeBlogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout showContactCard={true}>
      <HomeHeader
        title={header.page.title}
        button={{
          label: header.page.button.label,
          link: header.page.button.link,
        }}
        image={header.page.image}
      />
      <HomeMainDevelopments developments={header.developments} />
      <HomeLocations
        listings={location.listings}
        title={location.page.title}
        subtitle={location.page.subtitle}
        goToListingLabel={location.page.goToListingLabel}
      />
      <HomeAboutUs
        title={aboutUs.page.title}
        subtitle={aboutUs.page.subtitle}
        sliders={aboutUs.sliders}
      />
      <HomeBlogs
        title={homeBlogs.page.title}
        subtitle={homeBlogs.page.subtitle}
        blogs={homeBlogs.blogs}
        goToBlogsLabel={homeBlogs.page.goToBlogsLabel}
      />
    </PageLayout>
  );
}

export default Home;
