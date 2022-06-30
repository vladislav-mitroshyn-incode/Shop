import React from 'react';
import styles from './Advantage.module.scss';
import delivery from '../../../assets/advantage/delivery.svg';
import support from '../../../assets/advantage/support.svg';
import shield from '../../../assets/advantage/shield.svg';
import payment from '../../../assets/advantage/payment.svg';

const advantages = [
  {
    img: <img src={delivery} alt="delivery" />,
    title: 'Fast Worldwide Shipping',
    subTitle: 'Get free shipping over $250',
  },
  {
    img: <img src={support} alt="support" />,
    title: '24/7 Customer Support',
    subTitle: 'Friendly 24/7 customer support',
  },
  {
    img: <img src={shield} alt="shield" />,
    title: 'Money Back Guarantee',
    subTitle: 'We return money within 30 days',
  },
  {
    img: <img src={payment} alt="payment" />,
    title: 'Secure Online Payment',
    subTitle: 'Accept all major credit cards',
  },
];

const Advantage = () => {
  return (
    <section className={styles.advantage}>
      <div className={styles.advantage__container}>
        <div className={styles.advantage__content}>
          {advantages.map((advantage, index) => (
            <div key={index} className={styles.advantage__card}>
              <div className={styles.card__image}>{advantage.img}</div>
              <div className={styles.card__content}>
                <h1>{advantage.title}</h1>
                <p>{advantage.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
