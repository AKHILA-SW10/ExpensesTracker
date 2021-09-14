import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    counter:counterReducer, //can name either counter or ur wish
    islogged:loggedReducer
});

export default allReducers;