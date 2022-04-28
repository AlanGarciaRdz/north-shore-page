import { BlogCardProps } from 'src/components/blog/Blog.types';
import { BLOGS_URL } from 'src/scripts/GeneralData';
import { formatToURL } from 'src/scripts/StringTools';

export async function getBlogHeader() {
  const header = {
    page: {
      title: 'Our Blog',
      image: {
        src: '/dump/about-us.png',
        alt: 'Blog header image',
      },
    },
  };
  return header;
}

export async function getBlogVisitOurListings() {
  const header = {
    page: {
      title: 'Visit Our Listings',
      image: {
        src: '/dump/visit-our-listing.png',
        alt: 'Blog header image',
      },
    },
  };
  return header;
}

export async function getBlogList() {
  const blgoCards: BlogCardProps[] = [
    {
      url: BLOGS_URL + formatToURL('Blog 1'),
      title: 'Blog 1',
      smallDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
      views: 123,
      likes: 5,
      image: { src: '/dump/blog-1.png', alt: 'blog-1' },
    },
    {
      url: BLOGS_URL + formatToURL('Blog 2'),
      title: 'Blog 2',
      smallDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
      views: 123,
      likes: 5,
      image: { src: '/dump/blog-2.png', alt: 'blog-2' },
    },
    {
      url: BLOGS_URL + formatToURL('Blog 2'),
      title: 'Blog 2',
      smallDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
      views: 123,
      likes: 5,
      image: { src: '/dump/blog-2.png', alt: 'blog-2' },
    },
    {
      url: BLOGS_URL + formatToURL('Blog 1'),
      title: 'Blog 1',
      smallDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
      views: 123,
      likes: 5,
      image: { src: '/dump/blog-1.png', alt: 'blog-1' },
    },
    {
      url: BLOGS_URL + formatToURL('Blog 2'),
      title: 'Blog 2',
      smallDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
      views: 123,
      likes: 5,
      image: { src: '/dump/blog-2.png', alt: 'blog-2' },
    },
    {
      url: BLOGS_URL + formatToURL('Blog 1'),
      title: 'Blog 1',
      smallDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
      views: 123,
      likes: 5,
      image: { src: '/dump/blog-1.png', alt: 'blog-1' },
    },
    {
      url: BLOGS_URL + formatToURL('Blog 1'),
      title: 'Blog 1',
      smallDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
      views: 123,
      likes: 5,
      image: { src: '/dump/blog-1.png', alt: 'blog-1' },
    },
  ];
  const blogList = {
    blogs: [...blgoCards, ...blgoCards, ...blgoCards, ...blgoCards],
  };
  return blogList;
}
