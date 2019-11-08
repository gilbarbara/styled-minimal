import * as React from 'react';
import { render } from '@testing-library/react';

import { Paragraph } from '../src/Paragraph';

describe('Paragraph', () => {
  const { container } = render(
    <div>
      <Paragraph>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts.
      </Paragraph>
      <Paragraph>
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
        ocean. A small river named Duden flows by their place and supplies it with the necessary
        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
        mouth.
      </Paragraph>
    </div>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
