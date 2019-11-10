import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Button } from '../src';

import { capitalize, sizesOptionsAll, variants } from './__fixtures__/helpers';
import { SVG } from './__fixtures__/components';

export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Button
    block={boolean('Block', false)}
    busy={boolean('Busy', false)}
    disabled={boolean('Disabled', false)}
    dark={boolean('Dark', false)}
    invert={boolean('Invert', false)}
    onClick={action('clicked')}
    size={select('Size', sizesOptionsAll, 'md')}
    variant={select('Variant', variants, 'primary')}
  >
    {text('Children', 'Click here now')}
  </Button>
);

export const Sizes = () => (
  <React.Fragment>
    <Button onClick={action('clicked')} size="xs">
      Button XS
    </Button>
    <Button onClick={action('clicked')} size="sm">
      Button SM
    </Button>
    <Button onClick={action('clicked')} size="md">
      Button MD
    </Button>
    <Button onClick={action('clicked')} size="lg">
      Button LG
    </Button>
    <Button onClick={action('clicked')} size="xl">
      Button XL
    </Button>
  </React.Fragment>
);

export const Variants = () => (
  <React.Fragment>
    {variants.map(d => (
      <Button key={d} onClick={action('clicked')} variant={d}>
        {capitalize(d)}
      </Button>
    ))}
  </React.Fragment>
);

export const Invert = () => (
  <React.Fragment>
    {variants.map(d => (
      <Button key={d} invert onClick={action('clicked')} variant={d}>
        {capitalize(d)}
      </Button>
    ))}
  </React.Fragment>
);

export const DarkMode = () => (
  <React.Fragment>
    {variants.map(d => (
      <Button key={d} dark onClick={action('clicked')} variant={d}>
        {capitalize(d)}
      </Button>
    ))}
  </React.Fragment>
);

export const WithIcons = () => (
  <React.Fragment>
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool" style={{ marginRight: 5 }}>
        😀
      </span>
      <span>COOL</span>
    </Button>
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="fresh" style={{ marginRight: 5 }}>
        <SVG />
      </span>
      <span>COOL</span>
    </Button>
    <Button onClick={action('clicked')}>
      <span style={{ marginRight: 5 }}>SUPER</span>
      <span role="img" aria-label="fresh">
        <SVG />
      </span>
    </Button>
  </React.Fragment>
);
