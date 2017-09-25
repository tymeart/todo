import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.text} onChange={this.handleInputChange}/>
        <button onSubmit={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default ToDoForm;
