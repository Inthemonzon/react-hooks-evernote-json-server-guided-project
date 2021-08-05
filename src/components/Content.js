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
function Content({noteContent}) {
  const getContent = () => {
    // // if (false) {
    //   return <NoteEditor />;
    // // } else if (false) {
      return noteContent.map((note) => <NoteViewer key={note.title} title={note.title} body={note.body} />);
    // } else {
    //   return <Instructions />;
    // }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
