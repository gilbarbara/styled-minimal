import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';

import { Container } from '../src';
import { View } from './utils/components';
import { backgroundAddon } from './utils/extras';

storiesOf('Container', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
    text: 'Content wrapper with responsive padding',
  })(() => (
    <Container
      layout={select('Layout', ['', 'fullScreen'], '')}
      verticalPadding={boolean('Vertical Padding', false)}
      style={{ backgroundColor: '#000' }}
    >
      <div style={{ backgroundColor: '#f04', padding: '30px 0' }}>{text('Children', 'Click here now')}</div>
    </Container>
  )))
  .add('with layout `fullScreen`', () => (
    <Container layout="fullScreen" style={{ backgroundColor: '#000' }}>
      <div style={{ backgroundColor: '#f04' }}>Content</div>
    </Container>
  ));
