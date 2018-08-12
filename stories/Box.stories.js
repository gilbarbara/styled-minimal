import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import { Box } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Box', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View>
      <Box
        fontSize={text('Font Size', '')}
        p={text('Padding', '')}
        m={text('Margin', '')}
        textAlign={select('Text Align', ['left', 'center', 'right'], 'left')}
        width={text('Width', '')}
      >
        {text('Children', 'This is a box')}
      </Box>
    </View>
  )));
