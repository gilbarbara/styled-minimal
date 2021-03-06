import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Heading } from '../src';
import { Example } from './helpers/components';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example>
      <Heading
        as={select('As', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}
        level={select('Level', ['', 1, 2, 3, 4, 5, 6])}
        mb={4}
      >
        {text('Children', 'My Super Awesome Title')}
      </Heading>
    </Example>
  ))
  .add('with as', () => (
    <Example>
      <div>
        <Heading as="h1">Heading 1</Heading>
        <Heading as="h2">Heading 2</Heading>
        <Heading as="h3">Heading 3</Heading>
        <Heading as="h4">Heading 4</Heading>
        <Heading as="h5">Heading 5</Heading>
        <Heading as="h6">Heading 6</Heading>
      </div>
    </Example>
  ))
  .add('with size', () => (
    <Example>
      <div>
        <Heading as="h1" level={6}>
          Heading 1 with level 6
        </Heading>
        <Heading as="h2" level={5}>
          Heading 2 with level 5
        </Heading>
        <Heading as="h3" level={4}>
          Heading 3 with level 4
        </Heading>
        <Heading as="h4" level={3}>
          Heading 4 with level 3
        </Heading>
        <Heading as="h5" level={2}>
          Heading 5 with level 2
        </Heading>
        <Heading as="h6" level={1}>
          Heading 6 with level 1
        </Heading>
      </div>
    </Example>
  ));
