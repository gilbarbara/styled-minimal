import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { Button } from '../src';
import { sizeOptions, variantOptions } from '../src/utils/options';
import { SVG, View } from './helpers/components';
import { backgroundAddon, capitalize } from './helpers/extras';

const stories = storiesOf('Button', module);

stories
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View>
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
    </View>
  )))
  .add('with size', () => (
    <View>
      <Button onClick={action('clicked')} size="xs">Button XS</Button>
      <Button onClick={action('clicked')} size="sm">Button SM</Button>
      <Button onClick={action('clicked')} size="md">Button MD</Button>
      <Button onClick={action('clicked')} size="lg">Button LG</Button>
      <Button onClick={action('clicked')} size="xl">Button XL</Button>
    </View>
  ))
  .add('with as', () => (
    <View>
      <Button as="a" onClick={action('clicked')} href="https://amaro.com" target="_blank">Anchor</Button>
      <Button as="span" onClick={action('clicked')}>Span</Button>
      <Button as="label" onClick={action('clicked')}>Label</Button>
    </View>
  ))
  .add('with variant', () => (
    <View>
      {variantOptions.map((d, i) => (
        <Button key={i} variant={d}>{capitalize(d)}</Button>
      ))}
    </View>
  ))
  .add('with outline', () => (
    <View>
      {variantOptions.map((d, i) => (
        <Button key={i} outline variant={d}>{capitalize(d)}</Button>
      ))}
    </View>
  ))
  .add('with icons', () => (
    <View>
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
    </View>
  ))
  .add('with animation', () => (
    <View>
      <Button onClick={action('clicked')} animate>Waiting</Button>
      <Button onClick={action('clicked')} variant="success" animate>Loading</Button>
      <Button onClick={action('clicked')} variant="indigo" animate>Running</Button>
    </View>
  ));
