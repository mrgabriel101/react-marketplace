import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const CartItemsContext = createContext();

// Create a provider component
export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([]);
  }, []);

  //filter if existand increment quantity
  const addItemToCart = (item, quantity) => {
    if (cartItems.some((cartItem) => cartItem.id === item.id)) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
      return;
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartItemsContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartItemsContext.Provider>
  );
  /*   return (
    <CartItemsContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartItemsContext.Provider>
  ); */
};

/* // Custom hook to use the CartItemsContext
export const useCartItems = () => {
    const context = useContext(CartItemsContext);
    if (!context) {
        throw new Error('useCartItems must be used within a CartItemsProvider');
    }
    return context;
}; */
