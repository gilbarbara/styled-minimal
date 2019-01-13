import React from 'react';
import { storiesOf } from '@storybook/react';

import { Badge, Button, Group, Text } from '../src';
import { Example } from './helpers/components';

storiesOf('Group', module)
  .addParameters({
    info: { propTablesExclude: [Example, Badge, Button, Text] },
  })
  .add('default', () => (
    <Example skipSpacer>
      <Group>
        <Button>Hey</Button>
        <Badge>1</Badge>
        <Text>Hello</Text>
      </Group>
    </Example>
  ));
