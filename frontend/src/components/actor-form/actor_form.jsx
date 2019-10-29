import React from 'react'
import ReactTooltip from 'react-tooltip'
import { merge } from 'lodash';
import './actor_form.css'

class ActorForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      bio: "",
      photo_url: "",
      errors: {},
      movies: {}
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.confirmExit = this.confirmExit.bind(this);
    this.clearedErrors = false;
    this.errorCheck = this.errorCheck.bind(this);
    this.addMovie = this.addMovie.bind(this)
    this.removeMovie = this.removeMovie.bind(this)
  }

  errorCheck() {
    if (Object.keys(this.props.errors).length === 0) {
      this.props.closeModal()
    }
    this.setState({ errors: this.props.errors })
  }

  update(field) {
    
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    let actor = {
      name: this.state.name,
      bio: this.state.bio,
      photo_url: this.state.photo_url,
      movies: Object.keys(this.state.movies)
    }
    this.props.newActorAdd(actor)
      .then(this.errorCheck);
    // this.props.closeModal();
  }

  addMovie(movie){

    return e => {
      this.setState({movies: merge(this.state.movies, {[movie._id]: movie } ) }
          )
    }
    
  }

  removeMovie(movie){
    return e => {
      let newMoviesState = merge({}, this.state.movies)
      delete newMoviesState[movie._id]
      this.setState({movies: newMoviesState})
    }
  }

  renderMovieTitles(){
    let divMovies = []
    if(this.state.movies){
      Object.values(this.state.movies).forEach( movie => {
        divMovies.push(<div className='form-titles'> <p>{movie.title} <i
          className="far fa-trash-alt -actor-movie" onClick={this.removeMovie(movie)}
        ></i></p>  </div>)
      }

      )
    } else {
      return (<div> No movies yet!</div>)
    }

    return (divMovies)
  }

  renderErrors() {

    if (Object.keys(this.state.errors).includes('name')) {
      let textField = document.getElementById('name')
      textField.style.border = '3px solid red'
    }

    if (Object.keys(this.state.errors).includes('bio')) {
      let ratingField = document.getElementById('bio')
      ratingField.style.border = '3px solid red'
    }

    if (Object.keys(this.state.errors).includes('photo_url')) {
      let ratingField = document.getElementById('photo_url')
      ratingField.style.border = '3px solid red'
    }


    return (
      <div>
        {Object.keys(this.state.errors).map((error, i) => (
          <div id={i}>
            <ReactTooltip id={error} place="top" type="error" effect="solid">
              <span>{this.state.errors[error]}</span>
            </ReactTooltip>
          </div>
        ))}
      </div>
    );
  }


  handleInputChange = (e) => {
    let target = e.target.value;
    if (target) {
      return (
        this.props.getMovieList(target)
      )
    } else {

      this.props.getMovieList('null')
    }
  }


  render() {
    let options;
    let style = this.props.results.length === 0 ? { display: 'none' } : { display: 'block' };
    if (!this.props.results) {
      return options = <div></div>
    } else {
      options = this.props.results.map(result => {

        if (result.hasOwnProperty('title')) {
          return <div className="searchbar-result-form" onClick={this.addMovie(result)}>{result.title}</div>
        } 
      })
    }


    return (
      <div className="movies-form-container">
        <div
          className="review-close-button"
          // onClick={this.confirmExit}
          onClick={this.props.closeModal}
        >X</div>

        <div className="form-movie-panel">

          <form className="movie-form" onSubmit={this.handleSubmit}>

            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="Name"
              className={'formInput -actorFormInput'}
              id={'name'}
              data-tip data-for={'name'}
            />



            <input type="text"
              value={this.state.bio}
              onChange={this.update('bio')}
              placeholder="Bio"
              className={'formInput -actorFormInput'}
              id={'bio'}
              data-tip data-for={'bio'}
            />

            <input type="text"
              value={this.state.photo_url}
              onChange={this.update('photo_url')}
              placeholder="Photo Url"
              className={'formInput -actorFormInput'}
              id={'photo_url'}
              data-tip data-for={'photo_url'}
            />

            <div className={'addedMovies'}>
              {this.renderMovieTitles()}

            </div>

              <input className='searchbar'
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
              />
              <div className="results-actor-form" style={style} >
                {options}
              </div>


            {this.renderErrors()}
            <div className="submit-row-movie">
              <button className="movies-submit">Add This Actor</button>
            </div>
          </form>

        </div>

      </div>
    )
  }
}

export default ActorForm;