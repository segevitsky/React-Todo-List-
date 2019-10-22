import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
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
    </form>
  );
}

export default EditTodoForm;
