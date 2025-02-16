import react, { useState } from "react";
import NoteContext from "./noteContext";

/**
 * This component wraps the app in NoteContext.Provider, making it so that
 * all components can access the NoteContext without having to pass it down
 * manually.
 *
 * @param {Object} props - The props passed to this component.
 * @param {Object} props.children - The children components of this component.
 */
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "67a28291847fc21a12b53aac",
      title: "My Title",
      description: "Please wake up too early. YO huuu",
      tag: "personal",
      date: "2025-02-04T21:11:45.309Z",
      __v: 0,
    },
    {
      _id: "67a283850b5db42e008f1835",
      title: "My Title",
      description: "Please wake up too early. YO huuu",
      tag: "personal",
      date: "2025-02-04T21:15:49.531Z",
      __v: 0,
    },
    {
      _id: "67ad0bddf8aeb18e2e1374f1",
      title: "My Title",
      description: "Please wake up too early. YO huuu",
      tag: "personal",
      date: "2025-02-12T21:00:13.598Z",
      __v: 0,
    },
    {
      _id: "67ad11c0a73edbee0ef66f2c",
      title: "My Title",
      description: "Please wake up too early. YO huuu",
      tag: "personal",
      date: "2025-02-12T21:25:20.081Z",
      __v: 0,
    },
    {
      _id: "67b06d3b8ed71300e70e10d8",
      title: "My Title",
      description: "Please wake up too early. YO huuu",
      tag: "personal",
      date: "2025-02-15T10:32:27.635Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
