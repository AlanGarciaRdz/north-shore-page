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

export async function getHomeHeader({
  headerImage,
  headerTitle,
  headerButton,
}: HomePageAttributesProps) {
  const developmentsMainCard: DevelopmentMainCardProps[] = [
    {
      url:
        LISTINGS_URL +
        formatToURL('Las lomas') +
        '/' +
        formatToURL('Hacienda Marina'),
      name: 'Hacienda Marina',
      price: 5137400,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + '?listing=' + formatToURL('Las lomas'),
        name: 'Las lomas',
      },
      amenities: [
        {
          name: 'Private pool',
        },
        {
          name: 'Pet Friendly',
        },
        {
          name: 'Parking on property',
        },
        {
          name: 'Ocean view',
        },
      ],
      images: [
        { src: '/dump/development-1.png', alt: 'development-1' },
        { src: '/dump/development-3.png', alt: 'development-3' },
      ],
    },
    {
      url:
        LISTINGS_URL +
        formatToURL('sayulita') +
        '/' +
        formatToURL('Casa de leon'),
      name: 'Casa de león',
      price: 8003200,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + '?listing=' + formatToURL('sayulita'),
        name: 'Sayulita',
      },
      amenities: [
        {
          name: 'Private pool',
        },
        {
          name: 'Pet Friendly',
        },
        {
          name: 'Parking on property',
        },
        {
          name: 'Ocean view',
        },
      ],
      images: [
        { src: '/dump/development-1.png', alt: 'development-1' },
        { src: '/dump/development-2.png', alt: 'development-2' },
        { src: '/dump/development-3.png', alt: 'development-3' },
        { src: '/dump/development-2.png', alt: 'development-2' },
      ],
    },
    {
      url:
        LISTINGS_URL +
        formatToURL('San Pancho') +
        '/' +
        formatToURL('Casa de Prueba'),
      name: 'Casa de Prueba',
      price: 8003200,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + '?listing=' + formatToURL('San Pancho'),
        name: 'San Pancho',
      },
      amenities: [
        {
          name: 'Private pool',
        },
        {
          name: 'Pet Friendly',
        },
        {
          name: 'Parking on property',
        },
        {
          name: 'Ocean view',
        },
      ],
      images: [
        { src: '/dump/development-1.png', alt: 'development-1' },
        { src: '/dump/development-2.png', alt: 'development-2' },
        { src: '/dump/development-3.png', alt: 'development-3' },
      ],
    },
  ];
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
    developments: developmentsMainCard,
  };
  return header;
}

export async function getHomeLocation({
  locationBody,
}: HomePageAttributesProps) {
  const developmentsCard: DevelopmentCardProps[] = [
    {
      url:
        LISTINGS_URL +
        formatToURL('Las lomas') +
        '/' +
        formatToURL('Hacienda Marina'),
      name: 'Hacienda Marina',
      price: 5137400,
      bathrroms: 2,
      bedrooms: 5,
      squareFT: 5200,
      listing: {
        url: LISTINGS_URL + '?listing=' + formatToURL('Las lomas'),
        name: 'Las lomas',
      },
      amenities: [
        {
          name: 'Private pool',
        },
        {
          name: 'Pet Friendly',
        },
        {
          name: 'Parking on property',
        },
        {
          name: 'Ocean view',
        },
      ],
      image: { src: '/dump/development-1.png', alt: 'development-1' },
    },
    {
      url:
        LISTINGS_URL +
        formatToURL('Sayulita') +
        '/' +
        formatToURL('Casa de leon'),
      name: 'Casa de león',
      price: 8003200,
      bathrroms: 10,
      bedrooms: 10,
      squareFT: 6500,
      listing: {
        url: LISTINGS_URL + '?listing=' + formatToURL('Sayulita'),
        name: 'Sayulita',
      },
      amenities: [
        {
          name: 'Private pool',
        },
        {
          name: 'Pet Friendly',
        },
        {
          name: 'Parking on property',
        },
        {
          name: 'Ocean view',
        },
      ],
      image: { src: '/dump/development-2.png', alt: 'development-2' },
    },
    {
      url:
        LISTINGS_URL +
        formatToURL('San Pancho') +
        '/' +
        formatToURL('Casa de Prueba'),
      name: 'Casa de Prueba',
      price: 8003200,
      bathrroms: 1,
      bedrooms: 1,
      squareFT: 900,
      listing: {
        url: LISTINGS_URL + '?listing=' + formatToURL('San Pancho'),
        name: 'San Pancho',
      },
      amenities: [
        {
          name: 'Private pool',
        },
        {
          name: 'Pet Friendly',
        },
        {
          name: 'Parking on property',
        },
        {
          name: 'Ocean view',
        },
      ],
      image: { src: '/dump/development-3.png', alt: 'development-3' },
    },
  ];
  const listings: ListingProps[] = [
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('San Pancho'),
      name: 'San Pancho',
      developments: [...developmentsCard, ...developmentsCard].map(
        (development, index) => {
          let returnDevelopment: DevelopmentCardProps = JSON.parse(
            JSON.stringify(development)
          );
          if (returnDevelopment.listing !== undefined)
            returnDevelopment.listing.name = 'San Pancho';
          return returnDevelopment;
        }
      ),
    },
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('Sayulita'),
      name: 'Sayulita',
      developments: [...developmentsCard].map((development, index) => {
        let returnDevelopment: DevelopmentCardProps = JSON.parse(
          JSON.stringify(development)
        );
        if (returnDevelopment.listing !== undefined)
          returnDevelopment.listing.name = 'Sayulita';
        return returnDevelopment;
      }),
    },
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('Lo de Marcos'),
      name: 'Lo de Marcos',
      developments: [
        ...developmentsCard,
        ...developmentsCard,
        ...developmentsCard,
      ].map((development, index) => {
        let returnDevelopment: DevelopmentCardProps = JSON.parse(
          JSON.stringify(development)
        );
        if (returnDevelopment.listing !== undefined)
          returnDevelopment.listing.name = 'Lo de Marcos';
        return returnDevelopment;
      }),
    },
    {
      url: LISTINGS_URL + '?listing=' + formatToURL('Las Lomas'),
      name: 'Las Lomas',
      developments: [
        ...developmentsCard,
        ...developmentsCard,
        ...developmentsCard,
        ...developmentsCard,
      ].map((development, index) => {
        let returnDevelopment: DevelopmentCardProps = JSON.parse(
          JSON.stringify(development)
        );
        if (returnDevelopment.listing !== undefined)
          returnDevelopment.listing.name = 'Las Lomas';
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

export async function getHomeAboutUs({
  aboutUsSlider,
  aboutUsBody,
}: HomePageAttributesProps) {
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

export async function getHomeBlogs(
  blogsData: any,
  { ourBlogBody }: HomePageAttributesProps
) {
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
