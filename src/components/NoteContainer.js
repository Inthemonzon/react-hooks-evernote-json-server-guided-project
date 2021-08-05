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
    return note.title.toLowerCase().includes(searchValue.toLowerCase())
  })

  useEffect(() => {
    fetch ("http://localhost:3000/notes")
    .then (Response => Response.json())
    .then (data => setNoteData(data))
  }, [])

  function selectNote(id) { 
    console.log(id)
    console.log(noteData)
    // TODO: the problem here is that the internal list of noteData does not have a registered ID...
    // This internal list must have an ID, and thus the list must be re-fetched from the backend. 
    // OR... sidebar must keep an internal state/list of the current ID... Must pass in the length.
    setNoteContent(
      noteData.filter(note => note.id - 1  == id)
    )
  }

  return (
    <>
      <Search noteData={noteData} onSearchData={onSearchData}/>
      <div className="container">
        <Sidebar noteData={filteredNotes} selectNote={selectNote} onNewNote={setNoteData} indexNumber={noteData.length} />
        <Content noteContent={noteContent}  />
      </div>
    </>
  );
}

export default NoteContainer;
