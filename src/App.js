import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CartPage from './components/Cart/CartPage/CartPage';
import ProductPage from './components/Product/ProductPage/ProductPage';
import CheckoutPage from './components/Checkout/CheckoutPage/CheckoutPage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      length: 0,
    };
    this.saveProducts = this.saveProducts.bind(this);
    this.removeProductQuantity = this.removeProductQuantity.bind(this);
    this.getLengthProducts = this.getLengthProducts.bind(this);
    this.saveProductsInStorage = this.saveProductsInStorage.bind(this);
    this.loadProductsInStorage = this.loadProductsInStorage.bind(this);
  }

  componentDidMount() {
    this.getLengthProducts();
    const getProducts = localStorage.getItem('products');
    if (getProducts) return this.loadProductsInStorage();
  }

  componentDidUpdate() {
    this.saveProductsInStorage();
  }

  getLengthProducts() {
    const { products } = this.state;
    const lengthProducts = products.reduce((acc, product) => product.quantity + acc, 0);
    this.setState({ length: lengthProducts });
  }

  loadProductsInStorage() {
    const recoverProducts = localStorage.getItem('products');
    this.setState({ products: JSON.parse(recoverProducts) });
  }

  saveProductsInStorage() {
    const { products } = this.state;
    localStorage.setItem('products', JSON.stringify(products));
  }

  saveProducts({ target }) {
    const { name } = target;
    const nameSplit = name.split('|');
    const id = nameSplit[0];
    const title = nameSplit[1];
    const price = nameSplit[2];
    const thumbnail = nameSplit[3];
    const availableQuantity = nameSplit[4];
    const freeShipping = nameSplit[5];
    const product = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
      availableQuantity,
      freeShipping,
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
              availableQuantity: element.availableQuantity,
              freeShipping: element.freeShipping,
            });
          }
          return element;
        })
        : [...prevState.products, product]),
    }), this.getLengthProducts);
  }

  removeProductQuantity({ target }) {
    const { name } = target;
    const nameSplit = name.split('|');
    const id = nameSplit[0];
    const title = nameSplit[1];
    const price = nameSplit[2];
    const thumbnail = nameSplit[3];
    const availableQuantity = nameSplit[4];
    const freeShipping = nameSplit[5];
    const product = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
      availableQuantity,
      freeShipping,
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
            availableQuantity: element.availableQuantity,
            freeShipping: element.freeShipping,
          });
        }
        return element;
      }),
    }), this.getLengthProducts);
  }

  render() {
    const { products, length } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home
              saveProducts={ this.saveProducts }
              length={ length }
            />
          </Route>
          <Route exact path="/cart">
            <CartPage
              products={ products }
              removeProductQuantity={ this.removeProductQuantity }
              saveProducts={ this.saveProducts }
              loadProductsInStorage={ this.loadProductsInStorage }
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
                  length={ length }
                />)
            }
          />
          <Route
            exact
            path="/checkout"
            render={ (props) => <CheckoutPage { ...props } products={ products } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
