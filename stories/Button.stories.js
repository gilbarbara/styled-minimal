import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { Button } from '../src';
import { propsOptions } from '../src/utils/options';
import { SVG, View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

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
        size={select('Size', propsOptions.sizes, 'md')}
        variant={select('Variant', propsOptions.variants, 'primary')}
        weight={select('Weight', propsOptions.weights, 'normal')}
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
  .add('with is', () => (
    <View>
      <Button is="a" onClick={action('clicked')} href="https://amaro.com" target="_blank">Anchor</Button>
      <Button is="span" onClick={action('clicked')}>Span</Button>
      <Button is="label" onClick={action('clicked')}>Label</Button>
    </View>
  ))
  .add('with variant (palette)', () => (
    <View>
      <Button onClick={action('clicked')} variant="primary">Primary</Button>
      <Button onClick={action('clicked')} variant="secondary">Secondary</Button>
      <Button onClick={action('clicked')} variant="success">Success</Button>
      <Button onClick={action('clicked')} variant="warning">Warning</Button>
      <Button onClick={action('clicked')} variant="danger">Danger</Button>
      <Button onClick={action('clicked')} variant="info">Info</Button>
      <Button onClick={action('clicked')} variant="light">Light</Button>
      <Button onClick={action('clicked')} variant="dark">Dark</Button>
    </View>
  ))
  .add('with variant (colors)', () => (
    <View>
      <Button onClick={action('clicked')} variant="white">White</Button>
      <Button onClick={action('clicked')} variant="red">Red</Button>
      <Button onClick={action('clicked')} variant="pink">Pink</Button>
      <Button onClick={action('clicked')} variant="purple">Purple</Button>
      <Button onClick={action('clicked')} variant="indigo">Indigo</Button>
      <Button onClick={action('clicked')} variant="blue">Blue</Button>
      <Button onClick={action('clicked')} variant="cyan">Cyan</Button>
      <Button onClick={action('clicked')} variant="teal">Teal</Button>
      <Button onClick={action('clicked')} variant="green">Green</Button>
      <Button onClick={action('clicked')} variant="lime">Lime</Button>
      <Button onClick={action('clicked')} variant="yellow">Yellow</Button>
      <Button onClick={action('clicked')} variant="amber">Amber</Button>
      <Button onClick={action('clicked')} variant="orange">Orange</Button>
      <Button onClick={action('clicked')} variant="brown">Brown</Button>
      <Button onClick={action('clicked')} variant="black">Black</Button>
    </View>
  ))
  .add('with outline', () => (
    <View>
      <Button onClick={action('clicked')} outline variant="primary">Primary</Button>
      <Button onClick={action('clicked')} outline variant="secondary">Secondary</Button>
      <Button onClick={action('clicked')} outline variant="success">Success</Button>
      <Button onClick={action('clicked')} outline variant="warning">Warning</Button>
      <Button onClick={action('clicked')} outline variant="danger">Danger</Button>
      <Button onClick={action('clicked')} outline variant="info">Info</Button>
      <Button onClick={action('clicked')} outline variant="light">Light</Button>
      <Button onClick={action('clicked')} outline variant="dark">Dark</Button>
      <Button onClick={action('clicked')} outline variant="red">Red</Button>
      <Button onClick={action('clicked')} outline variant="pink">Pink</Button>
      <Button onClick={action('clicked')} outline variant="purple">Purple</Button>
      <Button onClick={action('clicked')} outline variant="indigo">Indigo</Button>
      <Button onClick={action('clicked')} outline variant="blue">Blue</Button>
      <Button onClick={action('clicked')} outline variant="cyan">Cyan</Button>
      <Button onClick={action('clicked')} outline variant="teal">Teal</Button>
      <Button onClick={action('clicked')} outline variant="green">Green</Button>
      <Button onClick={action('clicked')} outline variant="lime">Lime</Button>
      <Button onClick={action('clicked')} outline variant="yellow">Yellow</Button>
      <Button onClick={action('clicked')} outline variant="amber">Amber</Button>
      <Button onClick={action('clicked')} outline variant="orange">Orange</Button>
      <Button onClick={action('clicked')} outline variant="brown">Brown</Button>
      <Button onClick={action('clicked')} outline variant="black">Black</Button>
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
