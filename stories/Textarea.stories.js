import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number, text } from '@storybook/addon-knobs';

import { sizesOptions } from './helpers/extras';

import { Textarea } from '../src';
import { Example } from './helpers/components';

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
      <Example>
        <Textarea name="i1" placeholder="Your resume" onChange={this.handleChange} valid={i1} />
        <br />
        <Textarea
          name="i2"
          placeholder="Your description"
          onChange={this.handleChange}
          valid={i2}
        />
      </Example>
    );
  }
}

storiesOf('Textarea', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example>
      <Textarea
        defaultValue="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        bg={text('Background Color', '')}
        color={text('Color', '')}
        bordered={boolean('Bordered', true)}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Readonly', false)}
        required={boolean('Required', false)}
        rows={number('Rows', 3)}
        size={select('Size', sizesOptions, 'md')}
      />
    </Example>
  ))
  .add('with validation', () => <Validator />);
