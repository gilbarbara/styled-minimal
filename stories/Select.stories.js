import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs/react';

import { Select } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Select', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => (
    <View hideCheckbox skipCentered>
      <Select
        disabled={boolean('Disabled', false)}
        multiple={boolean('Multiple', false)}
        required={boolean('Required', false)}
        size={number('Size', 1)}
        sizing={select('Sizing', ['sm', 'md', 'lg'], 'md')}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
    </View>
  )));
