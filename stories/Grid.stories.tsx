import * as React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Box, Grid } from '../src';

export default {
  title: 'Components|Grid',
  component: Grid,
  decorators: [withKnobs],
};

export const Basic = () => {
  const itemHeight = text('Item Height', '100px');
  const itemWidth = text('Item Width', '100px');
  return (
    <Grid
      bg="#f7f7f7"
      gridGap={text('Gap', '')}
      gridTemplateAreas={text('Template Areas', '')}
      gridTemplateColumns={text('Template Columns', 'repeat(3, 120px)')}
      gridTemplateRows={text('Template Rows', '')}
      gridAutoColumns={text('Auto Columns', '')}
      gridAutoRows={text('Auto Rows', '120px')}
      gridAutoFlow={select('Auto Flow', ['row', 'column', 'dense'], 'row')}
      alignItems={select('Align Items', ['start', 'center', 'end', 'stretch'], 'center')}
      justifyItems={select('Justify Items', ['start', 'center', 'end', 'stretch'], 'center')}
      alignContent={select(
        'Align Content',
        ['start', 'center', 'end', 'stretch', 'space-around', 'space-between', 'space-evenly'],
        'space-evenly',
      )}
      justifyContent={select(
        'Justify Content',
        ['start', 'center', 'end', 'stretch', 'space-around', 'space-between', 'space-evenly'],
        'space-evenly',
      )}
      minHeight="100vh"
      width="100%"
    >
      <Box bg="#0800ff" height={itemHeight} width={itemWidth} />
      <Box bg="#c700ff" height={itemHeight} width={itemWidth} />
      <Box bg="#ff0078" height={itemHeight} width={itemWidth} />
      <Box bg="#ff4800" height={itemHeight} width={itemWidth} />
      <Box bg="#f7ff00" height={itemHeight} width={itemWidth} />
      <Box bg="#38ff00" height={itemHeight} width={itemWidth} />
      <Box bg="#00ff87" height={itemHeight} width={itemWidth} />
      <Box bg="#00b7ff" height={itemHeight} width={itemWidth} />
    </Grid>
  );
};
