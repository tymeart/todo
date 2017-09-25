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

  handleSubmit = (todo) => {
    // add todo to the array
    // this.setState({})
  }

  render() {
    return (
      <div className="App">
        <ToDoForm handleSubmit={this.handleSubmit} />
        <ToDoList />
      </div>
    );
  }
}

export default App;
