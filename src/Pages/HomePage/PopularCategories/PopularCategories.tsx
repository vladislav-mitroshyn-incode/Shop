import React, { FC } from 'react';
import styles from './PopularCategories.module.scss';
import Tops from '../../../assets/categories/image.png';
import tShirts from '../../../assets/categories/image1.png';
import Caps from '../../../assets/categories/image2.png';
import Sandals from '../../../assets/categories/image3.png';
import Jackets from '../../../assets/categories/image4.png';
import Coats from '../../../assets/categories/image5.png';
import PopularCategoryItem from '../PopularCategoryItem/PopularCategoryItem';
import ContainerComponent from '../../../components/UI/ContainerComponent/ContainerComponent';

const categories = [
  { img: <img src={Tops} alt="Tops" />, name: 'Tops' },
  { img: <img src={tShirts} alt="T-shirts" />, name: 'T-Shirts' },
  { img: <img src={Caps} alt="Caps" />, name: 'Caps' },
  { img: <img src={Sandals} alt="Sandals" />, name: 'Sandals' },
  { img: <img src={Jackets} alt="Jackets" />, name: 'Jackets' },
  { img: <img src={Coats} alt="Coats" />, name: 'Coats' },
];

const PopularCategories: FC = () => {
  return (
    <section className={styles.popularCategories}>
      <ContainerComponent>
        <div className={styles.popularCategories__body}>
          <h1>Popular categories</h1>
          <PopularCategoryItem categories={categories} />
        </div>
      </ContainerComponent>
    </section>
  );
};

export default PopularCategories;
