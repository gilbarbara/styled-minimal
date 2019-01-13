import React from 'react';
import { storiesOf } from '@storybook/react';

import { Code } from '../src';
import { Example } from './helpers/components';

storiesOf('Code', module)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example skipSpacer>
      <Code>{'<MyComponent variant="green">Some Code</MyComponent>'}</Code>
    </Example>
  ));
