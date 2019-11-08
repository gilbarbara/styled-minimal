import * as React from 'react';
import { render } from '@testing-library/react';

import { Label } from '../src/Label';

describe('Label', () => {
  const { container } = render(<Label>Far far away</Label>);

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
