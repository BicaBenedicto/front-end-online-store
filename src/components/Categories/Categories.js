import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.setCategories = this.setCategories(this);
  }

  async setCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { onClickCategory } = this.props;
    return (
      <aside>
        <h3>Categorias</h3>
        <ul>
          {categories.map((category) => (
            <button
              type="button"
              data-testid="category"
              key={ category.id }
              id={ category.id }
              onClick={ onClickCategory }
            >
              { category.name }
            </button>
          ))}
        </ul>
      </aside>
    );
  }
}

Categories.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
};

export default Categories;
