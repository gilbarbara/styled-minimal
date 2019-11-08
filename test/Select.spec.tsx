import * as React from 'react';
import { render } from '@testing-library/react';

import { Select } from '../src/Select';

const Fixture = props => (
  <Select {...props}>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </Select>
);

describe('Select', () => {
  it('should render properly', () => {
    const { container } = render(<Fixture />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with validation', () => {
    const { container } = render(
      <div>
        <Fixture valid />
        <Fixture valid={false} />
      </div>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
