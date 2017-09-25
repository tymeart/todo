import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = (todos) => {
  const listItems = todos.map((todo, index) => <ToDoListItem key={index} todo={todo} />);
  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default ToDoList;
