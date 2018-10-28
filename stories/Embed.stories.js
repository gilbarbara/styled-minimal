import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs/react';

import { Embed } from '../src';
import { ViewCheckbox } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Embed', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [ViewCheckbox],
  })(() => (
    <ViewCheckbox>
      <Embed ratio={number('Ratio', 9 / 16)}>
        {`<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GNCd_ERZvZM"
          title="Them Changes"
          frameBorder="0"
          allowFullScreen
        />`}
      </Embed>
    </ViewCheckbox>
  )));
