import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [noteData, setNoteData] = useState([])
  const [noteContent, setNoteContent] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const onSearchData = searchTerm => {
    setSearchValue(searchTerm)
  }

  const filteredNotes = noteData.filter(note => {
    return (
      note.title.toLowerCase().includes(searchValue.toLowerCase())
      ||
      note.body.toLowerCase().includes(searchValue.toLowerCase())
    )
  })

  useEffect(() => {
    fetch ("http://localhost:3000/notes")
    .then (Response => Response.json())
    .then (data => {
      setNoteData(data)
    })
  }, [])

  /**
   * When clicking on a note in the sidebar, it calls this function w/the note's id.
   * Then the main content window sets the title & body of the specified note.
   */
  function selectNote(id) {
    setNoteContent(
      Array.of(noteData[id])
    )
  }

  return (
    <>
      <Search noteData={noteData} onSearchData={onSearchData} />
      <div className="container">
        <Sidebar noteData={filteredNotes} selectNote={selectNote} setNoteData={setNoteData} />
        <Content noteContent={noteContent} noteData={noteData} setNoteData={setNoteData} />
      </div>
    </>
  );
}

export default NoteContainer;
