import axios from 'axios';



export const getMovieList = (term) => {
  
  return axios.get(`/api/movies/search/${term}`)
}; 