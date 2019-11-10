import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Image } from '../src';

export default {
  title: 'Components|Image',
  component: Image,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Image
    alt={text('Alt', 'Moon')}
    height={text('Height', '')}
    src={text('Source', 'https://assets.imgix.net/unsplash/moon.jpg')}
    width={text('Width', '')}
  />
);
