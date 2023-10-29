import React, { useState } from "react";
import "./index.scss";

const TakeNote = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="takeNote">
        {isExpanded && (
          <input
            className="takeNote-titleInput"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        
        <textarea
          className="takeNote-titleInput"
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
           
        />
        {isExpanded && (<button onClick={submitNote}>Add</button>)}
      
      </form>
    </div>
  );
};

export default TakeNote;
