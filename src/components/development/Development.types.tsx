export type AmenitiesProps = {
  name: string;
};

export type DevelopmentMainCardProps = {
  url: string;
  name: string;
  price: number;
  bathrroms: number;
  bedrooms: number;
  squareFT: number;
  listing: {
    url: string;
    name: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
  amenities: AmenitiesProps[];
};

export type DevelopmentCardProps = {
  url: string;
  name: string;
  price: number;
  bathrroms: number;
  bedrooms: number;
  squareFT: number;
  listing: {
    url: string;
    name: string;
  };
  image: {
    src: string;
    alt: string;
  };
  amenities: AmenitiesProps[];
};
