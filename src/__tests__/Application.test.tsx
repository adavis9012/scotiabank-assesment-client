import React from 'react';
import { shallow } from 'enzyme';
import Application from '../Application';

test('renders the component', () => {
  const component = shallow(<Application />);

  expect(component).toMatchSnapshot();
});