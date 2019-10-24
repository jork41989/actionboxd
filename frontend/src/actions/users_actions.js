import { getUser, watchMovie, unWatchMovie } from '../util/user_api_util';


export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const WATCH_MOVIE = 'WATCH_MOVIE'
export const UNWATCH_MOVIE = 'UNWATCH_MOVIE'




export const receiveAUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
})

export const watchANewMovie = user => ({
  type: WATCH_MOVIE,
  user
})

export const unwatchAOldMovie = user => ({
  type: UNWATCH_MOVIE,
  user
})



export const requestSingleUser = userId => (dispatch) => (
  getUser(userId).then(user => dispatch(receiveAUser(user)))
)



export const watchAMovie = (userId, payload) => (dispatch) => (
  watchMovie(userId, payload).then(user => dispatch(watchANewMovie(user)))
)

export const unwatchAMovie = (userId, payload) => (dispatch) => (
  unWatchMovie(userId, payload).then(user => dispatch(unwatchAOldMovie(user)))
)