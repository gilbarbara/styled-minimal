import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/react';

import { Input } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Input', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View hideCheckbox>
      <Input
        accept={text('Accept')}
        autocomplete={text('Autocomplete')}
        checked={boolean('Checked', false)}
        disabled={boolean('Disabled', false)}
        maxlength={number('Max Length')}
        name={text('Name')}
        pattern={text('Pattern')}
        placeholder={text('Placeholder', 'Data')}
        readOnly={boolean('Readonly', false)}
        required={boolean('Required', false)}
        size={select('Size', ['sm', 'md', 'lg'], 'md')}
      />
    </View>
  )))
  .add('with type', () => (
    <View direction="column" hideCheckbox skipCentered skipFlex>
      <Input type="checkbox" />
      <Input type="color" />
      <Input type="date" />
      <Input type="email" placeholder="email" />
      <Input type="file" placeholder="file" />
      <Input type="hidden" placeholder="hidden" />
      <Input type="number" placeholder="number" />
      <Input type="password" placeholder="password" />
      <Input type="radio" placeholder="radio" />
      <Input type="search" placeholder="search" />
      <Input type="tel" placeholder="tel" />
      <Input type="text" placeholder="text" />
    </View>
  ))
  .add('with size', () => (
    <View direction="column" hideCheckbox>
      <Input size="sm" placeholder="sm" />
      <Input size="md" placeholder="md" />
      <Input size="lg" placeholder="lg" />
    </View>
  ))
  .add('with status', () => (
    <View direction="column" hideCheckbox>
      <Input disabled placeholder="disabled" />
      <Input placeholder="normal" />
      <Input required placeholder="required" />
    </View>
  ))
  .add('with validation', () => (
    <View direction="column" hideCheckbox skipCentered>
      <Input name="name" placeholder="Your Name" required valid={false} />
      <Input name="name" placeholder="Your Name" required valid={true} />
    </View>
  ));
