import React from 'react';
import { storiesOf } from '@storybook/react';

import { Code } from '../src';
import { View } from './helpers/components';

storiesOf('Code', module)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View skipSpacer>
      <Code>{'<MyComponent variant="green">Some Code</MyComponent>'}</Code>
    </View>
  ));
