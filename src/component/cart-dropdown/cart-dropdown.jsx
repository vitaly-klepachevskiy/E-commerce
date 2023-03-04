import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../contexts/cart-context';
import './cart-dropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
