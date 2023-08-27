import './cart-item.scss';
import React from 'react';
import { CartItem } from '../../store/cart/cart-types';

type CartItemProps = {
  cartItem: CartItem;
};

const CartItemComponent: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItemComponent;
