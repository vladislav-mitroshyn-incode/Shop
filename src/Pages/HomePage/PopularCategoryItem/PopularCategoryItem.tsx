import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PopularCategoryItem.module.scss';

interface PopularCategoriesItem {
  img: JSX.Element;
  name: string;
}

interface PopularCategoriesItemProps {
  categories: PopularCategoriesItem[];
}

const PopularCategoryItem: FC<PopularCategoriesItemProps> = ({ categories }) => {
  const setData = (category: PopularCategoriesItem) => {
    localStorage.setItem('currentCategory', category.name);
  };

  return (
    <div className={styles.popularCategories__content}>
      {categories.map((category, index) => (
        <NavLink
          to={`/category/${category.name.toLowerCase()}`}
          onClick={() => setData(category)}
          key={index}
          className={styles.popularCategories__body}
        >
          <div className={styles.body__image}>{category.img}</div>
          <div className={styles.body__name}>{category.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default PopularCategoryItem;
