import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { RadioGroup } from '../src/RadioGroup';

const mockOnChange = jest.fn();

describe('RadioGroup', () => {
  it('should render properly', () => {
    const { container } = render(
      <RadioGroup
        defaultValue={1}
        label="RadioGroup"
        name="test"
        options={[{ label: 'Option 1', value: 1 }, { value: 2 }]}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should work in uncontrolled mode', () => {
    const { container, getByLabelText } = render(
      <RadioGroup
        defaultValue="one"
        label="RadioGroup"
        name="test"
        onChange={mockOnChange}
        options={[
          { label: 'Option 1', value: 'one' },
          { label: 'Option 2', value: 'two' },
        ]}
      />,
    );

    const labels = container.querySelectorAll('label:not(:first-of-type)');
    const option1 = getByLabelText('Option 1') as HTMLInputElement;
    const option2 = getByLabelText('Option 2') as HTMLInputElement;

    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);

    fireEvent.click(labels[1]);

    expect(option1.checked).toBe(false);
    expect(option2.checked).toBe(true);

    expect(mockOnChange).toHaveBeenLastCalledWith('two');
  });

  it('should work in controlled mode', () => {
    const { container, getByLabelText, rerender } = render(
      <RadioGroup
        label="RadioGroup"
        name="test"
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ]}
        value={1}
      />,
    );

    const labels = container.querySelectorAll('label:not(:first-of-type)');
    const option1 = getByLabelText('Option 1') as HTMLInputElement;
    const option2 = getByLabelText('Option 2') as HTMLInputElement;

    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);

    fireEvent.click(labels[1]);

    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);

    rerender(
      <RadioGroup
        label="RadioGroup"
        name="test"
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ]}
        value={2}
      />,
    );

    expect(option1.checked).toBe(false);
    expect(option2.checked).toBe(true);
  });

  it('should not render if options is empty', () => {
    const { container } = render(
      <RadioGroup label="RadioGroup" name="test" options={[]} value={1} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
