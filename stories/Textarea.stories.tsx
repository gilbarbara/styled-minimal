import * as React from 'react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import { Box, Textarea } from '../src';

import { sizesOptions } from './__fixtures__/helpers';

class Validator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      i1: false,
      i2: null,
    };
  }

  handleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (target instanceof HTMLTextAreaElement) {
      this.setState({
        [target.name]: target.value.length > 0,
      });
    }
  };

  render() {
    const { i1, i2 } = this.state;

    return (
      <Box maxWidth={600} width="100%">
        <Textarea name="i1" placeholder="Your resume" onChange={this.handleChange} valid={i1} />
        <br />
        <Textarea
          name="i2"
          placeholder="Your description"
          onChange={this.handleChange}
          valid={i2}
        />
      </Box>
    );
  }
}

export default {
  title: 'Components|Textarea',
  component: Textarea,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Box maxWidth={600} width="100%">
    <Textarea
      defaultValue="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
      disabled={boolean('Disabled', false)}
      name="test"
      readOnly={boolean('Readonly', false)}
      required={boolean('Required', false)}
      rows={number('Rows', 3)}
      size={select('Size', sizesOptions, 'md')}
    />
  </Box>
);

export const Validation = () => <Validator />;
