import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {

  it('should generate without crashing', () => {
    const component = shallow(<OrderOption
      type='type'
      name='name'
    />);

    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);

    expect(component).toEqual({});
  });

  it('should have title from props name', () => {
    const expectedName = 'name';
    const expectedType = 'text';
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    // console.log(component.debug());
    expect(component.find('.title').text()).toEqual(expectedName);
  });
});
