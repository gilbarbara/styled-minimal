import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/react';

import { backgroundAddon } from './helpers/extras';
import { sizeOptions } from '../src/utils/options';

import { Input } from '../src';
import { View } from './helpers/components';

const InputView = ({ children, ...rest }) => (
  <View
    direction="column"
    skipSpacer
    style={{ padding: 10 }}
    {...rest}
  >
    {children}
  </View>
);

storiesOf('Input', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <InputView>
      <Input
        accept={text('Accept')}
        autoComplete={text('Autocomplete')}
        checked={boolean('Checked', false)}
        disabled={boolean('Disabled', false)}
        maxLength={number('Max Length')}
        name={text('Name')}
        pattern={text('Pattern')}
        placeholder={text('Placeholder', 'Data')}
        readOnly={boolean('Readonly', false)}
        required={boolean('Required', false)}
        size={select('Size', sizeOptions, 'md')}
      />
    </InputView>
  )))
  .add('with type', () => (
    <InputView>
      <Input type="checkbox" /><br />
      <Input type="color" /><br />
      <Input type="date" /><br />
      <Input type="email" placeholder="email" /><br />
      <Input type="file" placeholder="file" /><br />
      <Input type="hidden" placeholder="hidden" /><br />
      <Input type="number" placeholder="number" /><br />
      <Input type="password" placeholder="password" /><br />
      <Input type="radio" placeholder="radio" /><br />
      <Input type="search" placeholder="search" /><br />
      <Input type="tel" placeholder="tel" /><br />
      <Input type="text" placeholder="text" />
    </InputView>
  ))
  .add('with size', () => (
    <InputView>
      <Input size="sm" placeholder="sm" /><br />
      <Input size="md" placeholder="md" /><br />
      <Input size="lg" placeholder="lg" />
    </InputView>
  ))
  .add('with status', () => (
    <InputView>
      <Input disabled placeholder="disabled" /><br />
      <Input placeholder="normal" /><br />
      <Input required placeholder="required" />
    </InputView>
  ))
  .add('with validation', () => (
    <InputView>
      <Input name="name" placeholder="Your Name" required valid={false} /><br />
      <Input name="name" placeholder="Your Name" required valid={true} />
    </InputView>
  ));
