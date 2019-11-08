import * as React from 'react';
import { render } from '@testing-library/react';

import { Heading } from '../src/Heading';

describe('Heading', () => {
  it('should render properly', () => {
    const { container } = render(<Heading>Far far away</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with `gutter`', () => {
    const { container } = render(<Heading gutter>Far far away</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with `as`', () => {
    const { container } = render(<Heading as="h4">Far far away</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with `level`', () => {
    const { container } = render(<Heading level={4}>Far far away</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
