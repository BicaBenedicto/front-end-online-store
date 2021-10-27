import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product } = this.props;
    const { category_id: categoryId, id, title, price, thumbnail } = product;
    return (
      <>
        <div name={ id } data-testid="product">
          <img src={ thumbnail } alt={ title } width="150px" />
          <Link
            to={ `/product/${categoryId}/${id}/${title}` }
            data-testid="product-detail-link"
          >
            {title}
          </Link>
          <span>{price}</span>
        </div>
        <br />
      </>
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
};

export default Card;
