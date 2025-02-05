import React, { Fragment } from "react";

import { NewNote, NoteList, Error } from "../../components";

const NotesPage = ({
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

export default NotesPage;
