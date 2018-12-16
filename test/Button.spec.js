import React from 'react';
import { mount } from 'enzyme';

import Button from '../src/Button';

describe('Button', () => {
  const wrapper = mount(
    <Button>CLICK ME</Button>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
