import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ noteData, selectNote }) {
  return (
    <ul>
      {
        noteData.map(
          (note, index) => <NoteItem key={index} id={index} title={note.title} body={note.body} selectNote={selectNote} />
        )
      }
    </ul>
  );
}

export default NoteList;
