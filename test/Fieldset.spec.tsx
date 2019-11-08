import * as React from 'react';
import { render } from '@testing-library/react';

import { Fieldset } from '../src/Fieldset';

describe('Fieldset', () => {
  const { container } = render(
    <Fieldset label="Title">
      <input />
    </Fieldset>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
