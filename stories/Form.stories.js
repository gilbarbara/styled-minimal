import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { Button, Fieldset, Form, FormGroup, Group, Input, Label, Legend, Select, Switch, Textarea } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Form', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View, Button, Fieldset, FormGroup, Group, Input, Label, Legend, Select, Switch, Textarea],
  })(() => (
    <View direction="column">
      <Form
        bordered={boolean('Bordered', false)}
        onSubmit={e => {
          e.preventDefault();

          const formData = new FormData(e.target);
          action('submitted')([...formData.entries()].reduce((acc, [key, value]) => {
            //eslint-disable-next-line no-nested-ternary
            const data = ['on', 'true'].includes(value) ? true : (value === 'false' ? false : value);

            if (Array.isArray(acc[key])) {
              acc[key].push(data);
            }
            else if (acc[key]) {
              acc[key] = [acc[key], data];
            }
            else {
              acc[key] = data;
            }

            return acc;
          }, {}));
        }}
      >
        <Group>
          <FormGroup width={[1, 1, 1 / 2]}>
            <Label>First Name</Label>
            <Input type="text" name="firstname" placeholder="First Name" />
          </FormGroup>
          <FormGroup width={[1, 1, 1 / 2]}>
            <Label>Last Name</Label>
            <Input type="text" name="lastname" placeholder="Last Name" />
          </FormGroup>
        </Group>
        <Group>
          <FormGroup inline width={[1, 1, 1 / 2]}>
            <Label>E-mail</Label>
            <Input type="email" name="email" placeholder="Your E-mail" />
          </FormGroup>

          <FormGroup inline width={[1, 1, 1 / 2]}>
            <Label>SSN</Label>
            <Input type="text" name="ssn" placeholder="Your SSN" />
          </FormGroup>
        </Group>
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
        <FormGroup>
          <Legend>Preferences</Legend>
          <Label inline><Switch name="private" size="sm" mr={2} value={true} />is private?</Label>
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
