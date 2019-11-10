import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Label } from '../src';

export default {
  title: 'Components|Label',
  component: Label,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Label inline={boolean('Inline', false)}>
    Far far away, behind the word mountains there live the blind texts.
  </Label>
);
