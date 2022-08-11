import APISimplyRETS from 'src/API/APISimplyRETS';
import { DevelopmentCardProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { ListingData } from 'src/components/listing/Listings.types';

import { LISTINGS_URL } from './GeneralData';
import { formatToURL } from './StringTools';

export async function GetMetaData() {
  const retsAPI = new APISimplyRETS();
  const getPropertiesMetaData = await retsAPI.OPTIONS('/properties');
  return getPropertiesMetaData;
}

export async function GetMainListing(listingData: ListingData[], limit: number) {
  let query: string = '';
  for (const listing of listingData) {
    query = query + `&neighborhoods=${listing.name}&`;
  }
  const retsAPI = new APISimplyRETS();
  const getProperties = await retsAPI.GET(`/properties?limit=${limit}${query}`);
  return getProperties;
}

export async function GetListing(searchArea: string, limit?: number) {
  const retsAPI = new APISimplyRETS();
  const getPropertiesNeighborhoods = await retsAPI.GET(
    `/properties?neighborhoods=${searchArea}${limit !== undefined ? `&limit=${limit}` : ''}`
  );
  const getPropertiesQ = await retsAPI.GET(
    `/properties?q=${searchArea}${limit !== undefined ? `&limit=${limit}` : ''}`
  );
  const totalData = [...getPropertiesNeighborhoods, ...getPropertiesQ].filter(
    (value: any, index: number, self: any) =>
      index === self.findIndex((t: any) => t.mlsId === value.mlsId)
  );
  if (limit !== undefined) {
    return totalData.splice(0, limit);
  }
  return totalData;
}

export function GenerateAreas(retsMetaData: any): ListingData[] {
  const envNeighborhoods = process.env.NEXT_PUBLIC_AVILABLE_NEIGHBORHOODS;
  if (envNeighborhoods === undefined) {
    return [];
  }
  const avilableNeighborhoods = envNeighborhoods.split(',');
  const areas: ListingData[] = [];
  for (const avilableNeighborhood of avilableNeighborhoods) {
    const filterAreas = retsMetaData.fields.neighborhoods.filter((x: string) => {
      return x.toUpperCase().includes(avilableNeighborhood.toUpperCase());
    });
    for (const filterArea of filterAreas) {
      const area = {
        url: LISTINGS_URL + '?listing=' + formatToURL(filterArea),
        name: filterArea,
      };
      areas.push(area);
    }
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
  retsProperty: any
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
      url: LISTINGS_URL + '?listing=' + retsProperty.geo.marketArea,
      name: retsProperty.geo.marketArea,
    },
    amenities: amenities,
    images: photos.map((photo: string, index: number) => ({
      src: photo,
      alt: `${retsProperty.listingId}-gallery-${index}`,
    })),
  };
  return developmentCard;
};

export async function GenerateAllDevelopmentCards(listingData: ListingData[], limit?: number) {
  const retsDevelopmentsCards: DevelopmentCardProps[] = await listingData.reduce(
    async (returnData: Promise<DevelopmentCardProps[]>, area: ListingData) => {
      const currentData = await returnData;
      if (area.name !== undefined) {
        const areaRetsProperties = await GetListing(area.name, limit);
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

export async function GenerateAllMainCards(listingData: ListingData[], limit: number) {
  const retsMainProperties = await GetMainListing(listingData, limit);
  const mainDevelopmentsCards: DevelopmentMainCardProps[] = [];
  for (const retsProperty of retsMainProperties) {
    const developmentMainCard: DevelopmentMainCardProps | undefined =
      GenerateDevelopmentMainCard(retsProperty);
    if (developmentMainCard !== undefined) {
      mainDevelopmentsCards.push(developmentMainCard);
    }
  }
  return mainDevelopmentsCards;
}
