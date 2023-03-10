import { useContext } from 'react';
import Button, { BUTTON_CLASS_TYPES } from '../button/button';
import { CartContext } from '../../contexts/cart-context';
import './product-card.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const handleClick = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_CLASS_TYPES.inverted} onClick={handleClick}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
