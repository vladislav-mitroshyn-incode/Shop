import { productsUtl } from '../assets/urls';
import { IArrivalData } from '../types/types';

export const getNewArrivalsData = async () => {
  const { newArrivals }: { newArrivals: IArrivalData[] } = await ApiService.get(productsUtl);
  return { newArrivals };
};

export default class ApiService {
  static async get(url: string) {
    const data = await fetch(url);
    return data.json();
  }
}
