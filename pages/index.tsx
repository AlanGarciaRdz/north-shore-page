import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import qs from 'qs';
import { useEffect } from 'react';
import API from 'src/API/API';
import APISimplyRETS from 'src/API/APISimplyRETS';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import PageLayout from 'src/components/layouts/PageLayout';
import { LISTINGS_URL } from 'src/scripts/GeneralData';
import { formatToURL } from 'src/scripts/StringTools';
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

async function GetListing() {
  const retsAPI = new APISimplyRETS();
  const getProperties = await retsAPI.GET('/properties');
  const getPropertiesMetData = await retsAPI.OPTIONS('/properties');
  return getProperties;
}

export const getStaticProps = async () => {
  interface RetsDevelopmentsCardsProps {
    developmentsCards: DevelopmentCardProps[];
    developmentMainCards: DevelopmentMainCardProps[];
  }
  const retsProperties = await GetListing();
  const retsDevelopmentsCards: RetsDevelopmentsCardsProps = retsProperties.reduce(
    (returnData: RetsDevelopmentsCardsProps, retsProperty: any, index: number) => {
      const amenities = [
        ...retsProperty.property.exteriorFeatures.split(','),
        ...retsProperty.property.interiorFeatures.split(','),
      ].map((amenity: string) => {
        return {
          name: amenity,
        };
      });
      const bathrroms = parseFloat(
        retsProperty.property.bathsFull.toString() +
          '.' +
          retsProperty.property.bathsHalf.toString()
      );
      const developmentCard: DevelopmentCardProps = {
        url: LISTINGS_URL + formatToURL('Las lomas') + '/' + formatToURL('Hacienda Marina'),
        name: 'Hacienda Marina',
        price: retsProperty.listPrice,
        bathrroms: bathrroms,
        bedrooms: retsProperty.property.bedrooms,
        squareFT: retsProperty.property.area,
        listing: {
          url: LISTINGS_URL + '?listing=' + formatToURL('Las lomas'),
          name: 'Las lomas',
        },
        amenities: amenities,
        image: { src: retsProperty.photos[0], alt: `${retsProperty.listingId}-thumbnail` },
      };
      returnData.developmentsCards.push(developmentCard);
      if (index < 3) {
        const developmentMainCard: DevelopmentMainCardProps = {
          url: LISTINGS_URL + formatToURL('Las lomas') + '/' + formatToURL('Hacienda Marina'),
          name: 'Hacienda Marina',
          price: retsProperty.listPrice,
          bathrroms: bathrroms,
          bedrooms: retsProperty.property.bedrooms,
          squareFT: retsProperty.property.area,
          listing: {
            url: LISTINGS_URL + '?listing=' + formatToURL('Las lomas'),
            name: 'Las lomas',
          },
          amenities: amenities,
          images: retsProperty.photos.map((photo: string, index: number) => ({
            src: photo,
            alt: `${retsProperty.listingId}-gallery-${index}`,
          })),
        };
        returnData.developmentMainCards.push(developmentMainCard);
      }
      return returnData;
    },
    {
      developmentsCards: [],
      developmentMainCards: [],
    } as RetsDevelopmentsCardsProps
  );
  const properties = [...retsProperties];
  const responseHomePage = await GetHomeData();
  const responseHomeBlogs = await GetHomeBlogs();
  const blogsData = responseHomeBlogs.data;
  const homePageAttributes = responseHomePage.data.attributes;
  const header = await getHomeHeader(
    homePageAttributes,
    retsDevelopmentsCards.developmentMainCards
  );
  const location = await getHomeLocation(
    homePageAttributes,
    retsDevelopmentsCards.developmentsCards
  );
  const aboutUs = await getHomeAboutUs(homePageAttributes);
  const homeBlogs = await getHomeBlogs(blogsData, homePageAttributes);
  return {
    props: {
      header,
      location,
      aboutUs,
      homeBlogs,
      properties,
    },
  };
};

function Home({
  header,
  location,
  aboutUs,
  homeBlogs,
  properties,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      GetHomeData();
      GetHomeBlogs();
      GetListing();
    }
  });
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
