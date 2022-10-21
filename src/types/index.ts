export interface IArrivalData {
  id: number;
  title: string;
  price: string;
  image: string;
  stars: number | null;
}

export type ITrandingData = IArrivalData;

export interface ICategoriesData {
  id: number;
  title: string;
  price: string;
  image: string;
  stars: number | null;
}

export interface IAllCategoriesData {
  caps: ICategoriesData[];
  tops: ICategoriesData[];
  tShirts: ICategoriesData[];
  sandals: ICategoriesData[];
  jackets: ICategoriesData[];
  coats: ICategoriesData[];
}

export type IPopularCategoriesData1 = 'caps' | 'dangles' | 'jeans' | 'shoes' | 'sunglasses' | 'tShirt';

export interface IFashionBlogData {
  id: number;
  title: string;
  type: string;
  date: { month: string; day: number; year: number };
  comments: number;
  subTitle: string;
  img: string;
}

export interface IResponseProp {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
  };
}
