import { BlogSmallCardProps } from 'src/components/blogs/Blogs.type';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { ListingData, ListingProps } from 'src/components/listing/Listings.types';
import { BLOGS_URL } from 'src/scripts/GeneralData';
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
  const headerImageLarge = getImageData(headerImage.data);
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
  listingData: ListingData[],
  properties: DevelopmentCardProps[]
) {
  const listings: ListingProps[] = listingData.map((listing: ListingData) => {
    return {
      ...listing,
      developments: properties.filter((property: DevelopmentCardProps) => {
        return property.listing?.name === listing.name;
      }),
    };
  });
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
      const image = getImageData(singleSlider.image.data);
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
    const thumbnail = getImageData(blogAttributes.thumbnail.data);
    return {
      url: BLOGS_URL + '/' + formatToURL(blogAttributes.url),
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
