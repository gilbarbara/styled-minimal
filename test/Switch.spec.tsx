import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Switch } from '../src/Switch';

const mockOnChange = jest.fn();

describe('Switch', () => {
  it('should render properly', () => {
    const { container } = render(
      <Switch name="toggle" checked>
        Toggle
      </Switch>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with `Size`', () => {
    const { container } = render(<Switch name="toggle" checked size="lg" variant="red" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should work in uncontrolled mode', () => {
    const { getByRole } = render(<Switch name="toggle" defaultChecked onChange={mockOnChange} />);

    expect(getByRole('switch').getAttribute('aria-checked')).toBe('true');

    fireEvent.click(getByRole('switch'));
    expect(getByRole('switch').getAttribute('aria-checked')).toBe('false');
    expect(mockOnChange).toHaveBeenLastCalledWith('off');

    fireEvent.click(getByRole('switch'));
    expect(getByRole('switch').getAttribute('aria-checked')).toBe('true');
    expect(mockOnChange).toHaveBeenLastCalledWith('on');
  });

  it('should work in controlled mode', () => {
    const { getByRole, rerender } = render(<Switch name="toggle" checked={false} />);

    fireEvent.click(getByRole('switch'));
    expect(getByRole('switch').getAttribute('aria-checked')).toBe('false');

    rerender(<Switch name="toggle" checked variant="red" />);
    expect(getByRole('switch').getAttribute('aria-checked')).toBe('true');
  });

  it('should ignore changes with `disabled`', () => {
    const { getByRole } = render(
      <Switch disabled name="toggle" checked={false}>
        Toggle
      </Switch>,
    );

    fireEvent.click(getByRole('switch'));
    expect(getByRole('switch').getAttribute('aria-checked')).toBe('false');
  });
});
