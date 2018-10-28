import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import { Button, ButtonGroup } from '../src';
import { sizeOptions, variantOptions } from '../src/utils/options';

import { ViewCheckbox } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('ButtonGroup', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [Button, ViewCheckbox],
  })(() => (
    <ViewCheckbox skipSpacer>
      <ButtonGroup
        size={select('Size', sizeOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        <Button>First</Button>
        <Button outline>Second</Button>
        <Button outline>Third</Button>
        <Button outline>Forth</Button>
      </ButtonGroup>
    </ViewCheckbox>
  )));
