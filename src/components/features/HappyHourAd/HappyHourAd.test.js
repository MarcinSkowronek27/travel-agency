import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

describe('Component HappyHourAd', () => {

  const select = {
    title: '.title',
    promoDescription: '.promoDescription',
  };

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
    // to u góry jest prawidłowe?
    // expect(component.hasClass('promoDescription')).toBe(true);
    // czy classNames można szukać za pomocą tego operatora?

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
});

