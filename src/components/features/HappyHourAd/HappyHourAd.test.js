import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  descr: '.promoDescription',
};

const mockProps = {
  title: 'title',
  promoDescription: 'decription',
};

describe('Component HappyHourAd', () => {

  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should have h3 with class title and div with class countdown', () => {
    const component = shallow(<HappyHourAd />);
    // const expectedTitle = 'title';
    // const renderedTitle = component.find(select.title).text();
    // expect(renderedTitle).toEqual(expectedTitle);
    // to u góry jest prawidłowe? tak

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should have props title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const expectedTitle = mockProps.title;

    expect(component.find(select.title).text()).toEqual(expectedTitle);
  });
});

const trueDate = Date;
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
    return (new Date(customDate)).getTime();
  }
};

describe('Component HappyHourAd with mocked Date', () => {
  it('should show correct at 11:57:58', () => {
    global.Date = mockDate('2019-05-14T11:57:58.135Z');

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.descr).text();
    expect(renderedTime).toEqual('122');

    global.Date = trueDate;
  });
});

