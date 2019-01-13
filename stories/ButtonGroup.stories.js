import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Button, ButtonGroup } from '../src';
import { sizesOptions, variantOptions } from './helpers/extras';

import { Example } from './helpers/components';

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      propTablesExclude: [Example, Button],
    },
  })
  .add('default', () => (
    <Example skipSpacer>
      <ButtonGroup
        size={select('Size', sizesOptions, 'md')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        <Button dark={boolean('Dark', false)} outline>
          First
        </Button>
        <Button>Second</Button>
        <Button dark={boolean('Dark', false)} outline>
          Third
        </Button>
        <Button dark={boolean('Dark', false)} outline>
          Forth
        </Button>
      </ButtonGroup>
    </Example>
  ));
