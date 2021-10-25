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
    return searchList.map((searchItem) => (
      <Card key={ searchItem.id } { ...searchItem } />
    ));
  }

  render() {
    return (
      <>
        {this.renderList()}
      </>
    );
  }
}

CardList.propTypes = {
  searchList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
