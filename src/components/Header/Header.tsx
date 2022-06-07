import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/header/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <img src={logo} alt="logo" />
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
            <input className={styles.input__search} type="text" placeholder="Search for products..." />
          </div>
          <div className={styles.header__buttons}>
            <input type="button" className={styles.button__heart} />
            <div />
            <input type="button" className={styles.button__cart} />
          </div>
        </div>
      </div>
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
