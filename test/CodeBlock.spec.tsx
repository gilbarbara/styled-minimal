import * as React from 'react';
import { render } from '@testing-library/react';

import { CodeBlock } from '../src/CodeBlock';

describe('CodeBlock', () => {
  const { container } = render(
    <CodeBlock>{`const Root = props => (
  <MyComponent {...props}>
    <Text textAlign="center">Some Code</Text>
  </MyComponent>
);`}</CodeBlock>,
  );

  it('should render properly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
