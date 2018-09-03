import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { Fieldset, Input, Label, Legend } from '../src';
import { backgroundAddon } from './helpers/extras';

storiesOf('Fieldset', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => (
    <Fieldset
      bordered={boolean('Bordered', false)}
      inline={boolean('Inline', false)}
    >
      <Legend>Options</Legend>
      <Label inline><Input type="checkbox" name="1_click" value="on" />1-click Buy</Label>
      <Label inline><Input type="checkbox" name="fast_checkout" value="on" defaultChecked />Fast Checkout</Label>
    </Fieldset>
  )));