import React, { FC, useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import styles from './CategoriesPage.module.scss';
import ContainerComponent from '../../components/UI/ContainerComponent/ContainerComponent';
import { getPopularCategorieItemData } from '../../services';
import { ICategoriesData } from '../../types';
import CategoriesSort from './CategoriesSort/CategoriesSort';
import { ReactComponent as filterImage } from '../../assets/categories-page/filter.svg';
import ShopButton from '../../components/UI/ShopButton/ShopButton';
import Filters from './Filters/Filters';
import TopPanel from '../../components/UI/TopPanel/TopPanel';

const CategoriesPage: FC = () => {
  const [data, setData] = useState<ICategoriesData[]>([]);
  const [currentCategoriName, setCurrentCategoriName] = useState('');

  useEffect(() => {
    const currentCategori = localStorage.getItem('currentCategori');
    if (currentCategori) {
      setCurrentCategoriName(currentCategori);
      getPopularCategorieItemData(currentCategori)
        .then((response) => setData(response))
        .catch((error: string) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <section className={styles.categories}>
      <TopPanel currentPage={currentCategoriName} />
      <ContainerComponent>
        <div className={styles.categories__content}>
          <div className={styles.categories__sidebar}>
            <ShopButton className={styles.sidebar__btn} icon={filterImage} typeButton="primary">
              Hide filters
            </ShopButton>
            <Filters />
          </div>
          <div className={styles.categories__products}>
            <CategoriesSort />
            <div className={styles.products__list}>
              {data.map((card, index) => (
                <Card key={index} className={styles.products__item} cardData={card} />
              ))}
            </div>
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default CategoriesPage;
