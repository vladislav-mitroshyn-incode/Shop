import React from 'react';
import Slider from 'react-slick';
import { IResponseProp, ITrandingData } from '../../../types';
import styles from './TrandingNowItem.module.scss';

interface TrandingNowItemProps {
  data: ITrandingData[];
}

interface SettingsProp {
  infinite: boolean;
  dots: boolean;
  arrows: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: IResponseProp[];
}

const TrandingNowItem: React.FC<TrandingNowItemProps> = ({ data }) => {
  const settings: SettingsProp = {
    infinite: false,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 991,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 1259,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider className={styles.tranding__card} {...settings}>
      {data.map((card, index) => (
        <div className={styles.card__content}>
          <div className={styles.card__body} key={index}>
            <div className={styles.card__image}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={styles.card__subtitle}>
              <div className={styles.card__title}>{card.title}</div>
              <div className={styles.card__price}>$ {card.price}</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TrandingNowItem;
