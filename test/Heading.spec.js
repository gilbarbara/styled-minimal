import React from 'react';
import { mount } from 'enzyme';

import Heading from '../src/Heading';

describe('Heading', () => {
  const wrapper = mount(
    <Heading>Far far away</Heading>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
