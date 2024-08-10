// src/redux/actions.js
export const LOAD_COMPONENT = 'LOAD_COMPONENT';
export const SET_STATE = 'SET_STATE';
export const SET_MENU = 'SET_MENU';

export const loadComponent = (component) => ({
  type: LOAD_COMPONENT,
  payload: component,
});

export const setState = (data) => ({
  type: SET_STATE,
  payload: data,
});

export const setMenu = (menu) => ({
  type: SET_MENU,
  payload: menu,
});
