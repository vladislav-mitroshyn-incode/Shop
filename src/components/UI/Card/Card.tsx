import React from 'react';
import c from 'classnames';
import styles from './Card.module.scss';
import { ICategoriesData } from '../../../types';

interface ICard {
  cardData: ICategoriesData;
  className?: string;
}

const Card: React.FC<ICard> = ({ cardData, className }) => {
  const MAX_AMOUNT_STARS = 5;

  const showStars = (amountStars: number): JSX.Element[] => {
    const starsElements = [];

    for (let i = 0; i < MAX_AMOUNT_STARS; i++) {
      const elem1 = (
        <div
          key={i}
          className={c(styles.card__star, { [styles.activeStar]: i < amountStars || amountStars === MAX_AMOUNT_STARS })}
          style={{ left: `${200 + i * 14}px` }}
        />
      );
      starsElements.push(elem1);
    }
    return starsElements;
  };

  return (
    <div className={className}>
      <div className={styles.card__content}>
        <div className={styles.card__image}>
          <div className={styles.card__stars}>{cardData?.stars !== null ? showStars(cardData?.stars) : null}</div>
          <img src={cardData.image} alt={cardData.title} />
        </div>
        <div className={styles.card__subtitle}>
          <div className={styles.card__title}>{cardData.title}</div>
          <div className={styles.card__price}>$ {cardData.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
