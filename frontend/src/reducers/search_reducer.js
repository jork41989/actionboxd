import {RECEIVE_LIST} from '../actions/search_actions';

const SearchReducer = (state= [], action) =>{
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_LIST:
      debugger
      newState = action.list.data.map(ele => ele);
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;