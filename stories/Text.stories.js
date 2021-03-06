import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '../src';
import { Example } from './helpers/components';

storiesOf('Text', module)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example>
      <div>
        <Text>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </Text>
        <Text>
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
          decided to leave for the far World of Grammar.
        </Text>
        <Text>
          When she reached the first hills of the Italic Mountains, she had a last Example back on
          the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
          subline of her own road, the Line Lane.
        </Text>
        <Text>
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth. Even the all-powerful Pointing has no control about the blind texts it is an
          almost unorthographic life One.
        </Text>
      </div>
    </Example>
  ));
