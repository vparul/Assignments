// src/redux/reducers.js
import { SET_CURRENT_APP, UPDATE_MENU } from './actions';

const initialState = {
  currentApp: null,
  menu: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_APP:
      return {
        ...state,
        currentApp: action.payload,
      };
    case UPDATE_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
