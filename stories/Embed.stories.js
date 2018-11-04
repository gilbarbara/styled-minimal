import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Embed } from '../src';
import { ViewCheckbox } from './helpers/components';

storiesOf('Embed', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [ViewCheckbox] },
  })
  .add('default', () => (
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
  ));
