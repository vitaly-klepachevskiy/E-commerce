import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../store/user/user-selector';
import { selectIsCartOpen } from '../../store/cart/cart-selector';
import CartIcon from '../../component/cart-icon/cart-icon';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown';
import { signOutStart } from '../../store/user/user-action';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleClick = () => {
    dispatch(signOutStart());
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <NavLink as="span" onClick={handleClick}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth ">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
