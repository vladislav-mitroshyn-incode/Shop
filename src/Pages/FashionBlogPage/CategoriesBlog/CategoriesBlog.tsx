import React from 'react';
import styles from './CategoriesBlog.module.scss';

const CategoriesBlogs = [
  { title: 'All', total: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { title: 'Fashion', total: null },
  { title: 'Designers', total: [1, 2, 3, 4] },
  { title: 'Lifestyle', total: [1, 2, 3, 4, 5, 6] },
  { title: 'Celebrity style', total: [1, 2] },
];

const CategoriesBlog = () => {
  return (
    <section className={styles.categoriesBlog}>
      <h1>Blog Categories</h1>
      {CategoriesBlogs.map((blog, index) => (
        <div key={index} className={styles.blog__body}>
          <div className={styles.blog__link}>
            <a href="*">{blog.title}</a>
          </div>
          <div className={styles.blog__total}>{blog.total ? blog.total.length : 0}</div>
        </div>
      ))}
    </section>
  );
};

export default CategoriesBlog;
