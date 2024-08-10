// appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadedComponent: null,
  data: {},
  menu: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loadComponent(state, action) {
      state.loadedComponent = action.payload;
    },
    setState(state, action) {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    setMenu(state, action) {
      state.menu = action.payload;
    },
  },
});

// Export the actions
export const { loadComponent, setState, setMenu } = appSlice.actions;

// Export the reducer
export default appSlice.reducer;
