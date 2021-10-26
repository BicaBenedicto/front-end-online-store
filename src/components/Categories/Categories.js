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
    const { generateList } = this.props;
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
              onClick={ generateList }
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
  generateList: PropTypes.func.isRequired,
};

export default Categories;
