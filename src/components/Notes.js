import React from "react";

const Notes = ({ reloadHasError }) => {
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
};

export default Notes;
