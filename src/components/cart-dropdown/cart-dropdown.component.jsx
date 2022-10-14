import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.jsx';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => navigate('/checkout')

  return (
    <CartDropdownContainer className='cart-dropdown-container'>
      <CartItems className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage className='empty-message'>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
