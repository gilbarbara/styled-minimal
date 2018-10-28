import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Legend } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Legend', module)
  .addDecorator(backgroundAddon)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View>
      <Legend>Far far away, behind the word mountains, there live the blind texts.</Legend>
    </View>
  )));
