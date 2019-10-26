import React, { Component } from 'react';



class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }


  handleInputChange = (e) => {
    debugger
    return (
      this.props.getMovieList({term: e.target.value})     
    )
  }

  render() {
    debugger
    let options; 
   if (!this.props.results){
     return options = <div>hi</div>
    } else {
     options = this.props.results.map(r => {
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