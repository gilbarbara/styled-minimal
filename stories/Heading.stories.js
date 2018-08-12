import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import { Heading } from '../src';
import { defaults } from '../src/utils';
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
        size={select('Size', defaults.headingSizes, '')}
        type={select('Type', defaults.headingTypes, 'h1')}
      >
        {text('Children', 'My Super Awesome Title')}
      </Heading>
    </View>
  )))
  .add('with type', () => (
    <View direction="column" hideCheckbox>
      <Heading type="h1">Heading 1</Heading>
      <Heading type="h2">Heading 2</Heading>
      <Heading type="h3">Heading 3</Heading>
      <Heading type="h4">Heading 4</Heading>
      <Heading type="h5">Heading 5</Heading>
      <Heading type="h6">Heading 6</Heading>
    </View>
  ))
  .add('with size', () => (
    <View direction="column" hideCheckbox>
      <Heading type="h1" size="h6">Heading 1 with h6 size</Heading>
      <Heading type="h2" size="h5">Heading 2 with h5 size</Heading>
      <Heading type="h3" size="h4">Heading 3 with h4 size</Heading>
      <Heading type="h4" size="h3">Heading 4 with h3 size</Heading>
      <Heading type="h5" size="h2">Heading 5 with h2 size</Heading>
      <Heading type="h6" size="h1">Heading 6 with h1 size</Heading>
    </View>
  ));
