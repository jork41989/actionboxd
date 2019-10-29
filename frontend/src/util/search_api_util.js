import axios from 'axios';



export const getMovieList = (term) => {
  return axios.get(`/api/movies/search/${term}`)
}; 

export const getActorsList = (term) => {
  return axios.get(`/api/actors/search/${term}`)
};