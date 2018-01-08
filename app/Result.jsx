// @flow

import React from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom"
import queryString from 'query-string'
import Breadcrumb from './Breadcrumb'
import Product from './Product'

class Result extends React.Component {
  state = {
    products: [],
    categories: []
  };

  componentDidMount() {
    this.getProductList();
  }

  componentWillReceiveProps() {
    this.getProductList()
  }

  getProductList() {
    const param = this.getQueryParam();
    axios.get(`api/items?q=${param}`)
      .then((response) => {
        this.setState({
          products: response.data.items,
          categories: response.data.categories
        })
      })
  }

  getQueryParam() {
    return queryString.parse(this.props.location.search).search;
  }

  props: {
    location: {
      search: {}
    }
  };

  render(){
    return (
      <div className="container mb-lt">
        <Breadcrumb categories={this.state.categories}/>
        <div className="result-container main-container">
          <ul className="result-list">
            {this.state.products.map((product) => <Product key={product.id} product={product} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Result)
