import React from 'react';
import Card from '../Card';

const IdeaContainer = ({ ideas }) => {
  const renderedIdeas = ideas.map((idea) => {
    return <Card key= { idea.id } />
  });
 return(
   <div>
      { renderedIdeas }
   </div>
 ) 
}

export default IdeaContainer;
