import React, { Fragment } from "react";

import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import Error from "../components/Error/Error";

const Notes = ({
  reloadHasError,
  onRetry,
  onAddNote,
  notes,
  onDelete,
  onMove,
  onEdit
}) => {
  if (reloadHasError) {
    return <Error onRetry={onRetry} />;
  }

  return (
    <Fragment>
      <NewNote onAddNote={onAddNote} />
      <NoteList
        notes={notes}
        onDelete={onDelete}
        onMove={onMove}
        onEdit={onEdit}
      />
    </Fragment>
  );
};

export default Notes;
