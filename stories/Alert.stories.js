import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { Alert, Box, Flex, Heading } from '../src';
import { sizeOptions, variantOptions } from '../src/utils/options';

import { SVG, View } from './helpers/components';
import { backgroundAddon, capitalize } from './helpers/extras';

storiesOf('Alert', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View, Heading],
  })(() => (
    <View direction="column" hideCheckbox>
      <Alert
        alignHorizontal={select('Align Horizontal', ['left', 'center', 'right'], 'left')}
        outline={boolean('Outline', false)}
        size={select('Size', sizeOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text('Children', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.')}
      </Alert>
    </View>
  )))
  .add('with child components', () => (
    <View direction="column" hideCheckbox>
      <Alert
        alignHorizontal={select('Align Horizontal', ['left', 'center', 'right'], 'left')}
        outline={boolean('Outline', false)}
        size={select('Size', sizeOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        <Flex alignItems="center">
          <SVG style={{ marginRight: 16 }} />
          <Box>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Box>
        </Flex>
        <Box mt={1} pt={1} borderTop="1px solid #fff">Footer</Box>
      </Alert>
    </View>
  ))
  .add('with size', () => (
    <View>
      <Alert size="xs">Alert XS</Alert>
      <Alert size="sm">Alert SM</Alert>
      <Alert size="md">Alert MD</Alert>
      <Alert size="lg">Alert LG</Alert>
      <Alert size="xl">Alert XL</Alert>
    </View>
  ))
  .add('with variant', () => (
    <View direction="column">
      {variantOptions.map((d, i) => (
        <Alert key={i} variant={d}>{capitalize(d)}</Alert>
      ))}
    </View>
  ))
  .add('with outline', () => (
    <View>
      {variantOptions.map((d, i) => (
        <Alert key={i} outline variant={d}>{capitalize(d)}</Alert>
      ))}
    </View>
  ));
