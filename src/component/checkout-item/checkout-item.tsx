import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart-action';
import { selectCartItems } from '../../store/cart/cart-selector';
import './checkout-item.scss';
import { CartItem } from '../../store/cart/cart-types';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: React.FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleClickAdd = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const handleClickRemove = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const handleClickClear = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleClickRemove}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleClickAdd}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClickClear}>
        &#10005;{' '}
      </div>
    </div>
  );
});

export default CheckoutItem;
