import React from 'react';
import { mount } from 'enzyme';

import Input from '../src/Input';

describe('Input', () => {
  const wrapper = mount(<Input name="test" defaultValue="1" />);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
