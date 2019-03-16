import React, { Component } from 'react';
import './ProductCard.css'

class ProductCard extends Component {
  render() {
    const { item } = this.props;
    return (
       <div>
            <img className="pic" src={require('../static/products/' + item.sku + '_1.jpg')}/>
            <div className="cardText">
              {item.title} <br/>
              Price: ${item.price}
			</div>
            <button> Add to Cart</button>
        </div>
      )
  }
}

export default ProductCard;