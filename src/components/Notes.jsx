import React from "react";
import Note from "./Note"

function Notes() {
  return (
    <div className="notes">
      <Note title="Title1" content="Content1" />
      <Note title="Title2" content="Content2" />
      <Note title="Title3" content="Content3" />
    </div>
  );
}

export default Notes