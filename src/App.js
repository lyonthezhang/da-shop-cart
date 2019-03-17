import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import ProductTable from './components/ProductTable.js';
import MySidebar from './components/Sidebar.js'
import {Row} from 'reactstrap'

class App extends Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this)
    this.state = {
      products: [],
      total: 0,
      items: [],
      count: 0,
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

  addItem(item,size) {
    let title = item.title
    alert("The " + title + " has been added to your cart")
    let itemlist = this.state.items
    itemlist.push([item.title, item.price, size])
    this.setState({ items: itemlist});
    this.setState({total: this.state.total + item.price})
    this.setState({count: this.state.count + 1})
  }

  removeItem(item) {
    let title = item
    alert("The " + title + " has been removed from your cart")
    let itemlist = this.state.items
    for( var i = 0; i < itemlist.length; i++){ 
   if ( itemlist[i] === item) {
     itemlist.splice(i, 1); 
   }
}
    this.setState({ items: itemlist });
    this.setState({ total: this.state.total - item[1] })
    this.setState({count: this.state.count - 1})
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
            <Row>{lol[0]} {lol[2]}: ${lol[1]}<button onClick={() => this.removeItem(lol)}>X</button></Row>))}
      </a>
      <a class="item">
      <i aria-hidden="true" class="money icon">
      </i><div>Total: ${Number.parseFloat(this.state.total).toFixed(2)}</div><div>Quantity: {this.state.count}</div></a>
      </div>

      </div>
    );
  }
}

export default App;
