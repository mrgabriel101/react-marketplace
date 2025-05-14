import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const CartItemsContext = createContext();

// Create a provider component
export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
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
