import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart-action';
import { selectCartItems } from '../../store/cart/cart-selector';
import Button, { BUTTON_CLASS_TYPES } from '../button/button';
import './product-card.scss';
import { CategoryItem } from '../../store/categories/categories-types';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  const handleClick = () => {
    dispatch(addItemToCart(cartItems, product));
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
