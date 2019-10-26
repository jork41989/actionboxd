import * as ActorApiUtil from '../util/actors_api_util';

export const RECEIVE_ACTOR = "RECEIVE_ACTOR";

const receiveActor = actor => ({
    type: RECEIVE_ACTOR,
    actor
})

export const getActor = id => dispatch => (
    ActorApiUtil.getActor(id)
        .then((actor) => dispatch(receiveActor(actor)))
)