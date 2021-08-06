import React, { useState } from "react";
import NoteList from "./NoteList";

function Sidebar({noteData, selectNote, setNoteData}) {
  const [newNote] = useState({
    title: "default", 
    body: "placeholder",
  })

  function handleSubmit(event) {
    fetch ("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
      body: JSON.stringify(newNote),
    })
    .then(response => response.json())
    .then(data => {
      let note = Object.assign({}, newNote)
      note["id"] = data["id"]

      noteData.push(note)
      setNoteData(noteData)
    })
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList noteData={noteData} selectNote={selectNote} />
      <button onClick={handleSubmit}>New</button>
    </div>
  );
}

export default Sidebar;
