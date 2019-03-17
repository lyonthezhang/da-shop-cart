import React, { Component } from 'react';
import './ProductCard.css'

class ProductCard extends Component {


  render() {
    const { item } = this.props;
	const { availableSizes } = item.availableSizes
    return (
       <div>
            <img className="pic" src={require('../static/products/' + item.sku + '_1.jpg')}/>
            <div className="cardText">
              {item.title} <br/>
              Price: ${item.price}
			</div>
			{item.availableSizes.map(product => (
            <button onClick={() => {this.props.addItem(item,product)}}> {product} </button>))}
        </div>
      )
  }
}

export default ProductCard;