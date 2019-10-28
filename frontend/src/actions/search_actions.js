import * as SearchApiUtil from '../util/search_api_util';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_ACTORS_LIST = 'RECEIVE_ACTORS_LIST';
export const EMPTY_LIST = "EMPTY_LIST";


const receiveMovieList = list => ({
  type: RECEIVE_LIST,
  list
});

const receiveActorsList = list => ({
  type: RECEIVE_ACTORS_LIST,
  list
})

const emptyList = () => ({
  type: EMPTY_LIST
})

export const getMovieList = term => dispatch => {
  return (SearchApiUtil.getMovieList(term)
    .then(list => dispatch(receiveMovieList(list))))
}

export const getActorsList = term => dispatch => {
  return (SearchApiUtil.getActorsList(term)
  .then(list => dispatch(receiveActorsList(list))))
}


