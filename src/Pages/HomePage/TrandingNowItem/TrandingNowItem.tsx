import React from 'react';
import Slider from 'react-slick';
import { ITrandingData } from '../../../types';
import styles from './TrandingNowItem.module.scss';

interface TrandingNowItemProps {
  data: ITrandingData[];
}

interface SettingsProp {
  infinite: boolean;
  dots: boolean;
  arrow: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

const TrandingNowItem: React.FC<TrandingNowItemProps> = ({ data }) => {
  const settings: SettingsProp = {
    infinite: false,
    dots: false,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider className={styles.tranding__card} {...settings}>
      {data.map((card, index) => (
        <div key={index}>
          <div className={styles.card__image}>
            <img src={card.image} alt={card.title} />
          </div>
          <div className={styles.card__subtitle}>
            <div className={styles.card__title}>{card.title}</div>
            <div className={styles.card__price}>$ {card.price}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TrandingNowItem;
