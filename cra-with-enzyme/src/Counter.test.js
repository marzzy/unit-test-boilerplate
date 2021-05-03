import {shallow} from 'enzyme';
import Counter from './Counter';

describe('UNIT: Counter element', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Counter />)
  })

  it('render h1',() => {

    //assert
    expect(component.find('h1').text()).toBe('0');
  });

  it('render button', () => {

    //assert
    expect(component.find('button').length).toBe(1);
  });

  it('should be increase counter value by click on button', () => {
    //act
    component.find('button').simulate('click');

    // assert
    expect(component.find('h1').text()).toBe('1')
  })

})