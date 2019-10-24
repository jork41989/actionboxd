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

export const writeReview = (data, userId, movieId) => {
  return axios.post(`/api/reviews/movies/${movieId}/${userId}`, data)
};

// export const deleteReview = (id) => {
//   return axios.delete(`api/reviews/${id}`) 
// }

// export const updateReview = (id) => {
//   return axios.patch(`api/reviews/${id}`, data)
// }
