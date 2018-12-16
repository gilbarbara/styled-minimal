import React from 'react';
import { mount } from 'enzyme';

import Button from '../src/Button';
import ButtonGroup from '../src/ButtonGroup';

describe('ButtonGroup', () => {
  const wrapper = mount(
    <ButtonGroup
      size="sm"
      variant="indigo"
    >
      <Button outline>
        First
      </Button>
      <Button>
        Second
      </Button>
      <Button outline>
        Third
      </Button>
      <Button outline>
        Forth
      </Button>
    </ButtonGroup>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
