import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Image } from '../src';
import { Example } from './helpers/components';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example>
      <Image
        alt={text('Alt', 'Moon')}
        height={text('Height')}
        src={text('Source', 'https://assets.imgix.net/unsplash/moon.jpg')}
        width={text('Width')}
      />
    </Example>
  ));
