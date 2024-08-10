// src/components/ViewPanel.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMenu } from '../../redux/actions';
import appConfig from '../../config/appConfig.json';

const ViewPanel = () => {
  const currentApp = useSelector((state) => state.app.currentApp);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentApp) {
      const appConfigData = appConfig[currentApp];
      if (appConfigData) {
        dispatch(updateMenu(appConfigData.menu));
      }
    }
  }, [currentApp, dispatch]);

  const renderComponent = (appName) => {
    console.log(appName)
    if (!appName) return null;

    const Component = React.lazy(() => import(`../${appName}`));
    console.log(Component);
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
      </React.Suspense>
    );
  };

  return <div>{renderComponent(currentApp)}</div>;
};

export default ViewPanel;
