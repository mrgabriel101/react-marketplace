import React, { useState } from 'react';

const ProductButton = ({ product }) => {
  const [productQuantityValue, setProductQuantityValue] = useState(0);
  const handleMinus = () => {
    console.log('minus quantity: ', productQuantityValue, product);
    if (productQuantityValue > 0) {
      setProductQuantityValue(productQuantityValue - 1);
    }
  };
  const handlePlus = () => {
    console.log('plus quantity: ', productQuantityValue, product);
    if (productQuantityValue >= 0 && product.amount > productQuantityValue) {
      setProductQuantityValue(productQuantityValue + 1);
    }
  };

  const addToCart = () => {
    if (productQuantityValue > 0) {
      // Add product to cart logic here
      console.log(`Added ${productQuantityValue} of ${product.name} to cart`);
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
