import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Box, Text } from '../src';

export default {
  title: 'Components|Text',
  component: Text,
  decorators: [withKnobs],
};

export const Basic = () => {
  const muted = boolean('Muted', false);

  return (
    <Box maxWidth={600}>
      <Text muted={muted}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts.
      </Text>{' '}
      <Text muted={muted}>
        Even the all-powerful Pointing has no control about the blind texts it is an almost
        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
        decided to leave for the far World of Grammar.
      </Text>{' '}
      <Text muted={muted}>
        When she reached the first hills of the Italic Mountains, she had a last Example back on the
        skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
        her own road, the Line Lane.
      </Text>{' '}
      <Text muted={muted}>
        A small river named Duden flows by their place and supplies it with the necessary
        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
        mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost
        unorthographic life One.
      </Text>
    </Box>
  );
};
