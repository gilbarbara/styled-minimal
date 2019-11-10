import * as React from 'react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';

import { Box, OL } from '../src';

import { sizesOptions } from './__fixtures__/helpers';

export default {
  title: 'Components|Lists:OL',
  component: OL,
  decorators: [withKnobs],
};

export const OrderedList = () => (
  <Box maxWidth={600}>
    <OL
      frame={boolean('Frame', false)}
      inline={boolean('Inline', false)}
      reversed={boolean('Reversed', false)}
      type={select('List Type (OL)', ['1', 'a', 'A', 'i', 'I'], '1')}
      start={number('Start', 1)}
      size={select('Size', sizesOptions, 'md')}
    >
      <li>Cras justo odio</li>
      <li>Dapibus ac facilisis in</li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </OL>
  </Box>
);
