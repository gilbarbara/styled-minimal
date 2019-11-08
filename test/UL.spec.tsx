import * as React from 'react';
import { render } from '@testing-library/react';

import { UL } from '../src/List';

describe('UL', () => {
  const { container } = render(
    <UL>
      <li>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts.
      </li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </UL>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
