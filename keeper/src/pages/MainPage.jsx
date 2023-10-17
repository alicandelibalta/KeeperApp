import React from "react";
// import Header from "@Header/Header";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import notes from "../notes";

const MainPage = () => {
  return (
    <div>
      <Header />
      {notes.map((noteItems) => (
        <Note
          key={noteItems.key}
          title={noteItems.title}
          content={noteItems.content}
        />
      ))}
      <Footer />
    </div>
  );
};

export default MainPage;
