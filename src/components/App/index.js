import React, { Component } from 'react';
import Card from '../Card.js';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      ideas: []
    }
  }

  addIdea(idea) {
    const ideas = [ ...this.state.ideas, idea ];
    this.setState({ ideas });
  }

  removeIdea(id) {
    const ideas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas });
  }

  render() {
    <Card addIdea={ this.addIdea } />
  }
};

export default App;
