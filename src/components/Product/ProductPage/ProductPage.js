import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../../services/api';
import CartButton from '../../Cart/CartButton/CartButton';
import './ProductPage.css';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      image: '',
      price: '',
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.clearProductInfo = this.clearProductInfo.bind(this);
  }

  componentDidMount() {
    this.clearProductInfo();
  }

  async getProductInfo() {
    const { match: { params: { categoryId, title, id } } } = this.props;
    this.setState({ name: title, id });
    const result = await getProductsFromCategoryAndQuery(categoryId, title);
    const product = result.results.find((item) => item.id === id);
    return product;
  }

  async clearProductInfo() {
    const product = await this.getProductInfo();
    const { thumbnail, price } = product;
    this.setState({
      image: thumbnail,
      price,
    });
  }

  render() {
    const { name, image, cart, price, id } = this.state;
    const { saveProducts, length } = this.props;
    return (
      <div className='product-page'>
        <div className='header-product-page'>
          <CartButton length={ length } />
        </div>
        <div className='productCard'>
          <h1 data-testid="product-detail-name">{ name }</h1>
          <img src={ image } alt={ name } />
          <h2>
            R$
            { price }
          </h2>
          
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Digite sua critica aqui!"
          />
          {cart
            ? (
              <span data-testid="shopping-cart-product-quantity">1</span>
            )
            : (
              <button
                data-testid="product-detail-add-to-cart"
                type="button"
                onClick={ saveProducts }
                name={ `${id}|${name}|${price}|${image}` }
              >
                Adicionar ao Carrinho

              </button>
            )}
        </div>
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  saveProducts: PropTypes.func.isRequired,
  length: PropTypes.number,
};

ProductPage.defaultProps = {
  length: 0,
};

export default ProductPage;
