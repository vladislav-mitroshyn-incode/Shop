import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/image/logo.png';

const Header = function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__content}>
          <div className={style.header__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={style.header__menu}>
            <nav className={style.menu__body}>
              <ul className={style.menu__list}>
                <li className={style.menu__item}>
                  <a href="" className={style.menu__link}>
                    Women
                  </a>
                </li>
                <li className={style.menu__item}>
                  <a href="" className={style.menu__link}>
                    Men
                  </a>
                </li>
                <li className={style.menu__item}>
                  <a href="" className={style.menu__link}>
                    Girls
                  </a>
                </li>
                <li className={style.menu__item}>
                  <a href="" className={style.menu__link}>
                    Boys
                  </a>
                </li>
                <li className={style.menu__item}>
                  <a href="" className={style.menu__link}>
                    Sale
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.header__input}>
            <input className={style.input__search} type="text" placeholder="Search for products..." />
          </div>
          <div className={style.header__buttons}>
            <input type="button" className={style.button__heart} />
            <div />
            <input type="button" className={style.button__cart} />
          </div>
        </div>
      </div>
      <div className={style.header__sale}>
        <div className={style.sale__container}>
          <div className={style.sale__content}>
            <p>Up to 70% Off.</p>
            <a href="">Shop our latest sale styles</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
