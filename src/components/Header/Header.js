import React from "react";
import className from "classnames";
import "./header.scss";

const Header = ({ children, centered }) => (
  <h1 className={className("header", { "header--centered": centered })}>
    {children}
  </h1>
);

export default Header;
