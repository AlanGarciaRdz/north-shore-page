import APISimplyRETS from 'src/API/APISimplyRETS';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { ListingData } from 'src/components/listing/Listings.types';

import { LISTINGS_URL } from './GeneralData';
import { ValueExistOnObject } from './ObjectTools';
import { formatToURL } from './StringTools';

export async function GetMetaData() {
  const retsAPI = new APISimplyRETS();
  const getPropertiesMetaData = await retsAPI.OPTIONS('/properties');
  return getPropertiesMetaData;
}

export async function GetAllListing() {
  const retsAPI = new APISimplyRETS();
  const getProperties = await retsAPI.GET(
    `/properties?status=Active&q=Sayulita&q=San Pancho&count=true`
  );
  return getProperties;
}

export async function GetMainListing(listingData: ListingData, limit: number) {
  const retsAPI = new APISimplyRETS();
  let query = '';
  for (const listing of listingData.searchQuerys) {
    query += `&q=${listing}`;
  }
  const getProperties = await retsAPI.GET(`/properties?status=Active&limit=${limit}${query}`);
  return getProperties;
}

export async function GetListing(listingData: ListingData, limit?: number) {
  const retsAPI = new APISimplyRETS();
  let query = '';
  for (const listing of listingData.searchQuerys) {
    query += `&q=${listing}`;
  }
  const getPropertiesNeighborhoods = await retsAPI.GET(
    `/properties?status=Active${query}${limit !== undefined ? `&limit=${limit}` : ''}`
  );
  const totalData = getPropertiesNeighborhoods.filter(
    (value: any, index: number, self: any) =>
      index === self.findIndex((t: any) => t.mlsId === value.mlsId)
  );
  if (limit !== undefined) {
    return totalData.splice(0, limit);
  }
  return totalData;
}

export async function GetSearchListing(
  query: string,
  limit?: number,
  offset?: number,
  minprice?: number,
  maxprice?: number,
  minbeds?: number,
  minbaths?: number
) {
  const retsAPI = new APISimplyRETS();
  const getPropertiesNeighborhoods = await retsAPI.GETWITHCOUNT(
    `/properties?status=Active&count=true${query}
    ${limit !== undefined ? `&limit=${limit}` : ''}
    ${offset !== undefined ? `&offset=${offset}` : '&offset=0'}
    ${minprice !== undefined ? `&minprice=${minprice}` : ''}
    ${maxprice !== undefined ? `&maxprice=${maxprice}` : ''}
    ${minbeds !== undefined ? `&minbeds=${minbeds}` : ''}
    ${minbaths !== undefined ? `&minbaths=${minbaths}` : ''}`
  );
  return getPropertiesNeighborhoods;
}

export function GenerateAreas(retsMetaData: any): ListingData[] {
  //"San Pancho,Sayulita,Lo de Marcos,Las Lomas,Punta Mita,Litibu"
  const avilableNeighborhoods = [
    {
      name: 'San Pancho',
      searchQuerys: ['San Pancho'],
    },
    {
      name: 'Sayulita',
      searchQuerys: ['Sayulita'],
    },
    {
      name: 'Lo de Marcos',
      searchQuerys: ['Lo de Marcos'],
    },
    /*
    {
      name: 'Las Lomas',
      searchQuerys: ["Las Lomas"]
    },
    */
    {
      name: 'Punta Mita',
      searchQuerys: ['Punta Mita', 'Punta de Mita'],
    },
    {
      name: 'Litibu',
      searchQuerys: ['Litibu'],
    },
  ];
  const areas: ListingData[] = [];
  for (const avilableNeighborhood of avilableNeighborhoods) {
    const area = {
      url: LISTINGS_URL + '?location=' + formatToURL(avilableNeighborhood.name),
      locationFilter: formatToURL(avilableNeighborhood.name),
      name: avilableNeighborhood.name,
      searchQuerys: avilableNeighborhood.searchQuerys,
    };
    areas.push(area);
  }
  return areas;
}

export function GenerateDevelopmentCard(
  retsProperty: any,
  listingData: ListingData
): DevelopmentCardProps | undefined {
  if (retsProperty.property.subdivision === null) {
    return undefined;
  }
  const exteriorFeatures = (
    retsProperty.property.exteriorFeatures !== null
      ? retsProperty.property.exteriorFeatures.split(',')
      : []
  ).splice(0, 3);
  const interiorFeatures = (
    retsProperty.property.interiorFeatures !== null
      ? retsProperty.property.interiorFeatures.split(',')
      : []
  ).splice(0, 3);
  const amenities = [...exteriorFeatures, ...interiorFeatures].map((amenity: string) => {
    return {
      name: amenity,
    };
  });

  const bathrroms = parseFloat(
    retsProperty.property.bathsFull.toString() + '.' + retsProperty.property.bathsHalf.toString()
  );
  const developmentCard: DevelopmentCardProps = {
    url: LISTINGS_URL,
    name: 'Nombre',
    price: retsProperty.listPrice,
    bathrroms: bathrroms,
    bedrooms: retsProperty.property.bedrooms,
    squareFT: retsProperty.property.area,
    listing: {
      url: listingData.url || '',
      name: listingData.name || '',
    },
    amenities: amenities,
    image: { src: retsProperty.photos[0], alt: `${retsProperty.listingId}-thumbnail` },
  };
  return developmentCard;
}

export const GenerateDevelopmentMainCard = (
  retsProperty: any,
  listingData: ListingData
): DevelopmentMainCardProps | undefined => {
  if (retsProperty.property.subdivision === null) {
    return undefined;
  }
  const exteriorFeatures = (
    retsProperty.property.exteriorFeatures !== null
      ? retsProperty.property.exteriorFeatures.split(',')
      : []
  ).splice(0, 3);
  const interiorFeatures = (
    retsProperty.property.interiorFeatures !== null
      ? retsProperty.property.interiorFeatures.split(',')
      : []
  ).splice(0, 3);
  const amenities = [...exteriorFeatures, ...interiorFeatures].map((amenity: string) => {
    return {
      name: amenity,
    };
  });

  const bathrroms = parseFloat(
    retsProperty.property.bathsFull.toString() + '.' + retsProperty.property.bathsHalf.toString()
  );

  const photos = retsProperty.photos.splice(0, 3);
  const developmentCard: DevelopmentMainCardProps = {
    url: LISTINGS_URL,
    name: 'Nombre',
    price: retsProperty.listPrice,
    bathrroms: bathrroms,
    bedrooms: retsProperty.property.bedrooms,
    squareFT: retsProperty.property.area,
    listing: {
      url: listingData.url || '',
      name: listingData.name || '',
    },
    amenities: amenities,
    images: photos.map((photo: string, index: number) => ({
      src: photo,
      alt: `${retsProperty.listingId}-gallery-${index}`,
    })),
  };
  return developmentCard;
};

export function GetRetsPropertyArea(listingData: ListingData[], retsProperty: any) {
  for (const listing of listingData) {
    for (const searchQuery of listing.searchQuerys) {
      if (
        ValueExistOnObject(retsProperty, (value: any) => {
          if (
            value !== null &&
            value.toString().toUpperCase().includes(searchQuery.toUpperCase())
          ) {
            return true;
          }
          return false;
        })
      ) {
        return listing;
      }
    }
  }
  return undefined;
}

export async function GenerateSearchDevelopmentCards(
  listingData: ListingData[],
  searchListing?: ListingData,
  limit?: number,
  offset?: number,
  minprice?: number,
  maxprice?: number,
  minbeds?: number,
  minbaths?: number
) {
  let query = '';
  if (searchListing === undefined) {
    for (const listing of listingData) {
      for (const searchQuery of listing.searchQuerys) {
        query = query + `&q=${searchQuery}`;
      }
    }
  } else {
    for (const searchQuery of searchListing.searchQuerys) {
      query = query + `&q=${searchQuery}`;
    }
  }
  const { count, data } = await GetSearchListing(
    query,
    limit,
    offset,
    minprice,
    maxprice,
    minbeds,
    minbaths
  );
  const retsDevelopmentsCards: DevelopmentCardProps[] = [];
  for (const retsProperty of data) {
    const myArea =
      searchListing !== undefined ? searchListing : GetRetsPropertyArea(listingData, retsProperty);
    if (myArea !== undefined) {
      const developmentCard: DevelopmentCardProps | undefined = GenerateDevelopmentCard(
        retsProperty,
        myArea
      );
      if (developmentCard) {
        retsDevelopmentsCards.push(developmentCard);
      }
    }
  }
  return { cards: retsDevelopmentsCards, count };
}

export async function GenerateAllDevelopmentCards(listingData: ListingData[], limit?: number) {
  const retsDevelopmentsCards: DevelopmentCardProps[] = await listingData.reduce(
    async (returnData: Promise<DevelopmentCardProps[]>, area: ListingData) => {
      const currentData = await returnData;
      if (area.name !== undefined) {
        const areaRetsProperties = await GetListing(area, limit);
        for (const retsProperty of areaRetsProperties) {
          const developmentCard: DevelopmentCardProps | undefined = GenerateDevelopmentCard(
            retsProperty,
            area
          );
          if (developmentCard) {
            currentData.push(developmentCard);
          }
        }
      }
      return currentData;
    },
    Promise.resolve([] as DevelopmentCardProps[])
  );
  return retsDevelopmentsCards;
}

export async function GenerateAllMainCards(listingData: ListingData[]) {
  const mainDevelopmentsCards: DevelopmentMainCardProps[] = [];
  for (const singleListing of listingData) {
    const tempListingProperties = await GetMainListing(singleListing, 1);
    const developmentMainCard: DevelopmentMainCardProps | undefined = GenerateDevelopmentMainCard(
      tempListingProperties[0],
      singleListing
    );
    if (developmentMainCard !== undefined) {
      mainDevelopmentsCards.push(developmentMainCard);
    }
  }
  return mainDevelopmentsCards;
}
