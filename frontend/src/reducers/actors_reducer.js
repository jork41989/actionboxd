import { RECEIVE_ACTOR } from '../actions/actor_actions';

const actorsReducer = (state = {}, action) => {
    Object.freeze(state);
    let actor;
    switch(action.type){
        case RECEIVE_ACTOR:
            actor = action.actor;
            return Object.assign({}, state, {[actor._id]: actor});
        default: 
            return state;
    }
}

export default actorsReducer;