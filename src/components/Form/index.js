import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '', 
      body: ''
    }
    this.submitIdea = this.submitIdea.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    const value = event.target.value
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  submitIdea(event) {
    event.preventDefault()
    const newIdea = Object.assign({ id: Date.now() }, this.state )
    this.props.addIdea(newIdea)
  };

  render() {
    return (
      <form onSubmit = { this.submitIdea }>
        <input 
          type='text'
          value= { this.state.input }
          placeHolder= 'title'
          onChange= { this.updateInput } />
        <input 
          type='text'
          value= { this.state.body }
          placeHolder='body'
          onChange={ this.updateInput } />
        <input type='submit' />
      </form>
    )
  }
};
export default Form;
