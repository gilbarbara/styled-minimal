import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Embed } from '../src';
import { Example } from './helpers/components';

storiesOf('Embed', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example>
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
    </Example>
  ));
