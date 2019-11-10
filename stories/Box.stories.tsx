import * as React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { Box } from '../src';

export default {
  title: 'Components|Box',
  component: Box,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Box
    bg={text('BG Color', '#ccc')}
    color={text('Color', '#f04')}
    fontSize={text('Font Size', '24px')}
    p={number('Padding', 2)}
    width={text('Width', '450px')}
  >
    {text('Children', 'This is a box')}
  </Box>
);
