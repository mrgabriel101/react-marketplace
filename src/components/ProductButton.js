import React, { useState } from 'react';
import { useContext } from 'react';
import { CartItemsContext } from '../context/CartItemsContext';

const ProductButton = ({ product }) => {
  const { cartItems, addItemToCart, removeItemFromCart, clearCart } =
    useContext(CartItemsContext);
  const [productQuantityValue, setProductQuantityValue] = useState(0);
  const handleMinus = () => {
    if (productQuantityValue > 0) {
      setProductQuantityValue(productQuantityValue - 1);
    }
  };
  const handlePlus = () => {
    if (productQuantityValue >= 0 && product.amount > productQuantityValue) {
      setProductQuantityValue(productQuantityValue + 1);
    }
  };

  const addToCart = () => {
    if (productQuantityValue > 0) {
      addItemToCart(product, productQuantityValue);
      setProductQuantityValue(0);
    }
  };

  return (
    <div className="app-product-btn">
      <div className="counter">
        <button className="plusminus" onClick={handleMinus}>
          -
        </button>
        <input
          className="form-control"
          placeholder="0"
          disabled=""
          type="number"
          value={productQuantityValue}
          onChange={(e) => setProductQuantityValue(+e.target.value)}
        />
        <button className="plusminus" onClick={handlePlus}>
          +
        </button>
      </div>
      <div>
        <button className="cart" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductButton;
