import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';

import { Switch } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';
import { propsOptions } from '../src/utils/options';

storiesOf('Switch', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View hideCheckbox skipCentered skipFlex skipSpacer>
      <Switch
        name="test"
        size={select('Size', ['sm', 'md', 'lg'], 'md')}
        variant={select('Variant', propsOptions.variants, 'primary')}
        value={boolean('Value', false)}
        onChange={value => {
          action('changed')(value);
        }}
      />
    </View>
  )))
  .add('with size', () => (
    <View hideCheckbox>
      <Switch name="test" size="sm" />
      <Switch name="test" size="md" />
      <Switch name="test" size="lg" />
    </View>
  ))
  .add('with variant', () => (
    <View hideCheckbox>
      {propsOptions.variants.map((d, i) => (
        <Switch key={i} name={d} value={true} variant={d} />
      ))}
    </View>
  ));
