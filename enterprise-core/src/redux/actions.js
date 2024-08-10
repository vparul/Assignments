// src/redux/actions.js
export const SET_CURRENT_APP = 'SET_CURRENT_APP';
export const UPDATE_MENU = 'UPDATE_MENU';

export const setCurrentApp = (app) => ({
  type: SET_CURRENT_APP,
  payload: app,
});

export const updateMenu = (menu) => ({
  type: UPDATE_MENU,
  payload: menu,
});
