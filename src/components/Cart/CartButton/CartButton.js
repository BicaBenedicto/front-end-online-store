import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends Component {
  render() {
    const { length } = this.props;
    return (
      <div>
        <span data-testid="shopping-cart-size">{length}</span>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
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
