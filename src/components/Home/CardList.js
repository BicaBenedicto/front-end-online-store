import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { searchList, saveProducts } = this.props;
    return (
      <section>
        {searchList.map(
          (product) => (<Card
            key={ product.id }
            product={ product }
            saveProducts={ saveProducts }
          />),
        )}
      </section>
    );
  }
}

CardList.propTypes = {
  searchList: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveProducts: PropTypes.func,
};

CardList.defaultProps = {
  saveProducts: () => {},
};

export default CardList;
