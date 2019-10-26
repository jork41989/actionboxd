import React, { Component } from 'react';



class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      showsearch: false
    }
  }


  handleInputChange = (e) => {
    debugger
    if (e.target.value){
      return (
        this.props.getMovieList(e.target.value)     
        )
      } else {
        debugger
        this.props.getMovieList('null')     
    }
  }

  render() {
    debugger
    let options; 
   if (!this.props.results){
     return options = <div>hi</div>
    } else {
     options = this.props.results.map(r => {
       return <li key={r.id}>
          {r.title}
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
      {options}
      </form>
    )
  }
}

export default SearchBar;