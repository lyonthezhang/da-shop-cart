import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import ProductTable from './components/ProductTable.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    import("./static/data/products.json")
      .then(json => {
        this.setState({ products: json.products });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div className='title'> LYON'S VERY HUMBLE CART </div>
        <ProductTable productList = {products} />
      </div>
    );
  }
}

export default App;
