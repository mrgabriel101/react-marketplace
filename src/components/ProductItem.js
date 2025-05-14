import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductButton from './ProductButton';

const formatDiscount = (discount) => {
  return `${discount * 100}%`;
};

const calculateFinalPrice = (price, discount) => {
  return `$${(price - price * discount).toFixed(2)}`;
};

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <React.Fragment>
      <li className="list-group-item">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9" onClick={handleRedirect}>
              <div className="app-product-info row">
                <div className="image col-lg-3">
                  <img
                    className="img-fluid"
                    src={product.img}
                    alt={product.name}
                  />
                </div>
                <div className="title col-lg-5">
                  <h4>{product.name}</h4>
                </div>
                <div className="price col-lg-4">
                  <div className="prices-container">
                    <p className="finalPrice">
                      {calculateFinalPrice(product.price, product.discount)}
                    </p>
                    <p className="discount">
                      {formatDiscount(product.discount)}
                    </p>
                    <p className="oldPrice">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <ProductButton product={product} />
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default ProductItem;
