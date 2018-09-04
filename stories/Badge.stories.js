import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { Badge, Button, Heading } from '../src';
import { propsOptions } from '../src/utils/options';
import { SVG, View } from './helpers/components';
import { backgroundAddon, capitalize } from './helpers/extras';

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
  .add('with variant', () => (
    <View>
      {propsOptions.variants.map((d, i) => (
        <Badge key={i} variant={d}>{capitalize(d)}</Badge>
      ))}
    </View>
  ))
  .add('with outline', () => (
    <View>
      {propsOptions.variants.map((d, i) => (
        <Badge key={i} outline variant={d}>{capitalize(d)}</Badge>
      ))}
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
