import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {persistStore, persistReducer} from 'redux-persist';
import promiseMiddleware from 'redux-promise-middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// NOTE: redux-persist library provides ways to store redux state tree into some sorts of storage and rehydrate when app is reopened.
// persistReducer returns an enhanced reducer that wraps the rootReducer you pass in and will persist that reducers state according to the config you pass in.
// the reducers themselves are not persisted since they are just functions.
import rootReducer from './reducers/index';

// const appReducer = (state, action) => {
//   if (action.type === 'SIGNOUT') {
//     console.log("Signout action called");
//     state = {};
//   }

//   return rootReducer(state, action)
// }

const middleware = [thunk];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

// const store = storeWithMiddleware(persistedReducer);

const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export { store, persistor };