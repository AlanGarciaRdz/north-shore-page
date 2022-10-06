import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';

export const LISTINGS_URL = '/listings';
export const LISTINGS_MLS_URL = '/listings/mls';
export const LISTINGS_CMS_URL = '/listings/cms';
export const BLOGS_URL = '/blog';
export const socialMedia = [
  { url: ' https://www.instagram.com/nsrsanpancho/', icon: AiFillInstagram, color: '#A63795' },
  {
    url: 'https://www.facebook.com/people/North-Shore-Realty-San-Pancho/100068236526938/',
    icon: AiFillFacebook,
    color: '#1874EB',
  },
  {
    url: ' https://www.youtube.com/channel/UCCHnCV-0-QBWy7_iEJzUX0g',
    icon: IoLogoYoutube,
    color: '#FF0000',
  },
];
export const avilableNeighborhoods = [
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
  {
    name: 'Las Lomas',
    searchQuerys: ['Las Lomas'],
  },
  {
    name: 'Punta Mita',
    searchQuerys: ['Punta Mita', 'Punta de Mita'],
  },
  {
    name: 'Litibu',
    searchQuerys: ['Litibu'],
  },
];
