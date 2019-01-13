import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';

import { Box } from '../src';
import { Example } from './helpers/components';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example skipSpacer>
      <Box
        bg={text('BG Color', '#ccc')}
        color={text('Color', '#f04')}
        fontSize={text('Font Size', '24px')}
        p={number('Padding', 2)}
        m={text('Margin', '')}
        textAlign={select('Text Align', ['left', 'center', 'right'], 'left')}
        width={text('Width', '450px')}
      >
        {text('Children', 'This is a box')}
      </Box>
    </Example>
  ));
