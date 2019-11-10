import * as React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Badge, Button, Heading } from '../src';

import { capitalize, variants } from './__fixtures__/helpers';

export default {
  title: 'Components|Badge',
  component: Badge,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Badge
    dot={boolean('Dot', false)}
    dark={boolean('Dark', false)}
    invert={boolean('Invert', false)}
    variant={select('Variant', variants, 'primary')}
  >
    {text('Children', '12')}
  </Badge>
);

export const Variants = () => (
  <React.Fragment>
    {variants
      .filter(d => !d.startsWith('__'))
      .map(d => (
        <Badge key={d} variant={d}>
          {capitalize(d)}
        </Badge>
      ))}
  </React.Fragment>
);

export const Invert = () => (
  <React.Fragment>
    {variants
      .filter(d => !d.startsWith('__'))
      .map(d => (
        <Badge key={d} invert variant={d}>
          {capitalize(d)}
        </Badge>
      ))}
  </React.Fragment>
);

export const DarkMode = () => (
  <React.Fragment>
    {variants
      .filter(d => !d.startsWith('__'))
      .map(d => (
        <Badge key={d} variant={d} dark>
          {capitalize(d)}
        </Badge>
      ))}
  </React.Fragment>
);

export const WithCompoments = () => (
  <div>
    <Heading as="h1">
      Example heading <Badge variant="red">New</Badge>
    </Heading>

    <br />
    <Button>
      Notifications <Badge variant="light">4</Badge>
    </Button>
  </div>
);
