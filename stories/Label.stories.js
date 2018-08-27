import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { Label } from '../src';
import { backgroundAddon } from './helpers/extras';

storiesOf('Label', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => (
    <Label
      inline={boolean('Inline', false)}
    >
      Far far away, behind the word mountains there live the blind texts.
    </Label>
  )));
