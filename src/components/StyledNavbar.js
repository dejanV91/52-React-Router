import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to={"/"}
        style={({ isActive }) => {
          return { color: isActive ? "blue" : "black" };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        style={({ isActive }) => {
          return { color: isActive ? "blue" : "black" };
        }}
      >
        About
      </NavLink>
      <NavLink
        to={"/products"}
        style={({ isActive }) => {
          return { color: isActive ? "blue" : "black" };
        }}
      >
        Products
      </NavLink>
    </div>
  );
};

export default Navbar;
