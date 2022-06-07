import React from 'react';
import styles from './SectionSlider.module.scss';

const SectionSlider = () => {
  return (
    <section className={styles.slider}>
      <div className={styles.slider__container}>
        <div className={styles.slider__content}>
          <div>New collection</div>
          <h1>Menswear 2020</h1>
          <button className={styles.btn__sale} type="button">
            Shop sale
          </button>
          <button className={styles.btn__menswear} type="button">
            Shop the menswear
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionSlider;
