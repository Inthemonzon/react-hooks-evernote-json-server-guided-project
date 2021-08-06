import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({noteContent, setNoteData, noteData}) {
  const getContent = () => {
    let content = noteContent.map(
      note => <NoteViewer key={note.title} id={note.id} noteContent={note} noteData={noteData} setNoteData={setNoteData} />
    );

    return content.length > 0 ? content : <Instructions />
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
