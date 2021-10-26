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
          <li data-testid="category" key={ category.id } id={ category.id } onClick={onClickCategory}>
            { category.name }
          </li>
        ))}
        </ul>
      </aside>
    );
  }
}

export default Categories;
