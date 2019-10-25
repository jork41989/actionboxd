
import { RECEIVE_SINGLE_USER, WATCH_MOVIE, UNWATCH_MOVIE } from "../actions/users_actions"
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";


export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_SINGLE_USER:
      return Object.assign({}, state, { [action.user.data.id]: action.user.data })
    case WATCH_MOVIE:
      return Object.assign({}, state, { [action.user.data.id]: action.user.data })
    case UNWATCH_MOVIE:
      return Object.assign({}, state, { [action.user.data.id]: action.user.data })
      //add case for remove review 
      // add case for receive review 
    // case RECEIVE_REVIEW: 
    // case REMOVE_REVIEW:
    default:
      return state;
  }
}