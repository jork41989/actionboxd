import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import TrailerContainer from '../movies/trailer_container';
import ReviewsCreateFormContainer from '../reviews/reviews_create_form_container';
import MovieFormContainer from '../movie-form/movie_form_container';
import ReviewsEditFormContainer from '../reviews/reviews_edit_form_container';
import ActorFormContainer from '../actor-form/actor_form_container';


import './modal.css';


function Modal ({payload, closeModal}) {
  if (!payload) {
    return null;
  }

  let component;
  switch(payload.modal){
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'trailer':
      component = <TrailerContainer movieId={payload.movieId} />;
      break;
    case 'review':
      component = <ReviewsCreateFormContainer movieId={payload.movieId} />;
      break;
    case 'movie':
      component = <MovieFormContainer />;
      break;
    case 'edit':
      component = <ReviewsEditFormContainer movieId={payload.movieId} reviewId={payload.reviewId}/>;
    case 'actor':
      component = <ActorFormContainer />;
      break;
    default:
      return null;
  }

  let modalBackgroundClass = payload.modal === 'trailer' ? "modal-background-trailer" : "modal-background";
  let modalChildClass = payload.modal === 'review' || 'edit' ? "modal-child-review" : "modal-child";

  return (
    <div className={modalBackgroundClass} onClick={closeModal}>
      <div className={modalChildClass} onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    payload: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
