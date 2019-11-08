import * as React from 'react';
import { render } from '@testing-library/react';

import { Button, Badge } from '../src';
import { Group } from '../src/Group';

describe('Group', () => {
  const { container } = render(
    <Group>
      <Button>Hey</Button>
      <Badge>Ho</Badge>
    </Group>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
