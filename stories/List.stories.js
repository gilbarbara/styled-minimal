import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';

import { sizesOptions } from '../src/utils/system';

import { Box, Heading, List, Paragraph } from '../src';
import { View } from './helpers/components';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [View, Box, Heading, Paragraph] },
  })
  .add('default', () => (
    <View>
      <Box width={450}>
        <List
          as={select('Element', ['ul', 'ol'], 'ul')}
          bordered={boolean('Border', true)}
          inline={boolean('Inline', false)}
          reversed={boolean('Reversed (OL)', false)}
          start={number('Start', 1)}
          styleType={select(
            'List Style (UL)',
            ['disc', 'circle', 'square', 'decimal', 'lower-alpha', 'none'],
            'none',
          )}
          size={select('Size', sizesOptions, 'md')}
          type={select('List Type (OL)', ['1', 'a', 'A', 'i', 'I'], '1')}
        >
          <li>
            <Heading as="h5" mb={1}>
              Cras justo odio
            </Heading>
            <Paragraph>
              It is a paradisematic country, in which roasted parts of sentences fly into your
              mouth.
            </Paragraph>
          </li>
          <li>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </li>
          <li>Morbi leo risus</li>
          <li>Porta ac consectetur ac</li>
          <li>Vestibulum at eros</li>
        </List>
      </Box>
    </View>
  ))
  .add('with OL', () => (
    <View>
      <Box width={450}>
        <List as="ol" type="I">
          <li>Cras justo odio</li>
          <li>Dapibus ac facilisis in</li>
          <li>Morbi leo risus</li>
          <li>Porta ac consectetur ac</li>
          <li>Vestibulum at eros</li>
        </List>
      </Box>
    </View>
  ))
  .add('with size', () => (
    <View style={{ alignItems: 'flex-start' }}>
      <Box width={200}>
        <Heading as="h5" mb={1}>
          SM
        </Heading>
        <List bordered size="sm">
          <li>Cras justo odio</li>
          <li>Dapibus ac facilisis in</li>
          <li>Morbi leo risus</li>
          <li>Porta ac consectetur ac</li>
          <li>Vestibulum at eros</li>
        </List>
      </Box>
      <Box width={200}>
        <Heading as="h5" mb={1}>
          MD
        </Heading>
        <List bordered size="md">
          <li>Cras justo odio</li>
          <li>Dapibus ac facilisis in</li>
          <li>Morbi leo risus</li>
          <li>Porta ac consectetur ac</li>
          <li>Vestibulum at eros</li>
        </List>
      </Box>
      <Box width={200}>
        <Heading as="h5" mb={1}>
          LG
        </Heading>
        <List bordered size="lg">
          <li>Cras justo odio</li>
          <li>Dapibus ac facilisis in</li>
          <li>Morbi leo risus</li>
          <li>Porta ac consectetur ac</li>
          <li>Vestibulum at eros</li>
        </List>
      </Box>
    </View>
  ));
