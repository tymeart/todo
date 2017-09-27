import React from 'react';

const ToDoListItem = (props) => {
  return (
    <li>
      {props.todo.task}
      <button onClick={props.handleDelete}>X</button>
    </li>
  );
};

export default ToDoListItem;
