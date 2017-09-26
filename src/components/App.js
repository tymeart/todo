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
    const newToDos = [...this.state.todos, todo];
    this.setState({todos: newToDos});
  }

  render() {
    return (
      <div className="App">
        <ToDoForm handleSubmit={this.handleSubmit} />
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
