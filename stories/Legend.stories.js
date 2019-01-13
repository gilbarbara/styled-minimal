import React from 'react';
import { storiesOf } from '@storybook/react';

import { Legend } from '../src';
import { Example } from './helpers/components';

storiesOf('Legend', module)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example>
      <Legend>Far far away, behind the word mountains, there live the blind texts.</Legend>
    </Example>
  ));
