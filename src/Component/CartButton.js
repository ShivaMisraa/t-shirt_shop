import React from 'react';
import styles from './CartButton.module.css';

const CartButton = ({ cartItems, onClick }) => {
  return (
    <button className={styles.cartButton} onClick={onClick}>
      <i className="fa fa-shopping-cart"></i>
      <span className={styles.cartCount}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
