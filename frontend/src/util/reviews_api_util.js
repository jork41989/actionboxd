import axios from 'axios';


export const getMostRecentReviews = () => {
  return axios.get('/api/reviews')
};

export const getReview = (id) => {
  return axios.get(`/api/reviews/${id}`)
};

// export const getMovieReviews = (id) => {
//   return axios.get(`/api/reviews/movies/${id}`)
// };

export const writeReview = (data, movieId, userId) => {
  return axios.post(`/api/reviews/movies/${movieId}/${userId}`, data)
};

// export const deleteReview = (id, data) => {
//   return axios.delete(`api/reviews/${id}`, data) 
// }

export const deleteReview = (movie_id, id, data) => {
  return axios.patch(`api/reviews/movies/${movie_id}/${id}`, data)
}

export const updateReview = (data) => {
  return axios.patch(`api/reviews/${data.id}`, data)
}
