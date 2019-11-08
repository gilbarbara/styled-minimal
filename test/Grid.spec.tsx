import * as React from 'react';
import { render } from '@testing-library/react';

import { Grid } from '../src/Grid';
import { Box } from '../src';

describe('Grid', () => {
  const { container } = render(
    <Grid gridColumnGap={[10, null, 20]} gridTemplateColumns={['1', null, 'repeat(2, 1fr)']}>
      <Box>Left</Box>
      <Box>Right</Box>
    </Grid>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
