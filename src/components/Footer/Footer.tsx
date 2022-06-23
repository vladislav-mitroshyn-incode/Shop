import React from 'react';
import ContainerComponent from '../UI/ContainerComponent/ContainerComponent';
import styles from './Footer.module.scss';
import facebook from '../../assets/footer/facebook.svg';
import instagram from '../../assets/footer/instagram.svg';
import twiter from '../../assets/footer/twiter.svg';
import youtube from '../../assets/footer/youtube.svg';
import pinterest from '../../assets/footer/pinterest.svg';
import appStore from '../../assets/footer/appStore.png';
import googlePlay from '../../assets/footer/googlePlay.png';

const footerItems = [
  { title: 'Help', links: ['Delivery & returns', 'FAQ', 'Track order', 'Contacts', 'Blog'], contacts: null },
  { title: 'Shop', links: ['New arrivals', 'Trending now', 'Sales', 'Brands'] },
];
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContainerComponent>
        <div className={styles.footer__body}>
          {footerItems.map((item, index) => (
            <div key={index} className={styles.footer__item}>
              <p className={styles.item__title}>{item.title}</p>
              <ul className={styles.item__link}>
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.link__title}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.contacts__item}>
            <p>Get in touch</p>
            <ul className={styles.contacts__body}>
              <li className={styles.contacts__title}>
                <span>Call:</span>
                <span>(405) 555-0128</span>
              </li>
              <li className={styles.contacts__title}>
                <span>Email:</span>
                <span>hello@createx.com</span>
              </li>
            </ul>
            <div className={styles.contacts__img}>
              <img src={facebook} alt="facebook icon" />
              <img src={instagram} alt="instagram icon" />
              <img src={twiter} alt="twiter icon" />
              <img src={youtube} alt="youtube icon" />
              <img src={pinterest} alt="pinterest icon" />
            </div>
          </div>
          <div className={styles.download__item}>
            <p>Download our app</p>
            <div>
              <img src={appStore} alt="" />
              <img src={googlePlay} alt="" />
            </div>
          </div>
        </div>
      </ContainerComponent>
      <div className={styles.footer__copyright}>
        <ContainerComponent>
          <div className={styles.copyright__body}>
            <p>
              © All rights reserved. Made with <span>by Createx Studio</span>
            </p>
            <p className={styles.copyright__link}>
              <a href="#">Go to top</a>
            </p>
          </div>
        </ContainerComponent>
      </div>
    </footer>
  );
};

export default Footer;
