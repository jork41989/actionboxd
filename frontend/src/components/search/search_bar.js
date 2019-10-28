import React from 'react';
import {Link} from 'react-router-dom';
import './searchbar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showsearch: false
    }
  }


  handleInputChange = (e) => {
    if (e.target.value){
      return (
        this.props.getMovieList(e.target.value)     
        )
      } else {
  
        this.props.getMovieList('null')     
    }
  }

  render() {
    let options; 
   if (!this.props.results){
     return options = <div></div>
    } else {
     options = this.props.results.map(movie => {
       return <Link id="searchbar-result" to={`/movies/${movie._id}`}>{movie.title}</Link>
    })
  }
      
    return (
      <form className='navbar-links'>
        <input className='searchbar'
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <div className="results">
          {options}
        </div>
      </form>
    )
  }
}

export default SearchBar;