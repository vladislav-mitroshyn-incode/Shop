import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FashionBlogItem.module.scss';
import { getFashionBlogsData } from '../../../services';
import { IFashionBlogData } from '../../../types';

const FashionBlogItem = () => {
  const [data, setData] = useState<IFashionBlogData[]>([]);

  useEffect(() => {
    getFashionBlogsData()
      .then((response) => setData(response))
      .catch((error: string) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {data.map((fashionBlog, index) => (
        <div key={index} className={styles.fashionBlog__blog}>
          <div className={styles.blog__image}>
            <img src={fashionBlog.img} alt={fashionBlog.title} />
          </div>
          <div className={styles.blog__body}>
            <div className={styles.blog__info}>
              <span>{fashionBlog.type}</span>
              <span>
                {fashionBlog.date.month} {fashionBlog.date.day}, {fashionBlog.date.year}
              </span>
              <span>{!fashionBlog.comments ? 'No comments' : `${Number(fashionBlog.comments)} comments`}</span>
            </div>
            <NavLink to={`/blogs/${Number(fashionBlog.id)}`}>
              <h2>{fashionBlog.title}</h2>
            </NavLink>
            <p>{fashionBlog.subTitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FashionBlogItem;
