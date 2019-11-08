import * as React from 'react';
import { render } from '@testing-library/react';

import { Container } from '../src/Container';
import { Box } from '../src';

describe('Container', () => {
  const content = (
    <Box>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean. A small river named Duden flows by their place and supplies
      it with the necessary regelialia. It is a paradisematic country, in which roasted parts of
      sentences fly into your mouth.
    </Box>
  );

  it('should render properly', () => {
    const { container } = render(<Container>{content}</Container>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('with ySpacing', () => {
    const { container } = render(<Container ySpacing>{content}</Container>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('with `fullScreen`', () => {
    const { container } = render(<Container fullScreen>{content}</Container>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
