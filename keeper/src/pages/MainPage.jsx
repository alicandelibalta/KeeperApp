import React, { useState } from "react";
// import Header from "@Header/Header";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import TakeNote from "../components/TakeNote";

const MainPage = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes (prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <TakeNote onAdd={addNote}/>
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete = {deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default MainPage;
