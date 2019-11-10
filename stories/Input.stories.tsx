import * as React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { Box, Heading, Input } from '../src';

import { sizesOptions } from './__fixtures__/helpers';

class Validator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      i1: false,
      i2: true,
      i3: null,
    };
  }

  // @ts-ignore
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value.length > 0,
    });
  };

  render() {
    const { i1, i2, i3 } = this.state;

    return (
      <Box maxWidth={600} width="100%">
        <Input name="i1" placeholder="valid === false" onChange={this.handleChange} valid={i1} />
        <br />
        <Input name="i1" placeholder="valid === true" onChange={this.handleChange} valid={i2} />
        <br />
        <Input name="i2" placeholder="Valid === null" onChange={this.handleChange} valid={i3} />
      </Box>
    );
  }
}

export default {
  title: 'Components|Input',
  component: Input,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Box maxWidth={600} width="100%">
    <Input
      disabled={boolean('Disabled', false)}
      name={text('Name', '')}
      placeholder={text('Placeholder', 'Data')}
      readOnly={boolean('Readonly', false)}
      required={boolean('Required', false)}
      size={select('Size', sizesOptions, 'md')}
    />
  </Box>
);

export const Types = () => (
  <Box maxWidth={600} width="100%">
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        Color
      </Heading>
      <Input type="color" />
    </Box>
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        Date
      </Heading>
      <Input type="date" />
    </Box>
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        Email
      </Heading>
      <Input type="email" placeholder="email" />
    </Box>
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        File
      </Heading>
      <Input type="file" placeholder="file" />
    </Box>
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        Number
      </Heading>
      <Input type="number" placeholder="number" />
    </Box>
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        Password
      </Heading>
      <Input type="password" placeholder="password" />
    </Box>
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        Search
      </Heading>
      <Input type="search" placeholder="search" />
    </Box>
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        Tel
      </Heading>
      <Input type="tel" placeholder="tel" />
    </Box>
    <Box mb={20}>
      <Heading as="h6" mb={1}>
        Text
      </Heading>
      <Input type="text" placeholder="text" />
    </Box>
  </Box>
);

export const Sizes = () => (
  <Box maxWidth={600} width="100%">
    <Input size="sm" placeholder="sm" />
    <br />
    <Input size="md" placeholder="md" defaultChecked />
    <br />
    <Input size="lg" placeholder="lg" />
  </Box>
);

export const Statuses = () => (
  <Box maxWidth={600} width="100%">
    <Input disabled placeholder="disabled" />
    <br />
    <Input disabled placeholder="disabled" value="disabled with value" />
    <br />
    <Input placeholder="normal" />
    <br />
    <Input placeholder="normal" value="normal with value" />
    <br />
    <Input required placeholder="required" />
  </Box>
);

export const Validation = () => <Validator />;
