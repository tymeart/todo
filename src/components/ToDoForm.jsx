import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      id: 0
    };
  }

  handleInputChange = (e) => {
    this.setState({text: e.target.value});
  }

  render() {
    let todo = this.state.text;
    return (
      <form>
        <input type="text" value={this.state.text} onChange={this.handleInputChange}/>
        <button onClick={this.props.handleSubmit.bind(this, todo)}>Add</button>
      </form>
    );
  }
}

export default ToDoForm;
