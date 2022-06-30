import React, { FC } from 'react';
import styles from './PopularCategories.module.scss';
import Tops from '../../../assets/categories/image.png';
import tShirts from '../../../assets/categories/image1.png';
import Caps from '../../../assets/categories/image2.png';
import Sandals from '../../../assets/categories/image3.png';
import Jackets from '../../../assets/categories/image4.png';
import Coats from '../../../assets/categories/image5.png';
import PopularCategoriItem from '../PopularCategoriItem/PopularCategoriItem';

const categories = [
  { img: <img src={Tops} alt="Tops" />, name: 'Tops' },
  { img: <img src={tShirts} alt="T-shirts" />, name: 'T-shirts' },
  { img: <img src={Caps} alt="Caps" />, name: 'Caps' },
  { img: <img src={Sandals} alt="Sandals" />, name: 'Sandals' },
  { img: <img src={Jackets} alt="Jackets" />, name: 'Jackets' },
  { img: <img src={Coats} alt="Coats" />, name: 'Coats' },
];

const PopularCategories: FC = () => {
  return (
    <section className={styles.popularCategories}>
      <div className={styles.popularCategories__container}>
        <h1>Popular categories</h1>
        <PopularCategoriItem categories={categories} />
      </div>
    </section>
  );
};

export default PopularCategories;
