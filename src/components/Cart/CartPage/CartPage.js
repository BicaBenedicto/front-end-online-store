import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Home/Card';
import CheckoutButton from '../../Checkout/CheckoutButton/CheckoutButton';
import './CartPage.css';

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
    const { products, saveProducts, removeProductQuantity } = this.props;
    return (
      <div className='cart-page'>
        <CheckoutButton />
        {
          empty
            ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
            : (
              <section className="cardList">
                {products.map((product) => (
                  <Card
                    key={ product.id }
                    cart
                    product={ product }
                    saveProducts={ saveProducts }
                    removeProductQuantity={ removeProductQuantity }
                  />
                ))}
              </section>

            )
        }
      </div>
    );
  }
}

CartPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveProducts: PropTypes.func,
  removeProductQuantity: PropTypes.func,
};

CartPage.defaultProps = {
  saveProducts: () => {},
  removeProductQuantity: () => {},
};
