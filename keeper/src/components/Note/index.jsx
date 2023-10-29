import React, { useState } from "react";
import H1 from "../H1";
import P from "../Paragraph";
import "./index.scss";
import {BulbOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined} from "@ant-design/icons";

// import cn from "classname";

const Note = (props) => {

  const [changeColor, setChangeColor] = useState("");

  function handleClick() {
    props.onDelete(props.id);
  }

  // function changeNoteColor(event) {
  //   setChangeColor = ()=> {
  //     event.color
  //   }
  // }

  return (
    <div className="note">
      <H1> {props.title} </H1>
      <P> {props.content} </P>
      <button className="noteCardButton" onClick={handleClick}>
      <DeleteOutlined />
      </button>
      <button className="noteCardButton" >
      <BulbOutlined  />
      </button>
      <button className="noteCardButton">
      <ExclamationCircleOutlined />
      </button>
      <button className="noteCardButton">
      <EditOutlined />
      </button>
    </div>
  );
};

export default Note;
