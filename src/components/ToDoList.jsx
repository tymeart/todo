import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = (props) => {
  const listItems = props.todos.map(todo => {
    return (
      <ToDoListItem
        key={todo.id}
        todo={todo}
        handleDelete={props.handleDelete.bind(this, todo.id)}
      />
    )}
  );
  return (
    <ul className="list">
      {listItems}
    </ul>
  );
};

export default ToDoList;
