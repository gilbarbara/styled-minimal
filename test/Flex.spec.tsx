import * as React from 'react';
import { render } from '@testing-library/react';

import { Flex } from '../src/Flex';
import { Box } from '../src';

describe('Flex', () => {
  const { container } = render(
    <Flex>
      <Box>Left</Box>
      <Box>Right</Box>
    </Flex>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
