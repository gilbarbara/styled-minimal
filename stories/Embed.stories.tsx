import * as React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Embed } from '../src';

export default {
  title: 'Components|Embed',
  component: Embed,
  decorators: [withKnobs],
};

export const Basic = () => (
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
);
