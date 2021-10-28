import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Home/Card';

export default class CartPage extends Component {
  constructor() {
    super();

    this.state = {
      empty: true,
    };

    this.validationEmptyCart = this.validationEmptyCart.bind(this);
    this.verifyQuantityProduct = this.verifyQuantityProduct.bind(this);
  }

  componentDidMount() {
    this.validationEmptyCart();
  }

  validationEmptyCart() {
    const { products } = this.props;
    this.setState({ empty: false });
    if (products.length === 0) {
      this.setState({ empty: true });
    }
  }

  verifyQuantityProduct({ id }) {
    const { products } = this.props;
    const filterId = products.filter((product) => product.id === id);
    return filterId.length;
  }

  render() {
    const { empty } = this.state;
    const { products } = this.props;
    return (
      empty ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        : (
          products.filter((product) => product.id).map((product) => (
            <Card
              key={ product.id }
              cart
              product={ product }
              verifyQuantityProduct={ this.verifyQuantityProduct(product) }
            />
          ))
        )
    );
  }
}

CartPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
