import React from 'react';
import {Link} from 'react-router-dom';
import './searchbar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      val: ''
    }
    this.resetState = this.resetState.bind(this);
  }


  handleInputChange = (e) => {
    let target = e.target.value;
    this.setState({val: target});

    if (target){
      return (
        this.props.getMovieList(target)
        .then(() => this.props.getActorsList(target))     
        )
      } else {
  
        this.props.getMovieList('null')     
    }
  }
  resetState(){
    return (
      this.setState({val: ''})
    )
 
  }

  render() {
    
    let options; 
    let style =  !(this.props.results && this.state.val) ?  { display: 'none' } : { display: 'block' };
   if (!this.props.results){
     return options = <div></div>
    } else {
     options = this.props.results.map(result => {
       
       if (result.hasOwnProperty('title')){
         return <Link onClick={this.resetState} id="searchbar-result" to={`/movies/${result._id}`}>{result.title}</Link>
        } else {
         return <Link onClick={this.resetState} id="searchbar-result-actor" to={`/actors/${result._id}`}>{result.name}</Link>
       }
    })
  }
      
    return (
      <form className='navbar-links'>
        <input className='searchbar'
          placeholder="Search for..."
          value={this.state.val}
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