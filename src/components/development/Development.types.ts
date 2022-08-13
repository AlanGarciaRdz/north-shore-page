import { ListingData } from '../listing/Listings.types';

export type AmenitiesProps = {
  name: string;
};

export type DevelopmentMainCardProps = {
  id?: string;
  url?: string;
  name?: string;
  price?: number;
  bathroms?: number;
  bedrooms?: number;
  squareFT?: number;
  listing?: {
    url: string;
    name: string;
  };
  images?: {
    src: string;
    alt: string;
  }[];
  amenities?: AmenitiesProps[];
};

export type DevelopmentCardProps = {
  id?: string;
  url?: string;
  name?: string;
  price?: number;
  bathroms?: number;
  bedrooms?: number;
  squareFT?: number;
  listing?: {
    url: string;
    name: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  amenities?: AmenitiesProps[];
};

export type DevelopmentPropertyTypeProps = {
  label: string;
  value: string;
};

export type DevelopmentCompleteProps = {
  id?: string;
  url?: string;
  name?: string;
  description?: string;
  price?: number;
  lotSize?: number;
  area?: number;
  bathroms?: number;
  bedrooms?: number;
  exteriorFeatures?: string;
  interiorFeatures?: string;
  construction?: string;
  view?: string;
  cooling?: string;
  showingInstructions?: string;
  amenities?: AmenitiesProps[];
  listing?: ListingData;
  images?: {
    src: string;
    alt: string;
  }[];
  geo: {
    lat?: number;
    lng?: number;
  };
  fullProperty?: any;
};
