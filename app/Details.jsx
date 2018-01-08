// @flow

import React from 'react'
import axios from 'axios'

class Details extends React.Component {
  state = {
    product: {}
  };

  componentDidMount() {
    this.getProductDetails(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps: typeof Details.prototype.props) {
    this.getProductDetails(nextProps.match.params.id)
  }

  getProductDetails(param: string) {
    axios.get(`/api/items/${param}`)
      .then((response) => {
        this.setState({
          product: response.data.item,
        })
      })
  }

  getPrice(){
    const price = this.state.product.price.amount;
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
  }

  props: {
    match: {
      params: {
        id: string
      }
    }
  };

  isProductNew() {
    return this.state.product.condition === 'new' ? 'Nuevo' : 'Usado';
  }

  render(){
    if(!this.state.product.picture){
      return <h1 className="loading">Cargando Detalles</h1>
    }

    return (
      <div className="container mb-lt">
        <div className="main-container">
          <div className="details-container">
            <div className="top-details-container grid-container">
              <img src={this.state.product.picture} className="img-details-product" alt="producto imagen detalles"/>
              <div className="price-details-container">
                <span className="sell-items">{this.isProductNew()} - {this.state.product.sold_quantity} vendidos</span>
                <h2 className="product-details-title">{this.state.product.title}</h2>
                <h1 className="product-details-price">
                  $ {this.getPrice()}
                  <span className="decimals">{this.state.product.price.decimals || '00'}</span>
                </h1>
                <button className="btn-primary">Comprar</button>
              </div>
            </div>
            <div className="description-container">
              <h2 className="description-title">Descripcion del producto</h2>
              <p className="description">{this.state.product.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Details
