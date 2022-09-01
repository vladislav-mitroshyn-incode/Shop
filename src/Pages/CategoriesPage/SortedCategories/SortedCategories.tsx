import React from 'react';
import styles from './SortedCategories.module.scss';

const SortedCategories: React.FC = () => {
  return (
    <section className={styles.sorted__categories}>
      <div className={styles.sorted}>
        <h1>Sort by</h1>
        <select className={styles.sorted__select}>
          <option value="popularity">popularity</option>
          <option value="price">price</option>
        </select>
      </div>
      <div className={styles.showed}>
        <h2>Show</h2>
        <select className={styles.showed__select}>
          <option value="12">12</option>
          <option value="16">16</option>
        </select>
        <span>products per page</span>
      </div>
    </section>
  );
};

export default SortedCategories;
