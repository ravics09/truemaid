import {combineReducers} from 'redux';
import auth from './auth';
import maid from './maid';
import message from './message';
// const appReducer = combineReducers({auth, maid, message});

export default combineReducers({auth, maid, message});
