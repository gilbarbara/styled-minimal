import * as React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Alert, Box, Heading, Paragraph } from '../src';

import { capitalize, variants } from './__fixtures__/helpers';
import { SVG } from './__fixtures__/components';

export default {
  title: 'Components|Alert',
  component: Alert,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Alert
    dark={boolean('Dark', false)}
    invert={boolean('Invert', false)}
    variant={select('Variant', variants, 'primary')}
  >
    {text(
      'Children',
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    )}
  </Alert>
);

export const Variants = () => (
  <React.Fragment>
    {variants
      .filter((d: string) => !d.startsWith('__'))
      .map(d => (
        <Alert key={d} variant={d}>
          <Heading as="h4">{capitalize(d)}</Heading>
          <Paragraph>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </Paragraph>
        </Alert>
      ))}
  </React.Fragment>
);

export const Invert = () => (
  <React.Fragment>
    {variants
      .filter((d: string) => !d.startsWith('__'))
      .map(d => (
        <Alert key={d} invert variant={d}>
          <Heading as="h4">{capitalize(d)}</Heading>
          <Paragraph>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </Paragraph>
        </Alert>
      ))}
  </React.Fragment>
);

export const DarkMode = () => (
  <React.Fragment>
    {variants
      .filter((d: string) => !d.startsWith('__'))
      .map(d => (
        <Alert key={d} variant={d} dark>
          <Heading as="h4">{capitalize(d)}</Heading>
          <Paragraph>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </Paragraph>
        </Alert>
      ))}
  </React.Fragment>
);

export const Composition = () => (
  <Alert variant="danger" display="flex" alignItems="center">
    <Box p={3}>
      <SVG />
    </Box>
    <Box>
      <Heading as="h5" mb={1}>
        Super important info
      </Heading>
      <Paragraph lineHeight={1.2}>
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
      </Paragraph>
    </Box>
  </Alert>
);
