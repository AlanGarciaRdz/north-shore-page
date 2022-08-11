import { DevelopmentCardProps } from '../development/Development.types';

export interface ListingData {
  name?: string;
  url?: string;
}

export interface ListingProps extends ListingData {
  developments?: DevelopmentCardProps[];
}
