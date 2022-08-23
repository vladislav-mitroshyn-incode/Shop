import React from 'react';
import { ICategoriesData } from '../../../types';
import styles from './Card.module.scss';

interface ICard {
  cardData: ICategoriesData;
  className?: string;
}

const Card: React.FC<ICard> = ({ cardData, className }) => {
  return (
    <div className={className}>
      <div className={styles.card__content}>
        {cardData.stars === null ? (
          <div className={styles.card__image}>
            <img src={cardData.image} alt={cardData.title} />
          </div>
        ) : cardData.stars === 5 ? (
          <div className={styles.card__image_five}>
            <img src={cardData.image} alt={cardData.title} />
          </div>
        ) : (
          <div className={styles.card__image_four}>
            <img src={cardData.image} alt={cardData.title} />
          </div>
        )}
        <div className={styles.card__subtitle}>
          <div className={styles.card__title}>{cardData.title}</div>
          <div className={styles.card__price}>$ {cardData.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
