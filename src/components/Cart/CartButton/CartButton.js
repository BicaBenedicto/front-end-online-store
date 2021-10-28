import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends Component {
  render() {
    const { products } = this.props;
    const quantityItemsInCart = products.length;
    return (
      <div>
        <span data-testid="shopping-cart-size">{quantityItemsInCart}</span>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

CartButton.defaultProps = {
  products: [],
};

export default CartButton;
