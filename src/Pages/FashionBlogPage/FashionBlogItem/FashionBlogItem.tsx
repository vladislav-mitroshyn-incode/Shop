import React from 'react';
import styles from './FashionBlogItem.module.scss';
import bag from '../../../assets/fashion-blog/bag.png';
import sneaker from '../../../assets/fashion-blog/sneaker.png';
import shirt from '../../../assets/fashion-blog/shirt.png';
import heart from '../../../assets/fashion-blog/heart.png';

const fashionBlogs = [
  {
    title: 'Bag Trends for Summer 2020',
    type: 'Fashion',
    date: { month: 'August', day: 24, year: 2020 },
    comments: null,
    subTitle:
      'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
    img: <img src={bag} alt="bag" />,
  },
  {
    title: 'Top 10 of This Season’s Hottest Sneakers',
    type: 'Lifestyle',
    date: { month: 'July', day: 16, year: 2020 },
    comments: 4,
    subTitle:
      'Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...',
    img: <img src={sneaker} alt="sneaker" />,
  },
  {
    title: 'Wardrobe Essentials Everyone Should Own Today',
    type: 'Celebrity style',
    date: { month: 'August', day: 5, year: 2020 },
    comments: 4,
    subTitle:
      'Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit. Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac...',
    img: <img src={shirt} alt="shirt" />,
  },
  {
    title: 'Modern Accessories 2020: Why Simple Isn`t Easy',
    type: 'Fashion',
    date: { month: 'July', day: 2, year: 2020 },
    comments: 4,
    subTitle:
      'Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac. Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim...',
    img: <img src={heart} alt="heart" />,
  },
];

const FashionBlogItem = () => {
  return (
    <>
      {fashionBlogs.map((fashionBlog, index) => (
        <div key={index} className={styles.fashionBlog__blog}>
          <div className={styles.blog__image}>{fashionBlog.img}</div>
          <div className={styles.blog__body}>
            <div className={styles.blog__info}>
              <span>{fashionBlog.type}</span>
              <span>{`${fashionBlog.date.month} ${fashionBlog.date.day}, ${fashionBlog.date.year}`}</span>
              <span>{!fashionBlog.comments ? 'No comments' : `${fashionBlog.comments} comments`}</span>
            </div>
            <h2>{fashionBlog.title}</h2>
            <p>{fashionBlog.subTitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FashionBlogItem;
