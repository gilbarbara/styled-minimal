import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Switch } from '../src';
import { Example } from './helpers/components';
import { sizesAllOptions, variantOptions } from './helpers/extras';

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example>
      <Switch
        name="test"
        size={select('Size', sizesAllOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
        value={boolean('Value', false)}
        onChange={value => {
          action('changed')(value);
        }}
      />
    </Example>
  ))
  .add('with size', () => (
    <Example>
      <Switch name="test" size="xs" />
      <Switch name="test" size="sm" />
      <Switch name="test" size="md" />
      <Switch name="test" size="lg" />
      <Switch name="test" size="xl" />
    </Example>
  ))
  .add('with variant', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Switch key={i} name={d} value={true} variant={d} />
      ))}
    </Example>
  ));
