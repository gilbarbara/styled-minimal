import * as React from 'react';
import { render } from '@testing-library/react';

import { Legend } from '../src/Legend';

describe('Legend', () => {
  const { container } = render(<Legend>Far far away</Legend>);

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
