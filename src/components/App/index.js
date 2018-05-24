import React, { Component } from 'react';
import Form from '../Form';
import IdeaContainer from '../IdeaContainer';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      ideas: []
    }
    this.addIdea = this.addIdea.bind(this);
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
    return (
      <div>
        <Form addIdea={ this.addIdea } />
        <IdeaContainer />
      </div>
    );
  }
};

export default App;
