import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useInputState from "../hooks/useInputState";
import Popup from "reactjs-popup";

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    // <Popup
    //   trigger={<button> Trigger</button>}
    //   position="right center"
    //   modal
    // >
      // {close => (
        <form
          onSubmit={e => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
          }}
          style={{ marginLeft: "1rem", width: "50%" }}
        >
          <TextField
            height="100%"
            margin="normal"
            value={value}
            onChange={handleChange}
            fullWidth
            autoFocus
            // multiline
          />
          {/* <Button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          > */}
            {/* Close this shit
          </Button> */}
        </form>
      // )}
    // </Popup>
  );
}

export default EditTodoForm;
