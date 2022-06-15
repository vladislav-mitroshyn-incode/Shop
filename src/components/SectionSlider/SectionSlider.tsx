import React from 'react';
import ShopButton from '../UI/ShopButton/ShopButton';
import styles from './SectionSlider.module.scss';

const SectionSlider = () => {
  return (
    <section className={styles.slider}>
      <div className={styles.slider__container}>
        <div className={styles.slider__content}>
          <div>New collection</div>
          <h1>Menswear 2020</h1>
          <ShopButton typebutton="outlined">Shop sale</ShopButton>
          <ShopButton typebutton="primary">Shop the menswear</ShopButton>
        </div>
      </div>
    </section>
  );
};

export default SectionSlider;
