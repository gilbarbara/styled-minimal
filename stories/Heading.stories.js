import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import { Heading } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Heading', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View direction="column" hideCheckbox>
      <Heading
        is={select('Type', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}
        size={select('Size', ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])}
      >
        {text('Children', 'My Super Awesome Title')}
      </Heading>
    </View>
  )))
  .add('with is', () => (
    <View direction="column" hideCheckbox>
      <Heading is="h1">Heading 1</Heading>
      <Heading is="h2">Heading 2</Heading>
      <Heading is="h3">Heading 3</Heading>
      <Heading is="h4">Heading 4</Heading>
      <Heading is="h5">Heading 5</Heading>
      <Heading is="h6">Heading 6</Heading>
    </View>
  ))
  .add('with size', () => (
    <View direction="column" hideCheckbox>
      <Heading is="h1" size="h6">Heading 1 with h6 size</Heading>
      <Heading is="h2" size="h5">Heading 2 with h5 size</Heading>
      <Heading is="h3" size="h4">Heading 3 with h4 size</Heading>
      <Heading is="h4" size="h3">Heading 4 with h3 size</Heading>
      <Heading is="h5" size="h2">Heading 5 with h2 size</Heading>
      <Heading is="h6" size="h1">Heading 6 with h1 size</Heading>
    </View>
  ));
