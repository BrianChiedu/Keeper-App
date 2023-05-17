import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
//import Fab from "@material-ui/core/Fab";
import { Fab } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  //zoom of the text area
  const [clicked, setClicked] = useState(false);

  function textAreaClick() {
    setClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {clicked ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={textAreaClick}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked ? 3 : 1}
        />
        <Zoom in={clicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
