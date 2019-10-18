import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList({ todos, removeTodo, toggleTodo, editTodo, checked }) {
  if (todos.length)
    return (
      <Paper>
        <List className={checked ? "container" : null}>
          {todos.map((todo, i) => (
            <>
              <div className={checked ? "card" : null}>
                <Todo
                  {...todo}
                  key={todo.id}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                  checked={checked}
                />
              </div>
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
