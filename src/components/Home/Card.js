import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      freeShipping: false,
    };

    this.addProductQuantity = this.addProductQuantity.bind(this);
    this.removeProductQuantity = this.removeProductQuantity.bind(this);
    this.verifyShipping = this.verifyShipping.bind(this);
    this.getShipping = this.getShipping.bind(this);
  }

  componentDidMount() {
    this.getShipping();
  }

  getShipping() {
    this.setState({
      freeShipping: this.verifyShipping(),
    });
  }

  removeProductQuantity(event) {
    const { removeProductQuantity } = this.props;
    removeProductQuantity(event);
  }

  addProductQuantity(event) {
    const { saveProducts } = this.props;
    saveProducts(event);
  }

  verifyShipping() {
    const { product } = this.props;
    const { shipping } = product;
    if (shipping) {
      const { free_shipping: freeShip } = shipping;
      return freeShip;
    }
    return false;
  }

  render() {
    const { freeShipping } = this.state;
    const { product, saveProducts, cart } = this.props;
    const { category_id: categoryId, id, title,
      price, thumbnail, quantity, available_quantity: availableQuant,
      availableQuantity } = product;
    return (
      <div className="productCard" name={ id } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        {(freeShipping) && <span data-testid="free-shipping">Frete Grátis</span>}
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
                name={ `${id}|${title}|${price}|${thumbnail}|${availableQuantity
                  || availableQuant}` }
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">{quantity}</span>
              <button
                data-testid="product-increase-quantity"
                onClick={ this.addProductQuantity }
                disabled={ quantity >= availableQuantity || availableQuant }
                type="button"
                name={ `${id}|${title}|${price}|${thumbnail}|${availableQuantity
                  || availableQuant}` }
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
              name={ `${id}|${title}|${price}|${thumbnail}|${availableQuantity
                || availableQuant}` }
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
    available_quantity: PropTypes.number.isRequired,
    availableQuantity: PropTypes.number.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  saveProducts: PropTypes.func.isRequired,
  cart: PropTypes.bool.isRequired,
  removeProductQuantity: PropTypes.func.isRequired,
};

export default Card;
