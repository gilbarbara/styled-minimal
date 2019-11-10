import * as React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Link } from '../src';

import { variants } from './__fixtures__/helpers';

export default {
  title: 'Components|Link',
  component: Link,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Link
    href={text('HREF', 'https://unknown-link.com')}
    target={text('Target', '')}
    variant={select('Variant', variants, 'primary')}
  >
    {text('Children', 'Moon')}
  </Link>
);
