import React from "react";
import H1 from "../H1";
import P from "../Paragraph";
import "./index.scss";

// import cn from "classname";

const Note = ({key, title, content}) => {
  return (
    <div className="note">
      <H1> {title} </H1>
      <P> {content} </P>
    </div>
  );
};

export default Note;
