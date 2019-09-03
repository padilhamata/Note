import React from "react";
import SettingsContext from "./SettingsContext";

const withSettings = Component => props => (
  <SettingsContext.Consumer>
    {constext => <Component {...props} {...constext} />}
  </SettingsContext.Consumer>
);

export default withSettings;
