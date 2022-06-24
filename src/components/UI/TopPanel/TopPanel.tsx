import React from 'react';
import ContainerComponent from '../ContainerComponent/ContainerComponent';
import styles from './TopPanel.module.scss';

interface ITopPanelProps {
  text: string;
}

const TopPanel: React.FC<ITopPanelProps> = ({ text }) => {
  return (
    <div className={styles.TopPanel}>
      <ContainerComponent>
        <div className={styles.fashionBlog__panel}>
          <input type="button" />
          <button disabled type="button">
            {text}
          </button>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default TopPanel;
