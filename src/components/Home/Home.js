import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Categories from '../Categories/Categories';
import CartButton from '../Cart/CartButton/CartButton';
import CardList from './CardList';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      category: '',
      searchList: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.generateList = this.generateList.bind(this);
  }

  onInputChange({ target }) {
    const { value } = target;
    this.setState({
      search: value,
    });
  }

  generateList({ target }) {
    const { search, category } = this.state;
    const { id } = target;
    this.setState({
      category: id,
    });
    getProductsFromCategoryAndQuery(category, search).then(({ results }) => {
      this.setState({ searchList: results });
    });
  }

  render() {
    const { saveProducts } = this.props;
    const { search, searchList } = this.state;
    return (
      <>
        <header>
          <div>
            <input
              id="search-input"
              data-testid="query-input"
              type="text"
              value={ search }
              onChange={ this.onInputChange }
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.generateList }
            >
              Pesquisar
            </button>
            <CartButton />
          </div>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </header>
        <main>
          <CardList saveProducts={ saveProducts } searchList={ searchList } />
          <Categories
            generateList={ this.generateList }
          />
        </main>
      </>
    );
  }
}

Home.propTypes = {
  saveProducts: PropTypes.func.isRequired,
};

export default Home;
