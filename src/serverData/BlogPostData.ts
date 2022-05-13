import { BlogPostProps } from 'src/components/blog/Blog.types';
import { getImageData } from 'src/scripts/ImageTools';

export interface BlogPostAttributesProps {
  id: string;
  image: any;
  title: string;
  url: string;
  body: string;
  blog_views: any;
  blog_likes: any;
  publishedAt: string;
}

export async function getBlogPostData({
  id,
  image,
  title,
  blog_views,
  blog_likes,
  body,
  url,
  publishedAt,
}: BlogPostAttributesProps): Promise<BlogPostProps> {
  const blogImageLarge = getImageData(image);
  const blogData = {
    id: id,
    title: title,
    image: blogImageLarge,
    views: blog_views.data,
    likes: blog_likes.data,
    url: url,
    body: body,
    publishedAt: publishedAt,
  };
  return blogData;
}
