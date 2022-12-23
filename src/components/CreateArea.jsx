import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const emptyNote = { title: "", content: "" }
  const [note, setNote] = useState(emptyNote)

  function update(e) {
    const { name, value } = e.target
    setNote(prev => ({ ...prev, [name]: value }))
  }

  function onAdd(e) {
    e.preventDefault();
    props.addItem(note)
    setNote(emptyNote)
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={update}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          style={{ resize: "none" }}
          value={note.content}
          onChange={update}
        />

        <button className="add"
          onClick={onAdd}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
