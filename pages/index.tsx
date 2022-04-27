import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import PageLayout from 'src/components/layouts/PageLayout';
import { getHomeAboutUs, getHomeBlogs, getHomeHeader, getHomeLocation } from 'src/serverData/HomeData';

const HomeHeader = dynamic(() => import('src/sections/home/HomeHeader'), {
  ssr: false,
});
const HomeMainDevelopments = dynamic(
  () => import('src/sections/home/HomeMainDevelopments'),
  { ssr: false }
);
const HomeLocations = dynamic(() => import('src/sections/home/HomeLocations'), {
  ssr: false,
});
const HomeAboutUs = dynamic(() => import('src/sections/home/HomeAboutUs'), {
  ssr: false,
});
const HomeBlogs = dynamic(() => import('src/sections/home/HomeBlogs'), {
  ssr: false,
});

export const getStaticProps = async () => {
  const header = await getHomeHeader();
  const location = await getHomeLocation();
  const aboutUs = await getHomeAboutUs();
  const homeBlogs = await getHomeBlogs();
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
    <PageLayout showContactCard>
      <HomeHeader
        title={header.page.title}
        button={{
          label: header.page.button.label,
          link: header.page.button.link,
        }}
        image={{
          src: header.page.image.src,
          alt: header.page.image.alt,
        }}
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
      />
    </PageLayout>
  );
}

export default Home;
