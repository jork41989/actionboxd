import { RECEIVE_ACTOR } from '../actions/actor_actions';
import merge from 'lodash/merge'

const actorsReducer = (state, action) => {
    Object.freeze(state);
    let actor;
    switch(action.type){
        case RECEIVE_ACTOR:
            actor = action.actor;
            return merge({}, state, {[actor.id]: actor});
        default: 
            return state;
    }
}

export default actorsReducer;