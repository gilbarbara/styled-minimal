import * as React from 'react';
import { render } from '@testing-library/react';

import { ButtonGroup } from '../src/ButtonGroup';
import { Button } from '../src';

describe('ButtonGroup', () => {
  const { container } = render(
    <ButtonGroup>
      <Button invert>First</Button>
      <Button>Second</Button>
      <Button invert>Third</Button>
      <Button invert>Forth</Button>
    </ButtonGroup>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
