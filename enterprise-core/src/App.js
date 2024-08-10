import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import componentConfig from './config/componentConfig.json';
import Menu from './components/Menu';
import ViewPanel from './components/ViewPanel'; 
import FlowWithProvider from './components/FlowDiagram/FlowWithProvider';
import { setMenu } from './redux/appSlice';

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenu(componentConfig.menu));
  }, [dispatch]);

  return (
    <div>
      <h1>Dynamic Component Loader</h1>
      <Menu />        
      <ViewPanel />     
      <FlowWithProvider />
    </div>
  );
};

export default App;
