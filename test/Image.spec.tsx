import * as React from 'react';
import { render } from '@testing-library/react';

import { Image } from '../src/Image';

describe('Image', () => {
  const { container } = render(
    <Image src="https://assets.imgix.net/unsplash/moon.jpg" alt="Moon" />,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
