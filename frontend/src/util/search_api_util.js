import axios from 'axios';



export const getMovieList = (term) => {
  debugger
  return axios.get(`/api/movies/search/${term}`)
}; 