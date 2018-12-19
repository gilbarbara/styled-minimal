import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number, text } from '@storybook/addon-knobs';

import { sizesOptions } from '../src/utils/system';

import { Select } from '../src';
import { View } from './helpers/components';

class Validator extends React.Component {
  state = {
    i1: false,
    i2: null,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value.length > 0,
    });
  };

  render() {
    const { i1, i2 } = this.state;

    return (
      <View>
        <Select name="i1" placeholder="Your Name" onChange={this.handleChange} valid={i1}>
          <option value="">--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
        <br />
        <Select name="i2" placeholder="Your Email" onChange={this.handleChange} valid={i2}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
      </View>
    );
  }
}

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View>
      <Select
        bg={text('Background Color', '')}
        color={text('Color', '')}
        bordered={boolean('Bordered', true)}
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
  ))
  .add('with validation', () => <Validator />);
