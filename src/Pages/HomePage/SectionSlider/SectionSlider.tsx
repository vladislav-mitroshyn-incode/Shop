import React from 'react';
import ContainerComponent from '../../../components/UI/ContainerComponent/ContainerComponent';
import ShopButton from '../../../components/UI/ShopButton/ShopButton';
import styles from './SectionSlider.module.scss';

const SectionSlider = () => {
  return (
    <section className={styles.slider}>
      <ContainerComponent>
        <div className={styles.slider__body}>
          <div className={styles.slider__content}>
            <div>New collection</div>
            <h1>Menswear 2020</h1>
            <ShopButton typeButton="outlined">Shop sale</ShopButton>
            <ShopButton className={styles.slider__button_primary} typeButton="primary">
              Shop the menswear
            </ShopButton>
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default SectionSlider;
