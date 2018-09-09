import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';

import { Box } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Box', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View skipSpacer>
      <Box
        bg={text('BG Color', '#eee')}
        color={text('Color', '#f04')}
        fontSize={text('Font Size', '16px')}
        height={text('Height', '100px')}
        p={text('Padding', '8px')}
        m={text('Margin', '')}
        textAlign={select('Text Align', ['left', 'center', 'right'], 'left')}
        width={text('Width', '450px')}
      >
        {text('Children', 'This is a box')}
      </Box>
    </View>
  )));
