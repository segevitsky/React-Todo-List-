import {useState} from 'react';
const uuidv4 = require("uuid/v4");

export default initTodos => {
    const [todos, setTodos] = useState(initTodos);
    return {
        todos,
        addTodo:newTodoText => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
          },
          removeTodo: todoId => {
            //filter out removed todo
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            //setTodos
           setTodos(updatedTodos);
          },
          toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
              todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(updatedTodos);
          },
          editTodo:  (todoId,newTask) => {
            const updatedTodos = todos.map(todo =>
              todo.id === todoId ? { ...todo, task: newTask } : todo
            );
            setTodos(updatedTodos);
          },
    }
}
