// src/App.tsx
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import Menu from "./components/Menu";
import ViewPanel from "./components/ViewPanel";
import { setCurrentApp, updateMenu } from "./redux/actions";
import menuConfig from "./config/menuConfig.json";
import appConfig from "./config/appConfig.json";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const menu = menuConfig;
    dispatch(updateMenu(menu));
    dispatch(setCurrentApp(appConfig.initialApp));
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Menu />
      <ViewPanel />
    </Provider>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
