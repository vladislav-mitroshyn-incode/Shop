import React, { FC, useEffect, useState } from 'react';
import styles from './NewArrivals.module.scss';
import apiService from '../../services/products/apiService';
import { IArrivalData } from '../../types/types';
import NewArrivalsItem from '../NewArrivalsItem/NewArrivalsItem';

const NewArrivals: FC = () => {
  const [data, setData] = useState<IArrivalData[]>([]);

  const getNewArrivalsData = async () => {
    const { newArrivals }: { newArrivals: IArrivalData[] } = await apiService.get('http://localhost:3001/products');
    setData(newArrivals);
    return { newArrivals };
  };

  useEffect(() => {
    getNewArrivalsData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <section className={styles.newArrivals}>
      <div className={styles.newArrivals__container}>
        <div className={styles.newArrivals__title}>
          <h1>New arrivals</h1>
          <p>Check out our latest arrivals for the upcoming season</p>
          <p>
            <a>See the collection here</a>
          </p>
        </div>
      </div>
      <NewArrivalsItem data={data} />
    </section>
  );
};

export default NewArrivals;
