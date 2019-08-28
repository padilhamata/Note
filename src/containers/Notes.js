import React from "react";

import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import Error from "../components/Error";

const Notes = ({ reloadHasError }) => {
  return <h1>Notes</h1>;
  /*
    if (reloadHasError) {
    return <Error onRetry={this.handleReload} />;
  }
  return (
    <Fragment>
      <NewNote onAddNote={this.handleAddNote} />
      <NoteList
        notes={notes}
        onMove={this.handleMove}
        onDelete={this.handleDelete}
        onEdit={this.handleEdit}
      />
    </Fragment>
  );
  */
};

export default Notes;
