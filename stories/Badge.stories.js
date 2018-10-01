import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { sizeOptions, variantOptions } from '../src/utils/options';
import { backgroundAddon, capitalize } from './helpers/extras';

import { Badge, Button, Heading } from '../src';
import { SVG, View } from './helpers/components';

storiesOf('Badge', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View>
      <Badge
        outline={boolean('Outline', false)}
        size={select('Size', sizeOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text('Children', 'badge')}
      </Badge>
    </View>
  )))
  .add('with Heading', () => (
    <View direction="column">
      <Heading as="h1" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading as="h2" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading as="h3" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading as="h4" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading as="h5" gutterBottom>Example heading <Badge>New</Badge></Heading>
      <Heading as="h6" gutterBottom>Example heading <Badge>New</Badge></Heading>
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
      {variantOptions.map((d, i) => (
        <Badge key={i} variant={d}>{capitalize(d)}</Badge>
      ))}
    </View>
  ))
  .add('with outline', () => (
    <View>
      {variantOptions.map((d, i) => (
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
