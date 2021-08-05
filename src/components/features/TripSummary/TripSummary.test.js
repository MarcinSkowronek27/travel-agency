import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate without crashing', () => {
    const component = shallow(<TripSummary
      id='aby'
      image='imagi.jpg'
      name='habib' />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should generate correct link with correct id', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} />);

    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct alt and image', () => {
    const expectedAlt = 'habab';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
});
