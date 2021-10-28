import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

class Card extends Component {
  constructor() {
    super();

    this.addProductQuantity = this.addProductQuantity.bind(this);
    this.removeProductQuantity = this.removeProductQuantity.bind(this);
  }

  addProductQuantity(event) {
    const { saveProducts } = this.props;
    saveProducts(event);
  }

  removeProductQuantity(event) {
    const { removeProductQuantity } = this.props;
    removeProductQuantity(event);
  }

  render() {
    const { product, saveProducts, cart } = this.props;
    const { category_id: categoryId, id, title, price, thumbnail, quantity } = product;
    return (
      <div className="productCard" name={ id } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <Link
          to={ `/product/${categoryId}/${id}/${title}` }
          data-testid="product-detail-link"
        >
          <span data-testid="shopping-cart-product-name">{title}</span>
        </Link>
        <p>
          R$
          {price}
        </p>
        <br />
        {cart
          ? (
            <>
              <button
                data-testid="product-decrease-quantity"
                onClick={ this.removeProductQuantity }
                disabled={ quantity <= 1 }
                type="button"
                name={ `${id}|${title}|${price}|${thumbnail}` }
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">{quantity}</span>
              <button
                data-testid="product-increase-quantity"
                onClick={ this.addProductQuantity }
                type="button"
                name={ `${id}|${title}|${price}|${thumbnail}` }
              >
                +
              </button>
            </>
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
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  saveProducts: PropTypes.func.isRequired,
  cart: PropTypes.bool.isRequired,
  removeProductQuantity: PropTypes.func.isRequired,
};

export default Card;
