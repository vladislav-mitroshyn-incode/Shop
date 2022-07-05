import React from 'react';
import { NavLink } from 'react-router-dom';
import ContainerComponent from '../ContainerComponent/ContainerComponent';
import styles from './TopPanel.module.scss';

interface ITopPanelProps {
  prevPage?: string;
  prevPageLink?: string;
  currentPage: string | undefined;
}

const TopPanel: React.FC<ITopPanelProps> = ({ prevPage, prevPageLink, currentPage }) => {
  return (
    <div className={styles.topPanel}>
      <ContainerComponent>
        <div className={styles.topPanel__body}>
          <NavLink to="/">
            <input type="button" />
          </NavLink>
          {prevPage ? (
            <div className={styles.topPanel__pagesLink}>
              <NavLink to={`${String(prevPageLink)}`}>
                <button className={styles.pagesLink__active} type="button">
                  {prevPage}
                </button>
              </NavLink>
              <button disabled type="button">
                {currentPage}
              </button>
            </div>
          ) : (
            <div className={styles.topPanel__pagesLink}>
              <button disabled type="button">
                {currentPage}
              </button>
            </div>
          )}
        </div>
      </ContainerComponent>
    </div>
  );
};

export default TopPanel;
