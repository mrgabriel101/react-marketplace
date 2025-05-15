import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import ProductItem from './ProductItem';

const ProductList = () => {
  const products = useContext(ProductsContext);

  return (
    <div className="container">
      <div className="product-items">
        <ul className="list-group">
          {products.map((product) => (
            <ProductItem key={product.id} product={product}></ProductItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
