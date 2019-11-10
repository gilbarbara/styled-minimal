import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { Group, Switch } from '../src';

import { sizesOptionsAll, variants } from './__fixtures__/helpers';

export default {
  title: 'Components|Switch',
  component: Switch,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Switch
    name={text('Name', 'status')}
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    size={select('Size', sizesOptionsAll, 'md')}
    variant={select('Variant', variants, 'primary')}
    onChange={value => {
      action('changed')(value);
    }}
  >
    {text('Children', 'Status')}
  </Switch>
);

export const Sizes = () => (
  <Group alignItems="flex-end">
    <Switch name="test" size="xs" />
    <Switch name="test" size="sm" />
    <Switch name="test" size="md" />
    <Switch name="test" size="lg" />
    <Switch name="test" size="xl" />
  </Group>
);

export const Variants = () => (
  <React.Fragment>
    {variants.map(d => (
      <Switch key={d} name={d} checked variant={d} />
    ))}
  </React.Fragment>
);
