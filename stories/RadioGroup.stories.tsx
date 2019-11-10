import * as React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { sizesOptions, variants } from './__fixtures__/helpers';

import { Box, RadioGroup } from '../src';

export default {
  title: 'Components|RadioGroup',
  component: RadioGroup,
  decorators: [withKnobs],
};

const options = [
  {
    label: 'Single',
    value: 'single',
  },
  {
    label: 'Married',
    value: 'married',
    variant: 'red' as const,
  },
  {
    label: 'Divorced',
    value: 'divorced',
    variant: 'blue' as const,
  },
  {
    label: 'Separated',
    value: 'separated',
    variant: 'purple' as const,
  },
  {
    disabled: true,
    label: 'Partnership',
    value: 'partnership',
  },
];

export const Basic = () => {
  return (
    <RadioGroup
      dark={boolean('Dark', false)}
      defaultValue="single"
      disabled={boolean('Disabled', false)}
      helpText={text('Help Text', 'Select an option above')}
      inline={boolean('Inline', false)}
      invert={boolean('Invert', false)}
      label="Marital Status"
      name="status"
      onChange={action('changed')}
      options={options}
      size={select('Size', sizesOptions, 'md')}
      value={select('Value', ['', ...options.map(d => d.value)], '')}
      variant={select('Variant', variants, 'primary')}
    />
  );
};

export const Modes = () => (
  <Box>
    <RadioGroup
      label="Uncontrolled"
      name="test1"
      defaultValue={1}
      options={[
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
          value: 2,
        },
      ]}
    />
    <RadioGroup
      label="Controlled"
      name="test2"
      value={select('Controlled Value', [1, 2], 1)}
      options={[
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
          value: 2,
        },
      ]}
    />
  </Box>
);
