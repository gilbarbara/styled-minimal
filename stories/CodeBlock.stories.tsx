import * as React from 'react';

import { CodeBlock } from '../src';

export default {
  title: 'Components|CodeBlock',
  component: CodeBlock,
};

export const Basic = () => (
  <CodeBlock>
    {`const Root = props => (
  <MyComponent {...props}>
    <Text textAlign="center">Some Code</Text>
  </MyComponent>
);`}
  </CodeBlock>
);
