import * as React from 'react';
import { render } from '@testing-library/react';

import { OL } from '../src/List';

describe('OL', () => {
  const { container } = render(
    <OL>
      <li>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts.
      </li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </OL>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
