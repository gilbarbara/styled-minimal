import * as React from 'react';
import { render } from '@testing-library/react';

import { Code } from '../src/Code';

describe('Code', () => {
  const { container } = render(<Code>{'<div>Hello</div>'}</Code>);

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
