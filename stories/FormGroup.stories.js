import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { Button, FormGroup, Input, Label, Legend, Textarea } from '../src';
import { View } from './helpers/components';

const ViewFormGroup = ({ children, ...rest }) => (
  <View
    direction="column"
    skipSpacer
    style={{ padding: 10 }}
    {...rest}
  >
    {children}
  </View>
);

storiesOf('FormGroup', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [ViewFormGroup, Button, Input, Label, Legend, Textarea] },
  })
  .add('default', () => (
    <ViewFormGroup>
      <FormGroup
        bordered={boolean('Bordered', false)}
        inline={boolean('Inline', false)}
        helpText={text('Help Text', 'Your password must be 8-20 characters long, containing only letters and numbers')}
      >
        <Label>Password</Label>
        <Input type="password" name="password" placeholder="Your Password" />
      </FormGroup>
    </ViewFormGroup>
  ))
  .add('with type', () => (
    <ViewFormGroup>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="Your Name" />
      </FormGroup>
      <FormGroup helpText="Your password must be 8-20 characters long, containing only letters and numbers">
        <Label>Password</Label>
        <Input type="password" name="password" placeholder="Your Password" />
      </FormGroup>
      <FormGroup>
        <Legend>Options</Legend>
        <Label inline><Input type="checkbox" name="options" value="1" />Option 1</Label>
        <Label inline><Input type="checkbox" name="options" value="2" defaultChecked />Option 2</Label>
      </FormGroup>
      <FormGroup>
        <Legend>Settings</Legend>
        <Label inline><Input type="radio" name="settings" value="1" defaultChecked />Option 1</Label>
        <Label inline><Input type="radio" name="settings" value="2" />Option 2</Label>
      </FormGroup>
      <FormGroup
        helpText="Max length: 1024 characters"
      >
        <Label>Comment</Label>
        <Textarea name="comment" placeholder="Your Comment" />
      </FormGroup>
    </ViewFormGroup>
  ))
  .add('with bordered', () => (
    <ViewFormGroup>
      <FormGroup bordered>
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="Your Name" />
      </FormGroup>
      <FormGroup
        bordered
        helpText="Pick a good color"
      >
        <Label>Color</Label>
        <Input type="color" name="color" />
      </FormGroup>
      <FormGroup bordered>
        <Legend>Options</Legend>
        <Label inline><Input type="checkbox" name="options" value="1" />Option 1</Label>
        <Label inline><Input type="checkbox" name="options" value="2" defaultChecked />Option 2</Label>
      </FormGroup>
      <FormGroup bordered>
        <Legend>Settings</Legend>
        <Label inline><Input type="radio" name="settings" value="1" defaultChecked />Option 1</Label>
        <Label inline><Input type="radio" name="settings" value="2" />Option 2</Label>
      </FormGroup>
      <FormGroup
        bordered
        helpText="Max length: 1024 characters"
      >
        <Label>Comment</Label>
        <Textarea name="comment" placeholder="Your Comment" />
      </FormGroup>
    </ViewFormGroup>
  ))
  .add('with inline', () => (
    <ViewFormGroup>
      <FormGroup
        bordered
        inline
      >
        <Legend>Options</Legend>
        <Label inline><Input type="checkbox" name="options" value="1" />Option 1</Label>
        <Label inline><Input type="checkbox" name="options" value="2" defaultChecked />Option 2</Label>
      </FormGroup>
      <FormGroup
        bordered
        inline
      >
        <Legend>Settings</Legend>
        <Label inline><Input type="radio" name="settings" value="1" defaultChecked />Option 1</Label>
        <Label inline><Input type="radio" name="settings" value="2" />Option 2</Label>
      </FormGroup>
      <FormGroup
        bordered
        inline
      >
        <Label inline><Input type="email" size="sm" name="email" placeholder="Your E-mail" /></Label>
        <Label inline><Input type="password" size="sm" name="password" placeholder="Your Password" /></Label>
        <Button type="submit" size="sm">SEND</Button>
      </FormGroup>
      <FormGroup
        bordered
        inline
      >
        <Label inline><Input type="email" name="email" placeholder="Your E-mail" /></Label>
        <Label inline><Input type="password" name="password" placeholder="Your Password" /></Label>
        <Button type="submit">SEND</Button>
      </FormGroup>
      <FormGroup
        bordered
        inline
      >
        <Label inline><Input type="email" size="lg" name="email" placeholder="Your E-mail" /></Label>
        <Label inline><Input type="password" size="lg" name="password" placeholder="Your Password" /></Label>
        <Button type="submit" size="lg">SEND</Button>
      </FormGroup>
    </ViewFormGroup>
  ));
