import React from 'react';
import { mount } from 'enzyme';

import Code from '../src/Code';

describe('Code', () => {
  const wrapper = mount(
    <Code>
      {'<div>Hello</div>'}
    </Code>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
