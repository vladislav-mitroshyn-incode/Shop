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

export interface IPopularCategoriesData {
  caps: ICategoriesData[];
  dangles: ICategoriesData[];
  jeans: ICategoriesData[];
  shoes: ICategoriesData[];
  sunglasses: ICategoriesData[];
  tShirt: ICategoriesData[];
}
