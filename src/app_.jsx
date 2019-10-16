import React, { useState } from "react";
import "./App.css";
import Home from './components/Home'


//a function that crosses out a completed task
function Todo({ todo, index, completeTodo, removeTodo }) {
  return <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo">
      {todo.text} 
      <div> 
      <button onClick={() => completeTodo(index)}> Complete </button> 
      <button onClick={() => removeTodo(index)}> X </button> 
      </div>
      </div>
}


//a function to add a todo list item,handle the submission and return the output
// to our list at the last item
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

// this is the major function that uses the states and other functions as props
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for launch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
           key={index}
           index={index}
           todo={todo}
           completeTodo={completeTodo}
           removeTodo={removeTodo}
           />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

    </div>
  );
}

export default App;
