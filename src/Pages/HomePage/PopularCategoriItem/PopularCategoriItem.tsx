import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PopularCategoriItem.module.scss';

interface PopularCategoriesItem {
  img: JSX.Element;
  name: string;
}

interface PopularCategoriesItemProps {
  categories: PopularCategoriesItem[];
}

const PopularCategoriItem: FC<PopularCategoriesItemProps> = ({ categories }) => {
  const setData = (categori: PopularCategoriesItem) => {
    localStorage.setItem('currentCategori', categori.name);
  };

  return (
    <div className={styles.popularCategories__content}>
      {categories.map((categori, index) => (
        <NavLink
          to={`/categorie/${categori.name.toLowerCase()}`}
          onClick={() => setData(categori)}
          key={index}
          className={styles.popularCategories__body}
        >
          <div className={styles.body__image}>{categori.img}</div>
          <div className={styles.body__name}>{categori.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default PopularCategoriItem;
