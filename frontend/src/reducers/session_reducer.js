import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

import {merge} from 'lodash';

import { WATCH_MOVIE, UNWATCH_MOVIE } from "../actions/users_actions"

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            }
        case WATCH_MOVIE:
            return  merge({}, state, {user: action.user.data} )
        case UNWATCH_MOVIE:
                let updatedUser = Object.assign({}, state.user)
                updatedUser.watched_movies = action.user.data.watched_movies
                let newU =  Object.assign({}, state, { user: updatedUser })
                return newU
        default:
            return state;
    }
}


