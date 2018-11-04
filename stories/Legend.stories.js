import React from 'react';
import { storiesOf } from '@storybook/react';

import { Legend } from '../src';
import { View } from './helpers/components';

storiesOf('Legend', module)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View>
      <Legend>Far far away, behind the word mountains, there live the blind texts.</Legend>
    </View>
  ));
