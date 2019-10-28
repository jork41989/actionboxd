import React from 'react'
import ReactTooltip from 'react-tooltip'


class ActorForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      bio: "",
      photo_url: "",
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
    let actor = {
      name: this.state.name,
      bio: this.state.bio,
      photo_url: this.state.photo_url,

    }
    this.props.newActorAdd(actor)
      .then(this.errorCheck);
    // this.props.closeModal();
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
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="Name"
              className={'formInput'}
              id={'name'}
              data-tip data-for={'name'}
            />



            <input type="text"
              value={this.state.bio}
              onChange={this.update('bio')}
              placeholder="Bio"
              className={'formInput'}
              id={'bio'}
              data-tip data-for={'bio'}
            />

            <input type="text"
              value={this.state.photo_url}
              onChange={this.update('photo_url')}
              placeholder="Photo Url"
              className={'formInput'}
              id={'photo_url'}
              data-tip data-for={'photo_url'}
            />



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