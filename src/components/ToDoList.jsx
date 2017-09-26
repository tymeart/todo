import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = (props) => {
  console.log(props.todos)
  const listItems = props.todos.map((todo, index) => <ToDoListItem key={index} todo={todo} />);
  return (
    <ul className="list">
      {listItems}
    </ul>
  );
};

export default ToDoList;
