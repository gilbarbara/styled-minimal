import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';

import { Container } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Container', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
    text: 'Content wrapper with responsive padding',
  })(() => (
    <Container
      layout={select('Layout', ['', 'fullScreen'], '')}
      textAlign={select('Text Align', ['left', 'center', 'right'], '')}
      verticalPadding={boolean('Vertical Padding', false)}
      style={{ backgroundColor: '#000' }}
    >
      <div style={{ backgroundColor: '#f04' }}>Content</div>
    </Container>
  )))
  .add('with layout `fullScreen`', () => (
    <Container layout="fullScreen" style={{ backgroundColor: '#000' }}>
      <div style={{ backgroundColor: '#f04' }}>Content</div>
    </Container>
  ));
