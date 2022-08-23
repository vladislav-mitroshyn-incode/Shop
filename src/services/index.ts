import { productsUtl, trandingsUtl, categoriesUtl, fashionBlogsUtl } from '../assets/urls';
import { IArrivalData, ITrandingData, IFashionBlogData, IAllCategoriesData, ICategoriesData } from '../types';

export const getNewArrivalsData = async () => {
  const { newArrivals }: { newArrivals: IArrivalData[] } = await ApiService.get(productsUtl);
  return { newArrivals };
};

export const getFashionBlogsData = async () => {
  const response: IFashionBlogData[] = await ApiService.get(fashionBlogsUtl);
  return response;
};

export const getTrandingNowData = async () => {
  const response: ITrandingData[] = await ApiService.get(trandingsUtl);
  return response;
};

export const getPopularCategorieItemData = async (currentCategori: string) => {
  const response: IAllCategoriesData = await ApiService.get(categoriesUtl);
  const currentData: ICategoriesData[] = response[currentCategori as keyof typeof response];
  return currentData;
};

export default class ApiService {
  static async get(url: string) {
    const data = await fetch(url);
    return data.json();
  }
}
