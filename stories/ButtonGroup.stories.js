import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';

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
        <Button
          dark={boolean('Dark', false)}
          outline
        >
          First
        </Button>
        <Button>
          Second
        </Button>
        <Button
          dark={boolean('Dark', false)}
          outline
        >
          Third
        </Button>
        <Button
          dark={boolean('Dark', false)}
          outline
        >
          Forth
        </Button>
      </ButtonGroup>
    </ViewCheckbox>
  )));
