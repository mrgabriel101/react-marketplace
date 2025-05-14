import React, { Fragment } from 'react';
import ProductButton from './ProductButton';

const ProductDetail = () => {
  return (
    <React.Fragment>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="image col-lg-5">
            <img className="img-fluid" src="/image-product-1.jpg" />
          </div>
          <div className="col-lg-6">
            <div className="title">
              <h1>Fall Limited Edition Sneakers</h1>
            </div>
            <div className="row">
              <div className="col-lg-6 price">
                <p className="finalPrice">$110.00</p>
                <p className="discount">0.5</p>
                <p className="oldPrice">$220.00</p>
              </div>
              <div className="col-lg-6">
                <ProductButton></ProductButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
