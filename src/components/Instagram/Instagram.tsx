import React from 'react';
import ShopButton from '../UI/ShopButton/ShopButton';
import styles from './Instagram.module.scss';
import image from '../../assets/instagram/image.png';
import image2 from '../../assets/instagram/image2.png';
import image3 from '../../assets/instagram/image3.png';
import ContainerComponent from '../UI/ContainerComponent/ContainerComponent';

const instagramImages = [
  { img: <img src={image} alt="" /> },
  { img: <img src={image2} alt="" /> },
  { img: <img src={image3} alt="" /> },
];

const Instagram: React.FC = () => {
  return (
    <section className={styles.instagram}>
      <ContainerComponent>
        <div className={styles.instagram__body}>
          <div className={styles.instagram__info}>
            <p>Follow us on Instagram</p>
            <h1>
              <a href="#">@createx_store</a>
            </h1>
            <div className={styles.instagram__btn}>
              <ShopButton className={styles.btn__icon} typeButton="outlined">
                Follow instagram
              </ShopButton>
            </div>
          </div>
          <div className={styles.instagram__images}>
            {instagramImages.map((instagramImage, index) => (
              <div key={index}>{instagramImage.img}</div>
            ))}
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default Instagram;
