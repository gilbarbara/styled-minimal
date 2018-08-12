import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { Alert, Box, Heading } from '../src';
import { defaults } from '../src/utils';

import { SVG, View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Alert', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View, Heading],
  })(() => (
    <ThemeProvider
      theme={{ breakpoints: [400, 580, 768, 1024, 1440].map(n => `${n}px`), space: [0, 4, 8, 12, 16, 20] }}
    >
      <View direction="column" hideCheckbox>
        <Alert
          alignHorizontal={select('Align Horizontal', defaults.alignHorizontal, 'left')}
          outline={boolean('Outline', false)}
          size={select('Size', defaults.sizes, 'md')}
          variant={select('Variant', defaults.variants, 'primary')}
        >
          {text('Children', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.')}
        </Alert>
      </View>
    </ThemeProvider>
  )))
  .add('with child components', () => (
    <View direction="column" hideCheckbox>
      <Alert
        alignHorizontal={select('Align Horizontal', defaults.alignHorizontal, 'left')}
        outline={boolean('Outline', false)}
        size={select('Size', defaults.sizes, 'md')}
        variant={select('Variant', defaults.variants, 'primary')}
      >
        <Alert.Content>
          <SVG style={{ marginRight: 16 }} />
          <Box>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Box>
        </Alert.Content>
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
  .add('with variant (palette)', () => (
    <View direction="column">
      <Alert variant="primary">Primary</Alert>
      <Alert variant="secondary">Secondary</Alert>
      <Alert variant="success">Success</Alert>
      <Alert variant="warning">Warning</Alert>
      <Alert variant="danger">Danger</Alert>
      <Alert variant="info">Info</Alert>
      <Alert variant="light">Light</Alert>
      <Alert variant="dark">Dark</Alert>
    </View>
  ))
  .add('with variant (colors)', () => (
    <View>
      <Alert variant="white">White</Alert>
      <Alert variant="red">Red</Alert>
      <Alert variant="pink">Pink</Alert>
      <Alert variant="purple">Purple</Alert>
      <Alert variant="indigo">Indigo</Alert>
      <Alert variant="blue">Blue</Alert>
      <Alert variant="cyan">Cyan</Alert>
      <Alert variant="teal">Teal</Alert>
      <Alert variant="green">Green</Alert>
      <Alert variant="lime">Lime</Alert>
      <Alert variant="yellow">Yellow</Alert>
      <Alert variant="amber">Amber</Alert>
      <Alert variant="orange">Orange</Alert>
      <Alert variant="brown">Brown</Alert>
      <Alert variant="black">Black</Alert>
    </View>
  ))
  .add('with outline', () => (
    <View>
      <Alert outline variant="primary">Primary</Alert>
      <Alert outline variant="secondary">Secondary</Alert>
      <Alert outline variant="success">Success</Alert>
      <Alert outline variant="warning">Warning</Alert>
      <Alert outline variant="danger">Danger</Alert>
      <Alert outline variant="info">Info</Alert>
      <Alert outline variant="light">Light</Alert>
      <Alert outline variant="dark">Dark</Alert>
      <Alert outline variant="red">Red</Alert>
      <Alert outline variant="pink">Pink</Alert>
      <Alert outline variant="purple">Purple</Alert>
      <Alert outline variant="indigo">Indigo</Alert>
      <Alert outline variant="blue">Blue</Alert>
      <Alert outline variant="cyan">Cyan</Alert>
      <Alert outline variant="teal">Teal</Alert>
      <Alert outline variant="green">Green</Alert>
      <Alert outline variant="lime">Lime</Alert>
      <Alert outline variant="yellow">Yellow</Alert>
      <Alert outline variant="amber">Amber</Alert>
      <Alert outline variant="orange">Orange</Alert>
      <Alert outline variant="brown">Brown</Alert>
      <Alert outline variant="black">Black</Alert>
    </View>
  ));
