export type AmenitiesProps = {
  name: string;
};

export type DevelopmentMainCardProps = {
  id?: string;
  url?: string;
  name?: string;
  price?: number;
  bathrroms?: number;
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
  bathrroms?: number;
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
  description?: string;
  name?: string;
  price?: number;
  oceanFrontMeters?: number;
  squareFT?: number;
  lotSqFT?: number;
  m2?: number;
  lotM2?: number;
  bathrroms?: number;
  bedrooms?: number;
  commonAmenities?: string;
  appliances?: string;
  walls?: string;
  devices?: string;
  roadTypes?: string;
  title?: string;
  connectivity?: string;
  electricity?: string;
  sewage?: string;
  location?: string;
  howToShow?: string;
  listing?: {
    url?: string;
    name?: string;
  };
  images?: {
    src?: string;
    alt?: string;
  }[];
  mainImageDesktop?: {
    src?: string;
    alt?: string;
  };
  mainImageMobile?: {
    src?: string;
    alt?: string;
  };
  mapImage?: {
    src?: string;
    alt?: string;
  };
  amenities?: AmenitiesProps[];
};
