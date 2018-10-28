import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';

import { Container } from '../src';
import { ViewCheckbox } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Container', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [ViewCheckbox],
    text: 'Content wrapper with responsive padding',
  })(() => (
    <ViewCheckbox>
      <Container
        layout={select('Layout', ['', 'flex', 'fullScreen'])}
        textAlign={select('Text Align', ['', 'left', 'center', 'right', 'justify'])}
        verticalPadding={boolean('Vertical Padding', false)}
        style={{ backgroundColor: '#000' }}
      >
        <div style={{ backgroundColor: '#f04' }}>Content</div>
      </Container>
    </ViewCheckbox>
  )))
  .add('with layout', () => (
    <ViewCheckbox>
      <Container layout="fullScreen" style={{ backgroundColor: '#000' }}>
        <div style={{ backgroundColor: '#f04' }}>Content</div>
      </Container>
    </ViewCheckbox>
  ));
