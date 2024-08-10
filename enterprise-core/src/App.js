// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import componentConfig from './config/componentConfig.json'; // Configuration file
import Menu from './components/Menu'; // Menu component
import ViewPanel from './components/ViewPanel'; // View panel component
import FlowDiagram from './components/FlowDiagram'; // Flow diagram component
import { setMenu } from './redux/actions'; // Redux actions

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the menu configuration in Redux store
    dispatch(setMenu(componentConfig.menu));
  }, [dispatch]);

  return (
    <div>
      <h1>Dynamic Component Loader</h1>
      <Menu />          {/* Menu component */}
      <ViewPanel />     {/* View panel component */}
      <FlowDiagram />   {/* Flow diagram component */}
    </div>
  );
};

export default App;
