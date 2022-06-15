import cn from 'classnames';
import React from 'react';
import styles from './ShopButton.module.scss';

interface ShopButtonProps {
  typebutton: string;
  children: string;
}

const ShopButton = (props: ShopButtonProps) => {
  const { typebutton, children } = props;
  return (
    <button
      {...props}
      type="button"
      className={cn({
        [styles.buttonOutlined]: typebutton === 'outlined',
        [styles.buttonPrimary]: typebutton === 'primary',
      })}
    >
      {children}
    </button>
  );
};

export default ShopButton;
