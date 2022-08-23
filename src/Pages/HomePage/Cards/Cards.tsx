import React from 'react';
import styles from './Cards.module.scss';
import womenImg from '../../../assets/cards/women.webp';
import menImg from '../../../assets/cards/men.webp';
import childImg from '../../../assets/cards/child.webp';
import ContainerComponent from '../../../components/UI/ContainerComponent/ContainerComponent';

const Cards = () => {
  return (
    <section className={styles.cards}>
      <ContainerComponent>
        <div className={styles.cards__list}>
          <div className={styles.card__item}>
            <img src={womenImg} alt="the girl in the pic" />
            <p>Women’s</p>
          </div>
          <div className={styles.card__item}>
            <img src={menImg} alt="the boy in the pic" />
            <p>Men’s</p>
          </div>
          <div className={styles.card__item}>
            <img src={childImg} alt="the child in the pic" />
            <p>Kids’</p>
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default Cards;
