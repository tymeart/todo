import React, { Component } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  handleSubmit = () => {
    // add todo to the array
    // this.setState({})
  }

  render() {
    return (
      <div className="App">
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
