import * as React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Box, Select } from '../src';

import { sizesOptions } from './__fixtures__/helpers';

class Validator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      i1: false,
      i2: null,
    };
  }

  handleChange = ({ target }: any) => {
    this.setState({
      [target.name]: target.value.length > 0,
    });
  };

  render() {
    const { i1, i2 } = this.state;

    return (
      <Box maxWidth={600} width="100%">
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
      </Box>
    );
  }
}

export default {
  title: 'Components|Select',
  component: Select,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Box maxWidth={600} width="100%">
    <Select
      disabled={boolean('Disabled', false)}
      multiple={boolean('Multiple', false)}
      required={boolean('Required', false)}
      sizing={select('Sizing', sizesOptions, 'md')}
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </Select>
  </Box>
);

export const WithValidation = () => <Validator />;
