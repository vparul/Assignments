import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadComponent, setState } from '../../redux/appSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector(({ app }) => app.menu);

  const handleMenuClick = (app) => {
    dispatch(loadComponent(app));
    dispatch(setState({ [app.name]: { version: app.version } }));
  };

  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu?.map((item, index) => (
          <li key={index} onClick={() => handleMenuClick(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
