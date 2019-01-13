import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Button } from '../src';

import { SVG, Example } from './helpers/components';
import { capitalize, sizesOptions, variantOptions } from './helpers/extras';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example, SVG] },
  })
  .add('default', () => (
    <Example>
      <Button
        animate={boolean('Animate', false)}
        block={boolean('Block', false)}
        bordered={boolean('Border', false)}
        disabled={boolean('Disabled', false)}
        dark={boolean('Dark', false)}
        onClick={action('clicked')}
        size={select('Size', sizesOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text('Children', 'Click here now')}
      </Button>
    </Example>
  ))
  .add('with size', () => (
    <Example>
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
    </Example>
  ))
  .add('with variant', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Button key={i} onClick={action('clicked')} variant={d}>
          {capitalize(d)}
        </Button>
      ))}
    </Example>
  ))
  .add('with dark mode', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Button key={i} dark onClick={action('clicked')} variant={d}>
          {capitalize(d)}
        </Button>
      ))}
    </Example>
  ))
  .add('with border', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Button key={i} bordered onClick={action('clicked')} variant={d}>
          {capitalize(d)}
        </Button>
      ))}
    </Example>
  ))
  .add('with icons', () => (
    <Example>
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
    </Example>
  ))
  .add('with animation', () => (
    <Example>
      <Button onClick={action('clicked')} animate>
        Waiting
      </Button>
      <Button onClick={action('clicked')} variant="success" animate>
        Loading
      </Button>
      <Button onClick={action('clicked')} variant="indigo" animate>
        Running
      </Button>
    </Example>
  ));
