import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import "./TodoList.css";
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle,

  ...(isDragging && {
    background: "rgb(235,235,235)"
  })
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "#e4d1d1" : "white"
});

function TodoList({
  todos,
  quotes,
  removeTodo,
  toggleTodo,
  editTodo,
  checked,
  onDrag,
}) {
  console.log(todos)
  if (todos.length)
    return (
      <Paper>
        <DragDropContext onDragEnd={onDrag}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <RootRef rootRef={provided.innerRef}>
                <List style={getListStyle(snapshot.isDraggingOver)} className={checked ? "container" : null}>
                  {todos.map((todo, i) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={i}
                    >
                      {(provided, snapshot) => (
                        <>
                          <div className={checked ? "card" : null}>
                            <Todo
                              {...todo}
                              key={todo.id}
                              ContainerComponent="todo"
                              innerRef={provided.innerRef}
                              provided={provided}
                              removeTodo={removeTodo}
                              toggleTodo={toggleTodo}
                              editTodo={editTodo}
                              checked={checked}
                              onDrag={onDrag}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            />
                          </div>
                          {i < todos.length - 1 && <Divider />}
                        </>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              </RootRef>
            )}
          </Droppable>
        </DragDropContext>
      </Paper>
    );
  return null;
}

export default TodoList;
