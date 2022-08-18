import qs from 'qs';
import API from 'src/API/API';
import { DevelopmentCardProps, DevelopmentCompleteProps, DevelopmentMainCardProps } from 'src/components/development/Development.types';
import { ListingData } from 'src/components/listing/Listings.types';

import { LISTINGS_CMS_URL } from './GeneralData';
import { getImageData } from './ImageTools';
import { ValueExistOnObject } from './ObjectTools';
import { timeout } from './PromiseTools';

export async function CMSGetSingleListing(cmsId: string) {
  const retsAPI = new API();
  const query = qs.stringify(
    {
      populate: ['photos', 'geo'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getProperty = await retsAPI.GET(`/properties/${cmsId}?${query}`);
  return getProperty;
}

export async function CMSGetSearchListing(
  city?: string,
  page?: number,
  limit?: number,
  minprice?: number,
  maxprice?: number,
  minbeds?: number,
  minbaths?: number
) {
  const api = new API();
  const query = qs.stringify(
    {
      filters: {
        city: city
          ? {
              $eq: city,
            }
          : undefined,
        $and: [
          { price: { $gte: minprice } },
          { price: { $lte: maxprice } },
          { bedrooms: { $gte: minbeds } },
          { bathrooms: { $gte: minbaths } },
        ],
      },
      pagination:
        limit || page
          ? {
              page: page,
              pageSize: limit,
            }
          : undefined,
      populate: ['photos'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getProperties = await api.GET(`/properties?${query}`);
  return { data: getProperties.data, count: getProperties.meta.pagination.total };
}

export async function CMSGetListing(city: string, limit?: number) {
  const api = new API();
  const query = qs.stringify(
    {
      filters: {
        city: {
          $eq: city,
        },
      },
      pagination: limit
        ? {
            page: 1,
            pageSize: limit,
          }
        : undefined,
      populate: ['photos'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getProperties = await api.GET(`/properties?${query}`);
  if (getProperties.error === undefined) {
    const totalData = getProperties.data;
    if (limit !== undefined) {
      return totalData.splice(0, limit);
    }
    return totalData;
  }
  return [];
}

export async function CMSGetMainListing(limit?: number) {
  const api = new API();
  const query = qs.stringify(
    {
      filters: {
        showOnListings: true,
      },
      pagination: limit
        ? {
            page: 1,
            pageSize: limit,
          }
        : undefined,
      populate: ['photos'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getProperties = await api.GET(`/properties?${query}`);
  if (getProperties.error === undefined) {
    const totalData = getProperties.data;
    if (limit !== undefined) {
      return totalData.splice(0, limit);
    }
    return totalData;
  }
  return [];
}

export async function CMSGetHomeListing(limit?: number) {
  const api = new API();
  const query = qs.stringify(
    {
      filters: {
        showOnHome: true,
      },
      pagination: limit
        ? {
            page: 1,
            pageSize: limit,
          }
        : undefined,
      populate: ['photos'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const getProperties = await api.GET(`/properties?${query}`);
  if (getProperties.error === undefined) {
    const totalData = getProperties.data;
    if (limit !== undefined) {
      return totalData.splice(0, limit);
    }
    return totalData;
  }
  return [];
}

export function CMSGetPropertyArea(listingData: ListingData[], cmsProperty: any) {
  for (const listing of listingData) {
    for (const searchQuery of listing.searchQuerys) {
      if (
        ValueExistOnObject(cmsProperty, (value: any) => {
          if (
            value !== undefined &&
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

export function CMSGenerateDevelopmentCard(
  cmsProperty: any,
  listingData: ListingData
): DevelopmentCardProps | undefined {
  if (cmsProperty === undefined) {
    return undefined;
  }
  const { id, attributes } = cmsProperty;
  const exteriorFeatures = (
    attributes.exteriorFeatures !== undefined ? attributes.exteriorFeatures.split(',') : []
  ).splice(0, 3);
  const interiorFeatures = (
    attributes.interiorFeatures !== undefined ? attributes.interiorFeatures.split(',') : []
  ).splice(0, 3);
  const amenities = [...exteriorFeatures, ...interiorFeatures].map((amenity: string) => {
    return {
      name: amenity,
    };
  });

  const developmentCard: DevelopmentCardProps = {
    url: `${LISTINGS_CMS_URL}/${id}`,
    name: attributes.name,
    price: attributes.price,
    bathrooms: attributes.bathrooms || 0,
    bedrooms: attributes.bedrooms,
    squareFT: attributes.area,
    listing: {
      url: listingData.url || '',
      name: listingData.name || '',
    },
    amenities: amenities,
    image: {
      src: getImageData(attributes.photos.data[0]).src,
      alt: `${attributes.name}-thumbnail`,
    },
  };
  return developmentCard;
}

export const CMSGenerateDevelopmentMainCard = (
  cmsProperty: any,
  listingData: ListingData
): DevelopmentMainCardProps | undefined => {
  if (cmsProperty === undefined) {
    return undefined;
  }
  const { id, attributes } = cmsProperty;
  const exteriorFeatures = (
    attributes.exteriorFeatures !== undefined ? attributes.exteriorFeatures.split(',') : []
  ).splice(0, 3);
  const interiorFeatures = (
    attributes.interiorFeatures !== undefined ? attributes.interiorFeatures.split(',') : []
  ).splice(0, 3);
  const amenities = [...exteriorFeatures, ...interiorFeatures].map((amenity: string) => {
    return {
      name: amenity,
    };
  });
  const photos = attributes.photos.data.splice(0, 3);
  const developmentCard: DevelopmentMainCardProps = {
    url: `${LISTINGS_CMS_URL}/${id}`,
    name: attributes.name,
    price: attributes.price,
    bathrooms: attributes.bathrooms || 0,
    bedrooms: attributes.bedrooms,
    squareFT: attributes.area,
    listing: {
      url: listingData.url || '',
      name: listingData.name || '',
    },
    amenities: amenities,
    images: photos.map((photo: any, index: number) => ({
      src: getImageData(photo).src,
      alt: `${attributes.name}-gallery-${index}`,
    })),
  };
  return developmentCard;
};

export async function CMSGenerateAllDevelopmentCards(listingData: ListingData[], limit?: number) {
  const retsDevelopmentsCards: DevelopmentCardProps[] = await listingData.reduce(
    async (returnData: Promise<DevelopmentCardProps[]>, area: ListingData) => {
      const currentData = await returnData;
      if (area.name !== undefined) {
        await timeout(100);
        const areaRetsProperties = await CMSGetListing(area.name, limit);
        for (const cmsProperty of areaRetsProperties) {
          const developmentCard: DevelopmentCardProps | undefined = CMSGenerateDevelopmentCard(
            cmsProperty,
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

export async function CMSGenerateAllHomeCards(listingData: ListingData[]) {
  const mainDevelopmentsCards: DevelopmentMainCardProps[] = [];
  const mainProperties = await CMSGetHomeListing();
  for (const property of mainProperties) {
    const area = CMSGetPropertyArea(listingData, property.attributes);
    if (area !== undefined) {
      const developmentMainCard: DevelopmentMainCardProps | undefined =
        CMSGenerateDevelopmentMainCard(property, area);
      if (developmentMainCard !== undefined) {
        mainDevelopmentsCards.push(developmentMainCard);
      }
    }
  }
  return mainDevelopmentsCards;
}

export async function CMSGenerateAllListingCards(listingData: ListingData[]) {
  const mainDevelopmentsCards: DevelopmentMainCardProps[] = [];
  const mainProperties = await CMSGetMainListing();
  for (const property of mainProperties) {
    const area = CMSGetPropertyArea(listingData, property.attributes);
    if (area !== undefined) {
      const developmentMainCard: DevelopmentMainCardProps | undefined =
        CMSGenerateDevelopmentMainCard(property, area);
      if (developmentMainCard !== undefined) {
        mainDevelopmentsCards.push(developmentMainCard);
      }
    }
  }
  return mainDevelopmentsCards;
}

export async function CMSGenerateSearchDevelopmentCards(
  listingData: ListingData[],
  searchListing?: ListingData,
  page?: number,
  limit?: number,
  minprice?: number,
  maxprice?: number,
  minbeds?: number,
  minbaths?: number
) {
  const { count, data } = await CMSGetSearchListing(
    searchListing?.name,
    page,
    limit,
    minprice,
    maxprice,
    minbeds,
    minbaths
  );
  const retsDevelopmentsCards: DevelopmentCardProps[] = [];
  for (const cmsProperty of data) {
    const myArea =
      searchListing !== undefined
        ? searchListing
        : CMSGetPropertyArea(listingData, cmsProperty.attributes);
    if (myArea !== undefined) {
      const developmentCard: DevelopmentCardProps | undefined = CMSGenerateDevelopmentCard(
        cmsProperty,
        myArea
      );
      if (developmentCard) {
        retsDevelopmentsCards.push(developmentCard);
      }
    }
  }
  return { cards: retsDevelopmentsCards, count };
}

export async function CMSGenerateSingleProperty(cmsId: string, listingData: ListingData[]) {
  const cmsProperty = await CMSGetSingleListing(cmsId);
  if (cmsProperty === undefined) {
    return undefined;
  }
  const { id, attributes } = cmsProperty.data;
  const exteriorFeatures =
    attributes.exteriorFeatures !== undefined ? attributes.exteriorFeatures.split(',') : [];
  const amenities = exteriorFeatures.map((amenity: string) => {
    return {
      name: amenity,
    };
  });
  let geo: {
    lat?: number;
    lng?: number;
  } = {};
  if (attributes.geo.lat !== undefined && attributes.geo.lng !== undefined) {
    geo = {
      lat: attributes.geo.lat,
      lng: attributes.geo.lng,
    };
  }
  const myArea = CMSGetPropertyArea(listingData, attributes);
  const propertyToReturn: DevelopmentCompleteProps = {
    id: id,
    url: `${LISTINGS_CMS_URL}/${id}`,
    name: attributes.name,
    description: attributes.description !== undefined ? attributes.description : '',
    price: attributes.price !== undefined ? attributes.price : 0,
    lotSize: attributes.lotSizeArea !== undefined ? attributes.lotSizeArea : 0,
    area: attributes.area !== undefined ? attributes.area : 0,
    bathrooms: attributes.bathrooms !== undefined ? attributes.bathrooms : 0,
    bedrooms: attributes.bedrooms !== undefined ? attributes.bedrooms : 0,
    exteriorFeatures:
      attributes.exteriorFeatures !== undefined
        ? attributes.exteriorFeatures.replaceAll(',', ', ')
        : '',
    interiorFeatures:
      attributes.interiorFeatures !== undefined
        ? attributes.interiorFeatures.replaceAll(',', ', ')
        : '',
    construction: attributes.construction !== undefined ? attributes.construction : '',
    view: attributes.view !== undefined ? attributes.view : '',
    cooling: attributes.cooling !== undefined ? attributes.cooling : '',
    showingInstructions:
      attributes.showingInstructions !== undefined ? attributes.showingInstructions : '',
    amenities: amenities,
    listing: myArea,
    images: attributes.photos.data.map((photo: any, index: number) => ({
      src: getImageData(photo).src,
      alt: `${attributes.name}-gallery-${index}`,
    })),
    geo: geo,
  };
  return propertyToReturn;
}
