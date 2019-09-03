import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from "./About/AboutPage";
import NotesPage from "./Notes/NotesPage";
import PageNotFound from "./PageNotFound/PageNotFound";
import SettingsPage from "./Settings/SettingsPage"

export const menu = [
  { icon: "note", label: "Notas", path: "/" },
  { icon: "settings", label: "Configurações", path: "/settings" },
  { icon: "info", label: "Sobre", path: "/about" }
];

const Routes = ({
  notes,
  reloadHasError,
  onRetry,
  onAddNote,
  onMove,
  onDelete,
  onEdit
}) => (
  <Switch>
    <Route
      path="/"
      exact
      render={props => (
        <NotesPage
          notes={notes}
          reloadHasError={reloadHasError}
          onRetry={onRetry}
          onAddNote={onAddNote}
          onMove={onMove}
          onDelete={onDelete}
          onEdit={onEdit}
          {...props}
        />
      )}
    />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/about" component={AboutPage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
