import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../src/Button';

describe('Button', () => {
  it('should render properly', () => {
    const { container } = render(<Button>CLICK ME</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with `busy`', () => {
    const { container } = render(<Button busy>LOADING</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with `dark`', () => {
    const { container } = render(<Button dark>CLICK ME</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with `invert`', () => {
    const { container } = render(<Button invert>CLICK ME</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with `variant`', () => {
    const { container } = render(<Button variant="green">CLICK ME</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
