import React from 'react';
import styles from './Filters.module.scss';

const filtersItem = ['Clothes', 'Size', 'Color', 'Material', 'Brand', 'Price'];

const Filters: React.FC = () => {
  return (
    <div className={styles.filters}>
      {filtersItem.map((item, index) => (
        <div key={index} className={styles.filters__body}>
          <p className={styles.filters__title}>{item}</p>
          <button className={styles.filters__btn} type="button">
            +
          </button>
        </div>
      ))}
    </div>
  );
};

export default Filters;
