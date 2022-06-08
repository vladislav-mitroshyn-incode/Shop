import cn from 'classnames';
import React from 'react';
import styles from './ShopButton.module.scss';

interface ShopButtonProps {
  typeButton: string;
  children: string;
}

const ShopButton = (props: ShopButtonProps) => {
  const { typeButton, children } = props;
  return (
    <button
      {...props}
      type="button"
      className={cn({
        [styles.buttonOutlined]: typeButton === 'outlined',
        [styles.buttonPrimary]: typeButton === 'primary',
      })}
    >
      {children}
    </button>
  );
};

export default ShopButton;
