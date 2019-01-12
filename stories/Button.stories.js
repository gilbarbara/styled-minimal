import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Button } from '../src';
import { sizesOptions, variantOptions } from '../src/utils/system';
import { SVG, ViewCheckbox } from './helpers/components';
import { capitalize } from './helpers/extras';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [ViewCheckbox] },
  })
  .add('default', () => (
    <ViewCheckbox>
      <Button
        animate={boolean('Animate', false)}
        block={boolean('Block', false)}
        disabled={boolean('Disabled', false)}
        dark={boolean('Dark', false)}
        onClick={action('clicked')}
        outline={boolean('Outline', false)}
        size={select('Size', sizesOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text('Children', 'Click here now')}
      </Button>
    </ViewCheckbox>
  ))
  .add('with size', () => (
    <ViewCheckbox>
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
    </ViewCheckbox>
  ))
  .add('with variant', () => (
    <ViewCheckbox>
      {variantOptions.map((d, i) => (
        <Button
          key={i}
          variant={d}
          disabled={boolean('Disabled', false)}
          onClick={action('clicked')}
        >
          {capitalize(d)}
        </Button>
      ))}
    </ViewCheckbox>
  ))
  .add('with dark mode', () => (
    <ViewCheckbox>
      {variantOptions.map((d, i) => (
        <Button key={i} variant={d} dark onClick={action('clicked')}>
          {capitalize(d)}
        </Button>
      ))}
    </ViewCheckbox>
  ))
  .add('with outline', () => (
    <ViewCheckbox>
      {variantOptions.map((d, i) => (
        <Button
          key={i}
          disabled={boolean('Disabled', false)}
          onClick={action('clicked')}
          outline
          variant={d}
        >
          {capitalize(d)}
        </Button>
      ))}
    </ViewCheckbox>
  ))
  .add('with icons', () => (
    <ViewCheckbox>
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
    </ViewCheckbox>
  ))
  .add('with animation', () => (
    <ViewCheckbox>
      <Button onClick={action('clicked')} animate>
        Waiting
      </Button>
      <Button onClick={action('clicked')} variant="success" animate>
        Loading
      </Button>
      <Button onClick={action('clicked')} variant="indigo" animate>
        Running
      </Button>
    </ViewCheckbox>
  ));
