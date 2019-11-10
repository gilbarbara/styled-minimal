import * as React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Box, Grid, Heading, UL, Paragraph } from '../src';

import { sizesOptions } from './__fixtures__/helpers';

export default {
  title: 'Components|Lists:UL',
  component: UL,
  decorators: [withKnobs],
};

export const UnorderedList = () => (
  <Box maxWidth={600}>
    <UL
      frame={boolean('Frame', true)}
      inline={boolean('Inline', false)}
      styleType={select(
        'List Style',
        ['disc', 'circle', 'square', 'decimal', 'lower-alpha', 'none'],
        'none',
      )}
      size={select('Size', sizesOptions, 'md')}
    >
      <li>
        <Heading as="h5" mb={1}>
          Cras justo odio
        </Heading>
        <Paragraph>
          It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </Paragraph>
      </li>
      <li>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts.
      </li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </UL>
  </Box>
);

export const Sizes = () => (
  <Grid gridGap={20} gridTemplateColumns="repeat(3, 1fr);">
    <Box width={200}>
      <Heading as="h5" mb={1}>
        SM
      </Heading>
      <UL size="sm">
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Morbi leo risus</li>
        <li>Porta ac consectetur ac</li>
        <li>Vestibulum at eros</li>
      </UL>
    </Box>
    <Box width={200}>
      <Heading as="h5" mb={1}>
        MD
      </Heading>
      <UL size="md">
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Morbi leo risus</li>
        <li>Porta ac consectetur ac</li>
        <li>Vestibulum at eros</li>
      </UL>
    </Box>
    <Box width={200}>
      <Heading as="h5" mb={1}>
        LG
      </Heading>
      <UL size="lg">
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Morbi leo risus</li>
        <li>Porta ac consectetur ac</li>
        <li>Vestibulum at eros</li>
      </UL>
    </Box>
  </Grid>
);
