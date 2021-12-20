import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutButton.css';

export default class CheckoutButton extends Component {
  render() {
    return (
      <Link to="/checkout" data-testid="checkout-products" className="checkout-button">
        Finalizar compra
      </Link>
    );
  }
}
