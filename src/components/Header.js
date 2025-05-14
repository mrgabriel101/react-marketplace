import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <header>
      <div className="container">
        <div className="logo" onClick={handleRedirect}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <a className="collection">Collection</a>
        <div className="dropdown">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            id="dropdown-basic"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="/icon-cart.svg" alt="cart icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
