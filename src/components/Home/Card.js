import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { product, key } = this.props;
    const { id, title, price, image } = product;
    return (
      <div key={ key } name={ id } data-testid="product">
        <img src={ image } alt={ title } />
        <span>{title}</span>
        <span>{price}</span>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.string.isRequired,
};

export default Card;
