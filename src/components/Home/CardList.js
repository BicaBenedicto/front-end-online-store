import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  constructor() {
    super();

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const { searchList } = this.props;
    const searched = searchList.map(({id, title, price, image}) => (
      <div key={ id } data-testid="product">
        <img src={image} alt={title} />
        <span>{title}</span>
        <span>{price}</span>
      </div>
    ));
    return searched;
  }

  render() {
    const { searchList } = this.props;
    return searchList.map(({ id, title, price, image }) => (
      <div key={ id } data-testid="product">
        <img src={image} alt={title} />
        <span>{title}</span>
        <span>{price}</span>
      </div>
    ));
  }
}

CardList.propTypes = {
  searchList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
