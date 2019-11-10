import * as React from 'react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import { variants } from './__fixtures__/helpers';

import { Loader } from '../src';

export default {
  title: 'Components|Loader',
  component: Loader,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Loader
    color={text('Color', '')}
    delay={number('Delay', 0)}
    opacity={number('Opacity', 0.7)}
    size={number('Size', 32)}
    speed={number('Speed', 2)}
    variant={select('Variant', variants, 'primary')}
  />
);
