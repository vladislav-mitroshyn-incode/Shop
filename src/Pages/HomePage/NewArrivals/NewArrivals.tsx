import React, { FC, useEffect, useState } from 'react';
import styles from './NewArrivals.module.scss';
import { IArrivalData } from '../../../types/types';
import NewArrivalsItem from '../NewArrivalsItem/NewArrivalsItem';
import { getNewArrivalsData } from '../../../services';

const NewArrivals: FC = () => {
  const [data, setData] = useState<IArrivalData[]>([]);

  useEffect(() => {
    getNewArrivalsData()
      .then((newArrivals) => setData(newArrivals.newArrivals))
      .catch((error: string) => {
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
