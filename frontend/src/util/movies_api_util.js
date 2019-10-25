import axios from 'axios';

export const getMovies = () => {
  return axios.get('/api/movies')  
};

export const getUserMovies = (id) => {
  return axios.get(`/api/users/${id}`)
};

export const getMovie = (id) => {
  return axios.get(`/api/movies/${id}`)
};

// export const getMovieList = (term) => {
//   return axios.get(`/api/movies/search/${term}`)
// }; 