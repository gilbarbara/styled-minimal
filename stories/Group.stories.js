import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Badge, Button, Group, Text } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Group', module)
  .addDecorator(backgroundAddon)
  .add('default', withInfo({
    propTablesExclude: [Badge, Button, Text, View],
  })(() => (
    <View skipSpacer hideCheckbox>
      <Group>
        <Button>Hey</Button>
        <Badge>1</Badge>
        <Text>Hello</Text>
      </Group>
    </View>
  )));
