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
    <div>
      <h3>Menu</h3>
      {menu && menu.length > 0 ? (
        <ul>
          {menu.map((item, index) => (
            <li key={item.id || index} onClick={() => handleMenuClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      ) : (
        <div>No menu items available.</div>
      )}
    </div>
  );
};

export default Menu;
