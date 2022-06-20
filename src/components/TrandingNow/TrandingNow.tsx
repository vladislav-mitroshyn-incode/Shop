import React, { useEffect, useState } from 'react';
import { getTrandingNowData } from '../../services';
import { ITrandingData } from '../../types/types';
import TrandingNowItem from '../TrandingNowItem/TrandingNowItem';
import ShopButton from '../UI/ShopButton/ShopButton';
import styles from './TrandingNow.module.scss';

const TrandingNow: React.FC = () => {
  const [data, setData] = useState<ITrandingData[]>([]);

  useEffect(() => {
    getTrandingNowData()
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={styles.tranding}>
      <div className={styles.tranding__container}>
        <h1>Tranding now</h1>
        <TrandingNowItem data={data} />
        <div className={styles.tranding__btn}>
          <ShopButton typeButton="outlined">Explore top sales</ShopButton>
        </div>
      </div>
    </section>
  );
};

export default TrandingNow;
