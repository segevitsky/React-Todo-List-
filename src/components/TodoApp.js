import React, { useState,useEffect } from "react";
import useTodoState from "../hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

const style = {
  padding: 0,
  margin: 0,
  height: "100vh",
  backgroundColor: "#fafafa"
};

function TodoApp() {
  const initTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initTodos
  );
  const [checked, setChecked] = useState({
    checkedA: false,
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //this [todos] array is not necasery here but its best practice so it wouldnt rerender for each piece of state


  const handleChange = name => event => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  return (
    <Paper style={style} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">My Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1.5rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <Switch
            edge='end'
            checked={checked.checkedA}
            onChange={(handleChange("checkedA"))}
            value="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            checked={checked.checkedA}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
