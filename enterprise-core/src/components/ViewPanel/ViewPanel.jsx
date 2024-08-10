// src/components/ViewPanel/index.js
import React from 'react';
import { useSelector } from 'react-redux';

const componentMap = {
  v1: () => <div>Registration Form V1</div>,
  v2: () => <div>Registration Form V2</div>,
};

const ViewPanel = () => {
  const loadedComponent = useSelector((state) => state.loadedComponent);

  const ComponentToRender = loadedComponent ? componentMap[loadedComponent.version] : null;

  return (
    <div>
      <h3>View Panel</h3>
      {ComponentToRender ? <ComponentToRender /> : <div>Select a component from the menu.</div>}
    </div>
  );
};

export default ViewPanel;
