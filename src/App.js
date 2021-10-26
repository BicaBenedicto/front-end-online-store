import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CartPage from './components/Cart/CartPage/CartPage';
import ProductPage from './components/Product/ProductPage/ProductPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ CartPage } />
          <Route exact path="/product/:categoryId/:id/:title" component={ ProductPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}
