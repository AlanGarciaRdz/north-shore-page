import { BlogSmallCardProps } from 'src/components/blogs/Blogs.type';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { ListingProps } from 'src/components/listing/Listings.types';
import { BLOGS_URL, LISTINGS_URL } from 'src/scripts/GeneralData';
import { getImageData } from 'src/scripts/ImageTools';
import { formatToURL } from 'src/scripts/StringTools';

interface HomePageAttributesProps {
  headerTitle: string;
  locationBody: string;
  aboutUsBody: string;
  ourBlogBody: string;
  headerImage: any;
  headerButton: any;
  aboutUsSlider: any[];
}

export async function getHomeHeader(
  { headerImage, headerTitle, headerButton }: HomePageAttributesProps,
  properties: DevelopmentMainCardProps[]
) {
  const headerImageLarge = getImageData(headerImage);
  const header = {
    page: {
      title: headerTitle,
      button: {
        label: headerButton.label,
        link: headerButton.link,
      },
      image: headerImageLarge,
    },
    developments: properties,
  };
  return header;
}

export async function getHomeLocation(
  { locationBody }: HomePageAttributesProps,
  properties: DevelopmentCardProps[]
) {
  const listings: ListingProps[] = [
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('San Pancho'),
      name: 'San Pancho',
      developments: properties.map((development, index) => {
        let returnDevelopment: DevelopmentCardProps = JSON.parse(JSON.stringify(development));
        if (returnDevelopment.listing !== undefined) returnDevelopment.listing.name = 'San Pancho';
        return returnDevelopment;
      }),
    },
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('Sayulita'),
      name: 'Sayulita',
      developments: properties.map((development, index) => {
        let returnDevelopment: DevelopmentCardProps = JSON.parse(JSON.stringify(development));
        if (returnDevelopment.listing !== undefined) returnDevelopment.listing.name = 'Sayulita';
        return returnDevelopment;
      }),
    },
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('Lo de Marcos'),
      name: 'Lo de Marcos',
      developments: properties.map((development, index) => {
        let returnDevelopment: DevelopmentCardProps = JSON.parse(JSON.stringify(development));
        if (returnDevelopment.listing !== undefined)
          returnDevelopment.listing.name = 'Lo de Marcos';
        return returnDevelopment;
      }),
    },
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('Las Lomas'),
      name: 'Las Lomas',
      developments: properties.map((development, index) => {
        let returnDevelopment: DevelopmentCardProps = JSON.parse(JSON.stringify(development));
        if (returnDevelopment.listing !== undefined) returnDevelopment.listing.name = 'Las Lomas';
        return returnDevelopment;
      }),
    },
  ];
  const location = {
    page: {
      title: 'Locations',
      subtitle: locationBody,
      goToListingLabel: 'See all properties at',
    },
    listings: listings,
  };
  return location;
}

export async function getHomeAboutUs({ aboutUsSlider, aboutUsBody }: HomePageAttributesProps) {
  const aboutUs = {
    page: {
      title: 'About San Pancho',
      subtitle: aboutUsBody,
    },
    sliders: aboutUsSlider.map((singleSlider: any) => {
      const image = getImageData(singleSlider.image);
      return {
        image,
        title: singleSlider.title,
        body: singleSlider.body,
      };
    }),
  };
  return aboutUs;
}

export async function getHomeBlogs(blogsData: any, { ourBlogBody }: HomePageAttributesProps) {
  const blogs: BlogSmallCardProps[] = blogsData.map((blog: any) => {
    const blogAttributes = blog.attributes;
    const thumbnail = getImageData(blogAttributes.thumbnail);
    return {
      url: BLOGS_URL + formatToURL(blogAttributes.url),
      title: blogAttributes.title,
      image: thumbnail,
    };
  });
  const homeBlogs = {
    page: {
      title: 'Our blog',
      goToBlogsLabel: 'See all Blogs',
      subtitle: ourBlogBody,
    },
    blogs,
  };
  return homeBlogs;
}
