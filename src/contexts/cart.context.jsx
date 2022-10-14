import { createContext, useEffect, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem)
}

export const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
}

export const changeCartItemQuantity = (cartItems, product, quantity) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (!existingCartItem) {
    return cartItems
  }

  return cartItems
    .map(item => {
      if (item.id === product.id) {
        item.quantity += quantity;
      }

      return item;
    }).filter((item) => item.quantity <= 0);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemToCart: () => { },
  clearItemFromCart: () => { },
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)

    setCartTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const removeItemToCart = (product) =>
    setCartItems(removeCartItem(cartItems, product))

  const clearItemFromCart = (product) => setCartItems(clearCartItem(cartItems, product));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
