import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CartButton.css';

class CartButton extends Component {
  render() {
    const { length } = this.props;
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <div className="cartButton">
          <img
            src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg"
            alt="cart"
            className="cartButtonImage"
          />
        <span className="itemsLength" data-testid="shopping-cart-size">{length}</span>
        </div>
      </Link>
    );
  }
}

CartButton.propTypes = {
  length: PropTypes.number,
};

CartButton.defaultProps = {
  length: 0,
};

export default CartButton;
