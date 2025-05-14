import React from 'react';

const ProductButton = () => {
  return (
    <div className="app-product-btn">
      <div className="counter">
        <button className="plusminus">-</button>
        <input
          className="form-control"
          placeholder="0"
          disabled=""
          type="number"
          value="0"
        />
        <button className="plusminus">+</button>
      </div>
      <div>
        <button className="cart">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductButton;
