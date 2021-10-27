import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { product, key, saveProducts, cart } = this.props;
    const { id, title, price, thumbnail } = product;
    return (
      <div key={ key } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <span data-testid={ cart ? 'shopping-cart-product-name' : '' }>{title}</span>
        <span>{price}</span>
        {cart
          ? (
            <span data-testid="shopping-cart-product-quantity">1</span>
          )
          : (
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ saveProducts }
              name={ `${id}|${title}|${price}|${thumbnail}` }
            >
              Adicionar ao Carrinho

            </button>
          )}
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.string.isRequired,
  saveProducts: PropTypes.func.isRequired,
  cart: PropTypes.bool.isRequired,
};

export default Card;
