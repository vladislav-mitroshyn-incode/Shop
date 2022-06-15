import React from 'react';
import c from 'classnames';
import styles from './Collections.module.scss';

const Collections = () => {
  return (
    <section className={styles.collections}>
      <div className={styles.collections__content}>
        <div className={c(styles.collections__body, styles.body)}>
          <div className={styles.collections__title}>
            <p>Summer Collections</p>
            <h1>Sale Up to 70%</h1>
          </div>
        </div>
        <div className={c(styles.collections__body, styles.body2)}>
          <div className={styles.collections__title}>
            <p>Deal of the week</p>
            <h1>
              Stay Warm With Our <br /> New Sweaters
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.collections__content}>
        <div className={c(styles.collections__body, styles.body3)}>
          <div className={styles.collections__title}>
            <p>New collection</p>
            <h1>
              Shoes & Bags <br /> autumn / winter 2020
            </h1>
          </div>
        </div>
        <div className={c(styles.collections__body, styles.body4)}>
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
