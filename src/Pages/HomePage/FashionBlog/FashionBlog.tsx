import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FashionBlog.module.scss';
import bag from '../../../assets/fashion-blog/bag.webp';
import sneaker from '../../../assets/fashion-blog/sneaker.webp';
import ShopButton from '../../../components/UI/ShopButton/ShopButton';
import ContainerComponent from '../../../components/UI/ContainerComponent/ContainerComponent';

const fashionBlogs = [
  {
    title: 'Bag Trends for Summer 2020',
    type: 'Fashion',
    data: { month: 'August', day: 24, year: 2020 },
    comments: null,
    subTitle:
      'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
    img: <img src={bag} alt="bag" />,
  },
  {
    title: 'Top 10 of This Season’s Hottest Sneakers',
    type: 'Lifestyle',
    data: { month: 'July', day: 16, year: 2020 },
    comments: 4,
    subTitle:
      'Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...',
    img: <img src={sneaker} alt="sneaker" />,
  },
];

const FashionBlog = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.fashionBlog}>
      <ContainerComponent>
        <div className={styles.fashionBlog__container}>
          <div className={styles.fashionBlog__title}>
            <div className={styles.title__content}>
              <h1 className={styles.title__text}>Fashion blog</h1>
              <div className={styles.title__btn}>
                <ShopButton onClick={() => navigate('/blogs')} typeButton="outlined">
                  View blog
                </ShopButton>
              </div>
            </div>
          </div>
          <div className={styles.fashionBlog__content}>
            {fashionBlogs.map((fashionBlog, index) => (
              <div key={index} className={styles.fashionBlog__blog}>
                <div className={styles.blog__image}>{fashionBlog.img}</div>
                <div className={styles.blog__body}>
                  <h2>{fashionBlog.title}</h2>
                  <div className={styles.blog__info}>
                    <span>{fashionBlog.type}</span>
                    <span>{`${fashionBlog.data.month} ${fashionBlog.data.day}, ${fashionBlog.data.year}`}</span>
                    <span>{fashionBlog.comments === null ? 'No comments' : `${fashionBlog.comments} comments`}</span>
                  </div>
                  <p>{fashionBlog.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default FashionBlog;
