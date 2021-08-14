import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

// const select = {
//   title: '.summerDays',
// };

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
});
