import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, cartCount, setIsCartOpen } = useContext(CartContext);

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
