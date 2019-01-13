import React from 'react';
import { mount } from 'enzyme';

import Button from '../src/Button';
import ButtonGroup from '../src/ButtonGroup';

describe('ButtonGroup', () => {
  const wrapper = mount(
    <ButtonGroup size="sm" variant="indigo">
      <Button bordered>First</Button>
      <Button>Second</Button>
      <Button bordered>Third</Button>
      <Button bordered>Forth</Button>
    </ButtonGroup>,
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
