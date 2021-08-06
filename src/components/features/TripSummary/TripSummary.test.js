import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate without crashing', () => {
    const component = shallow(<TripSummary
      id='aby'
      image='imagi.jpg'
      name='habib'
      cost='$150'
      days={5}
      tags={['ala', 'lala', 'nochala']}
    />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should generate correct link with correct id', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);

    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct alt and image', () => {
    const expectedAlt = 'habab';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props: name, cost, days', () => {
    const expectedPropName = 'hababa';
    const expectedPropCost = '$100';
    const expectedPropDays = 7;
    const component = shallow(<TripSummary name={expectedPropName} days={expectedPropDays} cost={expectedPropCost} tags={[]} />);

    expect(component.find('.title').text()).toEqual(expectedPropName);
    expect(component.find('.details').childAt(0).text()).toEqual(`${expectedPropDays} days`);
    expect(component.find('.details').childAt(1).text()).toEqual(`from ${expectedPropCost}`);
  });

  it('should render correct array in tags', () => {
    const firstElArray = 'haba';
    const secondElArray = 'baba';
    const thirdElArray = 'gitara';
    const expectedArray = [firstElArray, secondElArray, thirdElArray];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find('.tag').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedArray[2]);
  });

  it('should not render tags if tags is not exist', () => {
    const component = shallow(<TripSummary />);

    expect(component.find('.tags').exists()).toEqual(false);
    console.log(component.debug());
  });
});
