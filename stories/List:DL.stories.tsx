import * as React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Box, DL } from '../src';

import { sizesOptions } from './__fixtures__/helpers';

export default {
  title: 'Components|Lists:DL',
  component: DL,
  decorators: [withKnobs],
};

export const DescriptionList = () => (
  <Box maxWidth={600}>
    <DL
      frame={boolean('Frame', true)}
      inline={boolean('Inline', false)}
      size={select('Size', sizesOptions, 'md')}
    >
      <dt>Beast of Bodmin</dt>
      <dd>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts.
      </dd>
      <dt>Morgawr</dt>
      <dd>A sea serpent.</dd>
      <dt>Owlman</dt>
      <dd>A giant owl-like creature.</dd>
    </DL>
  </Box>
);
