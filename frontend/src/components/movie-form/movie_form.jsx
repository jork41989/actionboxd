import React from 'react'
import ReactTooltip from 'react-tooltip'
import './movies_form.css'


class MovieForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      year: 2001,
      description: "",
      poster_url: "",
      trailer_url: "",
      background_image_url: "",
      errors: {},
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.confirmExit = this.confirmExit.bind(this);
    this.clearedErrors = false;
    this.errorCheck = this.errorCheck.bind(this);
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
    let movie = {
      title: this.state.title,
      year: this.state.year,
      description: this.state.description,
      poster_url: this.state.poster_url,
      trailer_url: this.state.trailer_url,
      background_image_url: this.state.background_image_url
    }
    this.props.newMovieAdd(movie)
      .then(this.errorCheck);
    // this.props.closeModal();
  }

  renderErrors() {

    if (Object.keys(this.state.errors).includes('title')) {
      let textField = document.getElementById('title')
      textField.style.border = '3px solid red'
    }

    if (Object.keys(this.state.errors).includes('year')) {
      let ratingField = document.getElementById('year')
      ratingField.style.border = '3px solid red'
    }

    if (Object.keys(this.state.errors).includes('description')) {
      let ratingField = document.getElementById('description')
      ratingField.style.border = '3px solid red'
    }

    if (Object.keys(this.state.errors).includes('poster_url')) {
      let ratingField = document.getElementById('poster_url')
      ratingField.style.border = '3px solid red'
    }

    if (Object.keys(this.state.errors).includes('trailer_url')) {
      let ratingField = document.getElementById('trailer_url')
      ratingField.style.border = '3px solid red'
    }


    if (Object.keys(this.state.errors).includes('background_image_url')) {
      let ratingField = document.getElementById('background_image_url')
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
  

  render() {
   

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
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="Title"
              className={'formInput'}
              id={'title'}
              data-tip data-for={'title'}
            />


            <input type="number" min="1900" max="2099" step="1" 
              value={this.state.year}
              onChange={this.update('year')}
              className={'formInput'}
              id={'year'}
              data-tip data-for={'year'}
              />

            <input type="text"
              value={this.state.description}
              onChange={this.update('description')}
              placeholder="Description"
              className={'formInput'}
              id={'description'}
              data-tip data-for={'description'}
            />

            <input type="text"
              value={this.state.poster_url}
              onChange={this.update('poster_url')}
              placeholder="Poster Url"
              className={'formInput'}
              id={'poster_url'}
              data-tip data-for={'poster_url'}
            />

            <input type="text"
              value={this.state.trailer_url}
              onChange={this.update('trailer_url')}
              placeholder="Trailer Url"
              className={'formInput'}
              id={'trailer_url'}
              data-tip data-for={'trailer_url'}
            />

            <input type="text"
              value={this.state.background_image_url}
              onChange={this.update('background_image_url')}
              placeholder="Background Image Url"
              className={'formInput'}
              id={'background_image_url'}
              data-tip data-for={'background_image_url'}
            />
           
            {this.renderErrors()}
            <div className="submit-row-movie">
              <button className="movies-submit">Add The Movie</button>
            </div>
          </form>

        </div>
        
      </div>
    )
  }
}

export default MovieForm;

