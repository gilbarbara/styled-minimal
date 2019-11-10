import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button, Group, Text } from '../src';

export default {
  title: 'Components|Group',
  component: Group,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Group gap={text('Gap', '2')}>
    <Button>Submit</Button>
    <Button invert>Cancel</Button>
    <Text color="#999">Remember to save your work</Text>
  </Group>
);
