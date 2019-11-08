import * as React from 'react';
import { render } from '@testing-library/react';

import { FormGroup } from '../src/FormGroup';

describe('FormGroup', () => {
  const { container } = render(
    <FormGroup inline frame label="Hello World" helpText="help the World">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean. A small river named Duden flows by their place and supplies
      it with the necessary regelialia. It is a paradisematic country, in which roasted parts of
      sentences fly into your mouth.
    </FormGroup>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
