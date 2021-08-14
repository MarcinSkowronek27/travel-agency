import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.summerDays',
};

const mockProps = {
  title: '21 days to summer!',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(days => days);
});

describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should have h3 with class summerDays', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });

  it('should have props title', () => {
    const component = shallow(<DaysToSummer />);
    const expectedTitle = mockProps.title;

    expect(component.find(select.title).text()).toEqual(expectedTitle);
  });
});
