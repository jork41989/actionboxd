
import { RECEIVE_SINGLE_USER } from "../actions/users_actions"




export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_SINGLE_USER:
      return Object.assign({}, state, { [action.user.data.id]: action.user.data })

    default:
      return state;
  }
}