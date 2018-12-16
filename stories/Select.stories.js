import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import { sizesOptions } from '../src/utils/system';

import { Select } from '../src';
import { View } from './helpers/components';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View>
      <Select
        disabled={boolean('Disabled', false)}
        multiple={boolean('Multiple', false)}
        required={boolean('Required', false)}
        size={number('Size', 1)}
        sizing={select('Sizing', sizesOptions, 'md')}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
    </View>
  ));
