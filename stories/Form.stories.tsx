import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import {
  Button,
  Checkbox,
  Fieldset,
  Flex,
  Form,
  FormGroup,
  Input,
  RadioGroup,
  Select,
  Switch,
  Textarea,
} from '../src';

export default {
  title: 'Components|Form',
  component: Form,
  subcomponents: {
    Button,
    Checkbox,
    Fieldset,
    FormGroup,
    Input,
    RadioGroup,
    Select,
    Switch,
    Textarea,
  },
  decorators: [withKnobs],
};

export const Basic = () => (
  <Form
    frame={boolean('Frame', false)}
    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // @ts-ignore
      const formData = new FormData(e.target);
      action('submitted')(
        [...formData.entries()].reduce((acc, [key, value]) => {
          //eslint-disable-next-line no-nested-ternary
          const data = ['on', 'true'].includes(value) ? true : value === 'false' ? false : value;

          if (Array.isArray(acc[key])) {
            acc[key].push(data);
          } else if (acc[key]) {
            acc[key] = [acc[key], data];
          } else {
            acc[key] = data;
          }

          return acc;
        }, {}),
      );
    }}
  >
    <Flex flexWrap="wrap">
      <FormGroup width={[1, 1, 1 / 2]} label="First Name">
        <Input type="text" name="firstname" placeholder="First Name" required />
      </FormGroup>
      <FormGroup width={[1, 1, 1 / 2]} pl={[0, 0, 2]} label="Last Name">
        <Input type="text" name="lastname" placeholder="Last Name" />
      </FormGroup>
    </Flex>
    <Flex>
      <FormGroup inline width={[1, 1, 1 / 2]} label="E-mail">
        <Input type="email" name="email" placeholder="Your E-mail" />
      </FormGroup>

      <FormGroup label="SSN" inline width={[1, 1, 1 / 2]} pl={[0, 0, 2]}>
        <Input type="text" name="ssn" placeholder="Your SSN" />
      </FormGroup>
    </Flex>
    <FormGroup label="Gender">
      <Select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
    </FormGroup>
    <FormGroup label="Condition">
      <Select name="condition" multiple size={3} defaultValue={['new', 'broken']}>
        <option value="new">New</option>
        <option value="used">Used</option>
        <option value="broken">Broken</option>
        <option value="trash">Pure Trash</option>
      </Select>
    </FormGroup>
    <Fieldset label="Options">
      <Checkbox name="1_click" value="on" inline>
        1-click Buy
      </Checkbox>
      <Checkbox label="Fast Checkout" name="fast_checkout" value="on" inline defaultChecked />
    </Fieldset>
    <RadioGroup
      defaultValue="icon"
      label="Settings"
      name="settings"
      options={[
        {
          label: 'Show Icons',
          value: 'icon',
        },
        {
          label: 'Show Labels',
          value: 'label',
        },
      ]}
      frame
    />
    <FormGroup label="Privacy">
      <Switch name="private" size="sm" checked>
        public
      </Switch>
      <Switch name="published" disabled size="sm" variant="red" checked>
        published - disabled
      </Switch>
    </FormGroup>
    <FormGroup label="Comment" helpText="Max length: 1024 characters">
      <Textarea name="comment" placeholder="Your Comment" />
    </FormGroup>
    <Button type="submit">SEND</Button>{' '}
    <Button type="reset" invert>
      RESET
    </Button>
  </Form>
);
