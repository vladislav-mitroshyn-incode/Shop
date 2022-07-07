import Slider from 'react-slick';
import styles from './FeaturedPostsSlider.module.scss';

interface IBlogData {
  img: React.ReactElement;
  title: string;
  date: { day: number; year: number; month: string };
}

interface IFeaturedPostsSliderProps {
  blogs: IBlogData[];
}

interface SettingsProp {
  infinite: boolean;
  dots: boolean;
  arrows: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

const FeaturedPostsSlider: React.FC<IFeaturedPostsSliderProps> = ({ blogs }) => {
  const settings: SettingsProp = {
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className={styles.slider__body}>
      <Slider {...settings}>
        {blogs.map((blog, index) =>
          index % 2 ? (
            <div key={index} className={styles.blog__body__reverse}>
              <div className={styles.blog__title__reverse}>
                <p>{`${blog.date.month} ${blog.date.day}, ${blog.date.year}`}</p>
                <p>{blog.title}</p>
              </div>
              <div>{blog.img}</div>
            </div>
          ) : (
            <div key={index} className={styles.blog__body}>
              <div>{blog.img}</div>
              <div className={styles.blog__title}>
                <p>{`${blog.date.month} ${blog.date.day}, ${blog.date.year}`}</p>
                <p>{blog.title}</p>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default FeaturedPostsSlider;
