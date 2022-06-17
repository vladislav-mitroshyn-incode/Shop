import React, { FC } from 'react';
import styles from './PopularCategoriItem.module.scss';

interface PopularCategoriesItem {
  img: JSX.Element;
  name: string;
}

interface PopularCategoriesItemProps {
  categories: PopularCategoriesItem[];
}

const PopularCategoriItem: FC<PopularCategoriesItemProps> = ({ categories }) => {
  return (
    <div className={styles.popularCategories__content}>
      {categories.map((categori, index) => (
        <div key={index} className={styles.popularCategories__body}>
          <div className={styles.body__image}>{categori.img}</div>
          <div className={styles.body__name}>{categori.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PopularCategoriItem;
