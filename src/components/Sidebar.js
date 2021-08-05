import React, { useState } from "react";
import NoteList from "./NoteList";

function Sidebar({noteData, selectNote, onNewNote, indexNumber}) {
  const [newNote, setNewNote] = useState({
    title: "default", 
    body: "placeholder"
  })

  const [indexCounter, setIndexCounter] = useState(indexNumber)

  console.log(indexNumber)

  return (
    <div className="master-detail-element sidebar">
      <NoteList noteData={noteData} selectNote={selectNote} />
      <button onClick={handleSubmit}>New</button>
    </div>
  );

  function handleSubmit(event) {
    fetch ("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
      body: JSON.stringify(newNote),
    }).then(() => {
      // TODO set this somehow..........
      newNote.id = indexCounter
      noteData.push(newNote)
      console.log(newNote)
      console.log(noteData)
      onNewNote(noteData)
    })
  }
}

export default Sidebar;
