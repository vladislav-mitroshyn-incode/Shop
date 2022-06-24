import cn from 'classnames';
import React from 'react';
import styles from './ShopButton.module.scss';

interface ShopButtonProps {
  typeButton: string;
  children: string;
  className?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick?: () => any;
}

const ShopButton = (props: ShopButtonProps) => {
  const { typeButton, className, icon, children, ...rest } = props;
  const Icon = icon as React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  return (
    <button
      {...rest}
      type="button"
      className={cn(className, {
        [styles.buttonOutlinedIcon]: typeButton === 'outlined' && icon,
        [styles.buttonOutlined]: typeButton === 'outlined',
        [styles.buttonPrimary]: typeButton === 'primary',
      })}
    >
      {icon && <Icon className={styles.button__icon} />}
      {children}
    </button>
  );
};

export default ShopButton;
