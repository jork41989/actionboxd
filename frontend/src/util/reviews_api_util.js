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
  debugger;
  return axios.post(`/api/reviews/movies/${movieId}/${userId}`, data)
};

// export const deleteReview = (id) => {
//   return axios.delete(`api/reviews/${id}`) 
// }

export const updateReview = (data) => {
  return axios.patch(`api/reviews/${data.id}`, data)
}
