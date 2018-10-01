import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { ThemeProvider } from 'styled-components';

import { Button, ButtonGroup } from '../src';
import { sizeOptions, variantOptions } from '../src/utils/options';

import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('ButtonGroup', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [Button, View],
  })(() => (
    <ThemeProvider
      theme={{
        button: {
          borderRadius: {
            xs: '2px',
            sm: '3px',
            md: '4px',
            lg: '6px',
            xl: '8px',
          },
        },
      }}
    >
      <View skipSpacer hideCheckbox>
        <ButtonGroup
          size={select('Size', sizeOptions, 'md')}
          variant={select('Variant', variantOptions, 'primary')}
        >
          <Button>First</Button>
          <Button outline>Second</Button>
          <Button outline>Third</Button>
          <Button outline>Forth</Button>
        </ButtonGroup>
      </View>
    </ThemeProvider>
  )));
