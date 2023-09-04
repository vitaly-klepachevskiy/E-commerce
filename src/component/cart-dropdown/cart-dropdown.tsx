import { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../store/cart/cart-action';
import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart-selector';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleClick = useCallback(() => {
    navigate('/checkout');
    dispatch(setIsCartOpen(!isCartOpen));
  }, [navigate, dispatch, isCartOpen]);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage> </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
});

export default CartDropdown;
