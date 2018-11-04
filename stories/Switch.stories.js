import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Switch } from '../src';
import { View } from './helpers/components';
import { sizeOptionsFull, variantOptions } from '../src/utils/options';

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View>
      <Switch
        name="test"
        size={select('Size', sizeOptionsFull, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
        value={boolean('Value', false)}
        onChange={value => {
          action('changed')(value);
        }}
      />
    </View>
  ))
  .add('with size', () => (
    <View>
      <Switch name="test" size="xs" />
      <Switch name="test" size="sm" />
      <Switch name="test" size="md" />
      <Switch name="test" size="lg" />
      <Switch name="test" size="xl" />

    </View>
  ))
  .add('with variant', () => (
    <View>
      {variantOptions.map((d, i) => (
        <Switch key={i} name={d} value={true} variant={d} />
      ))}
    </View>
  ));
