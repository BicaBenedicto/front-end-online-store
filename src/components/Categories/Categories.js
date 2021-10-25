import React from 'react';
import { getCategories } from '../../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.setCategories = this.setCategories(this);
  }

  componentDidMount() {
    this.setCategories();
  }

  async setCategories() {
    const categories = await getCategories();
    const allCategories = categories.map((categorie) => (
      <li key={ categorie.id }>
        { categorie.name }
      </li>
    ));
    this.setState({ categories: allCategories });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <h3>Categorias</h3>
        <ul>
          {categories}
        </ul>
      </aside>
    );
  }
}

export default Categories;
