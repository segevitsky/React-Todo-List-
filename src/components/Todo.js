import React from "react";
import EditTodoForm from "./EditTodoForm";
import useToggle from "../hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import "./Todo.css";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo,checked }) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
         {!checked ? 
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => {
              toggleTodo(id);
            }}
          />
        : null}
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "" }}
          >
            {task}
          </ListItemText>
          <div className='icons'>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                removeTodo(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
          </div>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
