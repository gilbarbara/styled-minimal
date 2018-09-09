import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { Label } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Label', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => (
    <View hideCheckbox skipCentered skipFlex skipSpacer>
      <Label
        inline={boolean('Inline', false)}
      >
        Far far away, behind the word mountains there live the blind texts.
      </Label>
    </View>
  )));
