import * as React from 'react';
import { render } from '@testing-library/react';

import { Loader } from '../src/Loader';

describe('Loader', () => {
  const { container } = render(<Loader />);

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
