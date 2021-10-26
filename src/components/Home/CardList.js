import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { searchList } = this.props;
    // console.log(searchList);
    return (
      <section>
        {searchList.map(
          (product) => (<Card
            key={product.id}
            product={product}
           />),
      )}
      </section>
    );
  }
}

CardList.propTypes = {
  searchList: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = {
  searchList: [],
}

export default CardList;
