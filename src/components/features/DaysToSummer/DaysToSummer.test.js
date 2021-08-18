import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.summerDays',
};

const mockProps = {
  days: 'days',
};

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
});


const trueDate = Date;

// console.log((new Date(customDate)).getTime());
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    console.log((new Date(customDate)).getTime());
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDay = (day, expectedDescription) => {
  it(`should show correct at ${day}`, () => {
    global.Date = mockDate(`${day}`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  // checkDescriptionAtDay('2021-09-25', '269 days to summer!');
  // checkDescriptionAtDay('2022-06-20', '1 day to summer!');
  checkDescriptionAtDay('2021-06-22', ''); // it's summer
  checkDescriptionAtDay('2021-09-20', ''); // it's summer
  checkDescriptionAtDay('2021-08-20', ''); // it's summer
  checkDescriptionAtDay('2021-06-01', '20 days to summer!'); // before summer
  checkDescriptionAtDay('2021-05-04', '48 days to summer!'); // before summer
  checkDescriptionAtDay('2021-01-14', '158 days to summer!'); // before summer
});
