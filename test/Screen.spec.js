import React from 'react';
import { mount } from 'enzyme';

import Screen from '../src/Screen';

describe('Screen', () => {
  const wrapper = mount(
    <Screen>Far far away</Screen>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
