import React from 'react'
import {withRouter} from "react-router-dom";

class Search extends React.Component {
  state = {
    searchTerm: ''
  };
  handleSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value})
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/items?search=${this.state.searchTerm}`);
  };
  render(){
    return (
      <header className="search-box">
        <div className="search-box-container container grid-container">
          <img src="/img/Logo_ML.png" alt="mercadolibre logo" />
          <form className="search-box-form grid-container" onSubmit={this.handleSubmit}>
            <input type="text" className="search-input" placeholder="Nunca dejes de buscar" onChange={this.handleSearchTerm} />
              <button className="search-box-btn">
                <img src="/img/ic_Search.png" alt="icon search product" />
              </button>
          </form>
        </div>
      </header>
    )
  }
}

export default withRouter(Search)
