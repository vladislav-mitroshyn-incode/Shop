import React from 'react';
import styles from './Cards.module.scss';
import womenImg from '../../../assets/card/women.png';
import menImg from '../../../assets/card/men.png';
import childImg from '../../../assets/card/child.png';
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
