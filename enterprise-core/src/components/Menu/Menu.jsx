import React from 'react';
import { useSelector } from 'react-redux';

const Menu = () => {
  const menu = useSelector((state) => state.app.menu);

  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
