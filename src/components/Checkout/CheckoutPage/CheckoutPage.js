import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutPage extends Component {
  render() {
    const { products } = this.props;
    return (
      <>
        { products.map((product) => (
          <>
            <img src={ product.thumbnail } alt={ product.title } />
            <h4>{ product.title }</h4>
            <h5>{product.quantity}</h5>
            <h5>
              R$
              { product.price * product.quantity }
            </h5>
          </>
        ))}
        <form>
          <label htmlFor="inputName">
            Insira seu nome:
            <input type="text" id="inputName" data-testid="checkout-fullname" />
          </label>
          <label htmlFor="inputEmail">
            Insira seu email:
            <input type="text" id="inputEmail" data-testid="checkout-email" />
          </label>
          <label htmlFor="inputCPF">
            Insira seu cpf:
            <input type="text" id="inputCPF" data-testid="checkout-cpf" />
          </label>
          <label htmlFor="inputPhone">
            Insira seu telefone:
            <input type="text" id="inputPhone" data-testid="checkout-phone" />
          </label>
          <label htmlFor="inputCEP">
            Insira seu cep:
            <input type="text" id="inputCEP" data-testid="checkout-cep" />
          </label>
          <label htmlFor="inputAddress">
            Insira seu endereço:
            <input type="text" id="inputAddress" data-testid="checkout-address" />
          </label>
          <button type="submit">Finalizar Compra</button>
        </form>
      </>
    );
  }
}

CheckoutPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
