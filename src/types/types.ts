export interface IArrivalData {
  id: number;
  title: string;
  price: string;
  image: string;
  stars: number | null;
}

export interface ICategoriesData {
  id: number;
  title: string;
  price: string;
  image: string;
  stars: number | null;
}

export type IPopularCategoriesData1 = 'caps' | 'dangles' | 'jeans' | 'shoes' | 'sunglasses' | 'tShirt';
