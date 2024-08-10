// src/redux/reducer.js
import { LOAD_COMPONENT, SET_STATE, SET_MENU } from './actions';

const initialState = {
  loadedComponent: null,
  data: {},
  menu: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPONENT:
      return {
        ...state,
        loadedComponent: action.payload,
      };
    case SET_STATE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    case SET_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
