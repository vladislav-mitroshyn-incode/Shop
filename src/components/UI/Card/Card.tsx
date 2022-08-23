import React from 'react';
import c from 'classnames';
import { ICategoriesData } from '../../../types';
import styles from './Card.module.scss';

interface ICard {
  cardData: ICategoriesData;
  className?: string;
}

const MAX_AMOUNT_STARS = 5;

const showStars = (amountStars: number): JSX.Element[] => {
  const starsElements = [];

  for (let i = 0; i < MAX_AMOUNT_STARS; i++) {
    const elem = (
      <div
        className={c(styles.star, { [styles.activeStar]: i < amountStars || amountStars === MAX_AMOUNT_STARS })}
        style={{ left: `${200 + i * 14}px` }}
      />
    );
    starsElements.push(elem);
  }
  return starsElements;
};

const Card: React.FC<ICard> = ({ cardData, className }) => {
  return (
    <div className={className}>
      <div className={styles.card__content}>
        <div className={styles.card__image}>
          <div className={styles.stars}>{cardData?.stars !== null ? showStars(cardData?.stars) : null}</div>
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
