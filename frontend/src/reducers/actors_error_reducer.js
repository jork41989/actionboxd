import {RECEIVE_ACTOR, RECEIVE_ACTOR_ERRORS} from '../actions/actor_actions';

const _nullErrors = [];

const ActorErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTOR_ERRORS:
      return action.errors;
    case RECEIVE_ACTOR:
      return _nullErrors;
    default:
      return state;
  }
};

export default ActorErrorsReducer;