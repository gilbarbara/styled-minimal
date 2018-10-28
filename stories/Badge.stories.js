import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { sizeOptions, variantOptions } from '../src/utils/options';
import { backgroundAddon, capitalize } from './helpers/extras';

import { Badge, Button, Heading } from '../src';
import { SVG, ViewCheckbox } from './helpers/components';

storiesOf('Badge', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [ViewCheckbox],
  })(() => (
    <ViewCheckbox>
      <Badge
        outline={boolean('Outline', false)}
        size={select('Size', sizeOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text('Children', 'badge')}
      </Badge>
    </ViewCheckbox>
  )))
  .add('with Heading', () => (
    <ViewCheckbox direction="column">
      <div>
        <Heading as="h1">Example heading <Badge>New</Badge></Heading>
        <Heading as="h2">Example heading <Badge>New</Badge></Heading>
        <Heading as="h3">Example heading <Badge>New</Badge></Heading>
        <Heading as="h4">Example heading <Badge>New</Badge></Heading>
        <Heading as="h5">Example heading <Badge>New</Badge></Heading>
        <Heading as="h6">Example heading <Badge>New</Badge></Heading>
      </div>
    </ViewCheckbox>
  ))
  .add('with Button', () => (
    <ViewCheckbox>
      <Button size="xs">Notifications <Badge variant="light">4</Badge></Button>
      <Button size="sm">Notifications <Badge variant="light">4</Badge></Button>
      <Button size="md">Notifications <Badge variant="light">4</Badge></Button>
      <Button size="lg">Notifications <Badge variant="light">4</Badge></Button>
      <Button size="xl">Notifications <Badge variant="light">4</Badge></Button>
    </ViewCheckbox>
  ))
  .add('with size', () => (
    <ViewCheckbox>
      <Badge size="xs">Badge XS</Badge>
      <Badge size="sm">Badge SM</Badge>
      <Badge size="md">Badge MD</Badge>
      <Badge size="lg">Badge LG</Badge>
      <Badge size="xl">Badge XL</Badge>
    </ViewCheckbox>
  ))
  .add('with variant', () => (
    <ViewCheckbox>
      {variantOptions.map((d, i) => (
        <Badge key={i} variant={d}>{capitalize(d)}</Badge>
      ))}
    </ViewCheckbox>
  ))
  .add('with dark mode', () => (
    <ViewCheckbox>
      {variantOptions.map((d, i) => (
        <Badge key={i} variant={d} dark>{capitalize(d)}</Badge>
      ))}
    </ViewCheckbox>
  ))
  .add('with outline', () => (
    <ViewCheckbox>
      {variantOptions.map((d, i) => (
        <Badge key={i} outline variant={d}>{capitalize(d)}</Badge>
      ))}
    </ViewCheckbox>
  ))
  .add('with icon', () => (
    <ViewCheckbox>
      <Badge>
        <SVG width="10px" height="10px" />{' '}
        <span>Bad</span>
      </Badge>
    </ViewCheckbox>
  ));
