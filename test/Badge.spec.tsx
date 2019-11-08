import * as React from 'react';
import { render } from '@testing-library/react';

import { Badge } from '../src/Badge';

describe('Badge', () => {
  it('should render properly', () => {
    const { container } = render(<Badge>4</Badge>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
