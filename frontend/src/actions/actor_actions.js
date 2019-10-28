import * as ActorApiUtil from '../util/actors_api_util';

export const RECEIVE_ACTOR = "RECEIVE_ACTOR";
export const RECEIVE_ACTOR_ERRORS = 'RECEIVE_ACTOR_ERRORS'

const receiveActor = actor => ({
    type: RECEIVE_ACTOR,
    actor
})

export const receiveErrors = errors => ({
    type: RECEIVE_ACTOR_ERRORS,
    errors
});

export const getActor = id => dispatch => (
    ActorApiUtil.getActor(id)
        .then(actor => dispatch(receiveActor(actor.data)))
)

export const newActorAdd = (data) => dispatch => (
    ActorApiUtil.newActor(data)
        .then(actor => dispatch(receiveActor(actor)),
            err => (
                dispatch(receiveErrors(err.response.data))
            )
        )
);