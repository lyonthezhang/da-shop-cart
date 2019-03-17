import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import ProductTable from './components/ProductTable.js';
import MySidebar from './components/Sidebar.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this)
    this.state = {
      products: [],
      total: 0,
      items: [],
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

  addItem(item) {
    let title = item.title
    alert("The " + title + " has been added to your cart")
    let itemlist = this.state.items
    itemlist.push(item.title)
    this.setState({ items: itemlist});
    this.setState({total: this.state.total + item.price})
  }

  render() {
    const { products } = this.state;
    const { items } = this.state;
    return (
      <div>
        <div className='title'> LYON'S VERY HUMBLE CART </div>
        <ProductTable productList = {products} addItem={this.addItem}/>

        <div class="ui vertical labeled icon ui overlay right wide visible sidebar menu">
      <a class="item">
      <i aria-hidden="true" class="cart icon">
      </i>Your Cart</a>
      <a class="item">
      <i aria-hidden="true">
      </i>{items.map(lol => (
            <p> {lol} </p>))}
      </a>
      <a class="item">
      <i aria-hidden="true" class="money icon">
      </i>Total: ${this.state.total}</a>
      </div>

      </div>
    );
  }
}

export default App;
