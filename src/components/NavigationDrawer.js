import React from "react";
import className from "classnames";
import { withRouter } from "react-router-dom";

const NaviagtionDrawer = ({ isOpen, onCloseMenu, history }) => (
  <div
    className={className("navigation-drawer", {
      "navigation-drawer--open": isOpen
    })}
  >
    <div className="navigation-drawer_head">
      <button className="navigation-drawer_head_button" onClick={onCloseMenu}>
        <i className="material-icons">close</i>
      </button>
    </div>
    <div className="navigation-drawer_menu">
      <button
        className="navigation-drawer_menu_item"
        onClick={() => {
          onCloseMenu();
          history.push("/");
        }}
      >
        <i className="material-icons">note</i>Notas
      </button>
      <button
        className="navigation-drawer_menu_item"
        onClick={() => {
          onCloseMenu();
          history.push("/about");
        }}
      >
        <i className="material-icons">info</i>Sobre
      </button>
    </div>
  </div>
);

export default withRouter(NaviagtionDrawer);
