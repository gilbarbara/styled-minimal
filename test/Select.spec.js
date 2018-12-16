import React from 'react';
import { mount } from 'enzyme';

import Select from '../src/Select';

describe('Select', () => {
  const wrapper = mount(
    <Select>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </Select>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
