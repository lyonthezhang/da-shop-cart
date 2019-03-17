import React, { Component } from "react";
import ProductCard from "./ProductCard.js";
import "./ProductTable.css";

class ProductTable extends Component {
  selectiveRender() {
    let productList = this.props.productList
    let filter = this.props.myfilter
    let renderList = []
    for( var i = 0; i < productList.length; i++){ 
      for(var j = 0; j < filter.length; j++){
      if ( productList[i].availableSizes.includes(filter[j])){
        renderList.push(productList[i])
        break
      }
 }
}

return renderList
  }

  render() {
    const { productList } = this.props;
    const renderlist = this.selectiveRender()
    return (
      <div className="flex-container">
        {renderlist.map(product => (
            <ProductCard item ={product} key={product.id} addItem={this.props.addItem} myfilter={this.props.myfilter}/>))}
      </div>

    );
  }
}

export default ProductTable;