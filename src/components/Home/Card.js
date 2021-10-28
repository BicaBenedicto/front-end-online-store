import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
      verifyQuantity: true,
    };

    this.getProductQuantity = this.getProductQuantity.bind(this);
    this.addProductQuantity = this.addProductQuantity.bind(this);
    this.removeProductQuantity = this.removeProductQuantity.bind(this);
    this.verifyMinQuantityPermited = this.verifyMinQuantityPermited.bind(this);
  }

  componentDidMount() {
    this.getProductQuantity();
  }

  getProductQuantity() {
    const { verifyQuantityProduct } = this.props;
    this.setState({
      quantity: verifyQuantityProduct,
    });
  }

  addProductQuantity() {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
    this.verifyMinQuantityPermited();
  }

  removeProductQuantity() {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
    }));
    this.verifyMinQuantityPermited();
  }

  verifyMinQuantityPermited() {
    const { quantity } = this.state;
    const min = 1;
    this.setState({ verifyQuantity: true });
    if (quantity > min) this.setState({ verifyQuantity: false });
  }

  render() {
    const { quantity, verifyQuantity } = this.state;
    const { product, saveProducts, cart } = this.props;
    const { category_id: categoryId, id, title, price, thumbnail } = product;
    return (
      <div name={ id } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <Link
          to={ `/product/${categoryId}/${id}/${title}` }
          data-testid="product-detail-link"
        >
          <span data-testid="shopping-cart-product-name">{title}</span>
        </Link>
        <span>{price}</span>
        <br />
        {cart
          ? (
            <>
              <button
                data-testid="product-decrease-quantity"
                onClick={ this.removeProductQuantity }
                disabled={ verifyQuantity }
                type="button"
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">{quantity}</span>
              <button
                data-testid="product-increase-quantity"
                onClick={ this.addProductQuantity }
                type="button"
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
  }).isRequired,
  saveProducts: PropTypes.func.isRequired,
  cart: PropTypes.bool.isRequired,
  verifyQuantityProduct: PropTypes.number.isRequired,
};

export default Card;
