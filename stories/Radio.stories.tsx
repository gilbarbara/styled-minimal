import * as React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { capitalize, sizesOptions, variants } from './__fixtures__/helpers';

import { Group, Radio } from '../src';

export default {
  title: 'Components|Radio',
  component: Radio,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Radio
    dark={boolean('Dark', false)}
    defaultChecked
    disabled={boolean('Disabled', false)}
    inline={boolean('Inline', true)}
    invert={boolean('Invert', false)}
    label="Single Radio"
    name="radio"
    size={select('Size', sizesOptions, 'md')}
    value="delivery"
    variant={select('Variant', variants, 'primary')}
  />
);

export const Sizes = () => (
  <Group alignItems="flex-end">
    <Radio name="test" size="sm">
      Small
    </Radio>
    <Radio name="test" size="md" defaultChecked>
      Medium
    </Radio>
    <Radio name="test" size="lg">
      Large
    </Radio>
  </Group>
);

export const Variants = () => (
  <React.Fragment>
    {variants.map(d => (
      <Radio key={d} defaultChecked variant={d}>
        {capitalize(d)}
      </Radio>
    ))}
  </React.Fragment>
);

export const Invert = () => (
  <React.Fragment>
    {variants.map(d => (
      <Radio key={d} defaultChecked invert variant={d}>
        {capitalize(d)}
      </Radio>
    ))}
  </React.Fragment>
);

export const DarkMode = () => (
  <React.Fragment>
    {variants.map(d => (
      <Radio key={d} defaultChecked dark variant={d}>
        {capitalize(d)}
      </Radio>
    ))}
  </React.Fragment>
);
