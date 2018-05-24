import React from 'react';
import IdeaContainer from '../IdeaContainer';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('IdeaContainer UI tests', () => {
  test('IdeaContainer renders correct amount of Card components', () => {
    const stubbedIdeas = [ 
                          { id: 1, title: 'some title', body: 'somebody'},
                          { id: 2, title: 'some title2', body: 'somebody3'},
                         ]
    const expectedCardLength = 2;
    const renderedIdeaContainer = shallow(<IdeaContainer ideas={ stubbedIdeas } />);

    const actualCardLength = renderedIdeaContainer.find(Card).length;

    expect(actualCardLength).toBe(expectedCardLength);
  });
});

