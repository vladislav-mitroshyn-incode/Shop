import React from 'react';
import styles from './ContainerComponent.module.scss';

interface IcontainerComponentProps {
  children: React.ReactNode;
  widhtProps?: number | undefined;
}

const ContainerComponent: React.FC<IcontainerComponentProps> = ({ children, widhtProps }) => {
  return widhtProps ? (
    <div style={{ width: `${widhtProps}px`, margin: '0 auto' }}>{children}</div>
  ) : (
    <div className={styles.container}>{children}</div>
  );
};

export default ContainerComponent;
