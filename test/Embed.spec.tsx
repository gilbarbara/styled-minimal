import * as React from 'react';
import { render } from '@testing-library/react';

import { Embed } from '../src/Embed';

describe('Embed', () => {
  const { container } = render(
    <Embed>
      {`<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GNCd_ERZvZM"
          title="Them Changes"
          frameBorder="0"
          allowFullScreen
        />`}
    </Embed>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
