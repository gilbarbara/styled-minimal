import * as React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '../src/Input';

describe('Checkbox', () => {
  it('should render properly', () => {
    const { container } = render(
      <div>
        <Checkbox name="test" label="Checkbox" value="test" defaultChecked />
        <Checkbox name="test2" label="Checkbox 2" value="test2" invert />
      </div>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
