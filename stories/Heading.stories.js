import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Heading } from '../src';
import { View } from './helpers/components';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View>
      <Heading
        as={select('As', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}
        size={select('Size', ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])}
        mb={4}
      >
        {text('Children', 'My Super Awesome Title')}
      </Heading>
    </View>
  ))
  .add('with as', () => (
    <View>
      <div>
        <Heading as="h1">Heading 1</Heading>
        <Heading as="h2">Heading 2</Heading>
        <Heading as="h3">Heading 3</Heading>
        <Heading as="h4">Heading 4</Heading>
        <Heading as="h5">Heading 5</Heading>
        <Heading as="h6">Heading 6</Heading>
      </div>
    </View>
  ))
  .add('with size', () => (
    <View>
      <div>
        <Heading as="h1" size="h6">Heading 1 with h6 size</Heading>
        <Heading as="h2" size="h5">Heading 2 with h5 size</Heading>
        <Heading as="h3" size="h4">Heading 3 with h4 size</Heading>
        <Heading as="h4" size="h3">Heading 4 with h3 size</Heading>
        <Heading as="h5" size="h2">Heading 5 with h2 size</Heading>
        <Heading as="h6" size="h1">Heading 6 with h1 size</Heading>
      </div>
    </View>
  ));
