import * as React from 'react';
import { render } from '@testing-library/react';

import { Text } from '../src/Text';

describe('Text', () => {
  const { container } = render(
    <div>
      <Text>Far far away, behind the word mountains, </Text>
      <Text>far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
    </div>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
