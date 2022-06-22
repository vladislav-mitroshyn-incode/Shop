import React from 'react';
import styles from './ContainerComponent.module.scss';

interface IcontainerComponentProps {
  children: React.ReactNode;
}

const ContainerComponent: React.FC<IcontainerComponentProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerComponent;
