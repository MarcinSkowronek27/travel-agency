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

  describe('Component DaysToSummer with mocked Date', () => {
    const customDate = '2021-08-01';
    const trueDate = Date;

    console.log((new Date(customDate)).getTime());
    const mockDate = class extends Date {
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

    it('should show correct at 2021-08-01', () => {
      global.Date = mockDate;

      const component = shallow(<DaysToSummer {...mockProps} />);
      const renderedTime = component.find(select.title).text();
      expect(renderedTime).toEqual('324 days to summer!');

      global.Date = trueDate;
    });
  });
  // const trueDay = Date;

  // const mockDay = customDay => class extends Date {
  //   constructor(...args) {
  //     if (args.length) {
  //       super(...args);
  //     } else {
  //       super(customDay);
  //     }
  //     return this;
  //   }
  //   static now() {
  //     return (new Date(customDay)).getUTCDate();
  //   }
  // };

  // const checkDescriptionAtDay = (day, expectedDescription) => {
  //   it(`should show correct at ${day}`, () => {
  //     global.Date = mockDay(`2021-08-${day}`);

  //     const component = shallow(<DaysToSummer />);
  //     const renderedDay = component.find('days');
  //     expect(renderedDay).toEqual(expectedDescription);

  //     global.Date = trueDay;
  //   });
  // };

  // describe('Component DaysToSummer with mocked Day', () => {
  //   checkDescriptionAtDay('2021-08-12', '2021-08-12');
  // });
});
