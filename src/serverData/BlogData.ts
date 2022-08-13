import { BlogCardProps } from 'src/components/blog/Blog.types';
import { BLOGS_URL } from 'src/scripts/GeneralData';
import { getImageData } from 'src/scripts/ImageTools';
import { formatToURL } from 'src/scripts/StringTools';

interface BlogPageAttributesProps {
  headerImage: any;
  bottomBannerImage: any;
  bottomBannerText: string;
  bottomBannerLink: string;
}

export async function getBlogHeader({ headerImage }: BlogPageAttributesProps) {
  const headerImageLarge = getImageData(headerImage.data);
  const header = {
    page: {
      title: 'Our Blog',
      image: headerImageLarge,
    },
  };
  return header;
}

export async function getBlogVisitOurListings({
  bottomBannerImage,
  bottomBannerLink,
  bottomBannerText,
}: BlogPageAttributesProps) {
  const bottomBannerImageLarge = getImageData(bottomBannerImage.data);
  const header = {
    page: {
      title: bottomBannerText,
      link: bottomBannerLink,
      image: bottomBannerImageLarge,
    },
  };
  return header;
}

export async function getBlogList(blogsData: any) {
  const blgoCards: BlogCardProps[] = blogsData.map((blog: any) => {
    const blogData = blog.attributes;
    const thumbnail = getImageData(blogData.thumbnail.data);
    return {
      url: BLOGS_URL + '/' + formatToURL(blogData.url),
      title: blogData.title,
      views: blogData.blog_views.data.length,
      likes: blogData.blog_likes.data.length,
      smallDesc: blogData.smallDesc,
      image: thumbnail,
    };
  });
  const blogList = {
    blogs: blgoCards,
  };
  return blogList;
}
