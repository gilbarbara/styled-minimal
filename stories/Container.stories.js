import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Container } from '../src';
import { Example } from './helpers/components';

storiesOf('Container', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      propTablesExclude: [Example],
      text: 'Content wrapper with responsive padding',
    },
  })
  .add('default', () => (
    <Example>
      <Container
        layout={select('Layout', ['', 'flex', 'fullScreen'])}
        textAlign={select('Text Align', ['', 'left', 'center', 'right', 'justify'])}
        verticalPadding={boolean('Vertical Padding', false)}
        style={{ backgroundColor: '#000' }}
      >
        <div style={{ backgroundColor: '#f04' }}>Content</div>
      </Container>
    </Example>
  ))
  .add('with layout', () => (
    <Example>
      <Container layout="fullScreen" style={{ backgroundColor: '#000' }}>
        <div style={{ backgroundColor: '#f04' }}>Content</div>
      </Container>
    </Example>
  ));
