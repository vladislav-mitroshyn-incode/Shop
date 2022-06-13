import React from 'react';
import styles from './Collections.module.scss';

const Collections = () => {
  return (
    <section className={styles.collections}>
      <div className={styles.collections__content}>
        <div className={[styles.collections__body, styles.body].join(' ')}>
          <div className={styles.collections__title}>
            <p>Summer Collections</p>
            <h1>Sale Up to 70%</h1>
          </div>
        </div>
        <div className={[styles.collections__body, styles.body2].join(' ')}>
          <div className={styles.collections__title}>
            <p>Deal of the week</p>
            <h1>Stay Warm With Our New Sweaters</h1>
          </div>
        </div>
        <div className={[styles.collections__body, styles.body3].join(' ')}>
          <div className={styles.collections__title}>
            <p>New collection</p>
            <h1>Shoes & Bags autumn / winter 2020</h1>
          </div>
        </div>
        <div className={[styles.collections__body, styles.body4].join(' ')}>
          <div className={styles.collections__title}>
            <p>For All new Email Subscribers</p>
            <h1>Get 5% Off & Free Delivery</h1>
          </div>
          <span> </span>
        </div>
      </div>
    </section>
  );
};

export default Collections;
