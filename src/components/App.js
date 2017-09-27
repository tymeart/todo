import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  handleSubmit = (todo, event) => {
    event.preventDefault();
    const id = this.state.todos.length;
    const newToDos = [...this.state.todos, todo];
    this.setState({todos: newToDos});
  }

  handleDelete = (id) => {
    const newToDos = this.state.todos.filter(todo => todo.id !== id);
    console.log(newToDos)
  }

  render() {
    return (
      <div className="App">
        <ToDoForm handleSubmit={this.handleSubmit} />
        <ToDoList
          todos={this.state.todos}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
