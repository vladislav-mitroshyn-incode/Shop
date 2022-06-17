import cn from 'classnames';
import React from 'react';
import styles from './ShopButton.module.scss';

interface ShopButtonProps {
  typeButton: string;
  children: string;
}

const ShopButton = (props: ShopButtonProps) => {
  const { typeButton, children, ...rest } = props;
  return (
    <button
      {...rest}
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
