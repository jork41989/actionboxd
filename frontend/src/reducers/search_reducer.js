import {RECEIVE_RESULTS} from '../actions/search_actions';


const resultsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_RESULTS:
      return action.results.data;
    default:
      return state;
  }
}

export default resultsReducer;