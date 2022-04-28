export type BlogCardProps = {
  id?: string;
  url?: string;
  title?: string;
  smallDesc?: string;
  views?: number;
  likes?: number;
  image?: {
    src: string;
    alt: string;
  };
};
