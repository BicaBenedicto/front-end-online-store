import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      categories.map((categorie) => (
        <p key={ categorie.id }>{ categorie.name }</p>
      ))
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.shape.isRequired,
};

export default Categories;
