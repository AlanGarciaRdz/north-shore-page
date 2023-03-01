import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import qs from 'qs';
import { useEffect, useState } from 'react';
import API from 'src/API/API';
import { BlogPostProps } from 'src/components/blog/Blog.types';
import PageLayout from 'src/components/layouts/PageLayout';
import { useContactDataContext } from 'src/context/ContactDataContext';
import { BLOGS_URL } from 'src/scripts/GeneralData';
import BlogPostBody from 'src/sections/blogPost/BlogPostBody';
import BlogPostHeader from 'src/sections/blogPost/BlogPostHeader';
import { getBlogPostData } from 'src/serverData/BlogPostData';

async function GetBlogData(url: string) {
  const api = new API();
  const query = qs.stringify(
    {
      filters: {
        url: {
          $eq: url,
        },
      },
      populate: ['image', 'blog_likes', 'blog_views'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getBlogPage = await api.GET(`/blogs?${query}`);
  return getBlogPage;
}

export const getStaticProps = async (props: any) => {
  const { url } = props.params;
  console.log('URL');
  const responseBlog = await GetBlogData(url);
  const blogsData = responseBlog.data;
  if (blogsData.length === 0) {
    return {
      props: {
        blogData: {} as BlogPostProps,
      },
      redirect: {
        destination: BLOGS_URL,
      },
    };
  }
  const blogAttributes = { ...blogsData[0].attributes, id: blogsData[0].id };
  const blogData = await getBlogPostData(blogAttributes);
  return {
    props: {
      blogData,
    },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const query = qs.stringify(
    {},
    {
      encodeValuesOnly: true,
    }
  );
  const api = new API();
  const responseBlogs = await api.GET(`/blogs?${query}`);
  const blogsData = responseBlogs.data;
  const paths = blogsData.map((blog: any) => ({
    params: { url: blog.attributes.url },
  }));
  return {
    paths,
    fallback: 'blocking', // false or 'blocking'
  };
}

function Listings({ blogData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [likedBlogPost, setLikedBlogPost] = useState<{
    liked: boolean;
    id: number;
  }>({ liked: false, id: -1 });
  const router = useRouter();
  const contextData = useContactDataContext();
  const userData = contextData?.userData;

  async function CheckViewBlog() {
    if (userData !== undefined) {
      let createView = false;
      const myView = blogData.views.find((view: any) => view.userIP === userData.platformIp);
      if (myView !== undefined) {
        if (myView.data.attributes.viewed === false) {
          createView = true;
        }
      } else {
        createView = true;
      }
      if (createView) {
        const api = new API();
        const postBlogView = api.POST('/blog-views', {
          data: {
            userIP: userData.platformIp,
            viewed: true,
            blog: blogData.id,
          },
        });
      }
    }
  }

  async function CheckLikeBlog() {
    if (userData !== undefined) {
      let didLikeBlogPost = false;
      let likeId = -1;
      const myLike = blogData.views.find((view: any) => view.userIP === userData.platformIp);
      if (myLike !== undefined) {
        didLikeBlogPost = myLike.data.attributes.liked;
        likeId = myLike.data.id;
      }
      setLikedBlogPost({ liked: didLikeBlogPost, id: likeId });
    }
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      GetBlogData(router.query.url as string);
    }
  });

  useEffect(() => {
    CheckViewBlog();
    CheckLikeBlog();
  }, [userData]);

  if (blogData === undefined) {
    return <div />;
  }
  return (
    <PageLayout showContactCard={true}>
      <BlogPostHeader {...blogData} />
      <BlogPostBody {...blogData} />
    </PageLayout>
  );
}

export default Listings;
