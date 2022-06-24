import React from 'react';
import styles from './ShopInput.module.scss';

interface IShopInputProps {
  placeholder: string;
}

const ShopInput: React.FC<IShopInputProps> = ({ placeholder }) => {
  return <input className={styles.input__search} type="text" placeholder={placeholder} />;
};

export default ShopInput;
