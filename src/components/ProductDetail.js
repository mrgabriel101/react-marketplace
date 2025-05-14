import React, { Fragment } from 'react';

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
