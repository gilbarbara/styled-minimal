import React from 'react';
import { mount } from 'enzyme';

import Textarea from '../src/Textarea';

describe('Textarea', () => {
  const wrapper = mount(
    <Textarea name="test" defaultValue="Far far away" />
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
