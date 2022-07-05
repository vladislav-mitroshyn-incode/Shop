import styles from './SocialNetworks.module.scss';
import { ReactComponent as TwiterSvg } from '../../../assets/fashion-blog/blog/twiter.svg';
import { ReactComponent as FacebookSvg } from '../../../assets/fashion-blog/blog/facebook.svg';
import { ReactComponent as LinkedInSvg } from '../../../assets/fashion-blog/blog/linkedIn.svg';
import { ReactComponent as InstagramSvg } from '../../../assets/fashion-blog/blog/instagram.svg';

const SocialNetworks = () => {
  return (
    <div className={styles.social}>
      <FacebookSvg />
      <InstagramSvg />
      <TwiterSvg />
      <LinkedInSvg />
    </div>
  );
};

export default SocialNetworks;
