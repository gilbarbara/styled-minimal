import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Badge, Button, Heading } from '../src';

import { SVG, Example } from './helpers/components';
import { capitalize, sizesOptions, variantOptions } from './helpers/extras';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example, Heading, SVG] },
  })
  .add('default', () => (
    <Example>
      <Badge
        bordered={boolean('Bordered', false)}
        dark={boolean('Dark', false)}
        size={select('Size', sizesOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text('Children', 'badge')}
      </Badge>
    </Example>
  ))
  .add('with Heading', () => (
    <Example direction="column">
      <div>
        <Heading as="h1">
          Example heading <Badge>New</Badge>
        </Heading>
        <Heading as="h2">
          Example heading <Badge>New</Badge>
        </Heading>
        <Heading as="h3">
          Example heading <Badge>New</Badge>
        </Heading>
        <Heading as="h4">
          Example heading <Badge>New</Badge>
        </Heading>
        <Heading as="h5">
          Example heading <Badge>New</Badge>
        </Heading>
        <Heading as="h6">
          Example heading <Badge>New</Badge>
        </Heading>
      </div>
    </Example>
  ))
  .add('with Button', () => (
    <Example>
      <Button size="xs">
        Notifications <Badge variant="light">4</Badge>
      </Button>
      <Button size="sm">
        Notifications <Badge variant="light">4</Badge>
      </Button>
      <Button size="md">
        Notifications <Badge variant="light">4</Badge>
      </Button>
      <Button size="lg">
        Notifications <Badge variant="light">4</Badge>
      </Button>
      <Button size="xl">
        Notifications <Badge variant="light">4</Badge>
      </Button>
    </Example>
  ))
  .add('with size', () => (
    <Example>
      <Badge size="xs">Badge XS</Badge>
      <Badge size="sm">Badge SM</Badge>
      <Badge size="md">Badge MD</Badge>
      <Badge size="lg">Badge LG</Badge>
      <Badge size="xl">Badge XL</Badge>
    </Example>
  ))
  .add('with variant', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Badge key={i} variant={d}>
          {capitalize(d)}
        </Badge>
      ))}
    </Example>
  ))
  .add('with dark mode', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Badge key={i} variant={d} dark>
          {capitalize(d)}
        </Badge>
      ))}
    </Example>
  ))
  .add('with border', () => (
    <Example>
      {variantOptions.map((d, i) => (
        <Badge key={i} bordered variant={d}>
          {capitalize(d)}
        </Badge>
      ))}
    </Example>
  ))
  .add('with icon', () => (
    <Example>
      <Badge>
        <SVG width="10px" height="10px" /> <span>Bad</span>
      </Badge>
    </Example>
  ));
