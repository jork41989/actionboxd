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
    let target = e.target.value;
    if (target){
      return (
        this.props.getMovieList(target)
        .then(() => this.props.getActorsList(target))     
        )
      } else {
  
        this.props.getMovieList('null')     
    }
  }

  render() {
    
    let options; 
    let style =  this.props.results.length === 0 ?  { display: 'none' } : { display: 'block' };
   if (!this.props.results){
     return options = <div></div>
    } else {
     options = this.props.results.map(result => {
       
       if (result.hasOwnProperty('title')){
         return <Link id="searchbar-result" to={`/movies/${result._id}`}>{result.title}</Link>
        } else {
          return <Link id="searchbar-result" to={`/actors/${result._id}`}>{result.name}</Link>
       }
    })
  }
      
    return (
      <form className='navbar-links'>
        <input className='searchbar'
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <div className="results" style={style} >
          {options}
        </div>
      </form>
    )
  }
}

export default SearchBar;