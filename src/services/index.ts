import { IArrivalData, IPopularCategoriesData } from '../types/types';
import { productsUtl, categoriesUtl } from '../assets/urls';

export const getNewArrivalsData = async () => {
  const { newArrivals }: { newArrivals: IArrivalData[] } = await ApiService.get(productsUtl);
  return { newArrivals };
};

export const getPopularCategoriesData = async () => {
  const response: IPopularCategoriesData = await ApiService.get(categoriesUtl);
  return response;
};

export default class ApiService {
  static async get(url: string) {
    const data = await fetch(url);
    return data.json();
  }
}
