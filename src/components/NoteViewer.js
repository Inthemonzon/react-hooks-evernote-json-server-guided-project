import React, { useState } from "react";

function NoteViewer({id, noteContent, noteData, setNoteData}) {
  const [noteEditData, setNoteEditData] = useState({
    title: noteContent.title,
    body: noteContent.body,
  });

  const [isNoteContentsHidden, toggleNoteContentsHidden] = useState(false);
  const [isNoteEditorHidden, toggleNoteEditorHidden] = useState(true);

  function toggleNoteContentsVisibility() {
    toggleNoteContentsHidden(!isNoteContentsHidden);
  }

  function toggleNoteEditorVisibility() {
    toggleNoteEditorHidden(!isNoteEditorHidden);
  }

  function handleSave() {
    fetch ("http://localhost:3000/notes/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
      body: JSON.stringify(noteEditData),
    }).then(() => {
      console.log("saved");
    })
  }

  return (
    <>
      <div className={isNoteContentsHidden ? "hidden": null}>
        <h2>{noteContent.title}</h2>
        <p>{noteContent.body}</p>
        <button onClick={() => {
          toggleNoteContentsVisibility()
          toggleNoteEditorVisibility()
        }}>Edit</button>
      </div>

      <div className={isNoteEditorHidden ? "hidden": null}>
        <input type="text" defaultValue={noteContent.title} onChange={
          (e) => {
            setNoteEditData({title: e.target.value, body: noteEditData.body})
          }
        } className="note-title-edit-box" />
        <textarea className="note-body-edit-box" defaultValue={noteContent.body} onChange={
          (e) => {
            setNoteEditData({body: e.target.value, title: noteEditData.title})
          }
        }></textarea>

        <button onClick={() => {
          noteData[id - 1]["title"] = noteEditData.title
          noteData[id - 1]["body"] = noteEditData.body
          setNoteData(noteData)

          handleSave()

          toggleNoteContentsVisibility()
          toggleNoteEditorVisibility()
        }}>Save</button>
        <button onClick={() => {
          toggleNoteContentsVisibility()
          toggleNoteEditorVisibility()
        }}>Cancel</button>
      </div>
    </>
  );
}

export default NoteViewer;
