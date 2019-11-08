import * as React from 'react';
import { render } from '@testing-library/react';

import { Textarea } from '../src/Textarea';

describe('Textarea', () => {
  it('should render properly', () => {
    const { container } = render(<Textarea name="test" defaultValue="Far far away" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with validation', () => {
    const { container } = render(
      <div>
        <Textarea name="test" defaultValue="Far far away" valid />
        <Textarea name="test" defaultValue="Far far away" valid={false} />
      </div>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
