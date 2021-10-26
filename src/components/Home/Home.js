import React, { Component } from 'react';
import Categories from '../Categories/Categories';
import CartButton from '../Cart/CartButton/CartButton';

export default class Home extends Component {
  render() {
    return (
      <>
        <header>
          <CartButton />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </header>
        <Categories />
      </>
    );
  }
}
