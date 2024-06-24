import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div>
      <aside className="menu has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/user"}>User</NavLink>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button className="button is-white">Logout</button>
          </li>
        </ul>
      </aside>
    </div>
  );
};
