import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { Badge, Button, Heading } from '../src';
import { propsOptions } from '../src/utils/options';
import { SVG, View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Badge', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View>
      <Badge
        outline={boolean('Outline', false)}
        size={select('Size', propsOptions.sizes, 'md')}
        variant={select('Variant', propsOptions.variants, 'primary')}
      >
        {text('Children', 'badge')}
      </Badge>
    </View>
  )))
  .add('with Heading', () => (
    <View direction="column">
      <Heading is="h1" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading is="h2" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading is="h3" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading is="h4" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading is="h5" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading is="h6" gutterBottom>Example heading <Badge>New</Badge></Heading>
    </View>
  ))
  .add('with Button', () => (
    <View direction="column">
      <Button size="xs">Notifications <Badge variant="light">4</Badge></Button>
      <Button size="sm">Notifications <Badge variant="light">4</Badge></Button>
      <Button size="md">Notifications <Badge variant="light">4</Badge></Button>
      <Button size="lg">Notifications <Badge variant="light">4</Badge></Button>
      <Button size="xl">Notifications <Badge variant="light">4</Badge></Button>
    </View>
  ))
  .add('with size', () => (
    <View>
      <Badge size="xs">Badge XS</Badge>
      <Badge size="sm">Badge SM</Badge>
      <Badge size="md">Badge MD</Badge>
      <Badge size="lg">Badge LG</Badge>
      <Badge size="xl">Badge XL</Badge>
    </View>
  ))
  .add('with variant (palette)', () => (
    <View>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="dark">Dark</Badge>
    </View>
  ))
  .add('with variant (colors)', () => (
    <View>
      <Badge variant="white">White</Badge>
      <Badge variant="red">Red</Badge>
      <Badge variant="pink">Pink</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="indigo">Indigo</Badge>
      <Badge variant="blue">Blue</Badge>
      <Badge variant="cyan">Cyan</Badge>
      <Badge variant="teal">Teal</Badge>
      <Badge variant="green">Green</Badge>
      <Badge variant="lime">Lime</Badge>
      <Badge variant="yellow">Yellow</Badge>
      <Badge variant="amber">Amber</Badge>
      <Badge variant="orange">Orange</Badge>
      <Badge variant="brown">Brown</Badge>
      <Badge variant="black">Black</Badge>
    </View>
  ))
  .add('with outline', () => (
    <View>
      <Badge outline variant="primary">Primary</Badge>
      <Badge outline variant="secondary">Secondary</Badge>
      <Badge outline variant="success">Success</Badge>
      <Badge outline variant="warning">Warning</Badge>
      <Badge outline variant="danger">Danger</Badge>
      <Badge outline variant="info">Info</Badge>
      <Badge outline variant="light">Light</Badge>
      <Badge outline variant="dark">Dark</Badge>
      <Badge outline variant="red">Red</Badge>
      <Badge outline variant="pink">Pink</Badge>
      <Badge outline variant="purple">Purple</Badge>
      <Badge outline variant="indigo">Indigo</Badge>
      <Badge outline variant="blue">Blue</Badge>
      <Badge outline variant="cyan">Cyan</Badge>
      <Badge outline variant="teal">Teal</Badge>
      <Badge outline variant="green">Green</Badge>
      <Badge outline variant="lime">Lime</Badge>
      <Badge outline variant="yellow">Yellow</Badge>
      <Badge outline variant="amber">Amber</Badge>
      <Badge outline variant="orange">Orange</Badge>
      <Badge outline variant="brown">Brown</Badge>
      <Badge outline variant="black">Black</Badge>
    </View>
  ))
  .add('with icon', () => (
    <View>
      <Badge>
        <SVG width="10px" height="10px" />{' '}
        <span>Bad</span>
      </Badge>
    </View>
  ));
