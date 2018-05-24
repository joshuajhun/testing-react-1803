import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

describe('Form Tests' , () => {

  let mockAddIdea;
  let renderedForm;

  beforeEach(() => {
    mockAddIdea = jest.fn();
    renderedForm = shallow(<Form addIdea={ mockAddIdea } />);
  })

  describe('Form default state tests', () => {
    test('Form should have a default state of title the val is an empty string' , () => {
      const expectedTitle = '';

      const actualTitle = renderedForm.state('title');

      expect(actualTitle).toBe(expectedTitle);
    });
    test('Form should have a default state of body the val is an empty string', () => {
      const expectedBody = '';

      const actualBody = renderedForm.state('body');

      expect(actualBody).toBe(expectedBody);
    });
    test('when Forms updateInput function is invoked that title is updated', () => {
      const expectedTitle= 'some title';

      const mockEvent = { target: { value: 'some title', name: 'title' } };
      renderedForm.instance().updateInput(mockEvent);
      const actualTitle = renderedForm.state('title');

      expect(actualTitle).toBe(expectedTitle);
    });
    test('when Forms updateInput function is invoked that the body is updated', () => {
      const expectedBody= 'some body';
      const expectedTitle = ''

      const mockEvent = { target: { value: 'some body', name: 'body' } };
      renderedForm.instance().updateInput(mockEvent);
      const actualBody = renderedForm.state('body');
      const actualTitle = renderedForm.state('title');

      expect(actualBody).toBe(expectedBody);
      expect(actualTitle).toBe(expectedTitle);
    });

    test('when Forms submitIdea function is invoked with the correct arguments', () => {
      const expectedArguments = expect.objectContaining({
                                                           title: 'some title', 
                                                           body: 'some body', 
                                                           id: expect.any(Number)
                                                        });
      const mockEvent = { preventDefault: jest.fn() }
      renderedForm.setState({ title: 'some title', body: 'some body'})

      renderedForm.instance().submitIdea(mockEvent);

      expect(mockAddIdea).toHaveBeenCalledWith(expectedArguments);
    });
  describe('Form UI tests', () => {
    test('Form should render correct form inputs', () =>  {
      const expectedFormLength = 1;
      const actualFormLength = renderedForm.find('form').length;
      
      const expectedInputLength = 2;
      const actualInputLength = renderedForm.find('[type="text"]').length;
     
      const expectedSubmitButtonLength = 1;
      const actualSubmitButtonLength = renderedForm.find('[type="submit"]').length;

      expect(actualFormLength).toBe(expectedFormLength);
      expect(actualInputLength).toBe(expectedInputLength);
      expect(actualSubmitButtonLength).toBe(expectedSubmitButtonLength);
      })
    })
  });
});
