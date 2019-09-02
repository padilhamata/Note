import React from "react";
import className from "classnames";

import "./note.scss";
class Note extends React.Component {
  state = {
    isEditing: false
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleCancel = () => {
    this.setState({ isEditing: false });
  };

  handleSave = () => {
    this.props.onEdit(this.props.note.id, this.input.value);
    this.setState({ isEditing: false });
  };

  render() {
    const { note, onEdit, onDelete, index, onMove, total } = this.props;
    const { isEditing } = this.state;
    return (
      <div className="note">
        {isEditing ? (
          <input
            type="text"
            className="note_input"
            defaultValue={note.text}
            ref={c => {
              this.input = c;
            }}
          />
        ) : (
          <span className="note_text">{note.text}</span>
        )}
        {isEditing && (
          <React.Fragment>
            <button
              className="note_button note_button--red"
              onClick={this.handleCancel}
            >
              <i className="material-icons">cancel</i>
            </button>
            <button
              className="note_button note_button--green"
              onClick={this.handleSave}
            >
              <i className="material-icons">done_outline</i>
            </button>
          </React.Fragment>
        )}
        <button
          disabled={isEditing}
          className="note_button"
          onClick={this.handleEdit}
        >
          <i className="material-icons">edit</i>
        </button>
        <button
          disabled={isEditing}
          className="note_button"
          onClick={() => {
            onDelete(note.id);
          }}
        >
          <i className="material-icons">delete</i>
        </button>

        <button
          className={className("note_button", {
            "note_button--hidden": index === 0
          })}
          onClick={() => {
            onMove("up", index);
          }}
        >
          <i className="material-icons">arrow_upward</i>
        </button>

        <button
          className={className("note_button", {
            "note_button--hidden": index === total - 1
          })}
          onClick={() => {
            onMove("down", index);
          }}
        >
          <i className="material-icons">arrow_downward</i>
        </button>
      </div>
    );
  }
}

export default Note;
