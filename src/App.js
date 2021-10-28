import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CartPage from './components/Cart/CartPage/CartPage';
import ProductPage from './components/Product/ProductPage/ProductPage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.saveProducts = this.saveProducts.bind(this);
    this.removeProductQuantity = this.removeProductQuantity.bind(this);
  }

  saveProducts({ target }) {
    const { name } = target;
    const nameSplit = name.split('|');
    const id = nameSplit[0];
    const title = nameSplit[1];
    const price = nameSplit[2];
    const thumbnail = nameSplit[3];
    const product = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
    };
    this.setState((prevState) => ({
      products: (prevState.products.some((element) => element.id === product.id)
        ? prevState.products.map((element) => {
          if (element.id === product.id) {
            return ({
              id: element.id,
              title: element.title,
              price: element.price,
              thumbnail: element.thumbnail,
              quantity: element.quantity + 1,
            });
          }
          return element;
        })
        : [...prevState.products, product]),
    }));
  }

  removeProductQuantity({ target }) {
    const { name } = target;
    const nameSplit = name.split('|');
    const id = nameSplit[0];
    const title = nameSplit[1];
    const price = nameSplit[2];
    const thumbnail = nameSplit[3];
    const product = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
    };
    this.setState((prevState) => ({
      products: prevState.products.map((element) => {
        if (element.id === product.id) {
          return ({
            id: element.id,
            title: element.title,
            price: element.price,
            thumbnail: element.thumbnail,
            quantity: element.quantity - 1,
          });
        }
        return element;
      }),
    }));
  }

  compareProductsRemove(prevState, id) {
    const index = prevState.products.indexOf(id);
    return prevState.products.splice(index, 0);
  }

  render() {
    const { products } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home
              saveProducts={ this.saveProducts }
              products={ products }
            />
          </Route>
          <Route exact path="/cart">
            <CartPage
              products={ products }
              removeProductQuantity={ this.removeProductQuantity }
              saveProducts={ this.saveProducts }
            />
          </Route>
          <Route
            exact
            path="/product/:categoryId/:id/:title/"
            render={
              (props) => (
                <ProductPage
                  { ...props }
                  saveProducts={ this.saveProducts }
                  products={ products }
                />)
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
