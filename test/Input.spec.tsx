import * as React from 'react';
import { render } from '@testing-library/react';

import { Input } from '../src/Input';

describe('Input', () => {
  it('should render properly', () => {
    const { container } = render(<Input name="test" defaultValue="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with validation', () => {
    const { container } = render(
      <div>
        <Input name="test" defaultValue="test" valid />
        <Input name="test2" defaultValue="test" valid={false} />
      </div>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
