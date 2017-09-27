import React from 'react';

const ToDoListItem = (props) => {
  return (
    <li>
      {props.todo.text}
      <button>X</button>
    </li>
  );
};

export default ToDoListItem;
