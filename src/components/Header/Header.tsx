import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/header/logo.png';
import ShopInput from '../UI/ShopInput/ShopInput';
import ContainerComponent from '../UI/ContainerComponent/ContainerComponent';

const Header = () => {
  return (
    <header className={styles.header}>
      <ContainerComponent>
        <div className={styles.header__body}>
          <div className={styles.header__content}>
            <div className={styles.header__logo}>
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
            <div className={styles.header__menu}>
              <nav className={styles.menu__body}>
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <a href="" className={styles.menu__link}>
                      Women
                    </a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="" className={styles.menu__link}>
                      Men
                    </a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="" className={styles.menu__link}>
                      Girls
                    </a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="" className={styles.menu__link}>
                      Boys
                    </a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="" className={styles.menu__link}>
                      Sale
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.header__input}>
              <ShopInput placeholder="Search for products..." />
            </div>
            <div className={styles.header__buttons}>
              <input type="button" className={styles.button__heart} />
              <div />
              <input type="button" className={styles.button__cart} />
              <a href="" className={styles.button__icon_menu}>
                <span> </span>
              </a>
            </div>
          </div>
        </div>
      </ContainerComponent>
      <div className={styles.header__sale}>
        <div className={styles.sale__container}>
          <div className={styles.sale__content}>
            <p>Up to 70% Off.</p>
            <a href="">Shop our latest sale styless</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
