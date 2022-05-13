import { BaseImageProps } from '../base/BaseInterface';

export type BlogCardProps = {
  url?: string;
  title?: string;
  smallDesc?: string;
  views?: number;
  likes?: number;
  image?: BaseImageProps;
};

export type BlogPostProps = {
  id: string;
  url: string;
  title: string;
  body: string;
  views: any[];
  likes: any[];
  image: BaseImageProps;
  publishedAt: string;
};
