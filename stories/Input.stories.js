import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';

import { sizeOptions } from '../src/utils/options';

import { Input } from '../src';
import { View } from './helpers/components';

const ViewInput = ({ children, ...rest }) => (
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
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [ViewInput] },
  })
  .add('default', () => (
    <ViewInput>
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
    </ViewInput>
  ))
  .add('with type', () => (
    <ViewInput>
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
    </ViewInput>
  ), { info: { source: false } })
  .add('with size', () => (
    <ViewInput>
      <Input size="sm" placeholder="sm" /><br />
      <Input size="md" placeholder="md" /><br />
      <Input size="lg" placeholder="lg" />
    </ViewInput>
  ))
  .add('with status', () => (
    <ViewInput>
      <Input disabled placeholder="disabled" /><br />
      <Input placeholder="normal" /><br />
      <Input required placeholder="required" />
    </ViewInput>
  ))
  .add('with validation', () => (
    <ViewInput>
      <Input name="name" placeholder="Your Name" required valid={false} /><br />
      <Input name="name" placeholder="Your Name" required valid={true} />
    </ViewInput>
  ));
