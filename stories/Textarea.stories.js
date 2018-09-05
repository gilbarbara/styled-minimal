import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs/react';

import { Textarea } from '../src';
import { backgroundAddon } from './helpers/extras';

storiesOf('Textarea', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => (
    <Textarea
      defaultValue="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
      disabled={boolean('Disabled', false)}
      readOnly={boolean('Readonly', false)}
      required={boolean('Required', false)}
      rows={number('Rows', 3)}
      size={select('Size', ['sm', 'md', 'lg'], 'md')}
    />
  )));
