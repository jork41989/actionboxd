import { RECEIVE_MOVIE, RECEIVE_MOVIE_ERRORS } from '../actions/movie_actions';


const _nullErrors = [];

const MovieErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE_ERRORS:
      return action.errors;
    case RECEIVE_MOVIE:
      return _nullErrors;
    default:
      return state;
  }
};

export default MovieErrorsReducer;