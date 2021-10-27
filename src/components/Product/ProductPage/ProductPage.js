import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../../services/api';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      price: '',
      loading: true,
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.clearProductInfo = this.clearProductInfo.bind(this);
  }

  componentDidMount() {
    this.clearProductInfo();
  }

  async getProductInfo() {
    const { match: { params: { categoryId, title, id } } } = this.props;
    this.setState({ name: title });
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
      loading: false,
    });
  }

  render() {
    const { name, image, price, loading } = this.state;
    if (loading) return <h1>Carregando...</h1>;
    return (
      <>
        <h1 data-testid="product-detail-name">{ name }</h1>
        <h2>
          R$
          { price }
        </h2>
        <img src={ image } alt={ name } />
      </>
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
};

export default ProductPage;
