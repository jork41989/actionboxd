import  {getMovieList} from '../util/movies_api_util';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results
})



export const getMovieList = (term) => dispatch => (
  getMovieList(term)
    .then(results => dispatch(receiveResults(results)))
)