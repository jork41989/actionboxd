import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { getMovieList } from 'mongoose';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      autoCompleteResults: [],
      itemSelected: {},
      showItemSelected: false
    };

    getMovieList({term: this.state.term})
    .then(response => this.setState({ autoCompleteResults: response.movies }))
  }

  getAutoCompleteResults(e) {
    this.setState({
      term: e.target.value
    }, () => {
      getMovieList(this.state.term)
        .then(response => this.setState({ autoCompleteResults: response.movies }))
    });
  }

  render() {
    let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
      return <div key={index}>
        <h2>{response.title}</h2>
      </div>
    });

    return (
      <div>
        <input ref={(input) => 
          { this.searchBar = input }} 
          value={this.state.term} 
          onChange={this.getAutoCompleteResults.bind(this)} 
          type='text' placeholder='Search...' />
        {autoCompleteList}
      </div>
    )
  }
}

export default SearchBar;