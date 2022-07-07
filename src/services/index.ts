import { productsUtl, trandingsUtl, categoriesUtl, fashionBlogsUtl } from '../assets/urls';
import {
  IArrivalData,
  ITrandingData,
  ICategoriesData,
  IPopularCategoriesData1,
  IFashionBlogData,
} from '../types/types';

export const getNewArrivalsData = async () => {
  const { newArrivals }: { newArrivals: IArrivalData[] } = await ApiService.get(productsUtl);
  return { newArrivals };
};

export const getPopularCategoriesData = async () => {
  const response: Record<IPopularCategoriesData1, ICategoriesData[]> = await ApiService.get(categoriesUtl);
  return response;
};

export const getFashionBlogsData = async () => {
  const response: IFashionBlogData[] = await ApiService.get(fashionBlogsUtl);
  return response;
};

export const getTrandingNowData = async () => {
  const response: ITrandingData[] = await ApiService.get(trandingsUtl);
  return response;
};

export default class ApiService {
  static async get(url: string) {
    const data = await fetch(url);
    return data.json();
  }
}
