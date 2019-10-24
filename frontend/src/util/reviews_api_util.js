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

<<<<<<< HEAD
export const writeReview = (data, movieId, userId) => {
  return axios.post(`/api/reviews/movies/${movieId}/${userId}`, data)
=======
export const writeReview = (data) => {
  router.post('/api/reviews/movies/:movie_id/:user_id', data)
>>>>>>> master
};

// export const deleteReview = (id) => {
//   return axios.delete(`api/reviews/${id}`) 
// }

<<<<<<< HEAD
// export const updateReview = (id) => {
//   return axios.patch(`api/reviews/${id}`, data)
// }
=======
export const updateReview = (data) => {
  return axios.patch(`api/reviews/${data.id}`, data)
}
>>>>>>> master
