import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { Button } from '../src';
import { sizeOptions, variantOptions } from '../src/utils/options';
import { SVG, ViewCheckbox } from './helpers/components';
import { backgroundAddon, capitalize } from './helpers/extras';

storiesOf('Button', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [ViewCheckbox],
  })(() => (
    <ViewCheckbox>
      <Button
        animate={boolean('Animate', false)}
        block={boolean('Block', false)}
        disabled={boolean('Disabled', false)}
        onClick={action('clicked')}
        outline={boolean('Outline', false)}
        size={select('Size', sizeOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
        fontWeight={select('Font Weight', ['normal', 'bold'], 'normal')}
      >
        {text('Children', 'Click here now')}
      </Button>
    </ViewCheckbox>
  )))
  .add('with size', () => (
    <ViewCheckbox>
      <Button onClick={action('clicked')} size="xs">Button XS</Button>
      <Button onClick={action('clicked')} size="sm">Button SM</Button>
      <Button onClick={action('clicked')} size="md">Button MD</Button>
      <Button onClick={action('clicked')} size="lg">Button LG</Button>
      <Button onClick={action('clicked')} size="xl">Button XL</Button>
    </ViewCheckbox>
  ))
  .add('with as', () => (
    <ViewCheckbox>
      <Button as="a" onClick={action('clicked')} href="https://amaro.com" target="_blank">Anchor</Button>
      <Button as="span" onClick={action('clicked')}>Span</Button>
      <Button as="label" onClick={action('clicked')}>Label</Button>
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
          outline={boolean('Outline', false)}
        >
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
        <span role="img" aria-label="so cool" style={{ marginRight: 5 }}>😀</span>
        <span>COOL</span>
      </Button>
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="fresh" style={{ marginRight: 5 }}><SVG /></span>
        <span>COOL</span>
      </Button>
      <Button onClick={action('clicked')}>
        <span style={{ marginRight: 5 }}>SUPER</span>
        <span role="img" aria-label="fresh"><SVG /></span>
      </Button>
    </ViewCheckbox>
  ))
  .add('with animation', () => (
    <ViewCheckbox>
      <Button onClick={action('clicked')} animate>Waiting</Button>
      <Button onClick={action('clicked')} variant="success" animate>Loading</Button>
      <Button onClick={action('clicked')} variant="indigo" animate>Running</Button>
    </ViewCheckbox>
  ));
