import * as React from 'react';

import { Code, Text } from '../src';

export default {
  title: 'Components|Code',
  component: Code,
};

export const Basic = () => (
  <Text>
    Just add this <Code>{`<Text textAlign="center">Some Code</Text>`}</Code> to your component.
  </Text>
);
