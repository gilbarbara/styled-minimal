import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import { Code } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Code', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View skipSpacer>
      <Code>
        {text('Children', '<MyComponent variant="green">Some Code</MyComponent>')}
      </Code>
    </View>
  )));
