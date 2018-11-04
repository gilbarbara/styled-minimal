import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import { sizeOptions } from '../src/utils/options';

import { Textarea } from '../src';
import { ViewCheckbox } from './helpers/components';

storiesOf('Textarea', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [ViewCheckbox] },
  })
  .add('default', () => (
    <ViewCheckbox>
      <Textarea
        defaultValue="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Readonly', false)}
        required={boolean('Required', false)}
        rows={number('Rows', 3)}
        size={select('Size', sizeOptions, 'md')}
      />
    </ViewCheckbox>
  ));
