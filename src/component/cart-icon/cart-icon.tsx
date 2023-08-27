import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart-action';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart-selector';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
