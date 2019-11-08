import * as React from 'react';
import { render } from '@testing-library/react';

import { Box } from '../src/Box';

describe('Box', () => {
  it('should render properly', () => {
    const { container } = render(
      <Box
        border="1px solid #000"
        className="box"
        css={{
          width: ['100%', '30%', null, '50%'],
        }}
        responsive={{
          md: {
            px: 10,
            py: 20,
          },
        }}
        textTransform="uppercase"
      >
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean. A small river named Duden flows by their place and
        supplies it with the necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </Box>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
