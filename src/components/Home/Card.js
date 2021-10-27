import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product, saveProducts, cart } = this.props;
    const { category_id: categoryId, id, title, price, thumbnail } = product;
    return (
      <div name={ id } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <Link
          to={ `/product/${categoryId}/${id}/${title}` }
          data-testid="product-detail-link "
        >
          <span data-testid="shopping-cart-product-name">{title}</span>
        </Link>
        <span>{price}</span>
        <br />
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
    category_id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  saveProducts: PropTypes.func.isRequired,
  cart: PropTypes.bool.isRequired,
};

export default Card;
