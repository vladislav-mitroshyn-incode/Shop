import React, { FC } from 'react';
import Slider from 'react-slick';
import styles from './NewArrivalsItem.module.scss';
import { IArrivalData } from '../../types/types';

interface NewArrivalsItemProps {
  data: IArrivalData[];
}

interface SettingsProp {
  infinite: boolean;
  dots: boolean;
  arrows: boolean;
  dotsClass: string;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

const NewArrivalsItem: FC<NewArrivalsItemProps> = ({ data }) => {
  const settings: SettingsProp = {
    infinite: false,
    dots: true,
    arrows: false,
    dotsClass: styles.my__dots,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className={styles.newArrivals__cards}>
      <Slider {...settings}>
        {data.map((card: IArrivalData) => (
          <div key={card.id} className={styles.newArrivals__card}>
            <div className={styles.newArrivals__content}>
              <div className={styles.newArrivals__image}>
                <img src={card.image} alt={card.title} />
              </div>
              <div className={styles.newArrivals__subtitle}>
                <div className={styles.newArrivals__title}>{card.title}</div>
                <div className={styles.newArrivals__price}>$ {card.price}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivalsItem;
