import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App unit tests', () => {

  let renderedApp;
  beforeEach(() => renderedApp = shallow(<App />));

  describe('App default state', () => {
    test('App has a default state of ideas', () => {
      const expectedState = [];
      const actualState = renderedApp.state('ideas');

      expect(actualState).toEqual(expectedState);
    });
  });
  describe('App class methods', () => {
    test('when Apps addIdea function is invoked it should add a single idea to the state', () => {
      const expectedState = [ { id:1, title: 'some title', body: 'some body' }];

      renderedApp.instance().addIdea({ id: 1, title: 'some title', body: 'some body' });
      const actualState = renderedApp.state('ideas');

      expect(actualState).toEqual(expectedState);
    });

    test('when Apps removeIdea function is invoked it should remove desired idea', () => {
      const previousState = [ 
                              { id:1, title: 'some title', body: 'some body' }, 
                              { id:2, title: 'some title 2', body:'some body 2' }
                            ];

      renderedApp.setState({ ideas: previousState });
      renderedApp.instance().removeIdea(1);
        
      const expectedState = [ { id:2, title: 'some title 2', body:'some body 2' } ]
      const actualState = renderedApp.state('ideas');

      expect(actualState).toEqual(expectedState);
   });
  });
});
