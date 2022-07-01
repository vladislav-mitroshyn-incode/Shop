import React from 'react';
import ContainerComponent from '../../components/UI/ContainerComponent/ContainerComponent';
import FashionBlogItem from './FashionBlogItem/FashionBlogItem';
import TopPanel from '../../components/UI/TopPanel/TopPanel';
import styles from './FashionBlogPage.module.scss';
import ShopInput from '../../components/UI/ShopInput/ShopInput';
import CategoriesBlog from './CategoriesBlog/CategoriesBlog';
import FeaturedPosts from './FeaturedPosts/FeaturedPosts';
import Tags from './Tags/Tags';

const FashionBlogPage = () => {
  return (
    <section className={styles.fashionBlog}>
      <TopPanel text="Fashion blog" />
      <ContainerComponent>
        <div className={styles.fashionBlog__content}>
          <div className={styles.fashionBlog__fashion}>
            <h1>Fashion blog</h1>
            <FashionBlogItem />
          </div>
          <div className={styles.fashionBlog__other}>
            <div className={styles.fashionBlog__input}>
              <ShopInput placeholder="Search the blog..." />
            </div>
            <CategoriesBlog />
            <FeaturedPosts />
            <Tags />
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default FashionBlogPage;
