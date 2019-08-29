import React from "react";

import "./app-bar.scss";

const AppBar = ({ isLoading, saveHasError, onSaveRetry, onOpenMenu }) => (
  <div className="app-bar">
    <div className="app-bar_container">
      <button className="app-bar_action" onClick={onOpenMenu}>
        <i className="material-icons">menu</i>
      </button>
      <span className="app-bar_brand">Note.js</span>
      {isLoading && (
        <button className="app-bar_action app-bar_action--rotation">
          <i className="material-icons">refresh</i>
        </button>
      )}
      {saveHasError && (
        <button
          className="app-bar_action app-bar_action--danger"
          onClick={onSaveRetry}
        >
          <i className="material-icons">cloud_off</i>
        </button>
      )}
    </div>
  </div>
);

export default AppBar;
