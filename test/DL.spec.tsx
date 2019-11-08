import * as React from 'react';
import { render } from '@testing-library/react';

import { DL } from '../src/List';

describe('DL', () => {
  const { container } = render(
    <DL>
      <dt>Beast of Bodmin</dt>
      <dd>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts.
      </dd>
      <dt>Morgawr</dt>
      <dd>A sea serpent.</dd>
      <dt>Owlman</dt>
      <dd>A giant owl-like creature.</dd>
    </DL>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
