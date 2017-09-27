import React from 'react';

const ToDoForm = (props) => {
  const task = props.value;
  return (
    <form>
      <input type="text" value={task} onChange={props.handleInputChange}/>
      <button onClick={props.handleSubmit.bind(this, task)}>Add</button>
    </form>
  );
}

export default ToDoForm;
