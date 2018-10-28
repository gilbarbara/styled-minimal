import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import { Box, Flex } from '../src';
import { ViewCheckbox } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Flex', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [Box, ViewCheckbox],
  })(() => (
    <ViewCheckbox>
      <Flex
        alignItems={select('Align Items', [
          '',
          'flex-start',
          'center',
          'flex-end',
          'baseline',
          'stretch',
        ], 'stretch')}
        alignContent={select('Align Content', [
          '',
          'flex-start',
          'center',
          'flex-end',
          'stretch',
          'space-between',
          'space-around',
        ], 'center')}
        flexDirection={select('Flex Direction', ['row', 'row-reverse', 'column', 'column-reverse'], 'row')}
        flexWrap={select('Flex Wrap', ['nowrap', 'wrap', 'wrap-reverse'], 'wrap')}
        height={text('Height')}
        justifyContent={select('Justify Content', [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly',
        ], 'flex-start')}
        p={text('Padding')}
        m={text('Margin')}
        minHeight={text('Min Height', '300px')}
        width={text('Width')}
      >
        <Box bg="#f04" p={10} textAlign="center" width="40%">Box 40%</Box>
        <Box bg="#0F4" p={30} textAlign="center" width="60%">Box 60%</Box>
        <Box bg="#CCC" p={40} textAlign="center" width="30%">Box 30%</Box>
        <Box bg="#999" p={20} textAlign="center" width="70%">Box 70%</Box>
      </Flex>
    </ViewCheckbox>
  )));
