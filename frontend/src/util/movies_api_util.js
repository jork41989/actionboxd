import axios from 'axios';

export const getMovies = () => {
  return axios.get('/api/movies')  
};

export const getUserMovies = (id) => {
  return axios.get(`/api/movies/user/${id}`)
};

export const getMovie = (id) => {
  return axios.get(`/api/movies/${id}`)
}

