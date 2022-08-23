import React from 'react';
import styles from './CategoriesSort.module.scss';

const CategoriesSort: React.FC = () => {
  return (
    <section className={styles.categories__sort}>
      <div className={styles.sort}>
        <h1>Sort by</h1>
        <select className={styles.sort__select}>
          <option value="popularity">popularity</option>
          <option value="price">price</option>
        </select>
      </div>
      <div className={styles.show}>
        <h2>Show</h2>
        <select className={styles.show__select}>
          <option value="12">12</option>
          <option value="16">16</option>
        </select>
        <span>products per page</span>
      </div>
    </section>
  );
};

export default CategoriesSort;
