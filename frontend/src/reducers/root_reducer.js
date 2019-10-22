import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import movies from './movies_reducer';

const RootReducer = combineReducers({
    movies,
    session,
    errors,
    ui
});

export default RootReducer;