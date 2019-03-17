import React, { Component } from "react";
import ProductCard from "./ProductCard.js";
import "./ProductTable.css";

class ProductTable extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="flex-container">
        {productList.map(product => (
            <ProductCard item ={product} key={product.id} addItem={this.props.addItem}/>))}
      </div>

    );
  }
}

export default ProductTable;