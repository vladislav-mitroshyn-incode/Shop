import React from 'react';
import styles from './Tags.module.scss';

const tags = ['#trends', '#inspiration', '#designers', '#kidsfashion', '#streetstyle', '#models'];

const Tags = () => {
  return (
    <section className={styles.tag}>
      <div>
        <h1>Tags</h1>
        <div className={styles.tag__list}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag__body}>
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tags;
