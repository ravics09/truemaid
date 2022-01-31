import {combineReducers} from 'redux';
import auth from './auth';
import maid from './maid';
import message from './message';

export default combineReducers({auth, maid, message});
