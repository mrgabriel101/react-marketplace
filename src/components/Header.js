import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown } from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItemsContext } from '../context/CartItemsContext';

const Header = () => {
  const { cartItems, removeItemFromCart } = useContext(CartItemsContext);

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const calculateFinalPrice = (price, discount) => {
    return price - price * discount;
  };

  useEffect(() => {
    setTotal(
      cartItems.reduce((prev, a) => {
        return a.quantity * calculateFinalPrice(a.price, a.discount) + prev;
      }, 0)
    );
  }, [cartItems]);

  const handleRedirect = () => {
    navigate('/');
  };

  const handleDelete = (event, product) => {
    event.preventDefault();
    removeItemFromCart(product.id);
  };

  return (
    <header>
      <div className="container">
        <div className="logo" onClick={handleRedirect}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <a className="collection" onClick={handleRedirect}>
          Collection
        </a>
        <Dropdown>
          <Dropdown.Toggle
            className="dropdown-toggle"
            variant="success"
            id="dropdown-basic"
          >
            <img src="/icon-cart.svg" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {cartItems ? (
              cartItems.map((element) => (
                <li className="cart-list" key={element.id}>
                  <Dropdown.Item href="">
                    <img
                      alt={element.name}
                      className="dropdown-img col-lg-4 cart-image"
                      src={`/${element.img}`}
                    ></img>
                    <div className="dropdown-info col-lg-8">
                      <div className="delete-div">
                        <p className="dropdown-title">{element.name}</p>
                        <button
                          className="delete-item"
                          onClick={(event) => handleDelete(event, element)}
                        >
                          <img alt="delete item" src="/delete-button.svg" />
                        </button>
                      </div>
                      <b className="dropdown-unit">
                        {' '}
                        1 unit = $
                        {calculateFinalPrice(
                          element.price,
                          element.discount
                        ).toFixed(2)}
                      </b>
                      <p className="dropdown-prices">
                        {' '}
                        Total: $
                        {(
                          calculateFinalPrice(element.price, element.discount) *
                          element.quantity
                        ).toFixed(2)}{' '}
                        ({element.quantity}{' '}
                        {element.quantity === 1 ? 'unit' : 'units'})
                      </p>
                    </div>
                  </Dropdown.Item>
                </li>
              ))
            ) : (
              <Dropdown.Item href=""></Dropdown.Item>
            )}
            <p className="total">
              <b>Total to pay:</b> ${total.toFixed(2)}
            </p>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
