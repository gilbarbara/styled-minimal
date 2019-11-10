import * as React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { Box, Button, Checkbox, FormGroup, Input, Switch, Textarea } from '../src';

export default {
  title: 'Components|FormGroup',
  component: FormGroup,
  decorators: [withKnobs],
};

export const Basic = () => (
  <FormGroup
    frame={boolean('Frame', false)}
    inline={boolean('Inline', false)}
    label={text('Label', 'Password')}
    helpText={text(
      'Help Text',
      'Your password must be 8-20 characters long, containing only letters and numbers',
    )}
  >
    <Input type="password" name="password" placeholder="Your Password" />
  </FormGroup>
);

export const Frame = () => (
  <Box maxWidth={600} width="100%">
    <FormGroup label="Text" frame>
      <Input type="text" name="name" placeholder="Your Name" />
    </FormGroup>
    <FormGroup label="Color" frame helpText="Pick a good color">
      <Input type="color" name="color" />
    </FormGroup>
    <FormGroup label="Checkbox" frame>
      <Checkbox name="options" label="Option 1" value="1" />
      <Checkbox name="options" label="Option 2" value="2" defaultChecked />
    </FormGroup>
    <FormGroup label="Checkbox (inline)" frame>
      <Checkbox name="options2" inline label="Option 1" value="1" variant="red" />
      <Checkbox name="options2" inline label="Option 2" value="2" variant="red" defaultChecked />
    </FormGroup>
    <FormGroup label="Switch" frame>
      <Switch name="try" size="sm" />
    </FormGroup>
    <FormGroup label="Textarea" frame helpText="Max length: 1024 characters">
      <Textarea name="comment" placeholder="Your Comment" />
    </FormGroup>
  </Box>
);

export const Inline = () => (
  <Box maxWidth={600} width="100%">
    <FormGroup inline label={<b>Options</b>}>
      <Checkbox name="options" label="Option 1" value="1" />
      <Checkbox name="options" label="Option 2" value="2" defaultChecked />
    </FormGroup>
    <FormGroup inline label="Login">
      <Input type="email" size="sm" name="email" placeholder="Your E-mail" width={180} />
      <Input type="password" size="sm" name="password" placeholder="Your Password" width={180} />
      <Button type="submit" size="sm">
        SEND
      </Button>
    </FormGroup>
    <FormGroup inline>
      <Input type="email" name="email" placeholder="Your E-mail" />
      <Input type="password" name="password" placeholder="Your Password" />
      <Button type="submit">SEND</Button>
    </FormGroup>
    <FormGroup inline>
      <Input type="email" size="lg" name="email" placeholder="Your E-mail" />
      <Input type="password" size="lg" name="password" placeholder="Your Password" />
      <Button type="submit" size="lg">
        SEND
      </Button>
    </FormGroup>
  </Box>
);
