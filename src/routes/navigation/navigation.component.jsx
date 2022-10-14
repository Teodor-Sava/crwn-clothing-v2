import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLink, NavLinksContainer, LogoContainer } from './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>

      <NavigationContainer>

        <div className='navigation'>

          <LogoContainer className='logo-container' to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>

          <NavLinksContainer className='nav-links-container'>
            <NavLink className='nav-link' to='/shop'>
              SHOP
            </NavLink>

            {currentUser ? (
              <NavLink as='span' className='nav-link' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink className='nav-link' to='/auth'>
                SIGN IN
              </NavLink>
            )}
            <CartIcon />

          </NavLinksContainer>

          {isCartOpen && <CartDropdown />}
        </div>

      </NavigationContainer>
      <Outlet />
    </Fragment>

  );
};

export default Navigation;
