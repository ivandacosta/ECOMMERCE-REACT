import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './cartwidget.css';

const CartWidget = () => {
  return (
    <div className="cart">
      <FontAwesomeIcon className="CartIcon" icon={faShoppingCart} />
      <p>0</p>
    </div>
  );
};

export default CartWidget;
