import React from "react";

function NoteItem({id, title, body, selectNote}) {
  return (
    <li onClick={() => selectNote(id)}>
      <h2>{title}</h2>
      <p>{body.slice(0,20)}</p>
    </li>
  );
}

export default NoteItem;
