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

  render() {
    const { empty } = this.state;
    const { products } = this.props;
    return (
      empty ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        : (
          products.map((product) => (
            <Card key={ product.id } cart product={ product } />
          ))
        )
    );
  }
}

CartPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
