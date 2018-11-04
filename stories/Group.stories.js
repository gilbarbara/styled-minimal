import React from 'react';
import { storiesOf } from '@storybook/react';

import { Badge, Button, Group, Text } from '../src';
import { View } from './helpers/components';

storiesOf('Group', module)
  .addParameters({
    info: { propTablesExclude: [Badge, Button, Text, View] },
  })
  .add('default', () => (
    <View skipSpacer>
      <Group>
        <Button>Hey</Button>
        <Badge>1</Badge>
        <Text>Hello</Text>
      </Group>
    </View>
  ));
