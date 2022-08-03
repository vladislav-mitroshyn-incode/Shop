import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import styles from './FashionBlog.module.scss';
import ShopButton from '../../../components/UI/ShopButton/ShopButton';
import ContainerComponent from '../../../components/UI/ContainerComponent/ContainerComponent';
import { getFashionBlogsData } from '../../../services';
import { IFashionBlogData } from '../../../types';

const FashionBlog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IFashionBlogData[]>([]);

  useEffect(() => {
    getFashionBlogsData()
      .then((response) => {
        const nedeedIds = [1, 2];
        setData(response.filter((blog) => nedeedIds.includes(blog.id)));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            {data.map((fashionBlog, index) => (
              <div key={index} className={styles.fashionBlog__blog}>
                <div className={styles.blog__image}>
                  <img src={fashionBlog.img} alt={fashionBlog.title} />
                </div>
                <div className={styles.blog__body}>
                  <NavLink to={`blogs/${fashionBlog.id}`}>
                    <h2>{fashionBlog.title}</h2>
                  </NavLink>
                  <div className={styles.blog__info}>
                    <span>{fashionBlog.type}</span>
                    <span>{`${fashionBlog.date.month} ${fashionBlog.date.day}, ${fashionBlog.date.year}`}</span>
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
