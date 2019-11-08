import * as React from 'react';
import { render } from '@testing-library/react';

import { Link } from '../src/Link';

describe('Link', () => {
  const { container } = render(<Link href="https://github.com">GitHub</Link>);

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
