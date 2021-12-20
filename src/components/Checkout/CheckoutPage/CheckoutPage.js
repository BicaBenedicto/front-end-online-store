import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CheckoutPage.css';

export default class CheckoutPage extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className='checkout-page'>
        <table className='checkout-product-list'>
          <tr className='checkout-title-table'>
            <th>
            </th>
            <th>
              Produto
            </th>
            <th>
              Quantidade
            </th>
            <th>
              Valor
            </th>
          </tr>
          { products.map((product, index) => (
            <tr className={index % 2 === 0 ? 'par-table' : 'impar-table'}>
              <td>
                <img src={ product.thumbnail } alt={ product.title } />
              </td>
              <td>
                <h4>{ product.title }</h4>
              </td>
              <td>
                <h5>{product.quantity}</h5>
              </td>
              <td>
                <h5>
                  R$
                  { product.price * product.quantity }
                </h5>
              </td>
            </tr>
          ))}
        </table>
        <form className='checkout-form'>
          <label htmlFor="inputName">
            Nome:
            <input type="text" id="inputName" data-testid="checkout-fullname" />
          </label>
          <label htmlFor="inputEmail">
            Email:
            <input type="text" id="inputEmail" data-testid="checkout-email" />
          </label>
          <label htmlFor="inputCPF">
            CPF:
            <input type="text" id="inputCPF" data-testid="checkout-cpf" />
          </label>
          <label htmlFor="inputPhone">
            Telefone:
            <input type="text" id="inputPhone" data-testid="checkout-phone" />
          </label>
          <label htmlFor="inputCEP">
            Cep:
            <input type="text" id="inputCEP" data-testid="checkout-cep" />
          </label>
          <label htmlFor="inputAddress">
            Endereço:
            <input type="text" id="inputAddress" data-testid="checkout-address" />
          </label>
          <button type="submit">Finalizar Compra</button>
        </form>
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
