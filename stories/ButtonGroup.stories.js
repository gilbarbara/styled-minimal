import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import { Button, ButtonGroup } from '../src';
import { propsOptions } from '../src/utils/options';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('ButtonGroup', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [Button, View],
  })(() => (
    <View skipSpacer hideCheckbox>
      <ButtonGroup
        size={select('Size', propsOptions.sizes, 'md')}
        variant={select('Variant', propsOptions.variants, 'primary')}
      >
        <Button>First</Button>
        <Button outline>Second</Button>
        <Button outline>Third</Button>
        <Button outline>Forth</Button>
      </ButtonGroup>
    </View>
  )));
