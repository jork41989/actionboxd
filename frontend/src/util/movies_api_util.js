import axios from 'axios';

export const getMovies = () => {
  return axios.get('/api/movies')  
};

export const getUserMovies = (id) => {
  return axios.get(`/api/users/${id}`)
};

export const getMovie = (id) => {
  return axios.get(`/api/movies/${id}`)
}

export const newMovie = (data) => {
  return axios.post(`/api/movies/newMovie`, data)
}