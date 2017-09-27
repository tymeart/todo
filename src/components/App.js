import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todos: []
    };
  }

  handleInputChange = (e) => {
    this.setState({inputText: e.target.value});
  }

  handleSubmit = (task, event) => {
    event.preventDefault();
    const id = this.state.todos.length;
    const newToDos = [...this.state.todos, {task, id}];
    this.setState({inputText: '', todos: newToDos});
  }

  handleDelete = (id) => {
    const newToDos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: newToDos});
  }

  render() {
    return (
      <div className="App">
        <ToDoForm
          handleInputChange={this.handleInputChange}
          value={this.state.inputText}
          handleSubmit={this.handleSubmit}
        />
        <ToDoList
          todos={this.state.todos}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
