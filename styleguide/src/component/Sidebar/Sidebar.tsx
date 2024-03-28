import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div >
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            Landing
          </NavLink>
        </li>
        <li>
          <NavLink to="/login-formular">
            Login Form
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
