import React, { Component } from 'react';
import axios from 'axios';


class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      results: []
    }
  }

  getInfo = (term) => {
    axios.get(`/api/movies/search/${term}`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    debugger
          this.getInfo(this.search.value);
      
  }

  render() {
    debugger
    let options; 
   if (!this.state.results){
     return options = <div>hi</div>
    } else {
     options = this.state.results.map(r => {
       return <li key={r.id}>
          {r.name}
        </li>
    })
  }
      
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      <ul>{options}</ul>
      </form>
    )
  }
}

export default SearchBar;