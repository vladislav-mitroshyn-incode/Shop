import React from 'react';
import styles from './ContainerComponent.module.scss';

interface IcontainerComponentProps {
  children: React.ReactNode;
  widhtProps?: number | undefined;
  className?: string;
}

const ContainerComponent: React.FC<IcontainerComponentProps> = ({ children, widhtProps, className }) => {
  return widhtProps ? (
    <div className={className} style={{ maxWidth: `${widhtProps}px`, margin: '0 auto' }}>
      {children}
    </div>
  ) : (
    <div className={styles.container}>{children}</div>
  );
};

export default ContainerComponent;
