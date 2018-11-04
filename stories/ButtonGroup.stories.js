import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Button, ButtonGroup } from '../src';
import { sizeOptions, variantOptions } from '../src/utils/options';

import { ViewCheckbox } from './helpers/components';

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      propTablesExclude: [ViewCheckbox, Button],
    },
  })
  .add('default', () => (
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
  ));
