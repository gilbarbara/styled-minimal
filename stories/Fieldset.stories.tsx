import * as React from 'react';

import { Box, Checkbox, Fieldset, Radio } from '../src';

export default {
  title: 'Components|Fieldset',
  component: Fieldset,
};

export const Basic = () => (
  <Box minWidth={290}>
    <Fieldset label="Options">
      <Checkbox name="1_click" label="1-click Buy" value="on" />
      <Checkbox name="fast_checkout" label="Fast Checkout Buy" value="on" defaultChecked />
    </Fieldset>
    <Fieldset label="Settings">
      <Radio name="settings" label="Standard" value="on" inline />
      <Radio name="settings" label="Express" value="on" defaultChecked inline />
    </Fieldset>
  </Box>
);
