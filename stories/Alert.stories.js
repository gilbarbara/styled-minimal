import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Alert, Box, Flex, Heading, Paragraph } from '../src';

import { SVG, Example } from './helpers/components';
import { capitalize, sizesOptions, variantOptions } from './helpers/extras';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example, Box, Flex, Heading, Paragraph, SVG] },
  })
  .add('default', () => (
    <Example>
      <Alert
        alignHorizontal={select('Align Horizontal', ['left', 'center', 'right'], 'left')}
        dark={boolean('Dark', false)}
        bordered={boolean('Bordered', false)}
        size={select('Size', sizesOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text(
          'Children',
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        )}
      </Alert>
    </Example>
  ))
  .add('with child components', () => (
    <Example>
      <Alert
        size={select('Size', sizesOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        <Flex alignItems="center">
          <SVG style={{ marginRight: 16 }} />
          <Box>
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </Box>
        </Flex>
        <Box mt={1} pt={1} borderTop="1px solid #fff">
          Footer
        </Box>
      </Alert>
    </Example>
  ))
  .add('with size', () => (
    <Example direction="column">
      <Alert size="xs">Alert XS</Alert>
      <Alert size="sm">Alert SM</Alert>
      <Alert size="md">Alert MD</Alert>
      <Alert size="lg">Alert LG</Alert>
      <Alert size="xl">Alert XL</Alert>
    </Example>
  ))
  .add('with variant', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Alert key={i} variant={d}>
          <Heading as="h4">{capitalize(d)}</Heading>
          <Paragraph>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </Paragraph>
        </Alert>
      ))}
    </Example>
  ))
  .add('with dark mode', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Alert key={i} variant={d} dark>
          <Heading as="h4">{capitalize(d)}</Heading>
          <Paragraph>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </Paragraph>
        </Alert>
      ))}
    </Example>
  ))
  .add('with border', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Alert key={i} bordered variant={d}>
          <Heading as="h4">{capitalize(d)}</Heading>
          <Paragraph>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </Paragraph>
        </Alert>
      ))}
    </Example>
  ));
