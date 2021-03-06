import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

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

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};
const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;
for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });
    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
      console.log(component.debug());
      // console.log(subcomponent.debug());
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'icons': {
        it('should render dives with Icon class', () => {
          const iconDiv = renderedSubcomponent.find('div').not('[value=""]');
          expect(iconDiv.length).toBe(3);
          console.log(subcomponent.debug());

          const emptyIcon = iconDiv.find('Icon').find('[name="times-circle"]').length;
          expect(emptyIcon).toBe(1);

          const icons = iconDiv.find('Icon').not('[name="times-circle"]');
          expect(icons.length).toBe(mockProps.values.length); //dlaczego tutaj mamy tylko dwie ikony, przecie?? s?? 3? Czy to tylko symulacja dw??ch? ODP. dlatego, ??e w linijce 130 mamy filtr dla nie name = time-circle
          expect(icons.at(0).prop('name')).toBe(mockProps.values[0].icon);
          expect(icons.at(1).prop('name')).toBe(mockProps.values[1].icon);
        });

        it('should run setOrderOption function on click on last div with Icon class', () => {
          renderedSubcomponent.find('div').find('.icon').last().simulate('click'); //dzia??a
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'checkboxes': {
        it('contains div and inputs with type="checkbox"', () => {
          const checkDiv = renderedSubcomponent.find('.checkboxes');
          expect(checkDiv.length).toBe(1);

          const inputs = checkDiv.find('input[type="checkbox"]');
          expect(inputs.length).toBe(mockProps.values.length);
          expect(inputs.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(inputs.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(`input[value='${testValue}']`).simulate('change', { currentTarget: { checked: true } });

          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
        });
        break;
      }
      case 'number': {
        it('contains div and inputs', () => {
          const numberDiv = renderedSubcomponent.find('.number');
          expect(numberDiv.length).toBe(1);
          const inputsNumber = numberDiv.find('input[type="number"]');
          expect(inputsNumber.length).toBe(1); // dlaczego tutaj raz por??wnujemy do warto??ci a raz do mockProps.values.length

          expect(inputsNumber.prop('value')).toBe(mockPropsForType.number.currentValue);
          expect(inputsNumber.prop('min')).toBe(mockProps.limits.min);
          expect(inputsNumber.prop('max')).toBe(mockProps.limits.max);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValueNumber } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }
      case 'text': {
        it('contains input', () => {
          const selectDiv = renderedSubcomponent.find('.component');
          expect(selectDiv.length).toBe(1);

          const inputText = selectDiv.find('input[type="text"]');
          expect(inputText.length).toBe(1);
          // alternatywna wersja poni??ej
          // const input = renderedSubcomponent.find('input');
          // expect(input.length).toBe(1);
          // expect(input.prop('type')).toEqual('text');
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'date': {
        it('contains DatePicker', ()=> {
          const datePicker = renderedSubcomponent.find(DatePicker);
          expect(datePicker.length).toBe(1);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1); //czy tutaj ta linia i poni??ej kodu jest potrzebna?
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
    }
  });
}
