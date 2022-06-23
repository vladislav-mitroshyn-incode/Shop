import React from 'react';
import styles from './ContainerComponent.module.scss';

interface IContainerComponentProp {
  children: React.ReactNode;
}

const ContainerComponent: React.FC<IContainerComponentProp> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerComponent;
