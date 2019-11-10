import * as React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { capitalize, sizesOptions, variants } from './__fixtures__/helpers';

import { Box, Checkbox, Group, Label } from '../src';

export default {
  title: 'Components|Checkbox',
  component: Checkbox,
  decorators: [withKnobs],
};

export const Basic = () => {
  const dark = boolean('Dark', false);
  const disabled = boolean('Disabled', false);
  const inline = boolean('Inline', false);
  const invert = boolean('Invert', false);
  const size = select('Size', sizesOptions, 'md');
  const variant = select('Variant', variants, 'primary');

  return (
    <div>
      <Checkbox
        dark={dark}
        defaultChecked
        disabled={disabled}
        inline={inline}
        invert={invert}
        label="Skip Delivery"
        onChange={action('changed')}
        size={size}
        value="delivery"
        variant={variant}
      />
      <Checkbox
        dark={dark}
        disabled={disabled}
        inline={inline}
        invert={invert}
        label={<b>Skip Packaging</b>}
        onChange={action('changed')}
        size={size}
        value="packaging"
        variant={variant}
      />
    </div>
  );
};

export const Modes = () => (
  <Box>
    <Box mb={3}>
      <Label>Uncontrolled</Label>
      <Checkbox defaultChecked>Small</Checkbox>
    </Box>
    <Box mb={3}>
      <Label>Controlled</Label>
      <Checkbox checked={boolean('Controlled - Checked', false)}>Medium</Checkbox>
    </Box>
  </Box>
);

export const Sizes = () => (
  <Group alignItems="flex-end">
    <Checkbox size="sm" defaultChecked>
      Size: sm
    </Checkbox>
    <Checkbox defaultChecked>Size: md - default</Checkbox>
    <Checkbox size="lg" defaultChecked>
      Size: lg
    </Checkbox>
  </Group>
);

export const Variants = () => (
  <React.Fragment>
    {variants.map(d => (
      <Checkbox key={d} defaultChecked variant={d}>
        {capitalize(d)}
      </Checkbox>
    ))}
  </React.Fragment>
);

export const Invert = () => (
  <React.Fragment>
    {variants.map(d => (
      <Checkbox key={d} defaultChecked invert variant={d}>
        {capitalize(d)}
      </Checkbox>
    ))}
  </React.Fragment>
);

export const DarkMode = () => (
  <React.Fragment>
    {variants.map(d => (
      <Checkbox key={d} defaultChecked onChange={action('changed')} dark variant={d}>
        {capitalize(d)}
      </Checkbox>
    ))}
  </React.Fragment>
);
