import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import ProductTable from './components/ProductTable.js';
import MySidebar from './components/Sidebar.js'
import {Row, Col} from 'reactstrap'

class App extends Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this)
    this.state = {
      products: [],
      total: 0,
      items: [],
      count: 0,
      myfilter: ["XS","S","M","ML","L","X","XL","XXL"],
      sizes: ["XS","S","M","ML","L","X","XL","XXL"]
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

  addFilter(size){
    let filterlist = this.state.myfilter
    let sizes = this.state.sizes
    if (filterlist.length == sizes.length){
      filterlist = []
    }
    let adding = true
    for( var i = 0; i < filterlist.length; i++){ 
   if ( filterlist[i] === size) {
     filterlist.splice(i, 1); 
     adding = false
   }
}
if (adding){
    filterlist.push(size)
  }
    this.setState({ myfilter: filterlist })
  }

  checkFilter(size){
    let filterlist = this.state.myfilter
    let sizes = this.state.sizes
    if (filterlist.length == sizes.length){
      return ''
    }
    let inlist = false
    for( var i = 0; i < filterlist.length; i++){ 
   if ( filterlist[i] === size) {
     inlist = true
   }
}

if (inlist){
  return 'blue'
}
else {
  return ''
}
  }

  resetFilters(){
    this.setState({ myfilter: ["XS","S","M","ML","L","X","XL","XXL"] })
  }

  render() {
    const { products } = this.state;
    const { items } = this.state;
    const { sizes } = this.state;
    const { myfilter } = this.state;
    return (
      <div>
        <div className='title'> LYON'S VERY HUMBLE CART </div>
        <div className='title'> filter by size:
        <button onClick={() => this.addFilter("XS")} style = {{backgroundColor: this.checkFilter("XS")}}>XS</button>
        <button onClick={() => this.addFilter("S")} style = {{backgroundColor: this.checkFilter("S")}}>S</button> 
        <button onClick={() => this.addFilter("M")} style = {{backgroundColor: this.checkFilter("M")}}>M</button>
        <button onClick={() => this.addFilter("ML")} style = {{backgroundColor: this.checkFilter("ML")}}>ML</button>
        <button onClick={() => this.addFilter("L")} style = {{backgroundColor: this.checkFilter("L")}}>L</button>
        <button onClick={() => this.addFilter("X")} style = {{backgroundColor: this.checkFilter("X")}}>X</button> 
        <button onClick={() => this.addFilter("XL")} style = {{backgroundColor: this.checkFilter("XL")}}>XL</button>
        <button onClick={() => this.addFilter("XXL")} style = {{backgroundColor: this.checkFilter("XXL")}}>XXL</button> 
        <button onClick={() => this.resetFilters()}>Reset</button>
        </div>

        <ProductTable productList = {products} addItem={this.addItem} myfilter={myfilter}/>

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
