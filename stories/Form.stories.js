import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { Button, Fieldset, Form, FormGroup, Input, Label, Legend, Select, Textarea } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Form', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View, Button, Fieldset, FormGroup, Input, Label, Legend, Select, Textarea],
  })(() => (
    <View direction="column" hideCheckbox skipCentered skipFlex>
      <Form
        bordered={boolean('Bordered', true)}
        onSubmit={e => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = [...formData.entries()].reduce((acc, [key, value]) => {
            const content = value === 'on' ? true : value;
            if (Array.isArray(acc[key])) {
              acc[key].push(content);
            }
            else if (acc[key]) {
              acc[key] = [acc[key], content];
            }
            else {
              acc[key] = value === 'on' ? true : value;
            }

            return acc;
          }, {});
          action('submitted')(data);
        }}
      >
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="name" placeholder="Your Name" />
        </FormGroup>
        <FormGroup inline bordered>
          <Label>E-mail</Label>
          <Input type="email" name="email" placeholder="Your E-mail" />
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <Select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Condition</Label>
          <Select name="condition" multiple size={3}>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="broken">Broken</option>
            <option value="trash">Pure Trash</option>
          </Select>
        </FormGroup>
        <Fieldset>
          <Legend>Options</Legend>
          <Label inline><Input type="checkbox" name="1_click" value="on" />1-click Buy</Label>
          <Label inline><Input type="checkbox" name="fast_checkout" value="on" defaultChecked />Fast Checkout</Label>
        </Fieldset>
        <FormGroup>
          <Legend>Settings</Legend>
          <Label inline><Input type="radio" name="settings" value="1" defaultChecked />Show Icons</Label>
          <Label inline><Input type="radio" name="settings" value="2" />Show Label</Label>
        </FormGroup>
        <FormGroup
          helpText="Max length: 1024 characters"
        >
          <Label>Comment</Label>
          <Textarea name="comment" placeholder="Your Comment" />
        </FormGroup>
        <Button type="submit">SEND</Button>{' '}
        <Button type="reset" outline>RESET</Button>
      </Form>
    </View>
  )));
