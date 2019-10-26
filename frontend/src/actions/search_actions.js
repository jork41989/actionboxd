import * as SearchApiUtil from '../util/search_api_util';
export const RECEIVE_LIST = 'RECEIVE_LIST';


const receiveMovieList = list => ({
  type: RECEIVE_LIST,
  list
});


export const getMovieList = term => dispatch => (
  SearchApiUtil.getMovieList(term)
    .then(list => dispatch(receiveMovieList(list)))
)