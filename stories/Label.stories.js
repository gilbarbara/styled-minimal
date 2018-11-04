import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Label } from '../src';
import { View } from './helpers/components';

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View>
      <Label
        inline={boolean('Inline', false)}
      >
        Far far away, behind the word mountains there live the blind texts.
      </Label>
    </View>
  ));
