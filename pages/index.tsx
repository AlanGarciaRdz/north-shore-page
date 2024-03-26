import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import qs from 'qs';
import { RefObject, useRef } from 'react';
import API from 'src/API/API';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import PageLayout from 'src/components/layouts/PageLayout';
import { CMSGenerateAllDevelopmentCards, CMSGenerateAllHomeCards } from 'src/scripts/CMSPropertiesData';
import { GenerateAreas, SimplyRETSGenerateAllDevelopmentCards } from 'src/scripts/RETSPropertiesData';
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
const HomeMap = dynamic(() => import('src/sections/home/HomeMap'), {
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
  const listingData = await GenerateAreas();
  const retsDevelopmentsCards: DevelopmentCardProps[] = await SimplyRETSGenerateAllDevelopmentCards(
    listingData,
    4
  );
  const cmsDevelopmentsCards: DevelopmentCardProps[] = await CMSGenerateAllDevelopmentCards(
    listingData,
    4
  );
  const mainDevelopmentsCards: DevelopmentMainCardProps[] = await CMSGenerateAllHomeCards(
    listingData
  );
  const responseHomePage = await GetHomeData();
  const responseHomeBlogs = await GetHomeBlogs();
  const blogsData = responseHomeBlogs.data;
  const homePageAttributes = responseHomePage.data.attributes;
  const header = await getHomeHeader(homePageAttributes, mainDevelopmentsCards);
  const location = await getHomeLocation(homePageAttributes, listingData, [
    ...retsDevelopmentsCards,
    ...cmsDevelopmentsCards,
  ]);
  const aboutUs = await getHomeAboutUs(homePageAttributes);
  const homeBlogs = await getHomeBlogs(blogsData, homePageAttributes);
  return {
    props: {
      header,
      location,
      aboutUs,
      homeBlogs,
    },
    revalidate: 60,
  };
};

function Home({
  header,
  location,
  aboutUs,
  homeBlogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const contactRef = useRef<HTMLDivElement>(null);
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
      <HomeMainDevelopments
        developments={header.developments}
        contactAgent={() => {
          if (contactRef.current !== null) {
            contactRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }}
      />
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

      <HomeMap
        geo={{
          lat: 20.90062,
          lng: -105.41393,
        }}
      />
      <div
        style={{
          width: '100%',
          height: 20,
          position: 'absolute',
          bottom: 1000,
        }}
        ref={contactRef as RefObject<HTMLDivElement>}
      />

      <div>
        <a
          href={`https://wa.me/5213335706111/?text=${encodeURIComponent("Hola dessde sitio northshorerealtysanpancho")}`}
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
      src="https://cms.northshorerealtysanpancho.com/uploads/Digital_Glyph_White.svg"
      alt="WhatsApp Logo"
      className="whatsapp-icon"
    />
        </a>
      </div>
    </PageLayout>
  );
}

export default Home;
