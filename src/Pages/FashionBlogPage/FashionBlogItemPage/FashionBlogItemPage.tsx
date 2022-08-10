import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContainerComponent from '../../../components/UI/ContainerComponent/ContainerComponent';
import { getFashionBlogsData } from '../../../services';
import { IFashionBlogData } from '../../../types';
import styles from './FashionBlogItemPage.module.scss';
import first from '../../../assets/fashion-blog/featurePosts/image.svg';
import first2 from '../../../assets/fashion-blog/featurePosts/image2.svg';
import first3 from '../../../assets/fashion-blog/featurePosts/image3.webp';
import FeaturedPostsSlider from '../FeaturedPostsSlider/FeaturedPostsSlider';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import TopPanel from '../../../components/UI/TopPanel/TopPanel';

const blogs = [
  {
    img: <img src={first} alt="" />,
    title: '14 Items From End-of-Spring Sales Are Sure to Spark Joy',
    date: { day: 5, year: 2020, month: 'July' },
  },
  {
    img: <img src={first2} alt="" />,
    title: 'Best Fashion Instagrams of the Week',
    date: { day: 9, year: 2020, month: 'April' },
  },
  {
    img: <img src={first3} alt="" />,
    title: 'Top 10 Looks from the Venice Film Festival',
    date: { day: 12, year: 2020, month: 'Match' },
  },
  {
    img: <img src={first} alt="" />,
    title: '14 Items From End-of-Spring Sales Are Sure to Spark Joy',
    date: { day: 5, year: 2020, month: 'July' },
  },
];

const FashionBlogItemPage = () => {
  const [data, setData] = useState<IFashionBlogData>();
  const params = useParams();

  useEffect(() => {
    getFashionBlogsData()
      .then((response) => {
        const body = response.find((el) => el.id === Number(params.id));
        setData(body);
      })
      .catch((error: string) => {
        console.log(error);
      });
  }, [params.id]);

  return (
    <section className={styles.fashionBlogItemPage}>
      <TopPanel prevPage="Fashion Blog" prevPageLink="/blogs" currentPage={data?.title} />
      <div className={styles.fashionBlogItemPage__head}>
        <ContainerComponent className={styles.customContainer} widhtProps={810}>
          <h1>{data?.title}</h1>
          <div className={styles.head__row}>
            <div className={styles.head__info}>
              <span>{data?.type}</span>
              <span>
                {data?.date.month} {data?.date.day}, {data?.date.year}
              </span>
              <span>{!data?.comments ? 'No comments' : `${Number(data.comments)} comments`}</span>
            </div>
            <SocialNetworks />
          </div>
        </ContainerComponent>
      </div>
      <div className={styles.fashionBlogItemPage__body}>
        <ContainerComponent className={styles.customContainer} widhtProps={810}>
          <img src={data?.img} alt={data?.title} />
          <h2>
            Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit
            malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.
          </h2>
          <div className={styles.body__text}>
            <p>
              At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam
              cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra,
              neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi
              varius viverra risus vel.
            </p>
            <p>
              Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl
              massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis
              diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit
              pharetra, nisi nunc, non.
            </p>
            <div className={styles.body__braces}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis
              fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue
              tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.
            </div>
            <p>
              Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque
              amet non fringilla blandit:
            </p>
            <ul>
              <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
              <li>Vulputate placerat amet pulvinar lorem nisl.</li>
              <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
              <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
            </ul>
            <p>
              Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus
              eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque
              ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra
              nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis
              curabitur tellus convallis eget netus vitae.
            </p>
          </div>
          <div className={styles.body__share}>
            <div className={styles.share__tags__list}>
              <h1>Tags:</h1>
              <div className={styles.tags__body}>
                <div>#trends</div>
                <div>#inspiration</div>
                <div>#designers</div>
              </div>
            </div>
            <div className={styles.share__social}>
              <h1>Share:</h1>
              <SocialNetworks />
            </div>
          </div>
        </ContainerComponent>
      </div>
      <div className={styles.fashionBlogItemPage__slider}>
        <ContainerComponent className={styles.customContainer} widhtProps={810}>
          <FeaturedPostsSlider blogs={blogs} />
        </ContainerComponent>
      </div>
    </section>
  );
};

export default FashionBlogItemPage;
