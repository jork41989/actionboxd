import {RECEIVE_LIST, EMPTY_LIST} from '../actions/search_actions';

const SearchReducer = (state= [], action) =>{
  debugger
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LIST:
      debugger
      return action.list.data;
    case EMPTY_LIST:
      return state;
    default:
      return state;
  }
};

export default SearchReducer;