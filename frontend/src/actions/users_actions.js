import { getUser, updateUser } from '../util/user_api_util';


export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';




export const receiveAUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
})

export const requestSingleUser = userId => (dispatch) => (
  getUser(userId).then(user => dispatch(receiveAUser(user)))
)



export const updateAuser = (userId, payload) => (dispatch) => (
  updateUser(userId, payload).then(user => dispatch(receiveAUser(user)))
)