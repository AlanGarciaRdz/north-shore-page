import { BlogSmallCardProps } from 'src/components/blogs/Blogs.type';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { ListingProps } from 'src/components/listing/Listings.types';
import { BLOGS_URL, LISTINGS_URL } from 'src/scripts/GeneralData';
import { formatToURL } from 'src/scripts/StringTools';

export async function getHomeHeader() {
  const developmentsMainCard: DevelopmentMainCardProps[] = [
    {
      url:
        LISTINGS_URL +
        formatToURL('/Las lomas') +
        '/' +
        formatToURL('/Hacienda Marina'),
      name: 'Hacienda Marina',
      price: 5137400,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + formatToURL('/Las lomas'),
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
        formatToURL('/sayulita') +
        '/' +
        formatToURL('/Casa de leon'),
      name: 'Casa de león',
      price: 8003200,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + formatToURL('/sayulita'),
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
        formatToURL('/San Pancho') +
        '/' +
        formatToURL('/Casa de Prueba'),
      name: 'Casa de Prueba',
      price: 8003200,
      bathrroms: 5.5,
      bedrooms: 5.5,
      squareFT: 5.5,
      listing: {
        url: LISTINGS_URL + formatToURL('/San Pancho'),
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
  const header = {
    page: {
      title: 'Your house on the beach',
      button: {
        label: 'View listings',
        link: LISTINGS_URL,
      },
      image: {
        src: '/dump/home-header.png',
        alt: 'Home header image',
      },
    },
    developments: developmentsMainCard,
  };
  return header;
}

export async function getHomeLocation() {
  const developmentsCard: DevelopmentCardProps[] = [
    {
      url:
        LISTINGS_URL +
        formatToURL('/Las lomas') +
        '/' +
        formatToURL('/Hacienda Marina'),
      name: 'Hacienda Marina',
      price: 5137400,
      bathrroms: 2,
      bedrooms: 5,
      squareFT: 5200,
      listing: {
        url: LISTINGS_URL + formatToURL('/Las lomas'),
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
        formatToURL('/Sayulita') +
        '/' +
        formatToURL('/Casa de leon'),
      name: 'Casa de león',
      price: 8003200,
      bathrroms: 10,
      bedrooms: 10,
      squareFT: 6500,
      listing: {
        url: LISTINGS_URL + formatToURL('/Sayulita'),
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
        formatToURL('/San Pancho') +
        '/' +
        formatToURL('/Casa de Prueba'),
      name: 'Casa de Prueba',
      price: 8003200,
      bathrroms: 1,
      bedrooms: 1,
      squareFT: 900,
      listing: {
        url: LISTINGS_URL + formatToURL('/San Pancho'),
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
      url: LISTINGS_URL + formatToURL('/San Pancho'),
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
      url: LISTINGS_URL + formatToURL('/Sayulita'),
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
      url: LISTINGS_URL + formatToURL('/Lo de Marcos'),
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
      url: LISTINGS_URL + formatToURL('/Las Lomas'),
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
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dictum enim. ',
      goToListingLabel: 'See all properties at',
    },
    listings: listings,
  };
  return location;
}

export async function getHomeAboutUs() {
  const dumpText =
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dictum enim. Suspendisse et porta justo. Nulla eu libero viverra, vestibulum quam ac, consectetur eros. Sed eget velit ultricies, tristique ante vitae, venenatis risus.&nbsp;</p><p>Nam volutpat velit et metus feugiat ultricies. Fusce laoreet, ligula id efficitur ultrices, ante purus fringilla sapien, in iaculis enim neque at nisi. Vestibulum ultricies tellus vel diam tempus vehicula.&nbsp;</p>';
  const aboutUs = {
    page: {
      title: 'About San Pancho',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dictum enim. Suspendisse et porta justo. Nulla eu libero viverra, vestibulum quam ac, consectetur eros.',
    },
    sliders: [
      {
        image: {
          src: '/dump/about-us.png',
          alt: 'about-san-pancho',
        },
        title: 'Beaches',
        body: dumpText,
      },
      {
        image: {
          src: '/dump/development-2.png',
          alt: 'about-san-pancho',
        },
        title: 'Mountains',
        body: dumpText,
      },
      {
        image: {
          src: '/dump/development-1.png',
          alt: 'about-san-pancho',
        },
        title: 'Stores',
        body: dumpText,
      },
      {
        image: {
          src: '/dump/home-header.png',
          alt: 'about-san-pancho',
        },
        title: 'Discounts',
        body: dumpText,
      },
    ],
  };
  return aboutUs;
}

export async function getHomeBlogs() {
  const blogs: BlogSmallCardProps[] = [
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
    {
      url: BLOGS_URL + formatToURL('/Blog 1'),
      image: {
        src: '/dump/about-us.png',
        alt: 'about-san-pancho',
      },
      title: 'Blog 1',
    },
  ];
  const homeBlogs = {
    page: {
      title: 'Our blog',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dictum enim. Suspendisse et porta justo. Nulla eu libero viverra, vestibulum quam ac, consectetur eros.',
    },
    blogs,
  };
  return homeBlogs;
}
