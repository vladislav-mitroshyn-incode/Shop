import React from 'react';
import styles from './FeaturedPosts.module.scss';
import first from '../../../assets/fashion-blog/featurePosts/image.svg';
import first2 from '../../../assets/fashion-blog/featurePosts/image2.svg';
import first3 from '../../../assets/fashion-blog/featurePosts/image3.svg';

const posts = [
  {
    img: <img src={first} alt="" />,
    title: '14 Items From End-of-Spring Sales Are Sure to Spark Joy',
    data: { day: 5, year: 2020, month: 'July' },
  },
  {
    img: <img src={first2} alt="" />,
    title: 'Best Fashion Instagrams of the Week',
    data: { day: 9, year: 2020, month: 'April' },
  },
  {
    img: <img src={first3} alt="" />,
    title: 'Top 10 Looks from the Venice Film Festival',
    data: { day: 12, year: 2020, month: 'Match' },
  },
];

const FeaturedPosts = () => {
  return (
    <section className={styles.featuredPosts}>
      <div>
        <h1>Featured Posts</h1>
        {posts.map((post, index) => (
          <div key={index} className={styles.post__body}>
            <div>{post.img}</div>
            <div className={styles.post__title}>
              <p>{`${post.data.month} ${post.data.day}, ${post.data.year}`}</p>
              <p>{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
