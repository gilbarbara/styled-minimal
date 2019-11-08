import * as React from 'react';
import { render } from '@testing-library/react';

import { Radio } from '../src/Input';

describe('Radio', () => {
  const { container } = render(<Radio name="test" label="Radio" value="1" />);

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
