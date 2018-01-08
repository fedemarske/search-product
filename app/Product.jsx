// @flow

import React from 'react'
import { Link } from 'react-router-dom'

class Product extends React.Component {

  getPrice(){
    const price = this.props.product.price.amount;
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
  }

  props: {
    product: {
      id: string,
      title: string,
      price: {
        amount: string
      },
      free_shipping: string,
      picture: string
    }
  };

  isFreeShipping(){
    if(this.props.product.free_shipping){
      return <img src="/img/ic_shipping.png" className="free-shipping" alt="envio gratis icono" />
    }

    return ''
  }

  render(){
    return (
      <li className="product">
        <div className="left-product">
          <Link to={`items/${this.props.product.id}`}>
            <img src={this.props.product.picture} className="img-product-list" alt="producto imagen lista" />
          </Link>
        </div>
        <div className="center-product">
          <Link to={`items/${this.props.product.id}`} className="anchor-decoration-none">
            <h2 className="price-item font-bold-light">
              $ {this.getPrice()}
              {this.isFreeShipping()}
            </h2>
            <span>{this.props.product.title}</span>
          </Link>
        </div>
        <div className="right-product">
          <h4 className="font-bold-light">Capital Federal</h4>
        </div>
      </li>
    )
  }
}

export default Product
