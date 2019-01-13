import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Fieldset, Input, Label, Legend } from '../src';
import { Example } from './helpers/components';

storiesOf('Fieldset', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example, Input, Label, Legend] },
  })
  .add('default', () => (
    <Example direction="column">
      <div>
        <Fieldset inline={boolean('Inline', false)}>
          <Legend>Options</Legend>
          <Label inline>
            <Input type="checkbox" name="1_click" value="on" />
            1-click Buy
          </Label>
          <Label inline>
            <Input type="checkbox" name="fast_checkout" value="on" defaultChecked />
            Fast Checkout
          </Label>
        </Fieldset>
      </div>
    </Example>
  ));
