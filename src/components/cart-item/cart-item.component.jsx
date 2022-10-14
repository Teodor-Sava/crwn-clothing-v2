import './cart-item.styles.jsx';
import { CartItemContainer, ItemDetails } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
