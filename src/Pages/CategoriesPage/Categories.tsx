import React, { FC, useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import styles from './Categories.module.scss';
import ContainerComponent from '../../components/UI/ContainerComponent/ContainerComponent';
import { getPopularCategoryItemData } from '../../services';
import { ICategoriesData } from '../../types';
import SortedCategories from './SortedCategories/SortedCategories';
import { ReactComponent as filterImage } from '../../assets/categories-page/filter.svg';
import ShopButton from '../../components/UI/ShopButton/ShopButton';
import Filters from './Filters/Filters';
import TopPanel from '../../components/UI/TopPanel/TopPanel';

const Categories: FC = () => {
  const [data, setData] = useState<ICategoriesData[]>([]);
  const [currentCategoryName, setCurrentCategoryName] = useState('');

  useEffect(() => {
    const currentCategory = localStorage.getItem('currentCategory');
    if (currentCategory) {
      setCurrentCategoryName(currentCategory);
      getPopularCategoryItemData(currentCategory)
        .then((response) => setData(response))
        .catch((error: string) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <section className={styles.categories}>
      <TopPanel currentPage={currentCategoryName} />
      <ContainerComponent>
        <div className={styles.categories__content}>
          <div className={styles.categories__sidebar}>
            <ShopButton className={styles.sidebar__btn} icon={filterImage} typeButton="primary">
              Hide filters
            </ShopButton>
            <Filters />
          </div>
          <div className={styles.categories__products}>
            <SortedCategories />
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

export default Categories;
