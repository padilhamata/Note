import React from "react";

const AppBar = ({ isLoading }) => (
  <div className="app-bar">
    <div className="app-bar_container">
      <span className="app-bar_brand">Note.js</span>
      {isLoading && (
        <button className="app-bar_action app-bar_action--rotation">
          <i className="material-icons">refresh</i>
        </button>
      )}
    </div>
  </div>
);

export default AppBar;
