import React from 'react';
import { mount } from 'enzyme';

import Badge from '../src/Badge';

describe('Badge', () => {
  const wrapper = mount(
    <Badge>4</Badge>
  );

  it('should ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
