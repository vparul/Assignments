// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import appReducer from './reducers';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer);

export default store;
